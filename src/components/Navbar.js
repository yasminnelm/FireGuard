import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import logo from '../assets/img/logo.png';
import Map from "./Map";



export const NavBar = () => {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const { events } = await (await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events')).json()
      setEventData(events)
      setLoading(false)
    }
    fetchEvents()
  }, []);
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

 
  return (
    <Router>
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link as={Link} to="/map" className={activeLink === 'map' ? 'active navbar-link' : 'navbar-link'} onClick={() => { onUpdateActiveLink('map')}}>Map Visualization</Nav.Link>
                <Nav.Link href="https://forestwildfireprediction.onrender.com" className={activeLink === 'predict' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('predict')}>Predict</Nav.Link>
                <Nav.Link href="https://www.nbcnews.com/western-wildfires" target="_blank"className={activeLink === 'news' ? 'active navbar-link' : 'navbar-link'} onClick={() => { onUpdateActiveLink('news')}}>News</Nav.Link>
              </Nav>
              <span className="navbar-text">
                <HashLink to='#'>
                  <button className="vvd"><span>REPORT FIRE</span></button>
                </HashLink>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Switch>
       <Route path="/map">
          <Map eventData={eventData} />
        </Route>
      </Switch>
    </Router>
  );
}
