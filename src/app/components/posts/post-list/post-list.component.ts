import {Component, OnInit} from '@angular/core';
import {PostModel} from '../../../models/post.model';
import {PostsService} from '../../../services/posts.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: PostModel[] = [];
  newPosts: PostModel[] = [];
  completedPosts: PostModel[] = [];

  private postsSub: Subscription;

  constructor(public postsService: PostsService) {}

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener().subscribe((posts: PostModel[]) => {
      this.posts = posts;
    });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

  toggleComplete(post) {
    this.postsService.toggleComplete(post);
  }

  onDelete(id: number) {
    this.posts = this.posts.filter(p => p.id !== id);
    this.postsService.removePost(id);
  }
}
