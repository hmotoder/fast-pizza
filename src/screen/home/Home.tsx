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
        home
        <Link to="/order">ORDER</Link>
    </div>
  );
}

export default Home;
