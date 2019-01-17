import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { CargarUsuarioAction } from 'src/app/store/actions';
import { Usuario } from 'src/app/models/usuario.model';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  user: Usuario;
  loading: boolean;
  error: any;

  constructor( private router: ActivatedRoute, private store: Store<AppState> ) { }

  ngOnInit() {
    this.router.params.subscribe( params => {
      const id = parseInt(params['id'], 10);
      this.store.dispatch( new CargarUsuarioAction(id) );
    });

    this.subscription = this.store.select('usuario').pipe(filter( usuario => usuario.user != null )).subscribe( usuario => {
      this.user = usuario.user;
      this.error = usuario.error;
      this.loading = usuario.loading;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
