import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { IUserService } from './iuser.service';

export const myGuard: CanActivateFn = (route, state) => {

  // get  other  services to  implement the code logic...
  var userService = inject(IUserService);

  //alert(userService.getCreationDate());

  // rules ...
  if (route.paramMap.get('id') == '10') {

    return true;
  }
  return false;
};
