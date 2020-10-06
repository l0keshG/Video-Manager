import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { SpinnerVisibilityService } from 'ng-http-loader';
import { UploadService } from '../services/upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
@ViewChild("fileInput") fileInput: ElementRef;

  constructor(private spinner: SpinnerVisibilityService, private upload: UploadService) {}
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
    console.log("uploading file")
    this.upload.upload_newVideo(this.fileToUpload).subscribe((res) => {
      console.log('file uploaded successfully')
    },
      (error) => {
       console.log('issue with uploading file')

      });
  }

  resetUpload(){
    this.fileToUpload = null;
    this.fileName="";
  }

}
