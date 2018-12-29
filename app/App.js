import React from "react";
import { connect } from "react-redux";
import { View, Text, Button, StatusBar } from "react-native";
import { buttonClick } from "./actions/button";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  onPressLearnMore() {
    this.props.buttonClick();
  }

  render() {
    return (
      <View>
        <StatusBar hidden />
        <Button
          onPress={this.onPressLearnMore.bind(this)}
          title="Learn More"
          color="#841584"
        />
        <Text>Button value: {this.props.buttonValue}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    buttonValue: state.buttonReducer.buttonValue
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buttonClick: () => dispatch(buttonClick())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
