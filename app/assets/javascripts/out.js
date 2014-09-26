(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/production/Documents/Aptana Studio 3 Workspace/test/tes/app/assets/javascripts/canvas/loadFromGet.js.coffee":[function(require,module,exports){
module.exports = function(where, mainImg, dropElemts, coords, layer, container) {
  var dragSrc, dropimg, img, tmp;
  tmp = document.getElementById(where);
  img = document.getElementById('rpimg');
  img.src = mainImg.src;
  dropimg = dropElemts[0];
  img.ondragstart = function() {
    return false;
  };
  dropimg.style.left = coords[0].left;
  dropimg.style.top = coords[0].top;
  dropimg.setAttribute('id', 'drag1');
  dropimg.style.position = 'absolute';
  tmp.appendChild(dropimg);
  alert(dropimg.id);
  dragSrc = null;
  dropimg.addEventListener('dragstart', function(e) {
    e.dataTransfer.setDragImage(e.target, dropimg.width / 2, dropimg.height / 2);
    return dragSrc = this;
  });
  return container.addEventListener('drop', function(e) {
    var image, imageObj, x, y;
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
      layer.draw();
    };
  });
};



},{}],"/home/production/Documents/Aptana Studio 3 Workspace/test/tes/app/assets/javascripts/canvas/main.js.coffee":[function(require,module,exports){
var loadFromGet;

loadFromGet = require('./loadFromGet.js.coffee');

window.onload = function() {
  var con, coord, img, lapy, layer, mainimg, stage, test;
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
  mainimg = new Image();
  mainimg.src = image_path('mamuna.png');
  lapy = [];
  lapy[0] = new Image();
  lapy[0].src = image_path('mamuna_lapy.png');
  coord = [];
  coord[0] = {
    left: "679px",
    top: "200px"
  };
  document.getElementById('mamuna').addEventListener('click', function() {
    return loadFromGet('img_here', mainimg, lapy, coord, layer, con);
  }, false);
  return layer.draw();
};


/*
   tmp = document.getElementById('img_here')
    
      
     
   testimg = new Image()
   testimg.src = image_path('mamuna_lapy.png')
   testimg.setAttribute('id','drag1')
   testimg.style.position = 'absolute'
   
   testimg.style.left = "679px"
   testimg.style.top = "200px" 
   tmp.innerHTML = ''
   img = document.createElement('img')
   img.src = image_path('mamuna.png')
   img.setAttribute('usemap', '#map1')
   img.setAttribute('id', 'qwe')
   img.ondragstart = -> return false
   tmp.appendChild(img)
   tmp.appendChild(testimg)
   dragSrc =  null
   x = y = null 
   document.getElementById('drag1').addEventListener('dragstart', (e) ->
  
     e.dataTransfe r.setDragImage(e.target,153,98)
     dragSrc = this
     
     
   )
  
   con.addEventListener('drop', (e) ->
    x = e.pageX
    y = e.pageY         
    e.preventDefault()
    image = new Kinetic.Image
      draggable: true,
      x: x - 257 ,
      y: y - 198
    layer.add(image)
    imageObj = new Image()
    imageObj.src = dragSrc.src
    
    imageObj.onload = ->
      image.setImage(imageObj)
      layer.draw()
    )
       
       
   
    
 
  ,false )
 */



},{"./loadFromGet.js.coffee":"/home/production/Documents/Aptana Studio 3 Workspace/test/tes/app/assets/javascripts/canvas/loadFromGet.js.coffee"}]},{},["/home/production/Documents/Aptana Studio 3 Workspace/test/tes/app/assets/javascripts/canvas/main.js.coffee"]);
