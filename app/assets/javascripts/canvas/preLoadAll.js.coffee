mainImg=[]
dropImg=[]
iter = 0
module.exports = (main,droppable)->

  for i in main
    mainImg[iter] = new Image()
    mainImg[iter].src = image_path(i)
    iter += 1
  iter = 0
  for i in droppable
    dropImg[iter] = new Image()
    dropImg[iter].src = image_path(i)
    iter += 1
  ret = [mainImg,dropImg]
  return ret
