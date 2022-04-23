import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
import axios from "axios";
import HistoryDetails from "./HistoryDetails";
import styles from '../style/history.module.css';
import Styles from "../style/live.module.css";

const History = () => {
    const navigate = useNavigate()
    const backFunc = () => {
        navigate('/')
    }

    const liveFunc = () => {
        navigate('/transaction')
    }

    const [data,setData] =useState(null);


    useEffect(() => {

        axios.get(`http://127.0.0.1:8000/getUserHistory`)
            .then(res=>{setData(res.data)})
            .catch((error) => {
                console.log('error ' + error);
            });
    },[])

    const remove = (id) => {
        let newPerson = data.filter((cv) => cv.id !== id);
        console.log(data)
        setData(newPerson)
    }

    return (
        <div >
            <h1 className='heading'>SecureATM</h1>
                 <div className='header'>
                    <img src={require('./logo.jpeg')} alt="SecureATM logo" className='miniLogo'/>
                     <h2 className='historyHeading'>Transaction History</h2>
                </div>
            <div >
                { data && < HistoryDetails people={data} remove={remove} /> }
            </div>
            {/*<Button className={styles.back} color="blue" text="back to home" onClick={backFunc}/>*/}
            <button className={styles.back} type="submit"  onClick={backFunc}>Back to Home </button>
        </div>


    )
}

export default History