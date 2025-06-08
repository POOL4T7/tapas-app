import React from 'react';

const TapasMundoS = (props: any) => {
  const service = props.data;

  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-bold mb-2">{service.title}</h2>
      <p className="text-gray-600">{service.description}</p>

      {/* Render Sections Dynamically, excluding visitUs */}
      {Object.keys(service).map((key) => {
        if (key !== 'visitUs' && typeof service[key] === "object" && service[key].title) {
          return (
            <div key={key} className="mt-4">
              <div className="text-lg font-semibold">{service[key].title}</div>
              {service[key].points ? (
                <ul className="list-disc pl-5">
                  {service[key].points.map((point: any, index: any) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p>{service[key].description}</p>
              )}
            </div>
          );
        }

        return null;
      })}

      {/* Render the "visitUs" section at the end */}
      {service.visitUs && (
        <div className="mt-4">
          <div className="text-lg font-semibold">{service.visitUs.title}</div>
          <p>{service.visitUs.description}</p>
          {service.visitUs.contact.locations &&
          
          <div className="mt-2">
            <div className="text-md font-medium">Locations:</div>
            <ul className="list-disc pl-5">
              {service.visitUs.contact.locations.map((location: any, index: any) => (
                <li key={index}>{location}</li>
              ))}
            </ul>
          </div>
          }

          <div className="mt-2">
            <div className="text-md font-medium">Contact Information:</div>
            <p>Phone: {service.visitUs.contact.phone}</p>
            <p>Website: <a href={service.visitUs.contact.website} className="text-blue-500">{service.visitUs.contact.website}</a></p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TapasMundoS;
