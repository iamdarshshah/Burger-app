import React from "react";
import Ax from "../../../hoc/Ax/Ax";
import Button from "../../UI/Button/Buton";

class OrderSummary extends React.Component {
  //This could be a functional component, doesn't have to be a class component.
  componentWillUpdate() {
    console.log("[OrderSummary] WillUpdate");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
          {this.props.ingredients[igKey]}
        </li>
      );
    });

    return (
      <Ax>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancled}>
          CANCLE
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Ax>
    );
  }
}

export default OrderSummary;
