
window.onload = ->
  stage = new Kinetic.Stage
    container: 'canvas',
    width: 500,
    height: 500,
    drawborder: true
  layer = new Kinetic.Layer
  
  con = stage.getContainer()
  console.log(con.offsetWidth)
  
  con.addEventListener('dragover', (e) ->
    e.preventDefault()
  )
  
    #***Zmiana tlowiow
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
  img.id = "img"
  console.log(image_path('tulow_ziemia.png'))
  document.getElementById('ziemia').addEventListener('click', ->
    test.show()
    layer.draw()
    return
  ,false)
  #***ladowanie zdjec***argumenty:Gdzie zaladowac, glowny img, draggable elements, 
  document.getElementById('mamuna').addEventListener('click', ->
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
  
     e.dataTransfer.setDragImage(e.target,153,98)
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
 
  layer.draw