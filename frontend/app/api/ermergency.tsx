import API_CONFIG from './api_config';


const getEmergencyContact = async (patientId: string): Promise<Object> => {
    const emergencyContactURL = API_CONFIG.getEmergencyContactURL(patientId);
    return API_CONFIG.sendRequest(emergencyContactURL, 'GET', "");
}


const updateEmergencyContact = async (patientId: string, data: Object): Promise<Object> => {
    const emergencyContactURL = API_CONFIG.getEmergencyContactURL(patientId);
    return API_CONFIG.sendRequest(emergencyContactURL, 'PUT', data);
}

const createEmergencyContact = async (patientId: string, data: Object): Promise<Object> => {
    const emergencyContactURL = API_CONFIG.getEmergencyContactURL(patientId);
    return API_CONFIG.sendRequest(emergencyContactURL, 'POST', data);
}

const deleteEmergencyContact = async (patientId: string): Promise<Object> => {
    const emergencyContactURL = API_CONFIG.getEmergencyContactURL(patientId);
    return API_CONFIG.sendRequest(emergencyContactURL, 'DELETE', "");
}

export default {
    getEmergencyContact,
    updateEmergencyContact,
    createEmergencyContact,
    deleteEmergencyContact,
};