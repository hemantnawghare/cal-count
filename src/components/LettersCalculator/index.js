import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  letterCount = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="app-container">
        <div className="container">
          <div>
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label className="para" htmlFor="input-value">
              Enter the phrase
            </label>
            <input
              name="input-value"
              id="input-value"
              type="text"
              placeholder="Enter the phrase"
              className="input"
              onChange={this.letterCount}
              value={searchInput}
            />
            <div>
              <p className="button">No. of letters: {searchInput.length}</p>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
