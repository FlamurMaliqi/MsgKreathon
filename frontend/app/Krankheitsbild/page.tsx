"use client";
import Krankheitsbild from "../components/Krankheitsbild"
import HeaderNav from "../components/HeaderNav"
import SideNav from "../components/SideNav";
import AccordionElement from "../components/AccordionElement";  
import { useEffect, useState } from "react";

import { Allergy, getAllergies } from "../api/allergy";
import { Diagnosis, getDiagnoses } from "../api/diagnosis";

export default function Home(this: any) {

  // const [allergies, setAllergies] = useState<Allergy[]>([]);
  // const [diagnoses, setDiagnoses] = useState<Diagnosis[]>([]);


  const urlParams = new URLSearchParams(window.location.search)
  const patientId = parseInt(urlParams.get('patientId') || "1");
  // useEffect(() => {
  //   getAllergies(patientId).then((allergies) => setAllergies(allergies));
  //   getDiagnoses(patientId).then((diagnoses) => setDiagnoses(diagnoses));
  // }, []);

  const allergies = [
    new Allergy({
      id: 1,
      patientId: 1,
      allergen: "Gräser Roggen",
      reaction: "Niesen",
      severity: "Mittel",
      dateDiagnosed: new Date(),
      notes: "Allergie gegen Gräser Roggen"
    })
  ]

  const diagnoses = [
      new Diagnosis({
        id: 1,
        patientId: 1,
        issuedBy: {
          id: 1,
          name: "Dr. Mustermann",
          address: "Musterstraße 1",
          phone: "0123456789",
          email: " ",
          speciality: "Allgemeinmedizin"
        },
        illness: "Diabetis",
        description: "Husten seit 3 Wochen",
        severity: "Mittel",
        dateDiagnosed: new Date()
      }),
  ]


  return (
    <main className="main-grid grid">
    <HeaderNav></HeaderNav>
    <SideNav/>
      <div className="content h-[92vh] overflow-scroll p-4 w-[88vw]">
        <AccordionElement 
          labels={["Allergien"]}
          values={allergies.map((allergy) => allergy.allergen)}
        />
        <Krankheitsbild 
          diagnoses={diagnoses}
        />
      </div>
    </main>
  );
}