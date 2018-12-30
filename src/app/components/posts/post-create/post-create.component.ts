import {Component} from '@angular/core';
import {PostModel} from '../../../models/post.model';
import {NgForm} from '@angular/forms';
import {PostsService} from '../../../services/posts.service';

@Component({ // Decorator
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  errorMessage = '';
  id = 0;
  complete = false;

  constructor(public postsService: PostsService) {}

  // Click Event
  addTask(form: NgForm) {

    // Validation if no content entered
    if (form.invalid) {
      this.errorMessage = 'Enter your new task';
      return;
    }

    const post: PostModel = {
      content: form.value.content,
      id: this.id,
      complete: false
    };
    this.postsService.addPost(
      this.id,
      form.value.content,
      this.complete
    );
    this.id++;
    form.resetForm();
  }
}
