
window.onload = ->
  stage = new Kinetic.Stage
    container: 'canvas',
    width: 500,
    height: 500,
    drawborder: true
  layer = new Kinetic.Layer
  testdata = $('#canvas')
  alert testdata.data
  img = new Image()
  test = null
  img.onload = ->
    console.log("click")
    qtek = new Kinetic.Image
      x: 100,
      y: 100,
      image: img,
      width: 100,
      height: 100,
      visible: false
    layer.add(qtek)
    test = qtek
    stage.add(layer)
  img.src = image_path('tulow_ziemia.png')
  console.log(image_path('tulow_ziemia.png'))
  document.getElementById('ziemia').addEventListener('click', ->
    test.show()
    layer.draw()
    return
  ,false)
  document.getElementById('mamuna').addEventListener('click', ->
    tmp = document.getElementById('img_here')
    img = document.createElement('img')
    img.src = image_path('mamuna.png')
    tmp.innerHTML = 
    tmp.appendChild(img) 
    return
  ,false )
  
  layer.draw