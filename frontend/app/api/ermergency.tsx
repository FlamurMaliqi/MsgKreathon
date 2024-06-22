import API_CONFIG from './api_config';

class EmergencyContact {
    id: string;
    name: string;

    constructor(json: {
        id: string;
        name: string;
    }) {
        this.id = json.id;
        this.name = json.name;
        
    }

    toJson(): Object {
        return {
            id: this.id,
            name: this.name,
        };
    }
}

const getEmergencyContact = async (patientId: string): Promise<EmergencyContact> => {
    const emergencyContactURL = API_CONFIG.getEmergencyContactURL(patientId);
    const js = await API_CONFIG.sendRequest(emergencyContactURL, 'GET', "");
    return new EmergencyContact(js);
}


const updateEmergencyContact = async (patientId: string, data: Object): Promise<EmergencyContact> => {
    const emergencyContactURL = API_CONFIG.getEmergencyContactURL(patientId);
    const js = await API_CONFIG.sendRequest(emergencyContactURL, 'PUT', data);
    return new EmergencyContact(js);
}

const createEmergencyContact = async (patientId: string, data: Object): Promise<EmergencyContact> => {
    const emergencyContactURL = API_CONFIG.getEmergencyContactURL(patientId);
    const response = await API_CONFIG.sendRequest(emergencyContactURL, 'POST', data);
    return new EmergencyContact(response);
}

const deleteEmergencyContact = async (patientId: string) => {
    const emergencyContactURL = API_CONFIG.getEmergencyContactURL(patientId);
    await API_CONFIG.sendRequest(emergencyContactURL, 'DELETE', "");
}

export {
    getEmergencyContact,
    updateEmergencyContact,
    createEmergencyContact,
    deleteEmergencyContact,
    EmergencyContact,
};