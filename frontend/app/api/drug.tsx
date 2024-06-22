import API_CONFIG from './api_config.js'

const getDrug = async (patientId: string, treatmentId: string): Promise<Object> => {
    const treatmentURL = API_CONFIG.getDrugURL(patientId, treatmentId);
    return API_CONFIG.sendRequest(treatmentURL, 'GET', "");
}

const getDrugs = async (patientId: string): Promise<Object> => {
    const treatmentsURL = API_CONFIG.getDrugsURL(patientId);
    return API_CONFIG.sendRequest(treatmentsURL, 'GET', "");
}

const createDrug = async (patientId: string, data: Object): Promise<Object> => {
    const treatmentsURL = API_CONFIG.getDrugsURL(patientId);
    return API_CONFIG.sendRequest(treatmentsURL, 'POST', data);
}

const updateDrug = async (patientId: string, treatmentId: string, data: Object): Promise<Object> => {
    const treatmentURL = API_CONFIG.getDrugURL(patientId, treatmentId);
    return API_CONFIG.sendRequest(treatmentURL, 'PUT', data);
}

const deleteDrug = async (patientId: string, treatmentId: string): Promise<Object> => {
    const treatmentURL = API_CONFIG.getDrugURL(patientId, treatmentId);
    return API_CONFIG.sendRequest(treatmentURL, 'DELETE', "");
}

export default {
    getDrug,
    getDrugs,
    createDrug,
    updateDrug,
    deleteDrug,
};
