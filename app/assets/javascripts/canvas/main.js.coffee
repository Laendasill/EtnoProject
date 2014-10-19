loadFromGet = require('./loadFromGet.js.coffee')
preLoad = require('./preLoadAll.js.coffee')
addLeft = require('./addleft.js.coffee')
descriptions = { 'mamuna': 'Mamuna – brzydkie straszydło. Okropna, tłusta, wielka i owłosiona. Mieszka w pobliżu lasów, zagajników i rzek. Jest złośliwa, dzieci często się jej boją. Czyha na nie i podmienia je na niegrzeczne, uprzykrzając życie rodzicom.',
'poludnica': 'Południca – okropny stwór. Pojawia się w falującym zbożu w czasie najgorętszych godzin dnia. Ma silne ręce, którymi łapie pracujących wtedy ludzi i sprawia, że mdleją i chorują. Można się jej ustrzec uciekając od południowego skwaru z najbardziej nasłonecznionych miejsc, gdzie najczęściej można ją spotkać.', 
'swiecnik': 'Świecnik to dziwna zjawa. Pojawia się najczęściej na bagnach, w lasach lub wśród pól. Przybiera postać małego lub większego ognika. Zabłąkanym wskazuje drogę do domu, ale jeśli nie będzie się go traktować z należytym szacunkiem i uwagą, może całkiem poplątać ścieżki, a nawet wprowadzić na niebezpieczne mokradła.',
'topielica': 'Topielica – wodna panna. Ma śliczne włosy, jest młoda i piękna. Żyje w wodzie. Pięknym śpiewem wabi do siebie ludzi – przede wszystkim młodzieńców, którzy zapominają przez nią o całym świecie. Ze swoich warkoczy plecie sieć, którą zatrzymuje zapatrzonych w nią wędrowców w jej krainie.',
'borowy': 'Borowy – sprawiedliwy strażnik lasu. Żyje w lesie i wygląda prawie jak drzewo. Opiekuje się borem i zwierzętami leśnymi, czasem pomaga zagubionym wędrowcom, ale złości się, kiedy ktoś chce napsocić w lesie. Ma długa brodę, drewniane poroże i jest bardzo wysoki. Legendy mówią, że bardzo dawno temu ludzie udawali się do niego po rady i rozsądzanie sporów.', 
'cmuch': 'Ćmuch jest bardzo tajemniczym stworzeniem. Przebywa w pobliżu zbiorników wodnych. Jest bardzo szybki i zwinny – zawsze udaje mu się uciec obserwatorowi wylegującemu się na brzegu w pobliżu legowiska tego cudaka. Nie lubi leni – pluszcze, chlupie i wiruje, aż ci się wystraszą i wrócą do pracy.', 
'domowik': 'Domowik jest dobrym duszkiem. Chowa się w różnych zakątkach domu – w szczelinie pod podłogą, w mysiej dziurze, na cichym zapiecku. Jest zupełnie mały, chociaż bardzo stary. Jeśli dba się o niego, szanuje i karmi – dba o swoich domowników odganiając od nich nieszczęścia, jeśli nie – płata różne figle w domu. Nie da się go zobaczyć – chociaż jest starutki, ma zwinne nogi i jest szybki, dzięki czemu świetnie unika ludzi.',
'Klobuk': 'Klobuk – latające dziwadło. Za dnia najczęściej wygląda jak przemoknięta, czarna kura, dlatego ciężko go rozpoznać. W nocy zaś, jego pierzasty ogon płonie w locie na tle czarnego nieba, kiedy zakrada się do sąsiadów, aby podkraść trochę zboża lub monet i zanieść swojemu właścicielowi.', 
'Planetnik': 'Planetnik to potężny mąż. Unosi się w powietrze i może przenosić na wielkich barkach (lub przeciągać na linie) ciężkie, gradowe chmury, tak aby je odciągnąć od pól. Może też złośliwie sprowadzić opady na uprawy – wszystko zależy od jego humoru i charakteru. Odgania go dźwięk kościelnego dzwonu. Zdarza się tak, że ten czy inny Płanetnik związuje się na zawsze z jedną wsią i pracuje na jej korzyść.',
'strzyga': 'Strzyga – straszliwa mara. Zjawia się nocą, siada na piersi i męczy śpiącego człowieka. Można ją napotkać tylko w nocy, często wędruje pod postacią sowy. Kiedy zmieni się w swoją prawdziwą postać, da się ją poznać od razu – ciało ma dziwne, pokurczone i ciężkie, ale skrzydła i szpony sowie. Bardzo uparty i niemiły cudak.'
}

