import { UserManager, UserManagerSettings, User } from 'oidc-client';

export function getClientSettings(): UserManagerSettings {
  return {
      authority: 'https://localhost:44310/',
      client_id: 'shopSearch',
      redirect_uri: 'https://localhost:4200/auth/identity-sing-in-callback',
      post_logout_redirect_uri: 'https://localhost:4200/',
      response_type:"id_token token",
      scope:"openid profile shopSearch",
      filterProtocolClaims: true,
      loadUserInfo: true
  };
}
