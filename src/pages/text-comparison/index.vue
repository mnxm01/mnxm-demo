<template>
  <div>
    <textarea v-model="text1" cols="70" rows="15" placeholder="修改前的文本"></textarea>
    <textarea v-model="text2" cols="70" rows="15" placeholder="修改后的文本"></textarea>
    <div v-html="result"></div>
  </div>
</template>

<script>
import { LD } from "mnxm-text-comparison";

export default {
  data(){
    return {
      text1: "abcdefg1234",
      text2: "abcd1234567",
      mgr: new LD()
    };
  },
  computed: {
    result(){
      return this.mgr.getResult(this.text1, this.text2);
    }
  }
}
</script>
