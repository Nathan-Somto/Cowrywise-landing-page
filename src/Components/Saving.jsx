import DownloadCardData from '../CardData/DownloadCardData';
import Downloadcard from './Downloadcard';
import {useState} from "react";
const Saving = () =>
{
    return(
        <>
        <section>
            <h3>WHY COWRYWISE</h3>
            <h2>Saving Charges <span>Nope.</span></h2>
            <h2>Got SEC license? <span>Yup</span></h2>
            <h2>Great Interest Rates?<span>Confam</span></h2>
            <h2>Convined <span>Sign Up</span></h2>
            {DownloadCardData.map((item ,index) =>{ 
            return <Downloadcard key = {index} item ={item}/>
            })} 
        </section>
        </>
    );
}
export default Saving;