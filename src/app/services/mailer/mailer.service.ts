import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class MailerService {

  protected api: string;

  constructor(private http: Http) {
    this.api = environment.mailApi;
  }

  sendMail(data: any) {
    const body = new URLSearchParams(data);
    data = body.toString();
    return this.http.post(this.api, data, this.headAttach()).map(res => res.json());
  }

  private headAttach() {
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic YWRtaW46U3p6Py5vckpzbzIzTHNzaklPSTIu'
    });
    return new RequestOptions({ headers: headers });
  }
}
