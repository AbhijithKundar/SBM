import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, NgZone } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from 'src/app/pages/shared/confirm-dialog/confirm-dialog.component';
import { BusDetailsDialogComponent } from '../bus-details-dialog/bus-details-dialog.component';


@Component({
  selector: 'sbm-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.scss']
})
export class BusListComponent implements OnInit {
  listBus = [
    {
      name: 'Bus 1', 
      description: 'Route is madippakkam'
    },
    {
      name: 'Bus 2', 
      description: 'Route is madippakkam'
    },
    {
      name: 'Bus 3', 
      description: 'Route is madippakkam'
    },
    {
      name: 'Bus 4', 
      description: 'Route is madippakkam'
    },
    {
      name: 'Bus 5', 
      description: 'Route is madippakkam'
    },
    {
      name: 'Bus 6', 
      description: 'Route is madippakkam'
    },
  ]
  constructor(public dialog: MatDialog) { }
  
  ngOnInit() {  }

  deleteItem(idx: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: {title: '', lblData: "Do you want to delete?", data: {}}
    });
    dialogRef.afterClosed().subscribe(result => { });
  }

  addItem() {
    this.openDialogue({});
  }


  editItem(idx: number) { 
    this.openDialogue({});
  }

  openDialogue(data: any) {
    const dialogRef = this.dialog.open(BusDetailsDialogComponent, {
      width: '1226px',
      data: {data: data}
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
}
