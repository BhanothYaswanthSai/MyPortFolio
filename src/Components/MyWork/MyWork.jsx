import React from 'react';
import '../MyWork/MyWork.css'
import mywork_data from '../../assets/mywork';
import arrow from '../../assets/arrow.png';

const MyWork = () =>{

    return(
        <div id="work" className="mywork">
            <div className="mywork-title">
                <h1>My latest work</h1>
            </div>
            <div className="mywork-container">
                {mywork_data.map((work, index)=>{
                    return<img  key={index}src={work.w_img} alt=""></img>
                })}  
            </div>
            <div className="mywork-showmore">
                <p>Show More</p>
                <br></br>
                <img src={arrow} alt=""/>
            </div>
        </div>
    )

}

export default MyWork;