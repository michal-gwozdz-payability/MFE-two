import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay, map} from 'rxjs/operators';
import {PybMpIntegration, PybMpStatusState} from './pyb-mp-status.model';

@Injectable({
  providedIn: 'root'
})
export class PybMpStatusService {
  integrate(integration: PybMpIntegration): Observable<{ status: PybMpStatusState }> {
    return of(true)
      .pipe(
        delay(2000),
        map(() => ({ status: PybMpStatusState.Active }))
      );
  }

  checkStatus(mpKey: string, login: string): Observable<{ status: PybMpStatusState }> {
    return of(true)
      .pipe(
        delay(2000),
        map(() => ({ status: PybMpStatusState.SetUpRequired }))
      );
  }
}
