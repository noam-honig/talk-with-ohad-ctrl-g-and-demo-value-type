import { Component, OnInit } from '@angular/core';
import { User } from './user';

import { DialogService } from '../common/dialog';
import { Roles } from './roles';

import { terms } from '../terms';
import { GridSettings } from 'common-ui-elements/interfaces';
import { remult } from 'remult';
import { saveToExcel } from '../common-ui-elements/interfaces/src/saveGridToExcel';
import { BusyService } from '../common-ui-elements';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor(private dialog: DialogService, private busyService: BusyService) {
  }
  isAdmin() {
    return remult.isAllowed(Roles.admin);
  }

  users: GridSettings<User> = new GridSettings<User>(remult.repo(User), {
    allowDelete: true,
    allowInsert: true,
    allowUpdate: true,
    columnOrderStateKey: "users",

    orderBy: { name: "asc" },
    rowsInPage: 100,

    columnSettings: users => [
      users.name,
      users.admin
    ],
    gridButtons: [{
      name: "Excel",
      click: () => saveToExcel(this.users, "users", this.busyService)
    }],
    rowButtons: [{
      name: terms.resetPassword,
      click: async () => {

        if (await this.dialog.yesNoQuestion(terms.passwordDeleteConfirmOf + " " + this.users.currentRow.name)) {
          await this.users.currentRow.resetPassword();
          this.dialog.info(terms.passwordDeletedSuccessful);
        };
      }
    }
    ],
    confirmDelete: async (h) => {
      return await this.dialog.confirmDelete(h.name)
    },
  });

  ngOnInit() {
  }

}
