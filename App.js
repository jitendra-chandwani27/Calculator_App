import React from 'react';
import { Text, View, Button, TouchableOpacity, StatusBar } from 'react-native';
import { styles } from './styles';
import Label from './label'
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "", history: "" }
  }

  hasPrecedence(operator1, operator2) {
    var precedenceList = ['/', '*', '%', '+', '-'];
    if (precedenceList.indexOf(operator1) > precedenceList.indexOf(operator2))
      return true;
    else
      return false;

  }

  value(b, op, a) {
    switch (op) {
      case "+":
        return a + b;
        break;
      case "-":
        return a - b;
        break;
      case "*":
        return a * b;
        break;
      case "%":
        return a % b;
        break;
      case "/":
        if (b == 0)
          alert("Can't divide by zero");
        return a / b;
        break;
    }
  }

  calculcate() {
    var str = this.state.text;
    var l = str.length;
    var operand = [];
    var operator = [];
    for (var i = 0; i < l; i++) {
      if ((parseFloat(str[i]) >= "0" && parseFloat(str[i]) <= "9") || (str[i] === ".")) {
        var sbuf = "";
        while (i < l && (parseFloat(str[i]) >= "0" && parseFloat(str[i]) <= "9") || str[i] === ".") {
          sbuf = sbuf + str[i++];
        }
        operand.push(parseFloat(sbuf, 10));
      }
    }
    for (var i = 0; i < l; i++) {
      if (str[i] === '+' || str[i] === '-' || str[i] === '*' || str[i] === '/' || str[i] === '%') {
        while (operator.length > 0 && this.hasPrecedence(str[i], operator[operator.length - 1])) {
          operand.push(this.value(operand.pop(), operator.pop(), operand.pop()));
        }
        operator.push(str[i]);
      }
    }
    while (operator.length > 0)
      operand.push(this.value(operand.pop(), operator.pop(), operand.pop()));
    return (this.setState({ text: String(operand), history: str }));
  }

  trim() {
    var str = this.state.text;
    if (str.length > 0)
      return (this.setState({ text: this.state.text.substring(0, this.state.text.length - 1) }));
  }

  Cal_View() {
    return (
      <View style={styles.container}>
        <Label Text={this.state.text} History={this.state.history} />
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            {/* AC Button */}
            <TouchableOpacity style={styles.kuch} onPress={(text) => this.setState({ text: "", history: "" })}>
              <Text style={{ color: '#d85927', fontSize: 30 }}>C</Text>
            </TouchableOpacity>
            {/* 7 Number */}
            <TouchableOpacity style={styles.number_button} onPress={(text) => this.setState({ text: this.state.text + "7" })}>
              <Text style={styles.number_buttonview}>7</Text>
            </TouchableOpacity>
            {/* 4 Number */}
            <TouchableOpacity style={styles.number_button} onPress={(text) => this.setState({ text: this.state.text + "4" })}>
              <Text style={styles.number_buttonview}>4</Text>
            </TouchableOpacity>
            {/* 1 Number */}
            <TouchableOpacity style={styles.number_button} onPress={(text) => this.setState({ text: this.state.text + "1" })}>
              <Text style={styles.number_buttonview}>1</Text>
            </TouchableOpacity>
            {/* Percentage */}
            <TouchableOpacity style={styles.number_button} onPress={(text) => this.setState({ text: this.state.text + "%" })}>
              <Text style={styles.number_buttonview}>%</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            {/* Trim */}
            <TouchableOpacity style={styles.kuch} onPress={this.trim.bind(this)}>
              <Text style={{ fontSize: 25, color: 'black' }}>⌫</Text>
            </TouchableOpacity>
            {/* 8 Number */}
            <TouchableOpacity style={styles.number_button} onPress={(text) => this.setState({ text: this.state.text + "8" })}>
              <Text style={styles.number_buttonview}>8</Text>
            </TouchableOpacity>
            {/* 5  Number*/}
            <TouchableOpacity style={styles.number_button} onPress={(text) => this.setState({ text: this.state.text + "5" })}>
              <Text style={styles.number_buttonview}>5</Text>
            </TouchableOpacity>
            {/* 2 Number */}
            <TouchableOpacity style={styles.number_button} onPress={(text) => this.setState({ text: this.state.text + "2" })}>
              <Text style={styles.number_buttonview}>2</Text>
            </TouchableOpacity>
            {/* 0 Number */}
            <TouchableOpacity style={styles.number_button} onPress={(text) => this.setState({ text: this.state.text + "0" })}>
              <Text style={styles.number_buttonview}>0</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            {/* Divide */}
            <TouchableOpacity style={styles.kuch} onPress={(text) => this.setState({ text: this.state.text + "/" })}>
              <Text style={styles.kuch_color}>÷</Text>
            </TouchableOpacity>
            {/* 9 Number */}
            <TouchableOpacity style={styles.number_button} onPress={(text) => this.setState({ text: this.state.text + "9" })}>
              <Text style={styles.number_buttonview}>9</Text>
            </TouchableOpacity>
            {/* 6 Number*/}
            <TouchableOpacity style={styles.number_button} onPress={(text) => this.setState({ text: this.state.text + "6" })}>
              <Text style={styles.number_buttonview}>6</Text>
            </TouchableOpacity>
            {/* 3 Number */}
            <TouchableOpacity style={styles.number_button} onPress={(text) => this.setState({ text: this.state.text + "3" })}>
              <Text style={styles.number_buttonview}>3</Text>
            </TouchableOpacity>
            {/* Dot */}
            <TouchableOpacity style={styles.number_button} onPress={(text) => this.setState({ text: this.state.text + "." })}>
              <Text style={styles.number_buttonview}>.</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            {/* Multiplication */}
            <TouchableOpacity style={styles.kuch} onPress={(text) => this.setState({ text: this.state.text + "*" })}>
              <Text style={styles.kuch_color}>x</Text>
            </TouchableOpacity>
            {/* Addition */}
            <TouchableOpacity style={styles.kuch} onPress={(text) => this.setState({ text: this.state.text + "+" })}>
              <Text style={styles.kuch_color}>+</Text>
            </TouchableOpacity>
            {/* Substraction */}
            <TouchableOpacity style={styles.kuch} onPress={(text) => this.setState({ text: this.state.text + "-" })}>
              <Text style={{ fontSize: 40, color: 'black' }}>-</Text>
            </TouchableOpacity>
            {/* Equals */}
            <TouchableOpacity style={styles.equalsto} onPress={this.calculcate.bind(this)}>
              <Text style={styles.number_buttonview}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>);
  }

  render() {
    return (this.Cal_View());
  }
}
