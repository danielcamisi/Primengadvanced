import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarefas } from './ofs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OfsService {

  private readonly API = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  show(){
    return this.http.get<Tarefas[]>(this.API)
      .pipe(
        tap(console.log)
      );
}
}
