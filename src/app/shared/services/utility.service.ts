import { Injectable } from '@angular/core';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material/snack-bar';
import { MessageType } from '../models/message-type';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  constructor(public snackBar: MatSnackBar) { }

  openSnackBar(message: string, messageType: MessageType) {
    const config = new MatSnackBarConfig();
    config.duration = 10000;
    config.panelClass = [messageType];
    config.verticalPosition = 'bottom';
    config.horizontalPosition = 'center';

    const snackBarRef = this.snackBar.open(message, "Dismiss", config);
    snackBarRef.onAction().subscribe(() => this.snackBar.dismiss());
  }
}
