<template>
  <el-container>
    <!-- <el-aside width="300px" id="sider">
      <AsideInfo />
    </el-aside> -->
    <el-card class="page-card" shadow="hover">
      <template #header>
        <div class="card-header">项目介绍</div>
      </template>

      <div class="content">
        <p class="paragraph">
          本项目依据科技创新2030—“新一代人工智能”重大项目2021年度申报指南中任务1.1
          “因果推理与决策理论模型研究”提出申请。
        </p>
        <div class="img">
          <img src="/src/assets/img/researchBackground.png" alt="background" />
        </div>
        <p class="paragraph">
          研究内容：研究面向跨媒体数据的因果关系发现方法，构建数据驱动的因果网络结构学习理论，支持因果辅助下决策判断；研究基于因果关联的决策理论和反事实推断方法，构建因果强化学习框架，刻画环境、动作和激励之间的多层因果关联与耦合，形成知识引导、数据驱动和行为探索相结合的因果推理和反事实推理基础模型和算法；研究基于因果的机器学习泛化理论和可解释性框架，提出基于因果的去除伪关联表征学习机理，突破模型泛化瓶颈问题，提升模型系统的安全性、鲁棒性及可解释性。
        </p>
        <div class="img">
          <img src="/src/assets/img/researchContain.png" alt="contain" />
        </div>
        <p class="paragraph">
          考核指标：提出基于因果推理和决策的新方法和新模型，实现包括因果发现、因果迁移学习、因果强化决策、反事实推理在内的综合因果智能开源框架；提出深度模型中因果关联的评价分析方法，降低对数据独立同分布的依赖，提升泛化能力和可解释性；在不少于3个典型大规模场景中验证深度学习方法的因果推理和决策能力；开源数据、模型和代码等，开源成果下载量和注册使用等方面具有一定影响力。
        </p>
      </div>
    </el-card>
  </el-container>
</template>

<script>
import AsideInfo from "../components/AsideInfo.vue";

export default {
  components: { AsideInfo },
};
</script>

<style scoped>
.page-card {
  margin: 0 16px;
}

.card-header {
  font-size: 28px;
  font-weight: 600;
}

.intro-row {
  align-items: flex-start;
}

.content {
  padding-right: 8px;
}

.paragraph {
  margin: 12px 0;
  line-height: 1.8;
  color: #333;
}

.img {
  display: flex;
  justify-content: center;

  text-align: center;
  margin: 16px 0;

  img {
    width: 800px;
    display: block;
    border-radius: 6px;
  }
}
</style>
