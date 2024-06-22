import { getDoctor, Doctor } from "./doctor";
import { getPatient, Patient } from "./patient";

const account = {
    userId: parseInt(localStorage.getItem('userId') || '-1'),
    isDoctor: localStorage.getItem('isDoctor') === 'true' || false,
    loggedIn: localStorage.getItem('userId') !== null,
    userName: localStorage.getItem('userName') || '',
    async login(isDoctor: boolean, userId: number) {
        // check if doctor or patient exists
        var success = true;
        if (isDoctor) {
            await getDoctor(userId).catch(() => {
                alert('Doctor does not exist');
                success = false;
            }).then((doctor: void | Doctor) => {
                if (!doctor) {
                    return;
                }
                localStorage.setItem('userName', doctor.name);
            });
        } else {
            await getPatient(userId).catch(() => {
                alert('Patient does not exist');
                success = false;
            }).then((patient: void | Patient) => {
                if (!patient) {
                    return;
                }
                localStorage.setItem('userName', patient.name + ' ' + patient.surname);
            });
        }
        if (!success) {
            return;
        }
        localStorage.setItem('userId', userId.toString());
        localStorage.setItem('isDoctor', String(isDoctor));
        this.loggedIn = true;
        this.isDoctor = isDoctor;
        this.userId = userId;
    },

    logout() {
        localStorage.removeItem('userId');
        localStorage.removeItem('isDoctor');
        localStorage.removeItem('userName');
        this.isDoctor = false;
        this.userId = -1;
        this.loggedIn = false;
        this.userName = '';
    }
};

export default account;
