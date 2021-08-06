import axios from 'axios';

// para importar  - axios para fazer as requisições

const api = axios.create({
 baseURL: 'https://sujeitoprogramador.com'
});

export default api;