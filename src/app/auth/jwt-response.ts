export class JwtResponse {
  accessToken?: string;
  type = "Bearer";
  id?: number;
  username?: string;
  name?: string;
  surname?: string;
  phoneNumber?: string;
  email?: string;
  roles?: string[];
  verified?: boolean;
  rating?: number;
}
