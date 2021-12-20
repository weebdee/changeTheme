var btnLight = document.getElementById('lightMode')
var btnDark = document.getElementById('darkMode')
var btnPastel = document.getElementById('pastelMode')
var btnFunky = document.getElementById('funkyMode')
var link = document.getElementById("Link");
// хорошая идея!
var currTheme = link.getAttribute("href");
var theme = "";


// можно просто:
// btnLight.addEventListener("click", LightMode);
btnLight.addEventListener("click", function () { LightMode(); });

function LightMode() { 
    let lightTheme = "styles/light.css";
    // вы пытаетесь оптимизировать ваш код - это хорошо,
    // но здесь это условее скорее лишнее, т.к. операция не такая дорогостоящая
    if(currTheme !== lightTheme)
    {
   	 currTheme = lightTheme;
   	 theme = "light";
    }
    
    // Можно прописать эту строку внутри условия сверху, раз уж мы хотим всё оптимизировать)
    link.setAttribute("href", currTheme);
}
// Ну и снизу тоже самое

btnDark.addEventListener("click", function () { DarkMode(); });

function DarkMode() {
    let darkTheme = "styles/dark.css";
    
    if(currTheme !== darkTheme)
    {
   	 currTheme = darkTheme;
   	 theme = "dark";
    }

    link.setAttribute("href", currTheme);
}

btnPastel.addEventListener("click", function () { PastelMode(); });

function PastelMode() {
    let pastelTheme = "styles/pastel.css";
    
    if(currTheme !== pastelTheme)
    {
   	 currTheme = pastelTheme;
   	 theme = "pastel";
    }

    link.setAttribute("href", currTheme);
}

btnFunky.addEventListener("click", function () { FunkyMode(); });

function FunkyMode() {
    let funkyTheme = "styles/grape.css";
    
    if(currTheme !== funkyTheme)
    {
   	 currTheme = funkyTheme;
   	 theme = "funky";
    }

    link.setAttribute("href", currTheme);
}


// Очень креативненько)

