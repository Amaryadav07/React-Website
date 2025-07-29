
import { toast } from 'react-toastify';
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"mycart",
    initialState:{
        cart:[]
    },
    reducers:{
        addToCart:(state, actions)=>{
        const mydata= state.cart.filter(key=>key.id==actions.payload.id);
        if (mydata.length>=1)
        {
            alert("This Product Already Added!");
        }
        else 
        {
            state.cart.push(actions.payload);
        } 
        },

        qtyIncr:(state, actions)=>{
            for (var i=0; i<state.cart.length; i++)
            {
                if (state.cart[i].id==actions.payload.id)
                {
                    state.cart[i].qnty++;
                }
            }
        },

      qtyDecr: (state, actions) => {
  for (let i = 0; i < state.cart.length; i++) {
    if (state.cart[i].id === actions.payload.id) {
      if (state.cart[i].qnty <= 1) {
      toast.warning(<span style={{ fontWeight: 'bold', color: '#ff8800' }}>Quantity cannot be less than 1</span>);

      } else {
        state.cart[i].qnty--;
      }
    }
  }
},
 
        proRemove:(state, actions)=>{
            state.cart= state.cart.filter(key=>key.id!=actions.payload.id);
            
        }
    }
})

export const {addToCart, qtyIncr, qtyDecr, proRemove} = cartSlice.actions;
export default cartSlice.reducer;