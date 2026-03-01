// function startCompany (){
//     function ca(name){
//         return `namr  of your company is ${name}`
//     }
//     return ca
// }
// const getMeCompany = startCompany()
// const myCompanyName = getMeCompany("Zomato")



function eternal(guest){
    const guestName = guest
    function Zomato(){
        console.log(`hi ${guestName}, from zomato`);
    }
    function blinkit(){
        console.log(`hi ${guestName}, from blinkit`);
    }
    Zomato()
    blinkit()
}
const hitesh = eternal("hitesh")
const piyush = eternal("piyush")

hitesh.blinkit()
