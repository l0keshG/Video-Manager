import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { share } from "rxjs/operators";
import { HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import { User } from 'src/app/shared/models/user';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Injectable({ providedIn: "root" })
export class AuthService {
  user: User;
  resp=401;
  userId:string;
  miscAccess:boolean = false;
  tiAccess:boolean = false;
  userAccess:boolean = false;
  userAuth:boolean = false;

  get userDetail(): User {
    return this.user;
  }

  constructor(
    private router: Router,
    private utilityService: UtilityService,
    private http: HttpClient
  ) {
  }

  isSessionValid(): Observable<boolean> {
    return new Observable<boolean>(observer => {
      if (this.user) {
        observer.next(true);
      }
      else {
        observer.next(false);
      }
    });
  }

  login(user: User): Observable<any> {

    this.userId = user.userId
    var formData = new FormData();
    formData.append("userId", user.userId);
    formData.append("password", user.password);


    //LDAP Part
    // this.http.post("auth",formData,{
    //   headers: new HttpHeaders()}).subscribe((res) => {
    //     console.log("User is Authenticated with LDAP ")
    //   },
    //     (error) => {
    //       this.userAuth = true;
    //       console.log("User Not authorised to Access Portal.")
    //       this.router.navigate(["/"]);
    //     });


      return new Observable<any>(observer => {
        this.user = user;
        observer.next(user);
      });
  }

  openDefaultRoute(): void {
    this.isSessionValid()
      .pipe(share())
      .subscribe(
        resp => {
          if (resp === true) {
            this.router.navigate([""]);

          } else {
            this.router.navigate(["/"]);
          }
        },
        () => {
          this.router.navigate(["/"]);
        }
      );
  }

  logout(): void {
    this.user = null;
    this.userAccess = false;
    this.userAuth = false;
    this.tiAccess = false;
    this.miscAccess = false;
    this.router.navigate(["/"]);
  }
}
