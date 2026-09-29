import OfficerPortal from '@/src/officer/portal';
export default async function Page({params}:{params:Promise<{section:string}>}){const {section}=await params;return <OfficerPortal section={section}/>}
