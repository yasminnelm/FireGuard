import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import 'animate.css';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Near-Real-Time Monitoring","Predict", "Protect" ];
  const period = 2000;
  const handleButtonClick = () => {
    console.log('connect');
    window.location.href = 'https://linktr.ee/fireguardnasa';
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }


  return (
    <section className="banner" id="home">
      <Container className="leftbanner" style={{position: 'relative'}}>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1>{`WildFire Tracker`} </h1>
                <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Near-Real-Time Monitoring",Predict", "Protect"  ]'><span className="wrap">{text}</span></span>
                <p>Explore our Near Real-Time Global Wildfire Tracker app for real-time updates and predictive analytics. 
                    Stay vigilant and safeguard your community.  Monitor wildfires as they happen.  
                    Predict potential fire outbreaks.  Get instant alerts. Access detailed fire data.
                     Stay connected globally.
                </p>
                <a href="https://linktr.ee/fireguardnasa">
        <button onClick={handleButtonClick}>
          Let's Connect <ArrowRightCircle size={25} />
        </button>
      </a>
              </div>}
            </TrackVisibility>
          </Col>
          
        </Row>
      </Container>
      
    </section>
  );
};




export default Banner;