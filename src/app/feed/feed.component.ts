import { Component, OnInit } from '@angular/core';
import { Post } from '../core/post';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  posts: Post[] = [
    {
      user: 'user1',
      content: 'content1',
      labels: ['fasz2', 'fasz2'],
      comments: ['no', 'comment']
    }, {
      user: 'user2',
      content: 'content2',
      labels: ['fasz1', 'fasz2'],
      comments: ['no', 'comment']
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
