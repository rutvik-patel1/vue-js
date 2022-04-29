const App = Vue.createApp({
    data(){
        return{
            colorVal : 'white',
            textColor : 'black',
            colors : ['white','blue','red','green','yellow'],
            allLogs : [
                {
                    date : '2022-02-01',
                    day : 'Monday',
                    section : 1,
                    gitRepo : 'https://github.com/1',
                    pregress: 80,
                    topics : ['overvieew' , 'lifecycle' , 'events']
                },
                {
                    date : '2022-02-02',
                    day : 'Tuesday',
                    section : 2,
                    gitRepo : 'https://github.com/2',
                    pregress: 40,
                    topics : ['mehtod','computed','events','watchs','propes','styling']
                },
                {
                    date : '2022-02-03',
                    day : 'Wednesday',
                    section : 3,
                    gitRepo : 'https://github.com/3',
                    pregress: 10,
                    topics : ['overview','lifecycle','events','watchs','propes','styling','props']
                },
            ]
        }
    },
    methods: {
        
        updateColor(event){
            let color = event.target.value
            if(color == 'red' || color == 'green' || color == 'blue'){
                this.textColor = 'white';
            }
            else{
                this.textColor = 'black';
            }
            this.colorVal = color; 
            console.log(this.colorVal)

        }
        
    },
    computed:{
       
       colspanValue(){
        let l = this.allLogs
        let maxColspan=0;      
        l.forEach((obj)=>{
            if(obj.topics.length>maxColspan){
                maxColspan=obj.topics.length
            }
        })   
        return maxColspan
       }
       
       
    }
});

App.mount('#app')