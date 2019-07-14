var practise = (function()
          {
              return{
                        cars : {
                                car1 : "google.com",
                                car2 : "google.com",
                                car3 : "google.com",
                                car1 : "google.com"
        
                                },
        
                        ins:function(){
                            
                                           var myArgument = "." + arguments[0] ;
                                           var content = document.querySelectorAll(myArgument);
                                           output = '<div>' ;
                                           for(var key in this.cars)
                                                {
                                                    output += '<div>';
                                                    output += '<img src = "images/'+key +'">';
                                                    output += '</img>';
                                
                                                };
                                            output =+ '</div>';
            
                                            for(var i = 0 ; i <content.length; i++)
                                                {
                                                    content[1].innerHTML = output ;
                                                };

        }
    };
})();