import {sessionUser} from '@/server/auth/session';
export async function GET(){const user=await sessionUser();return Response.json({user},{headers:{'Cache-Control':'no-store'}})}
