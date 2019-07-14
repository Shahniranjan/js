//FUNCTION BASICS

//function add(num1,num2)
//{
//    var sum = num1+num2; ;
//    return sum;
//}
//console.log(add(5,6));

//_______________________________________________________________________________________________________________________________________________

//FUNCTION LITERAL

//var add = function(num1 , num2){
//    var sum = num1 + num2 ;
//    console.log(sum);
//}(3,10);

//_______________________________________________________________________________________________________________________________________________

//JS objects

//var process = {
//      name : 'niranjan' ,
//      age  : '22' ,
//      display_name : function(){
//    console.log(this.name);
//} ,
//      names : ['niranjan','sudarshan','panday'],
//}
//console.log(process.name);
//console.log(process.names[1]);
//console.log(process.display_name());
//console.log(process.age);

//______________________________________________________________________________________________________________________________________________

//object constructor

//var car = function ()
//{   var model , year ;
//    this.model = 'anaconda';
//    this.year  = '2020';
//};
//bmw = new car ;
//console.log(bmw.model);
//console.log(bmw.year); 

//______________________________________________________________________________________________________________________________________________

//PROTOTYPE
//var speed = function(km)
//{
//   console.log(km);
//    
//}
//var car = function ()
//{   var model , year ;
//    this.model = 'anaconda';
//    this.year  = '2020';
//};
//
//car.prototype.speed = speed;
//bmw = new car ;
//
//console.log(bmw.speed(200)) ;

//______________________________________________________________________________________________________________________________________________

//CALL AND APPLY

//var add = function(num1,num2)
//{  
//    var sum = num1 + num2;
//    console.log(this);
//   
//    
//}
//
//var info = {name: 'niranjan' , age : '220'};
//
//add.call(info);

//______________________________________________________________________________________________________________________________________________

//Argument Object

//var add = function()
//{
//     var sum = 0;
//    for(var i=0 ; i < arguments.length ; i++)
//        {
//            sum = sum + arguments[i];
//        }
//    return sum ;
//};
//console.log(add(1,2,4,9,12));

//______________________________________________________________________________________________________________________________________________

//anonymous function
//function lai bracket bhitra rakh dine ani nam magdaina

// (function()
//{
//     var sum = 0;
//    for(var i=0 ; i < arguments.length ; i++)
//        {
//            sum = sum + arguments[i];
//        }
//    console.log(sum);
//})(1,3,5,3,4,8);

//______________________________________________________________________________________________________________________________________________





