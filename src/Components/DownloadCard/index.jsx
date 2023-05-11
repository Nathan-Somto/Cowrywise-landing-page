import {FaStar, FaStarHalf} from 'react-icons/fa'
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import './downloadcard.css'
import { getNumber } from '../../Utils';
function Downloadcard ({data})
{
    const {number,h3,info, button_store, action} = data
    return(
        <div className='download__card'>
        <div className="download__card__top">
        <div className="download__card__top__left">
        <h4 className="download__card__rating">{number}<span>/5</span></h4>
        <div className="download__stars">
          {/* Stars go here */}
          {
            new Array(getNumber(number)).fill('').map((_,index)=><FaStar key={index} size={"25"}/>)
          }
          <FaStarHalf size="25"/>
        </div>
        </div>
        <button className="download__button">
            <span>{button_store === 'PlayStore' ? <FaGooglePlay size={'20'}/> : <FaApple size={'20'}/>}</span>
            <div className='download__button__text'>
                <p className='download__button__action'>{action}</p>
                <h3 className='download__button__store'>{button_store}</h3>
            </div>
            </button>
        </div>
        <h3 className="download__store">{h3}</h3>
        <p className="download__review">{info}</p>
        <a className="download__link">Download Now </a>
        </div> 
    );
}
export default Downloadcard;