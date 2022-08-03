import axiosBase from "./axiosBase";

function sendData(url, data){
    return axiosBase.post(url, data);
};

function createHabit (data, token){
    return axiosBase.post("/habits",data, {headers: {"Authorization": `Bearer ${token}`}});

}

export {sendData, createHabit};