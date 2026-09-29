import {cookies} from 'next/headers';
import {googleClientId} from '@/server/auth/google';
import {randomToken,tokenHash,cookieFlags} from '@/server/auth/session';
import {database} from '@/server/services/db';
export async function GET(req:Request){const token=randomToken(),db=database();await db.prepare('DELETE FROM auth_challenges WHERE expires_at<?').bind(Date.now()).run();await db.prepare('INSERT INTO auth_challenges(token_hash,expires_at) VALUES(?,?)').bind(await tokenHash(token),Date.now()+600000).run();(await cookies()).set('skillpath_nonce',token,cookieFlags(req,600));return Response.json({clientId:googleClientId(),nonce:token},{headers:{'Cache-Control':'no-store'}})}
