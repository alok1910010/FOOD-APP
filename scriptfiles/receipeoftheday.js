import {navbar,displaydataoffood} from "../components/navbar.js";
let navbarContainer=document.querySelector("#navbarcontainer");
navbarContainer.innerHTML=navbar();

//displaying random data
let getandfetch=()=>{
        let url=`https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken Handi`
        displaydataoffood(url)
}
getandfetch()


       