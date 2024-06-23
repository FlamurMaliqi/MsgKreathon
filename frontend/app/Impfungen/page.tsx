"use client";
import TreeTable from "../components/TreeTable"
import HeaderNav from "../components/HeaderNav"
import SideNav from "../components/SideNav";
import { useEffect, useState } from "react";
import { Vaccination, getVaccinations } from "../api/vaccination";
import AddDialog from "../components/AddDialog";
import { IoAddSharp } from "react-icons/io5";
import account from '../api/account';

export
 default function Home() {

  
  const [open, setOpen] = useState(false);
  const handleToggleDialog = () => {
    setOpen(true);
  };


  const [vaccinations, setVaccinations] = useState<Vaccination[]>([]);

  const urlParams = new URLSearchParams(window.location.search)
  const patientId = parseInt(urlParams.get('patientId') || "1");
  
  useEffect(() => {
    getVaccinations(patientId).then((vaccinations) => setVaccinations(vaccinations));
  }, []);


  // const vaccinations = [
  //   new Vaccination({
  //     id: 1,
  //     patientId: 1,
  //     administeringDoctor: {
  //       id: 1,
  //       name: "Dr. Mustermann",
  //       phone: "0123456789",
  //       email: " ",
  //       speciality: "Allgemeinmedizin",
  //       postalCode: "12345",
  //       city: "Musterstadt",
  //       street: "Musterstraße 1",
  //       houseNumber: "1"
  //     },
  //     vaccineName: "Covid19",
  //     vaccinationDate: new Date(),
  //     notificationDate: new Date(),
  //     dose: "1"

  //   })
  // ]



  return (
     <main className="main-grid grid content-center" >
        
        <HeaderNav/>
        <SideNav activeID={4}/>
        <div className="p-4 w-[88vw]">
            <TreeTable
          nodes={vaccinations.map((vaccination) => {
            return {
              key: vaccination.id,
              data: {
                art: 'Impfung',
                datum: vaccination.vaccinationDate.toLocaleDateString("de-DE"),
                impfstoffname: vaccination.vaccineName,
                arzt: vaccination.administeringDoctor.name,
                naechsterTermin: vaccination.notificationDate.toLocaleDateString("de-DE")
              },
            };
          })} onRowClick={undefined}            />
        </div>
        <span className={account.isDoctor ? "absolute z-40 right-4 bottom-4" : "hidden"}><IoAddSharp size={50} className="bg-black rounded-[100px] text-white hover:text-[var(--tritary)] hover:bg-[var(--primary)]" onClick={() => handleToggleDialog()}/></span>
        <AddDialog openToggle={open} setOpen={setOpen} title={"Update"} data={"Langer Kontnet"} />

    </main>
  );
}