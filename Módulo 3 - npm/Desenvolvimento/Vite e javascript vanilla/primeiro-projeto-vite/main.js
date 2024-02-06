import axiosBiblioteca from 'axios';
import {  } from "luxon";

axiosBiblioteca.get('https://random-data-api.com/api/v2/users')
    .then(response => console.log(response.data))