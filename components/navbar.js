function navbar(){
    return `<div id="navbar">
    <div id="leftbar">
        <i class="fa-solid fa-cloud-meatball"></i>
        <i class="fa-solid fa-burger"></i>
        <i class="fa-solid fa-utensils"></i>
    </div>
    <div id="rightbar">
        <ul>
            <li><a href="./index.html">Home</a></li>
            <li><a href="./receipeoftheday.html">Receipe of the day</a></li>
            <li><a href="./randomreceipe.html">Random Receipes</a></li>
        </ul>
    </div>
</div>`
}

let displaydataoffood=async (url)=>{
    try { 
        let response=await fetch(url);
        let res=await response.json();
        let data=res.meals;
        console.log(res);
        document.querySelector("#fooditems").innerHTML="";
        data.forEach((ele)=>{
           let {strMeal,idMeal,strMealThumb,strCategory}=ele;
           let box=document.createElement("div");
           let image=document.createElement("img");
           image.src=strMealThumb;
           let Meal=document.createElement("p");
           Meal.textContent=`Meal:${strMeal}`;
           let MealId=document.createElement("p");
           MealId.textContent=`MealID:${idMeal}`;
           let Category=document.createElement("p");
           Category.innerText=`Category:${strCategory}`;
           box.append(image,Meal,MealId,Category);
           document.querySelector("#fooditems").append(box);
        })   
    } catch (error) {
        console.log(error);
    }
}
export  {navbar,displaydataoffood};
