(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/production/Documents/Aptana Studio 3 Workspace/test/tes/app/assets/javascripts/canvas/addleft.js.coffee":[function(require,module,exports){
module.exports = function(bckimg, layer, id) {
  return document.getElementById(id).addEventListener('click', function() {
    if (window.currentTlow === null) {
      window.currentTlow = bckimg;
      layer.add(bckimg);
      bckimg.show();
      return layer.draw();
    } else {
      window.currentTlow.remove();
      window.currentTlow = bckimg;
      layer.add(bckimg);
      bckimg.show();
      layer.draw();
    }
  }, false);
};



},{}],"/home/production/Documents/Aptana Studio 3 Workspace/test/tes/app/assets/javascripts/canvas/loadFromGet.js.coffee":[function(require,module,exports){
var addImage, imgoffset, isNearOutline, onDragEnd, validcoords;

validcoords = [];

validcoords[0] = {
  x: 0,
  y: 0
};

validcoords[1] = {
  x: 0,
  y: 0
};

imgoffset = 520;

addImage = function(element, coord, i) {
  var kimg;
  kimg = new Kinetic.Image({
    x: coord.left + imgoffset,
    y: coord.top,
    image: element,
    opacity: 0,
    draggable: true,
    id: i,
    name: "dragimage"
  });
  validcoords[i] = {
    x: 0,
    y: 0
  };
  validcoords[i].x = kimg.getPosition().x;
  validcoords[i].y = kimg.getPosition().y;
  if (window.stage.find('.tlow').length === 0) {
    return false;
  } else {
    kimg.on('dragstart', function(e) {
      return this.opacity(1);
    });
    kimg.on('dragend', function(e) {
      return onDragEnd(e);
    });
    return window.layer.add(kimg);
  }
};

isNearOutline = function(a, b) {
  var drag, dragx, dragy, drop, droph, dropw, dropx, dropy, _ref, _ref1, _ref2;
  drop = b;
  drag = a;
  _ref = [drop.getPosition().x, drop.getPosition().y], dropx = _ref[0], dropy = _ref[1];
  _ref1 = [drop.getWidth(), drop.getHeight()], dropw = _ref1[0], droph = _ref1[1];
  _ref2 = [drag.getPosition().x, drag.getPosition().y], dragx = _ref2[0], dragy = _ref2[1];
  if (dragx > dropx - dropw && dragx < dropx + dropw && dragy > dropy - droph && dragy < dropy + droph) {
    return true;
  } else {
    return false;
  }
};

onDragEnd = function(e) {
  var drag, droprect, test, tween;
  if (window.stage.find('.tlow').length === 0) {
    alert("wat?");
  } else {
    droprect = window.stage.find('.tlow');
  }
  console.log(window.stage.find('.tlow').length);
  drag = e.target;
  test = isNearOutline(drag, droprect[0]);
  console.log(drag.getPosition().x - 520, ":", drag.getPosition().y, "dragid=" + (drag.id()));
  if (test) {
    validcoords[drag.id()].x = drag.getPosition().x;
    validcoords[drag.id()].y = drag.getPosition().y;
    return drag.name('dragged');
  } else {
    tween = new Kinetic.Tween({
      node: drag,
      duration: 0.5,
      x: validcoords[drag.id()].x,
      y: validcoords[drag.id()].y
    });
    return tween.play();
  }
};

module.exports = function(where, mainImg, dropElemts, coords, layer, container, group) {
  var c, clean, dragSrc, existingIds, ims, key, minX, minY, n, offset, q, shpes, _i, _j, _len;
  shpes = null;
  c = document.getElementById('img_here');
  c.innerHTML = '';
  dragSrc = null;
  clean = window.stage.find(".dragimage");
  for (_i = 0, _len = clean.length; _i < _len; _i++) {
    key = clean[_i];
    key.remove();
  }
  if (window.stage.find('.tlow').length === 0) {
    alert("dodaj tlow!");
  } else {
    if (window.kineticimg === null) {
      window.kineticimg = new Kinetic.Image({
        draggable: false,
        x: 520,
        y: 0,
        image: mainImg
      });
      window.layer.add(kineticimg);
    } else {

    }
    window.kineticimg.setImage(mainImg);
  }
  ims = [];
  n = dropElemts.length;
  existingIds = window.stage.find(".dragged").length;
  for (q = _j = 0; 0 <= n ? _j < n : _j > n; q = 0 <= n ? ++_j : --_j) {
    addImage(dropElemts[q], coords[q], q + existingIds);
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
var addLeft, descriptions, drags, dragstr, imTired, loadFromGet, mainImgs, mainstr, minatures, preLoad, str, str2, tab, tab2, tab3, tab5, tlowie, translate;

loadFromGet = require('./loadFromGet.js.coffee');

preLoad = require('./preLoadAll.js.coffee');

addLeft = require('./addleft.js.coffee');

imTired = function(name) {
  var functions;
  return functions = {
    'mamuna_hands': 'Dzięki potężnym ramionom Mamuny, #{name} ma siłę, straszny wygląd i może robić na złość rodzicom i podmieniać ich dzieci na niegrzeczne.',
    'poludnica_hands': "Dzięki silnym i długim ramionom Południcy, " + name + " może chwytać ciężary w locie.",
    'poludnica_head': ' Dzięki wielkiej szopie włosów Południcy, #{name} może unosić się w powietrzu w czasie letniego skwaru. ',
    'swiecnik_head': 'Dzięki płonącej główce Świecnika, #{name} może wskazywać drogę zagubionym.',
    'topielec_hands ': 'Dzięki sprawnym dłoniom i rękom Topielicy, #{name} może pleść sidła i świetnie poruszać się pod wodą.',
    'borowy_head ': 'Dzięki mądrości Borowego, #{name} świetnie radzi sobie w głuszy i rozpoznaje prawdziwa naturę napotkanych ludzi. ',
    'borowy_legs': 'Dzięki silnym i długim nogom Borowego, #{name} może szybko biegać.',
    'domowik_head': 'Dzięki mądrej główce Domowika, #{name} wie jak strzec swojego domu i umie znaleźć najlepsze kryjówki.',
    'domowik_legs': 'Dzięki szybkim nóżkom i małemu wzrostowi Domowika, #{name} potrafi szybko ukryć się przed natrętami.  ',
    'klobuk_legs': 'Kurze nóżki Kłobuka, pozwalają #{name} na przenoszenie ogromnych ciężarów w locie.',
    'klobuk_eyes ': 'Dobry wzrok Kłobuka, pozwala #{name} wypatrzeć ukryte skarby.',
    'klobuk_wings': 'Dzięki żarzącym się skrzydłom Kłobuka, #{name} może latać w nocy nie obawiając się przeszkód. ',
    'planetnik_hands ': 'Dzięki potężnym ramionom Płanetnika, #{name} może przenosić chmury burzowe tam, gdzie zechce. ',
    'strzyga_wings': 'Dzięki wielkim skrzydłom Strzygi, #{name}. może latać, ale tylko w nocy ',
    'strzyga_hands': 'Dzięki ostrym szponom Strzygi, #{name} czepia się swojego celu i mocno go trzyma. ',
    'cmuch_legs': 'Dzięki żabim nogom Ćmucha, #{name} jest niesamowicie szybki i zwinny w wodzie.'
  };
};

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

translate = {
  'borowy_glowa.png': 'borowy_head',
  'mamuna_lapy.png': 'mamuna_hands',
  'domowik_nogi_m.png': 'domowik_legs',
  'domowik_glowa_m.png': 'domowik_head',
  'poludnica_glowa.png': 'poludnica_head',
  'poludnica_lapy.png': 'poludnica_hands',
  'swiecnik_glowa.png': 'swiecnik_head'
};

dragstr = '/assets/elem/drag/mamuna_lapy.png, /assets/elem/drag/borowy_glowa.png, /assets/elem/drag/domowik_nogi_m.png, /assets/elem/drag/domowik_glowa_m.png, /assets/elem/drag/poludnica_glowa.png, /assets/elem/drag/poludnica_lapy.png, /assets/elem/drag/swiecnik_glowa.png';

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
  var boro, coord, corner, domowik, key, ktlowie, name, polud, swiecnik, _i;
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
  window.context = window.layer.getContext('2d');
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
  window.layer.draw();
  window.currentTlow = null;
  name = 's';
  document.getElementById('gotowe').addEventListener('click', function(e) {
    var databack, datafront, finElements, functions, q, tmp, _j, _len;
    datafront = window.context.getImageData(0, 0, 500, 500);
    databack = window.staticlayer.getContext('2d').getImageData(0, 0, 500, 500);
    tab = window.layer.find('.dragged');
    q = tab[0].image().src;
    finElements = [];
    name = document.getElementById('nazwa').value;
    functions = imTired(name);
    for (_j = 0, _len = tab.length; _j < _len; _j++) {
      key = tab[_j];
      tmp = key.image().src;
      finElements.push(functions[translate[tmp.substr(tmp.lastIndexOf('/') + 1)]]);
    }
    return window.stage.toDataURL({
      callback: function(dataUrl) {
        var image, smallcanvas;
        smallcanvas = document.createElement('canvas');
        smallcanvas.setAttribute('id', "smcav");
        smallcanvas.setAttribute('width', 500);
        smallcanvas.setAttribute('height', 500);
        image = new Image();
        image.src = dataUrl;
        q = smallcanvas.getContext('2d');
        return image.onload = function() {
          var url;
          q.drawImage(image, 0, 0, 500, 500, 0, 0, 500, 500);
          url = smallcanvas.toDataURL();
          console.log(url);
          return $.ajax({
            url: "/canv/create",
            type: "POST",
            data: {
              file: url,
              title: name
            },
            success: function() {
              return alert("succes");
            },
            error: function(e) {
              return alert(this.data);
            }
          });
        };
      }
    });
  });
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
    left: 71,
    top: 87
  };
  polud[1] = {
    left: 24,
    top: -39
  };
  polud[0] = {
    left: 149,
    top: 86
  };
  boro[0] = {
    left: 107,
    top: -11
  };
  domowik[1] = {
    left: 194,
    top: 142
  };
  domowik[0] = {
    left: 189,
    top: 373
  };
  swiecnik[0] = {
    left: 193,
    top: 37
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
