import React from "react";
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Restaurant from "./Restaurant";
import { useNavigation } from "@react-navigation/native"


function ResultsList(props) {
    const navigation = useNavigation()
    if (!props.businesses.length) return null;
    return <View style={Styles.listContainer}>
        <Text style={Styles.title} >{props.price}</Text>
        <FlatList 
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={props.businesses}
            renderItem={({item}) => (
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("Results", { id: item.id })}>
                    <Restaurant price={props.price} business={item}/>
                </TouchableOpacity>
            )}/>
        <View style={Styles.divider} />
    </View>;
}

const Styles = StyleSheet.create({
    listContainer: {
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        marginHorizontal: 20,
    }, 
    divider: {
        height: 1,
        marginHorizontal: 20,
        backgroundColor:"black"
    }
})

export default ResultsList;