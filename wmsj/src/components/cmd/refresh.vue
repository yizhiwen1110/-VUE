<template>
    <div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    //   购物车页面 空白页跳转回去
      beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$router.replace(from.path)
    })
  }

}
</script>
