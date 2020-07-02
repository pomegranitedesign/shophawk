import React from 'react'
import { MenuOutlined, WalletTwoTone } from '@ant-design/icons'
import { Row, Col } from 'antd'
import SideNavigation from '../SideNavigation/SideNavigation'
import './Header.css'

const Header = () => {
	return (
		<header className="header">
			<Row align="middle">
				<Col span={12}>
					<MenuOutlined
						style={{
							fontSize: 32,
							textAlign: 'left',
							cursor: 'pointer'
						}}
					/>
				</Col>
				<Col
					span={12}
					style={{ textAlign: 'right', cursor: 'pointer' }}
				>
					<WalletTwoTone style={{ fontSize: 32 }} />
				</Col>
			</Row>

			<SideNavigation />
		</header>
	)
}

export default Header
