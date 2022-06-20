<template>
  <div class="border-b border-gray-200 py-6">
    <h3 class="-my-3 flow-root">
      Type Filter
    </h3>
    <div class="pt-6" id="filter-section-0">
      <div class="space-y-4">
        <div class="flex items-center">
          <input id="day" v-model="selectedPeriod" value="day" type="radio"
            @change="onChangeValue($event)"
            class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
          <label for="day" class="ml-3 text-sm text-gray-600"> Day </label>
        </div>

        <div class="flex items-center">
          <input id="week" v-model="selectedPeriod" value="week" type="radio"
            @change="onChangeValue($event)"
            class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
          <label for="week" class="ml-3 text-sm text-gray-600"> Week </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue';

  export default {
    name: 'DateFilter',
    emits: ['updateFilter'],
    setup(props, { emit }) {
      const selectedPeriod = ref('day');

      const onChangeValue = (value) => {
        emit('updateFilter' , value.target.value);
      }

      return {
        selectedPeriod,
        onChangeValue
      }
    }
  }
</script>
