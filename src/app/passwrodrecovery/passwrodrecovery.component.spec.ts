import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswrodrecoveryComponent } from './passwrodrecovery.component';

describe('PasswrodrecoveryComponent', () => {
  let component: PasswrodrecoveryComponent;
  let fixture: ComponentFixture<PasswrodrecoveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswrodrecoveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswrodrecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
