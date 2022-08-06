
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
function getTodayHabits(token){
    return axiosBase.get("/habits/today",{ headers: { 'Authorization': `Bearer ${token}` } })
}
function checkHabitAsDone(id,token){
    return axiosBase.post(`/habits/${id}/check`,{},{headers: {"Authorization": `Bearer ${token}`}});
}
function unCheckHabitAsDone(id, token){
    return axiosBase.post(`/habits/${id}/uncheck`,{},{headers: {"Authorization": `Bearer ${token}`}});
}

function getHabitsHistory(token){
    return axiosBase.get("/habits/history/daily",{ headers: { 'Authorization': `Bearer ${token}` } })
}

export {sendData, createHabit, getHabits, deleteHabit, getTodayHabits, checkHabitAsDone, unCheckHabitAsDone, getHabitsHistory};