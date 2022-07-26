export const createLoginAdapter = (response:any) => {
  return {
    accessToken: response.token
  }
}
