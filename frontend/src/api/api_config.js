

const apiBaseURL = 'http://localhost:3000/api/';
const apiVersion = 'v1';

const getPatientURL = (patientId) => {
    return `${apiBaseURL}${apiVersion}/patients/${patientId}`;
};

const getTreatmentURL = (patientId, treatmentId) => {
    const patientURL = getPatientURL(patientId);
    return `${patientURL}/treatments/${treatmentId}`;
};

const getTreatmentsURL = (patientId) => {
    const patientURL = getPatientURL(patientId);
    return `${patientURL}/treatments`;
};

const getDoctorURL = (doctorId) => {
    return `${apiBaseURL}${apiVersion}/doctors/${doctorId}`;
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
    getPatientURL,
    getTreatmentURL,
    getTreatmentsURL,
    getDoctorURL,
    getDoctorPatientsURL,
    sendRequest,
};