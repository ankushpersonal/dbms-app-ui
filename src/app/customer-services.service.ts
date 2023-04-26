import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from './settings';

@Injectable({
  providedIn: 'root'
})

export class CustomerServicesService {

  user: any = {};

  constructor(private http: HttpClient) {
    const userDetailsString = localStorage.getItem('userDetails');
    if (userDetailsString !== null) {
      this.user = JSON.parse(userDetailsString);
    }
  }
  
  // Add a customer to database
  signup(data: any) {
    return this.http.post<any>(`${API_URL}/customer/signup`, data);
  }

  // customer login
  login(data: any) {
    return this.http.post<any>(`${API_URL}/customer/login`, data);
  }

  // Get a customers vehicles
  getAllVehicles(customerid: Number) {
    return this.http.get(`${API_URL}/customer/vehicles/${customerid}`);
  }

  // Add a vehicle
  addVehicle(data: any){
    return this.http.post(`${API_URL}/customer/addVehicle`, data);
  }

  // Delete a record
  deleteRecord(entity: any, id: any) {
    return this.http.delete(`${API_URL}/customer/${entity}/${id}`);
  }

  // View all services offered
  getAllServices() {
    return this.http.get(`${API_URL}/customer/viewAllServices`);
  }

  // View shop locations
  getShopLocations() {
    return this.http.get(`${API_URL}/customer/viewAllShopLocations`);
  }

  scheduleAppointment(data: any) {
    return this.http.post(`${API_URL}/customer/scheduleAppointment`, data);
  }

  getAppointments(customerid: Number) {
    return this.http.get(`${API_URL}/customer/appointments/${customerid}`);
  }

  updateVehicle(formData: any) {
    return this.http.put(`${API_URL}/customer/updateVehicle`,  formData)
  }
  updateProfile(formData: any) {
    console.log(formData, "FD service");
    return this.http.put(`${API_URL}/customer/updateProfile`,  formData)
  }
}