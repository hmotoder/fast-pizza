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
        <Link to="/order?food=マルゲリータ"><img src="/images/マルゲリータ.jpg" /></Link>
        <Link to="/order?food=プルコギ"><img src="/images/プルコギ.jpg" /></Link>
        <Link to="/order?food=シーフード"><img src="/images/シーフード.jpg" /></Link>
    </div>
  );
}

export default Home;
