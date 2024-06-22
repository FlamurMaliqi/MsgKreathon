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

const getDrugURL = (patientId: string, drugId: string): string => {
    const patientURL = getPatientURL(patientId);
    return `${patientURL}/drug/${drugId}`;
};

const getDrugsURL = (patientId: string): string => {
    const patientURL = getPatientURL(patientId);
    return `${patientURL}/drug`;
};




// ---------------- Vaccinations
const getVaccinationURL = (patientId: string, vaccinationId: string): string => {
    const patientURL = getPatientURL(patientId);
    return `${patientURL}/vaccination/${vaccinationId}`;
}

const getVaccinationsURL = (patientId: string): string => {
    const patientURL = getPatientURL(patientId);
    return `${patientURL}/vaccination`;
}



// ---------------- Reports
const getReportURL = (patientId: string, diagnosisId: string): string => {
    const patientURL = getPatientURL(patientId);
    return `${patientURL}/report/${diagnosisId}`;
}

const getReportsURL = (patientId: string): string => {
    const patientURL = getPatientURL(patientId);
    return `${patientURL}/report`;
}


const getEmergencyContactURL = (patientId: string): string => {
    const patientURL = getPatientURL(patientId);
    return `${patientURL}/ice`;
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
    getDrugURL,
    getDrugsURL,
    getVaccinationURL,
    getVaccinationsURL,
    getReportURL,
    getReportsURL,
    getEmergencyContactURL,
    doctorsUrl,
    getDoctorURL,
    getDoctorPatientsURL,
    sendRequest,
};
