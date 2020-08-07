import React, { Component, useState } from 'react';
import { Link, useLocation, RouteComponentProps } from 'react-router-dom';

export interface OrderProps extends RouteComponentProps {
  onOrderClick: (food: string, name: string, phone: string) => void
}
export class Order extends Component<OrderProps> {
    render() {
        return (
            <OrderView {...this.props} onOrderClick={(food, name, phone) => {
              this.props.history.push(`/thanks?food=${food}&name=${name}&phone=${phone}`)
            }} />
        )
    }
}

const OrderView: React.FC<OrderProps> = (props) => {
    const query = new URLSearchParams(useLocation().search)
    const food = query.get('food')!
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    return (
      <div>
          <Link to="/"><h1>FAST-PIZZA</h1></Link>
          <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              <div>
                  <h2>{`${food}`}</h2>
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
                  props.onOrderClick(food, name, phone)
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
