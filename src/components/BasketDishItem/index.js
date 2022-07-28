import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function BasketDishItem({basketDish}) {
	return (
		<View style={styles.row}>
		<View style={styles.quantityContainer}>
			<Text>1</Text>
		</View>
		<Text style={styles.name}>{basketDish.name}</Text>
		<Text style={styles.price}>$ {basketDish.price}</Text>
	</View>
	)
}

const styles = StyleSheet.create({
	price: {
		marginLeft: 'auto',
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 15,
		marginHorizontal: 10 
	},
	quantityContainer: {
		backgroundColor: 'lightgrey',
		paddingHorizontal: 5,
		paddingVertical: 2,
		marginRight: 10,
		borderRadius: 3,
	},
	name: {
		fontWeight: '600'
	}
})