import API_CONFIG from './api_config.js'

const getTreatment = async (patientId: string, treatmentId: string): Promise<Object> => {
    const treatmentURL = API_CONFIG.getTreatmentURL(patientId, treatmentId);
    return API_CONFIG.sendRequest(treatmentURL, 'GET', "");
}

const getTreatments = async (patientId: string): Promise<Object> => {
    const treatmentsURL = API_CONFIG.getTreatmentsURL(patientId);
    return API_CONFIG.sendRequest(treatmentsURL, 'GET', "");
}

const createTreatment = async (patientId: string, data: Object): Promise<Object> => {
    const treatmentsURL = API_CONFIG.getTreatmentsURL(patientId);
    return API_CONFIG.sendRequest(treatmentsURL, 'CREATE', data);
}

const updateTreatment = async (patientId: string, treatmentId: string, data: Object): Promise<Object> => {
    const treatmentURL = API_CONFIG.getTreatmentURL(patientId, treatmentId);
    return API_CONFIG.sendRequest(treatmentURL, 'UPDATE', data);
}

const deleteTreatment = async (patientId: string, treatmentId: string): Promise<Object> => {
    const treatmentURL = API_CONFIG.getTreatmentURL(patientId, treatmentId);
    return API_CONFIG.sendRequest(treatmentURL, 'DELETE', "");
}

export default {
    getTreatment,
    getTreatments,
    createTreatment,
    updateTreatment,
    deleteTreatment,
};
