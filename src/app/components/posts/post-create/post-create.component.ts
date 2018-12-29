import {Component, EventEmitter, Output} from '@angular/core';

@Component({ // Decorator
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredContent = '';
  @Output() postCreated = new EventEmitter();

  // Click Event
  addPost() {
    const post = {content: this.enteredContent};
    this.postCreated.emit(post);
  }
}
