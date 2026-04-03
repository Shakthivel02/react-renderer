export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface UserState {
  profiles: UserProfile[];
  loading: boolean;
  error: string | null;
}
