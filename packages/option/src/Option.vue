<template>
  <li class="lb-option" @click="selectClick" :class="{'lb-option-active':$parent.value===index}">{{label}}</li>
</template>
<script>
export default {
    name:'lb-option',
  props:['label','value'],
  data() {
    let length = this.$parent.$children.length;
    return {
        index:length-1,
    };
  },
  methods: {
    selectClick(){
      this.$parent.$emit('selected',this.value)
    }
  }
};
</script>
