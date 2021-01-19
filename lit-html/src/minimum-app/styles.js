import { html } from 'lit-html'

export const style = html`
  <style>
    @keyframes fade-in {
      0% {
        visibility: hidden;
        width: 0;
        height: 0;
        background-color: rgba(50, 50, 50, 0);
      }
      1% {
        visibility: unset;
        width: 100vw;
        height: 100vh;
        background-color: rgba(50, 50, 50, 0);
      }
      100% {
        background-color: rgba(50, 50, 50, 0.8);
      }
    }
    .bg {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      box-sizing: border-box;
      z-index: 9999;
    }
    .bg:not(.show) {
      width: 0;
      height: 0;
      visibility: hidden;
      background-color: rgba(50, 50, 50, 0);
    }
    .bg.show {
      width: 100vw;
      height: 100vh;
      background-color: rgba(50, 50, 50, 0.8);
      animation: fade-in 0.3s linear;
    }
    .img__wide {
      position: absolute;
      top: 50%;
      left: 50%;
      box-sizing: border-box;
      object-fit: scale-down;
      user-select: none;
      transform: translate(-50%, -50%);
    }
    .bg:not(.show) .img__wide {
      height: 0;
      width: 0;
      opacity: 0;
    }
    .bg.show .img__wide {
      width: 70vw;
      height: 70vw;
      opacity: 1;
      transition: .1s opacity linear;
    }
    .img {
      box-sizing: border-box;
      width: inherit;
      height: inherit;
      object-fit: inherit;
    }
  </style>
`