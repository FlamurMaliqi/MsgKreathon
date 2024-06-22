import API_CONFIG from './api_config';
import { Doctor } from './doctor';

class Diagnosis {
    id?: number;
    patientId: number;
    issuedBy: Doctor;
    illness: string;
    description: string;
    severity: string;
    dateDiagnosed: Date;

    constructor(json: {
        id?: number;
        patientId: number;
        issuedBy: any;
        illness: string;
        description: string;
        severity: string;
        dateDiagnosed: Date;
    }) {
        this.id = json.id;
        this.patientId = json.patientId;
        this.issuedBy = new Doctor(json.issuedBy);
        this.illness = json.illness;
        this.description = json.description;
        this.severity = json.severity;
        this.dateDiagnosed = json.dateDiagnosed;
    }

    toJson(): Object {
        return {
            id: this.id,
            patientId: this.patientId,
            issuedBy: this.issuedBy.toJson(),
            illness: this.illness,
            description: this.description,
            severity: this.severity,
            dateDiagnosed: this.dateDiagnosed,
        };
    }
}

const getDiagnosis = async (patientId: number, vaccinationId: number): Promise<Diagnosis> => {
    const diagnosisUrl = API_CONFIG.getDiagnosisURL(patientId, vaccinationId);
    const js = await API_CONFIG.sendRequest(diagnosisUrl, 'GET', "");
    return new Diagnosis(js);
}

const getDiagnoses = async (patientId: number): Promise<Diagnosis[]> => {
    const diagnosesUrl = API_CONFIG.getDiagnosesURL(patientId);
    const js = await API_CONFIG.sendRequest(diagnosesUrl + "/all", 'GET', "");
    return js.map((item: any) => new Diagnosis(item));
}

const createDiagnosis = async (patientId: number, data: Diagnosis): Promise<Diagnosis> => {
    const diagnosesUrl = API_CONFIG.getDiagnosesURL(patientId);
    const js = await API_CONFIG.sendRequest(diagnosesUrl, 'POST', data.toJson());
    return new Diagnosis(js);
}

const updateDiagnosis = async (patientId: number, data: Diagnosis): Promise<Diagnosis> => {
    const diagnosisUrl = API_CONFIG.getDiagnosisURL(patientId, data.id!);
    const js = await API_CONFIG.sendRequest(diagnosisUrl, 'PUT', data.toJson());
    return new Diagnosis(js);
}

const deleteDiagnosis = async (patientId: number, diagnosisId: number)=> {
    const diagnosisUrl = API_CONFIG.getDiagnosisURL(patientId, diagnosisId);
    await API_CONFIG.sendRequest(diagnosisUrl, 'DELETE', "");
}

export {
    Diagnosis,
    getDiagnosis,
    getDiagnoses,
    createDiagnosis,
    updateDiagnosis,
    deleteDiagnosis
};
