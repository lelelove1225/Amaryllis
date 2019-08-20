<template>
  <div>
    <linkbutton :image-src="imageSrc" :link-url="linkUrl" />
  </div>
</template>

<script>
import linkbutton from "../../atoms/linkbutton/linkbutton.vue";
export default {
  components: {
    linkbutton
  },
  data() {
    return {
      links: [
        {
          imageSrc: require("../../../assets/icon/GitHub-Mark-Light-120px-plus.png"),
          linkUrl: "https://github.com/lelelove1225"
        },
        {
          imageSrc: require("../../../assets/icon/GitHub-Mark-Light-120px-plus.png"),
          linkUrl: "https://github.com/lelelove1225"
        }
      ]
    };
  }
};
</script>

<style scoped>
div {
}
</style>
