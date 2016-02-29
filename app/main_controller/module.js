angular.module('main_controller', []);


angular.module('main_controller')
  .controller('Main_ctrl', Main_ctrl);



function Main_ctrl($scope) {
  this.message = 'Vinson Says Hello.';

  this.tab=0;
  this.is_selected=function(tab){
    return tab ==this.tab;
  };
  this.check_tab=function(){
    return this.tab;
  };
  this.select_tab= function(set_tab){

    var string='{';
   for (var prop in this.players[set_tab]){
     if (prop.indexOf('$')==-1){
       string += prop +':';
       string +='"'+ this.players[set_tab][prop]+'"';
       string +=',';
     }

   }
    string = string.substring(0,string.length-1);
    string +='}';
    console.log(string);
    this.tab=set_tab;
  };
  this.isSelected=function(check_tab){
    return this.tab == check_tab;
  };
  this.change_style=function(style,value,index){
    this.players[index].style= value;
    this.logger=function(thing){
      console.log(thing);
    }
  };
  this.plus_one=function(){
      this.players.push(
          {name:"unnamed",color:"none",x:0,x_offset:-70,y:10,width:"100",z_index:"2",pic:""}
      )
  };


  this.players = [
    {name:"leo",color:"blue",x:"30",x_offset:-70,y:"1",width:"110",z_index:"2",pic:"http://tmnt.andrewnorell.com/images/leo.png"},
    {name:"raph",color:"red","x":"50",x_offset:0,"y":"30",z_index:"1",width:"60",pic:"http://i.imgur.com/5epiiCS.png"},
    {name:"mikey",color:"orange","x":"60",x_offset:0,"y":"20",z_index:3,width:"100",pic:"http://i.imgur.com/QeCpLA1.png"},
    {name:"donny",color:"purple","x":"0",x_offset:-50,"y":"2",z_index:"1",width:"80",pic:"http://porchpodcast.com/home/wp-content/uploads/2014/08/donnie.png"},
    {name:"background1",color:"black","x":0,"y":"-40",z_index:0,width:"200",pic:"http://2.bp.blogspot.com/--F3CMyWlk98/UreL2ia0bxI/AAAAAAAABU4/k-KwxGIlnlY/s1600/vitacity2.png"}
  ];
}