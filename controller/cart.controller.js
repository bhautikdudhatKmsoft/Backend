const CartServices = require('../services/cart.service');
const cartServices = new CartServices();
const UserSerivces = require('../services/user.service');
const userServices = new UserSerivces();
const ProductServices = require('../services/product.service');
const productServices = new ProductServices();

exports.addToCart = async(req,res) => {
    try {

        const user = await userServices.getUserById(req.body.user);

        if(!user) {
            return res.status(404).json({message : `User is not found.........`});
        }

        const product = await productServices.getProductById(req.body.cartItem);
        if(!product) {
            return res.status(404).json({message : `Product is not found.......`});
        }

        let cart = await cartServices.getCart(req.body);

        if(cart) {
            return res.status(400).json({message : `Cart is already found......`});
        }

        cart = await cartServices.addToCart(req.body);
        res.status(201).json({cart,message : `Cart added successfully...........`});

    } catch (error) {
        console.log(error);
        res.status(500).json({message : `Internal server error.......${console.error()}`});
    }
};

exports.getCart = async(req,res) => {
    try {
        let cart = await cartServices.getCartById(req.query.cartId);

        if(!cart) {
            return res.status(404).json({message : `Cart is not fouind........`});
        }

        res.status(200).json(cart);

    } catch (error) {
        console.log(error);
        res.status(500).json({message : `Internal server error.......${console.error()}`});
    }
};

exports.getAlllCarts = async(req,res) => {
    try {
        let carts = await cartServices.getAllCarts({isDelete : false});

        if(!carts) {
            return res.status(404).json({message : `carts is not found.....`});
        }

        res.status(200).json(carts);

    } catch (error) {
        console.log(error);
        res.status(500).json({message : `Internal server error........${console.error()}`});
    }
};

exports.getAllCartsOfUser = async (req,res) => {
    try {
        let { userId } = req.query;

        if(!userId) {
            return res.status(404).json({message : `UserId is required..`});
        }

        let carts = await cartServices.getAllCarts({user : userId});

        if(!carts) {
            return res.status(404).json({message : `Not any cart item is found for this user..`});
        }

        res.status(200).json({message : 'Get all cart of this user successfully.......',carts});

    } catch (error) {
        console.log(error);
        res.status(500).json({message : `Internal server error..........${console.error()}`});
    }
}

exports.updateCart = async(req,res) => {
    try {
        let cart = await cartServices.getCartById(req.query.cartId);

        if(!cart) {
            return res.status(404).json({message : `Cart item is not found.....`});
        }

        cart = await cartServices.updateCart(cart._id,{...req.body});

        res.status(201).json({message : `cart update successfully.....`,cart});

    } catch (error) {
        console.log(error);
        res.status(500).json({message : `Internal server error......${console.error()}`});
    }
};

exports.deleteCart = async(req,res) => {
    try {
        let cart = await cartServices.getCartById(req.query.cartId);

        if(!cart) {
            return res.status(404).json({message : `cart item is not found......`});
        }

        cart = await cartServices.deleteCart(cart._id);
        res.status(200).json({cart,message : `Cart delete successfully........`});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message : `Internal server error......${console.error()}`});
    }
}