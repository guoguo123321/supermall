import {ADD_COUNTER,ADD_TO_CART} from './mutation_type'

export default{
  [ADD_COUNTER](state, oldProduct){
    oldProduct.count ++;
  },
  [ADD_TO_CART](state, payload){
    state.cartList.push(payload)
  }
}
