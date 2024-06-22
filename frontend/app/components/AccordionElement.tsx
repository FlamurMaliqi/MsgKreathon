import React from 'react';
import { Accordion, AccordionTab, AccordionTabProps } from 'primereact/accordion';

export default function AccordionElement({ labels = ["Test"], values = ["Test"]}) {
    return (
        <div className="card">
            <Accordion activeIndex={0}>
                {labels.map((label: string , index: any) => (
                    <AccordionTab key={index} header={label}>
                        <p className="m-0">
                            {values[index]}
                        </p>
                    </AccordionTab>
                ))}
            </Accordion>
        </div>
    )
}
        