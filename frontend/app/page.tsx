"use client";
import SideNav from "./components/SideNav";
import HeaderNav from './components/HeaderNav';
import Card from './components/Card';
import Account from "./api/account";
import { useEffect, useState } from "react";
import { Patient, getPatient } from "./api/patient";
import { Doctor, getDoctor } from "./api/doctor";
import { IoAddSharp } from "react-icons/io5";
import AddDialog from "./components/AddDialog";
import account from './api/account';
import { getDrugs } from "./api/drug";
import { getReport, getReports } from "./api/report";
import { Allergy, getAllergies } from "./api/allergy";
import { getEmergencyContact } from "./api/ermergency";

// dashboard
export default function Home() {

  const [personalData, setPersonalData] = useState<string>();
  const [drugs, setDrugs] = useState<string>();
  const [reports, setReports] = useState<string>();
  const [textAllergie, setTextAllergie] = useState<string>("");
  const [title, setTextTitle] = useState<string>();
  var patientID = Account.userId;
  // get patientId from URL
  const urlParams = new URLSearchParams(window.location.search);
  if (account.isDoctor){
    patientID = parseInt(urlParams.get('patientId') || "-1");
  }
  useEffect(() => {
    getPatient(patientID).then(async (patient) => {
      await getEmergencyContact(patient.id!).then((emergencyContact) => {
        if (emergencyContact != null){
          patient.emergencyContact = emergencyContact;
        }
      });
      console.log(patient.emergencyContact)
      setPersonalData(
        "Name: " + patient.name + " " + patient.surname + "\n" +
        "Krankenversicherungsnummer: " +patient.kvr + "\n" +
        "Adresse: " + patient.street + " " + patient.houseNumber + " " + patient.postalCode + " " + patient.city + "\n" +
        "Telefon: " + patient.phone + "\n" + 
        "Email: " + patient.email + "\n" + 
        "Geburtsdatum: " + (new Date(patient.birthday)).toLocaleDateString("de-DE") + "\n" +
        
        ((patient.emergencyContact == null || patient.emergencyContact.name == undefined) ? "" : (
            "Notfallkontakt: " + patient.emergencyContact?.name + "\n" + 
            "Notfallkontakttelefon: " + patient.emergencyContact?.phone + "\n"
        )));
    });
 

    getDrugs(patientID).then((drugs) => {
      var drugString = "";
      drugs.forEach((drug) => {
        drugString += drug.name + " - " + drug.dosage + "\n";
      });
      if (drugString == ""){
        drugString = "Keine Medikamente vorhanden";
      }
      setDrugs(drugString);
    });

    getReports(patientID).then((reports) => {
      var reportString = "";
      reports.forEach((report) => {
        reportString += report.diagnosis.illness + " - " + report.findings + "\n";
      });
      if (reportString == ""){
        reportString = "Keine Befunde vorhanden";
      }
      setReports(reportString);
    });
  }, []);


  if (!Account.loggedIn) {
    window.location.href = '/login';
  }

  const termineText = 
  "August" + "\n" + 
  "04.08.2024 - 10:00: Impfung"+ "\n" + 
  "12.08.2024 - 14:00: Blutabnahme" + "\n\n" +
  "September" + "\n" + 
  "01.09.2024 - 12:00: Stresstest" + "\n" + 
  "15.09.2024 - 08:00: OP-Vorbesprechung"+ "\n";

  let toggleAllgerieTermine = <Card onClick={() => handleCardClick('/Krankheitsbild')} className="dashboard-area-b" title="Allergie" text={"Keine Allergien vorhanden"} />;
  if (Account.isDoctor && textAllergie == "") {
    getAllergies(patientID).then((allergies: Allergy[]) => {
      let toggleAllgerieTermineText = "";
      allergies.forEach((allergy) => {
        console.log(allergy);
        toggleAllgerieTermineText += allergy.allergen + " - " + allergy.reaction + "\n";
      });
      console.log(toggleAllgerieTermineText);
      if (toggleAllgerieTermineText != "" || toggleAllgerieTermineText != null && (toggleAllgerieTermine && toggleAllgerieTermineText.length > 0)) {
        setTextAllergie(toggleAllgerieTermineText);

      }else{
        setTextAllergie("Keine Allergien vorhanden");
      }
      setTextTitle("Allergien");
    });

    toggleAllgerieTermine = <Card onClick={() => handleCardClick('/Krankheitsbild')} className="dashboard-area-b" title="Allergie" text={textAllergie} />



    if (patientID == -1) {
      window.location.href = '/choosePatient';
    }
  }else if(textAllergie == ""){

    setTextTitle("Termine");
    setTextAllergie(termineText);
  }
  const [open, setOpen] = useState(false);
  const [dialogData, setData] = useState({} as any);
  const [dialogContent, setDialogContent] = useState('' as string);

  const handleToggleDialog = () => {
    setOpen(true);

    const content = dialogData.diagnose; //dialogData.diagnosis.illness + '\n' + dialogData.diagnosis.description + '\n' + dialogData.diagnosis.severity + '\n' + dialogData.diagnosis.dateDiagnosed;
    setDialogContent(content);
    console.log(content)
  };

  const handleCardClick = (path: string) => {
    window.location.href = `${path}?patientId=${patientID}`;
  };

  return (
    <main className="main-grid grid min-h-screen">
      <HeaderNav/>
      <SideNav activeID={0}/>
      <div className="content dashboard-grid h-[92vh] w-[88vw] overflow-scroll p-4 grid gap-4">
        <Card onClick={() => handleCardClick('/persoehnlicheDaten')} className="dashboard-area-a" title="Persöhnliche Daten" text={personalData} />
        <Card onClick={() => handleCardClick('/Krankheitsbild')} className="dashboard-area-b" title={title} text={textAllergie} />
        <Card onClick={() => handleCardClick('/Medikamente')} className="dashboard-area-c" title="Medikamente" text={drugs} />
        <Card onClick={() => handleCardClick('/Befunde')} className="dashboard-area-d" title="Befunde" text={reports} />
      </div>
      <span className={account.isDoctor ? "absolute z-40 right-4 bottom-4" : "hidden"}><IoAddSharp size={50} className="bg-black rounded-[100px] text-white hover:text-[var(--tritary)] hover:bg-[var(--primary)]" onClick={() => handleToggleDialog()} /></span>

      <AddDialog openToggle={open} setOpen={setOpen} title={"Update"} data={"Langer Kontnet"} />

    </main>
  );
}