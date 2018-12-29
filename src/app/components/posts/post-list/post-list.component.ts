import {Component, Input} from '@angular/core';

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

  @Input() posts = [];

}
