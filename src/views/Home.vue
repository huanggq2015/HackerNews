<template>
  <section class="main">
    <div class="article">
      <div class="article-content">
        <div class="article-title">
          <i class="switch-btn"></i>
          <h3>{{article.name}}</h3>
          <span>({{article.domainName}})</span>
        </div>
        <div class="article-other">
          <a>
            <span>{{article.points}}</span> points by
            <span>{{article.author}}</span>
            <span> {{article.publishTime}}</span>
          </a>
          <a>hide</a>
          <a>past</a>
          <a>web</a>
          <a>favorite</a>
          <a>{{article.comments}} comments</a>
        </div>
        <div class="article-text">
          <pre>
            这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容，这是文章内容。</pre>
        </div>
      </div>
      <div class="add-comment">
        <textarea name="comment" rows="3" v-model="commentValue"></textarea>
        <button @click="addCommentClick()">add comment</button>
      </div>
    </div>
    <div class="comments" v-if="comments.length">
      <div class="comment-item"
           :class="{active: item.active}"
           v-for="item in comments"
           :key="item.id">
        <div class="comment-title">
          <i class="switch-btn" @click="parentSwitchBtnClick(item)"></i>
          <span>{{item.userName}}</span>
          <span>{{item.commentTime}}</span>
          <span>
            [<template v-if="item.points"> {{item.points}} points </template>
            <template v-else> - </template>]
            </span>
        </div>
        <div class="comment-content">
          <pre>{{item.content}}</pre>
        </div>
        <div class="comment-btn">
          <a @click="parentReplyClick(item)">reply</a>
          <a @click="parentVoteClick(item)">vote for him</a>
          <div class="add-comment" v-if="item.replyActive">
            <textarea name="comment" rows="3" v-model="commentInputValue"></textarea>
            <button @click="parentReplyCommentClick(item)">reply comment</button>
          </div>
        </div>
        <div class="comment-children">
          <div class="comment-children-item"
               :class="{active: child.active}"
               v-for="child in item.children"
               :key="child.id">
            <div class="comment-title">
              <i class="switch-btn" @click="childSwitchBtnClick(item, child)"></i>
              <span>{{child.childName}}</span>
              <span> reply </span>
              <span>{{child.parentName}}</span>
              <span>{{child.commentTime}}</span>
              <span>
            [<template v-if="child.points"> {{child.points}} points </template>
            <template v-else> - </template>]
            </span>
            </div>
            <div class="comment-content">
              <pre>{{child.content}}</pre>
            </div>
            <div class="comment-btn">
              <a @click="childReplyClick(item, child)">reply</a>
              <a @click="childVoteClick(item, child)">vote for him</a>
              <div class="add-comment" v-if="child.replyActive">
                <textarea name="comment" rows="3" v-model="commentInputValue"></textarea>
                <button @click="childReplyCommentClick(item, child)">reply comment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="comments no-comments" v-else>
      <div>暂无评论</div>
    </div>
  </section>
</template>

