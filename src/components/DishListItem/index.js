import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

export default function DishListItem({ dishes }) {
	const navigation = useNavigation()

	return (
		<Pressable onPress={() => navigation.navigate('Dish', {id: dishes.id})} style={styles.container}>
			<View style={{flex: 1}}>
				<Text style={styles.name}>{dishes.name}</Text>
				<Text style={styles.description}>{dishes.description}</Text>
				<Text style={styles.price}>${dishes.price}</Text>
			</View>

				{dishes.image && <Image source={{uri: dishes.image}} style={styles.image}/>}
			
		</Pressable>
	)
}

const styles = StyleSheet.create({
	container: {
		margin: 10,
		marginHorizontal: 20,
		paddingVertical: 10,
		borderBottomColor: 'lightgray',
		borderBottomWidth: 1,
		flexDirection: 'row'
	},
	name: {
		fontWeight: '600',
		fontSize: 16,
		letterSpacing: 0.5
	},
	description: {
		color: 'gray',
		marginVertical: 5,
	},
	price: {
		fontSize: 16
	},
	image: {
		height: 75,
		aspectRatio: 1
	}
})