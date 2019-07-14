var container = document.querySelector('.container');
container.addEventListener ('click' ,function(e)
                           {
     if(e.target.tagName == 'IMG')
        {
            
            
                  var overlay = document.createElement('div');
                  overlay.id= "overlay";            
                  document.body.appendChild(overlay) ; 
                  
                   overlay.style.position ='absolute';
                   overlay.style.top = '0';
                   overlay.style.background ='rgba(0,0,0,0.7)';
                   overlay.style.cursor = 'pointer';
        
                   overlay.style.width = window.innerWidth + "px";
                   overlay.style.height = window.innerHeight + "px";
            
                   var imgsrc = e.target.src ;
                   var popup = document.createElement('img');
                    overlay.appendChild(popup);
                    popup.src = imgsrc ;
                    popup.id = 'pop-image';
                    popup.style.display = 'block';
                    popup.style.width = '50%';
                    popup.style.margin = '0 auto';
                    popup.style.marginTop = '10%';
            
                   popup.addEventListener('click',function()
                                         {
                       overlay.remove(overlay);
                   });
            
                   window.addEventListener('scroll',function()
                                          {
                       if(overlay)
                           overlay.style.top = pageYOffset + "px";
                           overlay.style.left = pageXOffset + "px";
                           
                   });
                    
                   window.addEventListener('resize',function()
                               {
            if(overlay)
                {
                    overlay.style.width = window.innerWidth + "px";
                    overlay.style.height = window.innerHeight + "px"
                    
                    
                };
           
        });
            
  
    
            };
    });
  container.onmouseover = function(e)
  {

        if(e.target.tagName == 'IMG')
            {
                izoom = e.target ;
                izoom.style.transform =" rotate(-20deg)";
                izoom.style.transition = "transform 2s";
                izoom.style.border = "2px";
                
                

            }
    };
   container.onmouseout = function(e)
  {

        if(e.target.tagName == 'IMG')
            {
                izoom = e.target ;
                izoom.style.removeProperty('transform');
                
                
                

            }
    };
           
            
            
                
        
    
       