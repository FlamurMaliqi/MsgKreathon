"use client";
import Befunde from "../components/Befunde";
import HeaderNav from "../components/HeaderNav";
import SideNav from "../components/SideNav";
import { useState } from "react";

export default function Benachrichtigung() {
  const [email, setEmail] = useState("");

  return (
    <div className="p-6 h-[60vh]">
        <h3 className="headline font-bold flex flex-row mb-4">Patienten benachrichtigen</h3>
        <input
            className="appearance-none block w-full bg-gray-100 text-[var(--onTritary)] border-[var(--onTritary)] border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:ring-2 focus:ring-[var(--onTritary)] transition-all duration-300"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email-Adresse"
        />

        <button
            className="bg-[var(--onTritary)] hover:bg-[var(--primary)] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition-transform duration-300"
            onClick={() => {
                // send email to backend
                console.log("Button clicked, email:", email);
            }}
        >
            Abschicken
        </button>
    </div>
  );
}
