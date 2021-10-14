
import './App.css';
import { useState } from "react";
import RecipesTile from './RecipesTile';


function App() {
const [query, setQuery] = useState("")
const [recipes, setRecipes] = useState([])

 let ingredient = query
  const applicationId = "b184b11d";
  const applicationKeys = "e0d4cd1e054202b675952f46ec6cfbd0";
  let url = `https://api.edamam.com/search?q=${ingredient}&app_id=${applicationId}&app_key=${applicationKeys}`;


async function getData(){

  const apiResponce = await fetch(url);
  const data = await apiResponce.json();
 setRecipes(data.hits)
  console.log(data);
}

const submit = (e) =>{

  e.preventDefault();
  getData();
}
  return (
    <div className="App">
     <h1 onClick={getData}>MWD recipes</h1>
     <form className="recipe" onSubmit={submit}>

       <input
        type="text"
        placeholder="enter an ingredient"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        />
  <input type="submit"
          value="Search"
  />
     </form>

     <div className="recipes">

      

{recipes.map((recipe) => {
  console.log(recipe)
  return <RecipesTile recipe={recipe}/>
})}
      

     </div>
    </div>
  );
}

export default App;
