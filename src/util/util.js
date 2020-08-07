import moment from 'moment';
// 获取本周第一天
const showWeekFirstDay = () => {
  var Nowdate = new Date();
  var WeekFirstDay = new Date(Nowdate - (Nowdate.getDay() - 1) * 86400000);
  let M = Number(WeekFirstDay.getMonth()) + 1;
  return WeekFirstDay.getFullYear() + "-" + M + "-" + WeekFirstDay.getDate();
};
// 获取本周最后一天
const showWeekLastDay = () => {
  var Nowdate = new Date();
  var WeekFirstDay = new Date(Nowdate - (Nowdate.getDay() - 1) * 86400000);
  var WeekLastDay = new Date((WeekFirstDay / 1000 + 6 * 86400) * 1000);
  let M = Number(WeekLastDay.getMonth()) + 1;
  return WeekLastDay.getFullYear() + "-" + M + "-" + WeekLastDay.getDate();
};
const formatDate = () => {
  var date = new Date();
  var YY = date.getFullYear() + '-';
  var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
  // var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  // var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
  // var ss = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
  return YY + MM + DD;
};
const dateFormatDay = (timestamp) => {
  var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + '-';
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  var D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate());
  return Y + M + D;
};
const isToday = (str) => {
  let dayStart = moment().startOf('day').format('YYYY-MM-DD HH:mm:ss');
  let dayEnd = moment().endOf('day').format('YYYY-MM-DD HH:mm:ss');
  let flog = moment(str).isBetween(dayStart, dayEnd);
  if (flog) {
      return true;
  } else {
      //之前
      return false;
  }
};
const isThisYear = (str) => {
  let dayStart = moment().startOf('year').format('YYYY-MM-DD HH:mm:ss');
  let dayEnd = moment().endOf('year').format('YYYY-MM-DD HH:mm:ss');
  let flog = moment(str).isBetween(dayStart, dayEnd);
  if (flog) {
      return true;
  } else {
      //之前
      return false;
  }
};
export default {
    showWeekFirstDay,
    showWeekLastDay,
    formatDate,
    dateFormatDay,
    isToday,
    isThisYear
};