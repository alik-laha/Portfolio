"client side"
import React from "react";
import "./main.css";
import { FaLinkedin,FaGithub} from 'react-icons/fa';
import Link from "next/link";
let Main = () => {
    return(
        <>
        <div className="main">
                <div className="heading">
                <h1 id="head">Hi i am Alik Laha</h1>
                <h2>Full Stack Developer</h2>
                <h2>Ready to bring your idea alive</h2>
                <p id="about"> an full-stack web developer from India</p>
                </div>
               <div className="container">
                <div className="img">

                </div>
                <div className="logo">
                <Link href="https://www.linkedin.com/in/alik-laha-749093253/" className="social"><FaLinkedin/></Link> 
                <Link href="https://github.com/alik-laha" className="social"><FaGithub/></Link>
                </div>
               
               </div>
               
        </div> 
        <div className="writing">
            <div id="one">
            <p className="writ">As a full stack developer i have learn many technology. 
               <br/>My strong point is i am a creative problem solver and 
               <br/>first learner i can learn any technology to complete 
               <br/>my job.I have over two year of expreance of frontend 
               <br/>development</p>
            </div>
            <div id="two">
            <p className="writ">I am open for work if you have any project idea 
                <br/>that i can help you to get into alive or you want 
                <br/>to hire me then you can contact me on my email 
                <br/><b className="con">Email=aliklaha0@gmail.com</b>
            </p>
            </div>
        </div>
       </>       
    )
};
export default Main;