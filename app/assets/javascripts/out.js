(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/production/Documents/Aptana Studio 3 Workspace/test/tes/app/assets/javascripts/canvas/main.js.coffee":[function(require,module,exports){
window.onload = function() {
  var img, layer, stage;
  stage = new Kinetic.Stage({
    container: 'canvas',
    width: 500,
    height: 500,
    drawborder: true
  });
  layer = new Kinetic.Layer;
  img = new Image();
  document.getElementById('ziemia').onclick = function() {
    var qtek;
    console.log("click");
    qtek = new Kinetic.Image({
      x: 100,
      y: 100,
      image: img,
      width: 100,
      height: 100
    });
    layer.add(qtek);
    return stage.add(layer);
  };
  img.src = 'assets/tulow_ziemia.png';
  return layer.draw;
};



},{}]},{},["/home/production/Documents/Aptana Studio 3 Workspace/test/tes/app/assets/javascripts/canvas/main.js.coffee"]);
