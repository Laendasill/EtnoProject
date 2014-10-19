(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/production/Documents/Aptana Studio 3 Workspace/test/tes/app/assets/javascripts/canvas/addleft.js.coffee":[function(require,module,exports){
module.exports = function(bckimg, layer, id) {
  return document.getElementById(id).addEventListener('click', function() {
    if (window.currentTlow === null) {
      window.currentTlow = bckimg;
      console.log("click");
      layer.add(bckimg);
      bckimg.show();
      return layer.draw();
    } else {
      window.currentTlow.remove();
      window.currentTlow = bckimg;
      layer.add(bckimg);
      bckimg.show();
      layer.draw();
      console.log(window.currentTlow.id());
    }
  }, false);
};



},{}],"/home/production/Documents/Aptana Studio 3 Workspace/test/tes/app/assets/javascripts/canvas/loadFromGet.js.coffee":[function(require,module,exports){
var addImage, imgoffset, isNearOutline, onDragEnd, validcoords, _ref;

validcoords = [];

[].splice.apply(validcoords, [0, 2].concat(_ref = {
  x: 0,
  y: 0
})), _ref;

imgoffset = 520;

addImage = function(element, coords) {
  var kimg, offset;
  offset = $(window.con).offset();
  kimg = new Kinetic.Image({
    x: 71 + imgoffset,
    y: 87,
    image: element,
    draggable: true,
    name: "dragimage"
  });
  validcoords.x = kimg.getPosition().x;
  validcoords.y = kimg.getPosition().y;
  kimg.on('dragend', function(e) {
    return onDragEnd(e);
  });
  return window.layer.add(kimg);
};

isNearOutline = function(a, b) {
  var drag, dragx, dragy, drop, droph, dropw, dropx, dropy, _ref1, _ref2, _ref3;
  drop = b;
  drag = a;
  _ref1 = [drop.getPosition().x, drop.getPosition().y], dropx = _ref1[0], dropy = _ref1[1];
  _ref2 = [drop.getWidth(), drop.getHeight()], dropw = _ref2[0], droph = _ref2[1];
  _ref3 = [drag.getPosition().x, drag.getPosition().y], dragx = _ref3[0], dragy = _ref3[1];
  if (dragx > dropx - dropw && dragx < dropx + dropw && dragy > dropy - droph && dragy < dropy + droph) {
    return true;
  } else {
    return false;
  }
};

onDragEnd = function(e) {
  var drag, droprect, tween;
  droprect = window.stage.find('.droppable');
  drag = e.target;
  if (isNearOutline(drag, droprect[0])) {
    drag.x = droprect.width() / 2 - drag.width() - 100;
    drag.y = droprect.height() / 2 - drag.height() - 100;
    return drag.name('dragged');
  } else {
    tween = new Kinetic.Tween({
      node: drag,
      duration: 0.9,
      x: validcoords.x,
      y: validcoords.y
    });
    return tween.play();
  }
};

module.exports = function(where, mainImg, dropElemts, coords, layer, container, group) {
  var c, clean, dragSrc, ims, key, minX, minY, n, offset, q, shpes, _i, _j, _len;
  shpes = null;
  c = document.getElementById('img_here');
  c.innerHTML = '';
  console.log(dropElemts.length);
  dragSrc = null;
  clean = window.stage.find(".dragimage");
  for (_i = 0, _len = clean.length; _i < _len; _i++) {
    key = clean[_i];
    key.remove();
  }
  if (window.kineticimg === null) {
    window.kineticimg = new Kinetic.Image({
      draggable: false,
      x: 520,
      y: 0,
      image: mainImg
    });
    window.layer.add(kineticimg);
    console.log(window.kineticimg);
  } else {
    window.kineticimg.setImage(mainImg);
  }
  ims = [];
  n = dropElemts.length;
  for (q = _j = 0; 0 <= n ? _j < n : _j > n; q = 0 <= n ? ++_j : --_j) {
    addImage(dropElemts[q], coords[q]);
  }
  offset = $(container).offset();
  minX = parseInt(offset.left);
  minY = parseInt(offset.top);
  container.addEventListener('drop', function(e) {
    var r, src, x, y;
    x = e.pageX;
    y = e.pageY;
    e.preventDefault();
    r = layer.getCanvas();
    console.log("jarejarejare");
    src = e.dataTransfer.getData('src');
    console.log(src[1]);
    return e.target.style.border = "";
  });
};



},{}],"/home/production/Documents/Aptana Studio 3 Workspace/test/tes/app/assets/javascripts/canvas/main.js.coffee":[function(require,module,exports){
var addLeft, descriptions, drags, dragstr, loadFromGet, mainImgs, mainstr, minatures, preLoad, str, str2, tab, tab2, tab3, tab5, tlowie;

loadFromGet = require('./loadFromGet.js.coffee');

preLoad = require('./preLoadAll.js.coffee');

addLeft = require('./addleft.js.coffee');

descriptions = {
  'mamuna': 'Mamuna – brzydkie straszydło. Okropna, tłusta, wielka i owłosiona. Mieszka w pobliżu lasów, zagajników i rzek. Jest złośliwa, dzieci często się jej boją. Czyha na nie i podmienia je na niegrzeczne, uprzykrzając życie rodzicom.',
  'poludnica': 'Południca – okropny stwór. Pojawia się w falującym zbożu w czasie najgorętszych godzin dnia. Ma silne ręce, którymi łapie pracujących wtedy ludzi i sprawia, że mdleją i chorują. Można się jej ustrzec uciekając od południowego skwaru z najbardziej nasłonecznionych miejsc, gdzie najczęściej można ją spotkać.',
  'swiecnik': 'Świecnik to dziwna zjawa. Pojawia się najczęściej na bagnach, w lasach lub wśród pól. Przybiera postać małego lub większego ognika. Zabłąkanym wskazuje drogę do domu, ale jeśli nie będzie się go traktować z należytym szacunkiem i uwagą, może całkiem poplątać ścieżki, a nawet wprowadzić na niebezpieczne mokradła.',
  'topielica': 'Topielica – wodna panna. Ma śliczne włosy, jest młoda i piękna. Żyje w wodzie. Pięknym śpiewem wabi do siebie ludzi – przede wszystkim młodzieńców, którzy zapominają przez nią o całym świecie. Ze swoich warkoczy plecie sieć, którą zatrzymuje zapatrzonych w nią wędrowców w jej krainie.',
  'borowy': 'Borowy – sprawiedliwy strażnik lasu. Żyje w lesie i wygląda prawie jak drzewo. Opiekuje się borem i zwierzętami leśnymi, czasem pomaga zagubionym wędrowcom, ale złości się, kiedy ktoś chce napsocić w lesie. Ma długa brodę, drewniane poroże i jest bardzo wysoki. Legendy mówią, że bardzo dawno temu ludzie udawali się do niego po rady i rozsądzanie sporów.',
  'cmuch': 'Ćmuch jest bardzo tajemniczym stworzeniem. Przebywa w pobliżu zbiorników wodnych. Jest bardzo szybki i zwinny – zawsze udaje mu się uciec obserwatorowi wylegującemu się na brzegu w pobliżu legowiska tego cudaka. Nie lubi leni – pluszcze, chlupie i wiruje, aż ci się wystraszą i wrócą do pracy.',
  'domowik': 'Domowik jest dobrym duszkiem. Chowa się w różnych zakątkach domu – w szczelinie pod podłogą, w mysiej dziurze, na cichym zapiecku. Jest zupełnie mały, chociaż bardzo stary. Jeśli dba się o niego, szanuje i karmi – dba o swoich domowników odganiając od nich nieszczęścia, jeśli nie – płata różne figle w domu. Nie da się go zobaczyć – chociaż jest starutki, ma zwinne nogi i jest szybki, dzięki czemu świetnie unika ludzi.',
  'Klobuk': 'Klobuk – latające dziwadło. Za dnia najczęściej wygląda jak przemoknięta, czarna kura, dlatego ciężko go rozpoznać. W nocy zaś, jego pierzasty ogon płonie w locie na tle czarnego nieba, kiedy zakrada się do sąsiadów, aby podkraść trochę zboża lub monet i zanieść swojemu właścicielowi.',
  'Planetnik': 'Planetnik to potężny mąż. Unosi się w powietrze i może przenosić na wielkich barkach (lub przeciągać na linie) ciężkie, gradowe chmury, tak aby je odciągnąć od pól. Może też złośliwie sprowadzić opady na uprawy – wszystko zależy od jego humoru i charakteru. Odgania go dźwięk kościelnego dzwonu. Zdarza się tak, że ten czy inny Płanetnik związuje się na zawsze z jedną wsią i pracuje na jej korzyść.',
  'strzyga': 'Strzyga – straszliwa mara. Zjawia się nocą, siada na piersi i męczy śpiącego człowieka. Można ją napotkać tylko w nocy, często wędruje pod postacią sowy. Kiedy zmieni się w swoją prawdziwą postać, da się ją poznać od razu – ciało ma dziwne, pokurczone i ciężkie, ale skrzydła i szpony sowie. Bardzo uparty i niemiły cudak.'
};

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
  var boro, coord, corner, domowik, dropbox, key, ktlowie, polud, swiecnik, _i;
  ktlowie = [];
  for (key = _i = 0; _i <= 3; key = ++_i) {
    ktlowie[key] = new Kinetic.Image({
      x: 100,
      y: 100,
      image: tlowie[key],
      visible: false,
      id: "tlow" + key,
      name: "tlow"
    });
  }
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
    width: 1000,
    height: 500,
    drawborder: true
  });
  window.layer = new Kinetic.Layer;
  window.staticlayer = new Kinetic.Layer;
  window.stage.add(staticlayer).add(layer);
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
  dropbox = new Kinetic.Rect({
    x: 0,
    y: 0,
    width: 500,
    height: 500,
    name: "droppable",
    draggable: false,
    fill: 'red',
    opacity: 0.09
  });
  window.layer.add(dropbox);
  con.addEventListener('dragover', function(e) {
    return e.preventDefault();
  });
  window.layer.draw();
  window.currentTlow = null;
  addLeft(ktlowie[0], staticlayer, 'ogien');
  addLeft(ktlowie[1], staticlayer, 'woda');
  addLeft(ktlowie[2], staticlayer, 'ziemia');
  addLeft(ktlowie[3], staticlayer, 'wiatr');
  polud = [];
  coord = [];
  boro = [];
  domowik = [];
  swiecnik = [];
  coord[0] = {
    left: "728 ",
    top: "259 "
  };
  polud[1] = {
    left: "681",
    top: "132"
  };
  polud[0] = {
    left: "808px",
    top: "258px"
  };
  boro[0] = {
    left: "765px",
    top: "162px"
  };
  domowik[0] = {
    left: "824px",
    top: "551px"
  };
  domowik[1] = {
    left: "838px",
    top: "298px"
  };
  swiecnik[0] = {
    left: "849px",
    top: "209px"
  };
  window.onload = function() {
    window.kineticimg = null;
    document.getElementById('mamuna').addEventListener('click', function() {
      var q;
      loadFromGet('img_here', mainImgs[0], [drags[0]], coord, window.layer, window.con);
      q = document.getElementById('desc');
      q.innerHTML = descriptions['mamuna'];
      return window.layer.draw();
    }, false);
    document.getElementById('poludnica').addEventListener('click', function() {
      var q;
      loadFromGet('img_here', mainImgs[3], [drags[5], drags[4]], polud, window.layer, con);
      q = document.getElementById('desc');
      q.innerHTML = descriptions['poludnica'];
      return window.layer.draw();
    }, false);
    document.getElementById('borowy').addEventListener('click', function() {
      var q;
      loadFromGet('img_here', mainImgs[1], [drags[1]], boro, window.layer, con);
      q = document.getElementById('desc');
      q.innerHTML = descriptions['borowy'];
      return window.layer.draw();
    }, false);
    document.getElementById('domowik').addEventListener('click', function() {
      var q;
      loadFromGet('img_here', mainImgs[2], [drags[2], drags[3]], domowik, window.layer, con);
      q = document.getElementById('desc');
      q.innerHTML = descriptions['domowik'];
      return window.layer.draw();
    }, false);
    document.getElementById('swiecnik').addEventListener('click', function() {
      var q;
      loadFromGet('img_here', mainImgs[4], [drags[6]], swiecnik, window.layer, con);
      q = document.getElementById('desc');
      q.innerHTML = descriptions['swiecnik'];
      return window.layer.draw();
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
