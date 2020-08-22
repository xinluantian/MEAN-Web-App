import { PostCreateComponent } from "./post-create/post-create.component";
import { PostListComponent } from "./post-list/post-list.component";
import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../angular-material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations:[
    PostCreateComponent,
    PostListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule,
  ]
})

export class PostsModule {

}
