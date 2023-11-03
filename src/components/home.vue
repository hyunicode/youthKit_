<template>
  <div id="root">
    <div id="info">
      <img src="../assets/youthKit.png" alt="" />
      <div id="desc">
        <p id="title">
          <span style="font-family: 'STXinwei'">youthKit</span>
          组件库
        </p>
        <div style="margin: 30px">
          <span
            >&nbsp;&nbsp;一套轻量级的
            <span style="font-family: 'STXinwei'">Vue3</span> 组件库开发框架</span
          >
          <p id="hltext">HighLight</p>
          <div id="highlight">
            <div>
              <span>🚀 </span>
              <span><span style="font-family: 'STXinwei'">Vue3 + Vite ⇨ </span>更快的构建速度</span>
            </div>
            <div>
              <span>📰 </span>
              <span>交互式文档站, 便于开发调试</span>
            </div>
            <div>
              <span>📦 </span>
              <span>命令行创建组件&测试模板 </span>
            </div>
            <div>
              <span>🍾 </span>
              <span>完备的单元测试, 使用<span style="font-family: 'STXinwei'">Jest</span>实现</span>
            </div>
            <div>
              <span>✨ </span>
              <span
                >规范规约, 接入<span style="font-family: 'STXinwei'">f2elint</span>,
                代码质量👆</span
              >
            </div>
            <div>
              <span>🎨 </span>
              <span>支持全局导入<span style="font-family: 'STXinwei'"> & </span>按需引用</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="butt">
      <button @click="gotoKit" style="font-family: 'STkaiti'">立即上手</button>
      <button @click="gotoGit" style="font-family: 'STXinwei'">GitHub</button>
    </div>
  </div>
</template>

<script setup>
const gotoKit = () => (window.location.href = '#/youthKit');
const gotoGit = () => window.open('https://github.com/hyunicode/youthKit');
</script>

<style scoped>
html,
body {
  min-height: 100vh;
  font-family: 'Fira Sans', sans-serif;
  display: flex;
  overflow: hidden;
}

#root {
  background-color: #fdfdfd;
  /* background-image: linear-gradient(311deg, #f8fde2 30%, #dbcccc 100%); */
  background: linear-gradient(var(--degB), #f8fde2 30%, #dbcccc 100%);
  min-height: 100vh;
  font-family: 'Fira Sans', sans-serif;
  display: flex;
  overflow: hidden;
  animation: change 10s infinite;
}

#info {
  position: absolute;
  background-image: linear-gradient(var(--degA), rgb(188, 197, 136) 0%, #dcd0fd 74%);
  height: 500px;
  width: 800px;
  top: calc(50% - 250px);
  left: calc(50% - 400px);
  display: flex;
  border-radius: 25px;
  animation: change 10s infinite;
}

#info > img {
  width: 240px;
  height: 240px;
  margin-top: auto;
  margin-bottom: auto;
  position: relative;
  left: -25px;
}
#info > div {
  flex-basis: 600px;
  /* background-color: grey; */
  font-size: 20px;
}
#title {
  font-size: 54px;
  font-weight: bold;
  justify-content: center;
  text-align: start;
}

#hltext {
  font-size: 25px;
  font-weight: bold;
  justify-content: center;
  text-align: start;
  font-family: 'STXinwei';
}

#highlight > div {
  font-size: 20px;
  margin: 10px;
}

#butt {
  position: absolute;
  top: calc(50% + 250px);
  left: calc(50% - 400px);
  display: flex;
  justify-content: space-evenly;
  margin: 20px auto;
  width: 800px;
}

@property --degA {
  syntax: '<angle>';
  inherits: false;
  initial-value: 0deg;
}

@property --degB {
  syntax: '<angle>';
  inherits: false;
  initial-value: 360deg;
}

#butt > button {
  height: 40px;
  width: 100px;
  border-radius: 10px;
  font-size: 20px;
  background: linear-gradient(var(--degB), #d3d0db 0%, #c2deed 100%);
  transition: all 0.5s;
  animation: change 10s infinite;
}

@keyframes change {
  0% {
    --degA: 0deg;
    --degB: 360deg;
  }
  100% {
    --degA: 360deg;
    --degB: 0deg;
  }
}

#butt > button:hover {
  border-radius: 20px;
  box-shadow: 0 0 10px #d5c7ff, 0 0 20px #d5c7ff, 0 0 40px #d5c7ff, 0 0 80px #d5c7ff;
}
</style>
