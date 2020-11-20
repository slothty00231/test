import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core'
import { FirebaseService } from '../firebase.service';
import { Gacha } from '../gacha';

@Component({
  selector: 'app-random-gacha',
  templateUrl: './random-gacha.component.html',
  styleUrls: ['./random-gacha.component.css']
})
export class RandomGachaComponent implements OnInit {

  gacha: Gacha[];
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getGacha().subscribe(val => {this.gacha = val;});
  }

}