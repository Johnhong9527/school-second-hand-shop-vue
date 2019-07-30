<template>
  <div class="home">
    <el-row>
      <CommidtyCard />
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import CommidtyCard from '@/components/CommidtyCard.vue'

export default {
  name: 'home',
  components: {
    CommidtyCard
  }
}
</script>
