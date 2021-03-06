import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService,
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(a => this.hero = a);

  }
  goBack() {
    this.location.back();
  }
  save(): void {
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }

}
