"use strict";

(function() {
    window.addEventListener("load", main);
}());

const n = 25;
var score = 0;
var Img = {};
var timeStarted = 0;
var paused = false;
var frames;
var id_zombie = 0;
var id_bullet = 0;

Enemy.list = {};
Bullet.list = {};

function main() {
  var mapCanvas = document.getElementById("mapCanvas");
  var heroCanvas = document.getElementById("heroCanvas");
  var powerCanvas = document.getElementById("powerCanvas");
  var zombieCanvas = document.getElementById("zombieCanvas");

  /*Img.hero = new Image();
  Img.hero.src = "Sprites/hero.png";*/

  initCanvas(mapCanvas, heroCanvas, zombieCanvas, powerCanvas);

  var c_width = mapCanvas.width;
  var c_height = mapCanvas.height;
  console.log(c_width);
  console.log(c_height);

  menu(mapCanvas, heroCanvas, zombieCanvas, powerCanvas, c_width, c_height);
}

function initCanvas(mapCanvas, heroCanvas, zombieCanvas, powerCanvas) {
  console.log("A iniciar Canvas.");
  var width = window.innerWidth;
  var height = window.innerHeight;

  var n = getConstN();
  var size;
  if (width < height) {
    size = width - (width % n) - n;
    mapCanvas.width = size;
    mapCanvas.height = size;
    heroCanvas.width = size;
    heroCanvas.height = size;
    zombieCanvas.width = size;
    zombieCanvas.height = size;
    powerCanvas.width = size;
    powerCanvas.height = size;
  } else {
    size = height - (height % n) - n;
    mapCanvas.width = size;
    mapCanvas.height = size;
    heroCanvas.width = size;
    heroCanvas.height = size;
    zombieCanvas.width = size;
    zombieCanvas.height = size;
    powerCanvas.width = size;
    powerCanvas.height = size;
  }

  var main = document.getElementById("container");
  main.style.left = ((width*0.5) - (size/2)).toString() + "px";

  mapCanvas.style.visibility = "visible";
  heroCanvas.style.visibility = "visible";
  zombieCanvas.style.visibility = "visible";
  powerCanvas.style.visibility = "visible";
}

function menu(mapCanvas, heroCanvas, zombieCanvas, powerCanvas, cw, ch) {
  console.log("funcao menuuuu...");
  enableLogo(cw, ch, mapCanvas.offsetLeft);

  var logo = document.getElementById("logo");
  var start_button = document.getElementById("start");
  var ranking_button = document.getElementById("ranking");
  var help_button = document.getElementById("help");
  var credits_button = document.getElementById("credits");

  enableButton(start_button, mapCanvas.offsetLeft+(cw/2.5), mapCanvas.offsetTop+(ch/2));
  enableButton(ranking_button, mapCanvas.offsetLeft+(cw/3.1), mapCanvas.offsetTop+(ch/2)+(ch/getConstN()*2.5));
  enableButton(help_button, mapCanvas.offsetLeft+(cw/2.3), mapCanvas.offsetTop+(ch/2)+(ch/getConstN()*5));
  enableButton(credits_button, mapCanvas.offsetLeft+(cw/2.6), mapCanvas.offsetTop+(ch/2)+(ch/getConstN()*7.5));
  console.log("Botoes ativados...");

  var ev_start = function(event) {
    disableButton(start_button);
    disableButton(ranking_button);
    disableButton(help_button);
    disableButton(credits_button);
    disableImage(logo);
    start_button.removeEventListener("click", ev_start);
    credits_button.removeEventListener("click", ev_credits);
    window.removeEventListener("resize", resize_menu);
    document.getElementById("options").style.visibility = "hidden";
    console.log("Start!!!!");
    newGame(mapCanvas, heroCanvas, zombieCanvas, powerCanvas, cw, ch, 4);
  };
  var ev_credits = function(event) {
    disableButton(start_button);
    disableButton(ranking_button);
    disableButton(help_button);
    disableButton(credits_button);
    start_button.removeEventListener("click", ev_start);
    credits_button.removeEventListener("click", ev_credits);
    window.removeEventListener("resize", resize_menu);
    document.getElementById("options").style.visibility = "hidden";
    console.log("Credits!!!!");
  };
  var resize_menu = function(event) {
    start_button.removeEventListener("click", ev_start);
    credits_button.removeEventListener("click", ev_credits);
    window.removeEventListener("resize", resize_menu);
    initCanvas(mapCanvas, heroCanvas, zombieCanvas, powerCanvas);
    menu(mapCanvas, heroCanvas, zombieCanvas, powerCanvas, cw, ch);
  }
  start_button.addEventListener("click",  ev_start);
  credits_button.addEventListener("click", ev_credits);
  window.addEventListener("resize", resize_menu);
  console.log("A espera de algum evento...");
}

