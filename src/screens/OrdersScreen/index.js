import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import orders from '../../../assets/data/orders.json'
import OrderListItem from '../../components/OrderListItem'

export default function OrdersScreen() {
	return (
		<View style={styles.page}>
			<FlatList 
				data={orders}
				renderItem={({item}) => <OrderListItem order={item}/>}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	page: {
		flex: 1,
		width: '100%',
		paddingTop: 50
	}
})