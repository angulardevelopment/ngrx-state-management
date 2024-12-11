import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { FavoriteProduct } from '../models/FavoriteProduct';
import { Observable } from 'rxjs';
import { selectProducts } from '../Selector';
import { AppState } from '../models/AppState';
import { Router } from '@angular/router';
import { add } from '../action';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  favoritesProducts:Observable<Array<FavoriteProduct>> = this.store.pipe(select(selectProducts))
  product: FavoriteProduct = {  id: 1,
    name: 'string',
    price: 123,
    image: 'string', isFavorite: false};
    
  constructor(private readonly storageService:StorageService<FavoriteProduct[]>,
    private router: Router,  private store:Store<AppState>){}

  addProductToFavorites(product:FavoriteProduct){
     const favoriteProduct:FavoriteProduct = {
       ...product,
       isFavorite: true
     }
     this.store.dispatch(add({product}));
     console.log('added')
   }


  ngOnInit(): void {
  }

}
