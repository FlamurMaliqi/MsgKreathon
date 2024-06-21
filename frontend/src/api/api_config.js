

const apiBaseURL = 'http://localhost:3000/api/';
const apiVersion = 'v1';

const patientsUrl = () => {
    return `${apiBaseURL}${apiVersion}/patient`;
}

const getPatientURL = (patientId) => {
    return `${apiBaseURL}${apiVersion}/patient/${patientId}`;
};

const getTreatmentURL = (patientId, treatmentId) => {
    const patientURL = getPatientURL(patientId);
    return `${patientURL}/treatments/${treatmentId}`;
};

const getTreatmentsURL = (patientId) => {
    const patientURL = getPatientURL(patientId);
    return `${patientURL}/treatments`;
};

const doctorsUrl = () => {
    return `${apiBaseURL}${apiVersion}/doctor`;
}

const getDoctorURL = (doctorId) => {
    return `${apiBaseURL}${apiVersion}/doctor/${doctorId}`;
};

const getDoctorPatientsURL = (doctorId) => {
    const doctorURL = getDoctorURL(doctorId);
    return `${doctorURL}/patients`;
};

const sendRequest = async (url, method, body) => {
    const response = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
    return response.json();
};

export default {
    patientsUrl,
    getPatientURL,
    getTreatmentURL,
    getTreatmentsURL,
    doctorsUrl,
    getDoctorURL,
    getDoctorPatientsURL,
    sendRequest,
};