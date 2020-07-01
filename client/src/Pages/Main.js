import React from 'react'
import { Row, Col } from 'antd'
import logoWithText from '../Assets/Images/logo_with_name.svg'

const Main = () => {
	return (
		<img
			src={logoWithText}
			alt="ShopHawk Logo"
			style={{
				transform: 'translate(-50%, -50%)',
				position: 'absolute',
				top: '50%',
				left: '50%'
			}}
		/>
	)
}

export default Main
