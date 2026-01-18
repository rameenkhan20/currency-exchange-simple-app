import express, { response, urlencoded } from 'express';
import axios from 'axios';
import 'dotenv/config'


const APP = express();
const apiKey = process.env.API_KEY;
const port = 3000;

APP.use(express.urlencoded({extended: true}));


async function getAvaliableCurrency() {
    try {
        const response_data = await axios.get(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`);
        const avaliable_currencies = response.data.conversion_rates;
        console.log(avaliable_currencies);
    } catch (error) {
        console.error("Unable to fetch data", error);
    }
}



APP.listen(port , () => {
    console.log(`app listening at port = ${port}`)
})

