<template>
  <div class="container mx-auto px-4">
    <h1 class="text-center text-3xl font-bold">List Trending Movies</h1>
    <date-filter @update-filter="updateFilter"/>
    <trending-card :card-data="cardData" />
  </div>
</template>

<script>
  import { ref, onMounted } from 'vue'
  import { DateFilter, TrendingCard } from '@components'
  import { TrendingsService } from '@services'

  export default {
    name: 'TrendingList',
    components: {
      DateFilter,
      TrendingCard
    },
    setup() {
      const cardData = ref([])

      const fetchTrendings = async (period = 'day') => {
        try {
          const { data } = await TrendingsService.fetchTrendings(period);
          cardData.value = data.results;
        } catch(error) {
          window.alert(error)
        }
      }

      const updateFilter = (value) => {
        fetchTrendings(value)
      }

      onMounted(() => {
        fetchTrendings()
      })

      return {
        cardData,
        fetchTrendings,
        updateFilter
      }
    }
  }
</script>
