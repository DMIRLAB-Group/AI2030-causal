<template>
  <section>
    <template v-for="(item, index) in showList" :key="index">
      <div class="content">
        <div class="left">
          <p>{{ item.date }}</p>
          <el-tag :type="getTagType(item)">{{ item.status }}</el-tag>
          <a v-if="item.link" :href="item.link" target="_blank" rel="noopener" class="recommend-btn left-btn"
            >成果推荐</a
          >
        </div>
        <div class="main">
          <template v-if="item.paperUrl">
            <a :href="item.paperUrl" target="_blank" class="link">
              <h2 class="title">{{ item.title }}</h2>
              <p class="authors">{{ item.author }}</p>
              <p class="abstract">{{ getIntro(item) }}</p>
            </a>
          </template>
          <template v-else>
            <div class="no-link">
              <h2 class="title">{{ item.title }}</h2>
              <p class="authors">{{ item.author }}</p>
              <p class="abstract">{{ getIntro(item) }}</p>
            </div>
          </template>
        </div>
        <div class="right" v-if="item.imgUrl">
          <img :src="getImgUrl(item.imgUrl)" alt="paper" />
        </div>
      </div>
    </template>
  </section>
</template>

<script>
export default {
  name: 'paper',
  props: {
    showList: { type: Array, default: () => [] },
    showType: { type: String, default: '' },
  },
  methods: {
    getImgUrl(name) {
      try {
        return new URL(`../assets/img/paperImg/${name}`, import.meta.url).href;
      } catch (e) {
        return '';
      }
    },
    getIntro(item) {
      return (item && (item.intro_cn || item.abstract || item.intro)) || '';
    },
    getTagType(item) {
      const t = item && item.status_color;
      const allowed = ['primary', 'success', 'warning', 'info', 'danger'];
      if (allowed.includes(t)) return t;
      return 'info';
    },
  },
};
</script>

<style scoped>
.content {
  display: flex;
  margin-left: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
.content .left {
  width: 80px;
  height: 100%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
  margin-top: 20px;
}
.content .left p {
  margin: 0 0 6px 0;
  font-size: 12px;
}
.content .left .el-tag {
  display: inline-block;
  width: 68px;
  text-align: center;
  box-sizing: border-box;
  padding: 4px 0;
}
.content .left .left-btn {
  margin-top: 8px;
  padding: 0;
  width: 68px;
  height: 24px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: #1f2d3d;
  background: #fff;
  border: 1px solid rgba(44, 108, 246, 0.12);
  border-radius: 6px;
  text-decoration: none;
  box-shadow: 0 2px 6px rgba(44, 108, 246, 0.04);
}
.content .left .left-btn:hover {
  background: #f7fbff;
  transform: translateY(-1px);
}
.content .right {
  width: 280px;
  height: 100%;
  flex-shrink: 0;
  margin-left: 10px;
  display: flex;
  align-items: center;
}
.main {
  min-height: 100%;
  flex: 1;
  padding: 0 20px;
}
.title {
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 显示行数 */
  -webkit-box-orient: vertical;
  line-height: 1.3em;
}
.authors {
  font-weight: 400;
  font-size: 12px;
}
.abstract {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* 显示行数 */
  -webkit-box-orient: vertical;
  line-height: 1.3em;
  color: #555;
  font-size: 13px;
  margin-top: 6px;
  padding-bottom: 20px;
}
.content img {
  width: 100%;
}
a {
  color: inherit;
  text-decoration: none;
}
.external-links {
  margin-top: 8px;
}
.recommend-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  font-size: 13px;
  color: #1f2d3d;
  background: linear-gradient(180deg, #fff 0%, #f7fbff 100%);
  border: 1px solid rgba(44, 108, 246, 0.12);
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(44, 108, 246, 0.06);
  text-decoration: none;
}
.recommend-btn::before {
  display: none;
}
.recommend-btn:hover {
  transform: translateY(-1px);
}
</style>
