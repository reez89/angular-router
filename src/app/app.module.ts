import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent }, // localhost:4200/
  { path: 'users', component: UsersComponent, children: [
    { path: ':id/:name', component: UserComponent }, // localhost:4200/userid
  ] }, // localhost:4200/users
  { path: 'servers', component: ServersComponent, children: [
    { path: ':id', component: ServerComponent }, // localhost:4200/servers
    { path: ':id/edit', component: EditServerComponent }, // localhost:4200/servers/edit
  ] }, // localhost:4200/servers

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes), // forRoot ci consente di registrare le routes della nostra main app.
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
