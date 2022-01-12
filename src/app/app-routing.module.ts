import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import { FeedComponent } from './feed/feed.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [{
  path: 'feed',
  component: FeedComponent,
},
{
  path: 'create-post',
  component: CreatePostComponent,
},
{
  path: 'profile',
  component: ProfileComponent,
},
{ 
  path: '**',
  redirectTo: 'feed'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
