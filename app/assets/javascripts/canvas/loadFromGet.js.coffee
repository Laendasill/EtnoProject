
module.exports = (where,mainImg,dropElemts,coords,layer,container,group)->
  shpes = null

  tmp = document.getElementById(where)
  
  img = document.getElementById('rpimg')
  img.src = mainImg.src
  dropimg = dropElemts[0]
  img.ondragstart = -> return false
  
  dropimg.style.left = coords[0].left
  dropimg.style.top = coords[0].top
  dropimg.setAttribute('id','drag1')
  dropimg.style.position = 'absolute'
  dropimg.setAttribute('draggable','true')
  dropimg.style.opacity = 0
  
  tmp.appendChild(dropimg)
  
  dragSrc = null
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

  container.addEventListener('drop', (e) ->
    x = e.pageX
    y = e.pageY         
    e.preventDefault()
    e.target.style.border = ""
    image = new Kinetic.Image
      draggable: true,
      
      x: x - 257 ,
      y: y - 198,
      dragBoundFunc: (pos) ->
      newX = pos.x
      newY = pos.y
      newX = if pos.x < 0 then 0 else pos.x
      newX = if pos.x > stage.getWidth() then stage.getWidth() else pos.x
      newY = if pos.y < 0 then  0 else pos.y
      newY = if pos.y > stage.getHeight() then stage.getHeight() else pos.y
     `return {
         x: newX,
         y: newY
       }
      `
      return  
        
        
      
    
    layer.add(image)
    
    imageObj = new Image()
    imageObj.src = dragSrc.src
    
    imageObj.onload = ->
      
      image.setImage(imageObj)
      layer.draw()
      

  )

  return
      
     
