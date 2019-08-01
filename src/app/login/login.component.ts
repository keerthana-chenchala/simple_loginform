import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm;
  constructor(private form: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.form.group({
      name: ['', [Validators.required] ],
      password: ['',[Validators.required]],
   });
  }
  onSubmit(details) {
    console.log(details);
    if(details.name!="" && details.password!="")
    {
      alert("Login Successful");
    }
    else{
      alert("Both feilds are required");
    }
    this.loginForm.reset();
  }
}
