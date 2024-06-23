import API_CONFIG from './api_config';
import { Doctor } from './doctor';
import { EmergencyContact } from './ermergency';



class Patient {
    id?: number;
    name: string;
    surname: string;
    kvr: string;
    familyDoctor: Doctor;
    healthInsuranceProvider: string;
    birthday: string;
    weightKg: number;
    heightCm: number;
    email: string;
    phone: string;
    street: string;
    houseNumber: string;
    postalCode: string;
    city: string;
    emergencyContact?: EmergencyContact;
    
 
    constructor(json: {
        patientId?: number;
        name: string;
        surname: string;
        kvr: string;
        familyDoctor: any;
        healthInsuranceProvider: string;
        birthday: string;
        weightKg: number;
        heightCm: number;
        email: string;
        phone: string;
        street: string;
        houseNumber: string;
        postalCode: string;
        city: string;
        ice?: any;
    }) {
        this.id = json.patientId;
        this.name = json.name;
        this.surname = json.surname;
        this.kvr = json.kvr;
        this.familyDoctor = new Doctor(json.familyDoctor);
        this.healthInsuranceProvider = json.healthInsuranceProvider;
        this.birthday = json.birthday;
        this.weightKg = json.weightKg;
        this.heightCm = json.heightCm;
        this.email = json.email;
        this.phone = json.phone;
        this.street = json.street;
        this.houseNumber = json.houseNumber;
        this.postalCode = json.postalCode;
        this.city = json.city;
        console.log(json);
        if (json.ice)
            this.emergencyContact = new EmergencyContact(json.ice as any);
    }

    toJson(): Object {
        return {
            id: this.id,
            name: this.name,
            surname: this.surname,
            kvr: this.kvr,
            familyDoctor: this.familyDoctor.toJson(),
            healthInsuranceProvider: this.healthInsuranceProvider,
            birthday: this.birthday,
            weightKg: this.weightKg,
            heightCm: this.heightCm,
            email: this.email,
            phone: this.phone,
            street: this.street,
            houseNumber: this.houseNumber,
            postalCode: this.postalCode,
            city: this.city,
            emergencyContact: this.emergencyContact?.toJson()
        };
    }
}

const getPatient = async (patientId: number): Promise<Patient> => {
    const patientURL = API_CONFIG.getPatientURL(patientId);
    const js = await API_CONFIG.sendRequest(patientURL, 'GET', "");
    return new Patient(js);
};

const createPatient = async (data: Patient): Promise<Patient> => {
    const js = await API_CONFIG.sendRequest(API_CONFIG.patientsUrl() + "/register", 'POST', data.toJson());
    return new Patient(js);
};

const updatePatient = async (data:Patient) => {
    const patientURL = API_CONFIG.getPatientURL(data.id!);
    const js = await API_CONFIG.sendRequest(patientURL, 'PUT', data.toJson());
    return new Patient(js);
};

const deletePatient = async (patientId: Patient | number) => {
    if (typeof patientId !== 'number') {
        patientId = patientId.id!;
    }
    const patientURL = API_CONFIG.getPatientURL(patientId);
    await API_CONFIG.sendRequest(patientURL, 'DELETE', "");
};

export {
    getPatient,
    createPatient,
    updatePatient,
    deletePatient,
    Patient
};
