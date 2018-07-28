import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            huono: 0,
            neutraali: 0,
            hyva: 0
        }
    }

    kasvataYhdella(tyyppi) {
        if (tyyppi === "hyvä") {
            
            return () => this.setState({hyva: this.state.hyva + 1})
        }

        if (tyyppi === "neutraali") {
            
            return () => this.setState({neutraali: this.state.neutraali + 1})
        }

        if (tyyppi === "huono") {
            
            return () => this.setState({huono: this.state.huono + 1})
        }
    }

    render() {
        return (
            <div>
                <h3>Anna palautetta</h3>

                <Button
                    handleClick={this.kasvataYhdella("hyvä")}
                    text="hyvä"
                />
                <Button
                    handleClick={this.kasvataYhdella("neutraali")}
                    text="neutraali"
                />
                <Button
                    handleClick={this.kasvataYhdella("huono")}
                    text="huono"
                />

                <h3>Statistiikka</h3>

                <Display
                    hyva={this.state.hyva}
                    neutraali={this.state.neutraali}
                    huono={this.state.huono}
                />

            </div>
        )
    }
}

const Display = (props) => {
    return (
        <div>
            <p>hyvä {props.hyva}<br/>
            neutraali {props.neutraali}<br/> 
            huono {props.huono}</p> 
        </div>
    )
}

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

ReactDOM.render(
    <App/>,
    document.getElementById('root')
  )
