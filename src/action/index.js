export const adder=(data)=>{
    return{
      type:"ADD",
      payload:{
        id:new Date().getTime().toString(),
        data:data
        }
    }
}

