mainImg=[]


module.exports = (main)->
  c = 0
  
  for i in main
    mainImg[c] = new Image()
    mainImg[c].src = main[c]
    
    c++
  
  mainImg
  
