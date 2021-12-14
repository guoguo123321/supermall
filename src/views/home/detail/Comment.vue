<template>
  <div>
    <div class="comment">
      <div class="comment-com">
        <span>用户评价</span>
        <span>更多</span>
      </div>
      <div v-if="comment.list && (Object.keys(comment).length !== 0)">
        <div class="comment-user">
          <div class="comment-user-avatar">
            <img :src="comment.list[0].user.avatar" alt="">
            <span>{{comment.list[0].user.uname}}</span>
          </div>
          <div class="comment-user-content">{{comment.list[0].content}}</div>
          <div class="comment-user-created">
            <span>{{comment.list[0].created | showDate}}</span>
            <span>{{comment.list[0].style}}</span>
          </div>
          <div class="comment-image">
            <img :src="item" alt="" @load="commentImage" v-for="item in comment.list[0].images">
          </div>
        </div>
      </div>

      <div v-else class="comment-no">暂时还没有评论哟~( •̥́ ˍ •̀ू )</div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from 'common/util/util.js'
  export default {
    name: 'Comment',
    props:{
      comment:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    filters:{
      showDate(val){
        // 将时间戳转成new Date对象
        const date = new Date(val * 1000);
        // 2.将date进行格式化
        return formatDate(date, 'yyyy-MM-dd')
      }
    },
    methods:{
      commentImage(){
        this.$emit('commentImage')
      }
    }
  }
</script>

<style scoped>
  .comment-com {
    padding: 15px 20px;
    border-top: 1px solid rgb(158, 158, 158);
    border-bottom: 1px solid rgb(158, 158, 158);
    display: flex;
    justify-content: space-between;
  }
  .comment-image {
    display: flex;
  }
  .comment-image img{
    width: 25vw;
    padding-top: 10px;
    padding-right: 10px;
  }
  /* comment-user-avatar */
  .comment-user {
    padding: 15px;
  }
  .comment-user-avatar {
    display: flex;
    align-items: center;
  }
  .comment-user-avatar img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 10px;
  }
  /* comment-user-content */
  .comment-user-content {
    padding: 20px 0 10px 0;
    line-height: 22px;
  }
  /* comment-user-created */
  .comment-user-created span:first-child{
    padding-right: 10px;
  }
  .comment-no {
    padding: 20px 0;
    text-align: center;
  }
</style>
