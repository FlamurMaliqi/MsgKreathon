import API_CONFIG from "./api_config";


const getDoctor = async (doctorId) => {
    const doctorURL = API_CONFIG.getDoctorURL(doctorId);
    return API_CONFIG.sendRequest(doctorURL, 'GET');
}


const createDoctor = async (data) => {
    return API_CONFIG.sendRequest(API_CONFIG.doctorsUrl(), 'CREATE', data);
}

const updateDoctor = async (doctorId, data) => {
    const doctorURL = API_CONFIG.getDoctorURL(doctorId);
    return API_CONFIG.sendRequest(doctorURL, 'UPDATE', data);
}

const deleteDoctor = async (doctorId) => {
    const doctorURL = API_CONFIG.getDoctorURL(doctorId);
    return API_CONFIG.sendRequest(doctorURL, 'DELETE');
}

// ????  Name and Number needed !!
const addPatientToDoctor = async (doctorId, patientId) => {
    const doctorURL = API_CONFIG.getDoctorURL(doctorId);
    return API_CONFIG.sendRequest(`${doctorURL}/patients`, 'CREATE', { patientId: patientId });
}

// By Name or Number?!
const searchPatients = async (doctorId, query) => {
    const doctorURL = API_CONFIG.getDoctorURL(doctorId);
    return API_CONFIG.sendRequest(`${doctorURL}/patients?search=${query}`, 'GET');
}

const removePatientFromDoctor = async (doctorId, patientId) => {
    const doctorURL = API_CONFIG.getDoctorURL(doctorId);
    return API_CONFIG.sendRequest(`${doctorURL}/patients/${patientId}`, 'DELETE');
}



export default {
    getDoctor,
    createDoctor,
    updateDoctor,
    deleteDoctor,

    addPatientToDoctor,
    searchPatients,
    removePatientFromDoctor,

    Doctor,

};
