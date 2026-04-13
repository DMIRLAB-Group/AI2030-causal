<template>
  <div class="result">
    <el-card class="result-card" shadow="hover">
      <template #header>
        <div class="card-header">
          <span>成果展示</span>
        </div>
      </template>

      <el-row>
        <el-col :span="4" class="left">
          <el-menu
            :default-active="defaultActive"
            @select="change"
            class="menu-vertical"
          >
            <!-- 动态渲染：课题 -> 方向 -> 论文/专利（仅在存在数据时展示） -->
            <template
              v-for="(group, gIndex) in achievements"
              :key="`group-${gIndex}`"
            >
              <!-- 显示课题（只要有 output 数组就展示），即使没有数据也展示方向 -->
              <el-sub-menu
                v-if="group.output && group.output.length"
                :index="`g-${gIndex}`"
              >
                <template #title>{{ group.groupName }}</template>

                <!-- 每个方向（只显示有数据的方向） -->
                <template
                  v-for="(dir, dIndex) in group.output"
                  :key="`dir-${gIndex}-${dIndex}`"
                >
                  <!-- 无论该方向是否有数据都展示方向；论文/专利项在无数据时为 disabled -->
                  <el-sub-menu :index="`g-${gIndex}-d-${dIndex}`">
                    <template #title>{{ dir.researchDirection }}</template>
                    <el-menu-item :index="`g-${gIndex}-d-${dIndex}-Paper`">
                      论文
                    </el-menu-item>
                    <el-menu-item :index="`g-${gIndex}-d-${dIndex}-Patent`">
                      专利
                    </el-menu-item>
                  </el-sub-menu>
                </template>
              </el-sub-menu>
            </template>
          </el-menu>
          <div class="link">
            <div class="link-title">开源代码</div>
            <div class="link-list">
              <a
                class="link-item"
                href="https://github.com/DMIRLAB-Group/CDMIR"
                target="_blank"
                rel="noopener"
              >
                CDMIR
              </a>
              <a
                class="link-item"
                href="https://github.com/py-why/causal-learn"
                target="_blank"
                rel="noopener"
              >
                Causal-Learn
              </a>
            </div>
          </div>
        </el-col>
        <el-col :span="20">
          <template v-if="showList && showList.length">
            <Output :showList="showList" :showType="showType" />
          </template>
          <template v-else>
            <div class="empty">
              <el-empty description="暂无数据" />
            </div>
          </template>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import Output from "../components/Output.vue";
import { achievements } from "../data/achievements.js";

export default {
  name: "Result",
  components: { Output },
  data() {
    return {
      // 当前菜单的默认激活项（字符串 index）
      defaultActive: "",
      // 当前展示的列表（论文或专利）
      showList: [],
      showType: "",
      // 课题成果数据
      achievements: achievements,
    };
  },
  created() {
    // 在创建时自动选择第一个有数据的项作为默认激活项
    let found = false;
    for (let g = 0; g < this.achievements.length && !found; g++) {
      const group = this.achievements[g];
      if (!group.output || !group.output.length) continue;
      for (let d = 0; d < group.output.length && !found; d++) {
        const dir = group.output[d];
        if (dir.papers && dir.papers.length) {
          this.showList = dir.papers;
          this.defaultActive = `g-${g}-d-${d}-Paper`;
          this.showType = "Papers";
          found = true;
        } else if (dir.patents && dir.patents.length) {
          this.showList = dir.patents;
          this.defaultActive = `g-${g}-d-${d}-Patent`;
          this.showType = "Patents";
          found = true;
        }
      }
    }
  },
  methods: {
    change(index) {
      // 预期 index 格式：g-{gIndex}-d-{dIndex}-{Type}，Type 为 Paper 或 Patents
      if (!index) return;
      const parts = index.split("-");
      // 简单校验
      if (parts.length < 5) return (this.showList = []);
      const gIndex = parseInt(parts[1], 10);
      const dIndex = parseInt(parts[3], 10);
      const type = parts[4];
      const group = this.achievements[gIndex];
      if (!group) return (this.showList = []);
      const dir = group.output && group.output[dIndex];
      if (!dir) return (this.showList = []);
      if (type === "Paper") {
        this.showList = dir.papers || [];
        this.showType = "Papers";
      } else if (type === "Patent") {
        this.showList = dir.patents || [];
        this.showType = "Patents";
      } else {
        this.showList = [];
        this.showType = "";
      }
    },
  },
};
</script>

<style scoped>
.result {
  margin: 0 16px;
}
.card-header {
  font-size: 28px;
  font-weight: 600;
}
.left {
  border-right: 1px solid #f0f0f0;
}
.menu-vertical {
  border-right: none;
}
.empty {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
}
.link {
  margin-top: 16px;
  margin-right: 20px;
  padding: 12px 14px;
  border: 1px solid #e6e8eb;
  border-radius: 8px;
  background: linear-gradient(135deg, #fafbff 0%, #f5f7fb 100%);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
}
.link-title {
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 600;
  color: #1f2d3d;
}
.link-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.link-item {
  color: #2c6cf6;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 8px;
  border-radius: 6px;
  transition: background-color 0.2s ease, color 0.2s ease;
}
.link-item::after {
  content: "";
  width: 12px;
  height: 12px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size: 12px 12px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%232c6cf6' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='9 18 15 12 9 6'/%3E%3C/svg%3E");
}
.link-item:hover {
  background-color: #e8f0ff;
  color: #1a4ecc;
}
</style>
