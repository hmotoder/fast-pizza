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
      <Link to="/"><h1>FAST-PIZZA</h1></Link>
      <div  style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <div>
          <h2>マルゲリータ</h2>
          <Link to="/order?food=マルゲリータ"><img src="images/マルゲリータ.jpg" height="30%" /></Link>
        </div>
        <div>
          <h2>プルコギ</h2>
          <Link to="/order?food=プルコギ"><img src="/images/プルコギ.jpg" height="30%" /></Link>
        </div>
        <div>
          <h2>シーフード</h2>
          <Link to="/order?food=シーフード"><img src="/images/シーフード.jpg" height="30%" /></Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
