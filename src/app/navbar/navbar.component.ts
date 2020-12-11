
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {trigger
        ,state,
        style,
        animate,
        transition
        } from '@angular/animations'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations:[
    trigger('anim',[
      state('normal',style({
        
        transform:'translateX(0)'
      })),
      state('new',style({
        
        transform:'translateX(300px)'
      })),
      transition('*<=>*',animate(1000)),
      
    ])
  ]
})
export class NavbarComponent implements OnInit {
  state = 'normal'
  
  constructor(public authService: AuthService,private router:Router,private route:ActivatedRoute) { }

  animate(){
    this.state=='normal'?this.state='new':this.state='normal'
  }
  
  ngOnInit() {
    this.animate()
   }

  
  

}
