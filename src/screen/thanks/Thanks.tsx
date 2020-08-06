import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
  return (
    <div>
        thanks
        <Link to="/">THANKS</Link>
    </div>
  );
}

export default Thanks;
