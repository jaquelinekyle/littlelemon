import './index.css';
import Chicago from './Chicago';
import { Link } from 'react-router-dom';

function CalltoAction() {
    return (
      <>
        <header>
        <div class="full-width-rectangle">
        <div className="chicago">
        <Chicago />
        <Link to="booking"><button>Reserve a Table</button></Link>
        </div>
        <img src="/restauranfood.jpg" alt="restaurant food" />
        </div>
        
        </header>
      </>
    );
  }
  export default CalltoAction;