
const environment = 'prod'
function getURL(environment){
    switch(environment) {

        case 'dev':
            return  'http://localhost:8080'
        case 'prod':
            return 'http://3.129.89.65:8080'
        default:
             return process.env.NEXT_PUBLIC_LOCAL_URL
}}
// Server URL depending on environment
export const server=getURL(environment)