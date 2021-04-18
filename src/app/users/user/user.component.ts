import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    this.paramsSubscription = this.route.params // params è un Observable che ci aiuta a lavoare con async app.
    .subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
      );
      // tslint:disable-next-line: max-line-length
      // abbiamo aggiunto questo nuovo metodo, perchè con il pulsante load Anna, non richiamavamo i parametri corretti.In questo modo ad ogni cambiamento dei parametri, il subscribe cambieraà di conseguenza id e name all'interno dell'html.
      // tslint:disable-next-line: max-line-length
      // non serve aggiungere l'unsubscribe come metodo, perchè angular lo fa già per noi in background, quando non siamo piu' all'interno di quel partioclare change.
    }
    ngOnDestroy() {
      this.paramsSubscription.unsubscribe();
    }

}

