import express from 'express';
import getAvaliableCurrency from './controllers/getAvaliableCurrency.js';

const APP = express();
const port = 3000;

APP.use(express.urlencoded({extended: true}));

APP.use(express.static("public"));

// console.log(express.static);
// console.log(express.static("public"));

APP.set('view engine', 'ejs');
APP.set('views' , './views');

APP.get("/" , async (request, response) =>{
    const avaliable_currencies = await getAvaliableCurrency();

    return response.render(         // refresh : where to render , what to render
        "index" , { currencies : avaliable_currencies});
});

APP.listen(port , () => {
    console.log(`app listening at port = ${port}`)
});