mainstr ='
/assets/elem/mamuna.png,
/assets/elem/borowy.png,
/assets/elem/domowik.png,
/assets/elem/poludnica.png,
/assets/elem/swiecnik.png
'
tab3 = mainstr.split(',') 

mainImgs = $.extend(true, {},preLoad(tab3)) # copying mainImg from preLoad didin't work well (shallow copy) 
                                            # using jquery extend() to make hard copy
dragstr = '
/assets/elem/drag/mamuna_lapy.png,
/assets/elem/drag/borowy_glowa.png,
/assets/elem/drag/domowik_nogi.png,
/assets/elem/drag/domowik_glowa.png,
/assets/elem/drag/poludnica_glowa.png,
/assets/elem/drag/poludnica_lapy.png,
/assets/elem/drag/swiecnik_glowa.png'

tab5 = dragstr.split(',')
drags = $.extend(true,{},preLoad(tab5))

str2 = '
/assets/tulow_ogien.png,
/assets/tulow_woda.png,
/assets/tulow_ziemia.png,
/assets/tulow_wiatr.png'
tab2 = new Array()
tab2 = str2.split(',')

tlowie = $.extend(true,{},preLoad(tab2))

str = '
/assets/ret/mini_tulow_ogien.png,
/assets/ret/mini_tulow_woda.png,
/assets/ret/mini_tulow_ziemia.png,
/assets/ret/mini_tulow_wiatr.png,
/assets/ret/mini_mamuna.png,
/assets/ret/mini_poludnica.png,
/assets/ret/mini_swiecnik.png,
/assets/ret/mini_domowik.png,
/assets/ret/mini_borowy.png'
tab = new Array()
tab = str.split(',')

minatures = $.extend(true, {},preLoad(tab))

$(document).ready ->
  ktlowie = []                      #Preloading kinetic elements
  for key in [0..3]
    ktlowie[key] = new Kinetic.Image
      x: 100,
      y: 100,
      image: tlowie[key],
      visible: false,
      id: "tlow#{key}",
      name: "tlow"
      
  $('#up_arrow').click( ->          #Making arrows scroll bar on the right 
    console.log("up")
    $('#list').animate(
      scrollTop: '+=100'
      
    , 100)
      
    return
  )
  

  $('#down_arrow').click( ->
    console.log("down")
    $('#list').animate(
      scrollTop: '-=100'
      
    , 100)
      
    return
  )
  
  window.stage = new Kinetic.Stage  #Making stage
    container: 'canvas',
    width: 1000,
    height: 500,
    drawborder: true
  window.layer = new Kinetic.Layer
  window.staticlayer = new Kinetic.Layer
  window.stage.add(staticlayer).add(layer)
  window.context = layer.getContext()
  corner = new Kinetic.Group(
    x: 500,
    y: 500,
    draggable: true,
    dragBoundFunc: (pos) ->
      newX = pos.x
      newY = pos.y
      newX = if pos.x < 0 then 0 else pos.x
      newX = if pos.x > stage.getWidth() then stage.getWidth() else pos.x
      newY = if pos.y < 0 then  0 else pos.y
      newY = if pos.y > stage.getHeight() then stage.getHeight() else pos.y
      return {
        x: newX,
        y: newY
      }
    )
  window.con = window.stage.getContainer()
  dropbox = new Kinetic.Rect
    x: 0,
    y: 0,
    width: 500,
    height: 500,
    name: "droppable",
    draggable: false,
    fill: 'red',
    opacity: 0.09
  window.layer.add(dropbox)
    
  
  con.addEventListener('dragover', (e) ->
    e.preventDefault()
  )
  window.layer.draw()
    #***Zmiana tlowiow
  window.currentTlow= null
  


  addLeft(ktlowie[0],staticlayer,'ogien')
  addLeft(ktlowie[1],staticlayer,'woda')
  addLeft(ktlowie[2],staticlayer,'ziemia')
  addLeft(ktlowie[3],staticlayer,'wiatr')
  
  
 
  
  
  polud = []
  coord = []
  boro = []
  domowik = []
  swiecnik = []
  coord[0] = left: "728 ", top: "259 "
  polud[1] = left: "681", top: "132"
  polud[0] = left: "808px", top: "258px"
  boro[0] =  left: "765px", top: "162px"
  domowik[0] = left: "824px", top: "551px"
  domowik[1] = left: "838px", top: "298px"
  swiecnik[0] = left: "849px", top: "209px"
  #***ladowanie zdjec***argumenty:Gdzie zaladowac, glowny img, draggable elements,

  window.onload = ->
    
    window.kineticimg = null 
    document.getElementById('mamuna').addEventListener('click', ->
      loadFromGet('img_here',mainImgs[0],[drags[0]],coord,window.layer,window.con)
      q = document.getElementById('desc')
      
      q.innerHTML = descriptions['mamuna']
      window.layer.draw()
    , false)
    document.getElementById('poludnica').addEventListener('click', ->
      loadFromGet('img_here',mainImgs[3],[drags[5],drags[4]],polud,window.layer,con)
      q = document.getElementById('desc')
      
      q.innerHTML = descriptions['poludnica']
      window.layer.draw()
    , false)
    document.getElementById('borowy').addEventListener('click', ->
      loadFromGet('img_here',mainImgs[1],[drags[1]],boro,window.layer,con)
      q = document.getElementById('desc')
      
      q.innerHTML = descriptions['borowy']
      window.layer.draw()
    , false)
    document.getElementById('domowik').addEventListener('click', ->
      loadFromGet('img_here',mainImgs[2],[drags[2],drags[3]],domowik,window.layer,con)
      q = document.getElementById('desc')
      
      q.innerHTML = descriptions['domowik']
      window.layer.draw()
    , false)
    document.getElementById('swiecnik').addEventListener('click', ->
      loadFromGet('img_here',mainImgs[4],[drags[6]],swiecnik,window.layer,con)
      q = document.getElementById('desc')
      
      q.innerHTML = descriptions['swiecnik']
      window.layer.draw()
    , false)
    
    return
  return


  
  
