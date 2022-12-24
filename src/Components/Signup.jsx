import Button from './Button';
const Signup = () =>
{

    return (
        <>
        <section className="signUp">
        <h3>
        Sign up for free.
        <br></br>
        Start investing today.
        </h3>
        <form>
        <label>
        <input placeholder ="your email" type ="text"></input>
        <Button version ="white" size ="xl">Sign Up for free</Button>
        </label>
        </form>

       
        </section>
        </>
    )

}
export default Signup;