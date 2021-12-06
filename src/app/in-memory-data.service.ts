import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const bookings: Booking[] = [
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
        endDate: new Date("2021-02-28")
      },
      {
        id: 3,
        name: "Tim Steber",
        roomNumber: 78,
        startDate: new Date(),
        endDate: new Date("2021-05-05")
      },
      {
        id: 4,
        name: "Max Mustermann",
        roomNumber: 15,
        startDate: new Date(),
        endDate: new Date("2021-11-15")
      }
    ]
    return {bookings};
  }
}
