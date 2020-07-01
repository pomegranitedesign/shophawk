import React from 'react'
import {
	ShoppingCartOutlined,
	HistoryOutlined,
	MoneyCollectOutlined
} from '@ant-design/icons'
import './Footer.css'

const Footer = () => {
	return (
		<footer className="footer">
			<ul>
				<li>
					<ShoppingCartOutlined
						style={{ display: 'block', fontSize: 24 }}
					/>
					Cart
				</li>

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
