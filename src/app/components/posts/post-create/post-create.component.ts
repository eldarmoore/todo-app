import {Component, EventEmitter, Output} from '@angular/core';
import {PostModel} from '../../../models/post.model';

@Component({ // Decorator
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredContent = '';
  @Output() postCreated = new EventEmitter<PostModel>();

  // Click Event
  addPost() {
    const post: PostModel = {content: this.enteredContent};
    this.postCreated.emit(post);
  }
}
