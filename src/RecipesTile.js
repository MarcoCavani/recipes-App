import React from 'react'


export default function RecipesTile({recipe}) {
    return (
     recipe["recipe"]["image"].match(/\.(jpg|jpeg|gif|png)$/)!= null &&(
       <div className="recipe" onClick={ ()=>{window.open(recipe["recipe"]["url"])}}>

        <img src={recipe["recipe"]["image"]}/>
        <p className="recipe-para">{recipe["recipe"]["label"]}</p>

       </div>
    ))
}
