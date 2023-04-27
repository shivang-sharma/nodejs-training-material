let dataStore = {
    users: [],
    products: [
        {
            "id": 101,
            "pName": "Product1",
            "price": 210,
            "stock": 4
        },
        {
            "id": 102,
            "pName": "Product2",
            "price": 410,
            "stock": 10
        }
        
    ],
    cart: {
        items: [],
        totalAmount: 0
    },
    addUser: function(fName, lName, email) {
        let id = parseInt(Math.random()*100);
        const user = {"id": id, "fname": fName, "lname":lName, "email":email}
        this.users.push(user);
        return user;
    },
    getAllUsers: function() {
        return this.users;
    },
    getUser: function(id) {
        const user = this.users.find((value, index) => {
            if (value.id === parseInt(id)) {
                return true;
            }
            return false;
        });
        if (!user) {
            return "User not found"
        }
        return user;
    },
    deleteUser: function(id) {
        for (var i=0; i<this.users.length; i++) {
            if (this.users[i].id == parseInt(id)) {
                return {
                    "message": "User deleted successfully",
                    "user": this.users.splice(i, 1)
                }
            }
        }
        return {"message": "User does not exits"};
    },
    getAllProducts: function() {
        return this.products
    },
    getProduct: function(id) {
        const product = this.products.find((value, index) => {
            if (value.id === parseInt(id)) {
                return true;
            }
            return false;
        });
        return product;
    },
    getCart: function (){
        return this.cart;
    },
    addItemToCart: function(id, qty) {
        const product = this.getProduct(id);
        if (product && product.stock >= qty) {
            let itemInCart = this.cart.items.find((value, index) => {
                if (value.id == parseInt(id)){ 
                    return true;
                }
                return false;
            });
            if (itemInCart) {
                itemInCart.qty += qty;
            } else {
                let item = {
                    "id": id,
                    "qty": qty,
                    "price": product.price
                }
                this.cart.items.push(item);
            }
            this.cart.totalAmount += qty * product.price;
            product.stock -= qty;
        } else {
            return "Product is not in stock";
        }
        return this.getCart();
    },
    removeItemFromCart: function(id) {
        for (var i=0; i<this.cart.items.length; i++) {
            if (this.cart.items[i].id == parseInt(id)) {
                if (this.cart.items[i].qty > 1) {
                    this.cart.totalAmount -= this.cart.items[i].price
                    this.cart.items[i].qty -= 1;
                } else {
                    this.cart.totalAmount -= this.cart.items[i].price
                    this.cart.items.splice(i, 1);
                }
                return {
                    "message": "Item removed from cart successfully",
                    "cart": this.cart
                }
            }
        }
        return {
                "message": "Item does not exits in cart",
                "cart": this.cart
            };
    }
}
module.exports = dataStore