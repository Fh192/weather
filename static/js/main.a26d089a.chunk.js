(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],[,,,,function(e,t,a){e.exports={card:"Card_card__2hCH6",header:"Card_header__2Cevf",date:"Card_date__3j1d1",day:"Card_day__2AsVs",weekdayMonth:"Card_weekdayMonth__2Tnp7",main:"Card_main__1pzSe",title:"Card_title__ij0Ih",dayPart:"Card_dayPart__2n-Yp",tempWrap:"Card_tempWrap__2xX04",temp:"Card_temp__gvs4u",icon:"Card_icon__16oHL",condition:"Card_condition__1HnkT",unit:"Card_unit__2xIxR",pressure:"Card_pressure__2qwzn",humidity:"Card_humidity__mQls5",precipitation:"Card_precipitation__tqIBf",windchill:"Card_windchill__3YFNK"}},,,function(e,t,a){e.exports={currentWeather:"Current_currentWeather__3kuWR",rain:"Current_rain__2t_-r",snow:"Current_snow__QylHf",header:"Current_header__HovoY",col:"Current_col__36G8X",location:"Current_location__382tB",title:"Current_title__ELnKt",time:"Current_time__1WfaB",main:"Current_main__3-433",tempWrap:"Current_tempWrap__2VXh8",temp:"Current_temp__tqq0N",icon:"Current_icon__3ltnD",feelings:"Current_feelings__1oSyL",condition:"Current_condition__UyLom",feels:"Current_feels__29vqF",params:"Current_params__1hIVX",param:"Current_param__3j1Hz",hourlyWrap:"Current_hourlyWrap__235bj"}},,,,,function(e,t,a){e.exports={airQuality:"AirQuality_airQuality__3B6Q8",header:"AirQuality_header__3v81M",title:"AirQuality_title__35j0j",date:"AirQuality_date__3L_g8",main:"AirQuality_main__3a1JN",US_EPA:"AirQuality_US_EPA__27yf0",US_EPA_Index:"AirQuality_US_EPA_Index__2y9uu",US_EPA_Category:"AirQuality_US_EPA_Category__Pp5Tf",params:"AirQuality_params__21bnn",param:"AirQuality_param__1iEIN"}},function(e,t,a){e.exports={hourly:"Hourly_hourly__3aVUN",hour:"Hourly_hour__35qsD",time:"Hourly_time__NSA_g",icon:"Hourly_icon__1PrmW",temp:"Hourly_temp__3a9bZ",hours:"Hourly_hours__3U_zP",inner:"Hourly_inner__NPtp0",btn:"Hourly_btn__oOdc4",btnRight:"Hourly_btnRight__3YlVU",btnLeft:"Hourly_btnLeft__1c5E4"}},function(e,t,a){e.exports={astronomy:"Astronomy_astronomy__1bu40",header:"Astronomy_header__2HBjg",title:"Astronomy_title__3FnSs",date:"Astronomy_date__1ZLR3",main:"Astronomy_main__2Y-o7",sun:"Astronomy_sun__22Zt-",moon:"Astronomy_moon__1Iz_2",icon:"Astronomy_icon__1IIFM",info:"Astronomy_info__2wYIc"}},,,,,function(e,t,a){e.exports={searchCity:"SearchCity_searchCity__1VcFf",searchCityInput:"SearchCity_searchCityInput__3KEwZ",suggestions:"SearchCity_suggestions__3Feqm",noResults:"SearchCity_noResults__1AGFq"}},,,function(e,t,a){e.exports={main:"Main_main__IMAtv",row:"Main_row__3DdTt",col:"Main_col__o5m2g"}},,,function(e,t,a){e.exports={header:"Header_header__2HAIz",powered:"Header_powered__3x_ZY"}},function(e,t,a){e.exports={daily:"Daily_daily__3JJak",cards:"Daily_cards__2b2SF"}},,,function(e,t,a){e.exports={preloader:"Preloader_preloader__2oAtH"}},,,,,,function(e,t,a){},,,,,,,function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(20),i=a.n(n),r=(a(35),a(3)),o=a(6),d=o.e,l=(a(42),a(25)),j=a.n(l),u=a(15),h=a(19),m=a.n(h),b=a.p+"static/media/search.cddcf26e.svg",_=a(28),p=a(10),x="a343e898437e4e44bc3101151211811",O=Object(_.a)({reducerPath:"weatherAPI",baseQuery:Object(p.d)({baseUrl:"https://api.weatherapi.com/v1/"}),endpoints:function(e){return{getWeatherForecast:e.query({query:function(e){var t=e.coords,a=e.days,c=void 0===a?3:a;return"forecast.json?key=".concat(x,"&q=","".concat(t.lat," ").concat(t.lon),"&days=").concat(c,"&aqi=yes")}}),getAstronomyForecast:e.query({query:function(e){return"http://api.weatherapi.com/v1/astronomy.json?key=".concat(x,"&q=","".concat(e.lat," ").concat(e.lon))}}),search:e.query({query:function(e){return"search.json?key=".concat(x,"&q=").concat(e)}})}}}),v=O.useGetWeatherForecastQuery,y=O.useSearchQuery,f=O.useGetAstronomyForecastQuery;var g,N=a(29),w=a.n(N),C=a(0),S=function(e){var t=e.size,a=void 0===t?"50px":t,c=e.color,s=void 0===c?"#ECEEF2":c;return Object(C.jsx)("div",{className:w.a.preloader,children:Object(C.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 38 38",children:[Object(C.jsx)("defs",{children:Object(C.jsxs)("linearGradient",{x1:"8.042%",y1:"0%",x2:"65.682%",y2:"23.865%",id:s,children:[Object(C.jsx)("stop",{stopColor:s,stopOpacity:"0",offset:"0%"}),Object(C.jsx)("stop",{stopColor:s,stopOpacity:".631",offset:"63.146%"}),Object(C.jsx)("stop",{stopColor:s,offset:"100%"})]})}),Object(C.jsx)("g",{fill:"none",fillRule:"evenodd",children:Object(C.jsxs)("g",{transform:"translate(1 1)",children:[Object(C.jsx)("path",{d:"M36 18c0-9.94-8.06-18-18-18",id:"Oval-2",stroke:"url(#".concat(s,")"),strokeWidth:"2",children:Object(C.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})}),Object(C.jsx)("circle",{fill:"#fff",cx:"36",cy:"18",r:"1",children:Object(C.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})})]})})]})})},A=a(2),P={city:localStorage.getItem("city")||"moscow",coords:JSON.parse(localStorage.getItem("coords")||'{ "lat": 55.75, "lon": 37.62 }')},W=Object(A.d)({name:"weatherParams",initialState:P,reducers:{setCity:function(e,t){e.city=t.payload,localStorage.setItem("city",t.payload)},setCoords:function(e,t){e.coords=t.payload,localStorage.setItem("coords",JSON.stringify(t.payload))}}}),E=W.actions,I=E.setCity,k=E.setCoords,F=function(){var e=Object(o.d)(),t=Object(r.g)(),a=d((function(e){return e.weatherParams.coords})),s=a.lat,n=a.lon,i=Object(c.useRef)(null),l=Object(c.useState)(""),j=Object(u.a)(l,2),h=j[0],_=j[1],p=Object(c.useState)(!1),x=Object(u.a)(p,2),O=x[0],v=x[1],f=y(h.length>=3?h:"".concat(s," ").concat(n)),g=f.data,N=void 0===g?[]:g,w=f.isFetching;return Object(c.useEffect)((function(){N.length&&v(!0)}),[N]),Object(c.useEffect)((function(){h.length||v(!1)}),[h,O]),function(e,t){Object(c.useEffect)((function(){var a=function(a){var c=null===e||void 0===e?void 0:e.current;c&&!c.contains(a.target)&&t(a)};return document.addEventListener("mousedown",a),document.addEventListener("touchstart",a),function(){document.removeEventListener("mousedown",a),document.removeEventListener("touchstart",a)}}),[e,t])}(i,(function(){return v(!1)})),Object(C.jsxs)("div",{className:m.a.searchCity,ref:i,children:[Object(C.jsxs)("div",{className:m.a.searchCityInput,style:{borderRadius:"8px 8px ".concat(O?"0 0":"8px 8px")},children:[Object(C.jsx)("input",{type:"text",value:h,placeholder:"Search city",onChange:function(e){return _(e.currentTarget.value)},onClick:function(){N.length&&v(!0)}}),Object(C.jsx)("img",{src:b,alt:"search"})]}),O&&Object(C.jsx)("ul",{className:m.a.suggestions,children:w?Object(C.jsx)(S,{}):N.length?N.map((function(a){return Object(C.jsx)("li",{onClick:function(){return function(a,c){var s=c.lon,n=c.lat;t({search:"?lat=".concat(n,"&lon=").concat(s)}),e(I(a)),e(k(c)),_(""),v(!1),window.scrollTo({behavior:"smooth",top:0})}(a.name,{lat:a.lat,lon:a.lon})},children:a.name},a.id)})):Object(C.jsx)("span",{className:m.a.noResults,children:"No results"})})]})},H=function(){return Object(C.jsxs)("header",{className:j.a.header,children:[Object(C.jsxs)("div",{className:j.a.powered,children:[Object(C.jsx)("span",{children:"POWERED BY"}),Object(C.jsx)("a",{href:"https://www.weatherapi.com/",target:"_blank",rel:"noreferrer",title:"Free Weather API",children:Object(C.jsx)("img",{src:"//cdn.weatherapi.com/v4/images/weatherapi_logo.png",alt:"WeatherAPI.com"})})]}),Object(C.jsx)(F,{})]})},L=a(12),Q=a.n(L),M=function(){var e=d((function(e){return e.weatherParams})).coords,t=v({coords:e,days:1}).data;if(!t)return null;var a=t.current,c=a.last_updated,s=a.air_quality,n=s.o3,i=s.co,r=s.no2,o=s.so2,l=new Date(c).toLocaleDateString("en",{weekday:"short",day:"2-digit",month:"short"}),j=s["us-epa-index"],u=1===j?"Good":2===j?"Moderate":3===j||4===j?"Unhealthy":5===j?"Very Unhealthy":"Hazardous";return Object(C.jsxs)("div",{className:Q.a.airQuality,children:[Object(C.jsxs)("div",{className:Q.a.header,children:[Object(C.jsx)("div",{className:Q.a.title,children:Object(C.jsx)("span",{children:"Air Quality"})}),Object(C.jsx)("div",{className:Q.a.date,children:Object(C.jsx)("span",{children:l})})]}),Object(C.jsxs)("div",{className:Q.a.main,children:[Object(C.jsxs)("div",{className:Q.a.US_EPA,children:[Object(C.jsxs)("span",{children:["US-EPA index \u2014"," ",Object(C.jsx)("span",{className:Q.a.US_EPA_Index,children:j})]}),Object(C.jsxs)("span",{children:["Air quality is\xa0",Object(C.jsx)("span",{className:Q.a.US_EPA_Category,children:Object(C.jsx)("span",{children:u})})]})]}),Object(C.jsxs)("div",{className:Q.a.params,children:[Object(C.jsxs)("div",{className:Q.a.param,title:"Ozon",children:[Object(C.jsxs)("span",{children:["O",Object(C.jsx)("sub",{children:"3"})]}),Object(C.jsx)("span",{children:"".concat(n.toFixed(1)," (\u03bcg/m3)")})]}),Object(C.jsxs)("div",{className:Q.a.param,title:"Nitric oxide",children:[Object(C.jsxs)("span",{children:["NO",Object(C.jsx)("sub",{children:"2"})]}),Object(C.jsx)("span",{children:"".concat(r.toFixed(1)," (\u03bcg/m3)")})]}),Object(C.jsxs)("div",{className:Q.a.param,title:"Carbon monoxide",children:[Object(C.jsx)("span",{children:"CO"}),Object(C.jsx)("span",{children:"".concat(i.toFixed(1)," (\u03bcg/m3)")})]}),Object(C.jsxs)("div",{className:Q.a.param,title:"Sulfur oxide",children:[Object(C.jsxs)("span",{children:["SO",Object(C.jsx)("sub",{children:"2"})]}),Object(C.jsx)("span",{children:"".concat(o.toFixed(1)," (\u03bcg/m3)")})]})]})]})]})},q=a(14),D=a.n(q),U=a.p+"static/media/sun.a4983d8b.svg",R=a.p+"static/media/newMoon.a693dd00.svg",z=a.p+"static/media/waningCrescent.7c4d650d.svg",T=a.p+"static/media/firstQuarter.1ea9ddd9.svg",G=a.p+"static/media/waxingGibbous.a5d577a9.svg",V=a.p+"static/media/fullMoon.ea60a0a7.svg",B=a.p+"static/media/waningGibbous.c96b6096.svg",Y=a.p+"static/media/lastQuarter.3edf767e.svg",J=a.p+"static/media/waxingCrescent.5c34c1a8.svg",Z=function(){var e=d((function(e){return e.weatherParams})).coords,t=v({coords:e,days:1}).data,a=f(e).data;if(!t||!a)return null;var c,s=a.location.localtime,n=a.astronomy.astro,i=n.moon_phase,r=n.moonrise,o=n.moonset,l=n.sunrise,j=n.sunset,u=t.forecast.forecastday[0].day.uv,h=new Date(s).toLocaleDateString("en",{weekday:"short",day:"2-digit",month:"short"}),m=u>=9?"Very hight":u>=6?"Hight":u>=3?"Moderate":"Low";return Object(C.jsxs)("div",{className:D.a.astronomy,children:[Object(C.jsxs)("div",{className:D.a.header,children:[Object(C.jsx)("div",{className:D.a.title,children:Object(C.jsx)("span",{children:"Sun and Moon"})}),Object(C.jsx)("div",{className:D.a.date,children:Object(C.jsx)("span",{children:h})})]}),Object(C.jsxs)("div",{className:D.a.main,children:[Object(C.jsxs)("div",{className:D.a.sun,children:[Object(C.jsx)("div",{className:D.a.icon,children:Object(C.jsx)("img",{src:U,alt:"sun"})}),Object(C.jsxs)("div",{className:D.a.info,children:[Object(C.jsx)("div",{children:Object(C.jsx)("span",{children:"Rise \u2014 ".concat(l)})}),Object(C.jsx)("div",{children:Object(C.jsx)("span",{children:"Set \u2014 ".concat(j)})}),Object(C.jsx)("div",{children:Object(C.jsx)("span",{children:"".concat(m," UV index")})})]})]}),Object(C.jsxs)("div",{className:D.a.moon,children:[Object(C.jsx)("div",{className:D.a.icon,children:Object(C.jsx)("img",{src:(c=i,"New Moon"===c?R:"Waning Crescent"===c?z:"First Quarter"===c?T:"Waxing Gibbous"===c?G:"Full Moon"===c?V:"Waning Gibbous"===c?B:"Last Quarter"===c?Y:"Waxing Crescent"===c?J:void 0),alt:"moon"})}),Object(C.jsxs)("div",{className:D.a.info,children:[Object(C.jsx)("div",{children:Object(C.jsx)("span",{children:"Rise \u2014 ".concat(r)})}),Object(C.jsx)("div",{children:Object(C.jsx)("span",{children:"Set \u2014 ".concat(o)})}),Object(C.jsx)("div",{children:Object(C.jsx)("span",{children:i})})]})]})]})]})},X=a(7),K=a.n(X),$=a.p+"static/media/clear-day.5ad96950.svg",ee=a.p+"static/media/clear-night.c8e41eb7.svg",te=a.p+"static/media/showers.e816c986.svg",ae=a.p+"static/media/heavy-showers.2ef93064.svg",ce=a.p+"static/media/thunderstorm-showers.d8b68465.svg",se=a.p+"static/media/cloudy.76dce56f.svg",ne=a.p+"static/media/partly-cloudy-day.9d779b8a.svg",ie=a.p+"static/media/partly-cloudy-night.19b47d0b.svg",re=a.p+"static/media/overcastDay.e9fcce1d.svg",oe=a.p+"static/media/fogDay.c992825c.svg",de=a.p+"static/media/fogNight.7256712b.svg",le=a.p+"static/media/sleet.af0cf693.svg",je=a.p+"static/media/heavy-sleet.bef4d002.svg",ue=a.p+"static/media/snow.9245e81b.svg",he=a.p+"static/media/heavy-snow.640541a1.svg",me=a.p+"static/media/thunderstorm-snow.2222a507.svg",be=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=e.toLowerCase();return a.includes("sunny")?$:a.includes("clear")?ee:a.includes("overcast")?re:a.includes("mist")||a.includes("fog")?t?oe:de:a.includes("cloudy")?a.includes("partly")?t?ne:ie:se:a.includes("rain")||a.includes("drizzle")?a.includes("thunder")?ce:a.includes("heavy")||a.includes("shower")?ae:te:a.includes("sleet")?a.includes("heavy")?je:le:a.includes("snow")||a.includes("blizzard")||a.includes("ice")?a.includes("thunder")?me:a.includes("heavy")?he:ue:se},_e=a.p+"static/media/humidity.29e9de15.svg",pe=a.p+"static/media/pressure.56705f47.svg",xe=a.p+"static/media/wind.63f2075c.svg",Oe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=e.toLowerCase();return a.includes("sunny")?"linear-gradient(to bottom, #4c90f4, #3e9eee)":a.includes("clear")?"linear-gradient(to bottom, #2e4686, #375382)":t?"linear-gradient(to bottom, #4a72ac, #438dcb)":"linear-gradient(to bottom, #162a62, #16315f)"},ve=a(17),ye=a(13),fe=a.n(ye),ge=a.p+"static/media/arrow.efeb1b53.svg",Ne=function(e){return"".concat(e>0?"+":"").concat(e)},we=function(e){var t=e.temp_c,a=e.time,c=e.condition.text,s=e.is_day,n=new Date(a),i=n.toLocaleTimeString("ru",{hour:"2-digit",minute:"2-digit"}),r=Ne(Number(t.toFixed(0)));return Object(C.jsxs)("div",{className:fe.a.hour,children:[Object(C.jsx)("div",{className:fe.a.time,children:Object(C.jsx)("time",{dateTime:n.toISOString(),children:i})}),Object(C.jsx)("div",{className:fe.a.icon,children:Object(C.jsx)("img",{src:be(c,s),alt:c})}),Object(C.jsx)("div",{className:fe.a.temp,children:Object(C.jsx)("span",{children:r})})]})},Ce=function(e){var t=e.hour,a=Object(c.useRef)(null),s=Object(c.useState)({left:!0,right:!1}),n=Object(u.a)(s,2),i=n[0],r=n[1];return Object(C.jsxs)("div",{className:fe.a.hourly,children:[Object(C.jsx)("button",{className:"".concat(fe.a.btn," ").concat(fe.a.btnLeft),disabled:i.left,onClick:function(){if(a.current){var e=Number.parseInt(a.current.style.right),t=Math.floor(a.current.clientWidth),c=53*Math.ceil(t/53);e-c<=53?(a.current.style.right="".concat(0,"px"),r({left:!0,right:!1})):(a.current.style.right="".concat(e-c,"px"),r((function(e){return Object(ve.a)(Object(ve.a)({},e),{},{right:!1})})))}},children:Object(C.jsx)("img",{src:ge,alt:"slide left"})}),Object(C.jsx)("div",{className:fe.a.hours,children:Object(C.jsx)("div",{className:fe.a.inner,style:{right:"0px"},ref:a,children:t.map((function(e){return Object(c.createElement)(we,Object(ve.a)(Object(ve.a)({},e),{},{key:e.time}))}))})}),Object(C.jsx)("button",{className:"".concat(fe.a.btn," ").concat(fe.a.btnRight),disabled:i.right,onClick:function(){if(a.current){var e=Number.parseInt(a.current.style.right),t=Math.floor(a.current.clientWidth),c=a.current.scrollWidth,s=53*Math.ceil(t/53);console.log(s,t),e+s+t>=c-53?(a.current.style.right="".concat(c-t,"px"),r({left:!1,right:!0})):(a.current.style.right="".concat(e+s,"px"),r((function(e){return Object(ve.a)(Object(ve.a)({},e),{},{left:!1})})))}},children:Object(C.jsx)("img",{src:ge,alt:"slide right"})})]})},Se=function(e){var t=e.toLowerCase();return t.includes("rain")||t.includes("drizzle")?"rain":t.includes("snow")||t.includes("ice")?"snow":t.includes("sleet")?"sleet":void 0},Ae=a.p+"static/media/geolocation.3e9315e8.svg",Pe=function(){var e=Object(o.d)(),t=Object(r.g)(),a=d((function(e){return e.weatherParams})).coords,c=v({coords:a,days:1}),s=c.data,n=c.isFetching;if(!s)return null;var i=s.location,l=i.name,j=i.country,u=s.current,h=u.last_updated,m=u.temp_c,b=u.condition.text,_=void 0===b?"sleet":b,p=u.feelslike_c,x=u.is_day,O=u.wind_kph,y=u.pressure_mb,f=u.humidity,g=u.wind_dir,N=s.forecast.forecastday[0].hour,w=new Date(h),A=w.toLocaleTimeString("en",{hour:"2-digit",minute:"2-digit"}),P=Ne(m),W=Ne(p),E=(O/3.6).toFixed(1),F="rain"===Se(_),H="snow"===Se(_),L="sleet"===Se(_);return Object(C.jsx)("div",{className:K.a.currentWeather,style:{background:Oe(_,x)},children:n?Object(C.jsx)(S,{}):Object(C.jsxs)(C.Fragment,{children:[(F||L)&&Object(C.jsx)("div",{className:K.a.rain}),(H||L)&&Object(C.jsx)("div",{className:K.a.snow}),Object(C.jsxs)("div",{className:K.a.header,children:[Object(C.jsxs)("div",{className:K.a.col,children:[Object(C.jsx)("div",{className:K.a.title,children:Object(C.jsx)("span",{children:"".concat(l,", ").concat(j)})}),Object(C.jsxs)("div",{className:K.a.time,children:[Object(C.jsx)("span",{children:"Now"}),Object(C.jsx)("time",{dateTime:w.toISOString(),children:A})]})]}),Object(C.jsx)("div",{className:K.a.location,onClick:function(){navigator.geolocation.getCurrentPosition((function(a){var c=a.coords,s=c.latitude,n=c.longitude;e(k({lat:s,lon:n})),e(I(l)),t({search:"?lat=".concat(s,"&lon=").concat(n)})}))},children:Object(C.jsx)("img",{src:Ae,alt:"your location"})})]}),Object(C.jsxs)("div",{className:K.a.main,children:[Object(C.jsxs)("div",{className:K.a.tempWrap,children:[Object(C.jsx)("div",{className:K.a.temp,children:Object(C.jsx)("span",{children:P})}),Object(C.jsx)("div",{className:K.a.icon,children:Object(C.jsx)("img",{src:be(_,x),alt:_})}),Object(C.jsxs)("div",{className:K.a.feelings,children:[Object(C.jsx)("div",{className:K.a.condition,children:Object(C.jsx)("span",{children:_})}),Object(C.jsx)("div",{className:K.a.feels,children:Object(C.jsx)("span",{children:"Feels like ".concat(W)})})]})]}),Object(C.jsxs)("div",{className:K.a.params,children:[Object(C.jsxs)("div",{className:K.a.param,children:[Object(C.jsx)("img",{src:xe,alt:"wind"}),Object(C.jsx)("span",{children:"".concat(E,"m/s, ").concat(g)})]}),Object(C.jsxs)("div",{className:K.a.param,children:[Object(C.jsx)("img",{src:_e,alt:"humidity"}),Object(C.jsxs)("span",{children:[f,"%"]})]}),Object(C.jsxs)("div",{className:K.a.param,children:[Object(C.jsx)("img",{src:pe,alt:"pressure"}),Object(C.jsxs)("span",{children:[y,"hPa"]})]})]})]}),Object(C.jsx)("div",{className:K.a.hourlyWrap,children:Object(C.jsx)(Ce,{hour:N})})]})})},We=a(4),Ee=a.n(We),Ie=function(e){var t=e.date,a=e.hour,c=new Date(t),n=c.getDate(),i=c.toLocaleDateString("en",{weekday:"long"}),r=c.toLocaleDateString("en",{month:"long"}),o=a.filter((function(e){var t=new Date(e.time).getHours();return 1===t||8===t||13===t||18===t}));return Object(C.jsxs)("div",{className:Ee.a.card,children:[Object(C.jsx)("div",{className:Ee.a.header,children:Object(C.jsxs)("div",{className:Ee.a.date,children:[Object(C.jsx)("div",{className:Ee.a.day,children:Object(C.jsx)("span",{children:n})}),Object(C.jsxs)("div",{className:Ee.a.weekdayMonth,children:[Object(C.jsxs)("span",{children:[r,","]}),Object(C.jsx)("span",{children:i})]})]})}),Object(C.jsxs)("div",{className:Ee.a.main,children:[Object(C.jsx)("span",{}),Object(C.jsx)("span",{}),Object(C.jsx)("span",{className:"".concat(Ee.a.title," ").concat(Ee.a.condition)}),Object(C.jsx)("span",{className:"".concat(Ee.a.title," ").concat(Ee.a.pressure),children:"Pressure"}),Object(C.jsx)("span",{className:"".concat(Ee.a.title," ").concat(Ee.a.humidity),children:"Humidity"}),Object(C.jsx)("span",{className:Ee.a.title,children:"Wind"}),Object(C.jsx)("span",{className:"".concat(Ee.a.title," ").concat(Ee.a.precipitation),children:"Precipitation"}),Object(C.jsx)("span",{className:"".concat(Ee.a.title," ").concat(Ee.a.windchill),children:"Windchill"}),o.map((function(e){var t=e.is_day,a=e.condition.text,c=e.time,n=e.temp_c,i=e.wind_kph,r=e.humidity,o=e.pressure_mb,d=e.precip_mm,l=e.windchill_c,j=new Date(c).getHours(),u=Ne(n),h=(i/3.6).toFixed(1),m=Ne(l),b=1===j?"night":8===j?"morning":13===j?"day":"evening";return Object(C.jsxs)(s.a.Fragment,{children:[Object(C.jsxs)("div",{className:Ee.a.tempWrap,children:[Object(C.jsx)("div",{className:Ee.a.dayPart,children:b}),Object(C.jsx)("div",{className:Ee.a.temp,children:Object(C.jsx)("span",{children:u})})]}),Object(C.jsx)("div",{className:Ee.a.icon,children:Object(C.jsx)("img",{src:be(a,t),alt:a})}),Object(C.jsx)("div",{className:Ee.a.condition,children:Object(C.jsx)("span",{children:a})}),Object(C.jsxs)("div",{className:Ee.a.pressure,children:[Object(C.jsx)("span",{children:o}),Object(C.jsx)("span",{className:Ee.a.unit,children:"mb"})]}),Object(C.jsxs)("div",{className:Ee.a.humidity,children:[Object(C.jsx)("span",{children:r}),Object(C.jsx)("span",{className:Ee.a.unit,children:"%"})]}),Object(C.jsxs)("div",{className:Ee.a.wind,children:[Object(C.jsx)("span",{children:h}),Object(C.jsx)("span",{className:Ee.a.unit,children:"m/s"})]}),Object(C.jsxs)("div",{className:Ee.a.precipitation,children:[Object(C.jsx)("span",{children:d}),Object(C.jsx)("span",{className:Ee.a.unit,children:"mm"})]}),Object(C.jsx)("div",{className:"".concat(Ee.a.windchill," ").concat(Ee.a.temp),children:Object(C.jsx)("span",{children:m})})]},c)}))]})]})},ke=a(26),Fe=a.n(ke),He=function(){var e=d((function(e){return e.weatherParams})).coords,t=v({coords:e}).data,a=null===t||void 0===t?void 0:t.forecast.forecastday;return Object(C.jsx)("div",{className:Fe.a.daily,children:Object(C.jsx)("div",{className:Fe.a.cards,children:null===a||void 0===a?void 0:a.map((function(e){return Object(C.jsx)(Ie,Object(ve.a)({},e),e.date)}))})})},Le=a(22),Qe=a.n(Le),Me=function(){var e=Object(o.d)(),t=Object(r.g)(),a=new URLSearchParams(Object(r.f)().search),s=d((function(e){return e.weatherParams})).coords,n=Number(a.get("lat"))||s.lat,i=Number(a.get("lon"))||s.lon;return Object(c.useEffect)((function(){e(k({lat:n,lon:i})),k({lat:n,lon:i}),t({search:"?lat=".concat(n,"&lon=").concat(i)})}),[n,i,t,e]),Object(C.jsxs)("main",{className:Qe.a.main,children:[Object(C.jsxs)("div",{className:Qe.a.row,children:[Object(C.jsx)(Pe,{}),Object(C.jsxs)("div",{className:Qe.a.col,children:[Object(C.jsx)(Z,{}),Object(C.jsx)(M,{})]})]}),Object(C.jsx)(He,{})]})},qe=function(){var e=d((function(e){return e.weatherParams})).city;return Object(c.useEffect)((function(){var t=e.split(",")[0];document.title="Weather in ".concat(t.charAt(0).toUpperCase()+t.slice(1))}),[e]),Object(C.jsxs)("div",{className:"App",children:[Object(C.jsx)(H,{}),Object(C.jsx)("div",{className:"container",children:Object(C.jsxs)(r.d,{children:[Object(C.jsx)(r.b,{path:"/forecast",element:Object(C.jsx)(Me,{})}),Object(C.jsx)(r.b,{path:"*",element:Object(C.jsx)(r.a,{to:"/forecast"})})]})})]})},De=a(30),Ue=a(18),Re=a(9),ze=Object(Re.b)((g={},Object(Ue.a)(g,O.reducerPath,O.reducer),Object(Ue.a)(g,"weatherParams",W.reducer),g)),Te=Object(A.a)({reducer:ze,devTools:!1,middleware:function(e){return e().concat(O.middleware)}});i.a.render(Object(C.jsx)(s.a.StrictMode,{children:Object(C.jsx)(De.a,{basename:"/weather",children:Object(C.jsx)(o.a,{store:Te,children:Object(C.jsx)(qe,{})})})}),document.getElementById("root"))}],[[45,1,2]]]);
//# sourceMappingURL=main.a26d089a.chunk.js.map