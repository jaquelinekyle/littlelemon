import './CustomersSay.css';

function CustomersSay() {
    return (
      <>
        <section class="testimonials">
  <h2>Testimonials</h2>
  <div class="testimonials-grid">
    <div class="review-card">
      <div class="rating">⭐⭐⭐⭐⭐</div>
      <div class="user-info">
        <img class="user-photo" src="avatar1.png" alt="User Profile" />
        <p class="user-name">John Doe</p>
      </div>
      <p class="review-text">
        "Great food and excellent service! Highly recommended."
      </p>
    </div>
    <div class="review-card">
      <div class="rating">⭐⭐⭐⭐</div>
      <div class="user-info">
        <img src="avatar2.png" alt="User Profile" class="user-photo" />
        <p class="user-name">Jane Smith</p>
      </div>
      <p class="review-text">
        "The ambiance is lovely and the staff is friendly."
      </p>
    </div>
    <div class="review-card">
      <div class="rating">⭐⭐⭐⭐⭐</div>
      <div class="user-info">
        <img src="avatar3.png" alt="User Profile" class="user-photo" />
        <p class="user-name">Sam Wilson</p>
      </div>
      <p class="review-text">
        "Delicious meals with great attention to detail!"
      </p>
    </div>
    <div class="review-card">
      <div class="rating">⭐⭐⭐⭐⭐</div>
      <div class="user-info">
        <img src="avatar4.png" alt="User Profile" class="user-photo" />
        <p class="user-name">Anonymous Programmer</p>
      </div>
      <p class="review-text">
        "I hope this class is worth it!"
      </p>
    </div>
  </div>
</section>

      </>
    );
  }
  export default CustomersSay;