

const account = {
    userId: localStorage.getItem('userId') || '',
    isDoctor: localStorage.getItem('isDoctor') === 'true' || false,
    loggedIn: false,

    login(isDoctor: boolean, userId: string) {
        localStorage.setItem('userId', userId);
        localStorage.setItem('isDoctor', String(isDoctor));
        this.loggedIn = true;
        this.isDoctor = isDoctor;
        this.userId = userId;
    },

    logout() {
        localStorage.removeItem('userId');
        localStorage.removeItem('isDoctor');
        this.isDoctor = false;
        this.userId = '';
        this.loggedIn = false;
    }
};

export default account;
