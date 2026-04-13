<template>
  <el-container class="page-layout">
    <el-header class="page-header">
      <img src="/src/assets/img/banner.png" alt="banner" />
    </el-header>

    <el-main class="page-main">
      <el-menu
        mode="horizontal"
        :default-active="active"
        @select="onSelect"
        class="nav"
      >
        <el-menu-item
          index="Introduction"
          :class="['nav-item', active === 'Introduction' ? 'is-active' : '']"
          >项目简介</el-menu-item
        >
        <el-menu-item
          index="Project"
          :class="['nav-item', active === 'Project' ? 'is-active' : '']"
          >课题组</el-menu-item
        >
        <el-menu-item
          index="News"
          :class="['nav-item', active === 'News' ? 'is-active' : '']"
          >新闻动态</el-menu-item
        >
        <el-menu-item
          index="Result"
          :class="['nav-item', active === 'Result' ? 'is-active' : '']"
          >成果展示</el-menu-item
        >
      </el-menu>

      <div class="view-area">
        <router-view />
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return { active: "" };
  },
  created() {
    // 初始化时根据当前路由设置 active
    this.active =
      this.$route && this.$route.name ? this.$route.name : "Introduction";
  },
  watch: {
    // 当路由变化时更新菜单 active
    $route(to) {
      if (to && to.name) this.active = to.name;
      console.log("当前路由名称:", to.name);

      this.active =
        this.$route && this.$route.name === "NewsDetails"
          ? "News"
          : this.$route.name;
    },
  },
  methods: {
    onSelect(index) {
      if (this.$route.name !== index) {
        this.$router.push({ name: index });
      }
    },
  },
};
</script>

<style scoped>
.page-layout {
  width: 1200px;
  margin: 20px auto;
  box-sizing: border-box;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
}
.page-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  height: auto !important; /* 取消任何默认固定高度 */
  padding: 0; /* 去掉默认内边距，按需调整 */
  overflow: visible; /* 确保不会裁剪子元素 */
}

.page-header img {
  width: 100%;
  height: auto; /* 按宽度等比例缩放，高度自适应 */
  display: block;
}
.page-header {
  /* 确保 header 在最上层，不被下方内容覆盖 */
  position: relative;
  z-index: 1000;
}
.page-main {
  padding: 0;
  position: relative;
  z-index: 1;
}
.nav {
  display: flex;
  justify-content: center;

  .nav-item {
    font-size: 18px;
  }
  .nav-item.is-active {
    color: #409eff;
    font-weight: 600;
  }
}

.view-area {
  padding-top: 16px;
  z-index: 22;
}
</style>
