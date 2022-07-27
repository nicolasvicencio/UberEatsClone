import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';
import restaurants from '../../../assets/data/restaurants.json'
import DishListItem from '../../components/DishListItem';
const restaurant = restaurants[0]

export default function RestaurantHeader({ restaurant }) {
	return (
		<View style={styles.page}>
			<Image style={styles.image} source={{ uri: restaurant.image }} />
			<View style={styles.container}>
				<Text style={styles.title}>{restaurant.name}</Text>
				<Text style={styles.subtitle}>${restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime} - {restaurant.maxDeliveryTime} minutes</Text>
				<Text style={styles.menuTitle}>Menu</Text>
			</View>
		</View>
	)
}

