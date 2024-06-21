import API_CONFIG from './api_config.js'

const getVaccination = async (patientId, vaccinationId) => {
    const vaccinationURL = API_CONFIG.getVaccinationURL(patientId, vaccinationId);
    return API_CONFIG.sendRequest(vaccinationURL, 'GET');
}

const getVaccinations = async (patientId) => {
    const vaccinationsURL = API_CONFIG.getVaccinationsURL(patientId);
    return API_CONFIG.sendRequest(vaccinationsURL, 'GET');
}

const createVaccination = async (patientId, data) => {
    const vaccinationsURL = API_CONFIG.getVaccinationsURL(patientId);
    return API_CONFIG.sendRequest(vaccinationsURL, 'CREATE', data);
}

const updateVaccination = async (patientId, vaccinationId, data) => {
    const vaccinationURL = API_CONFIG.getVaccinationURL(patientId, vaccinationId);
    return API_CONFIG.sendRequest(vaccinationURL, 'UPDATE', data);
}

const deleteVaccination = async (patientId, vaccinationId) => {
    const vaccinationURL = API_CONFIG.getVaccinationURL(patientId, vaccinationId);
    return API_CONFIG.sendRequest(vaccinationURL, 'DELETE');
}

export default {
    getVaccination,
    getVaccinations,
    createVaccination,
    updateVaccination,
    deleteVaccination,
};
