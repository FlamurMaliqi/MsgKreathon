import API_CONFIG from './api_config.js';

const getVaccination = async (patientId: string, vaccinationId: string): Promise<Object> => {
    const vaccinationURL = API_CONFIG.getVaccinationURL(patientId, vaccinationId);
    return API_CONFIG.sendRequest(vaccinationURL, 'GET', "");
}

const getVaccinations = async (patientId: string): Promise<Object> => {
    const vaccinationsURL = API_CONFIG.getVaccinationsURL(patientId);
    return API_CONFIG.sendRequest(vaccinationsURL, 'GET', "");
}

const createVaccination = async (patientId: string, data: Object): Promise<Object> => {
    const vaccinationsURL = API_CONFIG.getVaccinationsURL(patientId);
    return API_CONFIG.sendRequest(vaccinationsURL, 'CREATE', data);
}

const updateVaccination = async (patientId: string, vaccinationId: string, data: Object): Promise<Object> => {
    const vaccinationURL = API_CONFIG.getVaccinationURL(patientId, vaccinationId);
    return API_CONFIG.sendRequest(vaccinationURL, 'UPDATE', data);
}

const deleteVaccination = async (patientId: string, vaccinationId: string): Promise<Object> => {
    const vaccinationURL = API_CONFIG.getVaccinationURL(patientId, vaccinationId);
    return API_CONFIG.sendRequest(vaccinationURL, 'DELETE', "");
}

export default {
    getVaccination,
    getVaccinations,
    createVaccination,
    updateVaccination,
    deleteVaccination,
};
