//Assignment 10
const Product={
    Id:1,
    Name : "Samsung M52",
    Description : "Android Mobile",
    Price : 20000
};


function productDetails(){
    console.log(Product.Id);
    console.log(Product.Name);
    console.log(Product.Description );
    let discPrice = 10;
    let calPrice = calculateDisc(discPrice);
    console.log(calPrice);
}

function calculateDisc(discPrice){
    
    let calDisc = Product.Price*(discPrice/100);
    let calPrice = Product.Price - calDisc;
    return calPrice;
}

productDetails();