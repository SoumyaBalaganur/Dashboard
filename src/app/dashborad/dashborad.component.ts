import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.scss']
})
export class DashboradComponent implements OnInit {
  Desiganation: string;
   Username: string;
   NoofTeamMember: number;
   TotalCostofAllProject: number;
   PendingTasks: number;
   UpcomingProject: number;
   ProjectCost: number;
   CurrentExpenditure: number;
   AvailableFunds: number;

   Clients: string[];
   Projects: string[];
   Years: number[]= [];
   TeamMembersSummary = [];
   TeamMember = [];
   

   ngOnInit()
  {
    this.Desiganation = "Team Leader";
    this.Username = "Soumya Balaganur";
    this.NoofTeamMember = 67;
    this.TotalCostofAllProject = 26868;
    this.PendingTasks = 13;
    this.UpcomingProject = 15;
    this.ProjectCost = 609090;
    this.CurrentExpenditure = 668961;
    this.AvailableFunds = 817;

    this.Clients = ["ABC Technology, NTT Data, Info Tech"];
    this.Projects = [" Project A, Project B, Project C, Project D"];

    for(var i=2019; i>= 2010; i--)
    {
      this.Years.push(i);
    }
    this.TeamMembersSummary = [
      { Region: "East", TeamMembersCount: 20, TemporarilyUnavailableMembers: 4 },
      { Region: "West", TeamMembersCount: 15, TemporarilyUnavailableMembers: 8 },
      { Region: "South", TeamMembersCount: 17, TemporarilyUnavailableMembers: 1 },
      { Region: "North", TeamMembersCount: 15, TemporarilyUnavailableMembers: 6 }
    ];

  }

}
