import API_CONFIG from './api_config.js'


const getDiagnosis = async (patientId, diagnosisId) => {
    const diagnosisURL = API_CONFIG.getDiagnosisURL(patientId, diagnosisId);
    return API_CONFIG.sendRequest(diagnosisURL, 'GET');
}

const getDiagnosises = async (patientId) => {
    const diagnosisURL = API_CONFIG.getDiagnosisesURL(patientId);
    return API_CONFIG.sendRequest(diagnosisURL, 'GET');
}

const createDiagnosis = async (patientId, data) => {
    const diagnosisURL = API_CONFIG.getDiagnosisesURL(patientId);
    return API_CONFIG.sendRequest(diagnosisURL, 'CREATE', data);
}

const updateDiagnosis = async (patientId, diagnosisId, data) => {
    const diagnosisURL = API_CONFIG.getDiagnosisURL(patientId, diagnosisId);
    return API_CONFIG.sendRequest(diagnosisURL, 'UPDATE', data);
}

const deleteDiagnosis = async (patientId, diagnosisId) => {
    const diagnosisURL = API_CONFIG.getDiagnosisURL(patientId, diagnosisId);
    return API_CONFIG.sendRequest(diagnosisURL, 'DELETE');
}

export default {
    getDiagnosis,
    getDiagnosises,
    createDiagnosis,
    updateDiagnosis,
    deleteDiagnosis,

};