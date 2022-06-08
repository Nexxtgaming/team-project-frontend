export class SignupInfo {

  username: string;
  name: string;
  surname: string;
  phoneNumber: string;
  email: string;
  verified = true;
  rating = 0;
  role: string[] = ['user'];
  password: string;

  constructor(username: string,
              name: string,
              surname: string,
              phoneNumber: string,
              email: string,
              role: string,
              password: string) {
    this.username = username;
    this.name = name;
    this.surname = surname;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.role.push(role) ;
    this.password = password;
  }
}
