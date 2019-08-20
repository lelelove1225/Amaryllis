<template>
  <div>
    <img :src="imgSrc" @click="onLinkClick" />
  </div>
</template>
<script>
export default {
  props: {
    imageSrc: {
      type: String,
      default: ""
    },
    linkUrl: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      imgSrc: this.imageSrc,
      url: this.linkUrl
    };
  },
  methods: {
    onLinkClick() {
      window.location.href = this.linkUrl;
    }
  }
};
</script>
