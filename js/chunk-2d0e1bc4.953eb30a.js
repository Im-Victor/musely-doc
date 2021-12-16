(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e1bc4"],{"7c68":function(s,t,a){"use strict";a.r(t);var n=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h2",{attrs:{id:"switched"}},[s._v("Switched")]),a("p",[s._v("Loop a series of images or texts in a limited space")]),a("h3",{attrs:{id:"basic-usage"}},[s._v("Basic usage")]),a("code-view",{attrs:{jsfiddle:{html:'<template>\n  <div class="block">\n    <span class="demonstration">Switch when indicator is hovered (default)</span>\n    <mu-switched height="350px" :autoplay="false" arrow="never">\n      <mu-switched-item v-for="item in items" :key="item.title" fit="contain">\n        <mu-image style="height:100%" :src="item.src" :preview-src-list="[item.src]"></mu-image>\n      </mu-switched-item>\n    </mu-switched>\n  </div>\n  <div class="block">\n    <span class="demonstration">Switch when indicator is clicked</span>\n    <mu-switched trigger="click" height="150px">\n      <mu-switched-item v-for="item in 4" :key="item">\n        <h3 class="small">{{ item }}</h3>\n      </mu-switched-item>\n    </mu-switched>\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        items: [{title:\'text1\',src:\'https://media.musely.com/u/5e166b5d-2db5-4854-9f57-7de0f85f8f9b.jpg\'},{title:\'text2\',src:\'https://media.musely.com/u/d4903f90-a940-4f1d-9a51-14c9cd68de49.jpg\'},{title:\'text3\',src:\'https://media.musely.com/u/fa6d0814-5869-4d28-88a5-148d2aff7a22.jpg\'}]\n      }\n    }\n  }\n<\/script>\n\n',script:"\n  export default {\n    data() {\n      return {\n        items: [{title:'text1',src:'https://media.musely.com/u/5e166b5d-2db5-4854-9f57-7de0f85f8f9b.jpg'},{title:'text2',src:'https://media.musely.com/u/d4903f90-a940-4f1d-9a51-14c9cd68de49.jpg'},{title:'text3',src:'https://media.musely.com/u/fa6d0814-5869-4d28-88a5-148d2aff7a22.jpg'}]\n      }\n    }\n  }\n",style:"\n  .mu-switched__item h3 {\n    color: #475669;\n    font-size: 14px;\n    opacity: 0.75;\n    line-height: 150px;\n    margin: 0;\n  }\n\n  .mu-switched__item:nth-child(2n) {\n    background-color: #99a9bf;\n  }\n\n  .mu-switched__item:nth-child(2n+1) {\n    background-color: #d3dce6;\n  }\n"}}},[a("template",{slot:"source"},[a("compontent-doc0")],1),a("div",{staticClass:"description",attrs:{slot:"description"},slot:"description"},[a("p",[s._v("Combine "),a("code",[s._v("mu-switched")]),s._v(" with "),a("code",[s._v("mu-switched-item")]),s._v(", and you'll get a switched. Content of each slide is completely customizable, and you just need to place it inside "),a("code",[s._v("mu-switched-item")]),s._v(" tag. By default the switched switches when mouse hovers over an indicator. Set "),a("code",[s._v("trigger")]),s._v(" to "),a("code",[s._v("click")]),s._v(", and the switched switches only when an indicator is clicked.")])]),a("div",{attrs:{slot:"highlight"},slot:"highlight"},[a("pre",[a("code",{staticClass:"hljs language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"block"')]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"demonstration"')]),s._v(">")]),s._v("Switch when indicator is hovered (default)"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mu-switched")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("height")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"350px"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":autoplay")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"false"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("arrow")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"never"')]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mu-switched-item")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-for")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"item in items"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":key")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"item.title"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("fit")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"contain"')]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mu-image")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"height:100%"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":src")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"item.src"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":preview-src-list")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"[item.src]"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mu-image")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mu-switched-item")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mu-switched")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"block"')]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"demonstration"')]),s._v(">")]),s._v("Switch when indicator is clicked"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mu-switched")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("trigger")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"click"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("height")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"150px"')]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mu-switched-item")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-for")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"item in 4"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":key")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"item"')]),s._v(">")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("h3")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"small"')]),s._v(">")]),s._v(s._s("{{ item }}")),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("h3")]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mu-switched-item")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mu-switched")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n  "),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n    "),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-title"},[s._v("data")]),s._v("("),a("span",{staticClass:"hljs-params"}),s._v(")")]),s._v(" {\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n        "),a("span",{staticClass:"hljs-attr"},[s._v("items")]),s._v(": [{"),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v(":"),a("span",{staticClass:"hljs-string"},[s._v("'text1'")]),s._v(","),a("span",{staticClass:"hljs-attr"},[s._v("src")]),s._v(":"),a("span",{staticClass:"hljs-string"},[s._v("'https://media.musely.com/u/5e166b5d-2db5-4854-9f57-7de0f85f8f9b.jpg'")]),s._v("},{"),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v(":"),a("span",{staticClass:"hljs-string"},[s._v("'text2'")]),s._v(","),a("span",{staticClass:"hljs-attr"},[s._v("src")]),s._v(":"),a("span",{staticClass:"hljs-string"},[s._v("'https://media.musely.com/u/d4903f90-a940-4f1d-9a51-14c9cd68de49.jpg'")]),s._v("},{"),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v(":"),a("span",{staticClass:"hljs-string"},[s._v("'text3'")]),s._v(","),a("span",{staticClass:"hljs-attr"},[s._v("src")]),s._v(":"),a("span",{staticClass:"hljs-string"},[s._v("'https://media.musely.com/u/fa6d0814-5869-4d28-88a5-148d2aff7a22.jpg'")]),s._v("}]\n      }\n    }\n  }\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),a("span",{staticClass:"css"},[s._v("\n  "),a("span",{staticClass:"hljs-selector-class"},[s._v(".mu-switched__item")]),s._v(" "),a("span",{staticClass:"hljs-selector-tag"},[s._v("h3")]),s._v(" {\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("color")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#475669")]),s._v(";\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("font-size")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("14px")]),s._v(";\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("opacity")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("0.75")]),s._v(";\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("line-height")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("150px")]),s._v(";\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("margin")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(";\n  }\n\n  "),a("span",{staticClass:"hljs-selector-class"},[s._v(".mu-switched__item")]),a("span",{staticClass:"hljs-selector-pseudo"},[s._v(":nth-child")]),s._v("("),a("span",{staticClass:"hljs-number"},[s._v("2")]),s._v("n) {\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("background-color")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#99a9bf")]),s._v(";\n  }\n\n  "),a("span",{staticClass:"hljs-selector-class"},[s._v(".mu-switched__item")]),a("span",{staticClass:"hljs-selector-pseudo"},[s._v(":nth-child")]),s._v("("),a("span",{staticClass:"hljs-number"},[s._v("2")]),s._v("n+"),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(") {\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("background-color")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#d3dce6")]),s._v(";\n  }\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),s._v("\n")])])])],2),a("h3",{attrs:{id:"indicators"}},[s._v("Indicators")]),a("p",[s._v("Indicators can be displayed outside the switched")]),a("code-view",{attrs:{jsfiddle:{html:'<template>\n  <mu-switched indicator-position="outside">\n    <mu-switched-item v-for="item in 4" :key="item">\n      <h3>{{ item }}</h3>\n    </mu-switched-item>\n  </mu-switched>\n</template>\n\n\n',script:null,style:"\n  .mu-switched__item h3 {\n    color: #475669;\n    font-size: 18px;\n    opacity: 0.75;\n    line-height: 300px;\n    margin: 0;\n  }\n\n  .mu-switched__item:nth-child(2n) {\n    background-color: #99a9bf;\n  }\n\n  .mu-switched__item:nth-child(2n+1) {\n    background-color: #d3dce6;\n  }\n"}}},[a("template",{slot:"source"},[a("compontent-doc1")],1),a("div",{staticClass:"description",attrs:{slot:"description"},slot:"description"},[a("p",[s._v("The "),a("code",[s._v("indicator-position")]),s._v(" attribute determines where the indicators are located. By default they are inside the switched, and setting "),a("code",[s._v("indicator-position")]),s._v(" to "),a("code",[s._v("outside")]),s._v(" moves them outside; setting "),a("code",[s._v("indicator-position")]),s._v(" to "),a("code",[s._v("none")]),s._v(" hides the indicators.")])]),a("div",{attrs:{slot:"highlight"},slot:"highlight"},[a("pre",[a("code",{staticClass:"hljs language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mu-switched")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("indicator-position")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"outside"')]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mu-switched-item")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-for")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"item in 4"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":key")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"item"')]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("h3")]),s._v(">")]),s._v(s._s("{{ item }}")),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("h3")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mu-switched-item")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mu-switched")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),a("span",{staticClass:"css"},[s._v("\n  "),a("span",{staticClass:"hljs-selector-class"},[s._v(".mu-switched__item")]),s._v(" "),a("span",{staticClass:"hljs-selector-tag"},[s._v("h3")]),s._v(" {\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("color")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#475669")]),s._v(";\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("font-size")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("18px")]),s._v(";\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("opacity")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("0.75")]),s._v(";\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("line-height")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("300px")]),s._v(";\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("margin")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(";\n  }\n\n  "),a("span",{staticClass:"hljs-selector-class"},[s._v(".mu-switched__item")]),a("span",{staticClass:"hljs-selector-pseudo"},[s._v(":nth-child")]),s._v("("),a("span",{staticClass:"hljs-number"},[s._v("2")]),s._v("n) {\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("background-color")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#99a9bf")]),s._v(";\n  }\n\n  "),a("span",{staticClass:"hljs-selector-class"},[s._v(".mu-switched__item")]),a("span",{staticClass:"hljs-selector-pseudo"},[s._v(":nth-child")]),s._v("("),a("span",{staticClass:"hljs-number"},[s._v("2")]),s._v("n+"),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(") {\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("background-color")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#d3dce6")]),s._v(";\n  }\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),s._v("\n")])])])],2),a("h3",{attrs:{id:"arrows"}},[s._v("Arrows")]),a("p",[s._v("You can define when arrows are displayed")]),a("code-view",{attrs:{jsfiddle:{html:'<template>\n  <mu-switched :interval="5000" arrow="always">\n    <mu-switched-item v-for="item in 4" :key="item">\n      <h3>{{ item }}</h3>\n    </mu-switched-item>\n  </mu-switched>\n</template>\n\n\n',script:null,style:"\n  .mu-switched__item h3 {\n    color: #475669;\n    font-size: 18px;\n    opacity: 0.75;\n    line-height: 300px;\n    margin: 0;\n  }\n\n  .mu-switched__item:nth-child(2n) {\n    background-color: #99a9bf;\n  }\n\n  .mu-switched__item:nth-child(2n+1) {\n    background-color: #d3dce6;\n  }\n"}}},[a("template",{slot:"source"},[a("compontent-doc2")],1),a("div",{staticClass:"description",attrs:{slot:"description"},slot:"description"},[a("p",[s._v("The "),a("code",[s._v("arrow")]),s._v(" attribute determines when arrows are displayed. By default they appear when mouse hovers over the switched. Setting "),a("code",[s._v("arrow")]),s._v(" to "),a("code",[s._v("always")]),s._v(" or "),a("code",[s._v("never")]),s._v(" shows/hides the arrows permanently.")])]),a("div",{attrs:{slot:"highlight"},slot:"highlight"},[a("pre",[a("code",{staticClass:"hljs language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mu-switched")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":interval")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"5000"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("arrow")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"always"')]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mu-switched-item")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-for")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"item in 4"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":key")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"item"')]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("h3")]),s._v(">")]),s._v(s._s("{{ item }}")),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("h3")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mu-switched-item")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mu-switched")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),a("span",{staticClass:"css"},[s._v("\n  "),a("span",{staticClass:"hljs-selector-class"},[s._v(".mu-switched__item")]),s._v(" "),a("span",{staticClass:"hljs-selector-tag"},[s._v("h3")]),s._v(" {\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("color")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#475669")]),s._v(";\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("font-size")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("18px")]),s._v(";\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("opacity")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("0.75")]),s._v(";\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("line-height")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("300px")]),s._v(";\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("margin")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(";\n  }\n\n  "),a("span",{staticClass:"hljs-selector-class"},[s._v(".mu-switched__item")]),a("span",{staticClass:"hljs-selector-pseudo"},[s._v(":nth-child")]),s._v("("),a("span",{staticClass:"hljs-number"},[s._v("2")]),s._v("n) {\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("background-color")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#99a9bf")]),s._v(";\n  }\n\n  "),a("span",{staticClass:"hljs-selector-class"},[s._v(".mu-switched__item")]),a("span",{staticClass:"hljs-selector-pseudo"},[s._v(":nth-child")]),s._v("("),a("span",{staticClass:"hljs-number"},[s._v("2")]),s._v("n+"),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(") {\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("background-color")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#d3dce6")]),s._v(";\n  }\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),s._v("\n")])])])],2),a("h3",{attrs:{id:"card-mode"}},[s._v("Card mode")]),a("p",[s._v("When a page is wide enough but has limited height, you can activate card mode for switcheds")]),a("code-view",{attrs:{jsfiddle:{html:'<template>\n  <mu-switched :interval="4000" type="card" height="200px">\n    <mu-switched-item v-for="item in 6" :key="item">\n      <h3 class="medium">{{ item }}</h3>\n    </mu-switched-item>\n  </mu-switched>\n</template>\n\n\n',script:null,style:"\n  .mu-switched__item h3 {\n    color: #475669;\n    font-size: 14px;\n    opacity: 0.75;\n    line-height: 200px;\n    margin: 0;\n  }\n\n  .mu-switched__item:nth-child(2n) {\n    background-color: #99a9bf;\n  }\n\n  .mu-switched__item:nth-child(2n+1) {\n    background-color: #d3dce6;\n  }\n"}}},[a("template",{slot:"source"},[a("compontent-doc3")],1),a("div",{staticClass:"description",attrs:{slot:"description"},slot:"description"},[a("p",[s._v("Setting "),a("code",[s._v("type")]),s._v(" to "),a("code",[s._v("card")]),s._v(" activates the card mode. Apart from the appearance, the biggest difference between card mode and common mode is that clicking the slides at both sides directly switches the switched in card mode.")])]),a("div",{attrs:{slot:"highlight"},slot:"highlight"},[a("pre",[a("code",{staticClass:"hljs language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mu-switched")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":interval")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"4000"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"card"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("height")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"200px"')]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mu-switched-item")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-for")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"item in 6"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":key")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"item"')]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("h3")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"medium"')]),s._v(">")]),s._v(s._s("{{ item }}")),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("h3")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mu-switched-item")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mu-switched")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),a("span",{staticClass:"css"},[s._v("\n  "),a("span",{staticClass:"hljs-selector-class"},[s._v(".mu-switched__item")]),s._v(" "),a("span",{staticClass:"hljs-selector-tag"},[s._v("h3")]),s._v(" {\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("color")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#475669")]),s._v(";\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("font-size")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("14px")]),s._v(";\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("opacity")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("0.75")]),s._v(";\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("line-height")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("200px")]),s._v(";\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("margin")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(";\n  }\n\n  "),a("span",{staticClass:"hljs-selector-class"},[s._v(".mu-switched__item")]),a("span",{staticClass:"hljs-selector-pseudo"},[s._v(":nth-child")]),s._v("("),a("span",{staticClass:"hljs-number"},[s._v("2")]),s._v("n) {\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("background-color")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#99a9bf")]),s._v(";\n  }\n\n  "),a("span",{staticClass:"hljs-selector-class"},[s._v(".mu-switched__item")]),a("span",{staticClass:"hljs-selector-pseudo"},[s._v(":nth-child")]),s._v("("),a("span",{staticClass:"hljs-number"},[s._v("2")]),s._v("n+"),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(") {\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("background-color")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#d3dce6")]),s._v(";\n  }\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),s._v("\n")])])])],2),s._m(0),a("code-view",{attrs:{jsfiddle:{html:'<template>\n  <mu-switched height="200px" direction="vertical" :autoplay="false">\n    <mu-switched-item v-for="item in 4" :key="item">\n      <h3 class="medium">{{ item }}</h3>\n    </mu-switched-item>\n  </mu-switched>\n</template>\n\n\n',script:null,style:"\n  .mu-switched__item h3 {\n    color: #475669;\n    font-size: 14px;\n    opacity: 0.75;\n    line-height: 200px;\n    margin: 0;\n  }\n  \n  .mu-switched__item:nth-child(2n) {\n    background-color: #99a9bf;\n  }\n  \n  .mu-switched__item:nth-child(2n+1) {\n    background-color: #d3dce6;\n  }\n"}}},[a("template",{slot:"source"},[a("compontent-doc4")],1),a("div",{attrs:{slot:"description"},slot:"description"}),a("div",{attrs:{slot:"highlight"},slot:"highlight"},[a("pre",[a("code",{staticClass:"hljs language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mu-switched")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("height")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"200px"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("direction")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"vertical"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":autoplay")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"false"')]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mu-switched-item")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-for")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"item in 4"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":key")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"item"')]),s._v(">")]),s._v("\n      "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("h3")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"medium"')]),s._v(">")]),s._v(s._s("{{ item }}")),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("h3")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mu-switched-item")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mu-switched")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),a("span",{staticClass:"css"},[s._v("\n  "),a("span",{staticClass:"hljs-selector-class"},[s._v(".mu-switched__item")]),s._v(" "),a("span",{staticClass:"hljs-selector-tag"},[s._v("h3")]),s._v(" {\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("color")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#475669")]),s._v(";\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("font-size")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("14px")]),s._v(";\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("opacity")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("0.75")]),s._v(";\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("line-height")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("200px")]),s._v(";\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("margin")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(";\n  }\n  \n  "),a("span",{staticClass:"hljs-selector-class"},[s._v(".mu-switched__item")]),a("span",{staticClass:"hljs-selector-pseudo"},[s._v(":nth-child")]),s._v("("),a("span",{staticClass:"hljs-number"},[s._v("2")]),s._v("n) {\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("background-color")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#99a9bf")]),s._v(";\n  }\n  \n  "),a("span",{staticClass:"hljs-selector-class"},[s._v(".mu-switched__item")]),a("span",{staticClass:"hljs-selector-pseudo"},[s._v(":nth-child")]),s._v("("),a("span",{staticClass:"hljs-number"},[s._v("2")]),s._v("n+"),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(") {\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("background-color")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("#d3dce6")]),s._v(";\n  }\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),s._v("\n")])])])],2),a("h3",{attrs:{id:"switched-attributes"}},[s._v("Switched Attributes")]),s._m(1),a("h3",{attrs:{id:"switched-events"}},[s._v("Switched Events")]),s._m(2),a("h3",{attrs:{id:"switched-methods"}},[s._v("Switched Methods")]),s._m(3),a("h3",{attrs:{id:"carousmu-item-attributes"}},[s._v("Carousmu-Item Attributes")]),s._m(4)],1)},i=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("By default, "),a("code",{staticClass:"code_inline"},[s._v("direction")]),s._v(" is "),a("code",{staticClass:"code_inline"},[s._v("horizontal")]),s._v(". Let switched be displayed in the vertical direction by setting "),a("code",{staticClass:"code_inline"},[s._v("direction")]),s._v(" to "),a("code",{staticClass:"code_inline"},[s._v("vertical")]),s._v(".")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("Attribute")]),a("th",[s._v("Description")]),a("th",[s._v("Type")]),a("th",[s._v("Accepted Values")]),a("th",[s._v("Default")])])]),a("tbody",[a("tr",[a("td",[s._v("height")]),a("td",[s._v("height of the switched")]),a("td",[s._v("string")]),a("td",[s._v("—")]),a("td",[s._v("—")])]),a("tr",[a("td",[s._v("initial-index")]),a("td",[s._v("index of the initially active slide (starting from 0)")]),a("td",[s._v("number")]),a("td",[s._v("—")]),a("td",[s._v("0")])]),a("tr",[a("td",[s._v("trigger")]),a("td",[s._v("how indicators are triggered")]),a("td",[s._v("string")]),a("td",[s._v("hover/click")]),a("td",[s._v("hover")])]),a("tr",[a("td",[s._v("autoplay")]),a("td",[s._v("whether automatically loop the slides")]),a("td",[s._v("boolean")]),a("td",[s._v("—")]),a("td",[s._v("true")])]),a("tr",[a("td",[s._v("interval")]),a("td",[s._v("interval of the auto loop, in milliseconds")]),a("td",[s._v("number")]),a("td",[s._v("—")]),a("td",[s._v("3000")])]),a("tr",[a("td",[s._v("indicator-position")]),a("td",[s._v("position of the indicators")]),a("td",[s._v("string")]),a("td",[s._v("outside/none")]),a("td",[s._v("—")])]),a("tr",[a("td",[s._v("arrow")]),a("td",[s._v("when arrows are shown")]),a("td",[s._v("string")]),a("td",[s._v("always/hover/never")]),a("td",[s._v("hover")])]),a("tr",[a("td",[s._v("type")]),a("td",[s._v("type of the Switched")]),a("td",[s._v("string")]),a("td",[s._v("card")]),a("td",[s._v("—")])]),a("tr",[a("td",[s._v("loop")]),a("td",[s._v("display the items in loop")]),a("td",[s._v("boolean")]),a("td",[s._v("-")]),a("td",[s._v("true")])]),a("tr",[a("td",[s._v("direction")]),a("td",[s._v("display direction")]),a("td",[s._v("string")]),a("td",[s._v("horizontal/vertical")]),a("td",[s._v("horizontal")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("Event Name")]),a("th",[s._v("Description")]),a("th",[s._v("Parameters")])])]),a("tbody",[a("tr",[a("td",[s._v("change")]),a("td",[s._v("triggers when the active slide switches")]),a("td",[s._v("index of the new active slide, index of the old active slide")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("Method")]),a("th",[s._v("Description")]),a("th",[s._v("Parameters")])])]),a("tbody",[a("tr",[a("td",[s._v("setActiveItem")]),a("td",[s._v("manually switch slide")]),a("td",[s._v("index of the slide to be switched to, starting from 0; or the "),a("code",{staticClass:"code_inline"},[s._v("name")]),s._v(" of corresponding "),a("code",{staticClass:"code_inline"},[s._v("mu-switched-item")])])]),a("tr",[a("td",[s._v("prev")]),a("td",[s._v("switch to the previous slide")]),a("td",[s._v("—")])]),a("tr",[a("td",[s._v("next")]),a("td",[s._v("switch to the next slide")]),a("td",[s._v("—")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("Attribute")]),a("th",[s._v("Description")]),a("th",[s._v("Type")]),a("th",[s._v("Accepted Values")]),a("th",[s._v("Default")])])]),a("tbody",[a("tr",[a("td",[s._v("name")]),a("td",[s._v("name of the item, can be used in "),a("code",{staticClass:"code_inline"},[s._v("setActiveItem")])]),a("td",[s._v("string")]),a("td",[s._v("—")]),a("td",[s._v("—")])]),a("tr",[a("td",[s._v("label")]),a("td",[s._v("text content for the corresponding indicator")]),a("td",[s._v("string")]),a("td",[s._v("—")]),a("td",[s._v("—")])])])])}],e=a("5530"),l={name:"component-doc",components:{"compontent-doc0":function(){var s=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"template2source"},[[a("div",{staticClass:"block"},[a("span",{staticClass:"demonstration"},[s._v("Switch when indicator is hovered (default)")]),s._v(" "),a("mu-switched",{attrs:{height:"350px",autoplay:!1,arrow:"never"}},s._l(s.items,(function(s){return a("mu-switched-item",{key:s.title,attrs:{fit:"contain"}},[a("mu-image",{staticStyle:{height:"100%"},attrs:{src:s.src,"preview-src-list":[s.src]}})],1)})),1)],1),s._v(" "),a("div",{staticClass:"block"},[a("span",{staticClass:"demonstration"},[s._v("Switch when indicator is clicked")]),s._v(" "),a("mu-switched",{attrs:{trigger:"click",height:"150px"}},s._l(4,(function(t){return a("mu-switched-item",{key:t},[a("h3",{staticClass:"small"},[s._v(s._s(t))])])})),1)],1)]],2)},t=[],a={data:function(){return{items:[{title:"text1",src:"https://media.musely.com/u/5e166b5d-2db5-4854-9f57-7de0f85f8f9b.jpg"},{title:"text2",src:"https://media.musely.com/u/d4903f90-a940-4f1d-9a51-14c9cd68de49.jpg"},{title:"text3",src:"https://media.musely.com/u/fa6d0814-5869-4d28-88a5-148d2aff7a22.jpg"}]}}};return Object(e["a"])({render:s,staticRenderFns:t},a)}(),"compontent-doc1":function(){var s=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"template2source"},[[a("mu-switched",{attrs:{"indicator-position":"outside"}},s._l(4,(function(t){return a("mu-switched-item",{key:t},[a("h3",[s._v(s._s(t))])])})),1)]],2)},t=[],a={};return Object(e["a"])({render:s,staticRenderFns:t},a)}(),"compontent-doc2":function(){var s=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"template2source"},[[a("mu-switched",{attrs:{interval:5e3,arrow:"always"}},s._l(4,(function(t){return a("mu-switched-item",{key:t},[a("h3",[s._v(s._s(t))])])})),1)]],2)},t=[],a={};return Object(e["a"])({render:s,staticRenderFns:t},a)}(),"compontent-doc3":function(){var s=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"template2source"},[[a("mu-switched",{attrs:{interval:4e3,type:"card",height:"200px"}},s._l(6,(function(t){return a("mu-switched-item",{key:t},[a("h3",{staticClass:"medium"},[s._v(s._s(t))])])})),1)]],2)},t=[],a={};return Object(e["a"])({render:s,staticRenderFns:t},a)}(),"compontent-doc4":function(){var s=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"template2source"},[[a("mu-switched",{attrs:{height:"200px",direction:"vertical",autoplay:!1}},s._l(4,(function(t){return a("mu-switched-item",{key:t},[a("h3",{staticClass:"medium"},[s._v(s._s(t))])])})),1)]],2)},t=[],a={};return Object(e["a"])({render:s,staticRenderFns:t},a)}()}},c=l,_=a("2877"),v=Object(_["a"])(c,n,i,!1,null,null,null);t["default"]=v.exports}}]);