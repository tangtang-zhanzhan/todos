Vue.component("son1", {
    template: "#son1",
    data() {
        return {
            msg: [],
            isclick1: [],
            num: 0,
            con:0
        }
    },
    watch: {
        isclick1() {
            this.$emit("passchilk", this.isclick1)
        },
        msg() {
            this.$emit("passroot", this.msg)
        }
    },
    methods: {
        change(e) {
            this.msg.push({ id: this.num, text: e.target.value })
            this.isclick1.push(false)
            this.num++
        },
        quanxuan() {
            this.isclick1=[]
            if(this.con%2==0){
                for (var i = 0;i < this.msg.length;i++) {
                this.isclick1.push(true)
            }
            }else{
                for (var i = 0;i < this.msg.length;i++) {
                    this.isclick1.push(false)
                }
            }
            this.con++
        }
    }
})
Vue.component("son2", {
    template: "#son2",
    props: {
        title: '',
        isclick: {
            default() { return [] }
        },
        text2: ''
    },
    data() {
        return {
            mag: "",
            meg: [],
            click:[]
        }
    },
    watch: {
        text2() {
            this.meg = []
            this.isclick = Array.from(this.isclick)
            this.$emit("passon", this.isclick)
            if (this.text2 == "All") {
                this.meg = this.title
            } else if (this.text2 == "Active") {
                this.isclick.forEach((item, index) => {
                    if (item != true) {
                        this.meg.push(this.title[index])
                    }
                })
                return this.meg
            } else {
                this.isclick.forEach((item, index) => {
                    if (item == true) {
                        this.meg.push(this.title[index])
                    }
                })
                return this.meg
            }
        },
        title() {
            this.meg = this.title
        },
        isclick() {
            this.click=this.isclick
            this.$forceUpdate()
        }
    }
    , methods: {
        show1(index) {
            // 给i标签添加x
            this.$refs[`mysc${index}`][0].innerHTML = "×"
        },
        hide1(index) {
            this.$refs[`mysc${index}`][0].innerHTML = ""
        },
        clickSpon(ind) {
            this.click = Array.from(this.click)
            this.click[ind] = !this.click[ind]
            this.$emit("passon", this.click)
        },
        iMove(ind) {
            this.title.forEach((item, index) => {
                if (ind == index) {
                    this.title.splice(item, 1)
                }
            })
        },
        changeT(index, e) {
            this.mag = e.target.value
            this.title.splice(index, 1, this.mag)
        }
    },

})
Vue.component("son3", {
    template: "#son3",
    props:['titleson3'],
    data() {
        return {
            ts3: 0,
            text: ["All", "Active", "Completed"],
            tcss: [true, false, false],
            snn3:""
        }
    },
    watch:{
        titleson3(){
            this.snn3=this.titleson3
        }
    },
    computed: {
        sus() {
            this.ts3 = this.snn3.length
            return this.ts3
        }
    },
    methods: {
        stcss(ind) {
            for (var i = 0;i < this.text.length;i++) {
                this.tcss = []
                this.tcss[i] = false
                for (var j = 0;j < this.text.length;j++) {
                    if (j == ind) {
                        this.$emit("possda", this.text[j])
                        this.tcss[j] = true
                    } else {
                        this.tcss[j] = false
                    }
                }
            }
        }
    }

})
let app = new Vue({
    el: '#app',
    data: {
        titleMsg:"",
        isclick1: Array,
        text1: "",
    },
    methods: {
        pass1(msg) {
            this.titleMsg = msg
        },
        pass2(iscl) {
            this.isclick1 = iscl
        },
        pass3(isc) {
            this.text1 = isc
        },
        pass4(is) {
            this.isclick1 = is
        }
    }
})