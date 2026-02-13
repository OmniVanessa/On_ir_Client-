import { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
export default function Admin() {
  const navigate = useNavigate();
  const [isUdpating, setIsUpdating] = useState(false)
  const [status, setStatus] = useState("Disponible 😊");
  const [ticker, setTicker] = useState("");
  const [bgColor, setBgColor] = useState("#1f2937");
  const [textColor, setTextColor] = useState("#f9fafb");

  useEffect(() => {
    const fetchCurrentStatus = async () => {
      try {
        const response = await fetch('/api/client/get-status');
        if (response.ok) {
          const data = await response.json();
          setStatus(data.category);
          setTicker(data.message);
          setBgColor(data.bg_color);
          setTextColor(data.text_color);
        }
      } catch (error) {
        console.error("Error al obtener estado inicial:", error);
      }
    };
    fetchCurrentStatus();
  }, []);
  const handleUpdate = async () => {
    setIsUpdating(true);
    try {
      const response = await fetch('/api/admin/update-status',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body:JSON.stringify({
        category:status,
        message:ticker,
        bg_color:bgColor,
        text_color:textColor 
    }),
  });
  if(response.ok){
  }
}catch (error) {
  console.error("Eroror al actualizar:", error);
} finally {
  setIsUpdating(false);
}
  };

    return (


    <div className="min-h-screen bg-gray-900  items-center justify-center text-white p-4 flex-col">

      <div className="w-full max-w-2xl bg-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-700 mx-auto mt-48">
        
        <h1 className="text-4xl font-bold text-center mb-8">Control panel </h1>

        
        <div className=" font-bold text-center py-4 rounded-xl mb-6 text-2xl transition-all duration-300"
        style={{backgroundColor:bgColor, color: textColor}}>
        <h1>{status}</h1>
        </div>

        
        <div className="bg-gray-700 p-6 rounded-xl mb-6 space-y-4">
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full bg-gray-900 p-3 rounded-lg mt-1 border border-gray-600 focus:outline-none focus:border-blue-500"
          />
          
          <hr className="my-6 border-t border-gray-600" />
          <label className="text-sm opacity-70">Scrolling Message (ticker):</label>
          <input
            type="text"
            value={ticker}
            onChange={(e) => setTicker(e.target.value)}
            className="w-full bg-gray-900 p-3 rounded-lg mt-1 border border-gray-600 text-center"
          />

          
          <div className="grid grid-cols-2 gap-4 mt-4 ">
            <div className="flex gap-2 ">
              <span className="text-sm">Background:</span>
              <div className="flex items-center gap-2 ">
                <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="w-10 h-10 cursor-pointer bg-transparent " />

              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm">Text:</span>
              <div className="flex items-center gap-2 ">
                <input type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} className="w-10 h-10 cursor-pointer bg-transparent " />
              </div>
            </div>
          </div>
        </div>
        <hr className="border-gray-600 mb-6" />

        
        <div className="grid grid-cols-3 gap-3 font-semibold text-sm">

          <button onClick={() => setStatus("EN REUNION", "#dc262626")} className="bg-red-600 py-2 rounded-lg">EN REUNIÓN </button>
          <button onClick={() => setStatus("NO MOLESTAR","#ef4444")} className="bg-red-500 py-2 rounded-lg">NO MOLESTAR </button>
          <button onClick={() => setStatus("TRABAJANDO","#b91c1c")} className="bg-green-600 py-2 rounded-lg">TRABAJANDO </button>

          <button onClick={() => setStatus("LLAMADA", "#16a34a")} className="bg-blue-700 py-2 rounded-lg">LLAMADA </button>
          <button onClick={() => setStatus("DESCANSO / CAFÉ", "#6b7280")} className="bg-orange-700 py-2 rounded-lg">DESCANSO / CAFÉ </button>
          <button onClick={() => setStatus("ALMUERZO", "#ca8a04", "#000000")} className="bg-yellow-600 py-2 rounded-lg">ALMUERZO </button>

          <button onClick={() => setStatus("VUELVO EN BREVE", "#6b7280")} className="bg-gray-500 py-2 rounded-lg">VUELVO EN BREVE </button>
          <button onClick={() => setStatus("DISPONIBLE", "#dc262626" )} className="bg-green-500 py-2 rounded-lg">DISPONIBLE </button>
          <button onClick={() => setStatus("FUERA DE CASA", "#b91c1c" )} className="bg-teal-700 py-2 rounded-lg">FUERA DE CASA </button>

          <button onClick={() => setStatus("ON AIR" ,"#dc262626")} className="bg-red-700 py-2 rounded-lg">ON AIR</button>
          <button onClick={() => setStatus("OFF AIR","#dc262626")} className="bg-gray-700 py-2 rounded-lg">OFF AIR</button>
          <button onClick={() => setStatus("PLEASE WAIT", "#eab308", "#000000" )} className="bg-yellow-500 py-2 rounded-lg text-black">PLEASE WAIT</button>

          <button onClick={() => setStatus("RECORDING", "#16a34a")} className="bg-red-700 py-2 rounded-lg">RECORDING</button>
          <button onClick={() => setStatus("EN REUNION","#dc262626")} className="bg-red-800 py-2 rounded-lg">EN REUNION</button>
        </div>
        <div className="mt-4">
          
          <button 
          onClick={handleUpdate}
          disabled={isUdpating}
          className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-bold text-lg ">
            {isUdpating ? "Actualizando..": "Update Satus"}
          </button>
        </div>
      </div>

    </div>
  );
}