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
      audio_name: "王嘉尔、Gucci Mane - Different Game",
      img: "http://imge.kugou.com/stdmusic/20181106/20181106154121212021.jpg",
      lyric: `﻿[id:$00000000]
↵[ar:王嘉尔、Gucci Mane]
↵[ti:Different Game]
↵[by:]
↵[hash:6c0057852cd0ccab19085d9580253b4e]
↵[al:]
↵[sign:]
↵[qq:]
↵[total:167366]
↵[offset:0]
↵[00:00.13]王嘉尔、Gucci Mane - Different Game
↵[00:00.89]作词：王嘉尔、Gucci Mane
↵[00:01.20]作曲：王嘉尔、BOYTOY
↵[00:01.50]编曲：王嘉尔、BOYTOY
↵[00:01.76]制作人：王嘉尔、BOYTOY
↵[00:10.37]Imma show you it's a different game
↵[00:12.21]Hold up straight up
↵[00:13.78]It's a different game
↵[00:16.00]Imma show you it's a different game
↵[00:18.38]Hold up straight up
↵[00:19.71]It's a different game
↵[00:21.14]You can try to stop me
↵[00:22.21]But I'm in a different game
↵[00:24.05]Hold up straight up
↵[00:25.43]It's a different game
↵[00:27.00]You can try to stop me
↵[00:28.02]But I'm in a different game
↵[00:29.86]Hold up straight up
↵[00:31.28]It's a different game
↵[00:32.90]Balling till I fall
↵[00:34.62]I'm the game
↵[00:35.89]Flexing on it flexing on it not them diamonds
↵[00:38.69]Rich in my ambition
↵[00:39.81]Balling we go all in
↵[00:41.65]Call me China man
↵[00:42.76]Team wang made it Jackson Brand
↵[00:44.51]Why you faking reputation buying profiles then
↵[00:47.80]This a different game
↵[00:49.42]Who would take the blame
↵[00:50.68]Who do I respect society
↵[00:52.25]Who do I suspect hey
↵[00:53.72]I'll be flexing man
↵[00:54.84]One man flexing land
↵[00:55.85]Call me flexing trend
↵[00:56.97]Call me one man band
↵[00:58.03]Different game
↵[00:59.20]I can see them coming through
↵[01:00.62]I can feel it when I do
↵[01:02.19]Stay a hundred flexing
↵[01:03.21]Till I be the last man standing
↵[01:05.11]I can see them coming through
↵[01:06.48]I can feel it when I do
↵[01:08.08]Stay a hundred flexing
↵[01:09.12]Till I be the last man standing
↵[01:10.95]Never go back in the days
↵[01:12.37]Never get back in the maze
↵[01:13.75]People gon trip in the race
↵[01:15.20]Never gon keep up my pace
↵[01:16.70]Never get back in the days
↵[01:18.14]Never get back in the maze
↵[01:19.64]Jackson
↵[01:20.55]Imma show you it's a different game
↵[01:22.61]Hold up straight up
↵[01:24.01]It's a different game
↵[01:26.22]Imma show you it's a different game
↵[01:28.48]Hold up straight up
↵[01:29.81]It's a different game
↵[01:31.54]You can try to stop me
↵[01:32.46]But I'm in a different game
↵[01:34.34]Hold up straight up
↵[01:35.67]It's a different game
↵[01:37.20]You can try to stop me
↵[01:38.31]But I'm in a different game
↵[01:40.15]Hold up straight up
↵[01:41.53]It's a different game
↵[01:43.07]Balling till I fall
↵[01:44.87]I'm the game
↵[01:46.52]Jackson Wang and I'm the Gucci mane
↵[01:49.42]Switch the lane I'm in a different game
↵[01:52.28]I was selling game right off biscayne
↵[01:55.29]Pull up in a drop top and **** her brain
↵[01:58.04]Low down dirty game got a balmain
↵[02:01.05]Still pushing bells **** the chain gang
↵[02:03.95]Ain't nothing changed but the chain man
↵[02:06.86]Big old diamond chain and it blang blang
↵[02:09.88]Balling like lamar Jackson a duel threat
↵[02:12.30]You just a freshman
↵[02:13.17]You still ain't in the league yet
↵[02:15.31]I be fresh to death I pull up make them upset
↵[02:18.59]Diamonds on my chest make them tuck that
↵[02:21.15]Hold up straight up
↵[02:22.47]It's a different game
↵[02:24.72]Imma show you it's a different game
↵[02:26.97]Hold up straight up
↵[02:28.40]It's a different game
↵[02:29.93]You can try to stop me
↵[02:31.00]But I'm in a different game
↵[02:32.85]Hold up straight up
↵[02:34.23]It's a different game
↵[02:35.80]You can try to stop me
↵[02:36.82]But I'm in a different game
↵[02:38.71]Hold up straight up
↵[02:40.08]It's a different game
↵[02:41.66]Balling till I fall
↵[02:43.44]I'm the game
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
      alert('音乐加载成功，可以播放啦！')
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
