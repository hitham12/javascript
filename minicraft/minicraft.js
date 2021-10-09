var Minecraft = {};
let maincontainer = document.querySelector(`.maincontainer`),
  btncontainer = document.querySelector(`.btncontainer`),
  btnsmall = document.querySelector(`.btnsmall`),
  btnbig = document.querySelector(`.btnbig`),
  smallmapmain = document.querySelector(`.smallmapmain`),
  smallmap = document.querySelector(`.smallmap`),
  bigmapmain = document.querySelector(`.bigmapmain`),
  bigmap = document.querySelector(`.bigmap`),
  returntoMain = document.querySelectorAll(`.return`),
  refresh = document.querySelectorAll(`.refresh`),
  axe = document.querySelector(`.axe`),
  axe2 = document.querySelector(`.axe2`),
  Shovel = document.querySelector(`.Shovel`),
  Shovel2 = document.querySelector(`.Shovel2`),
  pikaxe = document.querySelector(`.pikaxe`),
  pikaxe2 = document.querySelector(`.pikaxe2`),
  selectedtool = "",
  woodcounter = document.querySelector(`.wood`),
  woodcounter2 = document.querySelector(`.wood2`),
  leavescounter = document.querySelector(`.leaves`),
  leavescounter2 = document.querySelector(`.leaves2`),
  rockcounter = document.querySelector(`.rock`),
  rockcounter2 = document.querySelector(`.rock2`),
  grasscounter = document.querySelector(`.grass`),
  grasscounter2 = document.querySelector(`.grass2`),
  dirtcounter = document.querySelector(`.dirt`),
  dirtcounter2 = document.querySelector(`.dirt2`),
  storage = document.querySelector(`.storage`),
  storage2 = document.querySelector(`.storage2`),
  adStore=0;

maincontainer.style.display = "block";
smallmapmain.style.display = "none";
bigmapmain.style.display = "none";

btnsmall.addEventListener(`click`, () => {
  maincontainer.style.display = "none";
  bigmapmain.style.display = "none";
  smallmapmain.style.display = "grid";
  initializeSmallMap();
});

btnbig.addEventListener(`click`, () => {
  bigmapmain.style.display = "grid";
  smallmapmain.style.display = "none";
  maincontainer.style.display = "none";
  initializeBigMap();
});

for (let page = 0; page < returntoMain.length; page++) {
  returntoMain[page].addEventListener(`click`, () => {
    maincontainer.style.display = "grid";
    bigmapmain.style.display = "none";
    smallmapmain.style.display = "none";
  });
}
for (let page = 0; page < refresh.length; page++) {
  refresh[page].addEventListener(`click`, () => {
    maincontainer.style.display = "none";
    bigmapmain.style.display = "none";
    smallmapmain.style.display = "grid";
  });
}

