import React, { useEffect, useState } from "react";
import { Text, View, Image, FlatList, StyleSheet } from "react-native";
import yelp from "../api/yelp";

function Results({ route }) {
    const { id } = route.params;
    const [result, setResult] = useState(null)

    console.log(result)
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }
    useEffect(() => {
        getResult(id)
    }, []);

    if (!result) return null;

    return <View>
        <Text>{result.name}</Text>
        <FlatList 
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => <Image style={styles.photo} source={{uri: item}}/>}/>
    </View>;
}

const styles = StyleSheet.create({
    photo: {
        width: 300,
        height: 200
    }
})

export default Results;