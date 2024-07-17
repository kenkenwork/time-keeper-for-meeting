<script setup lang="ts">
import { computed } from 'vue'
import { useProgramDataStore, useCurrentIndexStore } from '../stores/programData'
import TimerPart from '../components/TimerPart.vue'

const programDataStore = useProgramDataStore()
const allPrograms = computed(() => programDataStore.allPrograms)

const currentIndexStore = useCurrentIndexStore()
const currentIndexIncrement = currentIndexStore.currentIndexIncrement
const currentIndex = computed(() => currentIndexStore.currentIndex)

</script>

<template>
  <div>
    <ul>
        <li v-for="(program, index) in allPrograms" :key="index" v-show="index < currentIndex">
          <div class="part1" v-if="index===0"><img src="../assets/dia.png" alt="宝石画像" />神の言葉の宝</div>
          <div class="part2" v-if="index===3"><img src="../assets/wheat.png" alt="小麦画像" />野外奉仕に励む</div>
          <div class="part3" v-if="program.includes('生活する(１)')"><img src="../assets/sheep3.png" alt="羊画像" />生活する</div>
        <h4>{{ program }}</h4>
        <TimerPart @add1click="currentIndexIncrement()" />
      </li>
    </ul>
  </div>
</template>

<style scoped>

img {
  width: 30px;
  padding-right: 10px;
}

ul {
  padding: 0;
  list-style-type: none;
}

li {
  width: 250px;
  padding: 0;
  margin-left: 40px;
}

h4 {
  width: 300px;
  text-align: left;
  font-size: 20px;
  margin: 0;
}

.part1, .part2, .part3 {
  font-size: 25px;
  font-weight: bold;
  text-align: left;
  margin: 10px 0 20px -20px;
  padding: 8px 0 0 12px;
  width: 340px;
}

.part1 {
  color: rgb(40, 178, 212);
  border-bottom: 2px solid rgb(40, 178, 212);
}

.part2 {
  color: rgb(230, 183, 52);
  border-bottom: 2px solid rgb(230, 183, 52);
}

.part3 {
  color: rgb(247, 121, 99);
  border-bottom: 2px solid rgb(247, 121, 99);
}

</style>
