# 项目启动与数据填充说明

## 启动步骤

1. 安装依赖（首次或依赖变动时）：
   ```bash
   npm install
   ```
2. 启动开发服务器：
   ```bash
   npm run dev
   ```
3. 浏览器访问终端输出的本地地址（默认 http://localhost:3000/），即可查看页面。

## 数据文件填写规范

数据位于 `src/data` 目录，主要包含三个文件：

- 新闻列表（概览数据）：[src/data/new.js](src/data/new.js)
- 新闻详情（内容与图片）：[src/data/newsDetails.js](src/data/newsDetails.js)
- 成果列表（论文/专利等）：[src/data/achievements.js](src/data/achievements.js)

### 1) 新闻列表：new.js

每条新闻用于列表展示，可外链或站内详情。字段示例：

```javascript
export const newsItems = [
  {
    title: '示例新闻标题',
    url: 'https://example.com/news', // 外链时使用
    // 若需跳转到站内详情页，添加 internalId，对应 newsDetails.js 里的 id
    // internalId: 'kickoff-20230322',
    // 可选：显示在时间轴上的日期
    // date: '2023-03-22'
  },
];
```

### 2) 新闻详情：newsDetails.js

用于站内详情页。每条记录通过 `id` 与列表项的 `internalId` 关联。
字段说明：

- `id`: 唯一标识，字符串。
- `title`: 详情页标题。
- `date`: 详情页时间。
- `content`: 数组，支持段落和图片两种类型，按顺序渲染。

结构示例：

```javascript
export const newsDetails = [
  {
    id: 'kickoff-20230322',
    title: '示例详情标题',
    date: '2023-03-22 20:42',
    content: [
      { type: 'paragraph', text: '这里是一段正文内容。' },
      { type: 'img', src: 'https://example.com/pic1.jpg', text: '图片说明（可选）' },
      { type: 'paragraph', text: '继续的正文内容……' },
      // 如需占位，src 可留空字符串，后续补图
      // { type: 'img', src: '', text: '占位说明' },
    ],
  },
];
```

### 3) 站内跳转关联

- 在 [src/data/new.js](src/data/new.js) 中，将列表项加入 `internalId`（如 `internalId: 'kickoff-20230322'`）。
- 在 [src/data/newsDetails.js](src/data/newsDetails.js) 中创建对应 `id` 的详情记录。
- 列表页面 [src/views/News.vue](src/views/News.vue) 会对有 `internalId` 的项使用站内跳转，对有 `url` 的项使用外链。

### 4) 图片存放与引用

- 仅支持远程 URL（`https://...`）。
- text` 字段可作为图片下方说明文字；留空则不显示说明。

### 5) 成果数据：achievements.js

用于成果展示页，已按课题/方向分组。顶层导出 `achievements` 数组，每个元素代表一个课题组：

```javascript
export const achievements = [
  {
    groupName: '课题一',
    output: [
      {
        researchDirection: '因果发现',
        papers: [
          {
            title: '论文标题',
            author: '作者列表',
            abstract: '摘要（可选）',
            date: '2024/01/01',
            status: 'Published', // 展示用状态
            status_color: 'success', // Element Plus 标签色，如 success / primary / warning
            imgUrl: 'learn1-1.png', // 对应 src/assets/img/ 下的配图，可为空
            paperUrl: 'https://example.com/paper.pdf',
          },
          // ... 更多论文
        ],
        patents: [
          {
            title: '专利标题',
            author: '发明人列表',
            abstract: '',
            date: '2024/02/01',
            status: 'Published',
            status_color: 'success',
            paperUrl: '',
          },
          // ... 更多专利
        ],
      },
      // ... 更多方向
    ],
  },
  // ... 更多课题组
];
```

填写要点：

- `groupName`：课题或分组名称。
- `researchDirection`：该组下的研究方向。
- `papers` / `patents`：列表项字段可留空的有 `abstract`、`imgUrl`、`paperUrl`；`status_color` 需使用 Element Plus 颜色关键字（如 `success`、`primary`、`warning`）。
- 图片建议放入 [src/assets/img](src/assets/img) 并以文件名引用；如暂未有图，可留空字符串。

## 常见问题

- 新增详情后，确保列表项有对应 `internalId`，否则无法从新闻列表跳转。
- 本地图片路径需以 `/src/assets/...` 开头，确保打包时可被解析。
- 若修改了数据但页面未更新，可尝试刷新或重启开发服务器。

