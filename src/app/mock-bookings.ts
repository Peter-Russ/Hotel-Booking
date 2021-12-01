import { Booking } from "./booking";

export const Bookings: Booking[] = [
  {
    id: 1,
    name: "Peter Schwarz",
    roomNumber: 100,
    startDate: new Date(),
    endDate: new Date("2021-08-22")
  },
  {
    id: 2,
    name: "Martin Wolf",
    roomNumber: 30,
    startDate: new Date(),
    endDate: new Date("2021-08-22")
  },
  {
    id: 3,
    name: "Tim Steber",
    roomNumber: 78,
    startDate: new Date(),
    endDate: new Date("2021-08-22")
  },
  {
    id: 4,
    name: "Max Mustermann",
    roomNumber: 15,
    startDate: new Date(),
    endDate: new Date("2021-08-22")
  }
];
