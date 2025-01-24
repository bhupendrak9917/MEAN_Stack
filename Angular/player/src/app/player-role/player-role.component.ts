import { Component } from '@angular/core';

@Component({
  selector: 'app-player-role',
  templateUrl: './player-role.component.html',
  styleUrls: ['./player-role.component.css']
})
export class PlayerRoleComponent {
  players = [
    { name: 'Virat Kohli', role: 'Batsman' },
    { name: 'MS Dhoni', role: 'Wicketkeeper' },
    { name: 'Rohit Sharma', role: 'Captain' },
    { name: 'Jasprit Bumrah', role: 'Bowler' },
    { name: 'Rishabh Pant', role: 'Wicketkeeper' },
    { name: 'Shreyas Iyer', role: 'Batsman' },
    { name: 'Hardik Pandya', role: 'All-rounder' },
    { name: 'Dhruv Jurel', role: 'WicketKeeper' }
  ]
}