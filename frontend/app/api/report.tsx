import API_CONFIG from './api_config';
import { Diagnosis } from './diagnosis';
class Report {
    id?: number;
    patientId: number;
    diagnosis: Diagnosis;
    findings: string;
    recommendations: string;
    date: Date;
    reportType: string;

    constructor(json: {
        id?: number;
        patientId: number;
        diagnosis: any;
        findings: string;
        recommendations: string;
        date: Date;
        reportType: string;
    }) {
        this.id = json.id;
        this.patientId = json.patientId;
        this.diagnosis = new Diagnosis(json.diagnosis);
        this.findings = json.findings;
        this.recommendations = json.recommendations;
        this.date = json.date;
        this.reportType = json.reportType;
    }

    toJson(): Object {
        return {
            id: this.id,
            patientId: this.patientId,
            diagnosis: this.diagnosis.toJson(),
            findings: this.findings,
            recommendations: this.recommendations,
            date: this.date,
            reportType: this.reportType,
        };
    }
}

const getReport = async (patientId: number, diagnosisId: number): Promise<Report> => {
    const diagnosisURL = API_CONFIG.getReportURL(patientId, diagnosisId);
    const js = await API_CONFIG.sendRequest(diagnosisURL, 'GET', "");
    return new Report(js);
}

const getReports= async (patientId: number): Promise<Report[]> => {
    const diagnosisURL = API_CONFIG.getReportsURL(patientId);
    const js = await API_CONFIG.sendRequest(diagnosisURL , 'GET', "");
    return js.map((item: any) => new Report(item));
}

const createReport = async (patientId: number, data: Report): Promise<Report> => {
    const diagnosisURL = API_CONFIG.getReportsURL(patientId);
    const js = await API_CONFIG.sendRequest(diagnosisURL, 'POST', data.toJson());
    return new Report(js);
}

const updateReport = async (patientId: number, data: Report): Promise<Report> => {
    const diagnosisURL = API_CONFIG.getReportURL(patientId, data.id!);
    const js = await API_CONFIG.sendRequest(diagnosisURL, 'PUT', data.toJson());
    return new Report(js);
}

const deleteReport = async (patientId: number, diagnosisId: number) => {
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
