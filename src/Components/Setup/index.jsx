import { motion } from 'framer-motion';
import phone from '../../Assets/Home/phone.png';
import './setup.css'
const Payment = () =>
{
    const numbers = ['01', "02","03"];
    return(
        <section className ="setup__section">
            <div className ="setup__left">
                <img src ={phone}></img>
            </div>
            <div className ="setup__right">
                <h2>Start building wealth in 5 minutes</h2>
                <div className ="setup__right__text">
                <div className='setup__numbers'>
                    {numbers.map((number, index)=><h4 key={`${number}-${index}`}>{number} <motion.span className ='line'></motion.span> </h4>)}
                    <motion.div initial={{opacity:0}} animate={{opacity:[0,1,1,1,0,0,1,0]}} transition={{duration:2,repeat:Infinity}} className='setup__blue__flash'></motion.div>
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