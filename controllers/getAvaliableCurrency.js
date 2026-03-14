import axios from 'axios';
import 'dotenv/config';

const apiKey = process.env.API_KEY;

const getAvaliableCurrency = async () => {
    try {
        const response_data = await axios.get(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`);
        const avaliable_currencies = Object.keys(response_data.data.conversion_rates);
        // console.log(avaliable_currencies);
        return avaliable_currencies;
    } catch (error) {
        console.error("Unable to fetch data", error);
    }
}

export default getAvaliableCurrency;