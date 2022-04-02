<template>
  <v-layout column justify-center align-center>
    <v-row>
      <v-col>
        <h2>This is The Secret Authenticate Route</h2>
      </v-col>
    </v-row>

    <v-row style="margin-bottom: 20px">
      <v-col>
        <client-only>
          <Unity :unity="unityContext" width="800px" height="600px" />
        </client-only>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
import UnityWebgl from 'unity-webgl'
export default {
  name: 'VideoGamePage',
  components: {
    Unity: UnityWebgl.vueComponent,
  },
  data() {
    return {
      unityContext: this.$webgl,
      loading: true,
    }
  },
}
</script>
