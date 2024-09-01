import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';


function SearchBar(props) {
    
    return <View style={Styles.searchContainer}>
        <Ionicons name="search-outline" color="#000000" size={20} style={Styles.searchIcon}/>
        <TextInput 
            placeholder="Search"
            value={props.term}
            onChangeText={(change) => props.setTerm(change)}
            style={Styles.inputSearch}
            autoCorrect={false}
            autoCapitalize="none"
            onSubmitEditing={() => props.handleSubmit(props.term)}/>
    </View>;
}

const Styles = StyleSheet.create({
    searchContainer:{
        alignSelf: "center",
        margin: 20,
        height: 40,
        width: "90%",
        flexDirection: "row",
        backgroundColor: "#f1f1f1",
        borderRadius: 20
    },
    searchIcon: {
        margin: 10
    },
    inputSearch: {
        flex: 1
    }
});

export default SearchBar;