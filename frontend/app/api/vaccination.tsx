import API_CONFIG from './api_config.jsx';
import { Doctor } from './doctor.jsx';

class Vaccination {
    id?: number;
    patientId: number;
    administeringDoctor: Doctor;
    vaccineName: string;
    vaccinationDate: Date;
    notificationDate: Date;
    dose: string;

    constructor(json: {
        id?: number;
        patientId: number;
        administeringDoctor: Doctor;
        vaccineName: string;
        vaccinationDate : Date;
        notificationDate: Date;
        dose: string;
    }) {
        this.id = json.id;
        this.patientId = json.patientId;
        this.administeringDoctor = new Doctor(json.administeringDoctor);
        this.vaccineName = json.vaccineName;
        this.vaccinationDate = json.vaccinationDate;
        this.notificationDate = json.notificationDate;
        this.dose = json.dose;
    }

    toJson(): Object {
        return {
            id: this.id,
            patientId: this.patientId,
            administeringDoctor: this.administeringDoctor.toJson(),
            vaccineName: this.vaccineName,
            vaccinationDate: this.vaccinationDate,
            notificationDate: this.notificationDate,
            dose: this.dose,
        };
    }
}

const getVaccination = async (patientId: number, vaccinationId: number): Promise<Vaccination> => {
    const vaccinationURL = API_CONFIG.getVaccinationURL(patientId, vaccinationId);
    const js = await API_CONFIG.sendRequest(vaccinationURL, 'GET', "");
    return new Vaccination(js);
}

const getVaccinations = async (patientId: number): Promise<Vaccination[]> => {
    const vaccinationsURL = API_CONFIG.getVaccinationsURL(patientId);
    const js = await API_CONFIG.sendRequest(vaccinationsURL + "/all", 'GET', "");
    return js.map((item: any) => new Vaccination(item));
}

const createVaccination = async (patientId: number, data: Vaccination): Promise<Vaccination> => {
    const vaccinationsURL = API_CONFIG.getVaccinationsURL(patientId);
    const js = await API_CONFIG.sendRequest(vaccinationsURL, 'POST', data.toJson());
    return new Vaccination(js);
}

const updateVaccination = async (patientId: number, data: Vaccination): Promise<Vaccination> => {
    const vaccinationURL = API_CONFIG.getVaccinationURL(patientId, data.id!);
    const js = await API_CONFIG.sendRequest(vaccinationURL, 'PUT', data.toJson());
    return new Vaccination(js);
}

const deleteVaccination = async (patientId: number, vaccinationId: number)=> {
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
