"use strict";

class Coord {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return "("+this.x+", "+this.y+")";
  }
}

class Map {
  constructor(cw, ch) {
    this.cw = cw;
    this.ch = ch;
    this.width = cw / n;
    this.height = ch / n;
    this.coords = [];
  }

  draw(ctx, cw, ch) {
    ctx.clearRect(0, 0, cw, ch);
    for(let i=0; i<this.coords.length; i++) {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(this.coords[i].x * this.width, this.coords[i].y * this.height, this.width, this.height);
    }
  }

  renderLevel(ctx, array) {
      var brick = document.getElementById("brick");
      var purple_brick = document.getElementById("purple");
      this.coords.length = 0; //reset coords array
      ctx.fillStyle = "#ffffff";
      var i, j;
      for (i = 0; i < n; i++) {
          for (j = 0; j < n; j++) {
              if (array[i][j] === "x") {
                  ctx.fillRect(j * this.width, i * this.height, this.width, this.height);
                  //ctx.drawImage(purple_brick, j*this.width, i*this.height, this.width, this.height);
              } else {
                  ctx.drawImage(brick, j * this.width, i * this.height, this.width, this.height);
              }
              this.coords.push(new Coord(j, i));
          }
      }
  }

  level1() {
        var level = [
            ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"]
        ];
        return level;
    }
    level2() {
        var level = [
            ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"]
        ];
        return level;
    }
    level3() {
        var level = [
            ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"]
        ];
        return level;
    }
    level4() {
        var level = [
            ["x", "x", "x", "x", "x", "x", "x", "x", "x", "o", "o", "o", "o", "o", "o", "o", "x", "x", "x", "x", "x", "x", "x", "x", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "x", "x", "x", "x", "x", "o", "o", "o", "o", "o", "o", "o", "x", "x", "x", "x", "x", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "o", "o", "o", "x"],
            ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
            ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
            ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
            ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
            ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
            ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
            ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
            ["x", "o", "o", "o", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "x", "x", "x", "x", "x", "o", "o", "o", "o", "o", "o", "o", "x", "x", "x", "x", "x", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "x", "x", "x", "x", "x", "x", "x", "x", "o", "o", "o", "o", "o", "o", "o", "x", "x", "x", "x", "x", "x", "x", "x", "x"]
        ];
        return level;
    }
    level5() {
        var level = [
            ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "x", "x", "x", "x", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "x", "x", "x", "x", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "x", "x", "x", "x", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "x", "x", "x", "x", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "x", "x", "x", "x", "x", "x", "x", "x", "x", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "x", "x", "x", "x", "x", "x", "x", "x", "x", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "x", "x", "x", "x", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "x", "x", "x", "x", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "x", "x", "x", "x", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "x", "x", "x", "x", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"]
        ];
        return level;
    }
    level6() {
        var level = [
            ["x", "x", "x", "x", "x", "x", "o", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "o", "x", "x", "x", "x", "x", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "x", "x", "x", "o", "x", "x", "x", "o", "o", "o", "o", "o", "x", "x", "x", "o", "x", "x", "x", "o", "o", "x"],
            ["x", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "x"],
            ["x", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "x"],
            ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
            ["x", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "x"],
            ["x", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "x"],
            ["x", "o", "o", "x", "x", "x", "o", "x", "x", "x", "o", "o", "o", "o", "o", "x", "x", "x", "o", "x", "x", "x", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "x", "x", "x", "o", "x", "x", "x", "o", "o", "o", "o", "o", "x", "x", "x", "o", "x", "x", "x", "o", "o", "x"],
            ["x", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "x"],
            ["x", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "x"],
            ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
            ["x", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "x"],
            ["x", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "x"],
            ["x", "o", "o", "x", "x", "x", "o", "x", "x", "x", "o", "o", "o", "o", "o", "x", "x", "x", "o", "x", "x", "x", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "x", "x", "x", "x", "x", "o", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "o", "x", "x", "x", "x", "x", "x"]
        ];
        return level;
    }
    level7() {
        var level = [
            ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "o", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "x", "o", "x", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "x", "x", "o", "o", "o", "x", "x", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "x", "x", "o", "o", "o", "o", "o", "x", "x", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "x", "x", "o", "o", "o", "o", "o", "o", "o", "x", "x", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "x", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "x", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "x", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "x", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "x", "x", "o", "o", "o", "o", "x", "x", "o", "x", "x", "o", "o", "o", "o", "x", "x", "o", "o", "o", "x"],
            ["x", "o", "o", "x", "x", "o", "o", "o", "o", "x", "x", "o", "o", "o", "x", "x", "o", "o", "o", "o", "x", "x", "o", "o", "x"],
            ["x", "o", "x", "x", "o", "o", "o", "o", "x", "x", "o", "o", "o", "o", "o", "x", "x", "o", "o", "o", "o", "x", "x", "o", "x"],
            ["x", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "x"],
            ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "C", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
            ["x", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "x"],
            ["x", "o", "x", "x", "o", "o", "o", "o", "x", "x", "o", "o", "o", "o", "o", "x", "x", "o", "o", "o", "o", "x", "x", "o", "x"],
            ["x", "o", "o", "x", "x", "o", "o", "o", "o", "x", "x", "o", "o", "o", "x", "x", "o", "o", "o", "o", "x", "x", "o", "o", "x"],
            ["x", "o", "o", "o", "x", "x", "o", "o", "o", "o", "x", "x", "o", "x", "x", "o", "o", "o", "o", "x", "x", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "x", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "x", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "x", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "x", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "x", "x", "o", "o", "o", "o", "o", "o", "o", "x", "x", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "x", "x", "o", "o", "o", "o", "o", "x", "x", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "x", "x", "o", "o", "o", "x", "x", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "x", "o", "x", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "o", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"]
        ];
        return level;
    }
    level8() {
        var level = [
            ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x"],
            ["x", "o", "x", "x", "x", "x", "x", "x", "x", "o", "x", "o", "o", "o", "x", "o", "x", "x", "x", "x", "x", "x", "x", "o", "x"],
            ["x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "x", "x", "x", "x", "x", "x", "x", "o", "o", "o", "o", "o", "o", "o", "x", "x", "x", "x", "x", "x", "x", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "x", "x", "x", "x", "x", "x", "x", "o", "o", "o", "o", "o", "o", "o", "x", "x", "x", "x", "x", "x", "x", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x"],
            ["x", "o", "x", "x", "x", "x", "x", "x", "x", "o", "x", "o", "o", "o", "x", "o", "x", "x", "x", "x", "x", "x", "x", "o", "x"],
            ["x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"]
        ];
        return level;
    }
    level9() {
        var level = [
            ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "x", "o", "o", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "x", "o", "o", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "x", "o", "o", "x", "o", "o", "x", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "x", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "x", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "x", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "x", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "x", "x", "x", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "x", "x", "x", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "x", "x", "x", "x", "x", "x", "x", "o", "o", "o", "o", "o", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "x", "x", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "x", "x", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "o", "o", "o", "o", "o", "x", "x", "x", "x", "x", "x", "x", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "x", "x", "x", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "x", "x", "x", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "x", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "x", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "x", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "x", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "x", "o", "o", "x", "o", "o", "x", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "o", "o", "x", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "o", "o", "x", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"]
        ];
        return level;
    }
    level10() {
        var level = [
            ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "o", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "o", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "o", "x"],
            ["x", "o", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "o", "x"],
            ["x", "o", "x", "o", "x", "x", "x", "x", "x", "x", "x", "x", "o", "x", "x", "x", "x", "x", "x", "x", "x", "o", "x", "o", "x"],
            ["x", "o", "x", "o", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "o", "x", "o", "x"],
            ["x", "o", "x", "o", "x", "o", "x", "x", "x", "x", "x", "x", "o", "x", "x", "x", "x", "x", "x", "o", "x", "o", "x", "o", "x"],
            ["x", "o", "x", "o", "x", "o", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "o", "x", "o", "x", "o", "x"],
            ["x", "o", "x", "o", "x", "o", "x", "o", "x", "x", "x", "x", "o", "x", "x", "x", "x", "o", "x", "o", "x", "o", "x", "o", "x"],
            ["x", "o", "x", "o", "x", "o", "x", "o", "x", "o", "o", "o", "o", "o", "o", "o", "x", "o", "x", "o", "x", "o", "x", "o", "x"],
            ["x", "o", "x", "o", "x", "o", "x", "o", "x", "o", "x", "x", "o", "x", "x", "o", "x", "o", "x", "o", "x", "o", "x", "o", "x"],
            ["x", "o", "x", "o", "x", "o", "x", "o", "x", "o", "x", "o", "o", "o", "x", "o", "x", "o", "x", "o", "x", "o", "x", "o", "x"],
            ["o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "C", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o"],
            ["x", "o", "x", "o", "x", "o", "x", "o", "x", "o", "x", "o", "o", "o", "x", "o", "x", "o", "x", "o", "x", "o", "x", "o", "x"],
            ["x", "o", "x", "o", "x", "o", "x", "o", "x", "o", "x", "x", "o", "x", "x", "o", "x", "o", "x", "o", "x", "o", "x", "o", "x"],
            ["x", "o", "x", "o", "x", "o", "x", "o", "x", "o", "o", "o", "o", "o", "o", "o", "x", "o", "x", "o", "x", "o", "x", "o", "x"],
            ["x", "o", "x", "o", "x", "o", "x", "o", "x", "x", "x", "x", "o", "x", "x", "x", "x", "o", "x", "o", "x", "o", "x", "o", "x"],
            ["x", "o", "x", "o", "x", "o", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "o", "x", "o", "x", "o", "x"],
            ["x", "o", "x", "o", "x", "o", "x", "x", "x", "x", "x", "x", "o", "x", "x", "x", "x", "x", "x", "o", "x", "o", "x", "o", "x"],
            ["x", "o", "x", "o", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "o", "x", "o", "x"],
            ["x", "o", "x", "o", "x", "x", "x", "x", "x", "x", "x", "x", "o", "x", "x", "x", "x", "x", "x", "x", "x", "o", "x", "o", "x"],
            ["x", "o", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "o", "x"],
            ["x", "o", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "o", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "o", "x"],
            ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x"],
            ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"]
        ];
        return level;
    }
    levelSelect(ctx, score) {
        var level;
        if(score < 10)
          level = this.level1();
        else if(score >= 10 && score < 20)
          level = this.level2();
        else if(score >= 20 && score < 30)
          level = this.level3();
        else if(score >= 30 && score < 40)
          level = this.level4();
        else if(score >= 40 && score < 50)
          level = this.level5();
        else if(score >= 50 && score < 60)
          level = this.level6();
        else if(score >= 60 && score < 70)
          level = this.level7();
        else if(score >= 70 && score < 80)
          level = this.level8();
        else if(score >= 80 && score < 90)
          level = this.level9();
        else if(score >= 90 && score < 100)
          level = this.level10();
        /*switch (n) {
            case 1:
                level = this.level1();
                break;
            case 2:
                level = this.level2();
                break;
            case 3:
                level = this.level3();
                break;
            case 4:
                level = this.level4();
                break;
            case 5:
                level = this.level5();
                break;
            case 6:
                level = this.level6();
                break;
            case 7:
                level = this.level7();
                break;
            case 8:
                level = this.level8();
                break;
            case 9:
                level = this.level9();
                break;
            case 10:
                level = this.level10();
                break;
        }*/
        this.renderLevel(ctx, level);
    }
}
