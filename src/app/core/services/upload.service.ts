import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { ApiService } from "src/app/shared/services/api.service";
import { Globals } from "src/app/shared/models/globals";
import { HttpClient, HttpParams, HttpHeaders, HTTP_INTERCEPTORS, HttpErrorResponse } from "@angular/common/http";
import { delay, tap, catchError } from 'rxjs/operators';
import { environment} from 'src/environments/environment';

@Injectable({
  providedIn: "root",
})
export class UploadService {

  constructor(private apiService: ApiService, private globals: Globals, private http: HttpClient) {}


  upload_newVideo(fileToUpload:File):Observable<any> {
    var formData = new FormData();
    formData.append("Video", fileToUpload);
    console.log(formData)

    return this.http.post("vimeo_url" + "Upload_video", formData);
  }

}