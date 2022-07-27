import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import restaurants from '../../../assets/data/restaurants.json'

import styles from './styles'
import { AntDesign } from '@expo/vector-icons';

import Header from './Header';
import DishListItem from '../../components/DishListItem';

const restaurant = restaurants[0]
export default function RestaurantDetailsScreen() {

	return (
		<View style={styles.page}>
			<FlatList
				ListHeaderComponent={() => <Header restaurant={restaurant}/>}
				data={restaurant.dishes}
				renderItem={({ item }) => <DishListItem dishes={item} />}
			/>
			<AntDesign name="arrowleft" size={24} color="black" style={styles.iconContainer}/>
		</View>
	)
}

