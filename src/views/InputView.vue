<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { computed } from 'vue'
import { useProgramDataStore, useCurrentIndexStore } from '../stores/programData'

const programDataStore = useProgramDataStore()
const { setMinistryNumber, setLifeNumber, addPrograms } = programDataStore

const ministryNumber = computed(() => programDataStore.ministryNumber)
const lifeNumber = computed(() => programDataStore.lifeNumber)

const currentIndexStore = useCurrentIndexStore()
const currentIndexIncrement = currentIndexStore.currentIndexIncrement
</script>

<template>
  <div id="input-view">
    <p>集会のプログラム数を選んでください。</p>
    <p>＜野外奉仕に励む＞</p>
    <div>
      <button :class="{ bg_orange: ministryNumber === 2 }" @click="setMinistryNumber(2)">2</button>
      <button :class="{ bg_orange: ministryNumber === 3 }" @click="setMinistryNumber(3)">3</button>
      <button :class="{ bg_orange: ministryNumber === 4 }" @click="setMinistryNumber(4)">4</button>
    </div>
    <p>＜クリスチャンとして生活する＞</p>
    <div>
      <button :class="{ bg_orange: lifeNumber === 1 }" @click="setLifeNumber(1)">1</button>
      <button :class="{ bg_orange: lifeNumber === 2 }" @click="setLifeNumber(2)">2</button>
    </div>
    <RouterLink to="/ProgramView">
      <button
        class="add-button bg_orange"
        @click.once="
          () => {
            addPrograms()
            currentIndexIncrement()
          }
        "
      >
        決定
      </button>
    </RouterLink>
  </div>
</template>

<style scoped>
* {
  width: 390px;
  background-color: black;
  color: white;
}

#inpit-view {
  background-color: black;
}

#input-view p {
  font-size: 20px;
  margin: 30px 0 0 0;
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

button {
  width: 60px;
  height: 40px;
  margin: 15px;
  font-size: 30px;
  background-color: rgb(67, 66, 66);
  border-radius: 8px;
  cursor: pointer;
}

.add-button {
  margin: 60px 0 100px 0;
  width: 110px;
  font-size: 26px;
  cursor: pointer;
}

.bg_orange {
  background-color: rgb(239, 141, 49);
}
</style>
