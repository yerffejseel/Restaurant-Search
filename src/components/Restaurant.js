import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

function Restaurant(props) {
    return<View style={Styles.restaurantContainer}>
        <Image 
            style={Styles.image}
            source={{uri: props.business.image_url}}/>
        <Text>{props.business.name}</Text>
        <Text>{props.business.rating} Stars, {props.business.review_count} Reviews</Text>
    </View>;
}

const Styles = StyleSheet.create({
    image: {
        width: 220,
        height: 140,
        borderRadius: 10
    },
    restaurantContainer: {
        marginHorizontal: 20,
        marginVertical: 15,
        borderRadius: 10,
        backgroundColor: "#f1f1f1f1",
        padding: 15
    }
})

export default Restaurant;