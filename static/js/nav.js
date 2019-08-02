window.onscroll = function () { scrollFunction() };

if (document.getElementById("sidebar")){
var sidebar = document.getElementById("sidebar");
};

if (document.getElementById("search-pub")) {
    var searchpub = document.getElementById("search-pub");
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

    if (sidebar) {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            sidebar.classList.add("sidebar-fixed");
    } else {
            sidebar.classList.remove("sidebar-fixed");
    }
    }

    if ((document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300)  ){
        $("#top-pointer").slideDown(600);
    }else{
        $("#top-pointer").slideUp(600);
        
    }
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

function publication_filter() {

    var input, filter, pub, ul, ttl, name,year,journal, i,j, txtValue, nmValue,yValue,jValue,showornot;
    input = document.getElementById('search-pub');
    filter = input.value.toLowerCase() ;
    pub = document.getElementById("publication");
    ul = pub.getElementsByTagName('ul');

    for (i = 0; i < ul.length; i++) {
        ttl = ul[i].getElementsByTagName("li")[0] ;
        name =  ul[i].getElementsByTagName("li")[1];
        year = ul[i].getElementsByTagName("li")[2];
        journal = ul[i].getElementsByTagName("li")[3];
        txtValue = ttl.textContent || ttl.innerText;
        nmValue = name.textContent || name.innerText;
        yValue = year.textContent || year.innerText;
        jValue = journal.textContent || journal.innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1)  {
            ul[i].style.display = "";
        } else {
            if (nmValue.toLowerCase().indexOf(filter) > -1) {
                ul[i].style.display = "";
            }
            else {
                if (yValue.toLowerCase().indexOf(filter) > -1){
                    ul[i].style.display = "";
                }
                else{
                    if (jValue.toLowerCase().indexOf(filter) > -1){
                        ul[i].style.display = "";
                    }
                    else{
                        ul[i].style.display = "none";
                    }
                }
            
            }
        }
        
    };

    var pubcase = document.getElementsByClassName("publication-year");

    
    for (i=0 ; i<pubcase.length; i++){
        
        ul = pubcase[i].getElementsByTagName('ul');
        showornot = false;
            for (j = 0; j < ul.length; j++) {
                
                if (ul[j].style.display != "none"){
                    showornot = true;
                }

            };
            if (showornot ){
                pubcase[i].style.display = "";
            }
            else{
                pubcase[i].style.display = "none";
            };

    };

};

function publication_switch(){

    var pubyear = document.getElementsByClassName("publication-year-list");

    var pub = pubyear[0].getElementsByTagName("a")

    var i;

    for (i = 0; i < pub.length; i++) {
        pub[i].classList.toggle("hidden")
        pub[i].classList.toggle("show")

    }
    

    


}