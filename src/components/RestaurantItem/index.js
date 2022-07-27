import { View, Image, Text, StyleSheet } from "react-native"

const RestaurantItem = ({ restaurants }) => {
  return (
    <View style={styles.restaurantContainer}>
      <Image
        style={styles.image}
        source={{ uri: restaurants.image }}>
      </Image>
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{restaurants.name}</Text>
          <Text style={styles.subtitle}>${restaurants.deliveryFee} &#8226; {restaurants.minDeliveryTime} - {restaurants.maxDeliveryTime} minutes</Text>
        </View>
        <View style={styles.rating}>
          <Text >{restaurants.rating}</Text>
        </View>
      </View>
    </View>
  )
}

export default RestaurantItem

const styles = StyleSheet.create({
  restaurantContainer: {
    width: '100%',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 5 / 3,
    marginBottom: 5
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'

  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 5

  },
  subtitle: {
    color: 'grey'
  },
  rating: {
    backgroundColor: 'lightgray',
    margin: 'auto',
    padding: 5,
    minWidth: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
