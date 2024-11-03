



let slid = document.getElementById('slid');
let navbar =document.getElementById('navbar');
let shopping =document.getElementById('shopping');
let search =document.getElementById('search');
let searchicon =document.getElementById('searchicon');

shopping.onclick = function (){
   if(navbar.style.display==='none' ){ 
navbar.style.display='block';
}else {
    navbar.style.display='none';
}
        
}
searchicon.onclick = function (){
   if(search.style.display==='none' ){ 
search.style.display='block';
}else {
    search.style.display='none';
}
        
}


window.onscroll = function (){
    if(this.scrollY >= 100 )
{
    slid.style.display  ='block';
}else {
    slid.style.display  ='none';
}
slid.onclick = function () {
    window.scrollTo({
        top:0,
        behavior:'smooth',

    });
}
}