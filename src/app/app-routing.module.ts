import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'github-search',
      pathMatch: 'full',
    },
    {
        path: 'github-search',
        loadChildren: () =>
          import('./github-search/github-search.module').then(({ GithubSearchModule }) => GithubSearchModule),
      },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}