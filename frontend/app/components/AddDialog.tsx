import { useEffect, useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import EditImpfungen from "../Impfungen/Edit/page";
import EditAllergie from "../Krankheitsbild/EditAllergie/page";
import EditDiagnose from "../Krankheitsbild/EditDiagnose/page";
// import EditTermin from "../Termin/EditTermin

interface DialogComponentProps {
    openToggle: boolean;
    setOpen: (value: boolean) => void;
    title: string;
    data: string;
}

export default function DialogComponent({ openToggle, setOpen, title, data }: DialogComponentProps) {
    useEffect(() => {
        setOpen(openToggle);
    }, [openToggle, setOpen]);

    const [mode, setMode] = useState("Impfungen");

    const renderContent = () => {
        switch (mode) {
            case "Diagnose":
                return <EditDiagnose />;
            case "Impfungen":
                return <EditImpfungen />;
            case "Allergie":
                return <EditAllergie />;
            case "Termin":
                window.location.href = '/choosePatient';
            default:
                return null;
        }
    };

    return (
        <Dialog className="relative z-10" open={openToggle} onClose={() => setOpen(false)}>
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-2xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div className="bg-white flex">
                            {/* Side Navigation */}
                            <div className="bg-[var(--tritary)] w-fit p-4">
                                <nav className="flex flex-col  pt-4 justify-between space-y-2 h-full">
                                    <a href="#" onClick={() => setMode("Diagnose")} className="text-[var(--onPrimary)] bg-[var(--onTritary)] hover:bg-[var(--primary)] p-2 rounded">Diagnose</a>
                                    <a href="#" onClick={() => setMode("Impfungen")} className="text-[var(--onPrimary)] bg-[var(--onTritary)] hover:bg-[var(--primary)] p-2 rounded">Impfungen</a>
                                    <a href="#" onClick={() => setMode("Allergie")} className="text-[var(--onPrimary)] bg-[var(--onTritary)] hover:bg-[var(--primary)] p-2 rounded">Allergie</a>
                                    <a href="#" onClick={() => setMode("Termin")} className="text-[var(--onPrimary)] bg-[var(--onTritary)] hover:bg-[var(--primary)] p-2 rounded">Partient wechseln</a>
                                </nav>
                            </div>
                            
                            {/* Main Content */}
                            <div className="w-fit h-fit p-4">
                                {renderContent()}
                                <div className="absolute bottom-4 right-4">
                                    <button
                                        type="button"
                                        className="hover:bg-[var(--primary)] hover:text-[var(--onPrimary)] mt-3 inline-flex w-full justify-center rounded-md bg-white p-1 text-sm font-semibold text-gray-900 border border-[var(--primary)]"
                                        onClick={() => setOpen(false)}
                                        data-autofocus
                                    >
                                        Schließen
                                    </button>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
}
