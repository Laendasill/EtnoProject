
module.exports = (where,mainImg,dropElemts,coords,layer,container,group)->
  shpes = null
  $('.drag1').remove()
  
  tmp = document.getElementById(where)
  
  img = document.getElementById('rpimg')
  img.src = mainImg.src
  
  console.log(dropElemts.length)
  img.ondragstart = -> return false
  dragSrc = null
  
  ims = []
  i=0
  for i in [0...2]
    console.log(i)
    dropElemts[i].style.left = coords[i].left
    dropElemts[i].style.top = coords[i].top
    dropElemts[i].setAttribute('class','drag1')
    dropElemts[i].style.position = 'absolute'
    dropElemts[i].setAttribute('draggable','true')
    dropElemts[i].style.opacity = 1
    tmp.appendChild(dropElemts[i])
    ims.push(dropElemts[i])
    
    
   
    dropElemts[i].addEventListener('dragstart', (e) ->
      #TODO read html5 drag and drop in order to make it work as it shoud...
  
      
      e.dataTransfer.setData('src',this.src)
      e.dataTransfer.setData('width',this.width)
      e.dataTransfer.setData('height',this.height)
      
      
      e.dataTransfer.setDragImage(this,this.width/2,this.height/2)
      dragSrc = this
    ,false) 
    dropElemts[i].addEventListener('dragend', (e) ->
      #TODO read html5 drag and drop in order to make it work as it shoud...
      
      e.target.style.border = "none"
      
    ,false)    
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
    
    src = e.dataTransfer.getData('src')
    console.log(src[1])
    e.target.style.border = ""
    image = new Kinetic.Image
      draggable: true,
      
      x: x - minX - e.dataTransfer.getData('width')/2 ,
      y: y - minY -  e.dataTransfer.getData('height')/2
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
      
        
        
        
      
    
    layer.add(image)
    
    imageObj = new Image()
    imageObj.src = src
    
    imageObj.onload = ->
      
      image.setImage(imageObj)
      layer.draw()
      

  )

  return
      
     
