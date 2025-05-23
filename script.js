let btn=document.querySelector("button");
let divb=document.querySelector("div");
let count=0
let unorder_list=document.querySelector("ul");
btn.addEventListener("click",()=>{
    count++;
    let heading=document.querySelector("h1");
    let newcolor=generateColor();
    let el=document.createElement("li"); // creating list
    el.innerText=newcolor+count;
    let hr=document.createElement("hr");
    unorder_list.append(el);
    unorder_list.append(hr);
    heading.innerText=newcolor+count;
    divb.style.backgroundColor=newcolor;
  //  divb.style.color=newcolor;
  

});

function generateColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let getColor=`rgb(${red},${green},${blue})`;
    return getColor;
}