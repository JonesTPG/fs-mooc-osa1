import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
  return (
    <div>
      <h1> {props.kurssi}</h1>
    </div>
  )

}


const Sisalto = (props) => {
  return (
    <div>
      <Osa nimi={props.osa1} määrä={props.tehtava1} />
      <Osa nimi={props.osa2} määrä={props.tehtava2} />
      <Osa nimi={props.osa3} määrä={props.tehtava3} />
    </div>
  )

}

const Yhteensa = (props) => {
  return (
    <div>
      <p>yhteensä {props.yhteensa} tehtävää </p>
    </div>
  )

}

const Osa = (props) => {
  return (
    <div>
      <p>{props.nimi} {props.määrä} </p>
    </div>
  )

}


const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osat = [
    {
      nimi: 'Reactin perusteet',
      tehtavia: 10
    },
    {
      nimi: 'Tiedonvälitys propseilla',
      tehtavia: 7
    },
    {
      nimi: 'Komponenttien tila',
      tehtavia: 14
    }
  ]

  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto osa1={osat[0].nimi} tehtava1={osat[0].tehtavia}
        osa2={osat[1].nimi} tehtava2={osat[1].tehtavia}
        osa3={osat[2].nimi} tehtava3={osat[2].tehtavia} />
      <Yhteensa yhteensa={osat[0].tehtavia + osat[1].tehtavia + osat[2].tehtavia} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
