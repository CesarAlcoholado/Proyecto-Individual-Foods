export default function RecipeCard({image,name}){

  return <div>
    <h2>{name}</h2>
    <img src={image} alt='recipe'/>
  </div>
}