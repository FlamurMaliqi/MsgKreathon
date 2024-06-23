import API_CONFIG from './api_config';
import { Doctor } from './doctor';

class Allergy {
    id?: number;
    patientId: number;
    allergen: string;
    reaction: string;
    severity: string;
    dateDiagnosed: Date;
    notes: string;

    constructor(json: {
        id?: number;
        patientId: number;
        allergen: string;
        reaction: string;
        severity: string;
        dateDiagnosed: string;
        notes: string;
    }) {
        this.id = json.id;
        this.patientId = json.patientId;
        this.allergen = json.allergen;
        this.reaction = json.reaction;
        this.severity = json.severity;
        this.dateDiagnosed = new Date(json.dateDiagnosed);
        // set time to 0
        this.dateDiagnosed.setHours(0, 0, 0, 0);
        this.notes = json.notes;
    }

    toJson(): Object {
        return {
            id: this.id,
            patientId: this.patientId,
            allergen: this.allergen,
            reaction: this.reaction,
            severity: this.severity,
            dateDiagnosed: this.dateDiagnosed,

            notes: this.notes,
        };
    }
}

const getAllergy = async (patientId: number, vaccinationId: number): Promise<Allergy> => {
    const allergyUrl = API_CONFIG.getAllergyURL(patientId, vaccinationId);
    const js = await API_CONFIG.sendRequest(allergyUrl, 'GET', "");
    return new Allergy(js);
}

const getAllergies = async (patientId: number): Promise<Allergy[]> => {
    const allergiesUrl = API_CONFIG.getAllergiesURL(patientId);
    const js = await API_CONFIG.sendRequest(allergiesUrl + "/all", 'GET', "");
    if (!Array.isArray(js)) {
        return [];
    }
    return js.map((item: any) => new Allergy(item));
}

const createAllergy = async (patientId: number, data: Allergy): Promise<Allergy> => {
    const allergiesUrl = API_CONFIG.getAllergiesURL(patientId);
    const js = await API_CONFIG.sendRequest(allergiesUrl, 'POST', data.toJson());
    return new Allergy(js);
}

const updateAllergies = async (patientId: number, data: Allergy[]): Promise<Allergy> => {
    const allergyUrl = API_CONFIG.getAllergiesURL(patientId);
    const js = await API_CONFIG.sendRequest(allergyUrl, 'PUT', data.map((item) => item.toJson()));
    return new Allergy(js);
}

const deleteAllergy = async (patientId: number, allergyId: number)=> {
    const allergyUrl = API_CONFIG.getAllergyURL(patientId, allergyId);
    await API_CONFIG.sendRequest(allergyUrl, 'DELETE', "");
}

export {
    Allergy,
    getAllergy,
    getAllergies,
    createAllergy,
    updateAllergies,
    deleteAllergy
};
