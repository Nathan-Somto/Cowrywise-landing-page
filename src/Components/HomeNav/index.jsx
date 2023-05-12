import {useEffect, useState,useRef} from 'react';
import './HomeNav.css';
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
    function openDropdown(index){
         setDropdown({...dropdown,[index]:!dropdown[index],[(index+1)%3]:false,[(index+2)%3]:false});
         console.log("clicked");
      
    }
    function openMobileMenu(){
        const body = document.querySelector('body');
        setActive(true);
        if(body.classList.contains("hide-overflow")){
            body.className='';
        }
        else{
            body.className+='hide-overflow';
        }
        setOpenMenu(prevState=> !prevState)   
    }
  
  return (
    <nav className={`nav__container ${active ? 'nav__active':''}`}>
      <div className='nav__logo'>
<svg width="152" height="29" viewBox="0 0 152 29" fill="none"
 xmlns="http://www.w3.org/2000/svg" svginline="" role="presentation" focusable="false" tabIndex="-1">
    <g clipPath="url(#clip0_10311_7421)" fill="#0067F5"><path d="M14 .5H6.154l-.015.027L5.056 2.5H14c6.625 0 12 5.372 12 12s-5.373 12-12 12-12-5.373-12-12c0-1.254.196-2.5.582-3.692h2.29A9.846 9.846 0 1014 4.655H3.873l-1.097 2H14a7.845 7.845 0 11-6.923 4.152h2.595a5.689 5.689 0 104.328-2H1.593l-1.097 2A14.025 14.025 0 000 14.5c0 7.732 6.268 14 14 14s14-6.268 14-14-6.268-14-14-14zm0 10.308a3.693 3.693 0 110 7.385 3.693 3.693 0 010-7.385zM34.154 14.796c0-3.89 2.61-6.622 6.523-6.622 2.412 0 4.381 1.058 5.415 2.83l-2.264 1.6c-.714-1.132-1.797-1.673-3.077-1.673-2.116 0-3.52 1.503-3.52 3.865 0 2.338 1.403 3.864 3.52 3.864 1.28 0 2.363-.566 3.077-1.699l2.264 1.6c-1.034 1.798-3.003 2.832-5.415 2.832-3.914 0-6.523-2.733-6.523-6.597zM46.518 14.796c0-3.644 2.585-6.622 6.597-6.622 4.037 0 6.597 2.978 6.597 6.622 0 3.619-2.561 6.597-6.597 6.597-4.01 0-6.597-2.979-6.597-6.597zm10.117 0c0-2.29-1.354-3.89-3.52-3.89s-3.52 1.6-3.52 3.89c0 2.264 1.354 3.864 3.52 3.864s3.52-1.6 3.52-3.864zM79.424 8.517l-3.842 12.53H72.34l-2.715-8.837-2.74 8.837h-3.248l-3.82-12.53h2.98l2.596 9.034 2.787-9.034h2.883l2.788 9.034 2.57-9.034h3.004zM121.622 8.517l-3.845 12.53h-3.243l-2.715-8.837-2.74 8.837h-3.241l-3.82-12.527h2.979l2.595 9.034 2.785-9.037h2.883l2.788 9.034 2.571-9.034h3.003zM88.412 8.47v2.805a9.215 9.215 0 00-1.379-.123c-2.19 0-3.347 1.108-3.347 3.717v6.18h-3.002V8.517h2.95v2.094c.617-1.452 1.97-2.314 3.693-2.314.37-.007.736.051 1.085.172zM100.871 8.517v11.274c0 4.21-2.338 6.523-6.474 6.523-2.141 0-4.11-.64-5.293-1.747l1.355-2.191c1.057.835 2.436 1.255 3.766 1.255 2.314 0 3.692-1.304 3.692-3.841v-1.08c-.713 1.378-2.24 2.214-4.086 2.214-2.659 0-4.332-1.673-4.332-4.726v-7.68h3.003v6.917c0 1.92.788 2.757 2.363 2.757 1.821 0 3.028-1.107 3.028-2.93V8.518h2.978zM122.412 4.555c0-1.083.763-1.87 1.92-1.87 1.132 0 1.893.787 1.893 1.87 0 1.084-.763 1.871-1.893 1.871-1.157 0-1.92-.788-1.92-1.87zm.419 3.963h3.003v12.53h-3.003V8.518zM127.345 19.005l1.625-1.896c.984 1.083 2.511 1.723 4.111 1.723 1.427 0 2.215-.541 2.215-1.329 0-.665-.493-1.083-1.748-1.378l-2.043-.468c-2.609-.615-3.717-1.822-3.717-3.545 0-2.314 1.92-3.938 5.17-3.938 2.215 0 4.061.762 5.144 1.994l-1.6 1.944c-1.083-.935-2.314-1.378-3.619-1.378-1.403 0-2.092.517-2.092 1.28 0 .59.418.96 1.748 1.255l2.166.517c2.633.591 3.594 1.797 3.594 3.52 0 2.486-1.921 4.087-5.243 4.087-2.486 0-4.578-.936-5.711-2.388zM151.636 15.681h-9.331c.32 2.02 1.649 3.102 3.692 3.102 1.403 0 2.585-.517 3.496-1.576l1.797 1.773c-1.182 1.526-3.077 2.413-5.391 2.413-3.988 0-6.647-2.61-6.647-6.548 0-3.89 2.561-6.671 6.352-6.671 3.643 0 6.104 2.535 6.104 6.35 0 .387-.025.774-.072 1.158zm-9.331-2.042h6.403c-.148-1.846-1.281-2.855-3.077-2.855-1.848 0-3.005 1.058-3.326 2.855z"></path></g><defs><clipPath id="clip0_10311_7421"><path fill="#fff" transform="translate(0 .5)" d="M0 0h151.709v28H0z"></path></clipPath></defs></svg>
        
        
      </div>
      <div ref={inner} className={`nav__inner__container ${openMenu ? 'active':""}`}>
      <ul className='main__nav'>
        <li>
            <a onClick={()=>openDropdown(0)} style={{opacity:`${dropdown[0]?'1':"0.7"}`}}>Personal  <span className='main__nav__chevron'><FaChevronDown size={'10'}/> </span></a>
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
            <a onClick={()=>openDropdown(1)} style={{opacity:`${dropdown[1]?'1':"0.7"}`}}>Business <span><FaChevronDown size={'10'}/> </span></a>
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
            <a onClick={()=>openDropdown(2)} style={{opacity:`${dropdown[2]?'1':"0.7"}`}}>Developer <span><FaChevronDown size={'10'}/> </span></a>
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
            <a style={{opacity:`0.7`}}>Learn</a>
        </li>
      </ul>
      <div className="nav__btn__container">
        <Link to='/login' className='primary-blue'>Log in</Link>
        <Link to='/signup' className="btn btn-shadow">Sign Up for Free</Link>
      </div>
      <div className='nav__links__container'>
        <Link to={'/signup'}>
            Sign Up
        </Link>
        <Link to={'/login'} >
            Log In
        </Link>
        <Link to={'/'}>
            About
        </Link>
        <Link to={'/'}>
            FAQ'S
            </Link>
        <Link to={'/'}>
            Security
            </Link>
        <Link to={'/'}>
            Learn
        </Link>
      </div>
      <small>
        Cowrywise Financial Technology 
        Limited("Cowrywise") 
        is a fund manager duly licensed by 
        the securities and Exchange Commission
         (SEC) of Nigeria</small>
      </div>
     <div className={`nav__hamburger__menu ${openMenu ? 'active-hamburger':""}`} ref={menu} onClick={openMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
     </div>
    </nav>
  );
};
export default Navbar;