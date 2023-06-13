$(function() {
    $(".header").load("header.html");
    $(".sidenav").load("sidenav.html");
    $(".main-content").load("main-content.html");
    $(".footer").load("footer.html");
});

function openNav() {
    if(document.getElementById("mySidenav").style.width != "70px"){
        document.getElementById("mySidenav").style.width = "70px";
        document.getElementById("main").style.marginLeft = "70px";
    }
    else{
        closeNav();
    }
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

function openHome(){
    $(".main-content").load("main-content.html");
}