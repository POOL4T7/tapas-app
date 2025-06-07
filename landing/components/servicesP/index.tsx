import React from 'react';

const TapasMundoS = (props: any) => {
  const data = props.data;

  return (
    <div className="">
      <header className="text-left mb-8">
        {data.title && (
          <div className="text-2xl text-center py-2 rounded-lg px-4 sm:text-2xl font-bold mb-4">
            {data.title}
          </div>
        )}
        {data.description && (
          <p className="mt-4 text-base text-md leading-relaxed">
            {data.description}
          </p>
        )}
      </header>

      {data.whyChooseUs?.title && (
        <section className="mb-12">
          <div className="text-xl sm:text-xl md:text-xl font-semibold p-2  bg-[gold] rounded-lg px-4">
            {data.whyChooseUs.title}
          </div>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            {data.whyChooseUs.points?.map((point: any, index: any) => (
              <li key={index} className="text-gray-700 text-sm md:text-md">
                {point}
              </li>
            ))}
          </ul>
        </section>
      )}

      {data.occasions?.title && (
        <section className="mb-12">
          <div className="text-xl sm:text-xl md:text-xl font-semibold p-2  bg-[gold] rounded-lg px-4">
            {data.occasions.title}
          </div>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            {data.occasions.points?.map((occasion: any, index: any) => (
              <li key={index} className="text-gray-700 text-sm md:text-md">
                {occasion}
              </li>
            ))}
          </ul>
        </section>
      )}

      {data.signatureDishes?.title && (
        <section className="mb-12">
          <div className="text-xl sm:text-xl md:text-xl font-semibold p-2  bg-[gold] rounded-lg px-4">
            {data.signatureDishes.title}
          </div>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            {data.signatureDishes.points?.map((dish: any, index: any) => (
              <li key={index} className="text-gray-700 text-sm md:text-md">
                {dish}
              </li>
            ))}
          </ul>
        </section>
      )}

      {data.howToBook?.title && (
        <section className="mb-12">
          <div className="text-xl sm:text-xl md:text-xl font-semibold p-2  bg-[gold] rounded-lg px-4">
            {data.howToBook.title}
          </div>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            {data.howToBook.steps?.map((step: any, index: any) => (
              <li key={index} className="text-gray-700 text-sm  md:text-md">
                {step}
              </li>
            ))}
          </ul>
        </section>
      )}

      {data.contact && (
        <section className="mb-12">
          <div className="text-xl sm:text-xl md:text-xl font-semibold p-2  bg-[gold] rounded-lg px-4">
            Contact Information
          </div>
          <div className="space-y-4 pt-2">
            {data.contact.phone && (
              <p className="text-gray-700 text-sm sm:text-base md:text-lg">
                Phone: {data.contact.phone}
              </p>
            )}
            {data.contact.website && (
              <p className="text-gray-700 text-sm md:text-md">
                Website:{' '}
                <a href={data.contact.website} className="text-blue-500 underline">
                  {data.contact.website}
                </a>
              </p>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default TapasMundoS;
