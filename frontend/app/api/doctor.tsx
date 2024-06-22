import API_CONFIG from "./api_config";

class Doctor {
    id?: number;
    name: string;
    surname: string;
    speciality: string;
    email: string;
    phone: string;
    street: string;
    houseNumber: string;
    postalCode: string;
    city: string;



    constructor(json: {
        doctorId?: number;
        name :string;
        surname :string;
        speciality :string;
        email :string;
        phone :string;
        street :string;
        houseNumber :string;
        postalCode :string;
        city :string;
    }) {
        this.id = json.doctorId;
        this.name = json.name;
        this.surname = json.surname;
        this.speciality = json.speciality;
        this.email = json.email;
        this.phone = json.phone;
        this.street = json.street;
        this.houseNumber = json.houseNumber;
        this.postalCode = json.postalCode;
        this.city = json.city;
    }

    toJson(): Object {
        return {
            id: this.id,
            name: this.name,
            speciality: this.speciality,
            email: this.email,
            phone: this.phone,
            street: this.street,
            houseNumber: this.houseNumber,
            postalCode: this.postalCode,
            city: this.city
        };
    }
}

class PatientHead {
    id: string;
    name: string;
    surname: string;
    kvr: string;

    constructor(json: {
        id: string;
        name: string;
        surname: string;
        kvr: string;
    }) {
        this.id = json.id;
        this.name = json.name;
        this.surname = json.surname;
        this.kvr = json.kvr;
    }

    toJson(): Object {
        return {
            id: this.id,
            name: this.name,
            surname: this.surname,
            kvr: this.kvr
        };
    }
}

const getDoctor = async (doctorId: number): Promise<Doctor> => {
    const doctorURL = API_CONFIG.getDoctorURL(doctorId);
    const js = await API_CONFIG.sendRequest(doctorURL, 'GET', "");
    return new Doctor(js);
}

const createDoctor = async (data: Doctor): Promise<Doctor> => {
    const js = await API_CONFIG.sendRequest(API_CONFIG.doctorsUrl(), 'POST', data.toJson());
    return new Doctor(js);
}

const updateDoctor = async (data: Doctor): Promise<Doctor> => {
    const doctorURL = API_CONFIG.getDoctorURL(data.id!);
    const js = await API_CONFIG.sendRequest(doctorURL, 'PUT', data.toJson());
    return new Doctor(js);
}

const deleteDoctor = async (doctorId: number) => {
    const doctorURL = API_CONFIG.getDoctorURL(doctorId);
    await API_CONFIG.sendRequest(doctorURL, 'DELETE', "");
}

const addPatientToDoctor = async (doctorId: number, patientId: number): Promise<PatientHead> => {
    const doctorURL = API_CONFIG.getDoctorURL(doctorId);
    const js = await API_CONFIG.sendRequest(`${doctorURL}/patients`, 'POST', { "patientId": patientId });
    return new PatientHead(js);
}

const searchPatients = async (doctorId: number, query: number): Promise<PatientHead[]> => {
    const doctorURL = API_CONFIG.getDoctorURL(doctorId);
    const js = await API_CONFIG.sendRequest(`${doctorURL}/patients/search/${query}`, 'GET', "");
    return js.map((p: any) => new PatientHead(p));
}

const removePatientFromDoctor = async (doctorId: number, patientId: number) => {
    const doctorURL = API_CONFIG.getDoctorURL(doctorId);
    await API_CONFIG.sendRequest(`${doctorURL}/patients/${patientId}`, 'DELETE', "");
}

export {
    getDoctor,
    createDoctor,
    updateDoctor,
    deleteDoctor,
    addPatientToDoctor,
    searchPatients,
    removePatientFromDoctor,
    Doctor,
    PatientHead
};
