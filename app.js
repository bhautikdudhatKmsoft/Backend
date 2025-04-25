require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(express.json());

async function main() {
    await mongoose.connect(process.env.MONGODB);
}

main()
.then(() => console.log('Db is connected......'))
.catch(err => console.log(err.message));

const route = require('./routes/index.routes');
app.use('/api',route);

app.listen(port, () => {
    console.log(`Start server at http://localhost:${port}`);
})