import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, filter } from 'rxjs';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';
import { Router } from '@angular/router';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {

  matDialog = inject(MatDialog);
  productsService = inject(ProductsService);
  router = inject(Router);
  
  constructor() { 
    
  }

  openDialog(): Observable<boolean> {
    return this.matDialog
      .open(ConfirmDialogComponent)
      .afterClosed();
  }
}
