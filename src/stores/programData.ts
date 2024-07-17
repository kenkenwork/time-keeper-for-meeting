import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProgramDataStore = defineStore('programData', () => {
  const allPrograms = ref<string[]>(['１．話', '２．宝石', '３．聖書朗読'])

  //各部の集会プログラム数を入力するための変数
  const ministryNumber = ref<number>(2)
  const lifeNumber = ref<number>(1)

  function setMinistryNumber(n: number) {
    ministryNumber.value = n
  }

  function setLifeNumber(n: number) {
    lifeNumber.value = n
  }

  function addPrograms(): void {
    if (ministryNumber.value === 2) {
      allPrograms.value.push('４．奉仕(A)', '５．奉仕(B)')
    } else {
      allPrograms.value.push(
        '４．奉仕(１)',
        'コメント(1分)',
        '５．奉仕(２)',
        'コメント(1分)',
        '６．奉仕(３)',
        'コメント(1分)'
      )
      if (ministryNumber.value === 4) {
        allPrograms.value.push('７．奉仕(４)', 'コメント')
      }
    }
    if (lifeNumber.value === 1) {
    allPrograms.value.push(`${ministryNumber.value + 4}．生活する`)
    }
    if (lifeNumber.value === 2) {
      allPrograms.value.push(`${ministryNumber.value + 4}．生活する(１)`,`${ministryNumber.value + 5}．生活する(２)`)
    }

    allPrograms.value.push(`${ministryNumber.value + lifeNumber.value + 4}．聖書研究`)
  }

  return { ministryNumber, lifeNumber, allPrograms, setMinistryNumber, setLifeNumber, addPrograms }
})

export const useCurrentIndexStore = defineStore('currentIndex', () => {
  const currentIndex = ref(0)

  function currentIndexIncrement() {
    currentIndex.value++
  }

  return { currentIndex, currentIndexIncrement }
})
