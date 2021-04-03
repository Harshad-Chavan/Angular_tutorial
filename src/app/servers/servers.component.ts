import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  count = 1

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(){
    this.count = this.count + 1
  }

}
