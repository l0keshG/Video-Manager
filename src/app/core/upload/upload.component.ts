import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { SpinnerVisibilityService } from 'ng-http-loader';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
@ViewChild("fileInput") fileInput: ElementRef;

  constructor(private spinner: SpinnerVisibilityService) {}
  fileName:string="";
  fileToUpload: File = null;
  ngOnInit(): void {
  }

  onClick() {
    const fileInput = this.fileInput.nativeElement;
    fileInput.onchange = () => {
      this.spinner.show();
      this.fileToUpload = fileInput.files[0];
      this.fileName = this.fileToUpload.name;
      this.spinner.hide();
    };
    fileInput.click();
  }

  onFileUpload() {
    console.log("upload file")
  }

  resetUpload(){
    this.fileToUpload = null;
    this.fileName="";
  }

}
