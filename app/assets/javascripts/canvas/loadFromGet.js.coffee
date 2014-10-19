validcoords = []

validcoords[0..1] = { x:0, y:0 }
imgoffset = 520
addImage = (element,coords)->
  offset = $(window.con).offset()
  kimg = new Kinetic.Image
    x: 71+imgoffset,
    y: 87,
    image: element,
    draggable: true,
    name: "dragimage"
  validcoords.x = kimg.getPosition().x
  validcoords.y = kimg.getPosition().y
  
  kimg.on('dragend', (e) ->
    onDragEnd(e)
    )    
  window.layer.add(kimg)
isNearOutline = (a,b) ->
  drop = b
  drag = a
  [dropx, dropy] = [drop.getPosition().x,drop.getPosition().y]
  [dropw, droph] = [drop.getWidth(),drop.getHeight()]
  [dragx, dragy] = [drag.getPosition().x,drag.getPosition().y]
  
  if dragx > dropx - dropw && dragx < dropx + dropw && dragy > dropy - droph && dragy < dropy + droph
    return true
  else
    return false        
onDragEnd = (e) ->
  droprect = window.stage.find('.droppable')
  
  drag = e.target
 
  if isNearOutline(drag,droprect[0])
    drag.x= droprect.width()/2 - drag.width() - 100
    drag.y= droprect.height()/2 - drag.height() - 100
    drag.name('dragged')
  else
    tween = new Kinetic.Tween
      node: drag,
      duration: 0.9,
      x: validcoords.x,
      y: validcoords.y
    tween.play()

module.exports = (where,mainImg,dropElemts,coords,layer,container,group)->
  
  shpes = null
  c = document.getElementById('img_here')
  c.innerHTML = ''
 # tmp = document.getElementById(where)
  
 # img = document.getElementById('rpimg')
  #img.src = mainImg.src
  
  console.log(dropElemts.length)
  #img.ondragstart = -> return false
  dragSrc = null
  clean = window.stage.find(".dragimage")
  for key in clean
    key.remove()
  if window.kineticimg == null
    window.kineticimg = new Kinetic.Image
      draggable: false,
      x: 520,
      y: 0,    
      image: mainImg,
    window.layer.add(kineticimg)   
    console.log(window.kineticimg)
  else
    window.kineticimg.setImage(mainImg)    
     
  ims = []

  n = dropElemts.length 

    
  
  
  
  for q in [0...n]
    addImage(dropElemts[q],coords[q])
    
   # console.log(i + 'n=' +  n)
   # q.style.left = coords[i].left
   # q.style.top = coords[i].top
   # q.setAttribute('class','drag1')
   # q.style.position = 'absolute'
   # q.setAttribute('draggable','true')
   # q.style.opacity = 0
   # tmp.appendChild(q)
   # ims.push(q)
   # i++

    
   
   # q.addEventListener('dragstart', (e) ->
      #TODO read html5 drag and drop in order to make it work as it shoud...
  
      
   #   e.dataTransfer.setData('src',this.src)
   #   e.dataTransfer.setData('width',this.width)
   #   e.dataTransfer.setData('height',this.height)
      
      
   #   e.dataTransfer.setDragImage(this,this.width/2,this.height/2)
   #   dragSrc = this
   # ,false) 
   # q.addEventListener('dragend', (e) ->
      #TODO read html5 drag and drop in order to make it work as it shoud...
      
   #   e.target.style.border = "none"
      
   # ,false)    
  offset = $(container).offset()
 # height = dropimg.height 
 # width = dropimg.width 
  minX = parseInt(offset.left) 
 # maxX = parseInt(offset.left) + stage.getWidth() - width
  minY = parseInt(offset.top) 
 # maxY = parseInt(offset.top) + stage.getHeight() - height
  
  container.addEventListener('drop', (e) ->
   
    x = e.pageX
    y = e.pageY         
    e.preventDefault()
    r = layer.getCanvas()
    console.log("jarejarejare") 
    src = e.dataTransfer.getData('src')
    console.log(src[1])
    e.target.style.border = ""
  #  image = new Kinetic.Image
  #    draggable: true,
  #    
  #    x: x - minX - e.dataTransfer.getData('width')/2 ,
  #    y: y - minY -  e.dataTransfer.getData('height')/2
  #    dragBoundFunc: (pos) ->
  #    
  #      X = pos.x
  #      Y = pos.y
  #      newX = if X < 0 then 0 else X
  #      newX = if X > maxX then maxX else X
  #      newY = if Y < 0 then  0 else Y
  #      newY = if Y > maxY then maxY else Y
  #      console.log("newy #{newY} maxY #{maxY} newX #{newX} maxX #{maxX} minx #{minX} miny #{minY} X #{X}")
  #      {x: newX, y: newY }   
      
        
        
        
      
    
  #  layer.add(image)
    
  #  imageObj = new Image()
  #  imageObj.src = src
    
  #  imageObj.onload = ->
      
  #    image.setImage(imageObj)
  #    layer.draw()
      

  )

  return
      
     
