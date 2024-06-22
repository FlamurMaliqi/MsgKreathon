import React from 'react'; 
import { Card } from 'primereact/card';

export default function CardElement({className = ""}) {
    return (
        <div className={className + " card"}>
            <Card className="headline" title="Simple Card">
                <p className="text m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                    numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </p>
            </Card>
        </div>
    )
}
        