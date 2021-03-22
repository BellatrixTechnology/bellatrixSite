import React, { useEffect, useState } from "react";
// import '../../App.css';
import "../components/Portfolio.css";
import firebase from "firebase";
import db from "../../src/firebaseConfig";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "reactstrap";

export default function Products() {
  const [Portfolio,setPortfolio]=useState([])
  const fetchPortfolio=async()=>{
    const response=db.collection('Portfolio');
    const data=await response.get();
    data.docs.forEach(item=>{
     setPortfolio([...Portfolio,item.data()])
    })
  }
  useEffect(() => {
    fetchPortfolio();
  }, [])
  return (
    <div className="portfolio-color ">
         {
        Portfolio && Portfolio.map(firstPorfolio=>{
          return(
            <div >
             
           
<h1 className="portfolio-setting">{firstPorfolio.Title}</h1>
        <p style={{ fontFamily:"fantasy", color: "gray" ,marginLeft:"40px"}}>
         {firstPorfolio.description}
        </p>
          <p style={{ fontFamily:"fantasy", color: "gray" ,marginLeft:"40px"}} >{firstPorfolio.descriptionTwo}</p>
   
      <br />
          <div className="mb-2">
            <Button className="portfolio-button" outline color="warning">
              {" "}
           {firstPorfolio.buttonOne}
            </Button>{" "}
          </div>
      <img className="portfolio-img" src="/images/portfolio.png"></img>
      </div>
          )
        })
      }
      
      <div className="edu-template">
        <div className="edu-image"> </div>
        
        {/* <img className="edu-img" src="/images/eduimg.png"></img> */}
        <div>
          <h1 className="template-setting" >Education Template</h1>
          <p style={{ fontFamily:"fantasy", color: "gray" }}>
            Template ini merupakan project tentang edukasi yang diminta oleh
            klien kami. 
          </p>
          <br />
          <div className="mb-2">
            <Button className="edu-button" outline color="primary">
              {" "}
              Detail Projeck{" "}
            </Button>{" "}
          </div>
        </div>
      </div>
     
    </div>
    
  );
}
