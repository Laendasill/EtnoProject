
module.exports = (bckimg,layer,id)->
  

  document.getElementById(id).addEventListener('click', ->
    if window.currentTlow == null
      window.currentTlow = bckimg
      
      
      layer.add(bckimg)
      bckimg.show()
      
      layer.draw()
    else 
      window.currentTlow.remove()
      
      window.currentTlow = bckimg
      layer.add(bckimg)
      bckimg.show()
      layer.draw()
      
      return
   , false )
