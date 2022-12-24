import phone from '../Images/phone.png';
import Button from './Button';
const Payment = () =>
{
    return(
        <section className ="paymentSection">
            <div className ="left">
                <img src ={phone}></img>
            </div>
            <div className ="right">
                <h2>Start building wealth in 5 minutes</h2>
                <div className ="grid">
                <div>
                    <h4>01<span className ='line'></span></h4>
                    
                    <h4>02</h4>
                    <span className ='line'></span>
                    <h4>03</h4>
                </div>
                <div>
                    <h3>Create an account</h3>
                    <p>Sign up for an account with your name, email and phone number.</p>
                    <h3>Add a payment method</h3>
                    <p>Using your debit card, bank account, USSD, QR Code, setup your first plan.</p>
                    <h3>Watch your money grow</h3>
                    <p>Sit back, relax and let your money work for you all day, everyday.</p>
                    
                </div>
                </div>
            </div>
           {/*  <Button version ="blue" size ="xl" >Sign Up Now</Button> */}
        </section>
    )

}
export default Payment;