import React, { Component } from 'react'
import { connect } from 'react-redux'
import {CommonAction, TestAction} from '../actions/action'

export class App extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.CommonAction();
        this.props.TestAction();
    }

  render() {
    return (
      <div>
          App Loads Here
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    state: state
})

const mapDispatchToProps = {
    CommonAction,
    TestAction
}

export default connect(mapStateToProps, mapDispatchToProps)(App)