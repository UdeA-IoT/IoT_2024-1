"use strict";(self.webpackChunkio_t_2024_1=self.webpackChunkio_t_2024_1||[]).push([[2758],{3206:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>c,contentTitle:()=>t,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var o=a(5893),n=a(1151);const i={},t="Proximidad y contacto",r={id:"sensores-actuadores/sensores/tipos/distancia",title:"Proximidad y contacto",description:"En esta secci\xf3n se trarar\xe1n los sensores de contacto y proximidad:",source:"@site/docs/sensores-actuadores/sensores/tipos/distancia.md",sourceDirName:"sensores-actuadores/sensores/tipos",slug:"/sensores-actuadores/sensores/tipos/distancia",permalink:"/IoT_2024-1/docs/sensores-actuadores/sensores/tipos/distancia",draft:!1,unlisted:!1,editUrl:"https://github.com/UdeA-IoT/IoT_2024-1/tree/main/packages/create-docusaurus/templates/shared/docs/sensores-actuadores/sensores/tipos/distancia.md",tags:[],version:"current",frontMatter:{},sidebar:"teoriaSidebar",previous:{title:"Temperatura",permalink:"/IoT_2024-1/docs/sensores-actuadores/sensores/tipos/temperatura"},next:{title:"Movimiento, presi\xf3n y fuerza",permalink:"/IoT_2024-1/docs/sensores-actuadores/sensores/tipos/movimiento"}},c={},d=[{value:"Contacto",id:"contacto",level:2},{value:"Touch Screens",id:"touch-screens",level:3},{value:"Sensor capacitivo",id:"sensor-capacitivo",level:3},{value:"Proximidad",id:"proximidad",level:2},{value:"Sensor de ultrasonido",id:"sensor-de-ultrasonido",level:3},{value:"Sensor infrarrojo",id:"sensor-infrarrojo",level:3}];function l(e){const s={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"proximidad-y-contacto",children:"Proximidad y contacto"}),"\n",(0,o.jsx)(s.p,{children:"En esta secci\xf3n se trarar\xe1n los sensores de contacto y proximidad:"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"sensores_distancia",src:a(9283).Z+"",width:"894",height:"410"})}),"\n",(0,o.jsx)(s.h2,{id:"contacto",children:"Contacto"}),"\n",(0,o.jsx)(s.h3,{id:"touch-screens",children:"Touch Screens"}),"\n",(0,o.jsxs)(s.p,{children:["Los Touch Screens (pantallas tactiles) son principalmente empleados en celulares y tablets como dispositivo de entrada. Existen varios tipos de Touch Screens (",(0,o.jsx)(s.a,{href:"https://tru-vumonitors.com/touch-screen-basics/",children:"link"}),") siendo los de tipo resistivo, los mas comunes (",(0,o.jsx)(s.a,{href:"https://www.dush.co.jp/english/museum/touchscreens/technologies/Resistive.asp",children:"link"}),"). Un touch Screen esta compuesto por dos laminas transparentes cubiertas por una superficie conductora y separadas por medio de unos unos puntos de aislamiento uniformemente espaciados. Como la superficie exterior es flexible, cuando esta es precionada esta hace contacto con la superficie interior lo cual puede ser empleado para determinar las coordenada (X,Y) en las que se realizo el toque. La siguiente figura ilustra este tipo de componente."]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"touch_screen_resistivo",src:a(5875).Z+"",width:"850",height:"455"})}),"\n",(0,o.jsx)(s.p,{children:"La siguiente figura muestre un Touch Screen de 4 wires:"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"touch_creen_4wires",src:a(7648).Z+"",width:"953",height:"294"})}),"\n",(0,o.jsx)(s.p,{children:"Para determinar la posici\xf3n X de un toque, A se fija a 0 V y B se pone a 5 V lo cual, establece una diferencia de potencial a lo largo lamina superior. Asi mismo, en el toque, el voltaje medido en C, o para el caso D, ser\xe1 proporcional a la posici\xf3n X cuyas coordenadas se pueden obtener mediante un conversor analogo a digital."}),"\n",(0,o.jsx)(s.p,{children:"Tal y como se muestra en la siguiente figura, la capa conductora act\xfaa como un potenci\xf3metro con C como control deslizante. Si el dispositivo que mide el voltaje en C tiene una impedancia de entrada muy alta, entonces se puede ignorar la resistencia de la pista desde la superficie hasta el terminal C. Como la mayor\xeda de los microcontroladores tiene un conversor anal\xf3go a digital con una alta resistencia de entrada (normalmente varios M\u03a9); entonces, el voltaje en C estar\xe1 entre 0 y 5 V en proporci\xf3n directa a la distancia de A del toque. La siguiente figura muestra esto:"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"posicion_x",src:a(9547).Z+"",width:"354",height:"178"})}),"\n",(0,o.jsx)(s.admonition,{type:"tip",children:(0,o.jsxs)(s.p,{children:["En la pagina ",(0,o.jsx)(s.strong,{children:"Resistive Touch screen"})," (",(0,o.jsx)(s.a,{href:"https://javalab.org/en/resistive_touch_screen_en/",children:"link"}),") se muestra una animaci\xf3n del proceso resultante."]})}),"\n",(0,o.jsxs)(s.p,{children:["Para obtener la posici\xf3n Y, lo que se se hace es establecer el voltaje de C a 0 V, el de D a 5 V y se mide el voltaje en A o B. Todo este procesamiento es llevado a cabo mediante un chip controlador de prop\xf3sito especial o un microcontrolador. La siguiente figura (tomada de ",(0,o.jsx)(s.strong,{children:"4-Wire Resistive Touch Screen Interfacing with ESP32"})," (",(0,o.jsx)(s.a,{href:"https://www.electronicwings.com/esp32/4-wire-resistive-touch-screen-interfacing-with-esp32",children:"link"}),")) resume el proceso de obtenci\xf3n de coordenadas:"]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"get_posiciones",src:a(4712).Z+"",width:"612",height:"267"})}),"\n",(0,o.jsxs)(s.p,{children:["La siguiente figura muestra tomada de la pagina ",(0,o.jsx)(s.strong,{children:"4-Wire Resistive Touch Screen Interfacing with ESP32"})," (",(0,o.jsx)(s.a,{href:"https://www.electronicwings.com/esp32/4-wire-resistive-touch-screen-interfacing-with-esp32",children:"link"}),"), un caso de uso en el que se conecta un Touch Screen a un ESP32:"]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"conexion",src:a(5576).Z+"",width:"1100",height:"508"})}),"\n",(0,o.jsx)(s.h3,{id:"sensor-capacitivo",children:"Sensor capacitivo"}),"\n",(0,o.jsx)(s.p,{children:"En construcci\xf3n..."}),"\n",(0,o.jsx)(s.h2,{id:"proximidad",children:"Proximidad"}),"\n",(0,o.jsx)(s.h3,{id:"sensor-de-ultrasonido",children:"Sensor de ultrasonido"}),"\n",(0,o.jsx)(s.p,{children:"En construcci\xf3n..."}),"\n",(0,o.jsx)(s.h3,{id:"sensor-infrarrojo",children:"Sensor infrarrojo"}),"\n",(0,o.jsx)(s.p,{children:"En construcci\xf3n..."})]})}function u(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},9283:(e,s,a)=>{a.d(s,{Z:()=>o});const o=a.p+"assets/images/sensores_distancia-da4973ac846f0715fbbbcbecd17f52c7.png"},5576:(e,s,a)=>{a.d(s,{Z:()=>o});const o=a.p+"assets/images/conexion-d057b40d624cb298fcebf26fa1d11bf8.png"},4712:(e,s,a)=>{a.d(s,{Z:()=>o});const o=a.p+"assets/images/get_posiciones-97c66338ae0fc0b936ab75c0c003fde8.png"},9547:(e,s,a)=>{a.d(s,{Z:()=>o});const o="data:image/png;base64,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"},7648:(e,s,a)=>{a.d(s,{Z:()=>o});const o=a.p+"assets/images/touch_creen_4wires-8c1d8c3845e729808b38960657bc7133.png"},5875:(e,s,a)=>{a.d(s,{Z:()=>o});const o=a.p+"assets/images/touch_screen_resistivo-9a561a4ebdc3b183595427ab78e3c04f.jpg"},1151:(e,s,a)=>{a.d(s,{Z:()=>r,a:()=>t});var o=a(7294);const n={},i=o.createContext(n);function t(e){const s=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),o.createElement(i.Provider,{value:s},e.children)}}}]);