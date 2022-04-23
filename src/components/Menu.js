import Button from "./Button"
import { Navigate, useNavigate } from 'react-router-dom'
import Styles from '../style/menu.module.css'
import React,{ usestate,useEffect} from "react";

const Menu = () => {

  const navigate = useNavigate()


    const liveFunc = () => {
        navigate('/live')
      }
    
      const historyFunc = () => {
      navigate('/history')
      }

      const liveTransactionButton={
          backgroundColor:'#25DBF4',
          borderRadius:"40px",
      }

  return (
    <div className ={Styles.container}>
      <h1 className={Styles.welcomeTxt}>Welcome</h1>
      <img src={require('./logo.jpeg')} alt="SecureATM logo" />
        <div className={Styles.viewLiveTransactionBtn}>
            <button onClick={liveFunc}>View Live Transactions</button>
        </div>
        <div className={Styles.viewTransactionHistory}>
            <button  onClick={historyFunc}>View Transaction History</button>
        </div>

    </div>
  )
}

export default Menu
