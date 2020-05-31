<template>
  <div class="player">
    <div class="bgcolor"></div>
    <div class="bg" :style="{ backgroundImage: `url(${img})` }"></div>
    <div class="main">
      <div class="title">{{audio_name}}</div>
      <img :class="{
            stop:state=='stop'
        }" :src="img" class="picture" alt />
      <div class="d">
        <ul class="lyrics" ref="lyrics">
          <li
            v-for="(item,index) in lyrics"
            :key="index"
            :class="{active:activeLyricIndex==index}"
          >{{ item.lyric }}</li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <lb-button type="success" round @click="ls" style="margin:0 20px 0 0">-0.5倍速</lb-button>
      <lb-button style="margin:0" :type="state=='stop'?'danger':'primary'" circle @click="state == 'stop' ? play() : stop()" :icon='state == "stop" ? "lb-icon-yousanjiao" : "lb-icon-zanting"'></lb-button>
      <lb-button type="success" round  @click="bs" style="margin:0 20px 0 20px">+0.5倍速</lb-button>
      <div style="margin-right:20px;color:white">{{songStarted}}</div>
      <lb-slider v-model="progress" @change="change" lang="500px"></lb-slider>
      <div style="margin-left:20px;color:white">{{ songLong }}</div>
      <lb-slider
        v-model="sound"
        @input="changesound"
        @change="changesound"
        lang="80px"
        type="vl"
        style="margin-left:50px;margin-bottom:50px"
      ></lb-slider>
    </div>
    <audio :src="$withBase(`/assets/music.mp3`)" ref="audio" loop></audio>
  </div>
