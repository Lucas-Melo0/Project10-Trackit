import axios from "axios";

const waitTime = 2 * 1000;
const axiosBase = axios.create({
    baseURL:"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit",
    timeout:waitTime
});
export default axiosBase;