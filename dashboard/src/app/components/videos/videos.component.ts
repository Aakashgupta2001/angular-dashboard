import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { GlobalServicesService } from 'src/app/services/global-services.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
})
export class VideosComponent implements OnInit {
  url =
    'https://graph.microsoft.com/v1.0/me/drive/items/01G4CLFVNTQG4FFMF4ZFEJHPZ547XQZD54/children';
  header: any;
  token: any;
  response: any;
  data: any;
  finalData: any;
  video: any;
  title: any;
  constructor(private http: HttpClient, private shared: GlobalServicesService) {
    this.token = this.shared.oneDriveToken;
    this.header = new HttpHeaders().set('Authorization', this.token);

    this.getData();

    this.print();
  }

  async print() {
    await console.log(this.data);
  }

  async getData() {
    this.http
      .get(this.url, { headers: this.header })
      .toPromise()
      .then((data: any) => {
        this.response = data;
        console.log(this.response);
        this.data = this.response.value.filter((obj) => {
          return obj.file ? obj.file.mimeType === 'video/mp4' : '';
        });
        this.finalData = this.data.map((obj) => {
          return { name: obj.name, url: obj.webUrl };
        });

        console.log(this.finalData);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  ngOnInit(): void {}
}
