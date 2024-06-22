"use client";
import React from 'react'; 
import { Card } from 'primereact/card';
import {motion} from 'framer-motion';

export default function CardElement({
    title = "Title", 
    text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!", 
    className = ""} : {
    title?: string,
    text?: any,
    className?: string
    }
) {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15 }}
            whileTap={{ scale: 0.975 }}
            whileHover={{ scale: 1.005, backgroundColor: "var(--primary)", color: "var(--onPrimary)", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
        
            className={className + " card"}>
            <Card className="headline" title={title}>
                <p className="text m-0 opacity-90">
                    {text}
                </p>
            </Card>
        </motion.div>
    )
}
        