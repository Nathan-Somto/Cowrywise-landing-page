export default function Navbar ()
{

    return(
        <nav className="Navbar">
            <h1>Superhero Blog</h1>
            <ul className = "navLinks">
                <li><a href ="#Home">Home</a></li>
                <li> <a href="#About">About</a></li>
                <li><a href="/create">New Blog</a></li>
                <li> <a href="#Contact">Contact</a></li>
                 </ul>
        </nav>
    );
}