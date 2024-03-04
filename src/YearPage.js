import React from 'react';
import "./YearPage.css";
import { Link} from 'react-router-dom';


  function YearPage() {
    return (
        <><nav>
        <ul style={{ listStyleType: 'none', display: 'flex' }}>
          <li>
            <Link to="/"><button style={{ padding: '10px 20px', fontSize: '16px' }}> Home</button></Link>
          </li>
          <li>
            <Link to="/archive"><button style={{ padding: '10px 20px', fontSize: '16px' }}>Archive</button></Link>
          </li>
        </ul>
      </nav><div className="year-page-container">
                <h1>Your Year Overview</h1>
                <img
                    src="./images/year.png" // Replace with your image path
                    alt="Year Overview Image"
                    className="year-overview-image" />
            </div></>
    );
  }
  
  export default YearPage;
  

  
