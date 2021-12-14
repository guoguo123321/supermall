import { request2 } from "./request";

export function getDetail(iid){
  return request2({
    url:'/detail',
    params:{
      iid,
    }
  })
}
// 推荐商品
export function getRecommend(){
  return request2({
    url:'/recommend',
  })
}
// 详情goods
export class Goods{
  constructor(itemInfo, columns, services){
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    // console.log(columns)
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}
// 商品信息
export class ShopInfoGoods{
  constructor(shopInfo){
    this.shopLogo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.cSells = shopInfo.cSells
    this.cGoods = shopInfo.cGoods
    this.score = shopInfo.score
  }
}
