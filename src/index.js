import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            huono: 0,
            neutraali: 0,
            hyva: 0,
            lkm: 0,
            keskiarvo: 0,
            prosentti: 0
        }
    }
    //Koska setState-ei päivitä tilaa välittömästi, en keksinyt
    //parempaa tapaa muuttaa keskiarvo reaaliaikaisesti kuin tämä.
    //Tässä siis ennakoidaan muuttuva arvo riippuen siitä, mitä nappia
    //painettiin. Sama logiikka funktiossa laskeProsentti()
    laskeKeskiarvo(tyyppi) {
        if (tyyppi === "hyvä") {
            let keskiarvo;
            keskiarvo = this.state.hyva-this.state.huono+1
            keskiarvo = keskiarvo/(this.state.lkm+1)
            return keskiarvo;
        }

        else if (tyyppi === "neutraali") {
            let keskiarvo;
            keskiarvo = this.state.hyva-this.state.huono
            keskiarvo = keskiarvo/(this.state.lkm+1)
            return keskiarvo;
        }

        else if (tyyppi === "huono") {
            let keskiarvo;
            keskiarvo = this.state.hyva-this.state.huono-1
            keskiarvo = keskiarvo/(this.state.lkm+1)
            return keskiarvo;
        }
    
    }

    laskeProsentti(tyyppi) {
        if (tyyppi === "hyvä") {
            let prosentti;
            prosentti = (this.state.hyva+1)/(this.state.lkm+1)
            return prosentti*100;
        }

        else if (tyyppi === "neutraali") {
            let prosentti;
            prosentti = (this.state.hyva)/(this.state.lkm+1)
            return prosentti*100;
        }

        else if (tyyppi === "huono") {
            let prosentti;
            prosentti = (this.state.hyva)/(this.state.lkm+1)
            return prosentti*100;
        }
        
    }

    paivitaTila(tyyppi) {
        let keskiarvo;
        let prosentti;
        keskiarvo = this.laskeKeskiarvo(tyyppi)
        prosentti = this.laskeProsentti(tyyppi)
        if (tyyppi === "hyvä") {
            
            return () => { 
                this.setState({hyva: this.state.hyva + 1,
                                lkm: this.state.lkm +1,
                                keskiarvo: keskiarvo,
                                prosentti: prosentti})
 
            }
        }

        if (tyyppi === "neutraali") {
            
            return () => { 
                
                this.setState({neutraali: this.state.neutraali + 1,
                                lkm: this.state.lkm +1,
                                keskiarvo: keskiarvo,
                                prosentti: prosentti})
            }
        }

        if (tyyppi === "huono") {
            
            return () =>  { 
                this.setState({huono: this.state.huono + 1,
                                        lkm: this.state.lkm +1,
                                        keskiarvo: keskiarvo,
                                        prosentti: prosentti})
            }
        
        }
}

    render() {
        return (
            <div>
                <h3>Anna palautetta</h3>

                <Button
                    handleClick={this.paivitaTila("hyvä")}
                    text="hyvä"
                />
                <Button
                    handleClick={this.paivitaTila("neutraali")}
                    text="neutraali"
                />
                <Button
                    handleClick={this.paivitaTila("huono")}
                    text="huono"
                />

                

                <Statistics
                    hyva={this.state.hyva}
                    neutraali={this.state.neutraali}
                    huono={this.state.huono}
                    keskiarvo={this.state.keskiarvo}
                    prosentti={this.state.prosentti}
                    
                />

            </div>
        )
    }
}


const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Statistic = ({statistiikka, nimi}) => {
    return (
        
            <p>{nimi} {statistiikka}</p>
       
    )
}

const Statistics = (props) => {
    return (
        <div>
            <h3>Statistiikka</h3>
            <Statistic
                statistiikka={props.hyva}
                nimi="hyvä"
            />
            <Statistic
                statistiikka={props.neutraali}
                nimi="neutraali"
            />
            <Statistic
                statistiikka={props.huono}
                nimi="huono"
            />
            <Statistic
                statistiikka={props.keskiarvo}
                nimi="keskiarvo"
            />
            <Statistic
                statistiikka={props.prosentti}
                nimi="prosentti"
            />
        </div>
    )

}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
  )
