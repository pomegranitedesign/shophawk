import React from 'react'
import logo from '../Assets/Images/logo.svg'

class About extends React.Component {

		render() {

			const titleStyle = {
				position: "absolute",
				width: "87px",
				height: "38px",
				left: "40px",
				top: "127px",

				fontFamily: "Roboto",
				fontStyle: "normal",
				fontWeight: "900",
				fontSize: "32px",
				lineHeight: "37px",
				/* identical to box height */
				color: "#011627"
			};

			const imageStyle = {
				position: "absolute",
				width: "135px",
				height: "135px",
				left: "99px",
				top: "210px",
				background: "url(image)"
			};
		
			const versionStyle = {
				position: "absolute",
				width: "87px",
				height: "19px",
				left: "247px",
				top: "137px",
				fontFamily: "Roboto",
				fontStyle: "normal",
				fontWeight: "normal",
				fontSize: "16px",
				lineHeight: "19px",
				/* identical to box height */
				color: "#000000"
			};

			const contentStyle = {
				position: "absolute",
				width: "293px",
				height: "176px",
				left: "41px",
				top: "453px",
				
				fontFamily: "Roboto",
				fontStyle: "normal",
				fontWeight: "normal",
				fontSize: "16px",
				lineHeight: "20px",
				/* or 125% */
				color: "#000000"
			}

			/* Author */
			const authorStyle = {
				position: "absolute",
				width: "99px",
				height: "38px",
				left: "40px",
				top: "725px",
				fontFamily: "Roboto",
				fontStyle: "normal",
				fontWeight: "900",
				fontSize: "32px",
				lineHeight: "37px",
				/* identical to box height */
				color: "#011627"
			}

			const contactInfoStyle = {
				position: "absolute",
				width: "98px",
				height: "20px",
				left: "40px",
				top: "780px",
				fontFamily: "Roboto",
				fontStyle: "normal",
				fontWeight: "300",
				fontSize: "16px",
				lineHeight: "20px",
				/* identical to box height, or 125% */
				color: "#000000"
			}

			return (
				<div>
					<h1 style={titleStyle} >About</h1>

					<h2>
						<img
							src={logo}
							alt="ShopHawk Logo"
							style={{imageStyle}}
						/>
					</h2>

					<h3 style={versionStyle}></h3>

					<h3 style={contentStyle}> 
						ShopHawk is a general purpose contactless payment method specifically tailored for smaller businesses. ShopHawk offers many features such as being all-in-one digital receipt keeper allowing customers as well as businesses keep track of their finances (budgeting and accounting) with ease.
					</h3>

					<h3 style={authorStyle}> 
						Author
					</h3>

					<h3 style={contactInfoStyle}> 
						JauntyPython 
						jauntypython@codestack.com 
						+1 (647) 345-67-76 
					</h3>
					

			
					
				</div>
			)
	}
}

export default About
