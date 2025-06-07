import React from "react";

const locations = [
  {
    name: "Mundo Tapas Alt-Mariendorf",
    src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5007398.710594164!2d0.2966348!3d52.206704!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a845d8c64b03cb%3A0xd8b6934c5ea9abaf!2sMundo%20Tapas%20-%20Alt%20Mariendorf!5e0!3m2!1sen!2sin!4v1743943390146!5m2!1sen!2sin"
  },
  {
    name: "Mundo - Checkpoint Charlie",
    src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5007398.710594164!2d0.2966348!3d52.206704!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851e951c046d1%3A0xbb6deb5af60c9169!2sMundo%20Tapas%20-%20Checkpoint%20Charlie!5e0!3m2!1sen!2sin!4v1743943435100!5m2!1sen!2sin"
  },
  {
    name: "Mundo - Potsdamer Platz",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.741733254659!2d13.3777046!3d52.5096481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851cc3d4c7c75%3A0x258e11c6f4c61e61!2sPotsdamer%20Platz!5e0!3m2!1sen!2sde!4v1734818850866!5m2!1sen!2sde"
  }
];

export default function LocationSection() {
  return (
    <section className=" py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {locations.map((loc, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full h-64 rounded-xl overflow-hidden shadow-md">
                <iframe
                  src={loc.src}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <p className="mt-4 text-center text-lg font-medium text-[white]">{loc.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
