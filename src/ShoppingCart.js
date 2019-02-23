class ShoppingCart {
    constructor() {
        this.items = [];
      }

    getItems() {
        return this.items;
    }

    addItem(itemName, quantity, price) {
        this.items.push({
            name: itemName,
            quantity,
            pricePerUnit: price
        })
    }

    clear() {
        this.items = [];
    }

    total() {
     return this.items.reduce((accumulator, currentItem) => {
            const sum = currentItem.pricePerUnit * currentItem.quantity
            return accumulator + sum;
        },0)  
    }
}


module.exports = ShoppingCart;