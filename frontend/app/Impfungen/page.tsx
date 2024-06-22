"use client";
import TreeTable from "../components/TreeTable"
import HeaderNav from "../components/HeaderNav"
import SideNav from "../components/SideNav";
import { useEffect, useState } from "react";
import { Vaccination, getVaccinations } from "../api/vaccination";
import { Allergy, getAllergies } from "../api/allergy";

export
 default function Home() {


  // const [allergies, setAllergies] = useState<Allergy[]>([]);

  // const urlParams = new URLSearchParams(window.location.search)
  // const patientId = parseInt(urlParams.get('patientId') || "1");
  
  // useEffect(() => {
  //   getAllergies(patientId).then((allergies) => setAllergies(allergies));
  // }, []);

  const vaccinations = [
    new Vaccination({
      id: 1,
      patientId: 1,
      administeringDoctor: {
        id: 1,
        name: "Dr. Mustermann",
        phone: "0123456789",
        email: " ",
        speciality: "Allgemeinmedizin",
        postalCode: "12345",
        city: "Musterstadt",
        street: "Musterstraße 1",
        houseNumber: "1"
      },
      vaccineName: "Covid19",
      vaccinationDate: new Date(),
      notificationDate: new Date(),
      dose: "1"

    })
  ]



  return (
     <main className="main-grid grid content-center" >
        
        <HeaderNav></HeaderNav>
        <SideNav/>
        <div className="p-4">
            <TreeTable
              nodes = {
                vaccinations.map((vaccination) => {
                  return {
                    key: vaccination.id,
                    data: {
                      art: 'Impfung',
                      datum: vaccination.vaccinationDate.toLocaleDateString("de-DE"),
                      impfstoffname: vaccination.vaccineName,
                      arzt: vaccination.administeringDoctor.name,
                      naechsterTermin: vaccination.notificationDate.toLocaleDateString("de-DE")
                    },
                  }
                })
              }
            />
        </div>

    </main>
  );
}