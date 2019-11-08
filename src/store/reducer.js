
//使用本地存储的数据
// let cart = window.localStorage.getItem('cart')
const defaultState = {
  cart:[]
}
export default(state = defaultState,action) =>{
  // 添加购物车
  if(action.type === 'ADD_CART'){
    let newState = JSON.parse(JSON.stringify(state))
    //判断数据库中是否已径添加过，如果添加过，直接加1,如果没有 push 到里面
    let index = newState.cart.findIndex(item =>{
      return item.id === action.product.id
    })
    if(index > -1){
      newState.cart[index].num +=1
    }else{
      newState.cart.push({...action.product,num:1})
    }
    // newState.cart.push(action.product)
    //购物车数据，本地化持久存储一下
    // window.localStorage.setItem('cart',JSON.stringify(newState.cart))
    // return newState
  }
  //减少
  if(action.type === 'REDUCE_CART'){
    let newState = JSON.parse(JSON.stringify(state))
    //判断列表中是否有此商品，没有直接返回新数据，如果有 num ，再判断 num 是否为1，如果为1，
    //点击删除当前行，否则减1，
    let index = newState.cart.findIndex(item =>{
      return item.id === action.product.id
    })
    if(index <= -1){
      return newState
    }

    if(newState.cart[index].num === 1){
        newState.cart.splice(index,1)
    }
    else{
        newState.cart[index].num -=1
    }
    //购物车数据，本地化持久存储一下
    // window.localStorage.setItem('cart',JSON.stringify(newState.cart))
    // return newState
    }
  return state
}