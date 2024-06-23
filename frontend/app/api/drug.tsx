import API_CONFIG from './api_config'
import { Doctor } from './doctor';

class Drug {
    id?: number;
    name: string;
    prescribingDoctor: Doctor;
    dosage: string;
    frequency: string;
    startDate: Date;
    endDate: Date;
    sideEffects: string;

    constructor(json: {
        id?: number;
        name: string;
        prescribingDoctor: any;
        dosage: string;
        frequency: string;
        startDate: Date;
        endDate: Date;
        sideEffects: string;
    }) {

        this.id = json.id;
        this.name = json.name;
        this.prescribingDoctor = new Doctor(json.prescribingDoctor);
        this.dosage = json.dosage;
        this.frequency = json.frequency;
        this.startDate = json.startDate;
        this.endDate = json.endDate;
        this.sideEffects = json.sideEffects;
    }

    toJson(): Object {
        return {
            id: this.id,
            name: this.name,
            prescribingDoctor: this.prescribingDoctor.toJson(),
            dosage: this.dosage,
            frequency: this.frequency,
            startDate: this.startDate,
            endDate: this.endDate,
            sideEffects: this.sideEffects
        };
    }
}


const getDrug = async (patientId: number, treatmentId: number): Promise<Drug> => {
    const treatmentURL = API_CONFIG.getDrugURL(patientId, treatmentId);
    const js = await API_CONFIG.sendRequest(treatmentURL, 'GET', "");
    return new Drug(js);
}

const getDrugs = async (patientId: number): Promise<Drug[]> => {
    const treatmentsURL = API_CONFIG.getDrugsURL(patientId);
    const js = await API_CONFIG.sendRequest(treatmentsURL, 'GET', "");
    console.log(js);
    if (js == "") { return []; }
    return js.map((json: any) => new Drug(json));
}

const createDrug = async (patientId: number, data: Drug): Promise<Drug> => {
    const treatmentsURL = API_CONFIG.getDrugsURL(patientId);
    const js = await API_CONFIG.sendRequest(treatmentsURL, 'POST', data.toJson());
    return new Drug(js);
}

const updateDrug = async (patientId: number, data: Drug): Promise<Drug> => {
    const treatmentURL = API_CONFIG.getDrugURL(patientId, data.id!);
    const js = await API_CONFIG.sendRequest(treatmentURL, 'PUT', data.toJson());
    return new Drug(js);
}

const deleteDrug = async (patientId: number, drugId: number) => {
    const treatmentURL = API_CONFIG.getDrugURL(patientId, drugId);
    await API_CONFIG.sendRequest(treatmentURL, 'DELETE', "");
}

export {
    getDrug,
    getDrugs,
    createDrug,
    updateDrug,
    deleteDrug,
    Drug,
};
