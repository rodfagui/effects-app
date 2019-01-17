import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as usuariosActions from '../actions';

import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { UsuarioService } from 'src/app/services/usuario.service';

@Injectable()
export class UsuariosEffects {
  constructor( private actions$: Actions, private usuarioServices: UsuarioService ) {}

  @Effect()
  cargarUsuarios$ = this.actions$.pipe(
    ofType( usuariosActions.CARGAR_USUARIOS ),
    switchMap( () => {
      return this.usuarioServices.getUsers()
        .pipe(
          map( users => new usuariosActions.CargarUsuariosSuccessAction(users) ),
          catchError( error => of( new usuariosActions.CargarUsuariosFailAction(error) ) )
        );
    })
  );
}
