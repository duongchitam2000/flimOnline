window.addEventListener("load", function(){



    const silderMain = document.querySelector('.silder-main');
    const cardSilder = document.querySelectorAll('.card-silder');
    const widthCardSlider = cardSilder[0].offsetWidth;
    const lenghtCardSlider = cardSilder.length;
    let sumCard = (widthCardSlider*lenghtCardSlider)/2;
    console.log(sumCard)
    let tranX = 0; 
    const back = document.querySelector('.back');
    const next = document.querySelector('.next');
    let index = 0;
    changeNext = next.onclick = function(){
        
        if(index >= lenghtCardSlider-4) {
            
            index = 0;
            silderMain.style = `transform: translateX(0px)`;
            tranX = 0;
            return;
        }
        // }if else(index < 1){return;}
        tranX = tranX - widthCardSlider;
        silderMain.style = `transform: translateX(${tranX}px)`;
        // console.log(index);
        index++;
    }
    let mob_view = window.matchMedia("(max-width: 739px)");
    	if (mob_view.matches)
    	 {
            changeNext = next.onclick = function(){
        
                if(index >= lenghtCardSlider-2) {
                    
                    index = 0;
                    silderMain.style = `transform: translateX(0px)`;
                    tranX = 0;
                    return;
                }
                // }if else(index < 1){return;}
                tranX = tranX - widthCardSlider;
                silderMain.style = `transform: translateX(${tranX}px)`;
                // console.log(index);
                index++;
            }
    	 }
    changeBack = back.onclick = function(){
    
        if(index <1) {
            index = 0;
            return;
        }
        tranX = tranX + widthCardSlider;
        silderMain.style = `transform: translateX(${tranX}px)`;
        // console.log(index);
        index--;
    }
    
                
        // setInterval(function(){
        setInterval(changeNext,5000);
        // }, 1000);
    
    
    // 
    
    });
    