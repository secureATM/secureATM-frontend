import React, {useEffect, useState} from 'react'
import axios from "axios";
import Footer from '../components/Footer'
import Webcam from "react-webcam";
import App from "../App";
import Styles from '../style/live.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faClose, faEllipsis} from "@fortawesome/free-solid-svg-icons";


const Live = () => {


    const [data,setData] = useState({})
    const [atmUser,setAtmUserData] = useState({})
    const[ accountNum , setAccNum] =useState("")


    let {detection_1 ,detection_2 ,detection_3,model_headline} = data
    const { accNum ,name ,age , phone_num} = atmUser


    const refreshPage = ()=>{
        window.location.reload()
    }

    const atmUserDetails=()=>{
        axios.get('http://127.0.0.1:8000/atm_user_details ')
            .then(res=>
                setAtmUserData(res.data)
            )
            .catch(err=>console.log(err))
    }

    useEffect(()=>{


      try {

          setInterval(() => {
              axios.get(`http://127.0.0.1:8000/live/output`)
                  .then(res=>
                          setData(res.data)
                      // console.log(res.data)
                  )
                  .catch(err=>console.log(err))
          }, 2000);

      } catch (e) {
          console.log('detection details getting error')
      }


    },[])


    const Handle =(e)=>{

        setAccNum(e.target.value)

    }
    const getCard = (e)=>{
        e.preventDefault()

        const formData = new FormData();

        formData.append("facialRecognition",detection_1)
        formData.append("weaponDetection",detection_2)
        formData.append("facialExpression",detection_3)
        formData.append("accountNum",accNum)
        formData.append("phoneNum",phone_num)
        formData.append("facialExpression",detection_3)
        formData.append("stop","true")

        axios.post("http://127.0.0.1:8000/detectionOutput", formData)
            .then(result => {
                console.log(result)

            })
            .catch(err=> {
                console.log(err)
            })
        setData("")
        refreshPage()
    }

    const submit = (e)=>{
        e.preventDefault()

        const formData = new FormData();

        formData.append("accNum",accountNum)


        axios.post("http://127.0.0.1:8000/accNum", formData)
            .then(result => {
                console.log(result)

            })
            .catch(err=> {
                console.log(err)
            })

        atmUserDetails()
        setAccNum("")
    }


    const rightTick ={
        color:'#04e312',
        fontSize:'40px',
    }

    const closeTick ={
        color:'#de0202',
        fontSize:'40px',
    }
    const defaultColor ={
        color:'#525050',
        fontSize:'40px',
    }


    const facialRecognition = ()=>{
        if(detection_1 === "Unknown"){
            return faClose
        }else if (detection_1 === name) {
            return faCheck
        }else  {
            return faEllipsis
        }
    }

    const gunDetect = ()=>{
        if(detection_2 === "weapon detect"){
            return faCheck
        }else if (detection_2 === "not detect") {
            return faClose
        }else {
            return faEllipsis
        }
    }


    const facialRecognitionTickColor = ()=>{
        if(detection_1 === "Unknown"){
            return closeTick
        }else if (detection_1 === name)  {
            return rightTick
        }else  {
            return defaultColor
        }
    }
    const gunDetectTickColor = ()=>{
        if(detection_2 === "weapon detect"){
            return rightTick
        }else if (detection_2 === "not detect")  {
            return closeTick
        }else {
            return defaultColor
        }
    }


  return (
    <div className="App">

        <h1 className="heading">SecureATM</h1>
        <button className={Styles.start_btn} onClick={refreshPage}>Start</button>
        <h2>{model_headline}</h2>

      <div className={Styles.detection_container}>


          <ul className={Styles.user_details_list}>
              <li className={Styles.detection_text}>Facial recognition  <FontAwesomeIcon style={facialRecognitionTickColor()} icon={facialRecognition()} /></li>
              <li className={Styles.detection_text}>Weapon detection  <FontAwesomeIcon style={gunDetectTickColor()} icon={gunDetect()} /></li>
              <li className={Styles.detection_text}>Facial expression <span className={Styles.facial_expression_text}>{detection_3}</span></li>

          </ul>
      </div>

       <div className={Styles.webcam_location}>

           {/*<img src={`http://127.0.0.1:8000/live?${Date.now()}`} width="550px" height="450px"/>*/}
           <img src={'http://127.0.0.1:8000/live'} width="550px" height="450px"/>
           {/*<img src={'http://127.0.0.1:8000/ '} width="550px" height="450px"/>*/}

           <form onSubmit={e=>{submit(e)}}>
               <label className={Styles.account_num_text}>Account Number</label>
               <input type="text" name="accNum" id="accNum" value={accountNum} onChange={(e)=>Handle(e)} />
               <button className={Styles.account_num_submit_btn} type="submit" >Enter </button>
           </form>

           <form onSubmit={e=>{getCard(e)}}>
               <button className={Styles.account_num_submit_btn} type="submit" >Get Card </button>
           </form>
       </div>

        <div className={Styles.user_details_container}>
                <h1 style={{fontSize: "25px"}}>ATM user details</h1>
                <img src={`http://127.0.0.1:8000/img?${Date.now()}`} width="300px" height="200px"  />

                {/*<img className={Styles.atm_user_dp} src={ `data:image/jpg;charset=utf-8;base64,${base64}`} width="300px" height="200px" alt={"Not Found"}/>*/}
                {/*<img src={`data:image/png;base64,http://127.0.0.1:8000/img}`} />*/}

                <h1 style={{fontSize: "25px"}}>Acc Num :{accNum}</h1>
                <ul className={Styles.user_details_list}>
                    <li className={Styles.user_details_text}>Name : {name}</li>
                    <li className={Styles.user_details_text}>Age : {age}</li>
                    <li className={Styles.user_details_text}>Phone Num : {phone_num}</li>
                </ul>
        </div>

        <div className={Styles.footer_location}>
            <Footer />
        </div>
    </div>
  )
}

export default Live
