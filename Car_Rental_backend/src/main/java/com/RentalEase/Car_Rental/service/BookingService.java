package com.RentalEase.Car_Rental.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.RentalEase.Car_Rental.model.Booking;
import com.RentalEase.Car_Rental.repository.BookingRepository;

@Service
public class BookingService {

    private final BookingRepository bookingRepository;

    public BookingService(BookingRepository bookingRepository){
        this.bookingRepository = bookingRepository;
    }

    public Booking addBooking(Booking booking) {
        return bookingRepository.save(booking);
    }

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }
    
}
