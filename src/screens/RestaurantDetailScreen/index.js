import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import restaurants from '../../../assets/data/restaurants.json'
import styles from './styles'
import { AntDesign } from '@expo/vector-icons';
import Header from './Header';
import DishListItem from '../../components/DishListItem';
import { useRoute, useNavigation } from '@react-navigation/native';

const restaurant = restaurants[0]

export default function RestaurantDetailsScreen() {
	const route = useRoute()
	const navigation = useNavigation()
	const id = route.params?.id
	console.log(id)


	return (
		<View style={styles.page}>
			<FlatList
				ListHeaderComponent={() => <Header restaurant={restaurant} />}
				data={restaurant.dishes}
				keyExtractor={(item) => item.name}
				renderItem={({ item }) => <DishListItem dishes={item} />}
			/>
			<AntDesign name="arrowleft" size={24} color="black" style={styles.iconContainer} onPress={() => navigation.goBack()} />
		</View>
	)
}

