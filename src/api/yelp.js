import axios from "axios";
import APIKey from "../../api";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: `Bearer ${APIKey}`
    }
})