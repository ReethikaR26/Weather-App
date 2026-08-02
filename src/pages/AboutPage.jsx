import './AboutPage.css'
function AboutPage(){
     return (
    <div className="about-container">
      <div className="about-card">
        <div className="about-header">
          <div className="about-icon">
            <i className="fas fa-cloud-sun"></i>
          </div>
          <h1>About Weather Now</h1>
          <p className="about-subtitle">Your trusted weather companion</p>
        </div>

        <div className="about-content">
          <div className="about-section">
            <i className="fas fa-info-circle section-icon"></i>
            <h2>What is Weather Now?</h2>
            <p>
              Weather Now is a simple and elegant weather application that provides 
              real-time weather information for cities around the world. Built with 
              React and powered by the OpenWeatherMap API, it delivers accurate and 
              up-to-date weather data in a beautiful, user-friendly interface.
            </p>
          </div>

          <div className="about-section">
            <i className="fas fa-feather section-icon"></i>
            <h2>Features</h2>
            <ul className="features-list">
              <li>
                <i className="fas fa-check-circle"></i>
                <span>Real-time weather data for any city</span>
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                <span>Temperature, humidity, wind speed, and pressure</span>
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                <span>Beautiful glass-morphism design</span>
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                <span>Responsive layout for all devices</span>
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                <span>Weather condition icons and descriptions</span>
              </li>
            </ul>
          </div>

          <div className="about-section">
            <i className="fas fa-code section-icon"></i>
            <h2>Technologies Used</h2>
            <div className="tech-stack">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Vite</span>
              <span className="tech-tag">OpenWeatherMap API</span>
              <span className="tech-tag">Font Awesome</span>
              <span className="tech-tag">CSS3</span>
            </div>
          </div>

          
          
        </div>

        
      </div>
    </div>
  );
}

export default AboutPage;