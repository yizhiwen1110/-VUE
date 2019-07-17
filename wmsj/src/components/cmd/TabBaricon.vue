<template>
  <div>
      <img :src="focused?selectedImage:normalImage" class="gwc">
  </div>
</template>
<script>
export default {
   props:{
       focused:false,
       selectedImage:{default:""},
       normalImage:{default:""}
   } 
}
</script>
<style scoped>
     .a{ 

         color:red
    }

.gwc{
    width: 27px;
    height:27px
} 
</style>