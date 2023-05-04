import Card from "./Card";
import CardData from "../CardData/CardData";
const Info = () => {
  
  
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
          return <Card key={index} item={item} index={index} />;
        })}
      </div>
    </section>
  );
};
export default Info;
