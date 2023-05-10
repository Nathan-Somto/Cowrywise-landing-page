import './perks.css';
import Card from '../Card';
import CardData from '../../Data/CardData';
function Perks(){
  return (
    <section className="perks__section">
      <div className="perks__card__container">
        <div className="perks__text">
          <h1>Get financial freedom</h1>
          <p>
            Plan towards your dream home, fund your kid's education, travel the
            world , all in one app.
          </p>
        </div>
        {CardData.map((item, index) =>  <Card key={`${item.heading1 + index}`} data={item} index={index} />)}
      </div>
    </section>
  );
};
export default Perks;