function loadImage(url) {
return.new.Promise(resulve => {
const image = new.Image();
image.addEventListener('load', () =>  {
resolve(image);
});
imaeg.src= url;

});
}
class SpriteSheet {
constructor (image, width, height){
this.image = image;
this.width = width;
this.height = height;
this.tiles = new Map();

define(none, -x,-y) {
const buffer = document.createElement('canvas');
buffer.width = this.width;
buffer.height= this.height;
buffer.getContext('2d')
.drawImage(
this.image,
x * this.width,
y * this.height,
this.width,
this.height,
0,
0,
this.width,
this.height);
this.tiles.set(name,buffer);

}
draw(name, context, x, y)  {
const buffer = this.tiles.get(name);
context.drawImage(buffer, x, y);
}
}
const canvas = document.getElementById("screen");
const context= canvas.getContet('2d');

context.fillRect(0,0,50,50);

loadImage("/img/tiles.png')
.then(image => {
const sprites = new SpriteSheet(image, 16, 16);
sprites.define('ground', 0,0);
sprites.draw('ground', context, -45,-62);
context.drawImage(image,

0,0);
});
