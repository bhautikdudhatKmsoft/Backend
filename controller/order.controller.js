const OrderServices = require('../services/order.service');
const orderServices = new OrderServices();
const UserSevices = require('../services/user.service');
const userServices = new UserSevices();
const ProductServices = require('../services/product.service');
const productServices = new ProductServices();

exports.addOrder = async(req,res) => {
    try {

        const { user, item } = req.body;

        const existingUser = await userServices.getUserById(user);
        if (!existingUser || existingUser.isDelete) {
            return res.status(404).json({ message: 'User not found' });
        }

        const product = await productServices.getProductById(item);
        if (!product || product.isDelete) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const order = await orderServices.addOrder(req.body);
        return res.status(201).json({order,message : `Order create successfully............`});

    } catch (error) {
        console.log(error);
        res.status(500).json({message : `Internal server error......${console.error()}`});
    }
};

exports.getOrder = async(req,res) => {
    try {
        let order = await orderServices.getOrderById(req.query.orderId);

        if(!order) {
            return res.status(404).json({message : `Order is not found........`});
        }

        res.status(200).json(order);

    } catch (error) {
        console.log(error);
        res.status(500).json({message : `Internal server error ..........${console.error()}`});
    }
};

exports.getAllOrder = async(req,res) => {
    try {
        let orders = await orderServices.getAllOrders({isDelete : false});

        if(!orders) {
            return res.status(404).json({message : `Orders does not exist.........`});
        }

        res.status(200).json(orders);

    } catch (error) {
        console.log(error);
        return res.status(500).json({message : `Internal server error...........${console.error()}`});
    }
};

exports.updateOrder = async(req,res) => {
    try {
        let order = await orderServices.getOrderById(req.query.orderId);

        if(!order) {
            return res.status(404).json({message: `Order is not found.....`});
        }

        order = await orderServices.updateOrder(order._id,{...req.body});

        res.status(201).json({message : `Order update succesfully........`,order});

    } catch (error) {
        console.log(error);
        res.status(500).json({message : `Internal server error.......${console.error()}`});
    }
};

exports.deleteOrder = async(req,res) => {
    try {
        let order = await orderServices.getOrderById(req.query.orderId);

        if(!order) {
            return res.status(404).json({message : `Order is not found................`});
        }

        order = await orderServices.deleteOrder(order._id);

        res.status(200).json({order,message : `Order delete succesfully.......`});

    } catch (error) {
        console.log(error);
        res.status(500).json({message : `Internal server error.......${console.error()}`});
    }
};

exports.getOrdersOfUser = async(req,res) => {
    try {
        const { userId } = req.query;

        if (!userId) {
            return res.status(400).json({ message: "User ID is required" });
        }

        const orders = await orderServices.getAllOrders({ user: userId });

        if (!orders || orders.length === 0) {
            return res.status(404).json({ message: 'No orders found for this user' });
        }
        
        return res.status(200).json({ message: 'Orders retrieved successfully', data: orders });
    } catch (error) {
        console.log(error);
        res.status(500).json({message : `Internal server error........${console.error()}`});
    }
}