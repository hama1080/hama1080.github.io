<template>
  <transition name="body" appear>
    <div>
      photographs
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Photographs'
}
</script>

<style scoped>

/* transition */
.body-enter-active{
  transition: opacity 1s;
}

.body-leave-active{
  transition: opacity 0s;
}

.body-enter, .body-leave-to{
  opacity: 0;
}

</style>
