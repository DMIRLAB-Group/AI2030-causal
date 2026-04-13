<template>
  <section>
    <template v-for="(item, index) in showList" :key="index">
      <div
        class="content"
        :style="{ height: showType === 'Patents' ? '120px' : '240px' }"
      >
        <div class="left">
          <p>{{ item.date }}</p>
          <el-tag :type="getTagType(item)">{{ item.status }}</el-tag>
        </div>
        <div class="main">
          <template v-if="item.paperUrl">
            <a :href="item.paperUrl" target="_blank" class="link">
              <h2 class="title">{{ item.title }}</h2>
              <p class="authors">{{ item.author }}</p>
              <p class="abstract">{{ item.abstract }}</p>
            </a>
          </template>
          <template v-else>
            <div class="no-link">
              <h2 class="title">{{ item.title }}</h2>
              <p class="authors">{{ item.author }}</p>
              <p class="abstract">{{ item.abstract }}</p>
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
  name: "paper",
  props: {
    showList: { type: Array, default: () => [] },
    showType: { type: String, default: "" },
  },
  methods: {
    getImgUrl(name) {
      try {
        return new URL(`../assets/img/paperImg/${name}`, import.meta.url).href;
      } catch (e) {
        return "";
      }
    },
    getTagType(item) {
      const t = item && item.status_color;
      const allowed = ["primary", "success", "warning", "info", "danger"];
      if (allowed.includes(t)) return t;
      return "info";
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
  height: 240px;
}
.content .left {
  width: 80px;
  height: 100%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
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
  height: 100%;
  flex: 1;
  padding: 0 20px;
}
.link {
  display: block;
  height: 100%;
}
.title {
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 显示行数 */
  -webkit-box-orient: vertical;
  line-height: 1.3em;
  height: 2.6em; /* 行高乘以显示行数 */
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
  height: 5.2em; /* 行高乘以显示行数 */
}
.content img {
  width: 100%;
}
a {
  color: inherit;
  text-decoration: none;
}
</style>
