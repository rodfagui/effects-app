import { Action } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const CARGAR_USUARIO = '[Usuario] Cargar usuario';
export const CARGAR_USUARIO_FAIL = '[Usuario] Cargar usuario Fail';
export const CARGAR_USUARIO_SUCCESS = '[Usuario] Cargar usuario Success';

export class CargarUsuarioAction implements Action {
  readonly type = CARGAR_USUARIO;

  constructor( public id: number ) {}
}

export class CargarUsuarioFailAction implements Action {
  readonly type = CARGAR_USUARIO_FAIL;

  constructor( public payload: any ) {}
}

export class CargarUsuarioSuccessAction implements Action {
  readonly type = CARGAR_USUARIO_SUCCESS;

  constructor( public usuario: Usuario ) {}
}

export type usuarioAcciones = CargarUsuarioAction | CargarUsuarioFailAction | CargarUsuarioSuccessAction;
