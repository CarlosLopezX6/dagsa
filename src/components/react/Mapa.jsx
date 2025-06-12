import { useState } from 'react';

const markers = [
    { id: 'monterrey', top: '30%', left: '47%', text: "Monterrey", img: '/images/mapa/Monterrey.webp' },
    { id: 'altamira', top: '46%', left: '54%', text: "Altamira", img: '/images/mapa/Altamira.webp' },
    { id: 'sanLuis', top: '54%', left: '46%', text: "San Luis Potosí", img: '/images/mapa/Monterrey.webp' },
    { id: 'veracruz', top: '64%', left: '58%', text: "Veracruz", img: '/images/mapa/Altamira.webp' },
    { id: 'manzanillo', top: '65%', left: '36%', text: "Manzanillo", img: '/images/mapa/Altamira.webp' },
];

export default function MapaInteractivo({ lang }) {
    const [activeMarker, setActiveMarker] = useState(null);

    // Función para verificar si el dispositivo es grande
    const isLargeScreen = () => window.innerWidth >= 1024;

    const toggleMarker = (id) => {
        setActiveMarker((prev) => (prev === id ? null : id));
    };

    const closeMarker = () => {
        setActiveMarker(null);
    };

    const handleMouseEnter = (id) => {
        if (isLargeScreen()) setActiveMarker(id);
    };

    const handleMouseLeave = () => {
        if (isLargeScreen()) setActiveMarker(null);
    };

    return (
        <section className="w-full bg-[#939392]" onClick={closeMarker}>
            <div className="relative w-full max-w-4xl mx-auto">
                <img
                    src={lang === "es" ? "/images/mapa/mapa.webp" : "/images/mapa/mapaENG.webp"}
                    alt="Mapa"
                    className="w-full h-auto"
                />

                {markers.map((marker) => (
                    <div
                        key={marker.id}
                        className="absolute cursor-pointer"
                        style={{ top: marker.top, left: marker.left }}
                        onClick={(e) => {
                            if (!isLargeScreen()) {
                                e.stopPropagation();
                                toggleMarker(marker.id);
                            }
                        }}
                        onMouseEnter={() => handleMouseEnter(marker.id)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <span className="relative flex size-5 md:size-7">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping"></span>
                            <span className="relative inline-flex size-5 md:size-7 rounded-full bg-white"></span>
                        </span>

                        <div className='absolute w-full'>
                            <div
                                className={`relative transform -translate-x-1/2 transition-all duration-300 
                                    ${
                                        activeMarker === marker.id
                                            ? 'opacity-100 translate-y-0'
                                            : 'opacity-0 translate-y-4 pointer-events-none'
                                    }
                                    ${
                                        marker.id === "monterrey" 
                                            ? 'size-32 -top-23 -left-10 md:size-36 md:-top-28 lg:size-44 lg:-top-30 md:-left-4' :
                                        marker.id === "sanLuis"
                                            ? 'size-32 -top-23 -left-10 md:size-36 md:-top-27 lg:size-44 lg:-top-30 md:-left-8' :
                                        marker.id === "altamira"
                                            ? 'size-32 -top-16 left-15 md:size-36 md:-top-27 lg:size-44 lg:-top-30 md:left-13' :
                                        marker.id === "veracruz"
                                            ? 'size-32 -top-20 left-13 md:size-36 md:-top-25 lg:size-44 lg:-top-28 md:left-15' :
                                        marker.id === "manzanillo"
                                            ? 'size-32 -top-23 -left-7 md:size-36 md:-top-27 lg:size-44 lg:-top-30 md-left-4'
                                            : ''
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
                                                marker.id === "monterrey" ? "text-lg ml-8 md:text-lg md:ml-9 lg:text-xl lg:ml-12" : 
                                                marker.id === "sanLuis" ? "text-base ml-4 md:text-base md:ml-6 lg:text-lg lg:ml-8" : 
                                                marker.id === "altamira" ? "text-lg ml-8 md:text-lg md:ml-11 lg:text-xl lg:ml-14" : 
                                                marker.id === "veracruz" ? "text-lg ml-8 md:text-lg md:ml-11 lg:text-xl lg:ml-14" : 
                                                marker.id === "manzanillo" ? "text-lg ml-7 md:text-lg md:ml-9 lg:text-xl lg:ml-12" : ""
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
