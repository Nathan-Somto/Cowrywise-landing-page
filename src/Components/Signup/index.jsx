import Dami from '../../Assets/Signup/dami_img.jpeg'
import './signup.css'
import {Link} from 'react-router-dom'
function Signup(){
  return (
    <main className='signup__main'>
        <form className='signup__form'>
    <h1 className='signup__heading'>Start your <br/>Investment journey</h1>
    <label htmlFor="email" className='signup__input'>
        <input type="email" name='email' id='email' className='signup__input--box' placeholder='Email Address' />
    </label>
    <div className='signup__form__bottom'>
        <Link to={'/login'} className='sign__up__login'>Got an account? <span className='signup__blue--link'>Sign in</span></Link>
        <button className='btn btn-shadow'>
            continue
        </button>
    </div>
        </form>
        <div className='signup__testimonal'>
            <h3 className='signup__testimonal--heading'>Invest with over 700,000<br/> customer like you.</h3>
            <blockquote className='signup__testimonal--quote'>i'm so happy that i found this app, it has really helped me to be diligent with my savings.</blockquote>
            <p className='signup__testimonal__author'>Adgamigbe Damilola</p>
            <img src={Dami} className='signup__testimonal--avatar' alt="adgamigbe damilola avatar" />
        </div>
    </main>
  )
}

export default Signup