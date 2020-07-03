import React, { useState, Fragment } from 'react'
import './UserInfo.css'

const UserInfo = ({ username, email }) => {
	const [ isEditing, setEditing ] = useState(false)
	const [ currentUsername, setCurrentUsername ] = useState(username)
	const [ currentEmail, setCurrentEmail ] = useState(email)
	const handleSave = () => {
		setEditing(false)
	}
	const handleCancel = () => {
		setCurrentUsername(username)
		setCurrentEmail(email)
		setEditing(false)
	}
	return (
		<div className="userInfoContainer">
			<div className="usernameContainer">
				<label>Username</label>
				{isEditing ? (
					<input
						className="inputField"
						type="text"
						value={currentUsername}
						onChange={(e) => setCurrentUsername(e.target.value)}
					/>
				) : (
					<h3>{currentUsername}</h3>
				)}
			</div>

			<div className="emailContainer">
				<label>Email</label>
				{isEditing ? (
					<input
						className="inputField"
						type="text"
						value={currentEmail}
						onChange={(e) => setCurrentEmail(e.target.value)}
					/>
				) : (
					<h3>{currentEmail}</h3>
				)}
			</div>

			{isEditing ? (
				<Fragment>
					<button className="saveButton" onClick={handleSave}>
						Save
					</button>
					<button className="cancelButton" onClick={handleCancel}>
						Cancel
					</button>
				</Fragment>
			) : (
				<button className="editButton" onClick={() => setEditing(true)}>
					Edit
				</button>
			)}
		</div>
	)
}

export default UserInfo
