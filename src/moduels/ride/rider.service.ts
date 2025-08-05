import { Ride, IRide } from '../ride/ride.model';

const requestRide = async (
  riderId: string,
  pickup: string,
  destination: string
): Promise<IRide> => {
  const existing = await Ride.findOne({
    rider: riderId,
    status: { $in: ['requested', 'accepted', 'picked_up', 'in_transit'] },
  });

  if (existing) {
    throw new Error('You already have an active ride');
  }

  const ride = await Ride.create({
    rider: riderId,
    pickup,
    destination,
    status: 'requested',
    statusHistory: [{ status: 'requested', timeStamp: new Date() }],
  });

  return ride;
};

const cancelRide = async (
  riderId: string,
  rideId: string
): Promise<IRide> => {
  const ride = await Ride.findOne({ _id: rideId, rider: riderId });

  if (!ride) throw new Error('Ride not found');

  if (ride.status !== 'requested') {
    throw new Error('Cannot cancel ride after it is accepted');
  }

  ride.status = 'canceled';
  ride.statusHistory.push({ status: 'canceled', timeStamp: new Date() });

  await ride.save();
  return ride;
};

const getRideHistory = async (riderId: string): Promise<IRide[]> => {
  return await Ride.find({ rider: riderId }).sort({ createdAt: -1 });
};

export const RiderService = {
  requestRide,
  cancelRide,
  getRideHistory,
};
