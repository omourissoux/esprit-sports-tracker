interface RefreshApiToken {
    token_type : string;
    access_token : string;
    expires_at : number;
    expires_in : number;
    refresh_token : string;
}

export default RefreshApiToken;