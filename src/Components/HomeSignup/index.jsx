import './homesignup.css';
function Signup()
{
    return (
        <section className="home__signup__section">
        <h2 className='home__signup__heading'>
        Sign up for free.
        <br />
        Start investing today.
        </h2>
        <form className='home__signup__form'>
        <label className='home__signup__form--input' htmlFor='email'>
        <input className="home__signup--input__box" placeholder ="Your email..." type ="email" id="email" name="email"></input>
        <button className='btn btn-white'>Sign Up for free</button>
        </label>
        </form>
        </section>
    )
}
export default Signup;