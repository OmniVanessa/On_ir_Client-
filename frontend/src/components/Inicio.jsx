import { useNavigate } from "react-router-dom";
export default function Inicio() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">

            
            <h1 className="text-6xl font-extrabold mb-12 tracking-wide text-red-500 drop-shadow-[0_0_15px_rgba(255,0,0,0.7)]">
                ON AIR BOARD
            </h1>

          
            <div className="flex gap-10">

                {/* Botón Admin */}
                <button 
                onClick={() => navigate("/Admin")}
                className="px-8 py-4 text-2xl font-semibold rounded-xl bg-blue-600 hover:bg-blue-700 
                           shadow-[0_0_20px_rgba(0,120,255,0.6)] hover:shadow-[0_0_30px_rgba(0,150,255,0.9)]
                           transition-all duration-300">
                    Admin Panel 
                </button>

                {/* Botón View Board */}
                <button
                onClick={() => navigate("/Client")}
                className="px-8 py-4 text-2xl font-semibold rounded-xl bg-green-600 hover:bg-green-700 
                           shadow-[0_0_20px_rgba(0,255,120,0.6)] hover:shadow-[0_0_30px_rgba(0,255,150,0.9)]
                           transition-all duration-300">
                    View Board
                </button>

            </div>
        </div>
    );
}
 