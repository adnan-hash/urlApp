import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { ParentComponent } from './parent/parent.component';
import { UrlComponent } from './url/url.component';


const routes: Routes = [


  // { 
  //   path: 'parent', 
  //   component: ParentComponent,  
  //   children: [
  //     {
  //       path: "thumbnail",
  //       component: ThumbnailComponent
  //     },
  //     {path: 'shorten', component}
  //   ]  
  // },

  {
    path: '', redirectTo: 'parent/url',
    pathMatch: 'full'
  },
  {
    path: 'parent',
    component: ParentComponent,
    children: [
      {
        path: "",
        redirectTo: 'url',
        pathMatch: 'full'
      }, {
        path: "url",
        component: UrlComponent
      }, { path: "thumbnail", component: ThumbnailComponent }]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { enableTracing: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
