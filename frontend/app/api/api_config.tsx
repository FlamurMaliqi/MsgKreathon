const apiBaseURL: string = 'http://localhost:3000/api/';
const apiVersion: string = 'v1';

//  ---------------- Patients
const patientsUrl = (): string => {
    return `${apiBaseURL}${apiVersion}/patient`;
}

const getPatientURL = (patientId: string): string => {
    return `${apiBaseURL}${apiVersion}/patient/${patientId}`;
};


//  ---------------- Treatments

const getTreatmentURL = (patientId: string, treatmentId: string): string => {
    const patientURL = getPatientURL(patientId);
    return `${patientURL}/treatments/${treatmentId}`;
};

const getTreatmentsURL = (patientId: string): string => {
    const patientURL = getPatientURL(patientId);
    return `${patientURL}/treatments`;
};




// ---------------- Vaccinations
const getVaccinationURL = (patientId: string, vaccinationId: string): string => {
    const patientURL = getPatientURL(patientId);
    return `${patientURL}/vaccinations/${vaccinationId}`;
}

const getVaccinationsURL = (patientId: string): string => {
    const patientURL = getPatientURL(patientId);
    return `${patientURL}/vaccinations`;
}



// ---------------- Diagnosis
const getDiagnosisURL = (patientId: string, diagnosisId: string): string => {
    const patientURL = getPatientURL(patientId);
    return `${patientURL}/diagnosis/${diagnosisId}`;
}

const getDiagnosisesURL = (patientId: string): string => {
    const patientURL = getPatientURL(patientId);
    return `${patientURL}/diagnosis`;
}




//  ---------------- Doctors

const doctorsUrl = (): string => {
    return `${apiBaseURL}${apiVersion}/doctor`;
}

const getDoctorURL = (doctorId: string): string => {
    return `${apiBaseURL}${apiVersion}/doctor/${doctorId}`;
};

const getDoctorPatientsURL = (doctorId: string): string => {
    const doctorURL = getDoctorURL(doctorId);
    return `${doctorURL}/patients`;
};






const sendRequest = async (url: string, method: string, body: any): Promise<any> => {
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
