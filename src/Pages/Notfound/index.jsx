import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import './notfound.css'
function Notfound() {
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            navigate('/');
        },5000);
    },[])
  return (
    <div className="notfound__container">
        <h1>404 | Page not found</h1>
    </div>
  )
}

export default Notfound