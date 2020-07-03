import React from 'react'
import './ProfileImage.css'

const ProfileImage = ({ link }) => {
	return (
		<div className="profileImageContainer">
			<img src={link} alt="ShopHawk Profile Image" />
		</div>
	)
}

export default ProfileImage
