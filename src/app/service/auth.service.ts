import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth,
    private router: Router) { }

//login mtd
    login(email: "akashks6341@gmail.com", password: "Pass1234#"){
      this.fireauth.signInWithEmailAndPassword(email,password).then(()=> {
        localStorage.setItem("token","true");
        this.router.navigate(['/Dashboard']);
      },err =>{
        alert('Oops! Something went wrong');
        this.router.navigate(['/login']);
      })
    }
 //register
 register(email:string,password:string){
  this.fireauth.createUserWithEmailAndPassword(email,password).then(() => {
    alert("Registration Successfull")
    this.router.navigate(['/login']);
  }, err =>{
    alert("Oops! something went wrong")
    this.router.navigate(['/Register']);
  })
 }

//logout
logout(){
  this.fireauth.signOut().then(()=>{
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  },err=>{
    alert(err.message);
  })
}

}
