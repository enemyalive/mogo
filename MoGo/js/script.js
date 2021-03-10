/* Мобильное меню */

var burgerButton = document.querySelector('.burger');
var menu = document.querySelector('.menu-nav');

burgerButton.onclick = function () {
  menu.classList.toggle('menu-nav-close');
  menu.classList.toggle('menu-nav-open');
}

menu.onclick = function () {
  menu.classList.toggle('menu-nav-open');
  menu.classList.toggle('menu-nav-close');
}

// АККОРДЕОН //

// Стрелка

let punkts = document.querySelectorAll(".punkts");
let punktsImg = document.querySelectorAll(".punkts-img");

for (let i = 0; i < punkts.length; i++) {
  punkts[i].onmouseover = function () {
      punktsImg[i].classList.add("rotate-punkt");
  }
}

for (let i = 0; i < punkts.length; i++) {
  punkts[i].onmouseout = function () {
      punktsImg[i].classList.remove("rotate-punkt");
  }
}

// Открытие

let punkt = document.querySelectorAll(".punkt");

for (let i = 0; i < punkt.length; i++) {
  punkts[i].onclick = function (evt) {
    for (let i = 0; i < punkt.length; i++) {
      punkt[i].classList.remove("punkt-show");
      if (punkts[i] == evt.currentTarget) {
        punkt[i].classList.toggle("punkt-show");
      }
    }
  }
}

// ЦИТАТЫ

let citeLeft = document.querySelector(".cite-left");
let citeRight = document.querySelector(".cite-right");
let citeFlex = document.querySelectorAll(".cite-flex");
  
  let y = 0;

  citeLeft.addEventListener("click", function () {

    y--;
    if (y < 0) {
      y = citeFlex.length - 1;
      citeFlex[y].classList.remove("cite-hidden");
      citeFlex[0].classList.add("cite-hidden");
    } else {
      citeFlex[y].classList.remove("cite-hidden");
      citeFlex[y+1].classList.add("cite-hidden");
    }

  });

  
  citeRight.addEventListener("click", function () {

    y++;
    if (y >= citeFlex.length) {
      citeFlex[y-1].classList.add("cite-hidden");
      y = 0;
      citeFlex[y].classList.remove("cite-hidden");
    } else {
      citeFlex[y-1].classList.add("cite-hidden");
      citeFlex[y].classList.remove("cite-hidden");
    }
  
  });
  


// ЦИТАТЫ 2

let miteLeft = document.querySelector(".mite-left");
let miteRight = document.querySelector(".mite-right");
let miteFlex = document.querySelectorAll(".mite-flex");

let k = 0;

miteLeft.addEventListener("click", function () {

  k--;
  if (k < 0) {
    k = miteFlex.length - 1;
    miteFlex[k].classList.remove("mite-hidden");
    miteFlex[0].classList.add("mite-hidden");
  } else {
    miteFlex[k].classList.remove("mite-hidden");
    miteFlex[k+1].classList.add("mite-hidden");
  }

});


miteRight.addEventListener("click", function () {

  k++;
  if (k >= miteFlex.length) {
    miteFlex[k-1].classList.add("mite-hidden");
    k = 0;
    miteFlex[k].classList.remove("mite-hidden");
  } else {
    miteFlex[k-1].classList.add("mite-hidden");
    miteFlex[k].classList.remove("mite-hidden");
  }

});

// ФОТОГАЛЕРЕЯ

let photos = [
  "img/pic1.png",
  "img/pic2.png",
  "img/pic3.png",
  "img/pic4.png",
  "img/pic5.png",
  "img/pic6.png",
  "img/pic7.png"
];

let i = 0;
 
let photo = document.querySelector(".photo");
let aboutHover = document.querySelectorAll(".about-hover");
let divTemp = document.querySelectorAll(".div-temp");
let wow = document.querySelectorAll(".wow");
let imgTemp = document.querySelector(".img-temp");
let picClose = document.querySelector(".pic-close");

let imgphoto11 = document.querySelector(".imgphoto11");
let imgphoto12 = document.querySelector(".imgphoto12");
let imgphoto13 = document.querySelector(".imgphoto13");
let imgphoto14 = document.querySelector(".imgphoto14");
let imgphoto21 = document.querySelector(".imgphoto21");
let imgphoto22 = document.querySelector(".imgphoto22");
let imgphoto23 = document.querySelector(".imgphoto23");

imgphoto11.onclick = function () {
  imgTemp.setAttribute("src", photos[0]);
  divTemp[i].classList.remove("hidden");
}

imgphoto12.onclick = function () {
  imgTemp.setAttribute("src", photos[1]);
  divTemp[i].classList.remove("hidden");
}

imgphoto13.onclick = function () {
  imgTemp.setAttribute("src", photos[2]);
  divTemp[i].classList.remove("hidden");
}

imgphoto14.onclick = function () {
  imgTemp.setAttribute("src", photos[3]);
  divTemp[i].classList.remove("hidden");
}

imgphoto21.onclick = function () {
  imgTemp.setAttribute("src", photos[4]);
  divTemp[i].classList.remove("hidden");
}

imgphoto22.onclick = function () {
  imgTemp.setAttribute("src", photos[5]);
  divTemp[i].classList.remove("hidden");
}

imgphoto23.onclick = function () {
  imgTemp.setAttribute("src", photos[6]);
  divTemp[i].classList.remove("hidden");
}

function Close () {
  i = 0;
  divTemp[i].classList.add("hidden");
}

imgTemp.addEventListener("click", Close);
picClose.addEventListener("click", Close);

document.addEventListener('keydown', function(evt) {
  if (evt.code === 'Escape') {
    i = 0;
    divTemp[i].classList.add("hidden");
  }
});

// КНОПКА НАВЕРХ 

let buttonTop = document.querySelector(".button-top");

buttonTop.onclick = function () {
  window.scrollTo(0, 0);
};

window.onscroll = function () { 
  if (window.pageYOffset > 300) {
    buttonTop.style.display="block"; 
    }
  else {
    buttonTop.style.display="none";
  }
};
  