import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Region } from '../models/region.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private http: HttpClient) { }

  fetchRegions() {
    return this.http.get<{ statusCode: number, message: string, data: Region[] }>('https://commex-api.onrender.com/regions')
      .pipe(map(
        response => {
          const responseArray: Region[] = Array.from(response.data);
          return responseArray;
        }
      ));
  }
}
