import axiosBase from "./axiosBase";

function sendData(url, data){
    return axiosBase.post(url, data);
};

function createHabit (data, token){
    return axiosBase.post("/habits",data, {headers: {"Authorization": `Bearer ${token}`}});

}
function getHabits(token) {
    return axiosBase.get('/habits', { headers: { 'Authorization': `Bearer ${token}` } });
}
function deleteHabit(id,token) {
    return axiosBase.delete(`/habits/${id}`, { headers: { 'Authorization': `Bearer ${token}` } });
}

export {sendData, createHabit, getHabits, deleteHabit};