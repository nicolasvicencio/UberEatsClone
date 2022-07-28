import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'

export default function OrderListItem({ order }) {
	return (
		<View style={styles.row}>
			<Image source={{ uri: order.Restaurant.image }} style={styles.image} />
			<View>
				<Text style={styles.title}>{order.Restaurant.name}</Text>
				<Text style={styles.subTitle}>3 items &#8226; $38.45</Text>
				<Text style={styles.subTitle}>2 days ago &#8226; {order.status}</Text>
			</View>
		</View>
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