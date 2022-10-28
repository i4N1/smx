
function expandBox(){
    const button = document.querySelector(".dropbtn");
    document.getElementById("myDropdown").classList.toggle("show");
    if (button.innerText == "///"){
        button.innerText = "|||";
    } else {
        button.innerText = "///";
    }
}

window.onclick = function(event) {
    const button = document.querySelector(".dropbtn");
    if (!event.target.matches('.dropbtn'))  {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                button.innerText = "|||";
            }
        }
    }
}