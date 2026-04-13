<template>
  <el-card class="news-card" shadow="hover">
    <template #header>
      <div class="card-header">
        <span>新闻动态</span>
      </div>
    </template>

    <el-timeline>
      <el-timeline-item
        v-for="(item, idx) in newsItems"
        :key="idx"
        :timestamp="item.date || ''"
        placement="top"
      >
        <RouterLink :to="`/News/${item.internalId}`" class="news-link">
          {{ item.title }}
          <el-icon class="external-icon" aria-hidden="true">
            <Link />
          </el-icon>
        </RouterLink>
      </el-timeline-item>
    </el-timeline>
  </el-card>
</template>

<script setup>
import { Link } from "@element-plus/icons-vue";
import { newsItems } from "../data/new.js";
</script>

<style scoped>
.news-card {
  margin: 0 16px;
}

.card-header {
  font-size: 28px;
  font-weight: 600;
}

.news-link {
  position: relative;
  top: -12px;
  color: #1a73e8;
  font-size: 16px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
.external-icon {
  margin-left: 6px;
  vertical-align: middle;
}
</style>
