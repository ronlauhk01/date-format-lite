/*! litejs.com/MIT-LICENSE.txt */
!function(e,k){var l=/("|')((?:\\?.)*?)\1|(Y|M|D)\3{2,3}|([YMDHhmsWS])(\4?)|[uUAZSwo]/g,m=/(\d{4})[-.\/](\d\d?)[-.\/](\d\d?)/,n=/(\d\d?)[-.\/](\d\d?)[-.\/](\d{4})/,p=/(\d\d?):(\d\d):?(\d\d)?\.?(\d{3})?(?:\s*(?:(a)|(p))\.?m\.?)?(\s*(?:Z|GMT|UTC)?(?:([-+]\d\d):?(\d\d)?)?)?/i,q=/\\(.)/g,r={D:"Date",h:"Hours",m:"Minutes",s:"Seconds",S:"Milliseconds"};e[k].format=function(c){c=e.masks[c]||c||e.masks["default"];var a=this,d="get"+("UTC:"==c.slice(0,4)?(c=c.slice(4),"UTC"):"");return c.replace(l,function(b,
f,c,g,h,k){c="Y"==g?a[d+"FullYear"]():g?e.names[a[d+("M"==g?"Month":"Day")]()+("M"==g?b==g?12:0:b==g?31:24)]:"Y"==h?a[d+"FullYear"]()%100:"W"==h?(f=new e(+a+864E5*(4-(a[d+"Day"]()||7))),Math.ceil(((f.getTime()-f["s"+d.slice(1)+"Month"](0,1))/864E5+1)/7)):"M"==h?a[d+"Month"]()+1:"H"==h?a[d+"Hours"]()%12||12:h?a[d+r[h]]():"u"==b?a/1E3>>>0:"U"==b?+a:"A"==b?e[11<a[d+"Hours"]()?"pm":"am"]:"Z"==b?"GMT "+-a.getTimezoneOffset()/60:"w"==b?a[d+"Day"]()||7:"o"==b?(new e(+a+864E5*(4-(a[d+"Day"]()||7))))[d+"FullYear"]():
f?c.replace(q,"$1"):b;"SS"==b&&100>c&&(c="0"+c);return!k||9<c?c:"0"+c})};e.am="AM";e.pm="PM";e.masks={"default":"DDD MMM DD YYYY hh:mm:ss",isoUtcDateTime:'UTC:YYYY-MM-DD"T"hh:mm:ss"Z"'};e.names="JanFebMarAprMayJunJulAugSepOctNovDecJanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecemberSunMonTueWedThuFriSatSundayMondayTuesdayWednesdayThursdayFridaySaturday".match(/.[a-z]+/g);String[k].date=Number[k].date=function(c){var a,d,b=new e,f=+this||""+this;if(isNaN(f)){if(a=f.match(m))b.setFullYear(a[1],
a[2]-1,a[3]);else if(a=f.match(n))d=e.middleEndian?1:2,b.setFullYear(a[3],a[d]-1,a[3-d]);a=f.match(p)||[0,0,0];b.setHours(a[6]&&12>a[1]?+a[1]+12:a[5]&&12==a[1]?0:a[1],a[2],a[3]|0,a[4]|0);a[7]&&b.setTime(b-6E4*(b.getTimezoneOffset()+60*(a[8]|0)+(0>a[8]?-1:1)*(a[9]|0)))}else b.setTime(4294967296>f?1E3*f:f);return c?b.format(c):b}}(Date,"prototype");
