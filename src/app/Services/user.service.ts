import { Injectable } from '@angular/core';
import { IUserService } from './iuser.service';


// define as service +  register in rootAPP (Singelton)
@Injectable()
export class UserService extends IUserService {

  private date = new Date()
  constructor() {

    super();
  }


  getCreationDate(): Date {

    return this.date;
  }

}
