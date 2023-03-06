import { Component, OnInit } from '@angular/core';
import { remult } from 'remult';
import { Person } from '../ctrl-g/person';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  people: Person[] = [];
  ngOnInit() {
    remult
      .repo(Person)
      .find()
      .then((items) => (this.people = items));
  }
}
