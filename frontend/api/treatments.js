import API_CONFIG from './api_config.js'


const getTreatment = async (patientId, treatmentId) => {
    const treatmentURL = API_CONFIG.getTreatmentURL(patientId, treatmentId);
    return API_CONFIG.sendRequest(treatmentURL, 'GET');
}



const getTreatments = async (patientId) => {
    const treatmentsURL = API_CONFIG.getTreatmentsURL(patientId);
    return API_CONFIG.sendRequest(treatmentsURL, 'GET');
}


const createTreatment = async (patientId, data) => {
    const treatmentsURL = API_CONFIG.getTreatmentsURL(patientId);
    return API_CONFIG.sendRequest(treatmentsURL, 'CREATE', data);
}

const updateTreatment = async (patientId, treatmentId, data) => {
    const treatmentURL = API_CONFIG.getTreatmentURL(patientId, treatmentId);
    return API_CONFIG.sendRequest(treatmentURL, 'UPDATE', data);
}

const deleteTreatment = async (patientId, treatmentId) => {
    const treatmentURL = API_CONFIG.getTreatmentURL(patientId, treatmentId);
    return API_CONFIG.sendRequest(treatmentURL, 'DELETE');
}


export default {
    getTreatment,
    getTreatments,
    createTreatment,
    updateTreatment,
    deleteTreatment,
};
