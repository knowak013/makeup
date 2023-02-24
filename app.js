const NAV_TOGGLE = document.querySelector("#navToggle")
const NAV = document.querySelector("#nav-links")
const THUMBNAILS = document.querySelectorAll(".thumbnail");
const POPUP = document.querySelector(".popup");
const POPUP_CLOSE = document.querySelector(".popup_close");
const POPUP_IMG = document.querySelector('.popup_img')
const ARROW_LEFT = document.querySelector('.popup_arrow--left');
const ARROW_RIGHT = document.querySelector('.popup_arrow--right');
const SEE_ALL_TEXT = document.querySelector('#see-all');

let currentImgIndex;


const showNextImg = () => {
    if(currentImgIndex==THUMBNAILS.length-1){
        currentImgIndex=0;
    }else{
        currentImgIndex = currentImgIndex+1;
    }
   
    POPUP_IMG.src = THUMBNAILS[currentImgIndex].src;
}
const showPreviousImg= () =>{
    if(currentImgIndex==0){
        currentImgIndex=THUMBNAILS.length
    }
    currentImgIndex = currentImgIndex-1;
    POPUP_IMG.src = THUMBNAILS[currentImgIndex].src;
};

const closePopup= () => {
    POPUP.classList.add('fade-out');

    setTimeout(()=>{
        POPUP.classList.add('hidden');   
        POPUP.classList.remove('fade-out'); 
    },300);

   };

const openPopup= () =>{
    console.log("test");
    POPUP.classList.remove('hidden');
    currentImgIndex = 0;
    POPUP_IMG.src = THUMBNAILS[currentImgIndex].src;

}

THUMBNAILS.forEach((thumbnail, index)=>{
    thumbnail.addEventListener("click",(e)=>{
        POPUP.classList.remove('hidden');
        POPUP_IMG.src=e.target.src;
        currentImgIndex = index;
     
    })
});

NAV_TOGGLE.addEventListener("click", () =>{
    NAV.classList.toggle('nav-open')
});

SEE_ALL_TEXT.addEventListener("click", openPopup);

POPUP_CLOSE.addEventListener("click", closePopup);

ARROW_RIGHT.addEventListener("click", showNextImg);

ARROW_LEFT.addEventListener("click", showPreviousImg);

document.addEventListener("keydown", (e)=>{
    if(!POPUP_IMG.classList.contains("hidden")){
        
        if(e.code==='ArrowRight'){
            showNextImg();
        }

        if(e.code==='ArrowLeft'){
            showPreviousImg();
        }
        if(e.code==='Escape'){
            closePopup();
        }
        console.log(e);

        }

});

POPUP.addEventListener("click",(e)=>{
    if(e.target === POPUP){
        closePopup();
    }
});