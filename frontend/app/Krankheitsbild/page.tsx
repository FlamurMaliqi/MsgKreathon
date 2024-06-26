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
import account from "../api/account";
import enums from "../api/enums";

export default function Home(this: any) {

  const [allergies, setAllergies] = useState<Allergy[]>([]);
  const [diagnoses, setDiagnoses] = useState<Diagnosis[]>([]);
  
  const [open, setOpen] = useState(false);

  const urlParams = new URLSearchParams(window.location.search)
  const patientId = parseInt(urlParams.get('patientId') || "1");
  
  useEffect(() => {
    getAllergies(patientId).then((allergies) => setAllergies(allergies));
    getDiagnoses(patientId).then((diagnoses) => setDiagnoses(diagnoses));
  }, []);

  
    if (allergies.length == 0) {
      return <div>Keine Allergien registriert</div>;
    }


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
          labels={allergies.map((allergy) =>  enums.PossibleAllergens[allergy.allergen])}
          values={allergies.map((allergy) => 
            enums.PossibleAllergens[allergy.allergen] + "\n" + 
            allergy.reaction + "\n" + 
            enums.PossibleSeverities[allergy.severity] + "\n" + 
            new Date(allergy.dateDiagnosed).toLocaleDateString("de-De") + "\n" + 
            allergy.notes
          )}
        />

        <h3 className="headline text-[var(--onTritary)] pt-4 leading-none">Krankheitsbild</h3>
        <Krankheitsbild 
          diagnoses={diagnoses}
        />
      </div>
      <span className={account.isDoctor ? "absolute z-40 right-4 bottom-4" : "hidden"}><IoAddSharp size={50} className="bg-black rounded-[100px] text-white hover:text-[var(--tritary)] hover:bg-[var(--primary)]" onClick={() => handleToggleDialog()}/></span>
      <AddDialog openToggle={open} setOpen={setOpen} title={"Update"} data={"Langer Kontnet"} />

    </main>
  );
}