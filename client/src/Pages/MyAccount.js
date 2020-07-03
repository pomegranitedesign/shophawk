import React from 'react'
import Title from '../Components/Title/Title'
import ProfileImage from '../Components/ProfileImage/ProfileImage'
import userImage from '../Assets/Images/profile_image.png'
import UserInfo from '../Components/UserInfo/UserInfo'

const MyAcccount = () => {
	return (
		<div className="myAccountWrapper">
			<Title text="My Account" />
			<ProfileImage link={userImage} />
			<UserInfo username="iamalways20" email="iamalways20@youths.com" />
		</div>
	)
}

export default MyAcccount
