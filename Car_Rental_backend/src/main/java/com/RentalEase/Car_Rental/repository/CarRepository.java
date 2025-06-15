package com.RentalEase.Car_Rental.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.RentalEase.Car_Rental.model.Car;

@Repository
public interface CarRepository extends JpaRepository<Car, Long> {
    
}
