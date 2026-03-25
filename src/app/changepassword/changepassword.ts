import { ChangeDetectorRef, Component, inject} from '@angular/core';
import { Router } from '@angular/router';
import { WebClientService } from '../../web-client-service';

@Component({
  selector: 'app-changepassword',
  standalone: false,
  templateUrl: './changepassword.html',
  styleUrl: './changepassword.scss',
})
export class Changepassword {
newpassword:any;
  confirmpassword:any;

  email:any;
  role:any;

  private webclient = inject(WebClientService);
  private router = inject(Router);
  private cd = inject(ChangeDetectorRef);

  ngOnInit(): void {

    this.email = sessionStorage.getItem("email");
    this.role = sessionStorage.getItem("role");

  }

  updatePassword(){

    if(this.newpassword !== this.confirmpassword){
      alert("Passwords do not match");
      return;
    }

    const data = {
      email:this.email,
      password:this.newpassword,
      role:this.role
    };

    this.webclient.updatePassword("/update-password",data).subscribe({

      next:(res:any)=>{

        if(res==null){
          alert("User Not Found");
        }
        else{
          alert("Password Updated Successfully");

          sessionStorage.removeItem("email");

          this.router.navigate(["/login"]);
        }

        this.cd.detectChanges();

      },

      error:(err:any)=>{
        console.log(err);
        alert("Password update failed");
      }

    });

  }

}
