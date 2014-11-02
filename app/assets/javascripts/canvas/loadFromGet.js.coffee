# TODO: Przekazać nazwe draggable. 1). próbować wyciągnąc z img.src regexem.
#       getimagedata z contekstu i wrzucic do nowego canvasa
#       angularem/emberem dynamicznie podmienic strony
# Done: Mogę odzyskać elementy ktore zostaly dodane
validcoords = []

validcoords[0] = { x:0, y:0 }
validcoords[1] = { x:0, y:0 }
imgoffset = 520
addImage = (element,coord,i) ->

  kimg = new Kinetic.Image
    x: coord.left+imgoffset,
    y: coord.top,
    image: element,
    opacity: 0,
    draggable: true,
    id: i,
    name: "dragimage"

  validcoords[i] = { x:0, y:0 }
  validcoords[i].x = kimg.getPosition().x
  validcoords[i].y = kimg.getPosition().y

  if window.stage.find('.tlow').length == 0

    return false

  else

    kimg.on('dragstart', (e) ->

      this.opacity(1)

      )
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

  if window.stage.find('.tlow').length == 0

    alert("wat?")

  else

    droprect = window.stage.find('.tlow')

  console.log(window.stage.find('.tlow').length)
  drag = e.target
  test = isNearOutline(drag,droprect[0])
  console.log(drag.getPosition().x-520,":",drag.getPosition().y,"dragid=#{drag.id()}")

  if test

    validcoords[drag.id()].x = drag.getPosition().x
    validcoords[drag.id()].y = drag.getPosition().y

    drag.name('dragged')

  else

    tween = new Kinetic.Tween
      node: drag,
      duration: 0.5,
      x: validcoords[drag.id()].x,
      y: validcoords[drag.id()].y,

    tween.play()



module.exports = (where,mainImg,dropElemts,coords,layer,container,group)->

  shpes = null
  c = document.getElementById('img_here')
  c.innerHTML = ''
 # tmp = document.getElementById(where)

 # img = document.getElementById('rpimg')
  #img.src = mainImg.src


  #img.ondragstart = -> return false
  dragSrc = null
  clean = window.stage.find(".dragimage")
  for key in clean
    key.remove()
  if window.stage.find('.tlow').length == 0
    alert "dodaj tlow!"
  else
    if window.kineticimg == null
      window.kineticimg = new Kinetic.Image
        draggable: false,
        x: 520,
        y: 0,
        image: mainImg,
      window.layer.add(kineticimg)

    else
    window.kineticimg.setImage(mainImg)

  ims = []

  n = dropElemts.length

  existingIds = window.stage.find(".dragged").length



  for q in [0...n]
    addImage(dropElemts[q],coords[q],q+existingIds)


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
