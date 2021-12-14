import {ADD_COUNTER,ADD_TO_CART} from './mutation_type'
export default {
  addCart(content,payload){
    return new Promise((resolve, reject)=> {
        let oldProduct = null;
      for(let item of content.state.cartList){
        if(item.iid === payload.iid){
          oldProduct = item;
        }
      }

      if(oldProduct){
        content.commit(ADD_COUNTER, oldProduct);
        resolve('购物车数量+1')
      }else{
        payload.checked = false;
        payload.count = 1;
        content.commit(ADD_TO_CART, payload)
        resolve('添加购物车成功')
      }
    })
  }
}
