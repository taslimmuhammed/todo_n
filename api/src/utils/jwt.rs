use std::time::Duration;

use axum::http::StatusCode;
use chrono::Utc;
use dotenvy_macro::dotenv;
use jsonwebtoken::{decode, encode, Algorithm, DecodingKey, EncodingKey, Header, Validation};
use serde::{Deserialize, Serialize};

use super::custom_error::CustomError;

#[derive(Deserialize, Serialize, Debug)]
pub struct Claims{
    exp:usize,
    iat:usize
}
pub fn create()-> Result<String, StatusCode>{
    let mut now = Utc::now();
    let iat = now.timestamp() as usize;
    let expires_in = Duration::from_secs(200000);
    now+=expires_in;
    let exp = now.timestamp() as usize;
    let claim = Claims{exp, iat};
    let secret: &'static str = dotenv!("JWT_SECRET");
    let key = EncodingKey::from_secret(secret.as_bytes());
    encode(&Header::default(), &claim, &key).map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)
}

pub fn is_valid(token:&str)-> Result<(), CustomError>{
    let secret: &'static str = dotenv!("JWT_SECRET");
    let key = DecodingKey::from_secret(secret.as_bytes());
    decode::<Claims>(token, &key, &Validation::new(Algorithm::HS256))
        .map_err(|error|  
            match error.kind(){
                jsonwebtoken::errors::ErrorKind::ExpiredSignature => CustomError::new("token expired, please sign in again ", StatusCode::UNAUTHORIZED),
                _ =>CustomError::new("server error", StatusCode::INTERNAL_SERVER_ERROR)
            }
        )?;
    Ok(())
}