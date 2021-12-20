var btnLight = document.getElementById('lightMode')
var btnDark = document.getElementById('darkMode')
var btnPastel = document.getElementById('pastelMode')
var btnFunky = document.getElementById('funkyMode')
var link = document.getElementById("Link");
var currTheme = link.getAttribute("href");
var theme = "";

btnLight.addEventListener("click", function () { LightMode(); });

function LightMode() {
    let lightTheme = "styles/light.css";

    if(currTheme !== lightTheme)
    {
   	 currTheme = lightTheme;
   	 theme = "light";
    }

    link.setAttribute("href", currTheme);
}

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