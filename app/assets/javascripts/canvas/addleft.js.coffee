
module.exports = (bckimg,layer,id)->
  
  
  
  qtek = new Kinetic.Image
    x: 100,
    y: 100,
    image: bckimg,
    visible: false
  
  test = qtek
  window.tlows.push(test)
  document.getElementById(id).addEventListener('click', ->
    
    console.log("click")
    
    layer.add(test)
    test.show()
    window.stage.add(layer)
    layer.draw()
   , false )