function initializeSmallMap() {
  const smallgameBoard = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
    [0, 0, 2, 2, 2, 0, 0, 0, 0, 0],
    [0, 0, 2, 2, 2, 0, 0, 0, 0, 4],
    [0, 0, 2, 2, 2, 0, 0, 0, 4, 4],
    [0, 0, 0, 3, 0, 0, 0, 0, 4, 4],
    [0, 0, 0, 3, 0, 5, 5, 5, 5, 5],
    [5, 5, 5, 5, 5, 6, 6, 6, 6, 6],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7]
  ]

  generateSmallMape(smallgameBoard, smallmap);
}
function initializeBigMap() {
  const biggameBoard = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 0, 2, 2, 2, 0, 0, 0, 0, 4, 0, 0, 2, 2, 2, 0, 0, 0, 0, 4],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
    [0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0],
    [0, 0, 2, 2, 2, 0, 0, 0, 4, 4, 0, 0, 2, 2, 2, 0, 0, 0, 4, 4],
    [4, 0, 0, 3, 0, 0, 0, 0, 4, 4, 0, 0, 0, 3, 0, 0, 0, 4, 4, 4],
    [4, 4, 0, 3, 0, 5, 5, 5, 5, 5, 0, 0, 0, 3, 0, 5, 5, 5, 5, 5],
    [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
    [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
    [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
  ]

  generateSmallMape(biggameBoard, bigmap);
}
function generateSmallMape(smallgameBoard, map) {

  for (let row = 0; row < smallgameBoard.length; row++) {
    for (let column = 0; column < smallgameBoard[row].length; column++) {
      generateElemets(smallgameBoard, map, row, column);

    }

  }
}
function generateElemets(smallgameBoard, map, row, column) {
  switch (smallgameBoard[row][column]) {
    case 0:
      createElement('empty', map, row, column);
      break;
    case 1:
      createElement('cloud', map, row, column);
      break;
    case 2:
      createElement('leaves', map, row, column);
      break;
    case 3:
      createElement('wood', map, row, column);
      break;
    case 4:
      createElement('rock', map, row, column);
      break;
    case 5:
      createElement('grass', map, row, column);
      break;
    case 6:
      createElement('dirt', map, row, column);
      break;
    case 7:
      createElement('lava', map, row, column);
      break;

    default:
      break;
  }
}
function createElement(type, map, row, column) {
  let element = document.createElement('div');
  element.classList.add(type);
  element.classList.add('hover');
  element.style.gridRowStart = row + 1;
  element.style.gridColumnStart = column + 1;
  element.addEventListener('click', clickHandle);
  map.append(element);
}
function clickHandle(e) {
  if (this.getAttribute(`class`).includes(`wood`) &&selectedtool ===`axe`) {
    this.setAttribute(`class`, `empty`);
    woodcounter.value++;      
  }
  if (this.getAttribute(`class`).includes(`leaves`)&&selectedtool ===`axe`) {
    this.setAttribute(`class`, `empty`);
    leavescounter.value++; 
  }

  if (this.getAttribute(`class`).includes(`rock`)&&selectedtool ===`pikaxe`){
    this.setAttribute(`class`, `empty`);
    rockcounter.value++; 
  }


  if (this.getAttribute(`class`).includes(`dirt`) &&selectedtool ===`shovel`){
    this.setAttribute(`class`, `empty`);
    dirtcounter.value++; 
  }
  if (this.getAttribute(`class`).includes(`grass`)&&selectedtool ===`shovel`){
    this.setAttribute(`class`, `empty`);
    grasscounter.value++; 
  }
  if (this.getAttribute(`class`).includes(`wood`) &&selectedtool ===`axe2`) {
    this.setAttribute(`class`, `empty2`);
    woodcounter2.value++;      
  }
  if (this.getAttribute(`class`).includes(`leaves`)&&selectedtool ===`axe2`) {
    this.setAttribute(`class`, `empty2`);
    leavescounter2.value++; 
  }

  if (this.getAttribute(`class`).includes(`rock`)&&selectedtool ===`pikaxe2`){
    this.setAttribute(`class`, `empty2`);
    rockcounter2.value++; 
  }


  if (this.getAttribute(`class`).includes(`dirt`) &&selectedtool ===`shovel2`){
    this.setAttribute(`class`, `empty2`);
    dirtcounter2.value++; 
  }
  if (this.getAttribute(`class`).includes(`grass`)&&selectedtool ===`shovel2`){
    this.setAttribute(`class`, `empty2`);
    grasscounter2.value++; 
  }
 
  if (this.getAttribute(`class`).includes(`empty2`)||this.getAttribute(`class`).includes(`empty`)){
    if(adStore!==0){
      if(adStore.value>0){
        this.setAttribute("class",adStore.classList[1])
        adStore.value--;
      }
      console.log(adStore.value);
    }
  }
}

axe.addEventListener(`click`,axePick);
pikaxe.addEventListener(`click`,pikaxePick);
Shovel.addEventListener(`click`,shovelPick);

function axePick() {
  const weapons=document.querySelector(".weaponscontainer");
  [...weapons.children].map(val=>val.style.outline="none");
  selectedtool = `axe`;
  weapons.children[0].style.outline="3px solid white";
  adStore=0;
}

function pikaxePick() {
  const weapons=document.querySelector(".weaponscontainer");
  [...weapons.children].map(val=>val.style.outline="none");
  selectedtool = `pikaxe`;
  weapons.children[2].style.outline="3px solid white"
  adStore=0;
}

function shovelPick() {
  const weapons=document.querySelector(".weaponscontainer");
  [...weapons.children].map(val=>val.style.outline="none");
  selectedtool = `shovel`;
  weapons.children[1].style.outline="3px solid white"
  adStore=0;
}

axe2.addEventListener(`click`,axePick2);
pikaxe2.addEventListener(`click`,pikaxePick2);
Shovel2.addEventListener(`click`,shovelPick2);

function axePick2() {
  const weapons=document.querySelector(".weaponscontainer2");
  [...weapons.children].map(val=>val.style.outline="none");
  selectedtool = `axe2`;
  weapons.children[0].style.outline="3px solid white"
  adStore=0;
}

function pikaxePick2() {
  const weapons=document.querySelector(".weaponscontainer2");
  [...weapons.children].map(val=>val.style.outline="none");
  selectedtool = `pikaxe2`;
  weapons.children[2].style.outline="3px solid white"
  adStore=0;
}

function shovelPick2() {
  const weapons=document.querySelector(".weaponscontainer2");
  [...weapons.children].map(val=>val.style.outline="none");
  selectedtool = `shovel2`;
  weapons.children[1].style.outline="3px solid white";
  adStore=0;
}


woodcounter.addEventListener(`click`,chooseElement)

woodcounter2.addEventListener(`click`,chooseElement)

leavescounter.addEventListener(`click`,chooseElement)

leavescounter2.addEventListener(`click`,chooseElement)

rockcounter.addEventListener(`click`,chooseElement)

rockcounter2.addEventListener(`click`,chooseElement)

grasscounter.addEventListener(`click`,chooseElement)

grasscounter2.addEventListener(`click`,chooseElement)

dirtcounter.addEventListener(`click`,chooseElement)

dirtcounter2.addEventListener(`click`,chooseElement)
function chooseElement(){
  adStore=this; 
}
