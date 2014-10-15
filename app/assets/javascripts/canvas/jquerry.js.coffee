
module.exports = (where,mainImg,dropElemts,coords)->
  shpes = null
  $('.drag1').remove()
  
  tmp = document.getElementById(where)
  
  img = document.getElementById('rpimg')
  img.src = mainImg.src
  
 
  img.ondragstart = -> return false
  dragSrc = null
  
  ims = []
  i=0
  n = dropElemts.length 
  for q in dropElemts 
    
    q.style.left = coords[i].left
    q.style.top = coords[i].top
    q.setAttribute('class','drag1')
    q.style.position = 'absolute'
    q.setAttribute('draggable','true')
    q.style.opacity = 1
    tmp.appendChild(q)
    ims.push(q)
    $(q).draggable({ cursor: "default", cursorAt: { top: q.height/2, left: q.width/2 },
    revert: "invalid",
    
    value: q.src })
  
 
      