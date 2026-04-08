import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private apiUrl = 'https://www.namastubhyamdecor.com/Home/SendEnquiry';

  constructor(private http: HttpClient) {}

  sendEmail(data: any) {

    const body = new URLSearchParams();
    body.set('Name', data.name);
    body.set('Email', data.email);
    body.set('Mobile', data.mobile);
    body.set('Service', data.service);
    body.set('Message', data.message);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post(this.apiUrl, body.toString(), { headers });
  }
}