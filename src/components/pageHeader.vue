<template>
  <header class="header">
    <div class="logo-box">
      <span class="logo-icon">Y</span>
      <b>Hacker News</b>
    </div>
    <ul class="tab-ul">
      <li class="tab-li"
          v-for="li in headerMenuList"
          :key="li.name">
        <router-link
          class="tab-li-link"
          :to="li.path">{{li.name}}</router-link>
      </li>
    </ul>
    <div class="login-btn">
      <a href="#">login</a>
    </div>
  </header>
</template>

<script>
    export default {
        name: "page-header",
      data() {
        return {
          headerMenuList: [
            {name: 'new', path: "/"},
            {name: 'past', path: "/"},
            {name: 'comments', path: "/"},
            {name: 'task', path: "/"},
            {name: 'show', path: "/"},
            {name: 'jobs', path: "/"},
            {name: 'submit', path: "/"},
          ],
        }
      },
    }
</script>

<style lang="scss" scoped>
  .header {
    height: 30px;
    width: 100%;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    background: $headerBgColor;
    padding: 0 20px 0 10px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .logo-box{
    display: flex;
    align-items: center;
    cursor: pointer;
    .logo-icon{
      height: 24px;
      width: 24px;
      text-align: center;
      box-sizing: border-box;
      border: 1px solid #FFF;
      line-height: 22px;
      font-size: 18px;
      font-weight: bold;
      color: #FFF;
      margin-right: 5px;
    }
    b{
      font-size: 20px ;
      line-height: 24px;
    }
  }

  .tab-ul {
    display: flex;
    align-items: center;
  }

  .tab-li {
    padding: 0 10px;
    line-height: 14px;
    border-right: 1px solid $textColorMain;
    position: relative;
    font-size: 14px;
    font-weight: bold;
    opacity: 0.8;
    &:last-child {
      border-right: none;
    }
    &:hover{
      opacity: 1;
    }
    &.active {
      opacity: 1;
    }
    .tab-li-link{
      &:hover{
        color: $textColorMain;
        //text-decoration: none;
      }
    }
  }

  .login-btn{
    position: absolute;
    right: 10px;
    font-size: 14px;
    font-weight: bold;
    opacity: 0.8;
    cursor: pointer;
    a:hover{
      color: $textColorMain;
      opacity: 1;
    }
  }
</style>
