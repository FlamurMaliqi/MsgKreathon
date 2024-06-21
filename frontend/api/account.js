

export default {

    userId: localStorage.getItem('userId'),

    isDoctor: localStorage.getItem('isDoctor') || false,

    loggedIn: userId ? true : false,

    login (isDoctor, userId) {
        localStorage.setItem('userId', userId);
        localStorage.setItem('isDoctor',isDoctor);
        this.loggedIn = true;
        this.isDoctor = isDoctor;
        this.userId = userId;
    },

    logout () {
        localStorage.removeItem('userId');
        localStorage.removeItem('isDoctor');
        this.isDoctor = false;
        this.userId = undefined;
        this.loggedIn = false;
    }

}