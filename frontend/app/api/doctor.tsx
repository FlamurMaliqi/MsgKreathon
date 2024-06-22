import API_CONFIG from "./api_config";

class Doctor {
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

class PatientHead {
    id: string;
    name: string;
    surname: string;
    kvr: string;

    constructor(json: {
        id: string;
        name: string;
        surname: string;
        kvr: string;
    }) {
        this.id = json.id;
        this.name = json.name;
        this.surname = json.surname;
        this.kvr = json.kvr;
    }

    toJson(): Object {
        return {
            id: this.id,
            name: this.name,
            surname: this.surname,
            kvr: this.kvr
        };
    }
}

const getDoctor = async (doctorId: string): Promise<Doctor> => {
    const doctorURL = API_CONFIG.getDoctorURL(doctorId);
    const js = await API_CONFIG.sendRequest(doctorURL, 'GET', "");
    return new Doctor(js);
}

const createDoctor = async (data: Doctor): Promise<Doctor> => {
    const js = await API_CONFIG.sendRequest(API_CONFIG.doctorsUrl(), 'POST', data.toJson());
    return new Doctor(js);
}

const updateDoctor = async (data: Doctor): Promise<Doctor> => {
    const doctorURL = API_CONFIG.getDoctorURL(data.id);
    const js = await API_CONFIG.sendRequest(doctorURL, 'PUT', data.toJson());
    return new Doctor(js);
}

const deleteDoctor = async (doctorId: string) => {
    const doctorURL = API_CONFIG.getDoctorURL(doctorId);
    await API_CONFIG.sendRequest(doctorURL, 'DELETE', "");
}

const addPatientToDoctor = async (doctorId: string, patientId: string): Promise<PatientHead> => {
    const doctorURL = API_CONFIG.getDoctorURL(doctorId);
    const js = await API_CONFIG.sendRequest(`${doctorURL}/patients`, 'POST', { "patientId": patientId });
    return new PatientHead(js);
}

const searchPatients = async (doctorId: string, query: string): Promise<PatientHead[]> => {
    const doctorURL = API_CONFIG.getDoctorURL(doctorId);
    const js = await API_CONFIG.sendRequest(`${doctorURL}/patients/search/${query}`, 'GET', "");
    return js.map((p: any) => new PatientHead(p));
}

const removePatientFromDoctor = async (doctorId: string, patientId: string) => {
    const doctorURL = API_CONFIG.getDoctorURL(doctorId);
    await API_CONFIG.sendRequest(`${doctorURL}/patients/${patientId}`, 'DELETE', "");
}

export {
    getDoctor,
    createDoctor,
    updateDoctor,
    deleteDoctor,
    addPatientToDoctor,
    searchPatients,
    removePatientFromDoctor,
    Doctor,
    PatientHead
};
