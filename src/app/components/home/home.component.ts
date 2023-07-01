import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authServices: SocialAuthService) {}
  ngOnInit(): void {
    
    this.authServices.authState.subscribe(res => {
      console.log('response from google login ===>>>>>', res)
    })
  }

  // signInWithGoogle(): void {
  //   this.authServices.signIn(GoogleLoginProvider.PROVIDER_ID);
  // }

  // signOut(): void {
  //   this.authServices.signOut();
  // }



}
