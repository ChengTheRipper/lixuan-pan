import axios from 'axios'
import {data} from './data.json'


export function fetchOverallData(){
  const {input, confirm, dead, heal} = data.chinaTotal.total
  const {noSymptom} = data.chinaTotal.extData


  const {input: inputIncr, confirm: confirmIncr, dead: deadIncr, heal: healIncr, storeConfirm: storeConfirmIncr} = data.chinaTotal.today
  const {noSymptom: noSymptomIncr} = data.chinaTotal.extData
  const overall = []
  const generateCube = (title, cur, incr) => ({title, cur, incr})


  overall.push(generateCube('境外输入', input, inputIncr))
  overall.push(generateCube('无症状感染者', noSymptom, noSymptomIncr))
  overall.push(generateCube('现有确诊', confirm - dead - heal, storeConfirmIncr))
  overall.push(generateCube('累计确诊', confirm, confirmIncr))
  overall.push(generateCube('累计死亡', dead, deadIncr))
  overall.push(generateCube('累计治愈', heal, healIncr))

  return overall
}

export function fetchMapData(){
  let output = data.areaTree[2].children
  return output.map(area => ({
    name: area.name,
    value: area.today.confirm
  }))
}

export function fetchDayList(){
  const {chinaDayList: dayList} = data

  const confirm = [],
        heal = [],
        dead = [],
        storeConfirm = [],
        date = []

  dayList.forEach((item) => {
    date.push(item.date)

    confirm.push(item.total.confirm)
    heal.push(item.total.heal)
    dead.push(item.total.dead)
    storeConfirm.push(item.today.confirm)

  })

  return {confirm, heal, dead, storeConfirm, date}
}
