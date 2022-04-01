<template>
  <v-row>
    <v-col class="text-center">
      <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-col>
  </v-row>
</template>

<script>
import { UnityWebgl } from 'unity-webgl'

const Unity = new UnityWebgl({
  loaderUrl: '~/Build/tetris-demo.loader.js',
  dataUrl: "~/Build/tetris-demo.data",
  frameworkUrl: "~/Build/tetris-demo.framework.js",
  codeUrl: "~/Build/tetris-demo.wasm"
})

export default {
  name: 'VideoGamePage',
  middleware: "login",
  components: {
    Unity: UnityWebgl.vueComponent
  },
  data() {
    return {
      unityContext: Unity,
      loading: true,
    };
  },

  created() {},

  methods: {},
}
</script>