function newGame(mapCanvas, heroCanvas, zombieCanvas, powerCanvas, cw, ch, level) {
  var map_ctx = mapCanvas.getContext("2d");
  var hero_ctx = heroCanvas.getContext("2d");
  var zombie_ctx = zombieCanvas.getContext("2d");
  var power_ctx = powerCanvas.getContext("2d");
  clearCanvas(map_ctx, hero_ctx, zombie_ctx, power_ctx, cw, ch);

  Enemy.list = {};
  Bullet.list = {};
  frames = 0;
  paused = false;
  score = 0;
  timeStarted = Date.now();

  var update = function() {
    if(paused) {
      console.log("Jogo em pausa.");
      map_ctx.font = "50px Arial";
      map_ctx.fillText("Paused", cw/2, ch/2);
      return;
    }

    frames++;
    //console.log("frame nr = "+frames);

    map_ctx.clearRect(0, 0, cw, ch);
    map.levelSelect(map_ctx, level);

    hero.update(map_ctx);
    enemy.update(map_ctx, hero.x, hero.y);
    Bullet.update(map_ctx);

    for(let key in Enemy.list) {
        if(Enemy.list[key].toRemove)
          delete Enemy.list[key];
        else
          Enemy.list[key].update(map_ctx, hero.x, hero.y);
    }
  }

  //console.log("Posicao Heroi: ("+hero.x+","+hero.y+")");

  var hero = new Hero("hero", cw/2, cw/2, 40, 40, cw, ch);
  var enemy = new Enemy("zombie", 0, ch/2, 40, 40, cw, ch, hero);
  //var bullet = new Bullet("bullet", hero.x, hero.y, 24, 24, cw, ch, 1, 1);

  hero.draw(map_ctx);
  enemy.draw(map_ctx);
  // Desenhar Mapa
  var map = new Map(cw, ch);
  map.levelSelect(map_ctx, level);
  console.log("Mapa desenhado.");

  // EventListener para keyDown
  var keyDownHandler = function (e) { // W A S D e PAUSE
    console.log("Handler keyDown");
    if(e.keyCode === 87) // W
      hero.pressingUp = true;
    if(e.keyCode === 65)  // A
      hero.pressingLeft = true;
    if(e.keyCode === 83)  // S
      hero.pressingDown = true;
    if(e.keyCode === 68)  // D
      hero.pressingRight = true;
    if(e.keyCode === 80)  // P
      paused =! paused;
  }
  document.addEventListener("keydown", keyDownHandler);

  // EventListener para keyUp
  var keyUpHandler = function (e) { // W A S D e PAUSE
    console.log("Handler keyUp");
    if(e.keyCode === 87) // W
      hero.pressingUp = false;
    if(e.keyCode === 65)  // A
      hero.pressingLeft = false;
    if(e.keyCode === 83)  // S
      hero.pressingDown = false;
    if(e.keyCode === 68)  // D
      hero.pressingRight = false;
  }
  document.addEventListener("keyup", keyUpHandler);

  var mouseDownHandler = function (mouse) {
    console.log("Mouse down.");
    if(mouse.which === 1)
      hero.pressingMouseLeft = true;
  }
  document.addEventListener("mousedown", mouseDownHandler);

  var mouseUpHandler = function (mouse) {
    if(mouse.which === 1)
      hero.pressingMouseLeft = false;
  }
  document.addEventListener("mouseup", mouseUpHandler);

  var mouseMoveHandler = function (mouse) {
    //console.log("Mouse move!");
    var mouseX = mouse.clientX - document.getElementById("mapCanvas").getBoundingClientRect().left;
    var mouseY = mouse.clientY - document.getElementById("mapCanvas").getBoundingClientRect().top;
    // ?
    mouseX -= cw/2;
    mouseY -= ch/2;
    hero.aimAngle = Math.atan2(mouseY, mouseX) / Math.PI*180;
  }
  document.addEventListener("mousemove", mouseMoveHandler);

  // EventListener para dar resize
  var resize_game = function (e) {
    initCanvas(mapCanvas, heroCanvas, zombieCanvas, powerCanvas)
    cw = canvas.width;
    ch = canvas.height;
    map.cw = cw;
    map.ch = ch;
    map.width = cw / n;
    map.height = ch / n;
    map.draw(map_ctx, cw, ch);
  }
  window.addEventListener("resize", resize_game);

  setInterval(update, 40);
}

function clearCanvas(map_ctx, hero_ctx, zombie_ctx, power_ctx, cw, ch) {
  map_ctx.clearRect(0, 0, cw, ch);
  hero_ctx.clearRect(0, 0, cw, ch);
  zombie_ctx.clearRect(0, 0, cw, ch);
  power_ctx.clearRect(0, 0, cw, ch);
}

function enableLogo(cw, ch, canvas_offset) {
  var logo = document.getElementById("logo");
  logo.style.left = (canvas_offset+cw/3.6).toString()+"px";
  logo.style.top = (ch / getConstN() * 3).toString()+"px";
  logo.style.visibility = "visible";
}

function enableButton(button, x, y) {
  button.style.left = x.toString()+"px";
  button.style.top = y.toString()+"px";
  button.style.visibility = "visible";
  button.disabled = false;
}

function disableButton(button) {
  button.style.visibility = "hidden";
  button.disabled = true;
}

function disableImage(img) {
  img.style.visibility = "hidden";
}

function getConstN() {
  return n;
}