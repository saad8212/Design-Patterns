//............... Creational Patterns

// =>Singleton Pattern
//it contains only one object which can not be modified, added or removed....it contains only a single object 
//mostly it contains a configuration data of app, it is immutable and does'nt allow any other to modify 
// it or recreate it

    var makeConfig = (function() {
        var config;
        function initializeConfig (value) {
            this.name=value.name,
            this.age=value.age   
        }
        return{
            getConfig:function(value){
                if(config === undefined) {
                        config = new initializeConfig(value);
                }
                return config;
            }
        };
    })();

let user1 = makeConfig.getConfig({name:"ahmad", age:24});
let user2 = makeConfig.getConfig({name:"ahmad", age:26});
console.log(user1, user2);
//Example 2 :-
    let objSingl = {
        getName:function(){
            console.log("name");
        },
        updateName:function(){
            console.log("update");
        }
    }
    Object.freeze(objSingl);
    objSingl.getName();
    objSingl.updateName();
    // objSingle.name = "ahmad";






    //=>Factory Pattern 
console.log("=>-------Factory-------<= ");
    var Factory = (a,b,c,d) =>{
        return {
            model:a,
            ram:b,
            color:c,
            price:d,
            total_price:(price) =>{
                return (price * 0.05) + price;
             }
        }
    }
let samsung = Factory("samsung", 24, "red", 50200);
console.log(samsung.total_price(50000));

// Futher Expand this 
var Developer = function(name){
    this.name = name;
    this.type = "developer";
}
var Manager = function(name){
    this.name = name;
    this.type = "manager";
}
var Admin = function(name) {
    this.name = name;
    this.type = "admin"
}
var Supervisor = function (name) {
    this.name = name;
    this.type = "admin";
};

var CreateEmployee = function(){
    this.CreateNewEmpl = (name,type)=>{
        if(type === "supervisor"){
            return new Supervisor(name);   
        } 
        else if(type === "developer"){
            return new Developer(name);   
        } 
        else if(type === "manager"){
            return new Manager(name);   
        } 
         
        else if(type === "admin"){
            return new Admin(name);   
        } 
        else {
            console.log("We don't have this type");
        }
    }
   
}
const createEmp = new CreateEmployee();
const employees = [];
 employees.push(createEmp.CreateNewEmpl("Umar", "supervisor"));
 employees.push(createEmp.CreateNewEmpl("Umar", "admin"));
 employees.push(createEmp.CreateNewEmpl("Umar", "manager"));
 employees.push(createEmp.CreateNewEmpl("Umar", "developer"));
 employees.push(createEmp.CreateNewEmpl("Umar", "admin"));
 employees.push(createEmp.CreateNewEmpl("Umar", "painter"));
// let employee2 =new createEmployee("Noman", "developer");

 console.log(employees);

 