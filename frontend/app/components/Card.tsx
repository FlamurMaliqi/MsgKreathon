"use client";
import React from 'react'; 
import { Card } from 'primereact/card';
import {motion} from 'framer-motion';

export default function CardElement({
    title = "", 
    text = "",
    className = "",
    onClick = () => {}
    } : {
    title?: string,
    text?: any,
    className?: string,
    onClick?: () => void
    }
) {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15 }}
            whileTap={{ scale: 0.975 }}
            whileHover={{ scale: 1.005, backgroundColor: "var(--primary)", color: "var(--onPrimary)", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
        
            className={className + " card"}
            onClick={onClick}
        >
            <Card className="headline" title={title}>
                <p className="text m-0 opacity-90">
                    {text.split("\n").map((item: any, key: any) => {
                        return <span key={key}>{item}<br/></span>
                    })}
                </p>
            </Card>
        </motion.div>
    )
}
