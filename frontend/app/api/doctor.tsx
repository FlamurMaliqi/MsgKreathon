import API_CONFIG from "./api_config";


const getDoctor = async (doctorId: string): Promise<Object> => {
    const doctorURL = API_CONFIG.getDoctorURL(doctorId);
    return API_CONFIG.sendRequest(doctorURL, 'GET', "");
}

const createDoctor = async (data: Object): Promise<Object> => {
    return API_CONFIG.sendRequest(API_CONFIG.doctorsUrl(), 'CREATE', data);
}

const updateDoctor = async (doctorId: string, data: Object): Promise<Object> => {
    const doctorURL = API_CONFIG.getDoctorURL(doctorId);
    return API_CONFIG.sendRequest(doctorURL, 'UPDATE', data);
}

const deleteDoctor = async (doctorId: string): Promise<Object> => {
    const doctorURL = API_CONFIG.getDoctorURL(doctorId);
    return API_CONFIG.sendRequest(doctorURL, 'DELETE', "");
}

const addPatientToDoctor = async (doctorId: string, patientId: string): Promise<Object> => {
    const doctorURL = API_CONFIG.getDoctorURL(doctorId);
    return API_CONFIG.sendRequest(`${doctorURL}/patients`, 'CREATE', { patientId });
}

const searchPatients = async (doctorId: string, query: string): Promise<Object[]> => {
    const doctorURL = API_CONFIG.getDoctorURL(doctorId);
    return API_CONFIG.sendRequest(`${doctorURL}/patients?search=${query}`, 'GET', "");
}

const removePatientFromDoctor = async (doctorId: string, patientId: string): Promise<Object> => {
    const doctorURL = API_CONFIG.getDoctorURL(doctorId);
    return API_CONFIG.sendRequest(`${doctorURL}/patients/${patientId}`, 'DELETE', "");
}

export default {
    getDoctor,
    createDoctor,
    updateDoctor,
    deleteDoctor,
    addPatientToDoctor,
    searchPatients,
    removePatientFromDoctor,
};
