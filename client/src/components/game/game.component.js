import React, { Component } from 'react';
import { connect } from "react-redux";
import "./game.component.css"; // Styles

//map some part of the state to the props of this component
const mapStateToProps = (state) => {
    return {

    }
  }

  //return comma separated, action: (params) => dispatch(action(params))
  const mapDispatchToProps = (dispatch) => {
    return {
      
    }
  }

class Game extends Component  {

    render() {
        return (<h1>Placeholder</h1>);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);