loadFromGet = require('./loadFromGet.js.coffee')
preLoad = require('./preLoadAll.js.coffee')
addLeft = require('./addleft.js.coffee')
mainstr ='
/assets/elem/mamuna.png,
/assets/elem/borowy.png,
/assets/elem/domowik.png,
/assets/elem/poludnica.png,
/assets/elem/swiecnik.png
'
tab3 = mainstr.split(',') 

mainImgs = $.extend(true, {},preLoad(tab3))

dragstr = '
/assets/elem/drag/mamuna_lapy.png,
/assets/elem/drag/borowy_glowa.png,
/assets/elem/drag/domowik_nogi.png,
/assets/elem/drag/domowik_glowa.png,
/assets/elem/drag/poludnica_glowa.png,
/assets/elem/drag/poludnica_lapy.png,
/assets/elem/drag/swiecnik_glowa.png'

tab5 = dragstr.split(',')
drags = $.extend(true,{},preLoad(tab5))

str2 = '
/assets/tulow_ogien.png,
/assets/tulow_woda.png,
/assets/tulow_ziemia.png,
/assets/tulow_wiatr.png'
tab2 = new Array()
tab2 = str2.split(',')

tlowie = $.extend(true,{},preLoad(tab2))

str = '
/assets/ret/mini_tulow_ogien.png,
/assets/ret/mini_tulow_woda.png,
/assets/ret/mini_tulow_ziemia.png,
/assets/ret/mini_tulow_wiatr.png,
/assets/ret/mini_mamuna.png,
/assets/ret/mini_poludnica.png,
/assets/ret/mini_swiecnik.png,
/assets/ret/mini_domowik.png,
/assets/ret/mini_borowy.png'
tab = new Array()
tab = str.split(',')

minatures = $.extend(true, {},preLoad(tab))


$(document).ready ->
 
    
  $('#up_arrow').click( ->
    console.log("up")
    $('#list').animate(
      scrollTop: '+=100'
      
    , 100)
      
    return
  )
  

  $('#down_arrow').click( ->
    console.log("down")
    $('#list').animate(
      scrollTop: '-=100'
      
    , 100)
      
    return
  )
  
  window.stage = new Kinetic.Stage
    container: 'canvas',
    width: 500,
    height: 500,
    drawborder: true
  window.layer = new Kinetic.Layer
  window.context = layer.getContext()
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
  window.con = window.stage.getContainer()
  
  
  con.addEventListener('dragover', (e) ->
    e.preventDefault()
  )
  
    #***Zmiana tlowiow
  window.tlows= []
  window.ison = 0
  addLeft(tlowie[3],layer,'wiatr')
  addLeft(tlowie[2],layer,'ziemia')
  addLeft(tlowie[0],layer,'ogien')
  addLeft(tlowie[1],layer,'woda')
  
  
  polud = []
  coord = []
  coord[0] = left: "679px", top: "200px"
  polud[0] = left: "679px", top: "300px"
  polud[1] = left: "900px", top: "100px"
  #***ladowanie zdjec***argumenty:Gdzie zaladowac, glowny img, draggable elements,

  window.onload = ->
    document.getElementById('mamuna').addEventListener('click', ->
      loadFromGet('img_here',mainImgs[0],[drags[0]],coord,window.layer,window.con)
    , false)
    document.getElementById('poludnica').addEventListener('click', ->
      loadFromGet('img_here',mainImgs[3],[drags[5],drags[4]],polud,window.layer,con)
    , false)
    
    return
  return


  
  
###****olac to i sciagnac totem jquery plugin
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
    
