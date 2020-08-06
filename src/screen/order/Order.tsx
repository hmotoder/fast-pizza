import React, { Component } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useQuery from '../../routing/userQuery'

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
    const query = new URLSearchParams(useLocation().search)
    const food = query.get('food')
    return (
        <div>
            {food}
            <Link to="/thanks">THANKS</Link>
        </div>
    );
}

export default Order;
