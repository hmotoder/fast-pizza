import React, { Component, useState } from 'react';
import { Link, useLocation, RouteComponentProps } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export interface OrderProps extends RouteComponentProps {
  onOrderClick: (food: string, price: number, name: string, phone: string) => void
}
export class Order extends Component<OrderProps> {
    render() {
        return (
            <OrderView {...this.props} onOrderClick={(food, price, name, phone) => {
              const orderId = uuidv4()
              this.props.history.push(`/thanks?orderId=${orderId}&food=${food}&price=${price}&name=${name}&phone=${phone}`)
            }} />
        )
    }
}

const OrderView: React.FC<OrderProps> = (props) => {
    const query = new URLSearchParams(useLocation().search)
    const food = query.get('food')!
    const price = Number(query.get('price')!);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
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
                <h2>{`${food}`}<span> </span><span>{`¥${price}`}</span></h2>
                <img src={`images/${food}.jpg`} height="30%" />
            </div>
        </div>
        <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
          お客様情報
        </h2>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
          <div>
          </div>
          <div>
            <label>
              氏名:
              <div>
              <input type="text" name="name" onChange={(event) => {
                setName(event.target.value)
              }} />
              </div>
            </label>
            <label>
              TEL:
              <div>
                <input type="text" name="phone" onChange={(event) => {
                  setPhone(event.target.value)
                }}/>
              </div>
            </label>
            <div style={{ marginTop: 20 }}>
              <button style={{ fontSize: "32px" }} onClick={() => {
                props.onOrderClick(food, price, name, phone)
              }}>
                注文
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Order;
