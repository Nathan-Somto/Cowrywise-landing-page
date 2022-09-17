export default function Home ()
{
    const handleClick = () =>{
        console.log(" i have been clicked");
    }
    const createNameList = (name ,e)=>{
         console.log(`<li>${name}, ${e.target}</li>`);
    }
    return(
        <div className ="Home">
        <h1>Welcome to my Superhero Blog</h1>
        <p>Want to learn more about superheroes</p>
        <button onClick ={handleClick}>Click me</button>
        <button onClick = { (e) => (createNameList('Batman',e))}>Get Batman</button>
        </div>
    );
}