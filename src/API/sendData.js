import axiosBase from "./axiosBase";

export default function sendData(url, data){
    return axiosBase.post(url, data);
};