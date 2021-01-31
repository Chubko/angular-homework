import {Component, OnInit} from '@angular/core';
import {Post} from '../../interfaces/post';
import {PostService} from '../../services/post.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  userId: number;
  userName: string;

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.userId = value.id;
    });
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(value => this.posts = value);
  }
}
