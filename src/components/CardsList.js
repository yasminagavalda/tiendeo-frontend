import React, {Component} from 'react'
import Card from './Card'
import EditCard from './EditCard'

class CardsList extends Component  {

    constructor(props) {
        super(props)
        
        this.state = {
            editCard: false,
            cards: props.cards,
            cardToEdit: {}
        }
    }

    openModalEditCard = (card) => {
        this.setState({editCard: true, cardToEdit: card})
    }

    closeModalEditCard = () => {
        this.setState({editCard: false, cardToEdit: {}})
    }

    editCard = (card) => {
        const id = card.id
        const cardEdited = {
            id: id,
            title: card.title,
            description: card.description,
            image: card.image
        }
        let cards = this.state.cards
        for (let i=0; i<cards.length; i++) {
            if (cards[i].id===card.id) {
                cards[i] = cardEdited
            }
        }
        this.setState({cards: cards, editCard: false})
    }

    render() {

        const Cards = this.props.cards.map(card =>
            <Card key={card.id} card={card} deleteCard={this.props.deleteCard} editCard={this.openModalEditCard}/>
        )

        return (
      
            <div className="cards-list">
              {Cards}
              <EditCard show={this.state.editCard} saveCard={this.editCard} card={this.state.cardToEdit} closeModal={this.closeModalEditCard} />
            </div>
            
        )
    }
  
}

export default CardsList