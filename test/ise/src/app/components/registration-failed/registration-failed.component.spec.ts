import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFailedComponent } from './registration-failed.component';

describe('RegistrationFailedComponent', () => {
  let component: RegistrationFailedComponent;
  let fixture: ComponentFixture<RegistrationFailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationFailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
/**
 * Access by invitation or hsared link to ISE Registration page.
 * New User Registration User would like to use ISE Product, e-Commerce not enabled
 * First Name(optional) Last Name(Optional) Phone Number(Optional) Email ID(Required) Company(Required) Country(required)
 * User clicks Create Account
 * Auto Registered UsersUser that are loggged into A.com and navigate to IsE are auto logged in via SSO.
 * 
 * Thank you for Registering
 * Thank You Registering Confirmation Page
 * Message user that an email will verify their account in 48 hours
 * 
 * Email Account Verified?
 * NO
 * Verify Email Link Expired 
 * Error Message
 * Message user that email link has expired.
 * YES
 * Email Account Verified
 * Message user to click on link within email(valid for 7 days) to verify registration.
 * -Application notes
 * -Chromatofram Libray
 * -How-To-Videos
 * -e-Seminars
 * -Online Store
 * Links:
 * Forgot Password Reset
 * Update contact
 * Comments or Questions
 * Forgot Password
 * Forgot Password(Please refer to ISE- login Flow v1.0)
 * User clicks on link which redirects user to Agilent.com reset password screen.(1.2 FOrgot Password);
 * My Account 
 * Update Contact Link
 * User may update contact information if they login thtough "My Account"
 * Comments or questions
 * Comments or Quesrions Link 
 * More Details required....
 * Waiting Page 
 * Waitiong Page with loading icon 
 * Message user:"Please wait while we are processing your registration.It will take a few seconds"
 * Create Password
 * User enters new password 2X's
 * User click "sign in"
 * Show/Hide password is Available
 * Password Successful?
 * NO 
 * Error Message 
 * Message User:"There has been an issue with your registration."
 * Please contact ISE-Support@mailing.agilent.com[hyperlink with mailto]
 * Thank you for your patience, Your Agilent Team
 * Yes 
 * ISE Login
 * Registration Login Success
 * Message User:"You have successfully registered!"
 * Thank you for becoming a member of Agilent's web site.
 * User will be registered on Agilent systems ATG / CIAM as well as ISE and will be
 * assigned ISE access provided they comply with business rules.
 */