<template>
  <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
    <div v-for="(data, index) in cardData" :key="index" class="group relative">
      <div class=" rounded-md overflow-hidden group-hover:opacity-75 ">
        <img :src="posterPath(data.poster_path)" :alt="data.title"
          class="object-center object-cover">
      </div>
      <div class="mt-4 flex justify-between">
        <div>
          <h3 class="text-sm text-gray-700">
            <a href="#">
              <span aria-hidden="true" class="absolute inset-0"></span>
              <span class="font-bold">Title: </span> {{ data.title }}
            </a>
          </h3>
          <h3 class="text-sm text-gray-700">
            <a href="#">
              <span aria-hidden="true" class="absolute inset-0"></span>
              <span class="font-bold">Release date: </span> {{ data.release_date }}
            </a>
          </h3>
          <h3 class="text-sm text-gray-700">
            <a href="#">
              <span aria-hidden="true" class="absolute inset-0"></span>
              <span class="font-bold">Vote average: </span> {{ data.vote_average }}
            </a>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TrendingCard',
    props: {
      cardData: {
        type: Array,
        default: []
      }
    },
    setup(props) {
      const posterPath = (posterPath) => {
        return `https://image.tmdb.org/t/p/w200${posterPath}`
      }

      return {
        posterPath
      }
    }
  }
</script>
