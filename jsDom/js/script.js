var carimages = document.querySelector('.carimages');
carimages.addEventListener('click',function(e)
                          {
    if(e.target.tagName == 'IMG')
    {
        var overlay = document.createElement('div');
        overlay.id = 'overlay';
        document.body.appendChild(overlay);
        
        overlay.style.position ='absolute';
        overlay.style.top = '0';
        overlay.style.background ='rgba(0,0,0,0.7)';
        overlay.style.cursor = 'pointer';
        
        overlay.style.width = window.innerWidth + "px";
        overlay.style.height = window.innerHeight + "px";
        imgsrc = e.target.src ;
        
        var image = document.createElement('img');
        image.src = imgsrc;
        image.id = 'pop-image';
        image.style.display = 'block';
        image.style.width = '50%';
        image.style.margin = '0 auto';
        image.style.marginTop = '10%';
        
        overlay.appendChild(image);
        
        image.addEventListener('click',function()
                              {
            if(document.getElementById('overlay'))
                {
                    overlay.remove(overlay);
                }
        });
        
        window.addEventListener('scroll',function()
                               {
            if(overlay)
                {
                    overlay.style.top = pageYOffset + "px";
                    overlay.style.left = pageXOffset + "px";
                }
        });
        
        window.addEventListener('resize',function()
                               {
            if(overlay)
                {
                    overlay.style.width = window.innerWidth + "px";
                    overlay.style.height = window.innerHeight + "px"
                    
                    
                }
        });
        
        
    }
});