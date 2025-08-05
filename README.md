
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
git clone https://github.com/your-username/ride-booking-api.git
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

- base URL = http://localhost:5000

## auth routes 
-- post= http://localhost:5000/api/v1/auth/register
-- post= http://localhost:5000/api/v1/auth/login


## user routes
-- get = http://localhost:5000/api/v1/users/all 
-- patch= http://localhost:5000/api/v1/users/block/:id
-- patch= http://localhost:5000/api/v1/users/unblock/:id


## Rides api
-- post =  http://localhost:5000/api/v1/rides/request
-- patch =  http://localhost:5000/api/v1/cancel/:rideId
-- get =  http://localhost:5000/api/v1/rides/history


## driver api 
-- patch = http://localhost:5000/api/v1/driver/availability
-- get = http://localhost:5000/api/v1/driver/rides
-- get = http://localhost:5000/api/v1/driver/earnings
-- patch =http://localhost:5000/api/v1/driver/status/:rideId
-- patch=http://localhost:5000/api/v1/driver/accept/:rideId
-- patch=http://localhost:5000/api/v1/driver/reject/:rideId


## admin routes 
 
-- get= http://localhost:5000/api/v1/admin/users
-- get= http://localhost:5000/api/v1/admin/drivers
-- get= http://localhost:5000/api/v1/admin/rides
-- patch= http://localhost:5000/api/v1/admin/driver/approve/:id
-- patch= http://localhost:5000/api/v1/admin/driver/suspend/:id
-- patch= http://localhost:5000/api/v1/admin/user/block/:id
-- patch= http://localhost:5000/api/v1/admin/user/unblock/:id

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




