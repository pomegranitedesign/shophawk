import React from 'react'
import moment from 'moment'
import './Card.css'

// Helpers
const hideCard = (number = '') => '****' + number.split(' ')[3]

const Card = ({
	transactionDate,
	cardType,
	cardNumber,
	orderTitle,
	totalCost
}) => {
	return (
		<div className="cardWrapper">
			<h5>{moment(transactionDate).format('MMM DD, YYYY')}</h5>
			<h5>
				{cardType} {hideCard(cardNumber)}
			</h5>
			<h1>{orderTitle}</h1>
			<h3>${totalCost}</h3>
		</div>
	)
}

export default Card
