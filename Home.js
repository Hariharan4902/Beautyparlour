import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../Images/beautiful-young-woman-wearing-sari.jpg'; 
import img2 from '../Images/happy-fashion-women-bouquet-flowers.jpg'; 
import img3 from '../Images/portrait-beautiful-happy-bride-with-wedding-makeup-wedding-hairstyle.jpg';

const Home = () => (
  <section id="home">
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
          style={{ height: '90vh', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h1>Latest Trends of Bridal</h1>
          <p>Collections for Summer</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
          style={{ height: '90vh', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h1>Glamour & Elegance</h1>
          <p>Shine with Confidence</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
          style={{ height: '90vh', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h1>Timeless Beauty</h1>
          <p>Every Bride Deserves the Best</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </section>
);

export default Home;
