import API_CONFIG from './api_config.js';


const getPatient = async (patientId: string): Promise<Object> => {
    const patientURL = API_CONFIG.getPatientURL(patientId);
    return API_CONFIG.sendRequest(patientURL, 'GET', "");
};

const createPatient = async (data: Object): Promise<Object> => {
    return API_CONFIG.sendRequest(API_CONFIG.patientsUrl(), 'POST', data);
};

const updatePatient = async (patientId: string, data: Partial<Object>): Promise<Object> => {
    const patientURL = API_CONFIG.getPatientURL(patientId);
    return API_CONFIG.sendRequest(patientURL, 'PUT', data);
};

const deletePatient = async (patientId: string): Promise<Object> => {
    const patientURL = API_CONFIG.getPatientURL(patientId);
    return API_CONFIG.sendRequest(patientURL, 'DELETE', "");
};

export default {
    getPatient,
    createPatient,
    updatePatient,
    deletePatient,
};
