<template>
    <button v-if="!link" :class="mode">
        <slot></slot>
        
    </button>
    <router-link v-else :to="to" :class="mode">
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    props: {
        mode: {
           type:String,
           required:false,
           default:null 
        },
        link: {
            type: Boolean,
            required: false,
            default:false
        },
        to:{
            type: String,
            required: false,
            default:'/'
        }
    }
}
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.4rem 1rem;
  font: inherit;
  background-color: #4bc5f502;
  border: 0.1px solid #ffffff52;
  color: white;
  cursor: pointer;
  border-radius: 3px;
  display: inline-block;
font-size: 70%;
}
a:hover,
a:active,
button:hover,
button:active {
  background-color: #ffffff9c;
  border-color: #4bc5f502;
  color: rgb(75, 197, 245) ;
}
.flat {
  background-color: transparent;
  color: #4bc5f502;
  border: none;
}
.outline {
  background-color: transparent;
  border-color: #4bc5f502;
  color: #4bc5f502;
}
.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #4bc5f502;
    color: #ffffff;
}
</style>