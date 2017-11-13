import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private content: ContentService) {
    this.content['title'] = 'Page Not Found';
  }

  ngOnInit() {
  }

}
