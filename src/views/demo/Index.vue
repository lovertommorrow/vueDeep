<template>
  <div>
    <button v-copy="copyText" class="text">
      assads
    </button>
  </div>
</template>

<script>
export default {
  name:'demo',
  props:{},
  data(){
    return{
      copyText: 'a copy directives',
    }
  },
}
</script>

<style lang="scss" scoped>
  .text{
    color:$red-color;
    font-size: $font-size-base;
  }
   
</style>