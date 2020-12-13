<template>
  <div id="yh_switch" :style="{ ...buttonSizeStyle }">
    <label>
      <input type="checkbox" :checked="checked" @input="updatedHandler">
      <span></span>
    </label>
    <strong>
      <slot />
    </strong>
  </div>
</template>

<script>
  export default {
    name: "YhSwitch",
    data() {
      return {
        buttonWidth: 50,
        buttonHeight: 30,
        toggleDiameter: 26,
        toggleWider: 34
      }
    },
    props:{
      size: {
        type: Number,
        default: 1
      },
      checked: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      buttonSizeStyle() {
        return {
          '--button-width': this.buttonWidth * this.size + 'px',
          '--button-height': this.buttonHeight * this.size + 'px',
          '--toggle-diameter': this.toggleDiameter * this.size + 'px',
          '--toggle-wider': this.toggleWider * this.size + 'px',
        }
      }
    },
    methods: {
      updatedHandler(event) {
        this.$emit('updated', event.target.checked)
      }
    }
  }
</script>

<style scoped>
  #yh_switch {
    --button-width: 500px;
    --button-height: 295px;
    --toggle-diameter: 255px;
    --toggle-wider: 333px;

    --button-toggle-offset: calc((var(--button-height) - var(--toggle-diameter)) / 2);
    --toggle-shadow-offset: 10px;
    --color-grey: #E9E9E9;
    --color-dark-grey: #39393D;
    --color-green: #30D158;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  /*按钮样式*/
  span {
    margin-top: 5px;
    display: inline-block;
    width: var(--button-width);
    height: var(--button-height);
    background-color: var(--color-grey);
    border-radius: calc(var(--button-height) / 2);
    position: relative;
    transition: .3s all ease-in-out;
  }

  /*按钮的圆的样式*/
  span:after {
    content: '';
    display: inline-block;
    width: var(--toggle-diameter);
    height: var(--toggle-diameter);
    background-color: #fff;
    border-radius: calc(var(--toggle-diameter) / 2);
    position: absolute;
    top: var(--button-toggle-offset);
    left: 0;
    transform: translateX(var(--button-toggle-offset));
    box-shadow: var(--toggle-shadow-offset) 0 calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, .10);
    transition: .3s all ease-in-out;
  }

  /*点击状态下按钮样式*/
  input[type="checkbox"]:checked + span {
    background-color: var(--color-green);
  }
  /*点击按钮后圆的位置*/
  input[type="checkbox"]:checked + span::after {
    transform: translateX(calc(var(--button-width) - var(--toggle-diameter) - var(--button-toggle-offset)));
    box-shadow: calc(var(--toggle-shadow-offset) * -1) 0 calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, .10);
  }

  /*隐藏checkbox样式*/
  input[type="checkbox"] {
    display: none;
  }

  /*长按按钮样式*/
  input[type="checkbox"]:active + span::after {
    width: var(--toggle-wider);
  }
  /*已勾选下长按按钮样式*/
  input[type="checkbox"]:checked:active + span::after {
    transform: translateX(calc(var(--button-width) - var(--toggle-wider) - var(--button-toggle-offset)));
  }

  /*按钮和标题并排*/
  #yh_switch {
    display: inline-flex;
    flex-direction: row;
  }

  #yh_switch strong {
    line-height: var(--button-height);
    font-size: var(--toggle-diameter);
    margin-left: calc(var(--toggle-diameter) / 4);
  }

  /*深色处理*/
  @media(prefers-color-scheme:dark) {
    body {
      background-color: #1C1C1E;
    }

    span {
      background-color: var(--color-dark-grey);
    }
  }
</style>