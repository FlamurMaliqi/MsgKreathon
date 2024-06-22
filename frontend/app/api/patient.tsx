import API_CONFIG from './api_config.js';


class Patient {
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

const getPatient = async (patientId: string): Promise<Patient> => {
    const patientURL = API_CONFIG.getPatientURL(patientId);
    const js = await API_CONFIG.sendRequest(patientURL, 'GET', "");
    return new Patient(js);
};

const createPatient = async (data: Patient): Promise<Patient> => {
    const js = await API_CONFIG.sendRequest(API_CONFIG.patientsUrl(), 'POST', data.toJson());
    return new Patient(js);
};

const updatePatient = async (data:Patient) => {
    const patientURL = API_CONFIG.getPatientURL(data.id);
    const js = await API_CONFIG.sendRequest(patientURL, 'PUT', data.toJson());
    return new Patient(js);
};

const deletePatient = async (patientId: string) => {
    const patientURL = API_CONFIG.getPatientURL(patientId);
    await API_CONFIG.sendRequest(patientURL, 'DELETE', "");
};

export {
    getPatient,
    createPatient,
    updatePatient,
    deletePatient,
    Patient
};
