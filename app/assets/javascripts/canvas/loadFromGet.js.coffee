
module.exports = (where,mainImg,dropElemts,coords,layer,container,group)->
  shpes = null

  tmp = document.getElementById(where)
  
  img = document.getElementById('rpimg')
  img.src = mainImg.src
  
  console.log(dropimg)
  img.ondragstart = -> return false
  dragSrc = null
  for i,dropimg in dropElemts
    dropimg.style.left = coords[i].left
    dropimg.style.top = coords[i].top
    dropimg.setAttribute('id','drag1')
    dropimg.style.position = 'absolute'
    dropimg.setAttribute('draggable','true')
    dropimg.style.opacity = 0
    tmp.appendChild(dropimg)
  
  
   
    dropimg.addEventListener('dragstart', (e) ->
      #TODO read html5 drag and drop in order to make it work as it shoud...
  
      
      e.dataTransfer.setData('txt/html',dropimg.src)
      e.dataTransfer.setDragImage(dropimg,dropimg.width/2,dropimg.height/2)
      dragSrc = this
    ) 
    dropimg.addEventListener('dragend', (e) ->
      #TODO read html5 drag and drop in order to make it work as it shoud...
      
      e.target.style.border = "none"
      
    )    
  offset = $(container).offset()
  height = dropimg.height 
  width = dropimg.width 
  minX = parseInt(offset.left) 
  maxX = parseInt(offset.left) + stage.getWidth() - width
  minY = parseInt(offset.top) 
  maxY = parseInt(offset.top) + stage.getHeight() - height
  
  container.addEventListener('drop', (e) ->
    x = e.pageX
    y = e.pageY         
    e.preventDefault()
    src = e.dataTransfer.getData('txt/html')
    e.target.style.border = ""
    image = new Kinetic.Image
      draggable: true,
      
      x: x - 257 ,
      y: y - 198
      dragBoundFunc: (pos) ->
      
        X = pos.x
        Y = pos.y
        newX = if X < 0 then 0 else X
        newX = if X > maxX then maxX else X
        newY = if Y < 0 then  0 else Y
        newY = if Y > maxY then maxY else Y
        console.log("newy #{newY} maxY #{maxY} newX #{newX} maxX #{maxX} minx #{minX} miny #{minY} X #{X}")
        {x: newX, y: newY }   
      
        
        
        
      
    
    layer.add(image)
    
    imageObj = new Image()
    imageObj.src = src
    
    imageObj.onload = ->
      
      image.setImage(imageObj)
      layer.draw()
      

  )

  return
      
     
