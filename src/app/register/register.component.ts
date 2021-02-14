import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router'; 
import { PostService } from '../shared/Postdata.service';
import { User } from '../shared/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  constructor( private postservice:PostService,
    private router: Router,) {
      this.userdata;
     }
  public userdata:User;
  isLoading=false;
  ngOnInit(): void {
   // this.registerForm = this.formBuilder.group({
     // firstName: ['', Validators.required],
      //lastName: ['', Validators.required],
      //username: ['', Validators.required],
     // password: ['', [Validators.required, Validators.minLength(6)]]
  //});
    
  }
  //get f() { return this.registerForm.controls; }
 // registerForm: FormGroup;
  submitted = false;
  error: string=null;
  onSubmit() {
    if(this.signupForm.value.username.includes(" ") || this.signupForm.value.password.includes(" ") || this.signupForm.value.firstname.includes(" ") || this.signupForm.value.lastname.includes(" "))
    {
      alert("Please Remove Space From Field");
    }
    else{
    this.isLoading=true;
    this.postservice.register(this.signupForm.value.username, this.signupForm.value.password).subscribe(
      responseData=>{
      
        console.log("Please wait for the server to response");
        console.log(responseData);
        this.submitted = true;
        this.router.navigate(['/login']);
        this.isLoading=false;
      },
      errorMessage=>{
        this.error=errorMessage;
        this.isLoading=false;
      }
    )
    

    // reset alerts on submit
   // this.alertService.clear();

    // stop here if form is invalid
    //if (this.registerForm.invalid) {
      //  return;
    //}
    //console.log(this.registerForm.value);

    
    }

}
  
  



}
