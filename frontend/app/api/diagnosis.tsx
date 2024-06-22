import API_CONFIG from './api_config';

const getDiagnosis = async (patientId: string, diagnosisId: string): Promise<Object> => {
    const diagnosisURL = API_CONFIG.getDiagnosisURL(patientId, diagnosisId);
    return API_CONFIG.sendRequest(diagnosisURL, 'GET', "");
}

const getDiagnosises = async (patientId: string): Promise<Object> => {
    const diagnosisURL = API_CONFIG.getDiagnosisesURL(patientId);
    return API_CONFIG.sendRequest(diagnosisURL, 'GET', "");
}

const createDiagnosis = async (patientId: string, data: Object): Promise<Object> => {
    const diagnosisURL = API_CONFIG.getDiagnosisesURL(patientId);
    return API_CONFIG.sendRequest(diagnosisURL, 'POST', data);
}

const updateDiagnosis = async (patientId: string, diagnosisId: string, data: Object): Promise<Object> => {
    const diagnosisURL = API_CONFIG.getDiagnosisURL(patientId, diagnosisId);
    return API_CONFIG.sendRequest(diagnosisURL, 'PUT', data);
}

const deleteDiagnosis = async (patientId: string, diagnosisId: string): Promise<Object> => {
    const diagnosisURL = API_CONFIG.getDiagnosisURL(patientId, diagnosisId);
    return API_CONFIG.sendRequest(diagnosisURL, 'DELETE', "");
}

export default {
    getDiagnosis,
    getDiagnosises,
    createDiagnosis,
    updateDiagnosis,
    deleteDiagnosis,
};
