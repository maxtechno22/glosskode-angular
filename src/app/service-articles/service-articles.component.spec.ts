import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceArticlesComponent } from './service-articles.component';

describe('ServiceArticlesComponent', () => {
  let component: ServiceArticlesComponent;
  let fixture: ComponentFixture<ServiceArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
