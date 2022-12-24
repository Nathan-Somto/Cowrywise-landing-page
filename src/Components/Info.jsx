import Card from "./Card";
import CardData from "../CardData/CardData";
const Info = () => {
  
  const leftAnimation = value  => ({
    transition: 'all 1s ease-in',
    transform: value ? '':'translateX(100%)'
  }) 
  const rightAnimation = value  => ({
    transition: 'all 1s ease-in',
    transform: value ? '':'translateX(0%)'
  })
  return (
    <section className="infoSection">
      <div className="cardContainer">
        <div className="infoText">
          <h1>Get financial freedom</h1>
          <p>
            Plan towards your dream home, fund your kid's education, travel the
            world , all in one app.
          </p>
        </div>
        {CardData.map((item, index) => {
            // console.log(index);
          return <Card key={index} item={item}  />;
        })}
      </div>
    </section>
  );
};
export default Info;
