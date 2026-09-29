import {cookies} from 'next/headers';
import {database} from '@/server/services/db';
import {SESSION_COOKIE,tokenHash,cookieFlags} from '@/server/auth/session';
import {sameOrigin,fail} from '@/server/middleware/auth';
export async function POST(req:Request){try{sameOrigin(req);const jar=await cookies(),token=jar.get(SESSION_COOKIE)?.value;if(token)await database().prepare('DELETE FROM auth_sessions WHERE token_hash=?').bind(await tokenHash(token)).run();jar.set(SESSION_COOKIE,'',cookieFlags(req,0));return Response.json({ok:true})}catch(e){return fail(e)}}
