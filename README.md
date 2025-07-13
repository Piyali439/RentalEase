# 🚗 RentalEase - Online Car Rental Platform
RentalEase is a modern, user-friendly car rental application designed to streamline the process of renting vehicles for customers. This project showcases a full-stack implementation, integrating a responsive frontend with a robust backend, providing a seamless experience for users looking to rent their dream cars.

## ✨ Key Features

### ✅ User Side
- Browse available cars with real-time availability
- Book a car with full name, email, and date range
- Contact page with support information
- Responsive UI with clean dark/light layouts
- LocalStorage booking persistence

### 🔐 Auth & Validation
- Google/Guest login (Firebase-based)
- Booking date conflict validation
- Conditional rendering for available/unavailable cars

### 🛠 Admin Dashboard (Future)
- Add or remove car listings
- Manage all bookings
- View analytics (booking stats)

## 🛠️ Tech Stack

**Frontend**  
- React.js (SPA)
- Tailwind CSS (utility-first styling)
- Framer Motion (animations)

**Backend**  
- Spring Boot (RESTful APIs)
- Java

**Database**  
- MySQL (car and booking records)

**Other Tools**  
- Postman (API testing)
- Firebase (for lightweight auth)
- Git & GitHub

## 🚀 Getting Started

### 📦 Backend Setup (Spring Boot)
```bash
cd backend
# Update your MySQL credentials in `application.properties`
./mvnw spring-boot:run
```

### 🧱 Frontend Setup (React)
```bash
cd frontend
npm install
npm start
```
The app will run at: http://localhost:3000

###🧠 Future Improvements
-Razorpay/Stripe payment gateway integration
-Twilio or Oracle Cloud SMS OTP verification
-Admin analytics dashboard with charts
-Server-side pagination for large inventories
-Deployment on Netlify (Frontend) + Render or Oracle Cloud (Backend)

### 🙌 Contributing
Interested in contributing? Feel free to fork this repo and create a pull request.

### 📄 License
This project is licensed under the MIT License.

🔧 Feel free to star this repository if you found it helpful! ⭐





