import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { remult } from 'remult';
import { entities } from '../../server/entities';
import { GridSettings } from '../common-ui-elements/interfaces';

@Component({
  selector: 'app-ctrl-g',
  templateUrl: './ctrl-g.component.html',
  styleUrls: ['./ctrl-g.component.scss'],
})
export class CtrlGComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(async (x) => {
      const urlEntity = x.get('entity')!;
      for (const entity of entities) {
        const repo = remult.repo(entity as any);
        if (repo.metadata.key.toUpperCase() === urlEntity.toUpperCase()) {
          this.grid = undefined;
          setTimeout(() => {
            this.grid = new GridSettings(repo, {
              allowCrud: true,
            });
          }, 10);
        }
      }
    });
  }

  grid?: GridSettings;
}
