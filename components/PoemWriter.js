import React from 'react';

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poemTextArea: "",
      validity: false
    };

    this.handlePoemText = this.handlePoemText.bind(this)
  }

  handlePoemText(event) {
    const poemText = event.target.value
    this.setState({
      poemTextArea: poemText
    })


    this.setState({
      validity: false
    })

    const poemLines = poemText.split("\n")
    if(poemLines.length === 3) {
      if(poemLines[0].split(" ").filter( word => word).length === 5 && poemLines[1].split(" ").filter( word => word).length === 3 && poemLines[2].split(" ").filter( word => word).length === 5) {
        this.setState({
          validity: true
        })
      }
    }
  }

  render() {
    // uses poemDiv in ternary when poem is valid
    const poemDiv = <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poemTextArea} onChange={this.handlePoemText}/>
        {this.state.validity ? "" : poemDiv}
      </div>
    );
  }
}
