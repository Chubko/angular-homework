import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: 'users', loadChildren: () => import('./user/user.module').then(m => m.UserModule)
    },
      {path: 'users/:id/posts', loadChildren: () => import('./post/post.module').then(m => m.PostModule)
      },
      {path: '', redirectTo: 'users', pathMatch: 'full'}
    ])
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
