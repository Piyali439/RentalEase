import React, { useEffect, useState } from 'react';
import { getCars } from '../services/apiService';
import { CarFront } from 'lucide-react';

const ITEMS_PER_PAGE = 6;

function CarList({ onBook }) {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getCars()
      .then(data => {
        const availableCars = data.map(car => ({
          id: car.id,
          name: `${car.car} ${car.car_model}`,
          details: `${car.car_color} · ${car.car_model_year}`,
          price: car.price,
          vin: car.car_vin,
          available: car.availability,
        }));
        setCars(availableCars);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const totalPages = Math.ceil(cars.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedCars = cars.slice(start, start + ITEMS_PER_PAGE);

  if (loading)
    return <div className="text-center text-lg text-gray-600 mt-10 animate-pulse">Fetching available cars...</div>;

  if (error)
    return <p className="text-center text-red-600 mt-10">Error loading cars: {error}</p>;

  return (
    <section className="py-14 px-6 bg-gray-50" id="cars">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-12 flex items-center justify-center gap-3">
          <CarFront className="w-8 h-8 text-blue-700" />
          Explore Our Fleet
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedCars.map(car => (
            <article
              key={car.id}
              className={`border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] ${
                car.available ? 'bg-white' : 'bg-gray-100 opacity-60'
              }`}
            >
              <div className="mb-4 space-y-1">
                <h3 className="text-xl font-semibold text-gray-800">{car.name}</h3>
                <p className="text-gray-500 text-sm">{car.details}</p>
                <p className="text-xs text-gray-400">VIN: {car.vin}</p>
              </div>

              <div className="flex items-center justify-between mt-6">
                <div className="text-xl font-bold text-blue-700">{car.price} <span className="text-sm font-normal">/ day</span></div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${car.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {car.available ? 'Available' : 'Not Available'}
                </span>
              </div>

              <button
                className="w-full mt-6 bg-blue-700 text-white py-2 rounded-lg font-medium hover:bg-blue-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                onClick={() => onBook(car.name)}
                disabled={!car.available}
              >
                {car.available ? '🚗 Book Now' : 'Unavailable'}
              </button>
            </article>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="font-semibold">{currentPage} / {totalPages}</span>
          <button
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

export default CarList;
