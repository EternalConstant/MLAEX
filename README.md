# Multimodal-LAE-XLMIMO 数据集展示网站

这是一个基于 React 19、TypeScript 和 Tailwind CSS 构建的现代化数据集展示网站。专为 **Multimodal-LAE-XLMIMO** 数据集设计，用于展示多模态传感数据、通信场景、下载链接及引用格式。

## ✨ 项目特性

- **现代 UI 设计**: 采用 Slate (深空灰) 与 Teal (青色) 的配色方案，风格简洁专业。
- **响应式布局**: 完美适配桌面大屏、平板和移动手机端。
- **模块化结构**:
  - **Overview**: 沉浸式 Hero 区域，大图背景与简明介绍。
  - **Scene Visualization**: 展示城市、郊区及自定义场景的轨迹与射线追踪可视化。
  - **Multimodal Visualization**: 展示图像、LiDAR、码本 (Codebook) 和波束赋形 (Beamforming) 等多模态数据。
  - **Citation**: 一键复制 BibTeX 引用格式。
- **高性能**: 基于 Vite 构建，加载速度极快。

## 🛠️ 本地开发指南

确保你的电脑已安装 [Node.js](https://nodejs.org/) (建议 v18+)。

### 1. 安装依赖

下载项目代码后，打开终端（命令行），进入项目根目录运行：

```bash
npm install
```

### 2. 启动本地预览

```bash
npm run dev
```

启动后，浏览器访问 `http://localhost:5173` 即可实时预览修改。

---

## 🚀 部署指南 (如何发布上线)

以下提供四种部署方式，请根据你的偏好选择。

### 方案一：部署到 GitHub Pages (自动化 - 推荐)

这种方式利用 GitHub Actions，每当你推送代码到主分支时，网站会自动构建并更新。

1. **准备 GitHub 仓库**: 创建新仓库并将代码推送到 `main` 分支。
2. **配置自动部署**:
   - 在项目根目录创建 `.github/workflows/deploy.yml` 文件。
   - 复制以下内容到文件中：
     ```yaml
     name: Deploy to GitHub Pages
     on:
       push:
         branches: [ main ]
     permissions:
       contents: read
       pages: write
       id-token: write
     jobs:
       build:
         runs-on: ubuntu-latest
         steps:
           - uses: actions/checkout@v4
           - uses: actions/setup-node@v4
             with:
               node-version: 20
               cache: 'npm'
           - run: npm ci
           - run: npm run build
           - uses: actions/upload-pages-artifact@v3
             with:
               path: ./dist
       deploy:
         environment:
           name: github-pages
           url: ${{ steps.deployment.outputs.page_url }}
         needs: build
         runs-on: ubuntu-latest
         steps:
           - uses: actions/deploy-pages@v4
     ```
3. **启用 GitHub Pages**:
   - 推送代码后，进入 GitHub 仓库 -> **Settings** -> **Pages**。
   - 在 Source 处选择 **GitHub Actions**。

---

### 方案二：手动命令行部署 (最常用)

如果你不想配置 Actions，只想在本地写完代码后，运行一个命令手动发布，请使用此方法。

**1. 安装部署工具**
在项目根目录运行终端命令：
```bash
npm install gh-pages --save-dev
```

**2. 修改 package.json**
打开 `package.json` 文件，做两处修改：

*   **添加 homepage 字段** (请将 `username` 和 `repo-name` 替换为你的实际信息)：
    ```json
    "homepage": "https://username.github.io/repo-name",
    ```
*   **在 scripts 中添加部署命令**：
    ```json
    "scripts": {
      "dev": "vite",
      "build": "tsc && vite build",
      "preview": "vite preview",
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist"
    }
    ```

**3. 执行部署**
每次想要更新网站时，只需运行：
```bash
npm run deploy
```
这个命令会自动执行打包，并将生成的网页文件推送到仓库的 `gh-pages` 分支。

**4. 设置 GitHub Pages**
- 进入 GitHub 仓库 -> **Settings** -> **Pages**。
- 在 **Build and deployment** 下的 Source 选择 **Deploy from a branch**。
- Branch 选择 `gh-pages` 分支，文件夹选择 `/ (root)`，点击 Save。

---

### 方案三：使用 Vercel 或 Netlify (拖拽部署)

1. 在本地终端运行 `npm run build`。
2. 将生成的 `dist` 文件夹直接拖拽到 Netlify Drop 或 Vercel 导入界面即可。

---

### 方案四：直接使用 dist 目录部署 (传统服务器)

如果你有自己的服务器（如 Nginx, Apache, IIS）或者想把文件交给运维人员部署，可以使用此方法。

1. **执行构建**:
   在项目根目录运行以下命令：
   ```bash
   npm run build
   ```
2. **获取文件**:
   构建完成后，项目根目录下会生成一个 `dist` 文件夹。
3. **上传/复制**:
   将 `dist` 文件夹内的**所有内容**复制到你的 Web 服务器根目录（例如 Nginx 的 `/usr/share/nginx/html` 或 Apache 的 `/var/www/html`）。

**注意**: 本项目配置了 `vite.config.ts` 中的 `base: './'`，这意味着生成的静态文件使用的是相对路径。因此，你不仅可以将它部署在服务器根路径，也可以部署在任意子目录中，无需额外修改服务器配置。

---

## 📄 常见问题

**Q: 打开网站后图片不显示？**
A: 请确保图片文件实际存在于 `public/images/` 目录下。代码中引用的路径（如 `images/Overview/RGB Image.jpg`）是相对于 `public` 文件夹的。不要在代码中使用 `/public/` 开头，直接用 `images/...` 即可。

**Q: 部署后是空白页？**
A: 本项目已配置 `vite.config.ts` 中的 `base: './'`，这通常能解决路径问题。如果仍然空白，请按 F12 检查 Console 报错。如果你使用了自定义域名或特定子路径，可能需要调整 `base` 配置。

## 📝 目录结构说明

```text
├── components/          # UI 组件
│   ├── Navbar.tsx       # 导航栏
│   ├── ScenariosPage.tsx # 场景可视化页面
│   ├── MultimodalPage.tsx # 多模态数据页面
│   └── ...
├── public/              # 静态资源
│   └── images/          # 图片存放处
├── App.tsx              # 主入口
├── vite.config.ts       # 构建配置
└── README.md            # 说明文档
```