import {useEffect, useState,useRef} from 'react';
import './HomeNav.css';
import Logo from '../../Assets/Nav/cowrywise.svg'
import WhiteLogo from '../../Assets/Nav/cowrywise-white.svg'
import Embed from '../../Assets/Nav/embed.svg'
import Docs from '../../Assets/Nav/docs.svg'
import Plans from '../../Assets/Nav/plans.svg'
import Invest from '../../Assets/Nav/invest.svg'
import Stash from '../../Assets/Nav/stash.svg'
import Save from '../../Assets/Nav/save.svg'
import Sprout from '../../Assets/Nav/sprout.svg'
import {FaChevronDown} from 'react-icons/fa'
import {Link} from  'react-router-dom';
function Navbar() {
    const [active, setActive] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const inner = useRef(null);
    const menu = useRef(null);
    const [dropdown,setDropdown] = useState({
        0:false,
        1:false,
        2:false
    })
    useEffect(()=>{
        console.log(menu)
        function addActive(){
            if(window.scrollY >= 80 || menu.current.classList.contains('active-hamburger')) {
                setActive(true);
                return;
            }
            if(!inner.current.classList.contains('active') || !menu.current.classList.contains('active-hamburger')){
                setActive(false);
               }
        };
        document.addEventListener('scroll',addActive);
        return()=> document.removeEventListener('scroll',addActive);
    },[])
    /**
     * @todo finish dropdown menu, add animations.
     * */
    function openDropdown(index){
         setDropdown({...dropdown,[index]:!dropdown[index],[(index+1)%3]:false,[(index+2)%3]:false});
      
    }
  
  return (
    <nav className={`nav__container ${active ? 'nav__active':''}`}>
      <div className='nav__logo'>
        <img src={Logo} alt="cowrywise logo" className="nav__logo__desktop" />
        <img src={WhiteLogo} alt="cowrywise logo" className="nav__logo__mobile" />
        
      </div>
      <div ref={inner} className={`nav__inner__container ${openMenu ? 'active':""}`}>
      <ul className='main__nav'>
        <li>
            <a onClick={()=>openDropdown(0)}>Personal  <span className='main__nav__chevron'><FaChevronDown size={'10'}/> </span></a>
           {dropdown[0]&& <div className='nav__dropdown__container '>
                <div className='nav__dropdown__left'>
                    <div className="nav__dropdown__features">
                        <img src={Plans} alt="plan icon" />
                        <div className='nav__dropdown__features__text'>
                            <h4>Plan</h4>
                            <p>Acess financial tools & guides</p>
                        </div>
                    </div>
                    <div className="nav__dropdown__features">
                        <img src={Save} alt="docs icon" />
                        <div className='nav__dropdown__features__text'>
                            <h4>Save</h4>
                            <p>Earn better interests than your bank</p>
                        </div>
                    </div>
                    <div className="nav__dropdown__features">
                        <img src={Invest} alt="docs icon" />
                        <div className='nav__dropdown__features__text'>
                            <h4>Invest</h4>
                            <p>Build a global portfolio in one app</p>
                        </div>
                    </div>
                    <div className="nav__dropdown__features">
                        <img src={Stash} alt="docs icon" />
                        <div className='nav__dropdown__features__text'>
                            <h4>Get Stash</h4>
                            <p>A digital wallet for everything</p>
                        </div>
                    </div>
                </div>
                <div className='nav__dropdown__right'>
                    <h4>Growth Tools</h4>
                    <p>Estimate your interests</p>
                    <p>Know your risk appetite</p>
                </div>
            </div>
}
        </li>
        <li>
            <a onClick={()=>openDropdown(1)}>Business <span><FaChevronDown size={'10'}/> </span></a>
        {dropdown[1]&&    <div className='nav__dropdown__container '>
            <div className='nav__dropdown'>
                <div className="nav__dropdown__features mb-0">
                        <img src={Sprout} alt="sprout icon" />
                        <div className='nav__dropdown__features__text'>
                            <h4>Sprout</h4>
                            <p>Put your business idle cash to work</p>
                        </div>
                        </div>
                    </div>
            </div>
}
        </li>
        <li>
            <a onClick={()=>openDropdown(2)}>Developer <span><FaChevronDown size={'10'}/> </span></a>
        {dropdown[2]  &&    <div  className='nav__dropdown__container '>
                <div className='nav__dropdown__left'>
                    <div className="nav__dropdown__features">
                        <img src={Embed} alt="embed icon" />
                        <div className='nav__dropdown__features__text'>
                            <h4>Embed</h4>
                            <p>Offer investment services in your app</p>
                        </div>
                    </div>
                    <div className="nav__dropdown__features">
                        <img src={Docs} alt="docs icon" />
                        <div className='nav__dropdown__features__text'>
                            <h4>Docs</h4>
                            <p>Read how to integrate the Embed API</p>
                        </div>
                    </div>
                </div>
                <div  className='nav__dropdown__right'>
                    <h4>Connect</h4>
                    <p>Join Embed on slack</p>
                </div>
            </div>
            }
        </li>
        <li>
            <a>Learn</a>
        </li>
      </ul>
      <div className="nav__btn__container">
        <Link to='/login' className='primary-blue'>Log in</Link>
        <Link to='/signup' className="btn btn-shadow">Sign Up for Free</Link>
      </div>
      <div className='nav__links__container'>
        <a>
            Sign Up
        </a>
        <a >
            Log In
        </a>
        <a>
            About
        </a>
        <a >
            FAQ'S
            </a>
        <a>
            Security
            </a>
        <a>
            Learn
        </a>
      </div>
      <small>Cowrywise Financial Technology Limited("Cowrywise") is a fund manager duly licensed by the securities and Exchange Commission (SEC) of Nigeria</small>
      </div>
     <div className={`nav__hamburger__menu ${openMenu ? 'active-hamburger':""}`} ref={menu} onClick={()=>{
        setOpenMenu(prevState=> !prevState)        
        }}>
        <div className="bar"></div>
        <div className="bar"></div>
     </div>
    </nav>
  );
};
export default Navbar;