var practise = (function()
          {
              return{
                        cars : {
                                car1 : "google.com",
                                car2 : "google.com",
                                car3 : "google.com"
        
                                },
        
                        ins:function(){
                            
                                           var myArguments = "." + arguments[0] ;
                                           var content = document.querySelectorAll(myArguments);
                                            var output = '<div class="grid row text-center text-lg-left">' ;
                                    
                                           for(var key in this.cars)
                                                {
                                                    console.log(key);
                                                    output += '<div class="col-lg-3 col-md-4 col-xs-6 thumb">';
                                                    output += '<img class="img-responsive" src = "images/'+key+'.jpg'+'">';
                                                    output += '</img></div>';
                                                    
                                
                                                };
                            output += '</div>';
                            
                                
                                            
                                            for(var i = 0 ; i < content.length; i++)
                                                {
                                                    content[i].innerHTML = output ;
                                                }
                            

                        
            

        }
    };
})();

var container = document.querySelector('.container');
container.addEventListener('click',function(e){
                          if (e.target.tagName == 'IMG')
    {
        var overlay = document.createElement('div');
        overlay.className = 'overlay ';
        document.body.append(overlay);
        overlay.style.position = 'absolute';
        overlay.style.top = 0 ; 
        overlay.style.background = 'rgba(0,0,0,0.7)';
        overlay.style.cursor = 'pointer';
        
        overlay.style.width = window.innerWidth + 'px';
        overlay.style.height = window.innerHeight + 'px';
        
        var imgsrc = e.target.src ;
        var image = document.createElement('img');
        image.src = imgsrc ;
        image.id  = 'popup' ;
        image.style.display = 'block';
        image.style.width = '50%';
        image.style.margin = '0 auto ' ;
        image.style.marginTop = ' 10%';
        
        overlay.appendChild(image);
        
        overlay.addEventListener ('click',function()
                                 {
            overlay.remove();
        });
        
        
    
    };
    
});

container.addEventListener('mouseover',function(e)
           { if (e.target.tagName == 'IMG')
               {
                   izoom = e.target ; 
                izoom.style.transform =" rotate(-20deg)";
                izoom.style.transition = "transform 2s";
                izoom.style.border = "2px";
               }
                           
                           });
container.addEventListener('mouseout',function(e)
           { if (e.target.tagName == 'IMG')
               {
                   izoom.style.removeProperty('transform');
               }
                           
                           });