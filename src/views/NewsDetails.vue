<template>
  <el-card class="page-card" shadow="always">
    <template #header>
      <div class="card-header">
        <div class="title">{{ detail?.title || "新闻详情" }}</div>
        <div class="meta" v-if="detail?.date">{{ detail.date }}</div>
      </div>
    </template>

    <template v-if="detail">
      <div>
        <div v-for="value in detail.content" :key="value.text || value.src">
          <div v-if="value.type === 'paragraph'">
            <p class="paragraph">
              {{ value.text }}
            </p>
          </div>
          <div v-else-if="value.type === 'img'" class="images-container">
            <img :src="value.src" class="images" :style="value.style" />
            <p class="image-caption">{{ value.text }}</p>
          </div>
        </div>
      </div>
    </template>

    <el-empty v-else description="未找到该新闻" />
  </el-card>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { getNewsDetailById } from "../data/newsDetails";

const route = useRoute();
const detail = computed(() => getNewsDetailById(route.params.id));
</script>

<style scoped>
.page-card {
  margin: 0 16px;
}
.card-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}
.title {
  width: 80%;
  font-weight: 600;
  font-size: 24px;
  text-align: center;
}
.meta {
  color: #666;
  font-size: 13px;
}
.paragraph {
  margin: 12px 0;
  padding: 0 20px;
  line-height: 1.9;
  color: #333;
  font-size: 18px;
  text-indent: 2em;
}
.images-container {
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 12px 0;
}
.images {
  width: 500px;
  margin: 0 auto;
}
.image-caption {
  text-align: center;
  color: #333;
  font-size: 16px;
  margin-top: 6px;
}
</style>
