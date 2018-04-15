import React from 'react';
import EditCard from './EditCard'

const Card = ({card, deleteCard, editCard}) => {

	let imageTmp = 'https://www.tiendeo.com/info/es/prensa/wp-content/uploads/2017/04/logo-tiendeo-vector-02.png'
	const imgStyle = {
		backgroundImage: "url(" + (card.image!=='' ? card.image : imageTmp)  + ")"
	}

	const deleteActualCard = () => {
        return deleteCard(card.id)
	}
	
	const editActualCard = () => {
        return editCard(card)
    }

	return (
		<div className="card">
			<div className="image-title-container" style={imgStyle}>
				<div className="container">
					<h3 className="title">{card.title}</h3>
				</div>
			</div>
			
			<div className="container-card">
				<div className="btn-container">
					<button className="btn-card" onClick={editActualCard}><i className="far fa-edit"></i></button>
					<button className="btn-card" onClick={deleteActualCard}><i className="far fa-trash-alt"></i></button>
				</div>
				{card.description}				
			</div>
		</div>
	)
}

export default Card