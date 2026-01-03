import React from "react";

export default function Character() {
  return (
    <>
      <style>{`
        :root{
    --floor-color: rgba(255,255,255,0.7);
    --border-color:#111;
    --skin-color:#f6c09b;
    --border-var:1px solid #111;    
    --cap-bright-color:#ed4742;
    --cap-dark-color:#cf3d37;
    --purple-ribbon:#92418e;
    --cap-dark-yellow: #f6a63b;
    --cap-bright-yellow:#fbc93c;
    --cap-hair-color:#05243a;
    --skin-dark-color:#ed927d;
    --skin-bright-color:#f7bf9a;
    --eye-color:#052438;
    --eye-patch-color:#ed686a;
    --hair-color:#05243a;
    --shirt-bright-color:#3a6cb5;
    --shirt-dark-color:#293a95;
    --coat-dark-color:#672c65;
    --coat-bright-color:#92418e;
    --shoe-color:#05243a;
    --button-color:#fff;
    --grass-green1: #63c74d;
    --grass-green2: #4ea03c;
    --grass-green3: #9ada7a;
}
*
{
}
body
{
    background:#f0f0f0;
    font-family: 'Roboto',sans-serif;    
}
.credits
{
position: absolute;
left:60%;
top:80%;
padding-top:20px;
color:#333;
text-align:center;
}
#heading
{
    text-align: center;
    font-size: 1.5em;
    font-weight: 100;
    color:#333;
    padding: 10px;
}
.color-container
{
   position:absolute;
   left:5%;
   top:0%;
   height:100%;
   width:500px;
   overflow: auto;
   box-shadow:0px 2px 30px rgba(0,0,0,0.2);
  z-index:100;
}
.colors
{
    display: table;
    height:100px;
}
.color{
   
    display: table-row;
    height:50px;
}
.color__name,.color__code,.color__palette
{
    display: table-cell;
    padding:10px;
    vertical-align: middle;
}
.color__palette input[type=color]
{
    outline: none;
    width:25px;
    height:25px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
}
#color__code{
    padding: 20px;
    border:none;
    background: #f0f0f0;
}
.centered
{
    position:absolute;
    left:70%;
    top:50%;
    transform:translate(-50%,-50%);
    -webkit-transform:translate(-50%,-50%);
    -moz-transform:translate(-50%,-50%);
    -ms-transform:translate(-50%,-50%);
    -o-transform:translate(-50%,-50%);
}
.centered-horizontal
{
    position: absolute;
    left:50%;
    transform: translate(-50%,0%);
    -webkit-transform: translate(-50%,0%);
    -moz-transform: translate(-50%,0%);
    -ms-transform: translate(-50%,0%);
    -o-transform: translate(-50%,0%);
}
.container
{
    position:absolute;
    width:600px;
    height:400px;
}
.floor
{
    top:84%;
    width:200px;
    height:5px;
    background: var(--floor-color,#cbdde7);
    border-radius: 2px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    -ms-border-radius: 2px;
    -o-border-radius: 2px;
    position: absolute;
    left:50%;
    transform: translate(-50%,0%);
    z-index: 1;
}

.grass-group {
    position: absolute;
    top: 82%;
    width: 300px;
    height: 30px;
    left: 50%;
    transform: translate(-50%,0%);
    display: flex;
    justify-content: space-between;
    pointer-events: none;
    z-index: 2;
}
.grass-blade {
    position: absolute;
    bottom: 0;
    width: 6px;
    border-radius: 4px 4px 12px 12px;
}
.grass-blade1 {
    height: 18px; left: 20px;
    background: linear-gradient(160deg, var(--grass-green2) 70%, var(--grass-green1) 100%);
    transform: rotate(-10deg) scaleX(1.1);
    box-shadow: 2px 0 4px 0 rgba(76,175,80,0.2);
}
.grass-blade2 {
    height: 13px; left: 33px;
    background: linear-gradient(120deg, var(--grass-green3), var(--grass-green2) 85%);
    transform: rotate(13deg) scaleX(.85);
}
.grass-blade3 {
    height: 20px; left: 44px;
    background: linear-gradient(170deg, var(--grass-green1) 40%, var(--grass-green3) 100%);
    transform: rotate(-5deg) scaleX(0.87);
}
.grass-blade4 {
    height: 24px; left: 180px;
    background: linear-gradient(170deg, var(--grass-green2) 60%, var(--grass-green1) 100%);
    transform: rotate(10deg) scaleX(1.12);
}
.grass-blade5 {
    height: 15px; left: 196px;
    background: linear-gradient(150deg, var(--grass-green3), var(--grass-green1) 85%);
    transform: rotate(-7deg) scaleX(.75);
}
.grass-blade6 {
    height: 17px; left: 206px;
    background: linear-gradient(180deg, var(--grass-green1) 70%, var(--grass-green3) 100%);
    transform: rotate(-14deg) scaleX(1.03);
}
.grass-blade7 {
    height: 10px; left: 60px;
    background: linear-gradient(170deg, var(--grass-green2) 30%, var(--grass-green3) 100%);
    transform: rotate(7deg) scaleX(0.5);
}
.grass-blade8 {
    height: 13px; left: 75px;
    background: linear-gradient(120deg, var(--grass-green1) 50%, var(--grass-green2) 100%);
    transform: rotate(-12deg) scaleX(0.95);
}
.grass-blade9 {
    height: 17px; left: 93px;
    background: linear-gradient(180deg, var(--grass-green3) 60%, var(--grass-green1) 100%);
    transform: rotate(2deg) scaleX(0.7);
}
.grass-blade10 {
    height: 25px; left: 225px;
    background: linear-gradient(140deg, var(--grass-green2) 60%, var(--grass-green3) 100%);
    transform: rotate(-4deg) scaleX(1.06);
}
.grass-blade11 {
    height: 14px; left: 247px;
    background: linear-gradient(175deg, var(--grass-green1) 80%, var(--grass-green3) 100%);
    transform: rotate(9deg) scaleX(0.77);
}
.grass-blade12 {
    height: 21px; left: 265px;
    background: linear-gradient(155deg, var(--grass-green2) 60%, var(--grass-green1) 100%);
    transform: rotate(-15deg) scaleX(0.93);
}

.character
{
    top:10%;
    width:150px;
    height:65%;
    z-index: 10;
}
.character__head
{
    top:0%;
    width:100%;
    height:60%;
    z-index:5;
}
.character__body
{
    position: absolute;
    top:60%;
    width:70%;
    height:50%;
    left:60%;
    z-index:1;
}
.cap
{
    position:absolute;
    top:0%;
    left:50%;
    width:100%;
    height: 60%;
    transform:translate(-50%,0%);
    -webkit-transform:translate(-50%,0%);
    -moz-transform:translate(-50%,0%);
    -ms-transform:translate(-50%,0%);
    -o-transform:translate(-50%,0%);
    z-index: 10;
    animation: cap-bob 10s ease-in-out infinite alternate;
}

@keyframes cap-bob {
    0% {
        transform: translate(-50%, 0%) rotate(-3deg) scale(1);
    }
    35% {
        transform: translate(-50%, -2%) rotate(2deg) scale(1.04);
    }
    60% {
        transform: translate(-50%, 2%) rotate(-2deg) scale(0.98);
    }
    100% {
        transform: translate(-50%, 0%) rotate(2deg) scale(1);
    }
}

.cap__top
{
    position: absolute;
    top:0%;
    left:0%;
    height:80%;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    animation: cap-top-shimmer 2.8s linear infinite alternate;
}

@keyframes cap-top-shimmer {
    0% {
        filter: brightness(1) drop-shadow(0 0 0px #fff0);
    }
    60% {
        filter: brightness(1.05) drop-shadow(0 2px 6px #fff3);
    }
    100% {
        filter: brightness(1) drop-shadow(0 0 0px #fff0);
    }
}
.top--dark
{
    width:100%;
    background: var(--cap-dark-color,#cf3d37);

}
.top--bright
{
    width:60%;
    background: var(--cap-bright-color,#ed4742);
}
.blueRibbon
{
    position:absolute;
    left:70%;
    top:70%;
    width:30px;
    height:10px;
    background:var(--purple-ribbon,#92418e);
    border-radius: 2px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    -ms-border-radius: 2px;
    -o-border-radius: 2px;
}
.cap__hair
{
    position:absolute;
    left:50%;
    top:60%;
    transform:translate(-50%,-50%);
    -webkit-transform:translate(-50%,-50%);
    -moz-transform:translate(-50%,-50%);
    -ms-transform:translate(-50%,-50%);
    -o-transform:translate(-50%,-50%);
    width:40px;
    height:25px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background:var(--cap-hair-color);
}
.cap__yellow
{
    position:absolute;
    left:50%;
    top:80%;
    height:10%;
    border-radius:2px;
    -webkit-border-radius:2px;
    -moz-border-radius:2px;
    -ms-border-radius:2px;
    -o-border-radius:2px;
}
.yellow--dark
{
    background: var(--cap-dark-yellow);
    width:110%;
    transform:translate(-50%,0%);
    -webkit-transform:translate(-50%,0%);
    -moz-transform:translate(-50%,0%);
    -ms-transform:translate(-50%,0%);
    -o-transform:translate(-50%,0%);
}
.yellow--bright
{
    left:-5%;
    background: var(--cap-bright-yellow);
    width:65%;
}
.cap__bottom
{
    position: absolute;
    top:90%;
    height:20%;
}
.bottom--bright{
    left:-10%;
    width:80%;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    background: var(--cap-bright-color,#ed4742);
}
.bottom--dark
{
    left:-5%;
    width:150%;
    background: var(--cap-dark-color,#cf3d37); 
}
.character__face
{
    position: absolute;
    top:60%;
    left:5%;
    height:50%;
    background: var(--skin-dark-color);
    width:90%;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    z-index: 5;
}
.character__face--light
{
    position:absolute;
    left:0%;
    top:20%;
    height:50%;
    width:75%;
    background:var(--skin-bright-color);
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    z-index: 5;
}

.eye--left,
.eye--right {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    -ms-border-radius: 100%;
    -o-border-radius: 100%;
    background: var(--eye-color);
    top: 50%;
    transform: translate(0%, -50%);
    -webkit-transform: translate(0%, -50%);
    -moz-transform: translate(0%, -50%);
    -ms-transform: translate(0%, -50%);
    -o-transform: translate(0%, -50%);
    animation: eye-blink 4s infinite;
}

@keyframes eye-blink {
    0%, 92% {
        height: 10px;
    }
    94% {
        height: 2px;
    }
    96% {
        height: 10px;
    }
    100% {
        height: 10px;
    }
}

.eye--left {
    left: 15%;
    animation-delay: 0s;
}
.eye--right{
    left: 60%;
    animation-delay: 0.15s;
}

.character__ear
{
    position: absolute;
    width:20px;
    height:20px;
    top:75%;
    background: var(--skin-bright-color);
    z-index:10;
}
.ear--left{
    left:-11%;
    width:13px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background: var(--skin-dark-color);
}
.ear--right
{
    left:90%;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
}
.character__hair
{
    position: absolute;
    top:60%;
    width:50px;
    height:45%;
    background: var(--hair-color);
    z-index:3;
}
.hair--right
{
    left:75%;
    z-index:6;
}
.hair--left
{
    left:-3%;
}
.character__shirt
{
    width:90%;
    height:70%;
    background: var(--shirt-dark-color);
    border-radius:10px;
    -webkit-border-radius:10px;
    -moz-border-radius:10px;
    -ms-border-radius:10px;
    -o-border-radius:10px;
}
.character__shirt--bright
{
    position: absolute;
    top:30%;
    left:0%;
    width:70%;
    height:20px;
    background: var(--shirt-bright-color);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}
.character__coat
{
    top:45%;
    width:100%;
    height:30%;
    background:var(--coat-bright-color);
   border-bottom-left-radius: 10px;
   border-bottom-right-radius: 10px;
}
.character__coat--belt
{
    top:-10%;
    height:10px;
    width:105%;
    background: var(--coat-bright-color);
    border-radius:2px;
    -webkit-border-radius:2px;
    -moz-border-radius:2px;
    -ms-border-radius:2px;
    -o-border-radius:2px;
    box-shadow: 0px 5px 0px var(--coat-dark-color);
}
.belt__button
{
    width: 8px;
    height: 8px;
    border-radius:100%;
    -webkit-border-radius:100%;
    -moz-border-radius:100%;
    -ms-border-radius:100%;
    -o-border-radius:100%;
    background:var(--button-color,#fff);
    
}
.button--right
{
    left:55%;
}
.button--left
{
    left:25%;
}
.belt__button::before{
    position: absolute;
    content:'';
    height:400%;
    top:0%;
    width:10px;
    transform: translate(0%,-100%);
    -webkit-transform: translate(0%,-100%);
    -moz-transform: translate(0%,-100%);
    -ms-transform: translate(0%,-100%);
    -o-transform: translate(0%,-100%);
    background: var(--coat-bright-color);
}
.character__hand
{
    position:absolute;
    top:15%;
    height:80%;
    width:50px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
.character__hand::after{
    position: absolute;
    content:'';
    top:70%;
    left:-10%;
    width:90%;
    height:10px;
    background:inherit;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
}
.hand--right
{
    left:73%;
    z-index: 20;
    background: var(--skin-bright-color);
    transform-origin: 25% 15%;
    animation: hand-wave-right 40s cubic-bezier(.45,0,.65,1.1) infinite alternate;
}
@keyframes hand-wave-right {
    0% { transform: rotate(-2deg); }
    10% { transform: rotate(-4deg) translateY(-5px);}
    30% { transform: rotate(9deg) translateY(-8px);}
    55% { transform: rotate(-3deg) translateY(2px);}
    75% { transform: rotate(8deg) translateY(-5px);}
    100% { transform: rotate(-2deg);}
}

.hand--left
{
    left:-13%;
    background: var(--skin-dark-color);
    transform-origin: 85% 15%;
    animation: hand-sway-left 40s cubic-bezier(.48,0,.68,1.1) infinite alternate;
}
@keyframes hand-sway-left {
    0%   { transform: rotate(2deg);}
    32%  { transform: rotate(-7deg) translateY(-4px);}
    50%  { transform: rotate(8deg) translateY(0);}
    72%  { transform: rotate(-5deg) translateY(2px);}
    100% { transform: rotate(2deg);}
}

.hand--right::before{
    position:absolute;
    content: '';
    left:20%;
    top:40%;
    border-radius:10px;
    -webkit-border-radius:10px;
    -moz-border-radius:10px;
    -ms-border-radius:10px;
    -o-border-radius:10px;
    width:60%;
    height:10px;
    background: var(--skin-dark-color);
}
.character__leg
{
    position:absolute;
    top:65%;
    height:45%;
    width:30px;
    background: var(--coat-bright-color);
    transform: translate(-50%,0%);
    -webkit-transform: translate(-50%,0%);
    -moz-transform: translate(-50%,0%);
    -ms-transform: translate(-50%,0%);
    -o-transform: translate(-50%,0%);
}
.leg--left
{
    left:30%;
}
.leg--right
{
    left:70%;
}
.character__leg::before{
    position: absolute;
    content: '';
    left:-10%;
    top:65%;
    width:100%;
    height:15px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    background: var(--shoe-color);
}
.leg--left::after{
    position: absolute;
    content:'';
    left:0%;
    top:20%;
    height: 20%;
    width:100%;
    background: var(--coat-dark-color);
}
      `}</style>

      <div className="container centered">
        <div className="floor centered-horizontal"></div>
        <div className="grass-group">
          <div className="grass-blade grass-blade1"></div>
          <div className="grass-blade grass-blade2"></div>
          <div className="grass-blade grass-blade3"></div>
          <div className="grass-blade grass-blade7"></div>
          <div className="grass-blade grass-blade8"></div>
          <div className="grass-blade grass-blade9"></div>
          <div className="grass-blade grass-blade4"></div>
          <div className="grass-blade grass-blade5"></div>
          <div className="grass-blade grass-blade6"></div>
          <div className="grass-blade grass-blade10"></div>
          <div className="grass-blade grass-blade11"></div>
          <div className="grass-blade grass-blade12"></div>
        </div>
        <div className="character centered-horizontal">
          <div className="character__head centered-horizontal">
            <div className="cap">
              <div className="top--dark cap__top"></div>
              <div className="top--bright cap__top">
                <div className="cap__hair"></div>
              </div>
              <div className="cap__yellow yellow--dark"></div>
              <div className="cap__yellow yellow--bright"></div>
              <div className="bottom--dark cap__bottom"></div>
              <div className="bottom--bright cap__bottom"></div>
            </div>
            <div className="character__hair hair--left"></div>
            <div className="character__hair hair--right"></div>
            <div className="character__face">
              <div className="character__face--light">
                <div className="character__eye eye--left"></div>
                <div className="character__eye eye--right"></div>
              </div>
            </div>
            <div className="character__ear ear--left"></div>
            <div className="character__ear ear--right"></div>
          </div>
          <div className="character__body centered-horizontal">
            <div className="character__hand hand--left"></div>
            <div className="character__hand hand--right"></div>
            <div className="character__shirt centered-horizontal">
              <div className="character__shirt--bright"></div>
            </div>
            <div className="character__coat centered-horizontal">
              <div className="character__coat--belt centered-horizontal">
                <div className="belt__button button--left centered-horizontal"></div>
                <div className="belt__button button--right centered-horizontal"></div>
              </div>
            </div>
            <div className="character__leg leg--left"></div>
            <div className="character__leg leg--right"></div>
          </div>
        </div>
      </div>
    </>
  );
}
