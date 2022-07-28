import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import styles from './styles'
import orders from '../../../assets/data/orders.json'

const order = orders[0]
export default function OrderDetailsHeader() {
	return (
		<View>
			<View style={styles.page}>
				<Image style={styles.image} source={{ uri: order.Restaurant.image }} />
				<View style={styles.container}>
					<Text style={styles.title}>{order.Restaurant.name}</Text>
					<Text style={styles.subtitle}>{order.status} &#8226; 2 days ago</Text>

					<Text style={styles.menuTitle}>Your orders</Text>
				</View>
			</View>
		</View>
	)
}

