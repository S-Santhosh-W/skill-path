'use client';
import {useEffect,useState} from 'react';
import Link from 'next/link';
import {Bookmark} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {request} from '@/src/services/api';
import {Resource} from './types';
import {ResourceCard,ResourceSkeleton} from './resource-card';
import {ResourceFilters,initialFilters,filterResources} from './resource-filters';
import {toast} from 'sonner';
export default function SavedResources(){const [resources,setResources]=useState<Resource[]|null>(null),[error,setError]=useState(''),[filters,setFilters]=useState(initialFilters),[busy,setBusy]=useState(false);async function load(){try{setResources((await request('/api/learning/library')).resources);setError('')}catch(e){setError((e as Error).message)}}useEffect(()=>{load()},[]);async function update(r:Resource){setBusy(true);try{await request('/api/learning/'+r.moduleId,{action:'resource',value:{id:r.id,status:r.status,saved:!!r.saved}});await load()}catch(e){toast.error((e as Error).message)}finally{setBusy(false)}}return <div className="module-hub"><div className="page-heading"><div><span className="eyebrow">KEEP THE GOOD ONES CLOSE</span><h1>My Learning Library</h1><p>Your saved resources, ready whenever you are.</p></div><Bookmark/></div>{error?<div role="alert"><p>{error}</p><Button onClick={load}>Try again</Button></div>:resources===null?<ResourceSkeleton/>:resources.length?<><ResourceFilters value={filters} onChange={setFilters}/><div className="resource-grid">{filterResources(resources,filters).map(r=><div key={r.moduleId+r.id}><Link className="library-module" href={'/app/learn/'+r.moduleId}>Open {(r as any).moduleName} Learning Hub →</Link><ResourceCard resource={r} onChange={update} busy={busy}/></div>)}</div>{!filterResources(resources,filters).length&&<p>No saved resources match these filters.</p>}</>:<div className="panel empty"><Bookmark size={32}/><h2>A home for your next discovery.</h2><p>Save a resource from any Learning Hub to find it here.</p><Link href="/app/roadmap" className="resource-open">Explore your roadmap →</Link></div>}</div>}
