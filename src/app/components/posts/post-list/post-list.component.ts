import {Component, Input} from '@angular/core';
import {PostModel} from '../../../models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

  // posts = [
  //   {content: 'This is the first post\'s content'},
  //   {content: 'This is the first post\'s content'},
  //   {content: 'This is the first post\'s content'}
  // ];

  @Input() posts: PostModel[] = [];

}
