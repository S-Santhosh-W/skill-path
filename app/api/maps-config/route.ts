import {env} from 'cloudflare:workers';
import {identity,fail} from '@/server/middleware/auth';
export async function GET(){try{await identity();const config=env as unknown as Record<string,string>;return Response.json({embedKey:config.GOOGLE_MAPS_EMBED_KEY||null})}catch(e){return fail(e)}}
