import Button from "./Button";
const Downloadcard = ({item}) =>
{
    return(
        <>
        <div className='Downloadcard'>
        <h4>{item.number}<span>/5</span></h4>
        <Button version="download">{item.button}</Button>
        <h3>{item.h3}</h3>
        <p>{item.info}</p>
        <a>Download Now </a>
        </div>
        </>
    );
}
export default Downloadcard;