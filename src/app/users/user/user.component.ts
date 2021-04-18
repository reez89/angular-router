import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    this.route.params // params è un Observable che ci aiuta a lavoare con async app.
    .subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
        }
        );
        // tslint:disable-next-line: max-line-length
       // abbiamo aggiunto questo nuovo metodo, perchè con il pulsante load Anna, non richiamavamo i parametri corretti.In questo modo ad ogni cambiamento dei parametri, il subscribe cambieraà di conseguenza id e name all'interno dell'html.
  }

}
