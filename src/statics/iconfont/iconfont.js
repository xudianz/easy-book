import { injectGlobal } from 'styled-components'

injectGlobal`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1538029280990'); /* IE9*/
    src: url('./iconfont.eot?t=1538029280990#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1538029280990') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1538029280990#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`






/* 
.icon-spin:before { content: "\e851"; }

.icon-fangdajing:before { content: "\e614"; }

.icon-Aa:before { content: "\e636"; }

.icon-qianbi:before { content: "\e62a"; } */

