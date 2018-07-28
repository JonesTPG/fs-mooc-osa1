import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 1
    }

    this.kasvataYhdella = this.kasvataYhdella.bind(this)
    this.nollaa = this.nollaa.bind(this)

    setInterval(() => {
      this.setState({ counter: this.state.counter + 1})
    }, 1000)
    }

    kasvataYhdella() {
      this.setState({ counter: this.state.counter
        +  1})
    }

    nollaa() {
      this.setState({ counter: 0 })
    }

    asetaArvoon = (arvo) => () => this.setState({ counter: arvo })



  
  render() {
    return (
      <div>
        <Display counter={this.state.counter}/>
        <div>
          <Button 
            handleClick={this.asetaArvoon(this.state.counter+1)}
            text="Plus"
          />
          <Button 
            handleClick={this.asetaArvoon(this.state.counter-1)}
            text="Minus"
          />
          <Button 
            handleClick={this.asetaArvoon(0)}
            text="Zero"
          />
        </div>
      </div>
    )
  }
}

const Display = ({counter}) => <div>{counter}</div>

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const counter = {
  value: 1
}

ReactDOM.render(
  <App counter={counter} />,
  document.getElementById('root')
)