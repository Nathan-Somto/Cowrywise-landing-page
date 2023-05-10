import picbg from '../../Assets/Card/security.svg';
import './security.css'
function Security ()
{
    return(
        <section className ="security__section">
            <div className ="security__section__title">
        <h3>Keeping your money <br></br>safe is our business</h3>
        <p>Trust is our currency. We are committed to the security of your money and <br></br> the protection of your account.</p>
        <a>learn more <span>{'>'}</span> </a>
        </div>
        <div className="security__section__body">
            <div>
          <h4>Bank-grade Security</h4> 
          <p>We are PCI-DSS compliant to ensure security of your data electronically. We also provide you with an option to set up 2FA for key transactions on your account. 2FA serves as an extra layer of protection to ensure the security of your account beyond just a username and password.</p> 
          </div>
          <div>
          <h4>Assets Custody</h4> 
          <p>Our users financial assets are held with a licensed custodian, Zenith Nominees Limited, for safekeeping to prevent misappropriation, misuse, theft, and/or loss, and in accordance with applicable law.</p> 
          </div>
          <div>
          <h4>Regulatory Compliance</h4> 
          <p>Cowrywise is a duly registered fund manager with the Securities and Exchange Commission (SEC) of Nigeria. All our activities are in full compliance with regulatory requirements to the ultimate protection of our clients.</p> 
          </div>
          <div>
          <h4>Best-In-Class Assets</h4> 
          <p>All the investment options listed on Cowrywise, are carefully screened, managed by professional fund managers. All the diverse mutual funds registered with the SEC, with standard third-party custodian structure.</p> 
          </div>
        </div>
        <div className ="black"></div>
        <img src ={picbg}></img>
        </section>

    )

}
export default Security;