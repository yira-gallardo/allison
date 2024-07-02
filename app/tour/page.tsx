import React from 'react';

const TourSection = () => {
  const tourDates = [
    {
      date: 'Ago. 27',
      venue: 'Metropolitan',
      city: 'Ciudad de México',
    },
      {
      date: 'Sep. 19',
      venue: 'Teatro Morelos',
      city: 'Toluca',
    },
      {
      date: 'Sep. 20',
      venue: 'Teatro Estudio Guanamor',
      city: 'Guadalajara',
    },
      {
      date: 'Sep. 21',
      venue: 'Auditorio La Isla',
      city: 'Merida',
    },
      {
      date: 'Sep. 22',
      venue: 'Showcenter',
      city: 'Monterrey',
    },
      {
      date: 'Oct. 04',
      venue: 'Auditorio Explanada',
      city: 'Puebla',
    },

  ];

  return (
    <div className=" py-12">
      <h2 className="text-4xl font-bold text-center mb-8">TOUR</h2>
      <div className="max-w-4xl mx-auto">
        {tourDates.map((tour, index) => (
          <div key={index} className="grid grid-cols-3 items-center py-4 border-b border-gray-300">
            <div className="text-center">
              <p className="font-semibold">{tour.date}</p>
              <p>{tour.venue}</p>
            </div>
            <div className="text-center">
              <p className="font-semibold">{tour.city}</p>
            </div>
            <div className="text-center">
              <button className="bg-black text-white py-2 px-4">
                TICKETS
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourSection;
