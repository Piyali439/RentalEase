import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { postBooking } from '../services/apiService';
import { X } from 'lucide-react';
import jsPDF from 'jspdf';
//import { useNavigate } from 'react-router-dom';

function BookingForm({ visible = false, modal = false, carName, onClose, onBooking }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedCar, setSelectedCar] = useState(carName || '');
  //const navigate = useNavigate();
  const [booking, setBookings] = useState({});


  useEffect(() => {
    setSelectedCar(carName);
  }, [carName]);


  const resetForm = () => {
    setFullName('');
    setEmail('');
    setStartDate('');
    setEndDate('');
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedCar || !fullName || !email || !startDate || !endDate) {
      alert('⚠️ Please fill in all fields.');
      return;
    }
    try {

      await postBooking({ carName: selectedCar, fullName, email, startDate, endDate });
      setBookings({ carName: selectedCar, fullName, email, startDate, endDate })
      const doc = new jsPDF();
      doc.text('RentalEase Invoice', 20, 20);
      doc.text(`Car: ${selectedCar}`, 20, 40);
      doc.text(`Name: ${fullName}`, 20, 50);
      doc.text(`Dates: ${startDate} to ${endDate}`, 20, 60);
      doc.text(`Email: ₹${email}`, 20, 70);
      doc.save(`invoice_${fullName}.pdf`);
      onBooking && onBooking({ car: selectedCar, fullName, email, startDate, endDate });
      resetForm();
      if (modal && onClose){
        onClose();
      }
    } catch (error) {
      alert('❌ Booking failed: ' + error.message);
    }
  };

  const form = (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Selected Car</label>
        <input
          type="text"
          readOnly
          value={selectedCar}
          className="w-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          placeholder="John Doe"
          className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="john@example.com"
          className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
            className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
            className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-md shadow-md transition-colors duration-300"
      >
        🚗 Confirm Booking
      </button>
    </form>
  );

  if (modal) {
    return (
      <AnimatePresence>
        {visible && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 w-full max-w-xl mx-4 rounded-xl shadow-2xl p-6 relative"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Booking Details</h2>
                <button onClick={onClose} className="text-gray-500 hover:text-red-600">
                  <X size={20} />
                </button>
              </div>
              {form}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  return (
    <motion.section
      id="booking"
      className="py-20 px-6 bg-white dark:bg-gray-900"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-800 dark:text-white">Book Your Car</h2>
        {form}
      </div>
    </motion.section>
  );
}

export default BookingForm;
