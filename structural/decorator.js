class Dish{
    constructor(){}
    getPrice(){}
    getDes(){}
}

class Steak extends Dish{
    constructor(){
        super();
    }
    getPrice(){
        return 13;
    }
    getDes(){
        return "Steak";
    }
}

class SideDish extends Dish{
    constructor(dish){
        super();
        this.dish = dish;
    }
    getPrice(){
        return super.getPrice();
    }
    getDes(){
        return super.getDes();
    }
}

class Pommes extends SideDish{
    constructor(dish){
        super(dish);
    }
    getPrice(){
        return super.getPrice() +5;
    }
    getDes(){
        return super.getDes() + " Pommes";
    }
}



var dish = new Pommes(new Steak());
dish.getPrice();  //18