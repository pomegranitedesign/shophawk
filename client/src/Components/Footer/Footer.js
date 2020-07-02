import React from 'react'
import { NavLink } from 'react-router-dom'
import {
	ShoppingCartOutlined,
	HistoryOutlined,
	MoneyCollectOutlined,
	HomeOutlined
} from '@ant-design/icons'
import './Footer.css'

const Footer = () => {
	return (
		<footer className="footer">
			<ul>
				<li>
					<NavLink activeClassName="footerLinkActive" to="/">
						<HomeOutlined
							style={{ display: 'block', fontSize: 24 }}
						/>
						Home
					</NavLink>
				</li>

				<li>
					<NavLink activeClassName="footerLinkActive" to="/cart">
						<ShoppingCartOutlined
							style={{ display: 'block', fontSize: 24 }}
						/>
						Cart
					</NavLink>
				</li>

				<li>
					<NavLink to="/history">
						<HistoryOutlined
							style={{ display: 'block', fontSize: 24 }}
						/>
						History
					</NavLink>
				</li>

				<li>
					<NavLink to="/budget">
						<MoneyCollectOutlined
							style={{ display: 'block', fontSize: 24 }}
						/>
						Budget
					</NavLink>
				</li>
			</ul>
		</footer>
	)
}

export default Footer
