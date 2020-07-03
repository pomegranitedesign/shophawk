const Sequelize = require("sequelize");

const sequelize = new Sequelize('ec2-34-193-232-231.compute-1.amazonaws.com', 'lbjcbwcyovcyxh', '398843137a10e46e6257ac61046aa8db6d5423b6acc8630769721dc2df1f65ef', {
	host: 'ec2-34-193-232-231.compute-1.amazonaws.com',
	dialect: 'postgres',
	port: '5432',
	dialectOptions: {
		ssl: true
	}
});

// TODO: implement CHECK constraints on the Budget, and Transactions tables
const Customers = sequelize.define('Customers', {
	customer_id: {
		primaryKey: true,
		type: sequelize.INTEGER
	},
	username: sequelize.STRING,
	email: {
		unique: true,
		type: sequelize.STRING
	},
	password: sequelize.STRING,
	balance: sequelize.DOUBLE(6, 2)
});

const Budget = sequelize.define('Budget', {
	customer_id: {
		allowNull: false,
		type: sequelize.INTEGER
	},
	amount: sequelize.DOUBLE(6, 2),
	reset_interval: sequelize.STRING(1), // not sure how to do char
	category: sequelize.STRING
});

Budget.hasMany(Customers, {foreignKey: 'customer_id'});

const Company = sequelize.define('Company', {
	company_id: {
		primaryKey: true,
		type: sequelize.INTEGER
	},
	name: sequelize.STRING
});

const Item = sequelize.define('Item', {
	item_id: {
		primaryKey: true,
		type: sequelize.INTEGER
	},
	company_id: sequelize.INTEGER,
	desc: sequelize.STRING,
	price: sequelize.DOUBLE(6, 2)
});

Item.hasMany(Customers, {foreignKey: 'company_id'});

const Orders = sequelize.define('Orders', {
	order_id: {
		primaryKey: true,
		type: sequelize.INTEGER
	},
	list_order_id: sequelize.INTEGER,
	date_issued: sequelize.DATE
});

const Order_Item = sequelize.define('Order_Item', {
	order_id: sequelize.INTEGER,
	item_id: sequelize.INTEGER,
	quoted_price: sequelize.DOUBLE(6, 2)
});

Order_Item.hasMany(Orders, {foreignKey: 'order_id'});
Order_Item.hasMany(Item, {foreignKey: 'item_id'});

const Cart = sequelize.define('Cart', {
	list_order_id: {
		primaryKey: true,
		type: sequelize.INTEGER
	},
	customer_id: sequelize.INTEGER
});

Cart.hasOne(Customers, {foreignKey: 'customer_id'});

const Transactions = sequelize.define('Transactions', {
	transaction_id: {
		primaryKey: true,
		type: sequelize.INTEGER
	},
	customer_id: sequelize.INTEGER,
	pay_method: sequelize.VARCHAR(1),
	purchase_date: sequelize.DATE
});

Transactions.hasMany(Customers, {foreignKey: 'customer_id'});

const Past_Orders = sequelize.define('Past_Orders', {
	list_order_id: {
		primaryKey: true,
		type: sequelize.INTEGER
	},
	transaction_id: sequelize.INTEGER
});

const Cards = sequelize.define('Cards', {
	card_id: {
		primaryKey: true,
		type: sequelize.INTEGER
	},
	card_num: sequelize.STRING,
	// YY/MM
	expiry: sequelize.DATEONLY,
	card_holder: sequelize.STRING
});

const Payment_Methods = sequelize.define('Payment_Methods', {
	payment_id: {
		primaryKey: true,
		type: sequelize.INTEGER
	},
	customer_id: sequelize.INTEGER,
	card_id: sequelize.INTEGER
});

Payment_Methods.hasMany(Customers, {foreignKey: 'customer_id'});
Payment_Methods.hasMany(Cards, {foreignKey: 'card_id'});

module.exports.initialize = function() {
	return new Promise((resolve, reject) => {
		sequelize.authenticate().then(() => {
			sequelize.sync().then(() => {
							resolve("success");
			}).catch(err => {
							reject("unable to sync the database");
			});
		}).catch(err => {
			reject("unable to authenticate with the database")
		});
	});
};

