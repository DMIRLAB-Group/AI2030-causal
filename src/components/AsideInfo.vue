<template>
  <div class="aside">
    <el-card shadow="hover" class="teacher">
      <img src="/src/assets/img/teacherCai.png" alt="teacher" />
      <p>广东工业大学</p>
      <p>蔡瑞初</p>
    </el-card>
    <el-card shadow="hover">
      <div class="link">
        <h3>相关链接</h3>
        <p>
          <a href="https://www.gdut.edu.cn" target="_blank">广东工业大学</a>
        </p>
        <p><a href="https://www.stu.edu.cn" target="_blank">汕头大学</a></p>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.aside {
  margin-left: 16px;
}
.teacher {
  text-align: center;
  margin-bottom: 16px;
}
.teacher img {
  width: 100%;
  border-radius: 5%;
}
.link h3 {
  margin: 0 0 6px 0;
}
</style>
