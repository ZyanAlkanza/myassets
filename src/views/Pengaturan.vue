<template>
  <div style="font-family: 'Plus Jakarta Sans', sans-serif">
    <div class="flex flex-row w-full">
      <div class="">
        <ul class="menu w-56">
          <li><a @click="name = 'akun'" class="py-3">Akun</a></li>
          <li><a @click="name = 'saham'" class="py-3">Saham</a></li>
          <li><a @click="name = 'crypto'" class="py-3">Crypto</a></li>
        </ul>
      </div>
      <div class="w-full">
        <div v-if="name == 'akun'">

        </div>
        <div class="w-full px-4" v-if="name == 'saham'">
          <div class="w-full pr-12">
            <saham />
          </div>
        </div>
        <div v-if="name == 'crypto'">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import saham from '../components/pengaturan/saham.vue';

export default {
  components: {
    saham
  },
  data() {
    return {
      name: 'akun'
    }
  },
  mounted() {
    console.log(this.name);
    
  },
}
</script>