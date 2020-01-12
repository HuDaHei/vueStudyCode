/* eslint-disable standard/object-curly-even-spacing */
<template>
  <div class="date-container" ref="dateContainer">
    <div class="simulation-input">
     <div class="show-date" @click="handlerShowDate">
        {{checkDate}}
     </div>
      <div class="del">
        <i class="el-icon-circle-close" @click="handlerDelDate"></i>
      </div>
    </div>
    <div class="simulation-date-container" v-if="showDate">
      <div class="simulation-date">
        <div class="date-header">
          <div class="arrow-left">
            <i class="el-icon-d-arrow-left" @click="yearSub"></i>
            <i class="el-icon-arrow-left" @click="monthSub"></i>
          </div>
          <div>
            <span>{{year}}年</span>
            <span>{{month + 1}}月</span>
          </div>
          <div class="arrow-right">
            <i class="el-icon-arrow-right" @click="monthAdd"></i>
            <i class="el-icon-d-arrow-right" @click="yearAdd"></i>
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
                <li :key="index" :class="[item.limit? 'limit': 'limit-no']" @click="handlerClick($event,item)">
                  <div v-if="item" :class="[item.alias ? 'today': '']">{{item.alias || item.days}}</div>
                </li>
              </template>
            </ul>
          </div>
        </div>
        <div class="check-time">
          <el-time-select
            placeholder="请选择时间"
            v-model="startTime"
            @change="handlerCheckTime"
            :picker-options="{
              start: '00:00',
              step: '00:10',
              end: '24:00',
              minTime: minTime
            }"
          ></el-time-select>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment';
