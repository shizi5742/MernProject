import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Post } from './post.model';
import { PostServices } from '../posts.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   { title: 'First Post', content: 'This is the First post content' },
  //   { title: 'Second Post', content: 'This is the Second post content' },
  //   { title: 'Third Post', content: 'This is the Third post content' },
  //   { title: 'Fourth Post', content: 'This is the Fourth post content' },
  // ];

  // @Input() posts: Post[] = [];
  @Input() posts: Post[] = [];
  private postSub: Subscription = new Subscription;

  constructor(public postService: PostServices) {}

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
    this.postSub = this.postService
      .getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy(): void {
    this.postSub.unsubscribe();
  }
}
