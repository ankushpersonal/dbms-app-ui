import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from './settings';

@Injectable({
  providedIn: 'root'
})
export class ShopServicesService {

  shop: any = {};

  constructor(
    private http: HttpClient
  ) {
    const userDetailsString = localStorage.getItem('userDetails');
    if (userDetailsString !== null) {
      this.shop = JSON.parse(userDetailsString);
    }
  }
    // Add a manager to database
    signup(data: any) {
      return this.http.post<any>(`${API_URL}/shop/signup`, data);
    }

    login(data: any) {
      return this.http.post<any>(`${API_URL}/shop/login`, data);
    }

    viewAllParts(locationId: any) {
      return this.http.get<any>(`${API_URL}/shop/parts/${locationId}`)
    }

    updatePartPrice(part: any, newPrice: any) {
      return this.http.put(`${API_URL}/shop/parts`, {partData: part.part_id, price: newPrice});
    }

    updateServicePrice(service: any, newPrice: any) {
      return this.http.put(`${API_URL}/shop/services`, {service_type: service.service_type, vehicle_type: service.vehicle_type, price: newPrice});
    }

    viewAllAppointments(locationId: any) {
      return this.http.get<any>(`${API_URL}/shop/appointments/${locationId}`)
    }
    updateAppointmentInfo(appointmentId: any, formData: any) {
      console.log(formData, "FD FD SVC");
      return this.http.put(`${API_URL}/shop/appointments/${appointmentId}`, formData)
    }
}

