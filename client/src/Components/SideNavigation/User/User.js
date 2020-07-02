import React from 'react'
import { SmileOutlined } from '@ant-design/icons'
import './User.css'

const User = (props) => {
	return (
		<div className="userContainer">
			<div className="userImage">
				<SmileOutlined style={{ fontSize: 90 }} />
			</div>
			<h1 className="userName">Username</h1>
		</div>
	)
}

export default User
