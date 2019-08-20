<template>
  <section>
    <div>
      aaa
    </div>
  </section>
</template>

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
