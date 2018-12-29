import {PostModel} from '../models/post.model';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: PostModel[] = [];
  private postsUpdated = new Subject<PostModel[]>();

  getPosts() {
    return [...this.posts];
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(id: number, content: string, complete: boolean) {
    const post: PostModel = {
      id: id,
      content: content,
      complete: complete
    };
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }

  removePost(id: number) {
    this.posts = this.posts.filter(p => p.id !== id);
  }

  getById(id: number): PostModel {
    return this.posts
      .filter(p => p.id === id)
      .pop();
  }

  updateById(id: number, content: Object = {}): PostModel {
    const post = this.getById(id);
    if (!post) {
      return null;
    }
    Object.assign(post, content);
    return post;
  }

  toggleComplete(post: PostModel) {
    const updatedPost = this.updateById(post.id, {
      complete: !post.complete
    });
    return updatedPost;
  }
}
