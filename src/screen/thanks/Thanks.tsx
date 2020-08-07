import React, { Component } from 'react';
import { Link, useLocation } from 'react-router-dom';

export interface ThanksProps {

}
export class Thanks extends Component<ThanksProps> {
    render() {
        return (
            <ThanksView />
        )
    }
}

const ThanksView: React.FC = (props) => {
  const query = new URLSearchParams(useLocation().search)
  const food = query.get('food')!
  const name = query.get('name')!
  const phone = query.get('phone')!
  return (
    <div>
      <Link to="/"><h1>FAST-PIZZA</h1></Link>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <div>
          <h2>{`Thanks ${name} !!`}</h2>
        </div>
      </div>
    </div>
  );
}

export default Thanks;
