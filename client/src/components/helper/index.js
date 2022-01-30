
const environment = 'prod'
function getURL(environment){
    switch(environment) {

        case 'dev':
            return  'http://localhost:8080'
        case 'prod':
            return 'https://divs.albacars.app'
        default:
             return process.env.NEXT_PUBLIC_LOCAL_URL
}}
// Server URL depending on environment
export const server=getURL(environment)

export const formatValue = (n) => {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}