import {database} from '@/server/services/db';
export function learningEvent(userId:string,kind:string,detail:string){return database().prepare('INSERT INTO learning_events(id,user_id,kind,detail,created_at) VALUES(?,?,?,?,?)').bind(crypto.randomUUID(),userId,kind,detail,new Date().toISOString())}
export function skillSnapshot(userId:string,skill:string,level:number,source:string){return database().prepare('INSERT INTO skill_history(id,user_id,skill,level,source,created_at) VALUES(?,?,?,?,?,?)').bind(crypto.randomUUID(),userId,skill,level,source,new Date().toISOString())}
