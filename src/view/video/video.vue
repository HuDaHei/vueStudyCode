<template>
  <div class='container-video'>
    <div>
      <canvas id='vc1' width='200' height='300'></canvas>
      <video src='./../../../static/6.mp4' id='video' controls='true'  height="300" preload="metadata"></video>
    </div>
    <div>
      <canvas id='vc2' width='300' height='300'></canvas>
    </div>
  </div>
</template>
<script>
import { clearTimeout } from 'timers';
// import func from '../../../vue-temp/vue-editor-bridge';
export default {
  data(){
    return {
      video: null,
      vc1:null,
      vc2:null,
      ctx1:null,
      ctx2:null,
      width: '',
      height: '',
      one: true
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.video = document.querySelector('#video');
      this.vc1 = document.querySelector('#vc1')
      this.vc2 = document.querySelector('#vc2');
      this.ctx1 = this.vc1.getContext('2d');
      this.ctx2 = this.vc2.getContext('2d');
      this.video.addEventListener('play',()=> {
        this.video.style.opacity = 0;
        this.width = this.video.videoWidth / 2.4;
        this.height = this.video.videoHeight / 2.4;
        this.timerCallback();
      },false)
    },
    timerCallback() {
      const self = this;
      if(this.video.paused || this.video.ended) {
        return ;
      }
      this.computeFrame();
      setTimeout(function() {
        self.timerCallback();
      }, 0);
    },
    computeFrame() {
      this.ctx1.drawImage(this.video,0,0,this.width,this.height);
      let frame = this.ctx1.getImageData(0, 0, this.width, this.height);
      const img = new Image();
      if(this.one) {
        img.src = this.vc1.toDataURL("image/png");
        document.querySelector('body').appendChild(img);
        this.one = false
      }
      return;
    }
  }
}
</script>