"use client";
import React from 'react';
import { Accordion, AccordionTab, AccordionTabProps } from 'primereact/accordion';
import { motion } from 'framer-motion';

export default function AccordionElement({ labels = ["Test"], values = ["Test"]}) {
    return (
        <motion.div className="card h-fit"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15 }}
            whileTap={{ scale: 0.9995 }}
            whileHover={{ scale: 1.005, backgroundColor: "var(--primary)", color: "var(--onPrimary)", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
        >
            <Accordion>
                {labels.map((label: string , index: any) => (
                    <AccordionTab key={index} header={label}>
                        <p className="m-0 mt-2">
                            {
                                values[index].split("\n").map((line: string, index: any) => (
                                    <span key={index}>{line}<br/></span>
                                ))

                            }
                        </p>
                    </AccordionTab>
                ))}
            </Accordion>
        </motion.div>
    )
}
        