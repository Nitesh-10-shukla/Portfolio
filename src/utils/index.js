import axios from '../api/index';
// import axios from "axios";
// export const ContactData =async(value)=>{
//     console.log(value,);
//     try{
//     let {data} = await axios.post('api/contact',value)
//     return data
//     }
//     catch(err){
//         console.log(err);
//     }

// }
export const getBlog=async()=>{
    try{
    let {data} = await axios.get('api/getBlog')
    return data
    }
    catch(err){
        console.log(err);
    }
}
export const getProjects=async()=>{
    try{
    let {data} = await axios.get('api/getProjects')
    return data
    }
    catch(err){
        console.log(err);
    }
}