</template>
<script>
let audio = null;
import moment from 'moment'
export default {
  data() {
    return {
      width: 0,
      sound:0.5,
      lyrics: [],
      timer: null,
      state: "stop",
      down: false,
      bfb: 0,
      activeLyricIndex: 0,
      progress: 0,
      songStarted:'00:00',
      songLong:'00:00',
      surePlay:false,
      audio_name: "某幻君、中国BOY - 电子羊",
      img: "http://imge.kugou.com/stdmusic/20200518/20200518173106795048.jpg",
      lyric: `↵[00:00.00]某幻君、中国BOY - 电子羊
↵[00:04.66]词：某幻君
↵[00:06.78]曲：某幻君
↵[00:08.89]编曲：中国boy
↵[00:11.44]混音：杨秋儒
↵[00:13.98]是否能梦到电子羊ay
↵[00:17.13]When I can catch that bio sheep
↵[00:20.82]漂浮在霓虹的海洋ay
↵[00:24.18]When I can let that sheep grab ay
↵[00:27.37]街边的鸣笛像在开派对
↵[00:29.34]电流在我脑中作祟
↵[00:30.72]掀起被子和天气配对
↵[00:32.02]天气很差心情节节败 退
↵[00:34.19]这城市没有白天
↵[00:35.42]黑夜中升起工业的白烟
↵[00:37.11]萦绕在光怪的城市
↵[00:38.24]给那破败的程序
↵[00:39.26]带来寂寞又升起狼烟
↵[00:40.65]人们从不正眼看我
↵[00:42.24]他们沉浸在这低端生活
↵[00:43.98]我的任务是帮他们排解寂寞
↵[00:45.72]但谁又能来铺平我的颠簸
↵[00:47.47]I have no mouth but I still wanna scream
↵[00:49.71]无声狂啸众人却皆是醉
↵[00:51.29]I am like a mouse though
↵[00:52.15]I don't wanna get into cats stomach casually ay
↵[00:54.89]呼吸 我来到这片街道
↵[00:56.46]雾气 是工业的毒药
↵[00:58.18]I ain't got drunk
↵[00:58.93]钢筋散发的香薰进入我的肺
↵[01:00.98]My feelings got fake
↵[01:02.33]温暖肌肤没有知觉
↵[01:04.05]数字充斥着我的视觉
↵[01:05.31]却期望在梦里面
↵[01:06.27]和那梦不到的 电子羊相见
↵[01:08.97]是否能梦到电子羊ay
↵[01:12.04]When I can catch that bio sheep
↵[01:15.73]漂浮在霓虹的海洋ay
↵[01:19.01]When I can let that sheep grab ay
↵[01:26.96]When I can let that sheep grab ay
↵[01:29.26]是否能梦到电子羊ay
↵[01:32.80]When I can catch that bio sheep ay
↵[01:36.20]漂浮在霓虹的海洋ay
↵[01:39.61]When I can let that sheep grab ay
↵[01:42.72]从未听到过人们说过再见
↵[01:44.22]唯能爱恋身上
↵[01:45.07]缠绕着的电线
↵[01:46.04]就算摔倒我也不能流出血
↵[01:47.73]只能低头看着洒落的营养液
↵[01:49.44]会呼吸的街道人流涌动
↵[01:50.99]无法呼吸的我想要
↵[01:52.32]伸手触碰
↵[01:52.97]眼前浮窗却提醒我
↵[01:54.11]请勿触碰
↵[01:54.55]身体像是八百吨的负重 error
↵[01:56.56]I got riches in my mind
↵[01:58.00]I got nothing in my mind
↵[01:59.50]I got pleasure sorrow anger Joys passions in my mind
↵[02:02.82]Nobody cares
↵[02:03.62]停留 都是无谓的挣扎
↵[02:04.96]爆发着将那爱恋着的拔下
↵[02:06.52]街道很冰感觉像是回了家
↵[02:08.00]希望电子羊不会嫌弃
↵[02:09.37]我的邋遢
↵[02:10.40]是否能梦到电子羊ay
↵[02:13.83]When I can catch that bio sheep
↵[02:17.33]漂浮在霓虹的海洋ay
↵[02:20.68]When I can let that sheep grab ay
↵[02:24.13]是否能梦到电子羊ay
↵[02:27.60]When I can catch that bio sheep
↵[02:30.99]漂浮在霓虹的海洋ay
↵[02:34.46]When I can let that sheep grab ay
↵[02:37.91]漂浮在霓虹的海洋ay
↵[02:41.34]When I can let that sheep grab ay
↵`
    };
  },
  methods: {
    change(val) {
      this.$refs.audio.currentTime = this.$refs.audio.duration * val;
    },
    changesound(val) {
      this.sound = val;
      this.$refs.audio.volume = val;
    },
    play() {
      this.clearTime()
      this.$refs.audio.play();
      this.$refs.audio.volume = this.sound;
      this.state = "play";
      this.timer = setInterval(() => {
        const { currentTime, duration } = this.$refs.audio;
        this.progress = currentTime / duration;
        this.lyricsMove(currentTime, duration);
        this.songStarted = `${this.timeFormat(parseInt(currentTime/60))}:${this.timeFormat(Math.round(currentTime%60))}`
        if (this.progress >= 1) {
          this.progress = 1;
          this.state = "stop";
          this.clearTime();
        }
      }, 100);
    },
    stop() {
      this.state = "stop";
      this.clearTime();
      this.$refs.audio.pause();
    },
    clearTime() {
      clearInterval(this.timer);
      this.timer = null;
    },
    bs() {
      this.$refs.audio.playbackRate += 0.5;
    },
    ls() {
      this.$refs.audio.playbackRate -= 0.5;
    },
    lyricsMove(currentTime) {
      this.lyrics.some((e, i) => {
        let index = 0;
        if (currentTime <= e.time) {
          index = i - 1 >= 0 ? i - 1 : 0;
        } else if (i == this.lyrics.length - 1) {
          index = i;
        }
        this.activeLyricIndex = index;
        this.activeLyricIndexChange(index);
        return index;
      });
    },
    activeLyricIndexChange(index) {
      this.$nextTick(()=>{
        const top = this.$refs.lyrics.querySelector("li.active").offsetTop;
       this.$refs.lyrics.style.top = -top + "px";
      })
    },
    timeFormat(time){
      return time<10?`0${time}`:time;
    },
    songTime(){
      if(!this.surePlay){
        alert('音乐加载成功，可以播放啦！');
      }
      this.surePlay = true
       let {duration} = this.$refs.audio
       this.songLong = `${this.timeFormat(parseInt(duration/60))}:${this.timeFormat(Math.round(duration%60))}`
    }
  },
  beforeDestroy () {
    this.clearTime();
    this.$refs.audio.removeEventListener('canplaythrough',this.songTime)
  },
  mounted() {
         let arr = [];
      this.lyric.replace(
        /\[([\d]{2}):([\d]{2}).([\d]{2})\]([^\n]+)/g,
        (a, b, c, d, e) => {
          let key = b * 60 + Number(c) + d / 100;
          arr.push({ time: key, lyric: e });
        }
      );
      this.lyrics = arr;
      this.$refs.audio.addEventListener('canplaythrough',this.songTime)
  }
};
</script>
<style lang="scss">
.player {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  height: 100%;
  .bgcolor {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.4);
  }
  .bg {
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    filter: blur(70px);
  }
  .main {
    display: flex;
    justify-content: space-between;
    margin: auto;
    position: absolute;
    z-index: 2;
    width: 840px;
    left: 0;
    top: 200px;
    right: 0;
    .title {
      text-align: center;
      position: absolute;
      top: -120px;
      font-size: 30px;
      color: white;
      width: 100%;
    }
    .picture {
      margin-left: 80px;
      border-radius: 50%;
      border: 5px solid rgba(255, 255, 255, 0.8);
      height: 300px;
      height: 300px;
      display: block;
      object-fit: cover;
      animation: img 15s linear infinite;
      &.stop {
        animation-play-state: paused;
      }
    }
    @keyframes img {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    .d {
      width: 460px;
      min-height: 500px;
      height: 500px;
      overflow: hidden;
    }
    .lyrics {
      //   padding-top: 250px;
      top: 0;
      position: relative;
      min-height: 500px;
      height: 500px;
      margin-top: -7px;
      margin-left: 116px;
      transition: all 0.3s linear;
      li {
        list-style: none;
        // height: 34px;
        line-height: 34px;
        font-size: 16px;
        color: white;
        transition: all 0.3s;
        &.active {
          color: rgb(17, 164, 240);
        }
      }
    }
  }
  .footer {
    position: fixed;
    left: 0;
    right: 0;
    width: 100% !important;
    max-width: 100% !important;
    height: 80px;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    .play {
      font-size: 40px;
      color: white;
      cursor: pointer;
      margin-right: 10px;
    }
    .progress-loading {
      border-radius: 2px;
    }
    .progress {
      height: 4px;
      width: 500px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 2px;
      position: relative;
      cursor: pointer;
      .progress-loading {
        position: absolute;
        height: 100%;
        background: rgb(17, 164, 240);
        cursor: pointer;
      }
      .progress-inner {
        display: inline-block;
        width: 12px;
        height: 12px;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
        border-radius: 50%;
        background: white;
      }
    }
  }
}
</style>
