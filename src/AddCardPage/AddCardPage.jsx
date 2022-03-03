import React from "react";
import Card from "react-credit-cards";
import { Link } from "react-router-dom";
import { cardActions } from "../_actions/card.actions";
import { connect } from "react-redux";

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData
} from "./utils";

import "react-credit-cards/es/styles-compiled.css";

class AddCard extends React.Component {
    constructor(props) {
        super(props);

        // reset login status

        this.state = {
            name:"",
            number: "",
            cardHolder: "",
            expiry: "",
            cvc: "",
            issuer: "",
            focused: "",
            token:"",
            formData: null
        };

        this.handleCallback = this.handleCallback.bind(this);
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { issuer } = this.state;
    const formData = [...e.target.elements]
      .filter(d => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    this.setState({ formData });
    console.log(formData);
    this.props.add(formData);
    this.form.reset();
  };
  

  render() {
    const { name, number, expiry, cvc, focused, issuer, formData } = this.state;

    return (
      <div key="Payment">
        <div className="App-payment">
          <h1>Add Credit Cards</h1>
          <Card
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focused}
            callback={this.handleCallback}
          />
          <form ref={c => (this.form = c)} onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="tel"
                name="number"
                className="form-control"
                placeholder="Card Number"
                pattern="[\d| ]{16,22}"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              
              <small>E.g.: 49..., 51..., 36..., 37...</small>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />

            </div>
            <div className="row">
              <div className="col-6">
                <input
                  type="tel"
                  name="expiry"
                  className="form-control"
                  placeholder="Valid Thru"
                  pattern="\d\d/\d\d"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
              <div className="col-6">
                <input
                  type="tel"
                  name="cvc"
                  className="form-control"
                  placeholder="CVC"
                  pattern="\d{3,4}"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
            </div>
            <input type="hidden" name="issuer" value={issuer} />
            <div className="form-actions">
              <button className="btn btn-primary btn-block">Submit</button>
            </div>
          </form>
          {formData && (
            <div className="App-highlight">
              {formatFormData(formData).map((d, i) => (
                <div key={i}>{d}</div>
              ))}
            </div>
          )}
                    <hr style={{ margin: "50px 0 0px" }} />
                    <div className='row'>
                        <div className='col-6'>
                            <Link to="/cardlist">
                                    <button type="button" className="btn btn-primary btn-block">
                                        Card List
                                    </button>
                            </Link>
                        </div>
                        <div className='col-6'>
                            <Link to="/">
                                <button type="button" className="btn btn-primary btn-block">
                                    Home
                                </button>
                            </Link>
                            
                        </div>
                        <hr style={{ margin: "10px 0" }} />

                        <div  className='row'>
                            <Link to="/login">
                                <button type="button" className="btn btn-danger btn-block ">
                                Logout
                                </button>
                            </Link>
                        </div>
                    </div>

        </div>

      </div>
    );
  }
}


const actionCreators = {
    add: cardActions.add,
};

const connectedLoginPage = connect(null , actionCreators)(AddCard);
export { connectedLoginPage as AddCard };