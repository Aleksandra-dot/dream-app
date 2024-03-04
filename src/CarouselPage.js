import React from 'react';
import Carousel from './component/Carousel';
import { Link } from 'react-router-dom';

function CarouselPage() {
  return (
    <><nav>
      <ul style={{ listStyleType: 'none', display: 'flex' }}>
      <li>
          <Link to="/"><button style={{ padding: '10px 20px', fontSize: '16px' }}>Home</button></Link>
        </li>
        <li>
          <Link to="/year"><button style={{ padding: '10px 20px', fontSize: '16px' }}> Year</button></Link>
        </li>
        
      </ul>
    </nav><div>
        <Carousel />
      </div></>
  );
}

export default CarouselPage;
