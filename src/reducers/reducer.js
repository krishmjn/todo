const initialState={
  list:[]
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      const {data,id}=action.payload;
     return{
      ...state,
      list:[
        ...state.list,
        {
          id:id,
          data:data
        }
      ]
     }
     default: return state
    }

};
