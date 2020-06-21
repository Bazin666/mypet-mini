// components/editor/editor.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        hide:{
            type:Boolean,
            value:false
        }
    },
  
    /**
     * 组件的初始数据
     */
    data: {
        textarea_num:"0/200",
        context:""
    },
  
    /**
     * 组件的方法列表
     */
    methods: {
        changeText(e){
            var value = e.detail.value
            this.setData({
                context:value,
                textarea_num:value.length+"/"+"200"
            })
        }
    }
  })
  