<script>
  /* Author: huangguangqiang
   * Time: 2021-02-06
   * Description: Hacker News 的 thread 详情页面
   */
  export default {
    name: 'Home',
    data() {
      return {
        article: {
          name: "A Article Title,A Article Title",
          domainName: "article.com",
          points: 0,
          author: "authorName",
          publishTime: "2021-02-06 12:12:12",
          comments: 0,
        },
        comments: [
          {
            id: 1,
            active: true,
            userName: "userName",
            commentTime: "2021-02-06 12:12:12",
            points: 12,
            content: "I think it's best if I give you my husband's email—he's sitting in front of a computer all day so he can print stuff off and get it back to you sooner than I could.",
            children: [
              {
                id: 2,
                active: true,
                childName: "childName",
                parentName: "parentName",
                commentTime: "2021-02-06 12:12:12",
                points: 0,
                content: "I think it's best if I give you my husband's email—he's sitting in front of a computer all day so he can print stuff off and get it back to you sooner than I could.",
              }
            ],
          }
        ],

        commentValue: "",
        commentInputValue: "",

        initId: 3,
      }
    },
    created() {
      this.getComments();
    },
    mounted() {

    },
    methods: {
      getComments() {
        this.comments = [];
        if (window.localStorage) {
          let comments = localStorage.getItem("comments");
          if (comments) {
            this.comments = JSON.parse(comments);
            this.updateArticle();
          }
          let initId = localStorage.getItem("initId");
          if(initId){
            this.initId = +initId;
          }
        } else {
          console.log("您的浏览器不支持 localStorage ，请升级浏览器版本！");
          // window.alert("您的浏览器版本太低，请升级浏览器版本！")
        }
      },
      updateArticle(){
        this.article.comments = this.comments.length;
      },
      addCommentClick() {
        if (!this.commentValue) {
          return
        }
        let userName = this.getRandomName();
        let commentTime = new Date().format("YYYY-MM-DD hh:mm:ss");
        let id = this.getId();
        this.comments.push({
          id: id,
          active: true,
          replyActive: false,
          userName: userName,
          commentTime: commentTime,
          points: 0,
          content: this.commentValue,
          children: [],
        });
        this.saveComments();
      },
      getId() {
        this.initId++;
        return this.initId;
      },
      getRandomName(len) {
        len = len || 5 + Math.floor(Math.random() * 10);//随机生成一个5~15个长度的字符
        let $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnoprstuvwxyz0123456789';
        let maxPos = $chars.length;
        let name = '';
        for (let i = 0; i < len; i++) {
          name += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return name;
      },
      saveComments() {
        let comments = JSON.parse(JSON.stringify(this.comments));
        //收起所有内容
        comments.forEach(item =>{
          item.active = false;
          item.replyActive = false;
          item.children.forEach(li=>{
            li.active = false;
            li.replyActive = false;
          })
        });
        localStorage.setItem("comments", JSON.stringify(comments));
        localStorage.setItem("initId", this.initId);
        this.updateArticle();
      },
      hideAllReplyComment(){
        this.commentInputValue = "";
        this.comments.forEach(li => {
          li.replyActive = false;
          li.children.forEach(childLi=>{
            childLi.replyActive = false;
          })
        });
        this.comments = JSON.parse(JSON.stringify(this.comments))
      },
      parentReplyClick(item) {
        this.commentInputValue = "";
        this.hideAllReplyComment();
        //隐藏其他的输入框，打开当前回复的输入框，并展开评论详情
        this.comments.forEach(li => {
          if(li.id === item.id){
            li.active = true;
          }
          li.replyActive = li.id === item.id;
          li.children.forEach(childLi=>{
            childLi.replyActive = false;
          })
        });
        this.comments = JSON.parse(JSON.stringify(this.comments))
      },
      parentReplyCommentClick(item, child){
        let content = this.commentInputValue;
        if(!content){
          return
        }
        let parentName = item.userName;
        if(child){
          parentName = child.childName;
        }
        let userName = this.getRandomName();
        let commentTime = new Date().format("YYYY-MM-DD hh:mm:ss");
        let id = this.getId();
        this.comments.forEach(li => {
          if(li.id === item.id){
            li.children.push({
              id: id,
              active: true,
              childName: userName,
              parentName: parentName,
              commentTime: commentTime,
              points: 0,
              content: content,
            })
          }
        });
        this.saveComments();
        this.commentInputValue = "";
        this.hideAllReplyComment();
      },
      childReplyClick(item, child) {
        this.commentInputValue = "";
        this.hideAllReplyComment();
        //隐藏其他的输入框，打开当前回复的输入框
        this.comments.forEach(li => {
          li.replyActive = false;
          li.children.forEach(childLi=>{
            childLi.replyActive = li.id === item.id && child.id === childLi.id;
            if(li.id === item.id && child.id === childLi.id){
              childLi.active = true;
            }
          })
        });
        this.comments = JSON.parse(JSON.stringify(this.comments))
      },
      childReplyCommentClick(item, child){
        this.parentReplyCommentClick(item, child);
      },
      parentVoteClick(item) {
        this.comments.forEach(li => {
          if(li.id === item.id){
            li.points++;
          }
        });
        this.saveComments();
      },
      childVoteClick(item, child) {
        this.comments.forEach(li => {
          if(li.id === item.id){
            li.children.forEach(childLi => {
              if(childLi.id === child.id){
                childLi.points++;
              }
            });
          }
        });
        this.saveComments();
      },
      parentSwitchBtnClick(item){
        this.comments.forEach(li => {
          if(li.id === item.id){
            li.active = !li.active;
            //收起评论详情，并隐藏评论输入框
            if(!li.active){
              li.replyActive = false;
            }
          }
        });
        this.comments = JSON.parse(JSON.stringify(this.comments))
      },
      childSwitchBtnClick(item, child){
        this.comments.forEach(li => {
          if(li.id === item.id){
            li.children.forEach(childLi => {
              if(childLi.id === child.id){
                childLi.active = !childLi.active;
                //收起评论详情，并隐藏评论输入框
                if(!childLi.active){
                  childLi.replyActive = false;
                }
              }
            });
          }
        });
        this.comments = JSON.parse(JSON.stringify(this.comments))
      },
    }
  }
</script>
<style lang="scss" scoped>
  @import "Home";
</style>
