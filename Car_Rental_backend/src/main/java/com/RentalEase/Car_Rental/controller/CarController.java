package com.RentalEase.Car_Rental.controller;

import jakarta.validation.Valid;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.RentalEase.Car_Rental.model.Car;
import com.RentalEase.Car_Rental.service.CarService;


@RestController
@RequestMapping("/api/cars")
@CrossOrigin(origins = "http://localhost:3000")
public class CarController {
    
    private final CarService carService;

    public CarController(CarService carService){
        this.carService = carService;
    }

    @GetMapping
    public ResponseEntity<List<Car>> getAllCars(){
        return ResponseEntity.ok(carService.getAllCars());
        
    }


    @PostMapping
    public ResponseEntity<Car> addCar(@Valid @RequestBody Car car){
        Car savedCar = carService.addCar(car);
        return ResponseEntity.ok(savedCar);
    }


    
}
