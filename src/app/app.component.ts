import { Component } from '@angular/core';
import {PostModel} from './models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedPosts: PostModel[] = [];

  onPostAdded(post) {
    this.storedPosts.push(post);
  }
}
