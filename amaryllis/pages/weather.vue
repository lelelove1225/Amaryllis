<template>
  <section>
    <div class="weather">
      <img :src="`${weatherValue.icon}`" />
      <div>{{ weatherValue.weather }}</div>
      <br />
      <div>{{ Math.round(weatherValue.temp) }}℃</div>
    </div>
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
  display: inline-block;
}
.weather div {
  float: left;
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
      },
      weatherValueList: []
    };
  },
  mounted() {
    this.getWeather();
  },

  methods: {
    getWeather() {
      const city = "Tokyo";
      const url =
        "http://api.openweathermap.org/data/2.5/forecast?q=" +
        city +
        ",jp&units=metric&APPID=" +
        process.env.WEATHER_API_KEY;
      // eslint-disable-next-line no-console
      console.log(process.env.WEATHER_API_KEY);
      axios.get(url).then(response => {
        const { list } = response.data;
        // eslint-disable-next-line no-console
        console.log(this.weatherValue);
        for (let i = 0; i < 4; i++) {
          const weatherValue = {};
          const target = list[i];
          // eslint-disable-next-line no-console
          console.log(target);
          weatherValue.date = new Date(target.dt_txt);
          weatherValue.temp = target.main.temp;
          weatherValue.icon = `http://openweathermap.org/img/w/${
            target.weather[0].icon
          }.png`;
          weatherValue.weather = target.weather[0].description;
          // eslint-disable-next-line no-console
          console.log(weatherValue);
          this.weatherValueList.push(weatherValue);
        }
        // eslint-disable-next-line no-console
        console.log(this.weatherValueList);
      });
    }
  }
};
</script>
