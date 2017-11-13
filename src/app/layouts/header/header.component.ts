import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private content: ContentService) { }

  ngOnInit() {
  }

}
