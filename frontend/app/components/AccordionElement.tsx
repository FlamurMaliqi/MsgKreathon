import React from 'react';
import { Accordion, AccordionTab, AccordionTabProps } from 'primereact/accordion';

export default function AccordionElement({ labels = ["Test"], values = ["Test"]}) {
    return (
        <div className="card h-fit">
            <Accordion activeIndex={0}>
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
        </div>
    )
}
        