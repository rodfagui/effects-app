import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  usuarios: Usuario[] = [];

  constructor( private usuarioService: UsuarioService ) { }

  ngOnInit() {
    this.subscription = this.usuarioService.getUsers().subscribe( data => {
      this.usuarios = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
