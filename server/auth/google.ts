import {createRemoteJWKSet,jwtVerify} from 'jose';
import {env} from 'cloudflare:workers';
const GOOGLE_KEYS=createRemoteJWKSet(new URL('https://www.googleapis.com/oauth2/v3/certs'),{timeoutDuration:5000,cooldownDuration:30000,cacheMaxAge:3600000});
// Public OAuth identifier from the existing project. Never a client secret.
export const googleClientId=()=>(env as unknown as Record<string,string>).GOOGLE_CLIENT_ID||'266804567942-5d4nai44lro2t5tt0571dv1u5ca94mer.apps.googleusercontent.com';
export async function verifyGoogle(credential:string,nonce:string){const {payload}=await jwtVerify(credential,GOOGLE_KEYS,{audience:googleClientId(),issuer:['https://accounts.google.com','accounts.google.com'],algorithms:['RS256'],requiredClaims:['sub','exp','iat','nonce'],maxTokenAge:'10m',clockTolerance:30});if(payload.nonce!==nonce||payload.email_verified!==true||typeof payload.email!=='string'||typeof payload.sub!=='string')throw new Error('Invalid Google identity');return {sub:payload.sub,email:payload.email,name:typeof payload.name==='string'?payload.name.slice(0,100):'Explorer',picture:typeof payload.picture==='string'&&payload.picture.startsWith('https://')?payload.picture:null}}
