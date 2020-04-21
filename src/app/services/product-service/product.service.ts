import {Inject, Injectable} from '@angular/core';
import {API_CONFIG, ServicesModule} from '../services.module';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../../store/reducers/product.reducer';

@Injectable({
  providedIn: ServicesModule
})
export class ProductService {

  constructor(private http: HttpClient, @Inject(API_CONFIG) private url: string) { }

  getProduct(): Observable<any> {
     return this.http.get(this.url + '/products');
  }
}
