
// store into upload folder 

// const multer = require('multer');
// const fs = require('fs');
// const path = require('path');

// const uploadDirectory = path.join(__dirname, '..', 'uploads');

// if (!fs.existsSync(uploadDirectory)) {
//     fs.mkdirSync(uploadDirectory, { recursive: true });
// }

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, uploadDirectory);
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + '-' + file.originalname);
//     }
// });

// const upload = multer({
//     storage: storage,
//     limits: { fileSize: 5 * 1024 * 1024 },
// }).single('image');

// module.exports = upload;


// || using to store with buffer ||

// const multer = require('multer');

// const storage = multer.memoryStorage();

// const upload = multer({
//     storage: storage,
//     limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB limit
// }).single('image');

// module.exports = upload;

const multer = require('multer');
const fs = require('fs');
const path = require('path');

const uploadDirectory = path.join(__dirname, '..', 'uploads');

// Ensure upload directory exists
if (!fs.existsSync(uploadDirectory)) {
    fs.mkdirSync(uploadDirectory, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDirectory);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

// Multer configuration without file size limit
const upload = multer({
    storage: storage
}).fields([
    { name: 'image', maxCount: 1 },
    { name: 'sideImages', maxCount: 5 }
]);

module.exports = upload;
