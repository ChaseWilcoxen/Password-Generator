import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  currentPage: number = 0

  images:Array<any> =[];




  constructor() { 
    this.images = [
      {
        title:'Trip to Colorado',
        url:'https://images.unsplash.com/photo-1608993871699-e32b61dedd8e?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      },{
        title:'Laying Under the Palms',
        url:'https://images.unsplash.com/photo-1608721693738-c3a6d54230cb?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      },{
        title:'The Arches',
        url:'https://images.unsplash.com/photo-1608749769135-cdc495ef90ac?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      },{
        title:'A Walk in the Forres',
        url:'https://images.unsplash.com/photo-1606068091213-c7283ddc5f0d?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDg0fDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      },{
        title:'Trip to Colorado',
        url:'https://images.unsplash.com/photo-1608993871699-e32b61dedd8e?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      },{
        title:'Laying Under the Palms',
        url:'https://images.unsplash.com/photo-1608721693738-c3a6d54230cb?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      },{
        title:'The Arches',
        url:'https://images.unsplash.com/photo-1608749769135-cdc495ef90ac?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      },{
        title:'A Walk in the Forres',
        url:'https://images.unsplash.com/photo-1606068091213-c7283ddc5f0d?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDg0fDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      },{
        title:'Trip to Colorado',
        url:'https://images.unsplash.com/photo-1608993871699-e32b61dedd8e?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      },{
        title:'Laying Under the Palms',
        url:'https://images.unsplash.com/photo-1608721693738-c3a6d54230cb?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      },{
        title:'The Arches',
        url:'https://images.unsplash.com/photo-1608749769135-cdc495ef90ac?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      },{
        title:'A Walk in the Forres',
        url:'https://images.unsplash.com/photo-1606068091213-c7283ddc5f0d?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDg0fDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      }

    ]
  }

  ngOnInit(): void {
  }

}