// 判断是否是闰年
const isRunNian = year => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
};
export default {
  name: 'date',
  props: {
    limit: {
      type: Object,
      default: () => {
        return {
          start: new Date(),
          end: new Date(2020, 0, 15),
          limitType: 'right', // left right
          minTime: ''
        };
      }
    }
  },
  computed: {
    initDay () {
      const {limitType, start} = this.limit;
      if (limitType === 'between' || limitType === 'left') {
        return new Date(start.getTime() + 24 * 3600 * 1000);
      } else {
        return new Date();
      }
    },
    minTime () {
      return this.limit.minTime;
    }
  },
  data () {
    return {
      date: null,
      showDate: false,
      // eslint-disable-next-line standard/array-bracket-even-spacing
      weekList: Object.freeze(['日', '一', '二', '三', '四', '五', '六']),
      hasThirthOne: Object.freeze([1, 3, 5, 7, 8, 10, 12]), // 这些月份31天
      rightMonth: [],
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      startTime: '',
      checkDate: '',
      rightClickDate: ''
    };
  },
  mounted () {
    this.getRightMonthDate();
    this.$nextTick(() => {
      document.addEventListener('click', (e) => {
        //contains
        const parent = this.$refs.dateContainer;
        if(parent.contains(e.target)) {

        } else {
          this.showDate = false;
        }
      })
    });
  },
  methods: {
    handlerShowDate () {
      this.showDate = !this.showDate;
    },
    // 判断这一天是周几
    judegWeek (year, month, day) {
      const d = new Date();
      d.setFullYear(year, month, day);
      return d.getDay();
    },
    // 获取月份的天数
    getRightMonthDate (v = new Date()) {
      const month = v.getMonth();
      const year = v.getFullYear();
      const isRunNianBoolen = isRunNian(year);
      const setDays = (year, month, days = 31) => {
        let lastDayWeek = '';
        let firstDayWeek = '';
        firstDayWeek = this.judegWeek(year, month, 1);
        lastDayWeek = 7 - this.judegWeek(year, month, 31);
        const todayYear = new Date().getFullYear();
        const todayMonth = new Date().getMonth();
        const todayDate = new Date().getDate();
        const TempRightMonth = new Array(days).fill('').map((item, index) => {
          const temp = new Date(year, month, index + 1);
          let days = index + 1;
          let alias = '';
          if (year == todayYear && month == todayMonth && days == todayDate) {
            alias = '今天';
          }
          let limit = true;
          const { start, end, limitType } = this.limit;
          if (limitType === 'between') {
            if (temp > start && temp < end) {
              limit = false;
            }
          }
          if (limitType === 'left') {
            if (temp > start) {
              limit = false;
            }
          }
          if (limitType === 'right') {
            if (temp < end) {
              limit = false;
            }
          }
          return {
            limit, // 控制置灰的不可选择的
            alias,
            days,
            years: year,
            months: month
          };
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
      };
      // // 一个月31天的情况
      // 一个月30天的情况
      // 一个月28天或者29天的情况
      if (isRunNianBoolen) {
        if (month === 1) {
          setDays(year, month, 29);
        }
      } else {
        setDays(year, month, 28);
      }
      if (this.hasThirthOne.includes(month + 1)) {
        setDays(year, month);
      } else {
        setDays(year, month, 30);
      }
    },
    // 月份递减
    monthSub () {
      const d = new Date();
      let month = this.month - 1;
      if (month > 0) {
        this.month = month;
        d.setFullYear(this.year, month);
      } else {
        const year = this.year - 1;
        this.year = year;
        this.month = 11;
        d.setFullYear(year, 11);
      }
      this.getRightMonthDate(d);
    },
    // 月份递增
    monthAdd () {
      const d = new Date();
      let month = this.month + 1;
      console.log(month, 'month');
      if (month === 12) {
        const year = this.year + 1;
        this.year = year;
        this.month = 0;
        d.setFullYear(year, this.month);
      } else {
        this.month = month;
        d.setFullYear(this.year, this.month);
      }
      this.getRightMonthDate(d);
    },
    // 年份递减
    yearSub () {
      const d = new Date();
      this.year = this.year - 1;
      d.setFullYear(this.year, this.month);
      this.getRightMonthDate(d);
    },
    // 年份递增
    yearAdd () {
      const d = new Date();
      this.year = this.year + 1;
      d.setFullYear(this.year, this.month);
      this.getRightMonthDate(d);
    },
    // 手动点击li
    handlerClick (e, v) {
      if (v && !v.limit) {
        const { days: date, years, months } = v;
        // let [hours, minutes] = this.startTime.split(':');
        this.rightClickDate = Object.freeze(v);
        // const date = moment({ years, months, date: '5', hours: '15', minutes: '10', seconds: '3', milliseconds: '123'});
        // eslint-disable-next-line standard/object-curly-even-spacing
        let dates = moment({ years, months, date });
        if (this.startTime) {
          const [hours, minutes] = this.startTime.split(':');
          // eslint-disable-next-line standard/object-curly-even-spacing
          dates = moment({ years, months, date, hours, minutes });
        }
        this.checkDate = dates.format('YYYY-MM-DD HH:mm');
      }
    },
    // 手动选择时间
    handlerCheckTime (v) {
      // eslint-disable-next-line one-var
      let date = '', years = '', months = '';
      // const { days: date, years, months } = this.rightClickDate;
      if (this.rightClickDate) {
        date = this.rightClickDate.days;
        years = this.rightClickDate.years;
        months = this.rightClickDate.months;
      } else {
        date = this.initDay.getDate();
        years = this.initDay.getFullYear();
        months = this.initDay.getMonth();
      }
      let dates = null;
      if (v) {
        const time = v.split(':');
        const [hours, minutes] = time;
        // eslint-disable-next-line standard/object-curly-even-spacing
        dates = moment({ years, months, date, hours, minutes });
      } else {
        dates = moment({ years, months, date });
      }
      this.checkDate = dates.format('YYYY-MM-DD HH:mm');
    },
    // 手动删除日期
    handlerDelDate () {
      this.checkDate = '';
      this.showDate = false;
    }
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
  display: flex;
  padding: 0 6px;
  height: 36px;
  line-height: 36px;
  border: 1px solid red;
  cursor: pointer;
  border-radius: 4px;
  text-align: left;
}
.del {
  display: none;
}
.simulation-input:hover .del {
  display: block;
}
.show-date {
  flex: 8;
  height: 100%;
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
  line-height: 40px;
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
  line-height: 24px;
  cursor: pointer;
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
.check-time {
  padding-top: 6px;
}
.limit {
  background-color: #ccc;
}
.limit-no {
  background-color: transparent;
}
.today {
  color: red;
}
</style>
