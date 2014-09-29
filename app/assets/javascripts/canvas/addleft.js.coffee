module.exports = (bckimg,stage,layer)->
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
    img.src = bckimg.src
    img.id = "img"
    
    document.getElementById('ziemia').addEventListener('click', ->
      test.show()
      layer.draw()
      return
    ,false)