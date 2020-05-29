import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


const buttons  = [
  {
    value: "1",
    key: "checkbox2",
    label: "amazon",
    name: "1"
  },
  {
    value: "2",
    key: "checkbox3",
    label: "best buy",
    name: "2"
  },
  {
    value: "3",
    key: "checkbox4",
    label: "Walmart",
    name: "3"
  },
  {
    value: "4",
    key: "checkbox5",
    label: "Toys 'R Us",
    name: "4"
  },
  {
    value: "5",
    key: "checkbox6",
    label: "EB Games",
    name: "5"
  },
  {
    value: "6",
    key: "checkbox7",
    label: "Think Geek",
    name: "6"
  },
  {
    value: "7",
    key: "checkbox8",
    label: "One Plus",
    name: "7"
  },
  {
    value: "8",
    key: "checkbox9",
    label: "Amazon Japan",
    name: "8"
  },
  {
    value: "9",
    key: "checkbox10",
    label: "Amazon Us",
    name: "9"
  }
];

const Button = ({ type = 'button', data, value }) => (
  <button type={type} data={data} value={label}/>
);


export default class NavToggle extends Component {
  constructor(props, unlisten) {
    super(props);
    this.startToggle = this.startToggle.bind(this);
  }
  startToggle = (e) => {
    e.preventDefault();
    console.log(e.props.data)
    this.props.click(this.button.data);
  }

  render(props) {
    return (
      <div className="main-nav">
       <h2>Hot Deals</h2>

       {
          buttons.map(item => (
            <div>
              <Button name={item.name} 
                data={item.value} 
                onClick={this.startToggle} 
                ref={(button) => this.button = button}
                />{item.label}
                </div>
          ))
        }

        {/* <ul>
          <li><Button name="1" onClick={this.startToggle}>Amazon Canada</Button></li>
          <li><Button name="2" onClick={this.startToggle}>Best Buy</Button></li>
          <li><Button name="3" onClick={this.startToggle}>Walmart</Button></li>
          <li><Button name="4" onClick={this.startToggle}>Toys r Us</Button></li>
          <li><Button name="5" onClick={this.startToggle}>EB Games</Button></li>
          <li><Button name="6" onClick={this.startToggle}>Think Geek</Button></li>
          <li><Button name="7" onClick={this.startToggle}>One Plus</Button></li>
          <li><Button name="8" onClick={this.startToggle}>Amazon Japan</Button></li>
          <li><Button name="9" onClick={this.startToggle}>Amazon US</Button></li>
        </ul> */}
      </div>
    )
  }
}
