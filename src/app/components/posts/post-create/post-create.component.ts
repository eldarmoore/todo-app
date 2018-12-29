import {Component, EventEmitter, Output} from '@angular/core';
import {PostModel} from '../../../models/post.model';
import {NgForm} from '@angular/forms';

@Component({ // Decorator
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredContent = '';
  errorMessage = '';
  @Output() postCreated = new EventEmitter<PostModel>();

  // Click Event
  addTask(form: NgForm) {

    // Validation if no content entered
    if (form.invalid) {
      this.errorMessage = 'You can\'t post empty value!';
      return;
    }

    const post: PostModel = {content: form.value.content};
    this.postCreated.emit(post);
  }
}
