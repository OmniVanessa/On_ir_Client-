import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Client() {
    const navigate = useNavigate();
    const [statusData, setStatusData] = useState(null);
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const fetchData = () => {
            fetch('http://localhost:8000/client/get-status')
                .then(res => res.json())
                .then(data => setStatusData(data))
                .catch((err) => console.error("Error al conectar con el servidor:", err));
        };
        fetchData();
        const interval = setInterval(fetchData, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const clockInterval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(clockInterval);
    }, []);
    if (!statusData) return <div className="bg-gray-900 text-white h-screen flex items-center justify-center">Cargando...</div>;
    


    
    const getColombiaTime = () => {
        const options = {
            timeZone: 'America/Bogota',
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };

        const formatter = new Intl.DateTimeFormat('es-CO', options);
        const parts = formatter.formatToParts(time);

        
        const dict = parts.reduce((acc, part) => ({ ...acc, [part.type]: part.value }), {});

        return {
            dia: dict.weekday.charAt(0).toUpperCase() + dict.weekday.slice(1),
            fechaCompleta: `${dict.day} de ${dict.month}`,
            hora: `${dict.hour}:${dict.minute}:${dict.second} ${dict.dayPeriod || ''}`
        };
    };

    const colombia = getColombiaTime();

    if (!statusData) return (
        <div className="bg-gray-900 text-white h-screen flex items-center justify-center font-bold">
            Cargando configuración...
        </div>
    );
    return (
        <div
            style={{ backgroundColor: statusData.bg_color, color: statusData.text_color }}
            className="h-screen flex flex-col items-center justify-center transition-colors duration-1000 p-6"
        >
            
            <div className="absolute top-10 text-center opacity-80">
                <h2 className="text-2xl font-light tracking-widest uppercase">
                    {colombia.dia}, {colombia.fechaCompleta}
                </h2>
                <h3 className="text-5xl font-mono mt-2 font-bold">
                    {colombia.hora}
                </h3>
            </div>

    <div className="flex-1 flex items-center justify-center">
        <h1 className="text-9xl font-black uppercase tracking-tighter animate-pulse text-center">
            {statusData.category}
        </h1>
    </div>
     <div className="w-screen mt-auto"> 
        <div className="bg-black/50 backdrop-blur-sm border-y border-white/10 overflow-hidden relative h-24 flex items-center shadow-2xl">
            <style>
                {`
                    @keyframes marquee {
                        0% { transform: translateX(100%); }
                        100% { transform: translateX(-100%); }
                    }
                    .marquee-text {
                        display: inline-block;
                        white-space: nowrap;
                        animation: marquee 20s linear infinite;
                    }
                `}
            </style>
            
            <p className="marquee-text text-6xl font-bold italic uppercase tracking-widest">
               
                {statusData.message} <span className="mx-10 opacity-30">•</span> {statusData.message} <span className="mx-10 opacity-30">•</span> {statusData.message}
            </p>
                </div>
            </div>
        </div>
    );
}