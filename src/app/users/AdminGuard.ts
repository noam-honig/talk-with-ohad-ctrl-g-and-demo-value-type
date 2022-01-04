import { AuthenticatedInGuard } from '@remult/angular';
import { Injectable } from '@angular/core';
import { Roles } from './roles';



@Injectable()
export class AdminGuard extends AuthenticatedInGuard {

    override isAllowed() {
        return Roles.admin;
    }
}
