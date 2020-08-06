import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export interface OrderProps {
    
}
export class Order extends Component<OrderProps> {
    render() {
        return (
            <OrderView />
        )
    }
}

const OrderView: React.FC = (props) => {
  return (
    <div>
        order
        <Link to="/thanks">THANKS</Link>
    </div>
  );
}

export default Order;
