<template>
  <button class="lb-button" :class="buttonClass" @click="buttonClick">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "Lb-Button",
  props: {
    type: {
      type: String,
      default: "",
      validator(type) {
        if (
          type &&
          !["warning", "success", "danger", "info", "primary"].includes(type)
        ) {
          console.error(
            `type必须是${["warning,success", "danger", "info", "primary"].join(
              ","
            )}`
          );
        }
        return true;
      }
    },
    circle:{
      type:Boolean,
      default:false
    }
  },
  computed: {
    buttonClass() {
      let classes = [];
      if (this.type) {
        classes.push(`lb-button_${this.type}`);
      }
      if(this.circle){
        classes.push(`lb-button_circle`);
      }
      return classes;
    }
  },
  methods: {
    buttonClick(ev) {
      this.$emit("click", ev);
    }
  }
};
</script>