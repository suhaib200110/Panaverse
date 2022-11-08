//Task 2: Prototypes methods of array and create your own methods.

//Simple prototype
function Car()
{
    this.name = "Honda";
    this.model = "2022";
    this.make = "Japan";
}

let car_1 = new Car();   //Creating
car_1.name='Suzuki';
car_1.model='1999';
car_1.make="Pakistan";

//Prototype with arrays

Array.prototype.Add_dashes = function() 
{
    for (let i=0;i<this.length;i++)
    {
        this[i] = "______________"+this[i]+" _________________"
    }
};

var Schooles = ["APS","FG Sirsyed","SLS"];
Schooles.Add_dashes();
console.log(Schooles)



