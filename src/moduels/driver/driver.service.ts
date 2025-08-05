import { Types } from 'mongoose';
import { User } from '../user/user.model';
import { Ride, RideStatus, IRide } from '../ride/ride.model';


const updateAvailability = async (driverId: string, status: boolean) => {
  return await User.findByIdAndUpdate(driverId, { isOnline: status }, { new: true });
};

const getMyRides = async (driverId: string) => {
  return await Ride.find({ driver: driverId });
};

const getEarnings = async (driverId: string) => {
  const rides = await Ride.find({ driver: driverId, status: 'completed' });
  const total = rides.reduce((sum, ride) => sum + (ride.fare || 0), 0);
  return { total, count: rides.length };
};

const updateRideStatus = async (
  driverId: string,
  rideId: string,
  status: Exclude<RideStatus, 'requested' | 'accepted' | 'canceled'> 
) => {
  const allowed: RideStatus[] = ['picked_up', 'in_transit', 'completed'];
  if (!allowed.includes(status)) throw new Error('Invalid status');


  if (!Types.ObjectId.isValid(rideId)) throw new Error('Invalid ride ID');

  const ride = await Ride.findOne({ _id: rideId, driver: driverId });
  if (!ride) throw new Error('Ride not found');

  ride.status = status;

  if (!ride.statusHistory) ride.statusHistory = [];

  
  ride.statusHistory.push({ status, timeStamp: new Date() });

  await ride.save();
  return ride;
};


// const acceptRide = async (driverId: string, rideId: string) => {
//   if (!Types.ObjectId.isValid(rideId)) throw new Error('Invalid ride ID');

//   const ride = await Ride.findById(rideId);
//   if (!ride) throw new Error('Ride not found');
//   if (ride.status !== 'requested') throw new Error('Ride already accepted or canceled');

  
//   ride.driver = new Types.ObjectId(driverId);
//   ride.status = 'accepted';
//   ride.statusHistory = [{ status: 'accepted', timeStamp: new Date() }];
//   await ride.save();
//   return ride;
// };


const acceptRide = async (driverId: string, rideId: string) => {
  if (!Types.ObjectId.isValid(rideId)) throw new Error('Invalid ride ID');

  const ride = await Ride.findById(rideId);
  if (!ride) throw new Error('Ride not found');
  if (ride.status !== 'requested') throw new Error('Ride already accepted or canceled');

  ride.driver = new Types.ObjectId(driverId); // ✅ assign driver
  ride.status = 'accepted';

  // ✅ push instead of replacing history
  ride.statusHistory.push({ status: 'accepted', timeStamp: new Date() });

  await ride.save();

  return ride;
};


const rejectRide = async (driverId: string, rideId: string) => {
  if (!Types.ObjectId.isValid(rideId)) throw new Error('Invalid ride ID');

  const ride = await Ride.findOne({ _id: rideId, status: 'requested' });
  if (!ride) throw new Error('Ride not available to reject');

  return { message: 'Ride rejected (no change to db)' };
};

export const DriverServices = {
  updateAvailability,
  getMyRides,
  getEarnings,
  updateRideStatus,
  acceptRide,
  rejectRide,
};
