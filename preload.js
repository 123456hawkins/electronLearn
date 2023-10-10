// preload.js
// 所有的 Node.js API接口 都可以在 preload 进程中被调用.
// 它拥有与Chrome扩展一样的沙盒。
// Electron 的主进程是一个拥有着完全操作系统访问权限的 Node.js 环境。 除了 Electron 模组 之外，您也可以访问 Node.js 内置模块 和所有通过 npm 安装的包。
// 另一方面，出于安全原因，渲染进程默认跑在网页页面上，而并非 Node.js里。
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  // 解决主进程通信问题，使用IPC
  ping: () => ipcRenderer.invoke('ping'),
  // 使用了一个辅助函数来包裹 ipcRenderer.invoke('ping') 调用，而并非直接通过 context bridge 暴露 ipcRenderer 模块。
  //  你永远都不会想要通过预加载直接暴露整个 ipcRenderer 模块。 这将使得你的渲染器能够直接向主进程发送任意的 IPC 信息，会使得其成为恶意代码最强有力的攻击媒介。
})
