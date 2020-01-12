<template>
  <div class="date-container">
    <div class="simulation-input" @click="handlerShowDate">请选择日期</div>
    <div class="simulation-date-container" v-if="showDate">
      <div class="simulation-date">
        <div class="date-header">
          <div class="arrow-left">
            <i class="el-icon-d-arrow-left"></i>
            <i class="el-icon-arrow-left" @click="monthSub"></i>
          </div>
          <div>
            <span>{{year}}年</span>
            <span>{{month}}月</span>
          </div>
          <div class="arrow-right">
            <i class="el-icon-arrow-right" @click="monthAdd"></i>
            <i class="el-icon-d-arrow-right"></i>
          </div>
        </div>
        <div>
          <div class="date-week">
            <ul>
              <li v-for="(item, index) of weekList" :key="index">{{item}}</li>
            </ul>
          </div>
          <div class="date-body">
            <ul>
              <template v-for="(item, index) of rightMonth">
                <li :key="index">
                  <div v-if="item">{{item}}</div>
                </li>
              </template>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "date",
  data() {
    return {
      date: null,
      showDate: false,
      // eslint-disable-next-line standard/array-bracket-even-spacing
      weekList: Object.freeze(["日", "一", "二", "三", "四", "五", "六"]),
      hasThirthOne: Object.freeze([1, 3, 5, 7, 8, 10, 12]), // 这些月份31天
      rightMonth: [],
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1
    };
  },
  mounted() {
    this.getRightMonthDate();
  },
  methods: {
    handlerShowDate() {
      this.showDate = !this.showDate;
    },
    // 判断这一天是周几
    judegWeek(year, month, day) {
      const d = new Date();
      d.setFullYear(year, month, day);
      return d.getDay();
    },
    // 获取月份的天数
    getRightMonthDate(v = new Date()) {
      const month = v.getMonth() + 1;
      const year = v.getFullYear();
      let lastDayWeek = "";
      let firstDayWeek = "";
      // 一个月31天的情况
      if (this.hasThirthOne.includes(month)) {
        firstDayWeek = this.judegWeek(year, month - 1, 1);
        lastDayWeek = 6 - this.judegWeek(year, month, 31);
        console.log(lastDayWeek, 'lastDayWeek')
        console.log(firstDayWeek, 'firstDayWeek')
        const TempRightMonth = new Array(31).fill("").map((item, index) => {
          return index + 1;
        });
        while (firstDayWeek) {
          TempRightMonth.unshift(false);
          firstDayWeek--;
        }
        while (lastDayWeek) {
          TempRightMonth.push(false);
          lastDayWeek--;
        }
        this.rightMonth = Object.freeze(TempRightMonth);
      }
      // 一个月30天的情况
      // 一个月28天或者29天的情况
    },
    // 月份递减
    monthSub() {
      console.log("x");
      const d = new Date();
      let month = this.month - 1;
      if (month) {
        this.month = month;
        d.setFullYear(this.year, month);
      } else {
        this.year = this.year - 1;
        this.month = 11;
        d.setFullYear(this.year, 12);
      }
      this.getRightMonthDate(d);
    },
    // 月份递增
    monthAdd() {}
  }
};
</script>
<style scoped>
.date-container {
  display: inline-block;
  font-size: 14px;
  min-width: 220px;
}
.simulation-input {
  padding: 0 6px;
  height: 36px;
  line-height: 36px;
  border: 1px solid red;
  cursor: pointer;
  border-radius: 4px;
  text-align: left;
}
.simulation-date-container {
  position: relative;
}
.simulation-date {
  position: absolute;
  top: 2px;
  width: 100%;
  /* text-align: left; */
  border: 1px solid red;
}
.date-header {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
}
.date-header i {
  cursor: pointer;
}
.arrow-left {
}
.arrow-right {
}
.date-body ul {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.date-body ul li {
  display: inline-block;
  width: calc(100% / 7);
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.date-week ul li {
  display: inline-block;
  width: calc(100% / 7);
}
</style>
