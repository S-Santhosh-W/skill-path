import {identity,fail} from '@/server/middleware/auth';
import {database} from '@/server/services/db';
import {resolveModule} from '@/server/learning/catalog';
export async function GET(){try{const u=await identity(),rows=await database().prepare('SELECT * FROM resource_progress WHERE user_id=? AND saved=1 ORDER BY updated_at DESC').bind(u.userId).all<any>();return Response.json({resources:rows.results.map(r=>({...JSON.parse(r.snapshot),moduleId:r.module_id,status:r.status,saved:true,moduleName:resolveModule(r.module_id)?.name||'Module'}))})}catch(e){return fail(e)}}
