import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-dashboard',
  templateUrl: './flight-dashboard.component.html',
  styleUrls: ['./flight-dashboard.component.css']
})
export class FlightDashboardComponent implements OnInit {
  allFlights = [
    { name: 'Indigo', number: '6E101', from: 'Delhi', to: 'Mumbai', departure: '08:00 AM', status: 'on-time' },
    { name: 'SpiceJet', number: 'SG202', from: 'Bangalore', to: 'Chennai', departure: '09:30 AM', status: 'delayed' },
    { name: 'Air India', number: 'AI303', from: 'Delhi', to: 'Kolkata', departure: '11:00 AM', status: 'cancelled' },
    { name: 'Indigo', number: '6E104', from: 'Mumbai', to: 'Delhi', departure: '01:00 PM', status: 'on-time' },
    { name: 'Vistara', number: 'UK404', from: 'Chennai', to: 'Delhi', departure: '03:00 PM', status: 'unknown' },
    { name: 'SpiceJet', number: 'SG505', from: 'Hyderabad', to: 'Pune', departure: '02:00 PM', status: 'on-time' },
    { name: 'GoAir', number: 'G801', from: 'Pune', to: 'Delhi', departure: '04:00 PM', status: 'delayed' },
    { name: 'Indigo', number: '6E707', from: 'Bangalore', to: 'Mumbai', departure: '06:00 PM', status: 'cancelled' },
    { name: 'SpiceJet', number: 'SG808', from: 'Delhi', to: 'Hyderabad', departure: '08:00 PM', status: 'on-time' },
    { name: 'Air India', number: 'AI909', from: 'Mumbai', to: 'Chennai', departure: '10:00 PM', status: 'unknown' }
  ];

  flightsToDisplay: {
    name: string;
    number: string;
    from: string;
    to: string;
    departure: string;
    status: string;
  }[] = [];
  showFiltered = false;

  ngOnInit() {
    this.flightsToDisplay = [...this.allFlights];
  }

  toggleFilter() {
    this.showFiltered = !this.showFiltered;
    this.flightsToDisplay = this.showFiltered
      ? this.allFlights.filter(f => f.name === 'Indigo' || f.name === 'SpiceJet')
      : [...this.allFlights];
  }
}
