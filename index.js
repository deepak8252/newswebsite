let menu= document.getElementById("menu");
let navbar =document.getElementById("navbar");
const cartdata=document.querySelector(".cartdata");
const searchBtn=document.getElementById('searchBtn');
const inputdata=document.getElementById("inputdata");
const type=document.querySelector(".type");
if(menu){
    menu.addEventListener("click",()=>{
        navbar.classList.toggle("show")
    })
};

const key="ee12b09271e544249265c7f124ae3951";
const newsData=async (input)=>{
 const data= await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`);
 const result=await data.json();
//  console.log(result.articles[0]);
cartdata.innerHTML=""
 result.articles.forEach(item=>{
    // console.log(item)
    let divs=document.createElement("div");
    type.innerHTML= `Realeted search type : ${input}`
    
 divs.classList.add("card");
 cartdata.appendChild(divs);
 divs.innerHTML=`
 <img src=${item.urlToImage} alt="">
 <h3>${item.title}</h3>
 <p>${item.description}</p>
 `;
 divs.addEventListener("click",()=>{
    window.open(item.url)
 })
 });

 
}
window.addEventListener("load",()=>{
    newsData("india")
})
searchBtn.addEventListener("click",()=>{

let inputtext=inputdata.value;
newsData(inputtext);
})
function navclick(navname){
    if(navname=="india"){
        document.getElementById("home").style.color="rgb(152, 200, 29)";
        document.getElementById("politics").style.color="white";
        document.getElementById("sports").style.color="white";
        document.getElementById("technology").style.color="white";
    }
    else if( navname=="politics"){
        document.getElementById("politics").style.color="rgb(152, 200, 29)";
        document.getElementById("home").style.color="white";
        document.getElementById("sports").style.color="white";
        document.getElementById("technology").style.color="white";
    }
    else if( navname=="sports"){
        document.getElementById("sports").style.color="rgb(152, 200, 29)";
        document.getElementById("home").style.color="white";
        document.getElementById("politics").style.color="white";
        document.getElementById("technology").style.color="white";
    }
    else if( navname=="technology"){
        document.getElementById("technology").style.color="rgb(152, 200, 29)";
        document.getElementById("home").style.color="white";
        document.getElementById("politics").style.color="white";
        document.getElementById("sports").style.color="white";
    }
 newsData(navname);
 
}
