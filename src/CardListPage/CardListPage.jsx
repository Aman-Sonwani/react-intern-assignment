import React from "react";
import Card from "react-credit-cards";
import { Link } from "react-router-dom";

class CardList extends React.Component {
  render() {
    return (
            <div className="App-cards">
                <h3>Card List</h3>
                <div className="App-cards-list">
                    <Card
                        name="John Smith"
                        number="5555 4444 3333 1111"
                        expiry="10/20"
                        cvc="737"
                    />

                    <Card
                        name="John Smith"
                        number="4111 1111 1111 1111"
                        expiry="10/20"
                        cvc="737"
                    />

                    <Card
                        name="John Smith"
                        number="3700 0000 0000 002"
                        expiry="10/20"
                        cvc="737"
                    />

                    <Card
                        name="John Smith"
                        number="3600 666633 3344"
                        expiry="10/20"
                        cvc="737"
                    />
                    <Card
                        name="John Smith"
                        number="6011 6011 6011 6611"
                        expiry="10/20"
                        cvc="737"
                    />

                    <Card
                        name="John Smith"
                        number="5066 9911 1111 1118"
                        expiry="10/20"
                        cvc="737"
                    />

                    <Card
                        name="John Smith"
                        number="6250 9460 0000 0016"
                        expiry="10/20"
                        cvc="737"
                    />

                    <Card
                        name="John Smith"
                        number="6062 8288 8866 6688"
                        expiry="10/20"
                        cvc="737"
                    />

                    <Card
                        name="John Smith"
                        number="**** **** **** 7048"
                        expiry="10/20"
                        cvc="737"
                        preview={true}
                        issuer="visa"
                    />
                </div>
                    <hr style={{ margin: "10px 0 0px" }} />
                    <div className='row'>
                        <div className='col-6'>
                        <Link to="/addcard">
                            <button type="button" className="btn btn-primary btn-block">
                                Add Card
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
    );
  }
}
export {CardList};