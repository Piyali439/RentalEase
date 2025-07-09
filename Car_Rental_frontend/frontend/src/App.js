import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CarList from './components/CarList';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Footer from './components/Footer';
//import BookingHistory from './components/BookingHistory';
import BookingForm from './components/BookingForm'; // merged component
import BookingSummary from './components/BookingSummary';

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalCarName, setModalCarName] = useState('');
  const [quickBookingCar, setQuickBookingCar] = useState('');

  const handleBookClick = (carName) => {
    setModalCarName(carName);
    setQuickBookingCar(carName);
    setModalVisible(true);
  };

  const handleModalClose = () => setModalVisible(false);

  const handleQuickBooking = (booking) => {
    alert(`Quick Booking Confirmed for ${booking.car}! Thank you.`);
  };

  const handleScrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <BrowserRouter>
      <Navbar onNavClick={handleScrollToSection} />

      <main>
        <section id="home">
          <Hero onBrowseClick={handleScrollToSection} />
        </section>

        <section id="cars">
          <CarList onBook={handleBookClick} />
        </section>

        <section id="booking">
          <BookingForm
            carName={quickBookingCar}
            onBooking={handleQuickBooking}
          />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />

      <BookingForm
        modal
        visible={modalVisible}
        carName={modalCarName}
        onClose={handleModalClose}
        onBooking={() => {}}
      />

      <Routes>
        <Route path="/summary" element={<BookingSummary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
