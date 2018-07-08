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
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14

  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto osa1 = {osa1} tehtava1 = {tehtavia1} 
      osa2 = {osa2} tehtava2 ={tehtavia2}
      osa3 = {osa3} tehtava3 = {tehtavia3} />
      <Yhteensa yhteensa={tehtavia1+tehtavia2+tehtavia3} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
