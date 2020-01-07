import { HttpErrorResponse, HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { HttpOptions } from '../UtilHttp/http';
import { Observable, of, throwError } from 'rxjs';

export abstract class CollectionService {

  protected httpOptions: HttpOptions;
  protected url: string;
  constructor() {}

  protected getHttpOptions(params: HttpParams = null): HttpOptions {

    // his.logger.info('CollectionService: getHttpOptions()');

    if (!this.httpOptions) {

      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        observe: 'response',
        params: null
      };

    }
    this.httpOptions.params = params;
    return this.httpOptions;
  }

}
