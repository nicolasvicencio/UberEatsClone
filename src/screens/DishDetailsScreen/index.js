import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import restaurants from '../../../assets/data/restaurants.json'

const dish = restaurants[0].dishes[0]

export default function DishDetailsScreen() {
	const [counter, setCounter] = useState(1)

	const onMinus = () => {
		if(counter > 1)setCounter(counter -1)
	}
	const onPlus = () => setCounter(counter + 1)

	const getTotal = () => {
		return (counter * dish.price).toFixed(2)
	}

	return (
		<View style={styles.page}>
			<Text style={styles.title}>{dish.name}</Text>
			<Text style={styles.description}>{dish.description}</Text>
			<View style={styles.separator} />
			<View style={styles.row}>
				<AntDesign
					name="minuscircleo"
					size={60}
					color="black"
					onPress={onMinus}
				/>
				<Text style={styles.cuantity}>{counter}</Text>
				<AntDesign
					name="pluscircleo"
					size={60}
					color="black"
					onPress={onPlus} />
			</View>

			<View style={styles.button}>
				<Text style={styles.buttonText}>Add {counter} to basket &#8226; ${getTotal()}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	page: {
		flex: 1,
		width: '100%',
		paddingVertical: 35,
		padding: 10
	},
	title: {
		fontSize: 30,
		fontWeight: '600',
		marginVertical: 10,
	},
	description: {
		color: 'gray'
	},
	separator: {
		height: 1,
		backgroundColor: 'lightgray',
		marginVertical: 10,
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 50
	},
	cuantity: {
		fontSize: 25,
		marginHorizontal: 20
	},
	button: {
		backgroundColor: 'black',
		marginTop: 'auto',
		padding: 20,
		alignItems: 'center'
	},
	buttonText: {
		color: 'white',
		fontWeight: '600',
		fontSize: 18
	}
})