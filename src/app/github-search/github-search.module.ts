import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { GithubSearchRoutingModule } from './github-search-routing.module';
import { UserInfoComponent } from './user-info/user-info.component';
import { PaginatedRepositoriesComponent } from './paginated-repositories/paginated-repositories.component';
import { FormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgxPaginationModule } from 'ngx-pagination';
import { RepositoryCardComponent } from './repository-card/repository-card.component';

@NgModule({
  declarations: [
    MainComponent,
    UserInfoComponent,
    PaginatedRepositoriesComponent,
    RepositoryCardComponent,
  ],
  imports: [
    CommonModule,
    GithubSearchRoutingModule,
    FormsModule,
    NgxSkeletonLoaderModule.forRoot(),
    NgxPaginationModule
  ],
})
export class GithubSearchModule {}
