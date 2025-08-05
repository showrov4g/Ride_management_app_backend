
#  Ride Booking API

A secure, scalable, and role-based backend API for a ride booking system (like Uber or Pathao) built using **Node.js**, **Express.js**, **MongoDB**, and **TypeScript**.

-

##  Technologies Used

| Category   | Tools                             |
||-|
|  Runtime | Node.js                           |
|  Framework | Express.js                     |
|  Language | TypeScript                       |
|  Database | MongoDB + Mongoose              |
|  Security | JWT, bcrypt                     |
|  Others   | cors, cookie-parser, zod, dotenv |

-

##  Features

- Rider can request, cancel, and view ride history
- Driver can accept, complete, and view ride requests
- Admin can manage users and rides
- Role-based authentication and authorization
- Ride status lifecycle management
- Error handling and validation using Zod

-
## if you want to run this project in your own computer then follow this steps 
##  Setup Instructions

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

-

##  API Endpoints Overview
```bash
- base URL = https://ride-management-app-backend.vercel.app/
```
## auth routes 
register user
```bash
 post= https://ride-management-app-backend.vercel.app/api/v1/auth/register
```

Login user
```bash
 post= https://ride-management-app-backend.vercel.app/api/v1/auth/login
```

## user routes
get all user data
```bash
 get = https://ride-management-app-backend.vercel.app/api/v1/users/all 
```
user block
```bash
 patch= https://ride-management-app-backend.vercel.app/api/v1/users/block/:id
```
user unblock
```bash
 patch= https://ride-management-app-backend.vercel.app/api/v1/users/unblock/:id
```


## Rides api
request ride 
```bash
 post =  https://ride-management-app-backend.vercel.app/api/v1/rides/request
```
ride calcle
```bash
 patch =  https://ride-management-app-backend.vercel.app/api/v1/cancel/:rideId
```
ride history
```bash
 get =  https://ride-management-app-backend.vercel.app/api/v1/rides/history
```


## driver api 
driver availability
```bash
 patch = https://ride-management-app-backend.vercel.app/api/v1/driver/availability
```
driver rides
```bash
 get = https://ride-management-app-backend.vercel.app/api/v1/driver/rides
```
drivers earnings
```bash
 get = https://ride-management-app-backend.vercel.app/api/v1/driver/earnings
```
driver ride status check

```bash
 patch =https://ride-management-app-backend.vercel.app/api/v1/driver/status/:rideId
```
ride accept
```bash
 patch=https://ride-management-app-backend.vercel.app/api/v1/driver/accept/:rideId
```
ride reject
```bash
 patch=https://ride-management-app-backend.vercel.app/api/v1/driver/reject/:rideId
```


## admin routes 
get all users
 ```bash
 get= https://ride-management-app-backend.vercel.app/api/v1/admin/users
```
get all drivers
```bash
 get= https://ride-management-app-backend.vercel.app/api/v1/admin/drivers
```
get all rides
```bash
 get= https://ride-management-app-backend.vercel.app/api/v1/admin/rides
```
drivers approve
```bash
 patch= https://ride-management-app-backend.vercel.app/api/v1/admin/driver/approve/:id
```
drivers suspend

```bash
 patch= https://ride-management-app-backend.vercel.app/api/v1/admin/driver/suspend/:id

```
user block
```bash
 patch= https://ride-management-app-backend.vercel.app/api/v1/admin/user/block/:id
```
user unblock
```bash
 patch= https://ride-management-app-backend.vercel.app/api/v1/admin/user/unblock/:id
```

##  Project Structure

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




