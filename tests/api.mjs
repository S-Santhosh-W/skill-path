import assert from 'node:assert/strict';
const base=process.env.TEST_BASE_URL||'http://localhost:5173';
const cookie='__sites_local_auth=1';
async function call(path,body,auth=true,origin=base){const r=await fetch(base+path,{method:body?'POST':'GET',headers:{...(auth?{Cookie:cookie}:{}),...(body?{'Content-Type':'application/json',Origin:origin}:{})},body:body?JSON.stringify(body):undefined});return {status:r.status,data:await r.text().then(t=>{try{return JSON.parse(t)}catch{return {error:t}}})}}
let count=0;function ok(value,message){assert.ok(value,message);console.log('PASS',message);count++}
let r=await call('/api/state',null,false);ok(r.status===401,'anonymous private data rejected');
r=await call('/api/state',{action:'goal',value:'ai-engineer'},true,'https://other.example');ok(r.status===403,'cross-origin mutation rejected');
r=await call('/api/state');ok(r.status===200&&r.data.skills.length>0,'authenticated passport loads');const initial=r.data;const previousGoal=initial.goal.career_id;
r=await call('/api/state',{action:'skill',value:{name:'QA disposable skill',level:120,evidence:'test'}});ok(r.status===400,'out-of-range proficiency rejected');
r=await call('/api/state',{action:'skill',value:{name:'QA disposable skill',level:45,evidence:'Temporary local test'}});ok(r.status===200,'skill save succeeds');
r=await call('/api/state');ok(r.data.skills.some(s=>s.name==='QA disposable skill'&&s.level===45&&s.source==='self-reported'),'skill persists and remains self-reported');
await call('/api/state',{action:'remove-skill',value:'QA disposable skill'});
r=await call('/api/state',{action:'goal',value:'backend-developer'});r=await call('/api/state');ok(r.data.goal.career_id==='backend-developer','goal persists');await call('/api/state',{action:'goal',value:previousGoal});
r=await call('/api/state',{action:'progress',value:{id:'missing-module',progress:100}});ok(r.status===400,'unknown learning module rejected');
r=await call('/api/state',{action:'confirm',value:['not-owned-suggestion']});ok(r.status===404,'foreign or missing suggestion rejected');
for(const action of ['chat','career','skill-gap','analyze-call','voice']){r=await call('/api/ai/'+action,{language:'ta'});ok(r.status===200&&r.data.mode==='mock',action+' mock adapter works')}
const before=await call('/api/state');r=await call('/api/state',{action:'call',value:{duration:12,language:'ta'}});ok(r.status===200,'call summary saved');const after=await call('/api/state');ok(JSON.stringify(before.data.skills)===JSON.stringify(after.data.skills)&&before.data.profile.preferred_language===after.data.profile.preferred_language,'unconfirmed call does not mutate passport or language');const last=after.data.calls[0],suggestions=after.data.suggestions.filter(s=>s.session_id===last.id);ok(suggestions.length===3,'call analysis suggestions are separate records');const choice=suggestions.find(s=>s.kind==='language');await call('/api/state',{action:'confirm',value:[choice.id]});r=await call('/api/state');ok(r.data.profile.preferred_language==='ta'&&r.data.confirmed.some(c=>c.suggestion_id===choice.id),'only explicit selection changes language');await call('/api/state',{action:'profile',value:{...initial.profile,language:initial.profile.preferred_language}});
console.log(`${count} checks passed`);
