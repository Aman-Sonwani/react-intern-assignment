import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import "../AddCardPage/styles.css";

class HomePage extends React.Component {
    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi!</h1>
                <p>You're logged in with React!!</p>
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
                            <Link to="/cardlist">
                                <button type="button" className="btn btn-primary btn-block">
                                    Card List
                                </button>
                            </Link>
                        </div>
                    </div>
                    <hr style={{ margin: "10px 0" }} />

                    <div  className='row'>
                        <Link to="/login">
                                    <button type="button" className="btn btn-danger btn-block">
                                    Logout
                                    </button>
                        </Link>
                    </div>
                
                
            </div>
        );
    }
}

function mapState(state) {
    const {  authentication } = state;
    const { user } = authentication;
    return { user };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };