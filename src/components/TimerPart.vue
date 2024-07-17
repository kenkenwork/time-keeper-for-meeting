<script setup lang="ts">
import { defineEmits } from 'vue'
import dayjs, { Dayjs } from 'dayjs'
import { ref, computed } from 'vue'


// ---------------------------------------------------------------

interface Emits {
  (event: 'add1click'): void
}

const emit = defineEmits<Emits>()

const onAdd1click = () => {
  emit('add1click')
}
// ---------------------------------------------------------------

const startTime = ref<Dayjs | null>(null)
const finishTime = ref<Dayjs | null>(null)
const startTimeFormatted = ref<string | null>(null)
const startTimeFormattedMini = ref<string | null>(null)
const finishTimeFormatted = ref<string | null>(null)
const finishTimeFormattedMini = ref<string | null>(null)

const timerId = ref<number | null>(null)
// const timerId = ref<number | NodeJS.Timeout | null>(null)


const minutes = ref<number>(0)
const seconds = ref<number>(0)

const formattedTime = computed(() => {
  const m = String(minutes.value).padStart(2, '0')
  const s = String(seconds.value).padStart(2, '0')
  return `${m}:${s}`
})

function incrementTime() {
  if (seconds.value === 59) {
    minutes.value++
    seconds.value = 0
  } else {
    seconds.value++
  }
}

function startTimeButton(): void {
  startTime.value = dayjs()
  startTimeFormatted.value = startTime.value.format('HH:mm')
  startTimeFormattedMini.value = startTime.value.format('.ss') + "～"

  timerId.value = setInterval(incrementTime, 1000) as unknown as number
}

function finishTimeButton(): void {
  finishTime.value = dayjs()
  finishTimeFormatted.value = dayjs().format('HH:mm')
  finishTimeFormattedMini.value = dayjs().format('.ss')

  clearInterval(timerId.value as number)
}
</script>

<template>
  <div class="part">
    <div class="time-block">
      <p class="time">{{ startTimeFormatted }}<span>{{ startTimeFormattedMini }}</span>{{ finishTimeFormatted }}<span>{{ finishTimeFormattedMini }}</span></p>
      <p class="timer">{{ formattedTime }}</p>
    </div>

    <div class="button-block">
      <button class="bg_orange" v-if="!startTime" @click.once="startTimeButton">〇</button>
      <button class="bg_red"
        v-if="startTime && !finishTime"
        @click.once="
          () => {
            finishTimeButton()
            onAdd1click()
          }
        "
      >
        ||
      </button>
    </div>
  </div>
</template>

<style scoped>
.part {
  width: 320px;
  margin: 0 0 30px 0;
  padding: 7px 12px 15px 20px;
  background-color: rgb(52, 51, 51);
  color: white;
  display: flex;
  border-radius: 8px;
}

span {
  color:rgb(192, 190, 190);
  font-size: 14px;
}

.button-block {
  width: 50px;
  height: 75px;
  margin-left: 25px;
}

button {
  width: 50px;
  height: 50px;
  margin-top: 22px;
  font-size: 25px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
}

.time {
  text-align: left;
  margin: 0 0 5px 30px;
  padding: 0;
  font-size: 20px;
  height: 25px;
}

.timer {

  width: 200px;
  font-size: 30px;
  padding: 0;
  margin: 0;
  text-align: center;
  border: 1px solid gray;
  border-radius: 8px;
}

.bg_orange {
  background-color: rgb(239, 141, 49);
}

.bg_red {
  background-color: rgb(251, 70, 70);
}
</style>
