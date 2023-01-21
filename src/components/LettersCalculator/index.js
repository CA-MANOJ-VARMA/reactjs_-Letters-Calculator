// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {changeValue: '', changeLength: 0}

  onChangeValue = event => {
    const searchValue = event.target.value
    console.log(searchValue)
    this.setState({changeValue: searchValue, changeLength: searchValue.length})
  }

  render() {
    const {changeValue, changeLength} = this.state
    return (
      <div className="css-bg-container">
        <div className="css-input-button-container">
          <h1>Calculate the letters you enter</h1>
          <label htmlFor="inputId">Enter the Phrase </label>
          <input
            type="text"
            placeholder="Enter the phase"
            id="inputId"
            onChange={this.onChangeValue}
            value={changeValue}
          />
          <p className="css-noofletters-para">No.of letters: {changeLength}</p>
        </div>
        <div className="css-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="css-image-itself"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
