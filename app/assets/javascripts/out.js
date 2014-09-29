(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/production/Documents/Aptana Studio 3 Workspace/test/tes/app/assets/javascripts/canvas/loadFromGet.js.coffee":[function(require,module,exports){
module.exports = function(where, mainImg, dropElemts, coords, layer, container, group) {
  var dragSrc, dropimg, img, shpes, tmp;
  shpes = null;
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
  dropimg.setAttribute('draggable', 'true');
  dropimg.style.opacity = 0;
  tmp.appendChild(dropimg);
  dragSrc = null;
  dropimg.addEventListener('dragstart', function(e) {
    e.dataTransfer.setData('txt/html', dropimg.src);
    e.dataTransfer.setDragImage(dropimg, dropimg.width / 2, dropimg.height / 2);
    return dragSrc = this;
  });
  dropimg.addEventListener('dragend', function(e) {
    return e.target.style.border = "none";
  });
  container.addEventListener('drop', function(e) {
    var image, imageObj, x, y;
    x = e.pageX;
    y = e.pageY;
    e.preventDefault();
    e.target.style.border = "";
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
};



},{}],"/home/production/Documents/Aptana Studio 3 Workspace/test/tes/app/assets/javascripts/canvas/main.js.coffee":[function(require,module,exports){
var loadFromGet;

loadFromGet = require('./loadFromGet.js.coffee');

window.onload = function() {
  var con, coord, corner, down, img, lapy, layer, mainimg, stage, test, testimg, up;
  stage = new Kinetic.Stage({
    container: 'canvas',
    width: 500,
    height: 500,
    drawborder: true
  });
  layer = new Kinetic.Layer;
  corner = new Kinetic.Group({
    x: 500,
    y: 500,
    draggable: true,
    dragBoundFunc: function(pos) {
      var newX, newY;
      newX = pos.x;
      newY = pos.y;
      newX = pos.x < 0 ? 0 : pos.x;
      newX = pos.x > stage.getWidth() ? stage.getWidth() : pos.x;
      newY = pos.y < 0 ? 0 : pos.y;
      newY = pos.y > stage.getHeight() ? stage.getHeight() : pos.y;
      return {
        x: newX,
        y: newY
      };
    }
  });
  con = stage.getContainer();
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
      visible: false
    });
    layer.add(qtek);
    test = qtek;
    return stage.add(layer);
  };
  img.src = image_path('tulow_ziemia.png');
  img.id = "img";
  document.getElementById('ziemia').addEventListener('click', function() {
    test.show();
    layer.draw();
  }, false);
  mainimg = new Image();
  mainimg.src = image_path('mamuna.png');
  testimg = new Image();
  testimg.src = image_path('strona_pogladowa.png');
  lapy = [];
  lapy[0] = new Image();
  lapy[0].src = image_path('mamuna_lapy.png');
  coord = [];
  coord[0] = {
    left: "679px",
    top: "200px"
  };
  down = [];
  up = [];
  console.log($('#swap_stuff li img').first().attr('id'));
  $('#als-list').jPages({
    containerID: "swap_stuff",
    perPage: 3,
    scrollBrowse: true,
    previous: "span.als-prev",
    next: "span.als-next"
  });
  document.getElementById('mamuna').addEventListener('click', function() {
    return loadFromGet('img_here', mainimg, lapy, coord, layer, con);
  }, false);
  document.getElementById('testimg').addEventListener('click', function() {
    return loadFromGet('img_here', testimg, lapy, coord, layer, con);
  }, false);
  return layer.draw();
};


/*****olac to i sciagnac totem jquery plugin
  $('#swap_stuff li').( ->
    alert 'qw'
    down.push($('#swap_stuff ').last().detach())
    down.push($('#swap_stuff ').last().detach())
    down.push($('#swap_stuff ').last().detach())
    )
  up = ->
    if $('#swap_stuff li').first().attr('id') == 'mamuna'
      return false
    else
      down.push($('#swap_stuff ').last().detach())
      $('#swap_stuff ').first().append(up.pop())
      
      return
  down = ->
    if $('#swap_stuff li').last().attr('id') == 'last'
      return false
    else
      tp = $('#swap_stuff ').first().detach()
      up.push(tp)
      $('#swap_stuff ').last().append(down.pop())
      
      return
  $('#up').click( -> up() )
  $('#down').click( -> down() )
 
  swapup = (im1,im2) ->
    tmp = document.createElement('div')
    im1.parentNode.insertBefore(tmp,im1)
    im2.parentNode.insertBefore(im1,im2)
    tmp.parentNode.insertBefore(im2,im1)
    tmp.parentNode.removeChild(tmp)
    return
 */


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
