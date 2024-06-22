import API_CONFIG from './api_config';

class EmergencyContact {
    /*    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long iceId;
    @JoinColumn(name = "patientid", referencedColumnName = "patientid")
    private Long patientId;
    private String name;
    private String surname;
    private String relationship;
    private String email;
    private String phone;
    private String street;
    @Column(name ="housenumber")
    private String houseNumber;
    @Column(name ="postalcode")
    private String postalCode;
    private String city;
    */

    id?: number;
    name: string;
    patientId?: string;
    surname?: string;
    relationship?: string;
    email?: string;
    phone?: string;
    street?: string;
    houseNumber?: string;
    postalCode?: string;
    city?: string;

    constructor(json: {
        iceId?: number;
        name: string;
        patientId?: string;
        surname?: string;
        relationship?: string;
        email?: string;
        phone?: string;
        street?: string;
        houseNumber?: string;
        postalCode?: string;
        city?: string;
    }) {
        this.id = json.iceId;
        this.name = json.name;
        this.patientId = json.patientId;
        this.surname = json.surname;
        this.relationship = json.relationship;
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
            patientId: this.patientId,
            surname: this.surname,
            relationship: this.relationship,
            email: this.email,
            phone: this.phone,
            street: this.street,
            houseNumber: this.houseNumber,
            postalCode: this.postalCode,
            city: this.city,
        };
    }
}

const getEmergencyContact = async (patientId: number): Promise<EmergencyContact> => {
    const emergencyContactURL = API_CONFIG.getEmergencyContactURL(patientId);
    const js = await API_CONFIG.sendRequest(emergencyContactURL, 'GET', "");
    return new EmergencyContact(js);
}


const updateEmergencyContact = async (patientId: number, data: EmergencyContact): Promise<EmergencyContact> => {
    const emergencyContactURL = API_CONFIG.getEmergencyContactURL(patientId);
    const js = await API_CONFIG.sendRequest(emergencyContactURL, 'PUT', data.toJson());
    return new EmergencyContact(js);
}

const createEmergencyContact = async (patientId: number, data: EmergencyContact): Promise<EmergencyContact> => {
    const emergencyContactURL = API_CONFIG.getEmergencyContactURL(patientId);
    const response = await API_CONFIG.sendRequest(emergencyContactURL, 'POST', data.toJson());
    return new EmergencyContact(response);
}

const deleteEmergencyContact = async (patientId: number) => {
    const emergencyContactURL = API_CONFIG.getEmergencyContactURL(patientId);
    await API_CONFIG.sendRequest(emergencyContactURL, 'DELETE', "");
}

export {
    getEmergencyContact,
    updateEmergencyContact,
    createEmergencyContact,
    deleteEmergencyContact,
    EmergencyContact,
};