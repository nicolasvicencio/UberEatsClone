import { View, Text, FlatList } from 'react-native'
import React from 'react'

import styles from './styles'
import restaurants from '../../../assets/data/restaurants.json'
import OrderDetailsHeader from './OrderDetailsHeader'
import BasketDishItem from '../../components/BasketDishItem'


export default function OrderDetails() {
	return (
		<View>
			<FlatList
				ListHeaderComponent={OrderDetailsHeader}
				data={restaurants[0].dishes}
				renderItem={({ item }) => <BasketDishItem basketDish={item} />}
			/>
		</View>
	)
}