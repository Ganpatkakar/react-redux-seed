import React, { Component } from 'react';
import myImage from "../assets/ganpat.jpg";
import { connect } from 'react-redux';
import {CommonAction} from '../redux/actions'

export class App extends Component {
    constructor(props) {
        super(props);
        this.incrementer = this.incrementer.bind(this);
        this.decrementer = this.decrementer.bind(this);
    }

    componentWillMount() {
        this.props.CommonAction(true);
    }

    incrementer () {
        return null;
    }

    decrementer () {
        return null;
    }

  render() {
    return (
        <React.Fragment>
            <div>
                App Loads Here
            </div>
            <div className={"inc-dec"}>
                <button onClick={this.decrementer}>-</button>
                <i className={"number"}>{this.props.state.number}</i>
                <button onClick={this.incrementer}>+</button>
            </div>
            <img className={"kakar"} src={myImage} alt="Ganpat Kakar"/>
        </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
    state: state
});

const mapDispatchToProps = dispatch => ({
    CommonAction : (data) => dispatch(CommonAction(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
