import { useEffect, useState } from "react";
import axios from "axios";
import { Navbar, Container, Card, Nav, Col, Row, CardGroup } from "react-bootstrap";

import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import "./mainpage.css";
import Contact from "../Contact/Contact"
import 'bootstrap/dist/css/bootstrap.min.css';

import image2 from "../../image/image2.jpeg";

function Mainpage() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios("http://localhost:3000/cv/profile").then((e) => setData(e.data));
  });

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand>{data.dev}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="mailto:janchivariunjin@gmail.com">
                <MailIcon />
                {data.email}
              </Nav.Link>
              <Nav.Link href="tell:+976 88109921">
                <PhoneIcon />
                {data.phone}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Row>
        <div className="full">
        <Col>
          <div className="myImage">
            <img src={image2} />
          </div>
        </Col>
        <Col>
        <div className="description">
          <div className="description-wrapper">
            <h2 className="desc-hello">
              {data.hello}
            </h2>
            <h1 className="desc-name">
              {data.name}
            </h1>
            <div className="desc-title">
              <div className="desc-title-wrapper">
                <div className="desc-title-item">{data.item1}</div>
                <div className="desc-title-item">{data.item2}</div>
              </div>
            </div>
            <div className="desc2">{data.desc2}</div>
          </div>
        
        </div>
        </Col>
        </div>
        </Row>
      </Container>
      
      <Contact/>
    </>
  );
}
export default Mainpage;
