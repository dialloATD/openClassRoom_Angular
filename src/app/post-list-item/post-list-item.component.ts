import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

  onLoveIt(post: Post) {
    this.post.loveIts++
  }

  onDoNotLoveIt(post: Post) {
    this.post.loveIts--
  }

}
