import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { WebClientService } from '../web-client-service';

export const farmerguardGuard: CanActivateFn = (route, state) => {

  const routers = inject(Router);
  const webcleint = inject(WebClientService);
  const id = webcleint.isLogedIn();

  if (id != null) {
    return true;
  }
  else {
    routers.navigate(['/login'])
    return false;
  }
};
