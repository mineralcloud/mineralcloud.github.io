window.onscroll = function () { scrollFunction() };

if (document.getElementById("sidebar")){
var sidebar = document.getElementById("sidebar");
};

function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        
        document.getElementById("header-nav").classList.remove("white");
        document.getElementById("header-nav").classList.add("black");

        document.getElementById("header-nav-bg").classList.remove("header-nav-space");
        document.getElementById("header-nav-bg").classList.add("header-nav-space-scrolled");

    } else {
        
        document.getElementById("header-nav").classList.remove("black");
        document.getElementById("header-nav").classList.add("white");

        document.getElementById("header-nav-bg").classList.remove("header-nav-space-scrolled");
        document.getElementById("header-nav-bg").classList.add("header-nav-space");


    }

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {

        if (sidebar) {
            sidebar.classList.add("sidebar-fixed");
        }
    } else {

        if (sidebar) {
            sidebar.classList.remove("sidebar-fixed");
        }

    }

    if ((document.body.scrollTop > 400 || document.documentElement.scrollTop > 400)  ){
       
        // document.getElementById("top-pointer").classList.remove("hidden");
        // document.getElementById("top-pointer").classList.add("show");
        

           toggleTopPointer()

    }else{

        
    }
};


function toggleTopPointer(){
    
  
};

$(document).ready(function () {
    
    setTimeout(function () {
        $(".loader-wraper").fadeOut(500);
    }, 1000);
    // navActive();

    scrollFunction()
});

function peoplemore() {
    var pplmore = document.getElementById("people-more");
    var pplless = document.getElementById("people-less");
    pplmore.classList.remove("hidden");
    pplmore.classList.add("show");
    pplless.classList.remove("show");
    pplless.classList.add("hidden");

};

function peopleless() {
    var pplless = document.getElementById("people-more");
    var pplmore = document.getElementById("people-less");
    pplmore.classList.remove("hidden");
    pplmore.classList.add("show");
    pplless.classList.remove("show");
    pplless.classList.add("hidden");

};