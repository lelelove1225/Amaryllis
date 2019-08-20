<template>
  <section>
    天気
    <div class="weather">
      <img :src="`${weatherValue.icon}`" />
      <div>{{ weatherValue.weather }}</div>
      <br />
      <div>{{ Math.round(weatherValue.temp) }}℃</div>
    </div>
  </section>
</template>

<style scoped>
.weather {
  float: left;
  display: table;
  width: 100%;
  vertical-align: middle;
}
</style>

<script>
import * as axios from "axios";
export default {
  data: function() {
    return {
      weatherValue: {
        date: "",
        temp: 0,
        weather: "",
        icon: ""
      }
    };
  },
  mounted() {
    this.getNews();
  },

  methods: {
    getNews() {
      const url =
        "https://newsapi.org/v2/top-headlines?" +
        "country=jp&" +
        "apiKey=" +
        process.env.NEWS_API_KEY;
      axios
        .get(url)
        .then(response => {
          // eslint-disable-next-line no-console
          console.log(response.data);
        })
        .catch(err => {
          print(err);
        });
    }
  }
};
</script>
