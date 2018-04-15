import React, { Component } from 'react'
import CardsList from './CardsList'
import NewCard from './NewCard'

class App extends Component {

    constructor(props) {
		super(props)

		this.state = {
            modalOpen: false,
            cards: []
		}
    }
    
    openModalNewCard = () => {
        this.setState({modalOpen: true})
    }

    closeModalNewCard = () => {
        this.setState({modalOpen: false})
    }

    addCard = (card) => {
        let newId = 1
        if (this.state.cards.length>0) {
            newId = this.state.cards[this.state.cards.length -1].id + 1
        }
        let newCard = {
            id: newId,
            title: card.title,
            description: card.description,
            image: card.image
        }
        let cards = this.state.cards
        cards.push(newCard)
        this.setState({cards: cards, modalOpen: false})
    }

    deleteCard = (id) => {
        let newCards = this.state.cards
        for (let i=0; i<newCards.length; i++) {
            if (newCards[i].id===id) {
                newCards.splice(i, 1)
            }
        }
        this.setState({cards: newCards})
    }

	render() {
        return (
            <div>
                <CardsList cards={this.state.cards} deleteCard={this.deleteCard} />
                <button className="btn-open-modal" onClick={this.openModalNewCard}>+</button>
                <NewCard show={this.state.modalOpen} addCard={this.addCard} closeModal={this.closeModalNewCard} />
            </div>
        )
    }
}

export default App