module.exports.getCustomerById = function(id) {
	return new Promise((resolve, reject) => {
		Customers.findAll({
			where: {
				customer_id: id
			}
		}).then(custs => {
			resolve(custs[0]);
		}).catch(err => {
			reject("no results returned");
		});
	});
};

module.exports.checkUser = function(CustomerData) {
	return new Promise((resolve, reject) => {
		Customers.find({
			email: CustomerData.email
		}).exec().then(users => {
			if(users.length === 0) {
				reject("Unable to find user: " + CustomerData.userName);
			} else if(CustomerData.password != users.password) {
				reject("Incorrect Password for user: " + userData.userName);
			} else {
				resolve(users[0]);
			}
		}).catch(err => {
						reject("There was an error when comparing passwords");
		});
	});
}

module.exports.getCustomerCards = function(id) {
	return new Promise((resolve, reject) => {
		Payment_Methods.findAll({
			attributes: ['card_id'],
			where: {
				customer_id: id
			}
		}).then(cardlist => {
			// TODO: query Cards table for card info
		}).catch(err => {
			reject(err);
		});
	});
}

module.exports.getBudgets = function(id) {
	return new Promise((resolve, reject) => {
		Budget.findAll({
			where: {
				customer_id: id
			}
		}).then(budgetlist => {
			resolve(budgetlist);
		}).catch(err => {
			reject(err);
		});
	});
}

module.exports.getOrdersInCart = function(id) {
	return new Promise((resolve, reject) => {
		Cart.findOne({
			where: {
				customer_id: id
			}
		}).then(data => {
			Orders.findAll({
				where: {
					list_order_id: data.list_order_id
				}
			}).then(data => {
				resolve(data);
			}).catch(err => {
				reject(err);
			});
		}).catch(err => {
			reject(err);
		});
	});
}

module.exports.getItemInfo = function(id) {
	return new Promise((resolve, reject) => {
		Item.findOne({
			where: {
				item_id: id
			}
		}).then(data => {
			resolve(data);
		}).catch(err => {
			reject(err);
		});
	});
}

module.exports.getItemsInOrder = function(id) {
	return new Promise((resolve, reject) => {
		Order_Item.findAll({
			where: {
				order_id: id
			}
		}).then(data => {
			const itemarr = [];
			for(const item in data) {
				getItemInfo(item.item_id).then(iteminfo => {
					itemarr.push(iteminfo);	
				}).catch(err => {
					resolve(err);
				});
			}
			resolve(itemarr);
		}).catch(err => {
			reject(err);
		});
	});
}

module.exports.getCompanyById = function(id) {
	return new Promise((resolve, reject) => {
		Company.findOne({
			where: {
				company_id: id
			}
		}).then(data => {
			resolve(data);
		}).catch(err => {
			reject(err);
		});
	});
}

module.exports.getTransactionByTransactionId = function(id) {
	return new Promise((resolve, reject) => {
		Transactions.findOne({
			where: {
				transaction_id: id
			}
		}).then(data => {
			resolve(data);
		}).catch(err => {
			reject(err);
		});
	});
}

module.exports.getTransactionsByCustomerId = function(id) {
	return new Promise((resolve, reject) => {
		Transactions.findAll({
			where: {
				customer_id: id
			}
		}).then(data => {
			resolve(data);
		}).catch(err => {
			reject(err);
		});
	});
}

module.exports.getFilteredTransactions = function(id) {
	return new Promise((resolve, reject) => {
		resolve();
		Transactions.findAll({
			where: {
				customer_id: id
				// TODO: AND purchase_date BETWEEN <specified date> AND sysdate
			}
		}).then(data => {
			resolve(data);
		}).catch(err => {
			reject(err);
		});
	});
}

module.exports.getOrdersInTranaction = function(id) {
	return new Promise((resolve, reject) => {
		Past_Orders.findOne({
			where: {
				transaction_id: id
			}
		}).then(data => {
			Orders.findAll({
				where: {
					list_order_id: data.list_order_id
				}
			}).then(data => {
				resolve(data);
			}).catch(err => {
				reject(err);
			});
		}).catch(err => {
			reject(err);
		});
	});
}
