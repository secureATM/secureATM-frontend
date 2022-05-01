import React,{useState} from 'react';
import styles from '../style/history.module.css';

const Content=( {people ,remove})=>{

    return<>

        {
            people.map((person) => {

                const {id, date ,account ,phoneNum ,detect_1 ,detect_2, detect_3} = person
                return (

                    <div className={styles.middle_content} key={id}>

                        <table>
                            <tr>
                                <th >Date</th>
                                <th >Owner Account Number</th>
                                <th >Owner Phone Number</th>
                                <th >Facial Recognition</th>
                                <th>Object Detection</th>
                                <th>Facial Expression Analysis</th>
                                <th>Conclusion</th>
                            </tr>
                            <tr>
                                <td>{date}</td>
                                <td>{account}</td>
                                <td>{phoneNum}</td>
                                <td>{detect_1}</td>
                                <td>{detect_2}</td>
                                <td>{detect_3}</td>
                                <td>{(detect_1 === "Unknown" || detect_2 === "weapon detect" || (detect_3 === "Fearful" || detect_3 === "Suprised" ))?"Suspicious": "Secure"}</td>
                            </tr>

                        </table>


                    </div>
                )

            })
        }
    </>
}
export default  Content