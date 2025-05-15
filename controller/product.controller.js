const ProductServices = require('../services/product.service');
const productServices = new ProductServices();

// exports.addProduct = async(req,res) => {
//     try {
//         let product = await productServices.getProduct({name : req.body.name});

//         if(product) {
//             return res.status(400).json({message : `Product already found `})
//         }

//         if(req.file) {
//             req.body.image = req.file.path // store in folder
//             // req.body.image = req.file.buffer  // store with buffer
//         }
        
//         product = await productServices.addProduct({...req.body});

//         res.status(201).json({product,message : `Product added successfully..........`});

//     } catch (error) {
//         console.log(error);
//         res.status(500).json({message : `Internal server error...${console.error()}`});
//     }
// };

exports.addProduct = async (req, res) => {
    try {
        let product = await productServices.getProduct({ name: req.body.name });

        if (product) {
            return res.status(400).json({ message: `Product already found` });
        }

        // Handle file uploads
        if (req.files?.image?.length > 0) {
            req.body.image = req.files.image[0].path;
        }

        if (req.files?.sideImages?.length > 0) {
            req.body.sideImages = req.files.sideImages.map(file => file.path);
        }

        product = await productServices.addProduct({ ...req.body });

        res.status(201).json({ product, message: `Product added successfully.` });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal server error...${error.message}` });
    }
};


exports.getProduct = async(req,res) => {
    try {
        let product = await productServices.getProductById(req.query.productId);

        if(!product) {
            return res.status(404).json({message : `Product is not found...........`});
        }

        res.status(200).json(product);

    } catch (error) {
        console.log(error);
        return res.status(500).json({message : `Internal server error.......${console.error()}`});
    }
};

exports.getAllProduct = async(req,res) => {
    try {
        let products = await productServices.getAllProducts({isDelete : false});

        if(!products) {
            return res.status(404).json({message : `Product is not found.......`});
        }

        res.status(200).json(products);

    } catch (error) {
        console.log(error);
        res.status(500).json({message : `Internal server error.........${console.error()}`});
    }
};

exports.updateProduct = async(req,res) => {
    try {
        let product = await productServices.getProductById(req.query.productId);

        if(!product) {
            return res.status(404).json({message : `Product is not found..........`});
        }

        product = await productServices.updateProduct(product._id,{...req.body});

        res.status(201).json({message : `product update successfully.........`,product});

    } catch (error) {
        console.log(error);
        res.status(500).json({message : `Internal server error.....${console.error()}`});
    }
};

exports.deleteProduct = async(req,res) => {
    try {
        let product = await productServices.getProductById(req.query.productId);

        if(!product) {
            return res.status(404).json({message : `product is already not found...........`});
        }

        product = await productServices.deleteProduct(product._id);

        res.status(201).json({product,message : `Product delete successfully..........`});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message : `Internal server error.........${console.error()}`});
    }
}