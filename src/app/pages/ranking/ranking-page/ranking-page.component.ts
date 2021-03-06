import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ranking } from '../model/ranking';

@Component({
  selector: 'app-ranking-page',
  templateUrl: './ranking-page.component.html',
  styleUrls: ['./ranking-page.component.scss'],
})
export class RankingPageComponent implements OnInit {
  rankingItemList: Ranking | undefined;
  termToSearch: string = '';

  constructor(private act: ActivatedRoute) {}

  ngOnInit(): void {
    this.rankingItemList = this.act.snapshot.data['ranking'];
  }
}
