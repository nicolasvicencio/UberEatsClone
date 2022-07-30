
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from '../screens/HomeScreen';
import RestaurantDetailsScreen from '../screens/RestaurantDetailScreen';
import DishDetailsScreen from '../screens/DishDetailsScreen';
import BasketScreen from '../screens/BasketScreen';
import OrdersScreen from '../screens/OrdersScreen';
import OrderDetails from '../screens/OrderDetails';
import { Foundation, FontAwesome, FontAwesome5 } from '@expo/vector-icons';






const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
	return (
		<Tab.Navigator barStyle={{ backgroundColor: 'white' }}>
			<Tab.Screen
				name="Home"
				component={HomeStackNavigator}
				options={{
					tabBarIcon: ({ color }) => <Foundation name="home" size={24} color={color} />
				}} />
			<Tab.Screen
				name='OrdersTab'
				component={OrderStackNavigator}
				options={{
					tabBarIcon: ({ color }) => <FontAwesome5 name="list-alt" size={24} color={color} />
				}}
			/>

			<Tab.Screen
				name='Profile'
				component={OrdersScreen}
				options={{
					tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} />
				}}
			/>
		</Tab.Navigator>
	)
}

const HomeStack = createNativeStackNavigator();
const HomeStackNavigator = () => {
	return (
		<HomeStack.Navigator >
			<HomeStack.Screen name="Restaurants" component={HomeScreen} options={{ headerTitleAlign: 'center' }} />
			<HomeStack.Screen name="Restaurant" component={RestaurantDetailsScreen} options={{ headerShown: false }} />
			<HomeStack.Screen name="Dish" component={DishDetailsScreen} options={{ headerTitleAlign: 'center' }} />
			<HomeStack.Screen name="Basket" component={BasketScreen} />
		</HomeStack.Navigator>
	)
}
const OrdersStack = createNativeStackNavigator();
const OrderStackNavigator = () => {
	return(
		<OrdersStack.Navigator>
			<OrdersStack.Screen name='Orders'component={OrdersScreen} options={{headerTitleAlign: 'center'}}/>
			<OrdersStack.Screen name='Order' component={OrderDetails} options={{headerTitleAlign: 'center'}}/>
		</OrdersStack.Navigator>
	)
}


const Stack = createNativeStackNavigator();
const RootNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }} >
			<Stack.Screen
				name="HomeTabs"
				component={HomeTabs}
				options={{
					headerTitleAlign: 'center'
				}}
			/>

		</Stack.Navigator>
	)
}

export default RootNavigator