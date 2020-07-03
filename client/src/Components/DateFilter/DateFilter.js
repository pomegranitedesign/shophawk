import React from 'react'
import { Select } from 'antd'
import './DateFilter.css'

const { Option } = Select

const DateFilter = ({ handleFilter }) => {
	return (
		<div className="dateSelect">
			<Select
				onChange={(value) => handleFilter(value)}
				defaultValue="View Last"
				style={{ width: 400 }}
			>
				<Option value="all">View All</Option>
				<Option value="week">Week</Option>
				<Option value="month">Month</Option>
				<Option value="year">Year</Option>
			</Select>
		</div>
	)
}

export default DateFilter
