import React, { useState } from 'react'
import Title from '../Components/Title/Title'
import Cards from '../Components/Cards/Cards'
import DateFilter from '../Components/DateFilter/DateFilter'

const History = (props) => {
	const [ currentFilter, setCurrentFilter ] = useState('all')
	const handleFilter = (filter = '') => setCurrentFilter(filter)
	return (
		<div>
			<Title text="Transactions" />
			<DateFilter handleFilter={handleFilter} />
			<Cards currentFilter={currentFilter} />
		</div>
	)
}

export default History
