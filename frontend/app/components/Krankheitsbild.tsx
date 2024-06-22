import { Diagnosis } from '../api/diagnosis';
import Card from './Card';

export default function BasicDemo({diagnoses}:{diagnoses: Diagnosis[]}) {
    return (
        <div className="grid grid-cols-3 gap-4 p-4">
            {diagnoses.map((diagnosis, index) => (
                <div key={index} className='col-span-1 rounded-lg bg-gray-200 p-4'>
                    <Card 
                        title={diagnosis.illness} 
                        text={
                            "Diagnose von: " + diagnosis.issuedBy.name + "\n" +
                            "Schweregrad: " + diagnosis.severity + "\n" +
                            "Diagnose am: " + new Date(diagnosis.dateDiagnosed).toLocaleDateString('de-DE') + "\n" +

                            diagnosis.description
                        }
                        
                    />
                </div>
            ))}
        </div>
    );
}
