import API_CONFIG from './api_config.js'

class Drug {
    id: string;
    name: string;

    constructor(json: {
        id: string;
        name: string;
    }) {
        this.id = json.id;
        this.name = json.name;
        
    }

    toJson(): Object {
        return {
            id: this.id,
            name: this.name,
        };
    }
}


const getDrug = async (patientId: string, treatmentId: string): Promise<Drug> => {
    const treatmentURL = API_CONFIG.getDrugURL(patientId, treatmentId);
    const js = await API_CONFIG.sendRequest(treatmentURL, 'GET', "");
    return new Drug(js);
}

const getDrugs = async (patientId: string): Promise<Drug[]> => {
    const treatmentsURL = API_CONFIG.getDrugsURL(patientId);
    const js = await API_CONFIG.sendRequest(treatmentsURL, 'GET', "");
    return js.map((json: any) => new Drug(json));
}

const createDrug = async (patientId: string, data: Drug): Promise<Drug> => {
    const treatmentsURL = API_CONFIG.getDrugsURL(patientId);
    const js = await API_CONFIG.sendRequest(treatmentsURL, 'POST', data);
    return new Drug(js);
}

const updateDrug = async (patientId: string, data: Drug): Promise<Drug> => {
    const treatmentURL = API_CONFIG.getDrugURL(patientId, data.id);
    const js = await API_CONFIG.sendRequest(treatmentURL, 'PUT', data);
    return new Drug(js);
}

const deleteDrug = async (patientId: string, drugId: string) => {
    const treatmentURL = API_CONFIG.getDrugURL(patientId, drugId);
    await API_CONFIG.sendRequest(treatmentURL, 'DELETE', "");
}

export default {
    getDrug,
    getDrugs,
    createDrug,
    updateDrug,
    deleteDrug,
    Drug,
};
