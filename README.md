
# 🚗 Ride Booking API

A secure, scalable, and role-based backend API for a ride booking system (like Uber or Pathao) built using **Node.js**, **Express.js**, **MongoDB**, and **TypeScript**.

---

## 🧠 Technologies Used

| Category   | Tools                             |
|------------|-----------------------------------|
| ⚙️ Runtime | Node.js                           |
| 🔧 Framework | Express.js                     |
| 🧠 Language | TypeScript                       |
| 🛢️ Database | MongoDB + Mongoose              |
| 🛡️ Security | JWT, bcrypt                     |
| 📦 Others   | cors, cookie-parser, zod, dotenv |

---

## 🏗️ Features

- Rider can request, cancel, and view ride history
- Driver can accept, complete, and view ride requests
- Admin can manage users and rides
- Role-based authentication and authorization
- Ride status lifecycle management
- Error handling and validation using Zod

---

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/showrov4g/Ride_management_app_backend.git
cd ride-booking-api
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup environment variables

Create a `.env` file in the root directory and add:

```
PORT=5000
DATABASE_URL=mongodb://localhost:27017/ride-booking
JWT_SECRET=your_secret_key
```

### 4. Run the server
```bash
npm run dev
```

---

## 📮 API Endpoints Overview
```bash
- base URL = http://localhost:5000
```
## auth routes 
```bash
-- post= http://localhost:5000/api/v1/auth/register
```

```bash
-- post= http://localhost:5000/api/v1/auth/login
```

## user routes
```bash
-- get = http://localhost:5000/api/v1/users/all 
```
```bash
-- patch= http://localhost:5000/api/v1/users/block/:id
```
```bash
-- patch= http://localhost:5000/api/v1/users/unblock/:id
```


## Rides api
```bash
-- post =  http://localhost:5000/api/v1/rides/request
```
```bash
-- patch =  http://localhost:5000/api/v1/cancel/:rideId
```
```bash
-- get =  http://localhost:5000/api/v1/rides/history
```


## driver api 
```bash
-- patch = http://localhost:5000/api/v1/driver/availability
```
```bash
-- get = http://localhost:5000/api/v1/driver/rides
```
```bash
-- get = http://localhost:5000/api/v1/driver/earnings
```
```bash
-- patch =http://localhost:5000/api/v1/driver/status/:rideId
```
```bash
-- patch=http://localhost:5000/api/v1/driver/accept/:rideId
```
```bash
-- patch=http://localhost:5000/api/v1/driver/reject/:rideId
```


## admin routes 
 ```bash
-- get= http://localhost:5000/api/v1/admin/users
```
```bash
-- get= http://localhost:5000/api/v1/admin/drivers
```
```bash
-- get= http://localhost:5000/api/v1/admin/rides
```
```bash
-- patch= http://localhost:5000/api/v1/admin/driver/approve/:id
```
```bash
-- patch= http://localhost:5000/api/v1/admin/driver/suspend/:id
```
```bash
-- patch= http://localhost:5000/api/v1/admin/user/block/:id
```
```bash
-- patch= http://localhost:5000/api/v1/admin/user/unblock/:id
```

## 👨‍💻 Project Structure

```
src/
├── app.ts
├── server.ts
├── modules/
│   ├── auth/
│   ├── user/
│   ├── rider/
│   ├── driver/
│   └── admin/
├── middleware/
├── utils/
└── config/




