(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],{17:function(e){e.exports=JSON.parse('[{"id":1,"link":"1.png"},{"id":2,"link":"2.png"},{"id":3,"link":"3.png"},{"id":4,"link":"4.png"},{"id":5,"link":"5.png"},{"id":6,"link":"6.png"},{"id":7,"link":"7.png"},{"id":8,"link":"8.png"},{"id":9,"link":"9.png"},{"id":10,"link":"10.png"},{"id":11,"link":"11.png"},{"id":12,"link":"12.png"}]')},28:function(e,t,n){e.exports=n(42)},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),s=n.n(r),o=(n(33),n(8)),i=n(9),l=n(12),u=n(10),m=n(13),d=(n(34),n(25)),g=(n(35),n(18)),k=n(20),h=n(21),p=n(22),f=n(17),b=(n(36),function(e){var t="h5";return"You guessed incorrectly!"===e.userMessage&&(t+=" text-danger"),c.a.createElement(g.a,{fluid:!0,className:"m-0 text-center p-2"},c.a.createElement("h2",{className:"mt-2 font text-uppercase font-weight-bold instructions"},"Clicky Game!"),c.a.createElement("p",{className:"text-dark"},"Click on an image to earn points, but don't click on any more than once!"),c.a.createElement("h5",{className:t},e.userMessage)," ",c.a.createElement("h6",null,"Score: ",e.userScore||0," | Top Score: ",e.userTopScore||0)," ")});function y(e){return c.a.createElement(p.a,{src:"images/"+e.link,thumbnail:!0,className:"m-1 m-md-2 m-lg-3",id:e.id,onClick:function(){return e.handleCount(e.id)}})}var E=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={count:0,score:0,images:f,beenClicked:[],message:"Click an image to begin!",shake:!1},n.handleCount=function(e){if(n.state.shake)return!1;var t=Object(d.a)(n.state.beenClicked);-1===t.indexOf(e)?(t.push(e),n.state.count<n.state.score?n.setState({count:n.state.count+1,beenClicked:t,message:"You guessed correctly!"}):n.setState({count:n.state.count+1,beenClicked:t,score:n.state.score+1,message:"You guessed correctly!"})):(console.log("game over"),n.setState({count:0,beenClicked:[],score:n.state.score,message:"You guessed incorrectly!",shake:!0}))},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t="d-flex justify-content-center text-center";return this.state.shake?(t+=" shake",setTimeout((function(){return e.setState({shake:!1})}),1e3)):t="d-flex justify-content-center text-center noshake",c.a.createElement("div",{className:"mb-5 pb-5 pb-md-0"},c.a.createElement(b,{userScore:this.state.count,userTopScore:this.state.score,userMessage:this.state.message}),c.a.createElement(g.a,null,c.a.createElement(k.a,{className:t}," ",c.a.createElement(h.a,{xs:12,md:8},this.state.images.sort((function(){return Math.random()-.5})).map((function(t){return c.a.createElement(y,{key:t.id,link:t.link,id:t.id,handleCount:e.handleCount})}))))))}}]),t}(c.a.Component),v=(n(37),n(44)),C=function(){return c.a.createElement(v.a,{fixed:"bottom justify-content-center bg-black"},c.a.createElement("p",{className:"small text-center text-light m-md-0 p-2"},"Made for University of Arizona Coding Bootcamp, Week-19, January 2020"))},x=(n(41),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(E,null),c.a.createElement(C,null))}}]),t}(c.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.07484a8d.chunk.js.map