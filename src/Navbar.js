export default function Navbar ()
{

    return(
        <nav className="Navbar">
            <h1>Superhero Blog</h1>
            <ul className = "navLinks">
                <li><a href ="#Home">Home</a></li>
               <li><a href="/create" style ={{
                color :"#fff",
                backgroundColor : "hsl(0, 60% , 50%)",
                borderRadius : "8px"
               }}>New Blog</a></li>
                 </ul>
        </nav>
    );
}