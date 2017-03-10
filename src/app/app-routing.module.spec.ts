/* tslint:disable:no-unused-variable */
import { async, fakeAsync, tick, TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AppModule } from './app.module';
import {
  ProductosModule,
} from './modules';

import { routes } from './app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';

import {
  GuardService,
} from './services';

import { APP_BASE_HREF } from '@angular/common';


/**
 * Provide stubbing duplicating service 
 * allowing connections throught routes.
 */
const guardServiceStub = {
  canActivate() {
    return true;
  }
}

describe('Router tests', () => {
  let fixture: ComponentFixture<AppComponent>;
  let guardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        AppModule,
        ProductosModule,
      ],
      providers: [
        // GuardService,
        {provide: GuardService, useValue: guardServiceStub },
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    });

    fixture = TestBed.createComponent(AppComponent);
    
    // inject service
    guardService = fixture.debugElement.injector.get(GuardService);
    /*
    let spy = spyOn(guardService, 'canActivate')
      .and.returnValue(false);
     */
  });

  it('should redirect to login if not authenticated (fakeAsync)', fakeAsync(() => {
    TestBed.get(Router).navigate(['/home']);
    fixture.detectChanges();
    tick();
    expect(location.pathname.endsWith('/login')).toBe(true);
  }));
  /*


  // specs
  it('should redirect to login if not authenticated (async)', async(() => {
    TestBed.get(Router)
      .navigate(['/home'])
        .then(() => {
          expect(location.pathname.endsWith('/login')).toBe(true);
        }).catch(e => {
          console.log(e);
        });
  }));

  it('should navigate to home (fakeAsync)', fakeAsync(() => {
    TestBed.get(Router).navigate(['/home']);
    fixture.detectChanges();
    tick();
    expect(location.pathname.endsWith('/home')).toBe(true);
  }));

  // specs
  it('should navigate to home (async)', async(() => {
    TestBed.get(Router)
      .navigate(['/home'])
        .then(() => {
          expect(location.pathname.endsWith('/home')).toBe(true);
        }).catch(e => {
          console.log(e);
        });
  }));


  it('should navigate to login (fakeAsync)', fakeAsync(() => {
    TestBed.get(Router).navigate(['/login']);
    fixture.detectChanges();
    tick();
    expect(location.pathname.endsWith('/login')).toBe(true);
  }));
  it('should navigate to home (done)', done => {
    TestBed.get(Router)
      .navigate(['/home'])
        .then(() => {
          expect(location.pathname.endsWith('/home')).toBe(true);
          done();
        }).catch(e => {
          console.log(e);
        });
  });

  // specs
  it('can navigate to productos (async)', async(() => {
    TestBed.get(Router)
      .navigate(['/productos'])
        .then(() => {
          expect(location.pathname.endsWith('/productos')).toBe(true);
        }).catch(e => {
          console.log(e);
        });
  }));

  it('should navigate to productos (fakeAsync)', fakeAsync(() => {
    TestBed.get(Router).navigate(['/productos']);
    fixture.detectChanges();
    tick();
    expect(location.pathname.endsWith('/productos')).toBe(true);
  }));


  it('can navigate to productos (done)', done => {
    TestBed.get(Router)
      .navigate(['/productos'])
        .then(() => {
          expect(location.pathname.endsWith('/productos')).toBe(true);
          done();
        }).catch(e => {
          console.log(e);
        });
  });
   */





  /*
    Other ways to test routes
      - async
      - fakeAsync
      - done

  it('should navigate to home', fakeAsync(() => {
    TestBed.get(Router).navigate(['/home']);
    fixture.detectChanges();
    tick();
    expect(location.pathname.endsWith('/home')).toBe(true);
  }));

  // specs
  it('should navigate to home (async)', async(() => {
    TestBed.get(Router)
      .navigate(['/home'])
        .then(() => {
          expect(location.pathname.endsWith('/home')).toBe(true);
        }).catch(e => {
          console.log(e);
        });
  }));
  it('should navigate to home (done)', done => {
    TestBed.get(Router)
      .navigate(['/home'])
        .then(() => {
          expect(location.pathname.endsWith('/home')).toBe(true);
          done();
        }).catch(e => {
          console.log(e);
        });
  });
   */
});
