export class AuthService {
  isAuth = false;

  // tslint:disable-next-line:typedef
  signIn(){
    return new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          this.isAuth = true;
          resolve(true);
        }, 2000);
      }
    );
  }

  // tslint:disable-next-line:typedef
  signOut(){
    this.isAuth = false;
  }
}
