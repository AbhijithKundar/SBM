import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
  pageName = 'login';
  isLoading = false;
  constructor() { }
  updatePageName(pageName: string){
    this.pageName = pageName;
  }
  getPagename(){
    return localStorage.getItem('pageName');
  }
  getMenuData() {
    return {
      master:[
        { lbl: "Overview", 'routerLink':'', icon:"account_box"},
        { lbl: "Students", 'routerLink':'student', icon:"sports_handball"},
        { lbl: "Parents", 'routerLink':'parent', icon:"wc"},
        { lbl: "staffs", 'routerLink':'staff', icon:"airline_seat_recline_normal"},
        { lbl: "Stops", 'routerLink':'stop', icon:"sports"},
        { lbl: "Routes", 'routerLink':'route', icon:"directions"},
        { lbl: "Bus", 'routerLink':'bus', icon:"directions_bus"},
        { lbl: "Cameras", 'routerLink':'camera', icon:"local_see"}
      ],
      mapping:[
        { lbl: "Overview", 'routerLink':'', icon:"group"},
        { lbl: "Parents - Students", 'routerLink':'parent-student', icon:"wc"},
        { lbl: "Routes - Stops", 'routerLink':'route-stop', icon:"directions"},
        { lbl: "Bus - Routes", 'routerLink':'bus-route', icon:"directions_bus"},
        { lbl: "Cameras - Bus", 'routerLink':'camera-bus', icon:"local_see"},
        { lbl: "Staffs - Bus", 'routerLink':'staff-bus', icon:"airline_seat_recline_normal"},
        { lbl: "Parents - Bus", 'routerLink':'parent-bus', icon:"transfer_within_a_station"}
      ],
      schedule: [
        { lbl: "Overview", 'routerLink':'', icon:"date_range"},
        { lbl: "Leave Update", 'routerLink':'leave', icon:"bathtub" },
        { lbl: "Attendance", 'routerLink':'attendance', icon:"how_to_reg" },
      ]
    };
  }
}
