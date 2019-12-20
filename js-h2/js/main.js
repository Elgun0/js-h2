var btn=document.getElementsByClassName("myBtn")
for(i=0;i<btn.length;i++){
    btn[i].onclick=function(){
        this.nextElementSibling.classList.toggle("active")
    }
}

// second start
var btn=document.querySelectorAll(".mybtn")
var panel=document.querySelectorAll(".all-p")
for(var i=0;i<btn.length;i++){
    btn[i].onclick=function(){
        for(var i=0;i<panel.length;i++){
            panel[i].classList.remove("active")
            var btna =this.getAttribute("btn-1")
            document.getElementById(btna).classList.add("active")
        }
    }
}