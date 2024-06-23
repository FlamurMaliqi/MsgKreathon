"use client";
import Krankheitsbild from "../components/Krankheitsbild"
import HeaderNav from "../components/HeaderNav"
import SideNav from "../components/SideNav";
import AccordionElement from "../components/AccordionElement";  
import { useEffect, useState } from "react";

import { Allergy, getAllergies } from "../api/allergy";
import { Diagnosis, getDiagnoses } from "../api/diagnosis";
import AddDialog from "../components/AddDialog";
import { IoAddSharp } from "react-icons/io5";

export default function Home(this: any) {

  const [allergies, setAllergies] = useState<Allergy[]>([]);
  // const [diagnoses, setDiagnoses] = useState<Diagnosis[]>([]);
  
  const [open, setOpen] = useState(false);

  const urlParams = new URLSearchParams(window.location.search)
  const patientId = parseInt(urlParams.get('patientId') || "1");
    useEffect(() => {
      getAllergies(patientId).then((allergies) => setAllergies(allergies));
      // getDiagnoses(patientId).then((diagnoses) => setDiagnoses(diagnoses));
    }, []);

    // const allergies = [
    //   new Allergy({
    //     id: 1,
    //     patientId: 1,
    //     allergen: "Gräser Roggen",
    //     reaction: "Niesen",
    //     severity: "Mittel",
    //     dateDiagnosed: new Date(),
    //     notes: "Allergie gegen Gräser Roggen"
    //   })
    // ]
  
    if (allergies.length == 0) {
      return <div>Loading...</div>;
    }

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

  const handleToggleDialog = () => {
    setOpen(true);
  };

  return (
    <main className="main-grid grid">
    <HeaderNav/>
    <SideNav activeID={2}/>
      <div className="content h-[92vh] overflow-scroll p-4 w-[88vw]">
        <h3 className="headline text-[var(--onTritary)] leading-none">Allergien</h3>
        <AccordionElement 
          labels={allergies.map((allergy) => allergy.allergen)}
          values={allergies.map((allergy) => 
            allergy.allergen + "\n" + 
            allergy.reaction + "\n" + 
            allergy.severity + "\n" + 
            new Date(allergy.dateDiagnosed).toLocaleDateString("de-De") + "\n" + 
            allergy.notes
          )}
        />

        <h3 className="headline text-[var(--onTritary)] pt-4 leading-none">Krankheitsbild</h3>
        <Krankheitsbild 
          diagnoses={diagnoses}
        />
      </div>
      <span className="absolute z-40 right-4 bottom-4"><IoAddSharp size={50} className="bg-black rounded-[100px] text-white hover:text-[var(--tritary)] hover:bg-[var(--primary)]" onClick={() => handleToggleDialog()}/></span>
      <AddDialog openToggle={open} setOpen={setOpen} title={"Update"} data={"Langer Kontnet"} />

    </main>
  );
}