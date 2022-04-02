import UnityWebgl from 'unity-webgl'

export default ({ _ }, inject) => {
    const Unity = new UnityWebgl({
        loaderUrl: '/Build/tetris-demo.loader.js',
        dataUrl: '/Build/tetris-demo.data',
        frameworkUrl: '/Build/tetris-demo.framework.js',
        codeUrl: '/Build/tetris-demo.wasm',
      })
    inject('webgl', Unity)
    //inject('webglJustImport', UnityWebgl)
  }