import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as usuarioActions from '../actions';

import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { UsuarioService } from 'src/app/services/usuario.service';

@Injectable()
export class UsuarioEffects {
  constructor( private actions$: Actions, private usuarioServices: UsuarioService ) {}

  @Effect()
  cargarUsuario$ = this.actions$.pipe(
    ofType( usuarioActions.CARGAR_USUARIO ),
    switchMap( (action: usuarioActions.CargarUsuarioAction) => {
      const id = action.id;
      return this.usuarioServices.getUserById(id)
        .pipe(
          map( user => new usuarioActions.CargarUsuarioSuccessAction(user) ),
          catchError( error => of( new usuarioActions.CargarUsuarioFailAction(error) ) )
        );
    })
  );
}
