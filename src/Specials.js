import './Specials.css';

function Specials() {
  return (
    <section className="specials">
      <h2>Specials</h2>
      <div className="specials-grid">
        <div className="special-card">
          <img src="/greek-salad.jpg" alt="Greek Salad" />
          <div class="card-title-price">
          <h3>Greek Salad</h3>
          <span class="price">$12.99</span>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="card-footer">
          <span className="price"></span>
            <button>Order a delivery: +1</button>
          </div>
        </div>
        <div className="special-card">
          <img src="/bruchetta.svg" alt="Bruschetta" />
          <div class="card-title-price">
          <h3>Bruschetta</h3>
          <span class="price">$12.99</span>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="card-footer">
            <span className="price"></span>
            <button>Order a delivery: +1</button>
          </div>
        </div>
        <div className="special-card">
          <img src="/lemon-dessert.jpg" alt="Lemon Dessert" />
          <div class="card-title-price">
          <h3>Lemon Dessert</h3>
          <span className="price">$12.99</span>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="card-footer">
            <span className="price"></span>
            <button>Order a delivery: +1</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specials;
