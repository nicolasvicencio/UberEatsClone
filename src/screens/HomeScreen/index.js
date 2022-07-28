import { FlatList, StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'

import restaurants from '../../../assets/data/restaurants.json'
import RestaurantItem from '../../components/RestaurantItem'

export default function HomeScreen() {
	return (
		<TouchableOpacity styles={styles.page}>

			<FlatList
				data={restaurants}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => <RestaurantItem restaurants={item} />}
			/>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	page: {
		  padding: 10,
    paddingVertical: 35
	}
})