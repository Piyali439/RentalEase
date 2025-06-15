package com.RentalEase.Car_Rental.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.RentalEase.Car_Rental.model.Car;
import com.RentalEase.Car_Rental.repository.CarRepository;


@Service
public class CarService {
    private final CarRepository carRepository;

    public CarService(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    public List<Car> getAllCars() {
        return carRepository.findAll();
    }

    public Car addCar(Car car) {
        return carRepository.save(car);
    }




    

    
    
}
