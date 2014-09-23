
window.onload = ->
  stage = new Kinetic.Stage
    container: 'canvas',
    width: 500,
    height: 500,
    drawborder: true
  layer = new Kinetic.Layer
  
  img = new Image()
  document.getElementById('ziemia').onclick = -> 
    console.log("click")
    qtek = new Kinetic.Image
      x: 100,
      y: 100,
      image: img,
      width: 100,
      height: 100
    layer.add(qtek)
    stage.add(layer)
  img.src = 'tulow_ziemia.png'
    
  
  layer.draw