import API_CONFIG from './api_config';

class Report {
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

const getReport = async (patientId: string, diagnosisId: string): Promise<Report> => {
    const diagnosisURL = API_CONFIG.getReportURL(patientId, diagnosisId);
    const js = await API_CONFIG.sendRequest(diagnosisURL, 'GET', "");
    return new Report(js);
}

const getReports= async (patientId: string): Promise<Report> => {
    const diagnosisURL = API_CONFIG.getReportsURL(patientId);
    const js = await API_CONFIG.sendRequest(diagnosisURL, 'GET', "");
    return js.map((item: any) => new Report(item));
}

const createReport = async (patientId: string, data: Report): Promise<Report> => {
    const diagnosisURL = API_CONFIG.getReportsURL(patientId);
    const js = await API_CONFIG.sendRequest(diagnosisURL, 'POST', data);
    return new Report(js);
}

const updateReport = async (patientId: string, data: Report): Promise<Report> => {
    const diagnosisURL = API_CONFIG.getReportURL(patientId, data.id);
    const js = await API_CONFIG.sendRequest(diagnosisURL, 'PUT', data);
    return new Report(js);
}

const deleteReport = async (patientId: string, diagnosisId: string) => {
    const diagnosisURL = API_CONFIG.getReportURL(patientId, diagnosisId);
    await API_CONFIG.sendRequest(diagnosisURL, 'DELETE', "");
}

export {
    getReport,
    getReports,
    createReport,
    updateReport,
    deleteReport,
    Report
};
