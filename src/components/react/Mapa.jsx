const Mapa = () => {
  const markers = [
    { id: "veracruz", top: "66%", left: "63%" },
    { id: "monterrey", top: "35%", left: "45%" },
    { id: "altamira", top: "41%", left: "51%" },
    { id: "manzanillo", top: "68%", left: "40%" },
    { id: "san-luis-potosi", top: "57%", left: "54%" },
  ];

  return (
    <div className="relative w-full h-screen bg-[#939393]">
      <div className="absolute inset-0 bg-[url('/images/mapa/mapa.png')] bg-contain bg-center bg-no-repeat" />

      {markers.map(({ id, top, left }) => (
        <img
          key={id}
          src="/images/mapa/ubicacion.png"
          alt={id}
          className="hidden md:block absolute w-5 lg:w-30"
          style={{ top, left, transform: "translate(-50%, -50%)" }}
        />
      ))}

      <div className="relative z-10 flex items-center justify-center h-full"></div>
    </div>
  );
};

export default Mapa;
