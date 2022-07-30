import { StyleSheet, Text, View , Image, Pressable} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function OrderListItem({ order }) {
	const navigation = useNavigation()
	return (
		<Pressable onPress={() => navigation.navigate('Order', {id: order.id})} style={styles.row}>
			<Image source={{ uri: order.Restaurant.image }} style={styles.image} />
			<View>
				<Text style={styles.title}>{order.Restaurant.name}</Text>
				<Text style={styles.subTitle}>3 items &#8226; $38.45</Text>
				<Text style={styles.subTitle}>2 days ago &#8226; {order.status}</Text>
			</View>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		margin: 10,
		alignItems: 'center'
	},
	image: {
		width: 75,
		height: 75,
		marginRight: 5
	},
	title: {
		fontWeight: '600',
		fontSize: 16,
	},
	subTitle: {
		marginVertical: 4,
		color: 'gray'
	}
})