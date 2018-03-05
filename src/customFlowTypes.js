export type ObservableAction = {
  type: string
}

export type UserApiAuth = {
  facebookAuthData: {}
}

export type RestResponse = {
  data: Object
}

export type User = {
  email: string,
  password: string
}

export type AuthObj = {jwt: string, user: User}
