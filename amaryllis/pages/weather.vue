<template>
  <section>
    <div class="weather">
      <ul v-for="weather of weatherValueList" :key="weather.date">
        <li>
          <div>{{ weather.date }}</div>
        </li>
        <li><img :src="`${weather.icon}`" /></li>
        <li>
          <div>{{ weather.weather }}</div>
        </li>
        <li>
          <div>{{ Math.round(weather.temp) }}℃</div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.weather ul li {
  list-style: none;
  display: table-cell;
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
      },
      weatherValueList: []
    };
  },
  mounted() {
    this.getWeather();
    // this.splitString();
  },

  methods: {
    getWeather() {
      const city = "Tokyo";
      const url =
        "http://api.openweathermap.org/data/2.5/forecast?q=" +
        city +
        ",jp&units=metric&APPID=" +
        process.env.WEATHER_API_KEY;
      const valueList = [];
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
          console.log(this.weatherValueList);
          valueList[i] = weatherValue;
        }

        // eslint-disable-next-line no-console
        console.log(valueList);
        this.weatherValueList = valueList;
        this.splitString(valueList);
      });
    },
    splitString(valueList) {
      // eslint-disable-next-line no-console
      console.log("aaa");
      for (let index = 0; index < this.weatherValueList.length; index++) {
        const { date } = this.weatherValueList[index];
        // eslint-disable-next-line no-console
        const splittedDate = String(date).split(" ");

        const week = splittedDate[0];
        const month = splittedDate[1];
        const day = splittedDate[2];
        this.getCurrentTime(day);
        this.weatherValueList[index].week = week;
        this.weatherValueList[index].month = month;
        this.weatherValueList[index].day = day;
      }
    },
    getCurrentTime() {
      const hiduke = new Date();

      // 年・月・日・曜日を取得する
      const year = hiduke.getFullYear();
      const month = hiduke.getMonth() + 1;
      const week = hiduke.getDay();
      const day = hiduke.getDate();
      const hours = hiduke.getHours();
      const minute = hiduke.getMinutes();

      const yobi = ["日", "月", "火", "水", "木", "金", "土"];

      const display =
        "西暦" +
        year +
        "年" +
        month +
        "月" +
        day +
        "日 " +
        yobi[week] +
        "曜日" +
        hours +
        "時" +
        minute +
        "分";
      // eslint-disable-next-line no-console
      console.log(display);
      return display;
    }
  }
};
</script>
