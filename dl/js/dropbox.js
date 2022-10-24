var defaultBars = document.getElementsByClassName("dropbtn").innerHTML = '|||'
var openedBars = document.getElementsByClassName("dropbtn").innerHTML = '///'


function expandBox(){
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementsByClassName("dropbtn").innerHTML = openedBars;
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn'))  {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                document.getElementsByClassName("dropbtn").innerHTML = defaultBars;
            }
        }
    }
}