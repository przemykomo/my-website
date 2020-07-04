function changeTab(evt, name) {
    var i, tab, tablinks;
    tab = document.getElementsByClassName("tab");
    for (i = 0; i < tab.length; i++) {
        tab[i].style.display = "none";
    }
    
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
}
