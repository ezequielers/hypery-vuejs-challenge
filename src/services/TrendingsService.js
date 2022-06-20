import { ApiService } from '@services'

const TrendingsService = {
  fetchTrendings(period) {
    return ApiService.get(`/3/trending/movie/${period}`)
  }
}

export default TrendingsService
