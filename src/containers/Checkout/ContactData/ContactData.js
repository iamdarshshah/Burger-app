import React, { Component } from "react";
import Button from "../../../components/UI/Button/Buton";
import Spinner from "../../../components/UI/Spinner/Spinner";
import "./ContactData.css";
import axios from "../../../axios-orders";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    }
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    //alert("You Continue!");
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Darsh Shah",
        address: {
          street: "camp road",
          zipcode: "38004",
          country: "India"
        },
        email: "darsh@solulab.co"
      },
      deliveryMethod: "fastest"
    };
    axios
      .post("/orders.json", order)
      .then(res => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form>
        <input
          className="Input"
          type="text"
          name="Name"
          placeholder="your Name"
        ></input>
        <input
          className="Input"
          type="email"
          name="Email"
          placeholder="your Email"
        ></input>
        <input
          className="Input"
          type="text"
          name="Street"
          placeholder="street"
        ></input>
        <input
          className="Input"
          type="text"
          name="PostalCode"
          placeholder="PostalCode"
        ></input>
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className="ContactData">
        <h4>Enter your contact data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
