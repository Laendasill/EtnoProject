(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/production/Documents/Aptana Studio 3 Workspace/test/tes/app/assets/javascripts/canvas/main.js.coffee":[function(require,module,exports){
window.onload = function() {
  var con, img, layer, stage, test;
  stage = new Kinetic.Stage({
    container: 'canvas',
    width: 500,
    height: 500,
    drawborder: true
  });
  layer = new Kinetic.Layer;
  con = stage.getContainer();
  console.log(con.offsetWidth);
  con.addEventListener('dragover', function(e) {
    return e.preventDefault();
  });
  img = new Image();
  test = null;
  img.onload = function() {
    var qtek;
    console.log("click");
    qtek = new Kinetic.Image({
      x: 100,
      y: 100,
      image: img,
      width: 100,
      height: 100,
      visible: false
    });
    layer.add(qtek);
    test = qtek;
    return stage.add(layer);
  };
  img.src = image_path('tulow_ziemia.png');
  img.id = "img";
  console.log(image_path('tulow_ziemia.png'));
  document.getElementById('ziemia').addEventListener('click', function() {
    test.show();
    layer.draw();
  }, false);
  document.getElementById('mamuna').addEventListener('click', function() {
    var dragSrc, testimg, tmp, x, y;
    tmp = document.getElementById('img_here');
    testimg = new Image();
    testimg.src = image_path('mamuna_lapy.png');
    testimg.setAttribute('id', 'drag1');
    testimg.style.position = 'absolute';
    testimg.style.left = "679px";
    testimg.style.top = "200px";
    tmp.innerHTML = '';
    img = document.createElement('img');
    img.src = image_path('mamuna.png');
    img.setAttribute('usemap', '#map1');
    img.setAttribute('id', 'qwe');
    img.ondragstart = function() {
      return false;
    };
    tmp.appendChild(img);
    tmp.appendChild(testimg);
    dragSrc = null;
    x = y = null;
    document.getElementById('drag1').addEventListener('dragstart', function(e) {
      e.dataTransfer.setDragImage(e.target, 153, 98);
      return dragSrc = this;
    });
    return con.addEventListener('drop', function(e) {
      var image, imageObj;
      x = e.pageX;
      y = e.pageY;
      e.preventDefault();
      image = new Kinetic.Image({
        draggable: true,
        x: x - 257,
        y: y - 198
      });
      layer.add(image);
      imageObj = new Image();
      imageObj.src = dragSrc.src;
      return imageObj.onload = function() {
        image.setImage(imageObj);
        return layer.draw();
      };
    });
  }, false);
  return layer.draw;
};



},{}]},{},["/home/production/Documents/Aptana Studio 3 Workspace/test/tes/app/assets/javascripts/canvas/main.js.coffee"]);
