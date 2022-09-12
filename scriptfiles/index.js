
document.querySelector("#searchinput").addEventListener("input",()=>{
    debounce(getandfetch,1000);
})


// displaying navbar dynamically
import {navbar,displaydataoffood} from "../components/navbar.js";
let navbarContainer=document.querySelector("#navbarcontainer");
navbarContainer.innerHTML=navbar();
//console.log(navbar());


//fetching search dishes results
let getandfetch=async ()=>{
    try {
        let value1=document.querySelector("#searchinput").value;  
        let url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${value1}`
        let response=await fetch(url);
        let res=await response.json();
        console.log(res);
        displaysuggestion(res.meals); 
    } catch (error) {
        console.log(error);
    }
}



//debouncing
let  timerid;
let debounce=(func,delay)=>{
   if(timerid){
       clearTimeout(timerid);
   }
   timerid=setTimeout(()=>{
       func();
   },delay);
}



//displaying searchbox 
let meal;
let displaysuggestion=(data)=>{
    document.querySelector("#searchbox").innerHTML="";
    let box=document.createElement("div");
      data.forEach((ele)=>{
         let {strMeal}=ele;
         let p=document.createElement("p");
         p.innerText=strMeal;
         box.append(p);
         document.querySelector("#searchbox").style="display:block";
         p.addEventListener("click",()=>{
            document.querySelector("#searchinput").value=strMeal;
            document.querySelector("#searchbox").style="display:none"
            meal=strMeal;
         })
      })
      document.querySelector("#searchbox").append(box);
}

//displaying food
document.querySelector("#searchbutton").addEventListener("click",()=>{
    let url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
    
    displaydataoffood(url)
})







