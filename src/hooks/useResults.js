import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [err, setErr] = useState("");
        
    const handleSubmit = async (searchTerm) => {
        try{
            const response = await yelp.get(`/search`, {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: "millbrae"
                }
            });
            setResults(response.data.businesses)
        } catch (err) {
            console.log(err);
            setErr("Something went wrong...");
        }
        
    };
    useEffect(() => {
        handleSubmit("")
    }, []);
    return [handleSubmit, results, err];
}