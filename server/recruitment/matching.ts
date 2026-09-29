import type {Skill} from '@/src/services/catalog';
export type Requirement={skill:string;level:number;required:number};
export type MatchExplanation={score:number;demonstrated:number;total:number;strong:string[];developing:string[];missing:string[];verified:string[];interestAligned:boolean;available:boolean;explanation:string};
/** Swap this service with an external provider later; components only consume the explanation contract. */
export function explainMatch(required:Requirement[],skills:(Skill&{reviewed?:boolean})[],goal:string,job:string,available:boolean):MatchExplanation{
 const core=required.filter(r=>r.required===1),strong:string[]=[],developing:string[]=[],missing:string[]=[],verified:string[]=[];let sum=0;
 for(const r of core){const s=skills.find(s=>s.name.toLowerCase()===r.skill.toLowerCase());if(!s||!s.reviewed||s.level===0){missing.push(r.skill);continue}sum+=Math.min(s.level/Math.max(r.level,1),1);if(s.level>=r.level)strong.push(r.skill);else developing.push(r.skill);if(s.reviewed)verified.push(r.skill)}
 const score=core.length?Math.round(sum/core.length*100):0,interestAligned=!!goal&&job.toLowerCase().split(/\s+/).some(w=>w.length>3&&goal.toLowerCase().includes(w));
 return {score,demonstrated:strong.length,total:core.length,strong,developing,missing,verified,interestAligned,available,explanation:`${strong.length}/${core.length} required skills meet the target level. ${verified.length} relevant skills have officer-reviewed evidence. ${developing.length} are developing; ${missing.length} are missing. ${available?'Candidate has opted into opportunities.':'Candidate is not available.'}`};
}
export const stages=['matched','contacted','interested','application','shortlisted','referred','interview','offer','placed'] as const;
