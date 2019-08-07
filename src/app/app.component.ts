import { Component } from '@angular/core';
import { FormBuilder ,FormGroup, FormControl} from '@angular/forms';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'URL Shortener Application';
  apiUrl: string = 'https://api.sqiz.io/url/url'
  data: any = {};
  inputUrl: any;
  form:FormGroup;
  result: any;
  public appleshow:boolean = false;
  public androidshow:boolean = false;
  public webshow:boolean = false;
  
  constructor(private http: HttpClient, private formBuilder: FormBuilder) {

    console.log('Hello');
    this.form =formBuilder.group({
      url: '',
    });
  }

  async onSubmit(values){
    console.log(values);
    let response :any = await this.getData(values);
    console.log(response);
    this.result =response;
   
  }

  getData(formData) {
    return this.http.post(this.apiUrl ,formData).toPromise();
    
  }

  copyInputMessage(inputElement){
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

  goToLink( ){
    window.open("_blank");
}

Appletoggle() {
  this.appleshow = !this.appleshow;
}

Androidtoggle() {
  this.androidshow = !this.androidshow;
}

Webtoggle() {
  this.webshow = !this.webshow;
}

}


