import phone from '../../Assets/Home/phone.png';
import './setup.css'
const Payment = () =>
{
    return(
        <section className ="setup__section">
            <div className ="setup__left">
                <img src ={phone}></img>
            </div>
            <div className ="setup__right">
                <h2>Start building wealth in 5 minutes</h2>
                <div className ="setup__right__text">
                <div className='setup__numbers'>
                    <h4>01   <span className ='line'></span></h4>
                    
                    <h4>02 <span className ='line'></span></h4>
                    <h4>03 <span className ='line'></span></h4>
                </div>
                <div>
                    <div className='setup__step'>
                    <h3>Create an account</h3>
                    <p>Sign up for an account with your name, email and phone number.</p>
                    </div>
                   <div className='setup__step'>
                   <h3>Add a payment method</h3>
                    <p>Using your debit card, bank account, USSD, QR Code, setup your first plan.</p>
                   </div>
                   <div className='setup__step'>
                   <h3>Watch your money grow</h3>
                    <p>Sit back, relax and let your money work for you all day, everyday.</p>
                   </div>    
                </div>
                </div>
                <button className='btn btn-shadow'>Sign Up now</button>
            </div>
     
        </section>
    )

}
export default Payment;