import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { createClient } from 'contentful';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  public appData: any;
  private client = createClient({
    space: environment.space,
    accessToken: environment.accessToken,
  });



  constructor(private http: HttpClient) {}

  getAppData(): any {
    return this.appData;
  }

  async fetchData() {
     await this.client.getEntry(environment.contentId).then((response: any) => this.appData = response);
  }
}
