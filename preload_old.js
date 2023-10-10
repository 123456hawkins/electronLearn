// preload.js

const { version } = require("vue/types/umd")

// 所有的 Node.js API接口 都可以在 preload 进程中被调用.
// 它拥有与Chrome扩展一样的沙盒。
// Electron 的主进程是一个拥有着完全操作系统访问权限的 Node.js 环境。 除了 Electron 模组 之外，您也可以访问 Node.js 内置模块 和所有通过 npm 安装的包。 
// 另一方面，出于安全原因，渲染进程默认跑在网页页面上，而并非 Node.js里。
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }
})
const information=document.getElementById('info')
information.innerText=`Chrome版本(v${versions.chrome()})`