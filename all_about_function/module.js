//var run =(function(){
//    var DEFAULTS = "this is a default";
//     return {
//         speed: function()
//         {
//             var allArguments = arguments[0] || DEFAULTS ;
//             console.log(allArguments);
//             return this ;
//         } ,
//         
//         horse: function()
//         {
//             var allArguments = arguments[0] || DEFAULTS ;
//             console.log(allArguments);
//             return this ;
//         }
//     }
//})();

var run =(function(){
       
           var DEFAULTS = "no number entered";
            
             return {   add : function()
                   {
                    var sum = (arguments[0] + arguments[1]) || DEFAULTS ;
                     console.log(sum);
                       return this;
                    } ,
                   sub : function()
                   {
                    var sub = (arguments[0] - arguments[1]) || DEFAULTS ;
                     console.log(sub); 
                       return this;
                   }
               };
            
           
     
})();