const canvas = document.querySelector("canvas");

//setting up canvas to be retina screen friendly
canvas.width = window.innerWidth * 2;
canvas.height = window.innerHeight * 2;

canvas.style.width = window.innerWidth + "px";
canvas.style.height = window.innerHeight + "px";

//set up context, scale 2,2 to be retina friendly
const context = canvas.getContext("2d");
context.scale(2, 2);

//cursor delay
let aimX = null
let aimY = null
let curX = null
let curY = null


//clickability function
let i = 0;

const images = [
  "png/spicegals.png",
  "png/avatar.png",
  "png/danny.png",
  "png/drakenjosh.jpg",
  "png/fairlyoddparents.png",
  "png/kimpossible.png",
  "png/ron.png",
  "png/spongebob.png",
  "png/timmy.png",
].map((src) => {
  const image = document.createElement("img");
  image.src = src;
  return image;
});

//make images follow the mouse on mousemove
document.addEventListener("mousemove", function (event) {

    aimX = event.pageX
    aimY = event.pageY

    if (curX ===null){
        curX = event.pageX
        curY =  event.pageY
    }


//   const Xcur = event.pageX;
//   const Ycur = event.pageY;

  //has image been loaded?
//   if (images[i].complete) {
//     context.drawImage(images[i], Xcur - 300, Ycur - 400, 600, 600);
//   }
});

canvas.addEventListener("click",  function(){
    i++;
    if (i >= images.length){
        i=0;
    }
})

const draw = () => {

    let imgWidth = images[i].width /4
    let imgHeight = images[i].height /4


    if (curX){
        if (images[i].complete) {
                context.drawImage(images[i], curX - (imgWidth/2), curY - imgHeight/2, imgWidth, imgHeight);
        }
        curX = curX + (aimX - curX) * 0.03
        curY = curY + (aimY - curY) * 0.03

    }

    //run draw on every frame
    requestAnimationFrame(draw)
}


draw()