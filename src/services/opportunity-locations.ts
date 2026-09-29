export type OpportunityLocation={id:string;name:string;city:string;type:string;career:string;skills:string[];role:string;roles:string[];experience:string;lat:number;lng:number;color:string;category:'Company'|'Training Centre'|'Skill Development Centre'|'Currently Hiring';nsqf:number};
const colors={'Company':'#ac8aff','Training Centre':'#64d6a0','Skill Development Centre':'#55d8ef','Currently Hiring':'#ffae64'};
const row=(id:string,name:string,city:string,lat:number,lng:number,category:OpportunityLocation['category'],career:string,skills:string[],roles:string[],nsqf:number):OpportunityLocation=>({id,name,city,lat,lng,category,career,skills,roles,role:roles[0],nsqf,color:colors[category],type:category,experience:'Entry level'});
// Fictional organizations and illustrative qualification alignment. No live vacancies or credentials.
export const opportunityLocations=[
row('nimbus','Nimbus Labs','Chennai',13.0827,80.2707,'Company','AI Engineer',['Python','Machine Learning','Communication','Docker'],['Junior AI Engineer','Frontend Developer'],4),
row('arc','Arc Systems','Chennai',12.98,80.22,'Currently Hiring','Backend Developer',['Python','SQL','Docker'],['Backend Developer'],5),
row('marina','Marina Training Studio','Chennai',13.04,80.18,'Training Centre','Retail Associate',['Customer Service','Communication','Inventory'],['Retail skills programme'],3),
row('vaigai','Vaigai Skill Centre','Madurai',9.9252,78.1198,'Skill Development Centre','Electrician',['Electrical Safety','Wiring','Fault Diagnosis'],['Electrical installation trainee'],4),
row('loom','Loom & Line Collective','Madurai',9.94,78.10,'Currently Hiring','Tailoring',['Pattern Cutting','Stitching','Measurement'],['Tailoring apprentice'],3),
row('kovai','Kovai Manufacturing Academy','Coimbatore',11.0168,76.9558,'Training Centre','Welder',['Welding','Safety','Blueprint Reading'],['Welding foundations programme'],4),
row('western','Western Tech Works','Coimbatore',11.05,77.02,'Company','Software Developer',['Java','Web Development','SQL'],['Junior Software Developer'],5),
row('cauvery','Cauvery Livelihood Hub','Tiruchirappalli',10.7905,78.7047,'Skill Development Centre','Logistics Assistant',['Inventory','Dispatch','Safety'],['Logistics skills programme'],3),
row('harvest','Harvest Skills Collective','Thanjavur',10.787,79.1378,'Training Centre','Agriculture',['Crop Planning','Soil Care','Irrigation'],['Sustainable farming workshop'],3),
row('lumen','Lumen Analytics','Bengaluru',12.9716,77.5946,'Currently Hiring','Data Analyst',['SQL','Data Analysis','Python'],['Data Analyst Intern'],4),
row('orbit','Orbit Cloud','Hyderabad',17.385,78.4867,'Company','Cloud Engineer',['Docker','Cloud Deployment','Linux'],['Cloud Operations Associate'],5),
row('care','CareBridge Learning Centre','Salem',11.6643,78.146,'Skill Development Centre','Healthcare Support',['Patient Assistance','Hygiene','Communication'],['Healthcare support training'],4)
];
