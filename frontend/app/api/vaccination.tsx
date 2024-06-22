import API_CONFIG from './api_config.jsx';

class Vaccination {
    id?: string ;
    name: string;

    constructor(json: {
        id?: string;
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

const getVaccination = async (patientId: string, vaccinationId: string): Promise<Vaccination> => {
    const vaccinationURL = API_CONFIG.getVaccinationURL(patientId, vaccinationId);
    const js = await API_CONFIG.sendRequest(vaccinationURL, 'GET', "");
    return new Vaccination(js);
}

const getVaccinations = async (patientId: string): Promise<Vaccination> => {
    const vaccinationsURL = API_CONFIG.getVaccinationsURL(patientId);
    const js = await API_CONFIG.sendRequest(vaccinationsURL, 'GET', "");
    return js.map((item: any) => new Vaccination(item));
}

const createVaccination = async (patientId: string, data: Vaccination): Promise<Vaccination> => {
    const vaccinationsURL = API_CONFIG.getVaccinationsURL(patientId);
    const js = await API_CONFIG.sendRequest(vaccinationsURL, 'POST', data.toJson());
    return new Vaccination(js);
}

const updateVaccination = async (patientId: string, data: Vaccination): Promise<Vaccination> => {
    const vaccinationURL = API_CONFIG.getVaccinationURL(patientId, data.id!);
    const js = await API_CONFIG.sendRequest(vaccinationURL, 'PUT', data.toJson());
    return new Vaccination(js);
}

const deleteVaccination = async (patientId: string, vaccinationId: string)=> {
    const vaccinationURL = API_CONFIG.getVaccinationURL(patientId, vaccinationId);
    await API_CONFIG.sendRequest(vaccinationURL, 'DELETE', "");
}

export {
    getVaccination,
    getVaccinations,
    createVaccination,
    updateVaccination,
    deleteVaccination,
    Vaccination
};
