import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      pisteet: {
          0: 0,
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0
      },
      suosituin: 0,
      suosituinlkm: 0
    }
  }


  satunnainen() {
        
            let uusiLuku = Math.floor(Math.random() * 6)
            let kopio = {...this.state.pisteet}
            kopio[uusiLuku] += 1
            return () => this.setState({selected: uusiLuku})
        
  }

  aanesta(indeksi) {
    let kopio = {...this.state.pisteet}
    kopio[indeksi] += 1
    let suosituin = this.state.suosituin
    let suosituinlkm = this.state.suosituinlkm
    for (let i = 0; i <= 5; i++) {
        if (kopio[i] > suosituinlkm) {
            //uusinta ääntä ei ole vielä rekisteröity,
            //joten lisätään se alla.
            suosituinlkm = this.state.pisteet[i]+1

            suosituin = i
        }
    }
    return () => this.setState({pisteet: kopio,
                                suosituin: suosituin,
                                suosituinlkm: suosituinlkm})
  }

  render() {
    return (
      <div align="center">
        {this.props.anecdotes[this.state.selected]} <br/>
        has {this.state.pisteet[this.state.selected]} votes <br/>
        
        <button onClick={this.satunnainen()}>
            Next anectode
        </button>
        
        <button onClick={this.aanesta(this.state.selected)}>
            Vote
        </button> <br/>

        <h3> Anectode with most votes: </h3> <br/>
        {this.props.anecdotes[this.state.suosituin]} <br/>
        has {this.state.suosituinlkm} votes 
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)