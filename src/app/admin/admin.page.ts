import {Component, OnInit} from '@angular/core';
import {UserModel} from '../models/user.model';
import {AppService} from '../app.service';
import {MatTableDataSource} from '@angular/material';


@Component({
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss']
})
export class AdminPage implements OnInit {

  public dataSource: MatTableDataSource<UserModel>;

  public displayedColumns = ['firstName', 'lastName', 'address1', 'address2', 'city', 'state', 'zip', 'country', 'registrationDate'];

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getUsers().subscribe((results) => {
      this.dataSource = new MatTableDataSource(<UserModel[]>results);
      console.log(results);
    }, (error) => {
      console.log(error);
    });
  }
}
