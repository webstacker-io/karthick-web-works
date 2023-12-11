import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  public appData: any;

  constructor(private http: HttpClient) {}

  getAppData(): any {
    return this.appData;
  }

  async fetchData() {
    await firstValueFrom(this.http.get(environment.apiUrl + 'api/karthickwebworks')).then((data: any) => {
      this.appData = data;
    });
  }
}
