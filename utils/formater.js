import * as dayjs from 'dayjs'
require('dayjs/locale/id')
const utc = require('dayjs/plugin/utc')
dayjs.locale('id')
dayjs.extend(utc)

export const phoneNumber = (phone) => {
  if (!phone) {
    return null
  }

  // default indo
  const firstChar = phone.substring(0, 1)
  if (firstChar === '0') {
    return `+62${phone.substring(1, 100)}`
  }

  let findCountry = phone.substring(0, 2)
  if (findCountry === '62') { // indonesia
    return `+${phone}`
  }

  findCountry = phone.substring(0, 3)
  if (findCountry === '+62') { // indonesia
    const findZero = phone.substring(3, 4)
    if (findZero === '0') {
      return `+62${phone.substring(4, 100)}`
    } else {
      return phone
    }
  } else {
    return phone
  }
}

export const currency = (value) => {
  // const val = (value / 1).toFixed(2).replace('.', ', ')
  return `Rp ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
}

// date and time
export const numDayString = (date) => {
  if (date) {
    return dayjs(date).format('D')
  }
  return null
}
export const dateString = (date) => {
  // 01/01/2020
  return dayjs(date).format('DD/MM/YYYY')
}
export const formatDateTimeToUTC = (date) => {
  // 02-01-2020 00:00:00 -> 01-01-2020 17:00:00
  if (date) { return dayjs.utc(dayjs(`${date} 00:00:00`)).format('YYYY-MM-DD HH:mm:ss') }
  return null
}
export const formatDateTimeToUTC2 = (date) => {
  // 02-01-2020 23:59:59 -> 02-01-2020 16:59:59
  if (date) { return dayjs.utc(dayjs(`${date} 23:59:59`)).format('YYYY-MM-DD HH:mm:ss') }
  return null
}
export const formatDateTimeToUTC3 = (date, time) => {
  // 14:32, 01 January 2020
  if (date) { return dayjs.utc(`${date} ${time}`).format('HH:mm, DD MMMM YYYY') }
  return null
}
export const datetimeString = (date) => {
  // 14:32, 01 January 2020
  if (date) { return dayjs(date).format('HH:mm, DD MMMM YYYY') }
  return null
}
export const numMonthYearString2 = (date) => {
  // 01 January 2020
  return dayjs(date).format('YYYY/MM/1')
}
export const numMonthYearString = (date) => {
  // 01 January 2020
  return dayjs(date).format('YYYY-MM-1')
}
export const dateSpaceMonthString = (date) => {
  // 01 January 2020
  return dayjs(date).format('DD MMMM YYYY')
}
export const dateStringStartYear = (date) => {
  // 01 January 2020
  return dayjs(date).format('YYYY-MM-DD')
}
export const numMonthString = (date) => {
  if (date) {
    return dayjs(date).format('MMMM')
  }
  return null
}
export const dateAddDays = (date, day) => {
  if (date) {
    return dayjs(date).add(day, 'day')
  }
  return null
}
export const dateAddMonts = (date, month) => {
  if (date) {
    return dayjs(date).add(month, 'month')
  }
  return null
}
export const dateReduceMonts = (date, month) => {
  if (date) {
    return dayjs(date).subtract(month, 'month')
  }
  return null
}
export const dateReduceYear = (date, year, type = '') => {
  if (date) {
    if (type === 'plusOne') {
      const plusOne = dayjs(date).add(1, 'day')
      return dayjs(plusOne).subtract(year, 'year')
    }
    return dayjs(date).subtract(year, 'year')
  }
  return null
}

export const checkDateIsToday = (date) => {
  if (date) {
    return dayjs(date).isSame(Date.now(), 'day')
  }
  return null
}

export const formatDate = (date1, date2) => {
  if (date1 && date2) {
    const newDate1 = new Date(date1)
    const newDate2 = new Date(date2)
    const difference = newDate2.getTime() - newDate1.getTime()
    const day = Math.ceil(difference / (1000 * 3600 * 24)) + 1
    if (day < 7) {
      return `${day} hari (${date1} - ${date2})`
    } else if (day >= 30) {
      if (day % 30 === 0) {
        return `${day} hari (${date1} - ${date2})`
      } else {
        const newDay = day % 30
        if (newDay < 7) {
          return `${(day - (day % 30)) / 30} bulan ${newDay} hari (${date1} - ${date2})`
        } else {
          return `${newDay % 7 === 0 ? `${(day - (day % 30)) / 30} bulan ${newDay / 7} minggu` : `${(day - (day % 30)) / 30} bulan ${(newDay - (newDay % 7)) / 7} minggu ${newDay % 7} hari`} (${date1} - ${date2})`
        }
      }
    } else {
      return `${day % 7 === 0 ? `${day / 7} minggu` : `${(day - (day % 7)) / 7} minggu ${day % 7} hari`} (${date1} - ${date2})`
    }
  }
  return null
}

export const convertDateToEng = (date) => {
  if (date) {
    const splitDate = date?.split('-')
    const getMonth = splitDate[1]?.split('')
    let setMonth
    if (getMonth[0] === '0') {
      setMonth = getMonth[1]
    } else {
      setMonth = splitDate[1]
    }
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return `${splitDate[2]} ${month[setMonth - 1]} ${splitDate[0]}`
  }
}
