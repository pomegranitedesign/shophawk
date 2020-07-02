import React, { useState } from 'react'
import './NotificationsSwitch.css'

const NotificationsSwitch = (props) => {
	const [ isOn, setOn ] = useState(false)
	return (
		<div className="notificationsContainer">
			<div className="buttons">
				<button
					onClick={() => setOn(true)}
					style={{ backgroundColor: isOn ? '#2ec4b6' : '#f6f7f8' }}
				>
					On
				</button>
				<button
					onClick={() => setOn(false)}
					style={{ backgroundColor: !isOn ? '#2ec4b6' : '#f6f7f8' }}
				>
					Off
				</button>
			</div>
			<div>
				<label>Notifications</label>
			</div>
		</div>
	)
}

export default NotificationsSwitch
