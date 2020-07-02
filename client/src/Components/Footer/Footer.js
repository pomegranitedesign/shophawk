import React from 'react'
import { Link } from 'react-router-dom'
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
				<Link to="/">
					<li>
						<HomeOutlined
							style={{ display: 'block', fontSize: 24 }}
						/>
						Home
					</li>
				</Link>

				<Link to="/cart">
					<li>
						<ShoppingCartOutlined
							style={{ display: 'block', fontSize: 24 }}
						/>
						Cart
					</li>
				</Link>

				<li>
					<HistoryOutlined
						style={{ display: 'block', fontSize: 24 }}
					/>
					History
				</li>

				<li>
					<MoneyCollectOutlined
						style={{ display: 'block', fontSize: 24 }}
					/>
					Budget
				</li>
			</ul>
		</footer>
	)
}

export default Footer
