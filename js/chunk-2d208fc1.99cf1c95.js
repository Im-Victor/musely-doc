(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d208fc1"],{a6b8:function(s,t,a){"use strict";a.r(t);var n=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",{attrs:{id:"popup"}},[s._v("Popup")]),a("h2",{attrs:{id:"%E5%BC%B9%E5%87%BA%E6%A1%86%EF%BC%8C%E5%8F%AF%E8%87%AA%E5%AE%9A%E4%B9%89%E5%86%85%E5%AE%B9%E3%80%82"}},[s._v("弹出框，可自定义内容。")]),s._m(0),s._m(1),a("h3",{attrs:{id:"%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95"}},[s._v("基础用法")]),a("code-view",{attrs:{jsfiddle:{html:'<mu-button @click="setButtonBottom" ref="button">跟随弹出 popup</mu-button>\n<mu-button @click="popupVisible2 = true">页头弹出 popup</mu-button>\n<mu-button @click="popupVisible4 = true">页尾弹出 popup</mu-button>\n<mu-button @click="popupVisible3 = true">右侧弹出 popup</mu-button>\n\n<mu-popup v-model="popupVisible" popup-transition="popup-fade" class="popupDef" :style="{ top: buttonBottom + 80 + \'px\', left: buttonLeft + 220 + \'px\' }">\n  <h1>popup</h1>\n  <p>/ ˈpɑpˌʌp /</p>\n  <p>A popup window displays, listing the available user management properties.</p>\n</mu-popup>\n\n<mu-popup v-model="popupVisible2" position="top" :modal="false" class="popupTop">\n  <p>We would create a Border and a Popup element to display the Preview.</p>\n</mu-popup>\n\n<mu-popup v-model="popupVisible3" position="right" class="popupRight">\n  <p>At the right upper corner of this window there is a popup list and two navigation buttons.</p>\n  <span><mu-button @click="popupVisible3 = false" type="primary">close popup</mu-button></span>\n</mu-popup>\n\n<mu-popup v-model="popupVisible4" position="bottom" class="popupBottom">\n  <p>This is a test of operator notification via network popup-please ignore it.</p>\n</mu-popup>\n<script>\n  export default {\n    data() {\n      return {\n        popupVisible: false,\n        popupVisible2: false,\n        popupVisible3: false,\n        popupVisible4: false,\n        buttonBottom: 0,\n        buttonLeft: 0\n      }\n    },\n    methods: {\n      handleClose(done) {\n        this.$confirm(\'确认关闭？\')\n          .then((_) => {\n            done()\n          })\n          .catch((_) => {})\n      },\n      setButtonBottom() {\n        this.popupVisible = true\n        this.buttonBottom = this.$refs.button.$el.getBoundingClientRect().bottom\n        this.buttonLeft = this.$refs.button.$el.getBoundingClientRect().left\n      }\n    },\n    watch: {\n      popupVisible2(val) {\n        if (val) {\n          setTimeout(() => {\n            this.popupVisible2 = false\n          }, 2000)\n        }\n      }\n    }\n  }\n<\/script>\n\n',script:"\n  export default {\n    data() {\n      return {\n        popupVisible: false,\n        popupVisible2: false,\n        popupVisible3: false,\n        popupVisible4: false,\n        buttonBottom: 0,\n        buttonLeft: 0\n      }\n    },\n    methods: {\n      handleClose(done) {\n        this.$confirm('确认关闭？')\n          .then((_) => {\n            done()\n          })\n          .catch((_) => {})\n      },\n      setButtonBottom() {\n        this.popupVisible = true\n        this.buttonBottom = this.$refs.button.$el.getBoundingClientRect().bottom\n        this.buttonLeft = this.$refs.button.$el.getBoundingClientRect().left\n      }\n    },\n    watch: {\n      popupVisible2(val) {\n        if (val) {\n          setTimeout(() => {\n            this.popupVisible2 = false\n          }, 2000)\n        }\n      }\n    }\n  }\n",style:"\n  .popupTop {\n    width: 100%;\n    height: 50px;\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.7);\n    backface-visibility: hidden;\n  }\n"}}},[a("template",{slot:"source"},[a("compontent-doc0")],1),a("div",{attrs:{slot:"description"},slot:"description"}),a("div",{attrs:{slot:"highlight"},slot:"highlight"},[a("pre",[a("code",{staticClass:"hljs language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mu-button")]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"setButtonBottom"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("ref")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"button"')]),s._v(">")]),s._v("跟随弹出 popup"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mu-button")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mu-button")]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"popupVisible2 = true"')]),s._v(">")]),s._v("页头弹出 popup"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mu-button")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mu-button")]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"popupVisible4 = true"')]),s._v(">")]),s._v("页尾弹出 popup"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mu-button")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mu-button")]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"popupVisible3 = true"')]),s._v(">")]),s._v("右侧弹出 popup"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mu-button")]),s._v(">")]),s._v("\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mu-popup")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"popupVisible"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("popup-transition")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"popup-fade"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"popupDef"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v("\"{ top: buttonBottom + 80 + 'px', left: buttonLeft + 220 + 'px' }\"")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("h1")]),s._v(">")]),s._v("popup"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("h1")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("/ ˈpɑpˌʌp /"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("A popup window displays, listing the available user management properties."),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mu-popup")]),s._v(">")]),s._v("\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mu-popup")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"popupVisible2"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("position")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"top"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":modal")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"false"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"popupTop"')]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("We would create a Border and a Popup element to display the Preview."),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mu-popup")]),s._v(">")]),s._v("\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mu-popup")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"popupVisible3"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("position")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"right"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"popupRight"')]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("At the right upper corner of this window there is a popup list and two navigation buttons."),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mu-button")]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"popupVisible3 = false"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"primary"')]),s._v(">")]),s._v("close popup"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mu-button")]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mu-popup")]),s._v(">")]),s._v("\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mu-popup")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"popupVisible4"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("position")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"bottom"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"popupBottom"')]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("This is a test of operator notification via network popup-please ignore it."),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mu-popup")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n  "),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n    "),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-title"},[s._v("data")]),s._v("("),a("span",{staticClass:"hljs-params"}),s._v(")")]),s._v(" {\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n        "),a("span",{staticClass:"hljs-attr"},[s._v("popupVisible")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n        "),a("span",{staticClass:"hljs-attr"},[s._v("popupVisible2")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n        "),a("span",{staticClass:"hljs-attr"},[s._v("popupVisible3")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n        "),a("span",{staticClass:"hljs-attr"},[s._v("popupVisible4")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(",\n        "),a("span",{staticClass:"hljs-attr"},[s._v("buttonBottom")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(",\n        "),a("span",{staticClass:"hljs-attr"},[s._v("buttonLeft")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("\n      }\n    },\n    "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n      "),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-title"},[s._v("handleClose")]),s._v("("),a("span",{staticClass:"hljs-params"},[s._v("done")]),s._v(")")]),s._v(" {\n        "),a("span",{staticClass:"hljs-built_in"},[s._v("this")]),s._v(".$confirm("),a("span",{staticClass:"hljs-string"},[s._v("'确认关闭？'")]),s._v(")\n          .then("),a("span",{staticClass:"hljs-function"},[s._v("("),a("span",{staticClass:"hljs-params"},[s._v("_")]),s._v(") =>")]),s._v(" {\n            done()\n          })\n          .catch("),a("span",{staticClass:"hljs-function"},[s._v("("),a("span",{staticClass:"hljs-params"},[s._v("_")]),s._v(") =>")]),s._v(" {})\n      },\n      "),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-title"},[s._v("setButtonBottom")]),s._v("("),a("span",{staticClass:"hljs-params"}),s._v(")")]),s._v(" {\n        "),a("span",{staticClass:"hljs-built_in"},[s._v("this")]),s._v(".popupVisible = "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v("\n        "),a("span",{staticClass:"hljs-built_in"},[s._v("this")]),s._v(".buttonBottom = "),a("span",{staticClass:"hljs-built_in"},[s._v("this")]),s._v(".$refs.button.$el.getBoundingClientRect().bottom\n        "),a("span",{staticClass:"hljs-built_in"},[s._v("this")]),s._v(".buttonLeft = "),a("span",{staticClass:"hljs-built_in"},[s._v("this")]),s._v(".$refs.button.$el.getBoundingClientRect().left\n      }\n    },\n    "),a("span",{staticClass:"hljs-attr"},[s._v("watch")]),s._v(": {\n      "),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-title"},[s._v("popupVisible2")]),s._v("("),a("span",{staticClass:"hljs-params"},[s._v("val")]),s._v(")")]),s._v(" {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (val) {\n          "),a("span",{staticClass:"hljs-built_in"},[s._v("setTimeout")]),s._v("("),a("span",{staticClass:"hljs-function"},[s._v("() =>")]),s._v(" {\n            "),a("span",{staticClass:"hljs-built_in"},[s._v("this")]),s._v(".popupVisible2 = "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v("\n          }, "),a("span",{staticClass:"hljs-number"},[s._v("2000")]),s._v(")\n        }\n      }\n    }\n  }\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),a("span",{staticClass:"css"},[s._v("\n  "),a("span",{staticClass:"hljs-selector-class"},[s._v(".popupTop")]),s._v(" {\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("width")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("100%")]),s._v(";\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("height")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("50px")]),s._v(";\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("text-align")]),s._v(": center;\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("background-color")]),s._v(": "),a("span",{staticClass:"hljs-built_in"},[s._v("rgba")]),s._v("("),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(", "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(", "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(", "),a("span",{staticClass:"hljs-number"},[s._v("0.7")]),s._v(");\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("backface-visibility")]),s._v(": hidden;\n  }\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),s._v("\n")])])])],2),a("h3",{attrs:{id:"%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95-2"}},[s._v("基础用法")]),s._m(2),a("code-view",{attrs:{jsfiddle:{html:'<mu-button type="text" @click="popupVisible = true">点击打开 Popup</mu-button>\n\n<mu-popup v-model="popupVisible" popup-transition="popup-fade">\n  <p>You can get real time values or inverted values, includes popup menu.</p>\n\n  <p>你能获得实时的值，或者转换的值，包括弹出菜单。</p>\n\n  <p>A popup dialog with the text "Do you want to install Controller Client" will appear.</p>\n\n  <p>将显示一个弹出对话框，其中显示文本“Do you want to install Controller Client”。</p>\n</mu-popup>\n\n<script>\n  export default {\n    data() {\n      return {\n        popupVisible: false\n      }\n    },\n    methods: {\n      handleClose(done) {\n        this.$confirm(\'确认关闭？\')\n          .then((_) => {\n            done()\n          })\n          .catch((_) => {})\n      }\n    }\n  }\n<\/script>\n',script:"\n  export default {\n    data() {\n      return {\n        popupVisible: false\n      }\n    },\n    methods: {\n      handleClose(done) {\n        this.$confirm('确认关闭？')\n          .then((_) => {\n            done()\n          })\n          .catch((_) => {})\n      }\n    }\n  }\n",style:null}}},[a("template",{slot:"source"},[a("compontent-doc1")],1),a("div",{attrs:{slot:"description"},slot:"description"}),a("div",{attrs:{slot:"highlight"},slot:"highlight"},[a("pre",[a("code",{staticClass:"hljs language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mu-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"text"')]),s._v(" @"),a("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"popupVisible = true"')]),s._v(">")]),s._v("点击打开 Popup"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mu-button")]),s._v(">")]),s._v("\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mu-popup")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"popupVisible"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("popup-transition")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"popup-fade"')]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("You can get real time values or inverted values, includes popup menu."),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("\n\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("你能获得实时的值，或者转换的值，包括弹出菜单。"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("\n\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v('A popup dialog with the text "Do you want to install Controller Client" will appear.'),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("\n\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("将显示一个弹出对话框，其中显示文本“Do you want to install Controller Client”。"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("p")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mu-popup")]),s._v(">")]),s._v("\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n  "),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n    "),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-title"},[s._v("data")]),s._v("("),a("span",{staticClass:"hljs-params"}),s._v(")")]),s._v(" {\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n        "),a("span",{staticClass:"hljs-attr"},[s._v("popupVisible")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v("\n      }\n    },\n    "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n      "),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-title"},[s._v("handleClose")]),s._v("("),a("span",{staticClass:"hljs-params"},[s._v("done")]),s._v(")")]),s._v(" {\n        "),a("span",{staticClass:"hljs-built_in"},[s._v("this")]),s._v(".$confirm("),a("span",{staticClass:"hljs-string"},[s._v("'确认关闭？'")]),s._v(")\n          .then("),a("span",{staticClass:"hljs-function"},[s._v("("),a("span",{staticClass:"hljs-params"},[s._v("_")]),s._v(") =>")]),s._v(" {\n            done()\n          })\n          .catch("),a("span",{staticClass:"hljs-function"},[s._v("("),a("span",{staticClass:"hljs-params"},[s._v("_")]),s._v(") =>")]),s._v(" {})\n      }\n    }\n  }\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2),a("h2",{attrs:{id:"api"}},[s._v("API")]),s._m(3),a("h2",{attrs:{id:"slot"}},[s._v("Slot")]),s._m(4),s._m(5)],1)},p=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[a("code",{staticClass:"code_inline"},[s._v("position")]),s._v(" 属性指定了 "),a("code",{staticClass:"code_inline"},[s._v("popup")]),s._v(" 的位置。比如，"),a("code",{staticClass:"code_inline"},[s._v("position")]),s._v(" 为 'bottom' 时，"),a("code",{staticClass:"code_inline"},[s._v("popup")]),s._v(" 会从屏幕下方移入，并最终固定在屏幕下方。移入/移出的动效会根据 "),a("code",{staticClass:"code_inline"},[s._v("position")]),s._v(" 的不同而自动改变，无需手动配置。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("将 "),a("code",{staticClass:"code_inline"},[s._v("v-model")]),s._v(" 绑定到一个本地变量，通过操作这个变量即可控制 "),a("code",{staticClass:"code_inline"},[s._v("popup")]),s._v(" 的显示与隐藏。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("若省略 "),a("code",{staticClass:"code_inline"},[s._v("position")]),s._v(" 属性，则 "),a("code",{staticClass:"code_inline"},[s._v("popup")]),s._v(" 会相对于屏幕居中显示（若不想让其居中，可通过 CSS 对其重新定位）。此时建议将动效设置为 "),a("code",{staticClass:"code_inline"},[s._v("popup-fade")]),s._v("，这样在显示/隐藏时会有淡入/淡出效果。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("参数")]),a("th",[s._v("说明")]),a("th",[s._v("类型")]),a("th",[s._v("可选值")]),a("th",[s._v("默认值")])])]),a("tbody",[a("tr",[a("td",[s._v("position")]),a("td",[a("code",{staticClass:"code_inline"},[s._v("popup")]),s._v(" 的位置。省略则居中显示")]),a("td",[s._v("String")]),a("td",[s._v("'top'"),a("br"),s._v("'right'"),a("br"),s._v("'bottom'"),a("br"),s._v("'left'")]),a("td")]),a("tr",[a("td",[s._v("pop-transition")]),a("td",[s._v("显示/隐藏时的动效，仅在省略 "),a("code",{staticClass:"code_inline"},[s._v("position")]),s._v(" 时可配置")]),a("td",[s._v("String")]),a("td",[s._v("'popup-fade'")]),a("td")]),a("tr",[a("td",[s._v("modal")]),a("td",[s._v("是否创建一个 modal 层")]),a("td",[s._v("Boolean")]),a("td"),a("td",[s._v("true")])]),a("tr",[a("td",[s._v("closeOnClickModal")]),a("td",[s._v("是否可以通过点击 modal 层来关闭 "),a("code",{staticClass:"code_inline"},[s._v("popup")])]),a("td",[s._v("Boolean")]),a("td"),a("td",[s._v("true")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("name")]),a("th",[s._v("描述")])])]),a("tbody",[a("tr",[a("td",[s._v("-")]),a("td",[s._v("弹出框的内容")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"hljs"},[s._v("\n")])])}],l=a("5530"),i={name:"component-doc",components:{"compontent-doc0":function(){var s=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"template2source"},[a("mu-button",{ref:"button",on:{click:s.setButtonBottom}},[s._v("跟随弹出 popup")]),s._v(" "),a("mu-button",{on:{click:function(t){s.popupVisible2=!0}}},[s._v("页头弹出 popup")]),s._v(" "),a("mu-button",{on:{click:function(t){s.popupVisible4=!0}}},[s._v("页尾弹出 popup")]),s._v(" "),a("mu-button",{on:{click:function(t){s.popupVisible3=!0}}},[s._v("右侧弹出 popup")]),s._v(" "),a("mu-popup",{staticClass:"popupDef",style:{top:s.buttonBottom+80+"px",left:s.buttonLeft+220+"px"},attrs:{"popup-transition":"popup-fade"},model:{value:s.popupVisible,callback:function(t){s.popupVisible=t},expression:"popupVisible"}},[a("h1",[s._v("popup")]),s._v(" "),a("p",[s._v("/ ˈpɑpˌʌp /")]),s._v(" "),a("p",[s._v("A popup window displays, listing the available user management properties.")])]),s._v(" "),a("mu-popup",{staticClass:"popupTop",attrs:{position:"top",modal:!1},model:{value:s.popupVisible2,callback:function(t){s.popupVisible2=t},expression:"popupVisible2"}},[a("p",[s._v("We would create a Border and a Popup element to display the Preview.")])]),s._v(" "),a("mu-popup",{staticClass:"popupRight",attrs:{position:"right"},model:{value:s.popupVisible3,callback:function(t){s.popupVisible3=t},expression:"popupVisible3"}},[a("p",[s._v("At the right upper corner of this window there is a popup list and two navigation buttons.")]),s._v(" "),a("span",[a("mu-button",{attrs:{type:"primary"},on:{click:function(t){s.popupVisible3=!1}}},[s._v("close popup")])],1)]),s._v(" "),a("mu-popup",{staticClass:"popupBottom",attrs:{position:"bottom"},model:{value:s.popupVisible4,callback:function(t){s.popupVisible4=t},expression:"popupVisible4"}},[a("p",[s._v("This is a test of operator notification via network popup-please ignore it.")])])],1)},t=[],a={data:function(){return{popupVisible:!1,popupVisible2:!1,popupVisible3:!1,popupVisible4:!1,buttonBottom:0,buttonLeft:0}},methods:{handleClose:function(s){this.$confirm("确认关闭？").then((function(t){s()})).catch((function(s){}))},setButtonBottom:function(){this.popupVisible=!0,this.buttonBottom=this.$refs.button.$el.getBoundingClientRect().bottom,this.buttonLeft=this.$refs.button.$el.getBoundingClientRect().left}},watch:{popupVisible2:function(s){var t=this;s&&setTimeout((function(){t.popupVisible2=!1}),2e3)}}};return Object(l["a"])({render:s,staticRenderFns:t},a)}(),"compontent-doc1":function(){var s=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"template2source"},[a("mu-button",{attrs:{type:"text"},on:{click:function(t){s.popupVisible=!0}}},[s._v("点击打开 Popup")]),s._v(" "),a("mu-popup",{attrs:{"popup-transition":"popup-fade"},model:{value:s.popupVisible,callback:function(t){s.popupVisible=t},expression:"popupVisible"}},[a("p",[s._v("You can get real time values or inverted values, includes popup menu.")]),s._v(" "),a("p",[s._v("你能获得实时的值，或者转换的值，包括弹出菜单。")]),s._v(" "),a("p",[s._v('A popup dialog with the text "Do you want to install Controller Client" will appear.')]),s._v(" "),a("p",[s._v("将显示一个弹出对话框，其中显示文本“Do you want to install Controller Client”。")])])],1)},t=[],a={data:function(){return{popupVisible:!1}},methods:{handleClose:function(s){this.$confirm("确认关闭？").then((function(t){s()})).catch((function(s){}))}}};return Object(l["a"])({render:s,staticRenderFns:t},a)}()}},e=i,o=a("2877"),v=Object(o["a"])(e,n,p,!1,null,null,null);t["default"]=v.exports}}]);