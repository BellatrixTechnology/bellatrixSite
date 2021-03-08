// import React from 'react';
// // import '../../App.css';
// import '../../index.css'
// import CardItem from '../CardItem';

// export default function Services() {
//   return (
//     <div class="text-center text-xl-left" >
//    <h1 class="sans-bold color__black wow slideInLeft" data-wow-delay="0.1s">Jenis Layanan</h1>
//    <div className='cards'>
//       <h1>Check out these EPIC Destinations!</h1>

//     </div>
//  </ div>

// );
// }

import React from "react";
import { Container, Row, Col, Card, CardBody, CardImg } from "shards-react";

export default function CardBodyExample() {
  return (
    <Container>
 <h1 style={{marginRight:"1000px"}}>Jenis Layanan</h1>
 <p style={{
              
              border: "0.5px solid #ff5367",
              borderRadius: "10px",
              marginRight: "1030px",
              marginLeft: "50px",
            }}></p>

      <Row>
        <Col>
          <Card className="card-1"
            style={{
             
            }}
          >
            <CardImg className='card-img'  src="/images/Groupdot.png" />
            <CardBody>
              <p style={{ color: "#ff5367", fontSize: "25px",marginLeft:"20px" }}>Design</p>
              <br />
              <p style={{ color: "#A29E9F",fontStyle:"normal",marginLeft:"20px" }}>
                Kami menyediakan beberapa jenis deisgnsepeti feed instagram,
                UIUX, dsb.
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
