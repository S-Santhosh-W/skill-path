import {env} from 'cloudflare:workers';
import {sessionUser} from '@/server/auth/session';
export type SkillPathUser={userId:string;displayName:string;email:string;fullName:string|null;picture?:string;isDemo:boolean};
export async function identity():Promise<SkillPathUser>{const user=await sessionUser();if(!user)throw new Error('Unauthorized');return user}
export function sameOrigin(req:Request){const origin=req.headers.get('origin'),configured=(env as unknown as Record<string,string>).PUBLIC_ORIGIN,url=new URL(req.url);const valid=origin===url.origin||(!!configured&&origin===configured);if(!origin||!valid||req.headers.get('sec-fetch-site')==='cross-site')throw new Error('Forbidden')}
export function fail(e:unknown){const message=e instanceof Error?e.message:'';return Response.json({error:message==='Unauthorized'?'Your session has expired. Please sign in or explore the demo.':message==='Forbidden'?'Request rejected.':'We could not save this change. Please try again.'},{status:message==='Unauthorized'?401:message==='Forbidden'?403:500})}
