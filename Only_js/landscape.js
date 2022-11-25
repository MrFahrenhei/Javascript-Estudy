// implement the function if it's landscape or not (width > height)

let sizes = isLandscape(1020,1080);
console.log(sizes);
function isLandscape(width, height){
     return (width > height) ? "landscape" : "portrait";
}