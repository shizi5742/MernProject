import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post-list/post.model';
import { NgForm } from '@angular/forms';
import { PostServices } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';
  // @Output() postCreated = new EventEmitter<Post>();

  constructor(public postService: PostServices) {}

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    // const newPost: Post = {
    //   title: form.value.title,
    //   content: form.value.content,
    // };
    // this.postCreated.emit(newPost);
    this.postService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }
}
