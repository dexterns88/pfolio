import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class MailerService {

  protected api: string;

  constructor(private http: Http) {
    this.api = 'http://mail.loc';
  }

  sendMail(data: any) {
    const body = new URLSearchParams(data);
    data = body.toString();
    return this.http.post(this.api, data, this.headAttach()).map(res => res.json());
  }

  private headAttach() {
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic YWRtaW46eHg='
    });
    return new RequestOptions({ headers: headers });
  }
}
