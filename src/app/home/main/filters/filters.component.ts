import { Component, OnInit } from '@angular/core';
import { Region } from '../../../shared/models/region.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent implements OnInit {
  loadedRegions: Region[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchRegions();
  }

  private fetchRegions() {
    this.http.get<{ statusCode: number, message: string, data: Region[] }>('http://localhost:3000/regions')
      .pipe(map(
        response => {
          const responseArray: Region[] = Array.from(response.data);
          return responseArray;
        }
      ))
      .subscribe(regions => {
        console.log(regions);
        this.loadedRegions = regions;
    })
  }
}
