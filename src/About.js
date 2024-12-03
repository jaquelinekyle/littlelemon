import './index.css';

function AboutSection() {
  return (
    <div className="about-section">
      {/* Text Content */}
      <div className="about-text">
        <h1 color='yellow'>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim velit mollit. Exercitation veniam consequat
          sunt nostrud amet.
        </p>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim velit mollit.
        </p>
      </div>

      {/* Images */}
      <div className="about-images">
        <img src="/Mario_and_Adrian_A.jpg" alt="Mario and Adrian" className="image-top" />
        <img src="/restaurant_chef_B.jpg" alt="Restaurant Chef" className="image-bottom" />
      </div>
    </div>
  );
}

export default AboutSection;
