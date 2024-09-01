import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView, ActivityIndicator } from "react-native";
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

function SearchScreen() {
    const [term, setTerm] = useState("");
    const [handleSubmit, results, err] = useResults()

    if(!results.length) {
        return <View style={Styles.loading}>
            <ActivityIndicator size="large" color={"gray"}/>
        </View>
    }
    return <View style={Styles.rootContainer}>
        <SearchBar term={term} setTerm={setTerm} handleSubmit={handleSubmit}/>
        <ScrollView>
            <ResultsList 
                price="Cost Effective"
                businesses={results.filter((business) => {
                    return business.price == "$"
                })}/>
            <ResultsList 
                price="Bit Pricier"
                businesses={results.filter((business) => {
                    return business.price == "$$"
                })}/>
            <ResultsList 
                price="Big Spender"
                businesses={results.filter((business) => {
                    return business.price == "$$$"
                })}/>
        </ScrollView>
        {err.length > 0 && <Text>{err}</Text>}
    </View>;
}

const Styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: "white",
        flex: 1
    },
    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
  })
  

export default SearchScreen;