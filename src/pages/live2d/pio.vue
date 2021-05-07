<template>
<div>
  <br>
  <pre>    npm install mnxm-live2d-vue</pre> 
  <pre>
    handleMove(live2dModel) {

      if(this.smile &gt; 0 && this.smile &lt;= Math.PI){
        live2dModel.setParamFloat("PARAM_ANGLE_X", 0);
        live2dModel.setParamFloat("PARAM_ANGLE_Y", 0);
        live2dModel.setParamFloat("PARAM_ANGLE_Z",0);
        live2dModel.setParamFloat("PARAM_EYE_BALL_X", 0);
        live2dModel.setParamFloat("PARAM_EYE_BALL_Y", 0);
        var open = (1 - Math.pow(1 - Math.sin(this.smile), 4)) / 2 + 0.4;
        live2dModel.setParamFloat("PARAM_EYE_R_OPEN", open);
        live2dModel.setParamFloat("PARAM_EYE_L_OPEN", open);
        this.smile = this.smile - 0.03;
        return;
      }

      var percent = 1;
      if(this.smile &lt;= 0 && this.smile &gt; -1){
        this.smile = this.smile - 0.03;
        percent = Math.abs(this.smile);
      }
      if(this.smile &gt; Math.PI){
        this.smile = this.smile - 0.03;
        percent = Math.abs(this.smile - Math.PI);
      }

      live2dModel.setParamFloat("PARAM_ANGLE_X", this.offset_x * 30 / 150 * percent);
      live2dModel.setParamFloat("PARAM_ANGLE_Y", - this.offset_y * 20 / 150 * percent);
      live2dModel.setParamFloat("PARAM_ANGLE_Z",this.offset_x * this.offset_y * 0.01/ 150 * percent);
      live2dModel.setParamFloat("PARAM_EYE_BALL_X", this.offset_x * 0.5 / 150 * percent);
      live2dModel.setParamFloat("PARAM_EYE_BALL_Y", - this.offset_y * 0.1 / 150 * percent);
      var clock = (1 - Math.pow(1 - Math.abs(Math.sin(window.UtSystem.getUserTimeMSec() * 0.0005)), 32)) / 2;
      live2dModel.setParamFloat("PARAM_EYE_R_OPEN", clock);
      live2dModel.setParamFloat("PARAM_EYE_L_OPEN", clock);
      live2dModel.setParamFloat("PARAM_HAIR_FRONT", -this.offset_x / 1500);
      live2dModel.setParamFloat("PARAM_HAIR_BACK", -this.offset_x / 1500);
      live2dModel.setParamFloat("PARAM_HAIR_SIDE", -this.offset_x / 1500);

    },
    toSmile(){
      if(Math.random() &lt;= 0.7) this.smile = Math.PI + 1;
      setTimeout(()=&gt;{
        this.toSmile();
      },10000);
    },
  </pre>
  <Live2d ref="main" class="main" :modelData="mdata" :on-move="handleMove" :width="300" :height="300" />
</div>
</template>

<script>
export default {
  data() {
    return {
      mdata: {
        "version": "1.0.0",
        "model": "/assets/Neptunia/model.moc",
        "textures": [
          "/assets/Neptunia/00.png",
          "/assets/Neptunia/01.png",
          "/assets/Neptunia/02.png"
        ]
      },
      offset_x: 0,
      offset_y: 0,
      smile: 0,
    };
  },
  methods: {
    handleMove(live2dModel) {

      if(this.smile > 0 && this.smile <= Math.PI){
        live2dModel.setParamFloat("PARAM_ANGLE_X", 0);
        live2dModel.setParamFloat("PARAM_ANGLE_Y", 0);
        live2dModel.setParamFloat("PARAM_ANGLE_Z",0);
        live2dModel.setParamFloat("PARAM_EYE_BALL_X", 0);
        live2dModel.setParamFloat("PARAM_EYE_BALL_Y", 0);
        var open = (1 - Math.pow(1 - Math.sin(this.smile), 4)) / 2 + 0.4;
        live2dModel.setParamFloat("PARAM_EYE_R_OPEN", open);
        live2dModel.setParamFloat("PARAM_EYE_L_OPEN", open);
        this.smile = this.smile - 0.03;
        return;
      }

      var percent = 1;
      if(this.smile <= 0 && this.smile > -1){
        this.smile = this.smile - 0.03;
        percent = Math.abs(this.smile);
      }
      if(this.smile > Math.PI){
        this.smile = this.smile - 0.03;
        percent = Math.abs(this.smile - Math.PI);
      }

      live2dModel.setParamFloat("PARAM_ANGLE_X", this.offset_x * 30 / 150 * percent);
      live2dModel.setParamFloat("PARAM_ANGLE_Y", - this.offset_y * 20 / 150 * percent);
      live2dModel.setParamFloat("PARAM_ANGLE_Z",this.offset_x * this.offset_y * 0.01/ 150 * percent);
      live2dModel.setParamFloat("PARAM_EYE_BALL_X", this.offset_x * 0.5 / 150 * percent);
      live2dModel.setParamFloat("PARAM_EYE_BALL_Y", - this.offset_y * 0.1 / 150 * percent);
      var clock = (1 - Math.pow(1 - Math.abs(Math.sin(window.UtSystem.getUserTimeMSec() * 0.0005)), 32)) / 2;
      live2dModel.setParamFloat("PARAM_EYE_R_OPEN", clock);
      live2dModel.setParamFloat("PARAM_EYE_L_OPEN", clock);
      live2dModel.setParamFloat("PARAM_HAIR_FRONT", -this.offset_x / 1500);
      live2dModel.setParamFloat("PARAM_HAIR_BACK", -this.offset_x / 1500);
      live2dModel.setParamFloat("PARAM_HAIR_SIDE", -this.offset_x / 1500);

    },
    toSmile(){
      if(Math.random() <= 0.7) this.smile = Math.PI + 1;
      setTimeout(()=>{
        this.toSmile();
      },10000);
    },
  },
  mounted() {
    window.addEventListener("mousemove", (e) => {
      var middle_x = this.$refs.main.$el.offsetLeft;
      var middle_y = this.$refs.main.$el.offsetTop + 100;
      this.offset_x = e.clientX - middle_x;
      this.offset_y = e.clientY - middle_y;
    });
    this.toSmile();
  },
};
</script>

<style scoped>

.main {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 300px;
  height: 300px;
  transform: translate(-50%,0);
}
</style>
