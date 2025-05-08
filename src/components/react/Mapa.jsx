import { useEffect, useState } from 'react';

const markers = [
    { id: 'monterrey', top: '30%', left: '47%', text: "Monterrey", img: '/images/mapa/Monterrey.webp' },
    { id: 'altamira', top: '46%', left: '54%', text: "Altamira", img: '/images/mapa/Altamira.webp'  },
    { id: 'sanLuis', top: '54%', left: '46%', text: "San Luis Potosí", img: '/images/mapa/Monterrey.webp' },
    { id: 'veracruz', top: '64%', left: '58%', text: "Veracruz", img: '/images/mapa/Altamira.webp' },
    { id: 'manzanillo', top: '65%', left: '36%', text: "Manzanillo", img: '/images/mapa/Altamira.webp' },
];

export default function MapaInteractivo({ lang }) {
    const [activeMarker, setActiveMarker] = useState(null);


    const toggleMarker = (id) => {
        setActiveMarker((prev) => (prev === id ? null : id));
    };

    const closeMarker = () => {
        setActiveMarker(null);
    };


    return (
        <section className="w-full bg-[#939392]" onClick={closeMarker}>
            <div className="relative w-full max-w-4xl mx-auto">
                <img src={ lang === "es" ? "/images/mapa/mapa.webp" : "/images/mapa/mapaENG.webp"} alt="Mapa" className="w-full h-auto" />

                {markers.map((marker) => (
                    <div
                        key={marker.id}
                        onClick={(e) => {
                            e.stopPropagation(); 
                            toggleMarker(marker.id);
                        }}
                        className="absolute cursor-pointer"
                        style={{ top: marker.top, left: marker.left }}
                    >
                       

                        <span className="relative flex size-7">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping"></span>
                            <span className="relative inline-flex size-7 rounded-full bg-white"></span>
                        </span>

                        
                        <div className='absolute w-full'>
                            <div
                                className={`relative -top-25 left-4 transform -translate-x-1/2 transition-all duration-300 
                                    ${
                                        activeMarker === marker.id
                                            ? 'opacity-100 translate-y-0'
                                            : 'opacity-0 translate-y-4 pointer-events-none'
                                    }
                                    ${
                                        marker.id === "monterrey" 
                                            ? 'size-28 -top-26' :
                                        marker.id === "sanLuis"
                                            ? 'size-28 -top-26'
                                            : 'size-32 -top-25'
                                    }
                                `}
                            >
                                <div>
                                    <img
                                        src={marker.img}
                                        alt={marker.id}
                                        className="w-full h-full object-contain"
                                    />
                                    <span 
                                        className={`text-white text-center text-shadow-lg/80
                                            ${ 
                                                marker.id === "altamira" ? "text-base ml-9" : 
                                                marker.id === "monterrey" ? "text-base ml-6" : 
                                                marker.id === "sanLuis" ? "text-sm ml-4" : 
                                                marker.id === "veracruz" ? "text-base ml-9" : 
                                                marker.id === "manzanillo" ? "text-base ml-8" : ""
                                            }`}
                                        >
                                            {marker.text}
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}

            </div>
        </section>
    );
}