import { Component, OnInit } from '@angular/core';
import{ CinemaService } from '../../services/Cinema.service'

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css'],
  providers: [CinemaService]
})
export class MyHomeComponent implements OnInit {
  movies : Array<Object> = []

  constructor(private cinema: CinemaService) { }

  ngOnInit() {
  }

  showMovies() {
    this.movies = this.cinema.getMovies();
    console.log(this.movies)
  }

}
