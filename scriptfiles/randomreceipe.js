import {navbar,displaydataoffood} from "../components/navbar.js";
let navbarContainer=document.querySelector("#navbarcontainer");
navbarContainer.innerHTML=navbar();

let getandfetch=()=>{
    let url=`https://www.themealdb.com/api/json/v1/1/random.php`
    
    setInterval(() => {
        displaydataoffood(url)
    }, 4000);
}
getandfetch();

