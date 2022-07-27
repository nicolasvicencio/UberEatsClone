import { StyleSheet } from "react-native"

export default StyleSheet.create({
	page: {
		flex: 1,
	},
	image: {
		width: '100%',
		aspectRatio: 5 / 3,
	},
	iconContainer: {
		backgroundColor: 'white',
		padding: 10,
		position: 'absolute',
		top: 40,
		left: 10,
		borderRadius: 50

	},
	title: {
		fontSize: 36,
		fontWeight: '600',
		marginVertical: 10,
	},
	subtitle: {
		color: '#525252',
		fontSize: 15,
	},
	container: {
		margin: 10
	},
	menuTitle: {
		marginVertical: 15,
		fontSize: 18,
		letterSpacing: 0.7

	}
})