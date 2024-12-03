import './index.css';
import CalltoAction from './CalltoAction';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import AboutSection from './About'

function HomePage() {
    return (
        <>
        <CalltoAction />
        <Specials />
        <CustomersSay />
        <AboutSection />
        <div className="grid-container">
          <div className="col-span-12 center-content">
            <h1>Welcome to Little Lemon (Header)</h1>
            <h2>Heading 2 (Subtitle)</h2>
            <h3>Heading 3 (Section Title)</h3>
            <h4>Heading 4 (Lead Text)</h4>
            <h5>Heading 5 (Card Title)</h5>
            <h6>Heading 6 (Highlight)</h6>
            <h6 style={{ fontWeight: 800 }}>Heading 6 w ExtraBold (Section Categories)</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        
      </>
    );
  }
  export default HomePage;