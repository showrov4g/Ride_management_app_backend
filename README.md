
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

### 🔐 Auth
- `POST /api/v1/auth/register`
- `POST /api/v1/auth/login`

### 👤 Rider
- `POST /api/v1/rides/request` - Request a new ride
- `PATCH /api/v1/rides/cancel/:rideId` - Cancel ride
- `GET /api/v1/rides/history` - Rider's ride history

### 🚖 Driver
- `GET /api/v1/driver/rides` - See available rides
- `PATCH /api/v1/driver/accept/:rideId` - Accept a ride
- `PATCH /api/v1/driver/status/:rideId` - riding status

### 🛡️ Admin
- `GET /api/v1/admin/users`
- `PATCH /api/v1/admin/ban/:userId`
- `GET /api/v1/admin/rides`

---



---

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
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

