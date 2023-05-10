import './login.css';
import {Link} from 'react-router-dom';
function Login() {
    /**
     * @todo: add form validation with yup.
     *  
     * */
    return (
 <main className="login__main">
    <div className="login__text">
        <h1 className='login__text__heading'>Jump right back in</h1>
        <Link to={'/signup'} className="login__text__link">Sign in to continue</Link>
    </div>
    <form className="login__form">
        <label htmlFor="email" className="login__input">
            <input type="email" name="email" id="email" placeholder="Email Address" className='login__input--box' />
        </label>
        <label htmlFor="password" className="login__input">
        <input type="password" name="password" id="password" placeholder="Password"  className='login__input--box'/>
        </label>
        <a className="login__blue__link">Forget password?</a>
        <div className="login__form__bottom">
            <Link to={'/signup'} className="login__sign__up">New user? <span className="login__blue__link">Create account</span></Link>
            <button className="btn btn-shadow">
                Sign in
            </button>
        </div>
    </form>
    
 </main>       

  )
}

export default Login