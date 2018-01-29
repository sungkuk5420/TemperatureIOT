
<template>
  <v-slider prepend-icon="volume_up" v-model="media"></v-slider>
</template>

<script>
  export default {
    data () {
      return {
        media: 0,
        alarm: 0
      }
    }
  }
</script>
