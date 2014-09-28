

module.exports = (where,mainImg,dropElemts,coords,layer,container)->
  tmp = document.getElementById(where)
  
  img = document.getElementById('rpimg')
  img.src = mainImg.src
  dropimg = dropElemts[0]
  img.ondragstart = -> return false
  
  dropimg.style.left = coords[0].left
  dropimg.style.top = coords[0].top
  dropimg.setAttribute('id','drag1')
  dropimg.style.position = 'absolute'
  
  tmp.appendChild(dropimg)
  
  dragSrc = null
  dropimg.addEventListener('dragstart', (e) ->
    #TODO read html5 drag and drop in order to make it work as it shoud...
    this.style.opacity = '1'
    e.dataTransfer.setDragImage(e.target,dropimg.width/2,dropimg.height/2)
    dragSrc = this
  )   
  container.addEventListener('drop', (e) ->
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
      return
  )
      
     
