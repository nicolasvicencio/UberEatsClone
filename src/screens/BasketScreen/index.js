import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import restaurants from '../../../assets/data/restaurants.json'
import BasketDishItem from '../../components/BasketDishItem';

const restaurant = restaurants[0]


export default function BasketScreen() {
	const [counter, setCounter] = useState(1)

	const onMinus = () => {
		if (counter > 1) setCounter(counter - 1)
	}
	const onPlus = () => setCounter(counter + 1)

	const getTotal = () => {
		return
	}

	return (
		<View style={styles.page}>
			<Text style={styles.title}>{restaurant.name}</Text>
			<Text style={styles.yourItems}>Your items</Text>

			<FlatList
			data={restaurant.dishes}
			renderItem={({item}) => <BasketDishItem basketDish={item}/>}
			/>
			<View style={styles.separator} />

			<View style={styles.button}>
				<Text style={styles.buttonText}>Create order</Text>
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
		fontSize: 24,
		fontWeight: '600',
		marginVertical: 10,
	},
	yourItems: {
		fontWeight: 'bold',
		marginTop: 20,
		fontSize: 19
	},
	separator: {
		height: 1,
		backgroundColor: 'lightgray',
		marginVertical: 10,
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
	},

})