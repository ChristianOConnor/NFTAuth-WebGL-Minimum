<template>
  <v-layout column justify-center align-center>
    <v-row>
      <v-col>
        <h2>This is The Secret Authenticate Route</h2>
      </v-col>
    </v-row>

    <v-row style="margin-bottom: 20px">
      <v-col>
        <Unity :unity="unityContext" width="800px" height="600px" />
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
/* import { UnityWebgl } from 'unity-webgl'

const Unity = new UnityWebgl({
  loaderUrl: '~/Build/look-away-webGLbuild1-uncomp.loader.js',
  dataUrl: "~/Build/look-away-webGLbuild1-uncomp.data",
  frameworkUrl: "~/Build/look-away-webGLbuild1-uncomp.framework.js",
  codeUrl: "~/Build/look-away-webGLbuild1-uncomp.wasm"
}) */

export default {
  name: 'VideoGamePage',
  components: {
    //Unity: UnityWebgl.vueComponent
  },
  data() {
    return {
      //unityContext: Unity,
      loading: true,
    };
  },

  created() {},

  methods: {},
};
</script>

<style scoped>
</style>
