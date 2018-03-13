import { UsuarioService } from './../usuario/usuario.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable()
export class LoginGuardGuard implements CanActivate {

  constructor(
    public _usuarioService: UsuarioService,
    public router: Router
  ){

  }

  canActivate(){

    if(this._usuarioService.estaLogueado()){
      //console.log('PASO EL GUARD');
      return true;
    }else{
      console.log('Bloqueado por guard');
      this.router.navigate(['/login']);
      return false;
    }

  }
}
