import pic from '../Images/saveingsimg.png';
import Button from './Button';
const Header = ({title}) => {
    return (
        <header className ="heroSection">
            <div className="rightSection">
                <h1>Get your money <br></br> working</h1>
                <p>with impressive interest rates , an app , tools  and guides,<br></br> Cowrywise is 
                    the smartest way to plan , save and invest.</p>
                    <Button version = "download"><><span>Get it on </span> <br></br>PlayStore</></Button>
                    <Button version = "download"><><span>Download on the </span> <br></br>App Store</></Button>
            </div>
            <div className = "leftSection">
                <img alt = "money_logo" src ={pic}></img>
            </div>
            </header>
    );
}
export default Header;