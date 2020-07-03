import React from 'react'
import moment from 'moment'
import Card from '../Card/Card'

const data = [
	{
		transactionDate: '07-03-2020',
		cardType: 'VISA',
		cardNumber: '1234 4567 7890 1234',
		orderTitle: 'Testing Order',
		totalCost: 100
	},
	{
		transactionDate: '07-01-2020',
		cardType: 'VISA',
		cardNumber: '1234 4567 7890 1234',
		orderTitle: 'Testing Order',
		totalCost: 100
	},
	{
		transactionDate: '12-06-2020',
		cardType: 'VISA',
		cardNumber: '1234 4567 7890 1234',
		orderTitle: 'Restaurant Order',
		totalCost: 80
	},
	{
		transactionDate: '11-09-2017',
		cardType: 'VISA',
		cardNumber: '1234 4567 7890 4351',
		orderTitle: 'BestBuy Purchase',
		totalCost: 1243.34
	},
	{
		transactionDate: '09-17-2017',
		cardType: 'VISA',
		cardNumber: '1234 4567 7890 4351',
		orderTitle: 'Car Rental',
		totalCost: 45341536.34
	},
	{
		transactionDate: '04-05-2019',
		cardType: 'VISA',
		cardNumber: '1234 4567 7890 4351',
		orderTitle: 'Amazon Order',
		totalCost: 456.34
	},
	{
		transactionDate: '09-11-2017',
		cardType: 'VISA',
		cardNumber: '1234 4567 7890 4351',
		orderTitle: 'Amazon Order',
		totalCost: 456.34
	},
	{
		transactionDate: '04-11-2017',
		cardType: 'VISA',
		cardNumber: '1234 4567 7890 4351',
		orderTitle: 'Amazon Order',
		totalCost: 56
	},
	{
		transactionDate: '03-02-2017',
		cardType: 'VISA',
		cardNumber: '1234 4567 7890 4351',
		orderTitle: 'Cinema Purchase',
		totalCost: 45
	}
]

const Cards = ({ currentFilter }) => {
	const filteredData = () => {
		switch (currentFilter) {
			case 'week': {
				const today = moment()
				const start = today.startOf('week').get('day')
				const end = today.endOf('week').get('day')
				const currentYear = today.get('year')
				const currentMonth = today.get('month')

				return data.filter(
					(val) =>
						moment(val.transactionDate).get('month') ===
							currentMonth &&
						moment(val.transactionDate).get('year') ===
							currentYear &&
						moment(val.transactionDate).get('day') >= start &&
						moment(val.transactionDate).get('day') <= end
				)
			}

			case 'month':
				return data

			case 'year':
				return data

			default:
				return data
		}
	}
	return <div>{filteredData().map((val) => <Card {...val} />)}</div>
}

export default Cards
