<template>
  <div class="novel-site">
    <Header/>
    <main class="main-content">
      <section class="ranking-list">
        <table>
          <thead>
            <tr>
              <th>排名</th>
              <th>类型</th>
              <th>模型名称</th>
              <th>主要特点</th>
              <th>开发团队</th>
              <th>参数规模</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="model in currentModels" :key="model.id">
              <td>{{ model.rank }}</td>
              <td>{{ model.type }}</td>
              <td>{{ model.name }}</td>
              <td>{{ model.feature }}</td>
              <td>{{ model.team }}</td>
              <td>{{ model.parameters }}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <aside class="sidebar">
        <ul>
          <li><b>排行榜</b></li>
          <li @click="tabClick('综合榜')">综合榜</li>
          <li @click="tabClick('性能榜')">性能榜</li>
          <li @click="tabClick('创新榜')">创新榜</li>
          <li @click="tabClick('应用榜')">应用榜</li>
        </ul>
      </aside>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Header from '../components/Header.vue'
    components:{
        Header
    }

// 原始模型数据
const allModels = ref([
  {
    id: 1,
    rank: 1,
    type: '通用大模型',
    name: 'ChatGPT',
    feature: '强大的自然语言理解与生成能力，广泛应用于对话系统等',
    team: 'OpenAI',
    parameters: '千亿级'
  },
  {
    id: 2,
    rank: 2,
    type: '国产大模型',
    name: '文心一言',
    feature: '对中文语言有较好的处理能力，多领域知识融合',
    team: '百度',
    parameters: '数亿级'
  },
  {
    id: 3,
    rank: 3,
    type: '专业大模型',
    name: 'Model-Z',
    feature: '在特定领域性能卓越，计算速度快，资源利用率高',
    team: 'XYZ Lab',
    parameters: '百亿级'
  },
  {
    id: 4,
    rank: 4,
    type: '科研大模型',
    name: 'ScienceGPT',
    feature: '针对科学研究优化，数据处理和分析性能突出',
    team: 'Research Team',
    parameters: '数亿级'
  },
  {
    id: 5,
    rank: 5,
    type: '创新型大模型',
    name: 'InnoModel',
    feature: '采用全新架构，创新的训练算法',
    team: 'InnoTech',
    parameters: '数十亿级'
  },
  {
    id: 6,
    rank: 6,
    type: '探索大模型',
    name: 'QuestModel',
    feature: '探索新的应用场景，具有独特的创新思路',
    team: 'Adventure Team',
    parameters: '数亿级'
  }
]);

// 当前显示的模型数据
const currentModels = ref([]);
// 当前选中的 tab
const currentTab = ref('综合榜');

// tab 点击事件处理函数
const tabClick = (tab) => {
  currentTab.value = tab;
  // 根据选中的 tab 筛选模型数据
  if (tab === '综合榜') {
    currentModels.value = allModels.value;
  } else if (tab === '性能榜') {
    currentModels.value = allModels.value.filter(model => model.feature.includes('性能') || model.feature.includes('速度') || model.feature.includes('效率'));
  } else if (tab === '创新榜') {
    currentModels.value = allModels.value.filter(model => model.feature.includes('创新') || model.feature.includes('全新') || model.feature.includes('独特'));
  } else if (tab === '应用榜') {
    currentModels.value = allModels.value.filter(model => model.feature.includes('应用'));
  }
};

// 初始化时显示综合榜数据
tabClick('综合榜');
</script>

<style scoped>
/* 整体背景颜色 */
body {
  background-color: #f5f5f5;
}
/* 头部样式 */
.header {
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}
.nav li {
  margin-left: 40px;
  transition: color 0.3s ease;
}
.nav li:hover {
  color: #007bff;
}
.nav a {
  text-decoration: none;
  color: inherit;
  font-size: 18px;
}
/* 主要内容区域样式 */
.main-content {
  display: flex;
  margin:0 400px 0 420px;
  margin-top: 30px;
  padding: 5px;
}
/* 侧边栏样式 */
.sidebar {
  width: 250px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 5px;
  border-radius: 5px;
  margin-right: 30px;
}
.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.sidebar li {
  margin-bottom: 15px;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.3s ease;
}
.sidebar li:hover {
  color: #007bff;
}
.sidebar li b {
  font-size: 20px;
  margin-bottom: 10px;
  display: block;
}
/* 排行榜列表样式 */
.ranking-list {
  flex-grow: 1;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 30px;
  border-radius: 5px;
}
.ranking-list table {
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;
}
.ranking-list th,
.ranking-list td {
  border: 1px solid white;
  padding: 12px 15px;
  text-align: center;
}
.ranking-list th {
  background-color: #f9f9f9;
  font-weight: bold;
}
</style>