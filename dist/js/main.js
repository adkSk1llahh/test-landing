for(const a of document.querySelectorAll(".navbar-select-wrapper"))a.addEventListener("click",function(){this.querySelector(".navbar-select").classList.toggle("open")});window.addEventListener("click",function(e){for(const t of document.querySelectorAll(".navbar-select"))t.contains(e.target)||t.classList.remove("open")});for(const d of document.querySelectorAll(".navbar-option"))d.addEventListener("click",function(){this.classList.contains("selected")||(this.parentNode.querySelector(".navbar-option.selected").classList.remove("selected"),this.classList.add("selected"),this.closest(".navbar-select").querySelector(".navbar-select__trigger span").textContent=this.textContent)});for(var acc=document.getElementsByClassName("faq-item__text"),i=0;i<acc.length;i++)acc[i].addEventListener("click",function(){this.classList.toggle("active");var e=this.nextElementSibling;"block"===e.style.display?e.style.display="none":e.style.display="block"});var menuButton=document.querySelector(".menu-button"),menuList=document.querySelector(".main-menu"),menuCloseButton=document.querySelector(".menu-close-button"),body=document.querySelector("body");for(menuButton.addEventListener("click",function(){menuList.classList.toggle("open"),body.classList.toggle("overlay")});menuList.length;)menuCloseButton.addEventListener("click",function(){menuList[0].classList.remove("open")});