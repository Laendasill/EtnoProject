(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/production/Documents/Aptana Studio 3 Workspace/test/tes/app/assets/javascripts/canvas/addleft.js.coffee":[function(require,module,exports){
module.exports = function(bckimg, layer, id) {
  var qtek, test;
  qtek = new Kinetic.Image({
    x: 100,
    y: 100,
    image: bckimg,
    visible: false
  });
  test = qtek;
  window.tlows.push(test);
  return document.getElementById(id).addEventListener('click', function() {
    console.log("click");
    layer.add(test);
    test.show();
    window.stage.add(layer);
    return layer.draw();
  }, false);
};



},{}],"/home/production/Documents/Aptana Studio 3 Workspace/test/tes/app/assets/javascripts/canvas/loadFromGet.js.coffee":[function(require,module,exports){
module.exports = function(where, mainImg, dropElemts, coords, layer, container, group) {
  var dragSrc, dropimg, height, i, img, maxX, maxY, minX, minY, offset, shpes, tmp, width, _i, _len;
  shpes = null;
  tmp = document.getElementById(where);
  img = document.getElementById('rpimg');
  img.src = mainImg.src;
  console.log(dropimg);
  img.ondragstart = function() {
    return false;
  };
  dragSrc = null;
  for (dropimg = _i = 0, _len = dropElemts.length; _i < _len; dropimg = ++_i) {
    i = dropElemts[dropimg];
    dropimg.style.left = coords[i].left;
    dropimg.style.top = coords[i].top;
    dropimg.setAttribute('id', 'drag1');
    dropimg.style.position = 'absolute';
    dropimg.setAttribute('draggable', 'true');
    dropimg.style.opacity = 0;
    tmp.appendChild(dropimg);
    dropimg.addEventListener('dragstart', function(e) {
      e.dataTransfer.setData('txt/html', dropimg.src);
      e.dataTransfer.setDragImage(dropimg, dropimg.width / 2, dropimg.height / 2);
      return dragSrc = this;
    });
    dropimg.addEventListener('dragend', function(e) {
      return e.target.style.border = "none";
    });
  }
  offset = $(container).offset();
  height = dropimg.height;
  width = dropimg.width;
  minX = parseInt(offset.left);
  maxX = parseInt(offset.left) + stage.getWidth() - width;
  minY = parseInt(offset.top);
  maxY = parseInt(offset.top) + stage.getHeight() - height;
  container.addEventListener('drop', function(e) {
    var image, imageObj, src, x, y;
    x = e.pageX;
    y = e.pageY;
    e.preventDefault();
    src = e.dataTransfer.getData('txt/html');
    e.target.style.border = "";
    image = new Kinetic.Image({
      draggable: true,
      x: x - 257,
      y: y - 198,
      dragBoundFunc: function(pos) {
        var X, Y, newX, newY;
        X = pos.x;
        Y = pos.y;
        newX = X < 0 ? 0 : X;
        newX = X > maxX ? maxX : X;
        newY = Y < 0 ? 0 : Y;
        newY = Y > maxY ? maxY : Y;
        console.log("newy " + newY + " maxY " + maxY + " newX " + newX + " maxX " + maxX + " minx " + minX + " miny " + minY + " X " + X);
        return {
          x: newX,
          y: newY
        };
      }
    });
    layer.add(image);
    imageObj = new Image();
    imageObj.src = src;
    return imageObj.onload = function() {
      image.setImage(imageObj);
      return layer.draw();
    };
  });
};



},{}],"/home/production/Documents/Aptana Studio 3 Workspace/test/tes/app/assets/javascripts/canvas/main.js.coffee":[function(require,module,exports){
var addLeft, drags, dragstr, loadFromGet, mainImgs, mainstr, minatures, preLoad, str, str2, tab, tab2, tab3, tab5, tlowie;

loadFromGet = require('./loadFromGet.js.coffee');

preLoad = require('./preLoadAll.js.coffee');

addLeft = require('./addleft.js.coffee');

mainstr = '/assets/elem/mamuna.png, /assets/elem/borowy.png, /assets/elem/domowik.png, /assets/elem/poludnica.png, /assets/elem/swiecnik.png';

tab3 = mainstr.split(',');

mainImgs = $.extend(true, {}, preLoad(tab3));

dragstr = '/assets/elem/drag/mamuna_lapy.png, /assets/elem/drag/borowy_glowa.png, /assets/elem/drag/domowik_nogi.png, /assets/elem/drag/domowik_glowa.png, /assets/elem/drag/poludnica_glowa.png, /assets/elem/drag/poludnica_lapy.png, /assets/elem/drag/swiecnik_glowa.png';

tab5 = dragstr.split(',');

drags = $.extend(true, {}, preLoad(tab5));

str2 = '/assets/tulow_ogien.png, /assets/tulow_woda.png, /assets/tulow_ziemia.png, /assets/tulow_wiatr.png';

tab2 = new Array();

tab2 = str2.split(',');

tlowie = $.extend(true, {}, preLoad(tab2));

str = '/assets/ret/mini_tulow_ogien.png, /assets/ret/mini_tulow_woda.png, /assets/ret/mini_tulow_ziemia.png, /assets/ret/mini_tulow_wiatr.png, /assets/ret/mini_mamuna.png, /assets/ret/mini_poludnica.png, /assets/ret/mini_swiecnik.png, /assets/ret/mini_domowik.png, /assets/ret/mini_borowy.png';

tab = new Array();

tab = str.split(',');

minatures = $.extend(true, {}, preLoad(tab));

$(document).ready(function() {
  var coord, corner, polud;
  $('#up_arrow').click(function() {
    console.log("up");
    $('#list').animate({
      scrollTop: '+=100'
    }, 100);
  });
  $('#down_arrow').click(function() {
    console.log("down");
    $('#list').animate({
      scrollTop: '-=100'
    }, 100);
  });
  window.stage = new Kinetic.Stage({
    container: 'canvas',
    width: 500,
    height: 500,
    drawborder: true
  });
  window.layer = new Kinetic.Layer;
  window.context = layer.getContext();
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
  window.con = window.stage.getContainer();
  con.addEventListener('dragover', function(e) {
    return e.preventDefault();
  });
  window.tlows = [];
  window.ison = 0;
  addLeft(tlowie[3], layer, 'wiatr');
  addLeft(tlowie[2], layer, 'ziemia');
  addLeft(tlowie[0], layer, 'ogien');
  addLeft(tlowie[1], layer, 'woda');
  console.log(tlows);
  polud = [];
  coord = [];
  coord[0] = {
    left: "679px",
    top: "200px"
  };
  polud[0] = {
    left: "679px",
    top: "300px"
  };
  polud[1] = {
    left: "679px",
    top: "300px"
  };
  window.onload = function() {
    document.getElementById('mamuna').addEventListener('click', function() {
      return loadFromGet('img_here', mainImgs[0], [drags[0]], coord, window.layer, window.con);
    }, false);
    document.getElementById('poludnica').addEventListener('click', function() {
      return loadFromGet('img_here', mainImgs[3], [drags[4], drags[5]], polud, window.layer, con);
    }, false);
  };
});


/*****olac to i sciagnac totem jquery plugin
    mainimg = new Image()
  mainimg.src = image_path('mamuna.png') 
  testimg = new Image()
  testimg.src = image_path('strona_pogladowa.png')
  lapy = []
  lapy[0] = new Image()
  lapy[0].src = image_path('mamuna_lapy.png')
  
  down = []
  up = []
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



},{"./addleft.js.coffee":"/home/production/Documents/Aptana Studio 3 Workspace/test/tes/app/assets/javascripts/canvas/addleft.js.coffee","./loadFromGet.js.coffee":"/home/production/Documents/Aptana Studio 3 Workspace/test/tes/app/assets/javascripts/canvas/loadFromGet.js.coffee","./preLoadAll.js.coffee":"/home/production/Documents/Aptana Studio 3 Workspace/test/tes/app/assets/javascripts/canvas/preLoadAll.js.coffee"}],"/home/production/Documents/Aptana Studio 3 Workspace/test/tes/app/assets/javascripts/canvas/preLoadAll.js.coffee":[function(require,module,exports){
var mainImg;

mainImg = [];

module.exports = function(main) {
  var c, i, _i, _len;
  c = 0;
  for (_i = 0, _len = main.length; _i < _len; _i++) {
    i = main[_i];
    mainImg[c] = new Image();
    mainImg[c].src = main[c];
    c++;
  }
  return mainImg;
};



},{}]},{},["/home/production/Documents/Aptana Studio 3 Workspace/test/tes/app/assets/javascripts/canvas/main.js.coffee"]);
