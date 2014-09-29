loadFromGet = require('./loadFromGet.js.coffee')

window.onload = ->
  stage = new Kinetic.Stage
    container: 'canvas',
    width: 500,
    height: 500,
    drawborder: true
  layer = new Kinetic.Layer
  corner = new Kinetic.Group(
    x: 500,
    y: 500,
    draggable: true,
    dragBoundFunc: (pos) ->
      newX = pos.x
      newY = pos.y
      newX = if pos.x < 0 then 0 else pos.x
      newX = if pos.x > stage.getWidth() then stage.getWidth() else pos.x
      newY = if pos.y < 0 then  0 else pos.y
      newY = if pos.y > stage.getHeight() then stage.getHeight() else pos.y
      return {
        x: newX,
        y: newY
      }
    )
  con = stage.getContainer()
  
  
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
   #   width: 100,
   #   height: 100,
      visible: false
    layer.add(qtek)
    test = qtek
    stage.add(layer)
  img.src = image_path('tulow_ziemia.png')
  img.id = "img"
  
  document.getElementById('ziemia').addEventListener('click', ->
    test.show()
    layer.draw()
    return
  ,false)
  #***ladowanie zdjec***argumenty:Gdzie zaladowac, glowny img, draggable elements,
  mainimg = new Image()
  mainimg.src = image_path('mamuna.png') 
  testimg = new Image()
  testimg.src = image_path('strona_pogladowa.png')
  lapy = []
  lapy[0] = new Image()
  lapy[0].src = image_path('mamuna_lapy.png')
  coord = []
  coord[0] = left: "679px", top: "200px"
  down = []
  up = []
  console.log($('#swap_stuff li img').first().attr('id'))
  
  $('#als-list').jPages
    containerID: "swap_stuff",
    perPage : 3,
    scrollBrowse: true,
    previous : "span.als-prev",
    next: "span.als-next"

  document.getElementById('mamuna').addEventListener('click', ->
    loadFromGet('img_here',mainimg,lapy,coord,layer,con)
  , false)
  document.getElementById('testimg').addEventListener('click', ->
    loadFromGet('img_here',testimg,lapy,coord,layer,con)
  , false)
  layer.draw() 
  
  
###****olac to i sciagnac totem jquery plugin
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
###    
 
###
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
###
    
