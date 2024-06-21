import API_CONFIG from './api_config.js' 


const getPatient = async (patientId) => {
    const patientURL = API_CONFIG.getPatientURL(patientId);
    return API_CONFIG.sendRequest(patientURL, 'GET');
}


const createPatient = async (data) => {
    return API_CONFIG.sendRequest(API_CONFIG.patientsUrl(), 'CREATE', data);
}

const updatePatient = async (patientId, data) => {
    const patientURL = API_CONFIG.getPatientURL(patientId);
    return API_CONFIG.sendRequest(patientURL, 'UPDATE', data);
}

const deletePatient = async (patientId) => {
    const patientURL = API_CONFIG.getPatientURL(patientId);
    return API_CONFIG.sendRequest(patientURL, 'DELETE');
}

export default {
    getPatient,
    createPatient,
    updatePatient,
    deletePatient,
};
