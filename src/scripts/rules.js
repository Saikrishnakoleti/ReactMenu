import React, { Component } from "react";

class Rules extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rules: []
    }
  }
  componentDidMount() {
    fetch('http://localhost:3000/users')
      .then(res => res.json())
      .then(data => {
        this.setState({
          rules: data.rules
        })
      });
  }
  render() {
    return <div>
      <ul>
        {this.state.rules.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  }
}

export default Rules;