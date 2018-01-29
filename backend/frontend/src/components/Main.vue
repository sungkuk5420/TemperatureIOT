
<template>
   <div id="main" >
       <div class="backgroundDiv widthMode">
           <img src="../assets/bg.png" class="" alt="">
           <div class="circle " v-for="(item, index) in datas" v-bind:class="['position' + index,datas[index].color]">
               <div class="textDiv">
                   <span class="text" >{{item.value}}<span class="miniFont">℃</span></span>
               </div>
           </div>
           <v-slider prepend-icon="volume_up" v-model="media"></v-slider>
       </div>
    </div>
</template>

<script>
import slider from './slider.vue'

export default {
  name: 'Main',
  data () {
    return {
      datas: [
        {
          'value' : '24.5',
          'color' : 'red'
        },
        {
          'value' : '',
          'color' : ''
        },
        {
          'value' : '',
          'color' : ''
        },
        {
          'value' : '',
          'color' : ''
        },
        {
          'value' : '',
          'color' : ''
        },
        {
          'value' : '',
          'color' : ''
        },
        {
          'value' : '',
          'color' : ''
        },
        {
          'value' : '',
          'color' : ''
        },
        {
          'value' : '',
          'color' : ''
        },
        {
          'value' : '',
          'color' : ''
        },
        {
          'value' : '',
          'color' : ''
        },
        {
          'value' : '',
          'color' : ''
        },
        {
          'value' : '',
          'color' : ''
        },
        {
          'value' : '',
          'color' : ''
        },{
          'value' : '',
          'color' : ''
        },
        {
          'value' : '',
          'color' : ''
        },

      ]
    }
  },
  beforeMount () {
    var thisObj = this;
    this.changeColor();
    setInterval(function() {
      thisObj.changeColor();
    }, 3000);
  },
  updated() {
    console.log('updated');
  },
  methods:{
    changeColor:function(){
      this.datas.forEach(function(item,index){
        if(index != 0){
          var randomTemperature = Math.floor(Math.random() * 7) + 20;
          var randomTemperature2 = Math.floor(Math.random() * 10) + 1;
          var color = randomTemperature < 22 ?  'circle-blue' : (randomTemperature < 24 ? 'circle-green' : 'circle-red');
          item.value = randomTemperature+'.'+(randomTemperature2>5?5:0);
          item.color = color;
        }
      });
    }
  },
  conponents:{
    'slider' : slider
  }
};
</script>

<style lang="scss">


  #main{
    border:1px solid #ddd;
    width:100%;
    height:100%;
    position: fixed;
    text-align: center;
  }

  .backgroundDiv{
    position: relative;
    top: 50%;


    &.widthMode{
      margin: auto;
      transform: translate(0%, -50%);
      img{
        width:100%;
      }
    }

    &.heightMode{
      margin: auto;
      height: 100%;
      display: inline-block;
      img{
        height:100%;
      }
    }

  }
  .title{
    font-size:30px;
    padding: 1rem;
    font-weight: bold;
    text-align: center;
  }


  .circle{
    position: absolute;
    width: 8%;
    height: 15%;
    border-radius: 50%;

    &.circle-red{
      background: radial-gradient(ellipse at center, #ffffff29 29%, #f95a5a 100%);
    }
    &.circle-blue{
      background: radial-gradient(ellipse at center, #ffffff29 29%, #6393c1 100%);
    }
    &.circle-green{
      //    background-color: rgba(41, 197, 31, 0.2901960784313726);
      background: radial-gradient(ellipse at center, #ffffff29 29%, #2f940d 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    }

    .miniFont{
      font-size: 15px;
    }
    .text{
      position: absolute;
      top: 50%;
      left:50%;
      transform: translate(-50%,-50%);
      color: white;
      font-weight: bold;
      font-size: 1em;
    }
    &.position0{
      display:none;
    }
    &.position1{
      left: 12%;
      bottom: 30%;
    }
    &.position2{
      left: 19%;
      bottom: 45%;
    }
    &.position3{
      left: 28%;
      top: 30%;
    }
    &.position4{
      left: 30%;
      top: 15%;
    }
    &.position5{
      left: 40%;
      top: 20%;
    }
    &.position6{
      left: 50%;
      top: 30%;
    }
    &.position7{
      left: 59%;
      top: 35%;
    }
    &.position8{
      left: 67%;
      top: 40%;
    }
    &.position9{
      right: 16%;
      top: 46%;
    }
    &.position10{
      left: 44%;
      top: 46%;
    }
    &.position11{
      .textDiv{
        height: 25%;
        width: 50%;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 50%;
        margin: auto;
        margin-top: 55%;
        transform: translate(0%,-50%);
      }
      left: 33%;
      bottom: 27%;
    }
    &.position12{
      .textDiv{
        height: 25%;
        width: 50%;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 50%;
        margin: auto;
        margin-top: 55%;
        transform: translate(0%,-50%);
      }
      left: 42%;
      bottom: 23%;
    }
    &.position13{
      .textDiv{
        height: 25%;
        width: 50%;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 50%;
        margin: auto;
        margin-top: 55%;
        transform: translate(0%,-50%);
      }
      right: 29%;
      top: 55%;
    }
    &.position14{
      right: 33%;
      bottom: 16%;
    }
    &.position15{
      right: 22.5%;
      bottom: 10.5%;
    }

  }


</style>
