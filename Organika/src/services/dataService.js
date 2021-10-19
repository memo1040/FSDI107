
var catalog = [
    {
        _id: "45678909876545678",
        price : 2.00,
        stock : 10,                
        title : "Apple",
        image : "food.png",
        discount : 1,
        category : "Fruit",
    },
    {
        _id: "2345678987654345678",
        price : 1.50,
        stock : 18,                
        title : "Banana",
        image : "food.png",
        discount : 0,
        category : "Fruit",
    },
    {
        _id: "3456789876543456789",
        price : 5.00,
        stock : 6,                
        title : "Bread",
        image : "food.png",
        discount : 2,
        category : "Bread & Cereals",
    },
    {
        _id: "345678909876543456789",
        price : 4.00,
        stock : 23,                
        title : "Corn Flakes",
        image : "food.png",
        discount : 1,
        category : "Bread & Cereals",
    },
    {
        _id: "098765432345678987654",
        price : 3.50,
        stock : 8,                
        title : "Milk",
        image : "food.png",
        discount : 0,
        category : "Dairy & Eggs",
    },
    {
        _id: "345678909876543456789",
        price : 5.00,
        stock : 15,                
        title : "Eggs",
        image : "food.png",
        discount : 2,
        category : "Dairy & Eggs",
    },

];

class DataService{
    getCatalog(){
        //call the server to get catalog

        //return mock data (temporal)
        return catalog;
    }

    saveItem(){}

    saveOrder(){}
}

export default DataService;