// Created by Rohith

window.onload = async function(){
 

    var confirm = document.querySelector(".confirm");
    var active = document.querySelector(".active");
    var death = document.querySelector(".death");
    var recover = document.querySelector(".recover");
    var title = document.querySelector(".title")
    
    
    
    const res = await fetch('https://covid19.mathdro.id/api')
        const data = await res.json()
        //console.log(JSON.stringify(data))
        nfObject = new Intl.NumberFormat('en-IN'); 
    
        confirm.innerHTML  =nfObject.format(data.confirmed.value)
        death.innerHTML = nfObject.format(data.deaths.value);
        recover.innerHTML = nfObject.format(data.recovered.value);
        active.innerHTML = parseInt(data.confirmed.value-(data.recovered.value + data.deaths.value));
        active.innerHTML=nfObject.format(active.innerHTML);
        title.innerHTML = "WORLD";

}
function myfunc(){
    var element=document.body;
    element.classList.toggle("dark-mode");
}