import React from 'react';
import { motion } from 'framer-motion';

function Hero({ onBrowseClick }) {
  return (
    <motion.section
      id="home"
      tabIndex={-1}
      aria-label="Welcome section"
      className="bg-blue-600 text-white py-20 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-4">Rent Your Dream Car Today</h1>
        <p className="text-lg mb-6">
          RentalEase offers a premium selection of vehicles to fit your travel needs.
          Explore our fleet and book your car with ease.
        </p>
        <button
          onClick={() => onBrowseClick('cars')}
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-200"
          aria-label="Browse available cars"
        >
          🚗 Browse Cars
        </button>
      </div>

      {/* <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
        {carData.map((car) => (
          <motion.article
            key={car.id}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            role="listitem"
            tabIndex={0}
            aria-label={`${car.name}, ${car.details}, $${car.price} per day`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: car.id * 0.1 }}
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{car.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{car.details}</p>
              <div className="text-blue-600 dark:text-blue-400 font-bold text-lg">
                ${car.price} <span className="text-sm font-normal text-gray-500 dark:text-gray-400">/ day</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div> */}
    </motion.section>
  );
}

// const carData = [
//   {
//     id: 1,
//     name: 'Toyota Corolla',
//     details: 'Sedan · Automatic · 5 seats',
//     price: 40,
//     image:
//       'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2b013107-438d-4b2c-a1e2-cb809d77acad.png',
//   },
//   {
//     id: 2,
//     name: 'Ford Mustang',
//     details: 'Coupe · Manual · 4 seats',
//     price: 75,
//     image:
//       'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/03a02df9-c5f9-4e4e-95db-cd776eece36d.png',
//   },
//   {
//     id: 3,
//     name: 'Honda CR-V',
//     details: 'SUV · Automatic · 5 seats',
//     price: 60,
//     image:
//       'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f612d83e-b749-44dc-a220-4da8c9404395.png',
//   },
//   {
//     id: 4,
//     name: 'Tesla Model 3',
//     details: 'Electric Sedan · Automatic · 5 seats',
//     price: 90,
//     image:
//       'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7377ef5d-46b8-4934-b3f8-05fa82403a1f.png',
//   },
// ];

export default Hero;
