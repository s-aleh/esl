import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  constructor(private content: ContentService) {
    this.content['title'] = 'ESL';
  }

  ngOnInit() {
  }

}
