import picbg from '../Images/security.svg'
const Moreinfo = ({children, shadow}) =>
{
    return(
        <section className ="moreInfo">
            <div className ="title">
        <h3>Keeping your money <br></br>safe is our business</h3>
        <p>Trust is our currency. We are committed to the security of your money and <br></br> the protection of your account.</p>
        <a>learn more </a>
        </div>
        <div className="moreInfoGrid">
            <div>
          <h5>Bank-grade Security</h5> 
          <p>We are PCI-DSS compliant to ensure security of your data electronically. We also provide you with an option to set up 2FA for key transactions on your account. 2FA serves as an extra layer of protection to ensure the security of your account beyond just a username and password.</p> 
          </div>
          <div>
          <h5>Assets Custody</h5> 
          <p>Our users financial assets are held with a licensed custodian, Zenith Nominees Limited, for safekeeping to prevent misappropriation, misuse, theft, and/or loss, and in accordance with applicable law.</p> 
          </div>
          <div>
          <h5>Regulatory Compliance</h5> 
          <p>Cowrywise is a duly registered fund manager with the Securities and Exchange Commission (SEC) of Nigeria. All our activities are in full compliance with regulatory requirements to the ultimate protection of our clients.</p> 
          </div>
          <div>
          <h5>Best-In-Class Assets</h5> 
          <p>All the investment options listed on Cowrywise, are carefully screened, managed by professional fund managers. All the diverse mutual funds registered with the SEC, with standard third-party custodian structure.</p> 
          </div>
        </div>
        <div className ="black"></div>
        <img src ={picbg}></img>
        </section>

    )

}
export default Moreinfo;