import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class McuService {
  castData = [
    {sno: 1,character: 'Iron Man',cast: 'Robert Downey Jr.',lastfilm: 'Avengers: Endgame',upcomingfilm: 'Avengers: DoomsDay',},
    {sno: 2,character: 'Thor',cast: 'Chris Hemsworth',lastfilm: 'Thor: Love and Thunder',upcomingfilm: 'Avengers: Secret Wars',},
    {sno: 3,character: 'Captain America',cast: 'Chris Evans',lastfilm: 'Avengers: Endgame',upcomingfilm: 'Fantastic Four',},
    {sno: 4,character: 'Doctor Strange',cast: 'Benedict Cumberbatch',lastfilm: 'Doctor Strange: Multiverse of Madness',upcomingfilm: 'Avengers: Secret Wars',},
    {sno: 5,character: 'Spider-Man',cast: 'Tom Holland',lastfilm: 'Spider-Man: No Way Home',upcomingfilm: 'Spider-Man 4',},
  ];
  upcomingFilms = [
    'What If? (Season 3)',
    'Avengers: Kang Dynasty',
    'Avengers: Secret Wars',
    'Spider-Man 4',
    'Ironheart (Disney+)',
    'Daredevil: Born Again (Disney+)',
    'Fantastic Four(Disney+)',
  ];
  getCastData() {
    return this.castData
  }
  getUpcomingFilms() {
    return this.upcomingFilms
  }
}
