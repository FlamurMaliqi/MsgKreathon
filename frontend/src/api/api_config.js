

const apiBaseURL = 'http://localhost:3000/api/';
const apiVersion = 'v1';


//  ---------------- Patients
const patientsUrl = () => {
    return `${apiBaseURL}${apiVersion}/patient`;
}

const getPatientURL = (patientId) => {
    return `${apiBaseURL}${apiVersion}/patient/${patientId}`;
};


//  ---------------- Treatments

const getTreatmentURL = (patientId, treatmentId) => {
    const patientURL = getPatientURL(patientId);
    return `${patientURL}/treatments/${treatmentId}`;
};

const getTreatmentsURL = (patientId) => {
    const patientURL = getPatientURL(patientId);
    return `${patientURL}/treatments`;
};




// ---------------- Vaccinations
const getVaccinationURL = (patientId, vaccinationId) => {
    const patientURL = getPatientURL(patientId);
    return `${patientURL}/vaccinations/${vaccinationId}`;
}

const getVaccinationsURL = (patientId) => {
    const patientURL = getPatientURL(patientId);
    return `${patientURL}/vaccinations`;
}



// ---------------- Diagnosis
const getDiagnosisURL = (patientId, diagnosisId) => {
    const patientURL = getPatientURL(patientId);
    return `${patientURL}/diagnosis/${diagnosisId}`;
}

const getDiagnosisesURL = (patientId) => {
    const patientURL = getPatientURL(patientId);
    return `${patientURL}/diagnosis`;
}




//  ---------------- Doctors

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
    apiBaseURL,
    apiVersion,
    patientsUrl,
    getPatientURL,
    getTreatmentURL,
    getTreatmentsURL,
    getVaccinationURL,
    getVaccinationsURL,
    getDiagnosisURL,
    getDiagnosisesURL,
    doctorsUrl,
    getDoctorURL,
    getDoctorPatientsURL,
    sendRequest,
};