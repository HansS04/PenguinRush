const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d')

/*objekt pro vykreslení cedule start*/ 
let legs = {
    
    paint: function () {

        
        ctx.fillStyle = "rgb(114, 74, 40)";
        /*vykreslení noh*/
         ctx.beginPath();
        ctx.rect(300, 50, 20, 200);
        ctx.rect(canvas.width - 320, 50, 20, 200);
        ctx.fill();
         }
    }
legs.paint();

/*Objekt pro vykreslení cedule start*/
let start = {
    
    paint: function () {

        ctx.font = "20px jumbotron";
        ctx.fillStyle = "red";
        /*vykreslení noh*/
         ctx.beginPath();
        ctx.rect(320, 50, 360, 50);
        
        ctx.fill();

        /*vykreslení nápisu čar pomocí jednotlivých čar*/
        ctx.strokeText("Start", canvas.width / 2 - 15, 80);
        
    }
    }
start.paint();

/*objekt pro vykreslení tučňáka*/ 
    let skier = {
        paint: function () {
    let img = new Image();
    img.src = 'img/lyzar.png';

    img.onload = function() {
   
    ctx.drawImage(img, canvas.width/2 - 30, 170, 80, 70);
}
}
    }
skier.paint();

/*objekt pro vykreslení stromů a světel*/ 
let treesAndLights = {
    paint: function () {
let img = new Image();
img.src = 'img/strom.png';

img.onload = function() {
ctx.drawImage(img, 90, -10, 240, 320);
ctx.drawImage(img, 660, -10, 240, 320);
ctx.drawImage(img, 5, 70, 240, 320);
ctx.drawImage(img, 750, 70, 240, 320);
ctx.drawImage(img, -60, 180, 240, 320);
ctx.drawImage(img, 820, 180, 240, 320);

}
}
}
treesAndLights.paint();