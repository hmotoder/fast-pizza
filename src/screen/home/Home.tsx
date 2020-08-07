import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export interface HomeProps {

}
export class Home extends Component<HomeProps> {
    render() {
        return (
            <HomeView />
        )
    }
}

const HomeView: React.FC = (props) => {
  return (
    <div>
      <Link to="/">
        <img
          src="fast_pizza.png"
          height="200px"
          width="100%"
          style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} />
      </Link>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <div>
          <h2>マルゲリータ<span> </span><span>¥2000</span></h2>
          <Link to="/order?food=マルゲリータ&price=2000"><img src="images/マルゲリータ.jpg" height="30%" /></Link>
        </div>
        <div>
          <h2>プルコギ<span> </span><span>¥2400</span></h2>
          <Link to="/order?food=プルコギ&price=2400"><img src="/images/プルコギ.jpg" height="30%" /></Link>
        </div>
        <div>
          <h2>シーフード<span> </span><span>¥3000</span></h2>
          <Link to="/order?food=シーフード&price=3000"><img src="/images/シーフード.jpg" height="30%" /></Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