###****olac to i sciagnac totem jquery plugin
    mainimg = new Image()
  mainimg.src = image_path('mamuna.png') 
  testimg = new Image()
  testimg.src = image_path('strona_pogladowa.png')
  lapy = []
  lapy[0] = new Image()
  lapy[0].src = image_path('mamuna_lapy.png')
  
  down = []
  up = []
  $('#swap_stuff li').( ->
    alert 'qw'
    down.push($('#swap_stuff ').last().detach())
    down.push($('#swap_stuff ').last().detach())
    down.push($('#swap_stuff ').last().detach())
    )
  up = ->
    if $('#swap_stuff li').first().attr('id') == 'mamuna'
      return false
    else
      down.push($('#swap_stuff ').last().detach())
      $('#swap_stuff ').first().append(up.pop())
      
      return
  down = ->
    if $('#swap_stuff li').last().attr('id') == 'last'
      return false
    else
      tp = $('#swap_stuff ').first().detach()
      up.push(tp)
      $('#swap_stuff ').last().append(down.pop())
      
      return
  $('#up').click( -> up() )
  $('#down').click( -> down() )
 
  swapup = (im1,im2) ->
    tmp = document.createElement('div')
    im1.parentNode.insertBefore(tmp,im1)
    im2.parentNode.insertBefore(im1,im2)
    tmp.parentNode.insertBefore(im2,im1)
    tmp.parentNode.removeChild(tmp)
    return
###    
 
###
   tmp = document.getElementById('img_here')
    
      
     
   testimg = new Image()
   testimg.src = image_path('mamuna_lapy.png')
   testimg.setAttribute('id','drag1')
   testimg.style.position = 'absolute'
   
   testimg.style.left = "679px"
   testimg.style.top = "200px" 
   tmp.innerHTML = ''
   img = document.createElement('img')
   img.src = image_path('mamuna.png')
   img.setAttribute('usemap', '#map1')
   img.setAttribute('id', 'qwe')
   img.ondragstart = -> return false
   tmp.appendChild(img)
   tmp.appendChild(testimg)
   dragSrc =  null
   x = y = null 
   document.getElementById('drag1').addEventListener('dragstart', (e) ->
  
     e.dataTransfe r.setDragImage(e.target,153,98)
     dragSrc = this
     
     
   )
  
   con.addEventListener('drop', (e) ->
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
    )
       
       
   
    
 
  ,false )
###
    
