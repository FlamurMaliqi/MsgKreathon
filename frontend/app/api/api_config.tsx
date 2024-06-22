const apiBaseURL: string = 'http://localhost:3000/api/';
const apiVersion: string = 'v1';

//  ---------------- Patients
const patientsUrl = (): string => {
    return `${apiBaseURL}${apiVersion}/patient`;
}

const getPatientURL = (patientId: number): string => {
    return `${apiBaseURL}${apiVersion}/patient/${patientId}`;
};


//  ---------------- Treatments

const getDrugURL = (patientId: number, drugId: number): string => {
    const patientURL = getPatientURL(patientId);
    return `${patientURL}/drug/${drugId}`;
};

const getDrugsURL = (patientId: number): string => {
    const patientURL = getPatientURL(patientId);
    return `${patientURL}/drug`;
};




// ---------------- Vaccinations
const getVaccinationURL = (patientId: number, vaccinationId: number): string => {
    const patientURL = getPatientURL(patientId);
    return `${patientURL}/vaccination/${vaccinationId}`;
}

const getVaccinationsURL = (patientId: number): string => {
    const patientURL = getPatientURL(patientId);
    return `${patientURL}/vaccination`;
}



// ---------------- Reports
const getReportURL = (patientId: number, diagnosisId: number): string => {
    const patientURL = getPatientURL(patientId);
    return `${patientURL}/report/${diagnosisId}`;
}

const getReportsURL = (patientId: number): string => {
    const patientURL = getPatientURL(patientId);
    return `${patientURL}/report`;
}


const getEmergencyContactURL = (patientId: number): string => {
    const patientURL = getPatientURL(patientId);
    return `${patientURL}/ice`;
}


// ------------- Allergies

const getAllergyURL = (patientId: number, allergyId: number): string => {
    const patientURL = getPatientURL(patientId);
    return `${patientURL}/allergy/${allergyId}`;
}

const getAllergiesURL = (patientId: number): string => {
    const patientURL = getPatientURL(patientId);
    return `${patientURL}/allergy`;
}


// ----------------- Diagnosis

const getDiagnosisURL = (patientId: number, diagnosisId: number): string => {
    const patientURL = getPatientURL(patientId);
    return `${patientURL}/diagnosis/${diagnosisId}`;
}

const getDiagnosesURL = (patientId: number): string => {
    const patientURL = getPatientURL(patientId);
    return `${patientURL}/diagnosis`;
}


//  ---------------- Doctors

const doctorsUrl = (): string => {
    return `${apiBaseURL}${apiVersion}/doctor`;
}

const getDoctorURL = (doctorId: number): string => {
    return `${apiBaseURL}${apiVersion}/doctor/${doctorId}`;
};

const getDoctorPatientsURL = (doctorId: number): string => {
    const doctorURL = getDoctorURL(doctorId);
    return `${doctorURL}/patients`;
};








const sendRequest = async (url: string, method: string, body: any): Promise<any> => {
    const response = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: body == "" ? undefined : JSON.stringify(body),
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
    getAllergyURL,
    getAllergiesURL,

    getDiagnosisURL,
    getDiagnosesURL,


    doctorsUrl,
    getDoctorURL,
    getDoctorPatientsURL,
    sendRequest,
};
