(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,image:"https://freepngimg.com/thumb/calvin_and_hobbes/32299-9-calvin-and-hobbes-photos.png",name:"picture",selected:!1},{id:2,image:"https://freepngimg.com/thumb/calvin_and_hobbes/31830-8-calvin-and-hobbes-transparent-background.png",name:"picture",selected:!1},{id:3,image:"http://pngriver.com/wp-content/uploads/2018/04/Download-Calvin-And-Hobbes-PNG-Image.png",name:"picture",selected:!1},{id:4,image:"http://www.pngmart.com/files/4/Calvin-And-Hobbes-PNG-Free-Download.png",name:"picture",selected:!1},{id:5,image:"http://www.pngall.com/wp-content/uploads/2016/03/Mickey-Mouse-PNG.png",name:"mickey",selected:!1},{id:6,image:"http://pngimg.com/uploads/donald_duck/donald_duck_PNG2.png",name:"donald",selected:!1},{id:7,image:"https://s3.amazonaws.com/peoplepng/wp-content/uploads/2018/12/10004809/Disney-Pluto-Free-PNG-Image.png",name:"goofy",selected:!1},{id:8,image:"https://www.freepngimg.com/thumb/cartoon/9-2-cartoon-png.png",name:"simba",selected:!1},{id:9,image:"http://pngimg.com/uploads/kim_jong_un/kim_jong_un_PNG16.png",name:"kim",selected:!1},{id:10,image:"https://i.pinimg.com/originals/d8/9b/3c/d89b3cbe96d8656ccac71ac4cf18c8eb.png",name:"bill",selected:!1},{id:11,image:"http://pngimg.com/uploads/geaorge_bush/geaorge_bush_PNG18.png",name:"george",selected:!1},{id:12,image:"http://pluspng.com/img-png/download-happy-person-png-images-transparent-gallery-advertisement-275.png",name:"generic guy",selected:!1}]},,,function(e,t,n){e.exports=n(19)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(2),o=n.n(i),r=n(3),s=n(4),m=n(7),l=n(5),d=n(8);n(15);var g=function(e){return c.a.createElement("div",{className:"row bg-primary text-center"},c.a.createElement("h1",{className:"col-md-6"},"Memory Game!"),e.children)};n(16);var p=function(e){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},e.children))};n(17);var u=function(e){return c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"row"},c.a.createElement("h2",{className:"col-md-6 score"},"Score = ",e.score),c.a.createElement("h2",{className:"col-md-6 score"},"High Score = ",e.high)))};n(18);var h=function(e){return c.a.createElement("div",{className:"card col-md-4",onClick:function(){return e.select(e.id)}},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.name,src:e.image})))},f=n(6),b=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={images:f,randomArray:[],picked:[],score:0,high:0},n.select=function(e){-1===n.state.picked.indexOf(e)?(n.state.picked.push(e),n.setState({score:n.state.score+1},n.check()),n.randomize()):n.restart()},n.check=function(){console.log(n.state.score),n.state.score+1>n.state.high&&n.setState({high:n.state.high+1})},n.randomize=function(){for(var e=[],t=n.state.images,a=t.length;a>0;a--){var c=Math.floor(Math.random()*a);e.push(t[c]),t=t.filter(function(t){return-1===e.indexOf(t)})}n.setState({randomArray:e})},n.restart=function(){n.setState({score:0,picked:[]}),n.randomize()},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.randomize()}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(g,null,c.a.createElement(u,{score:this.state.score,high:this.state.high})),c.a.createElement(p,null,console.log(this.state.randomArray),this.state.randomArray.map(function(t){return c.a.createElement(h,{select:e.select,id:t.id,key:t.id,image:t.image,name:t.name})})))}}]),t}(a.Component);o.a.render(c.a.createElement(b,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.16aa18c9.chunk.js.map