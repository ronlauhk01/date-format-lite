!function(e,g){function f(d){return 9<d?d:"0"+d}var h=/(")(.*?)"|'(?:[^'\\]|\\.)*'|(YY(?:YY)?|M{1,4}|D{1,4}|([HhmsS])\4?|[uUaAZw])/g;e[g].format=function(d){d=e.masks[d]||d||e.masks["default"];var b=this,c="get"+("UTC:"==d.slice(0,4)?(d=d.slice(4),"UTC"):"");return d.replace(h,function(a,d,g){"YY"==a?a=(""+b[c+"FullYear"]()).slice(2):"YYYY"==a?a=b[c+"FullYear"]():"M"==a?a=b[c+"Month"]()+1:"MM"==a?a=f(b[c+"Month"]()+1):"MMM"==a?a=e.monthNames[b[c+"Month"]()]:"MMMM"==a?a=e.monthNames[b[c+"Month"]()+
12]:"D"==a?a=b[c+"Date"]():"DD"==a?a=f(b[c+"Date"]()):"DDD"==a?a=e.dayNames[b[c+"Day"]()]:"DDDD"==a?a=e.dayNames[b[c+"Day"]()+7]:"H"==a?a=""+b[c+"Hours"]()%12||12:"HH"==a?a=f(b[c+"Hours"]()%12||12):"h"==a?a=b[c+"Hours"]():"hh"==a?a=f(b[c+"Hours"]()):"m"==a?a=b[c+"Minutes"]():"mm"==a?a=f(b[c+"Minutes"]()):"s"==a?a=b[c+"Seconds"]():"ss"==a?a=f(b[c+"Seconds"]()):"S"==a?a=b[c+"Milliseconds"]():"SS"==a?(a=b[c+"Milliseconds"](),a=99<a?a:(9<a?"0":"00")+a):a="u"==a?b/1E3>>>0:"U"==a?+b:"a"==a?11<b[c+"Hours"]()?
"pm":"am":"A"==a?11<b[c+"Hours"]()?"PM":"AM":"Z"==a?"GMT "+-b.getTimezoneOffset()/60:"w"==a?1+Math.floor((b-new e(b[c+"FullYear"](),0,4))/6048E5):d?g:a;return a})};e.masks={"default":"DDD MMM DD YYYY hh:mm:ss",isoUtcDateTime:'UTC:YYYY-MM-DD"T"hh:mm:ss"Z"'};e.monthNames="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec January February March April May June July August September October November December".split(" ");e.dayNames="Sun Mon Tue Wed Thu Fri Sat Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ");
var k=/(\d\d?)[-./](\d\d?)[-./](\d\d\d\d)/;String[g].date=Number[g].date=function(d){var b,c=new e,a=+this||""+this;if(isNaN(a)){if(b=a.match(/(\d\d\d\d)-(\d\d?)-(\d\d?)/))c.setFullYear(b[1],b[2]-1,b[3]);else if(b=a.match(k))e.middle_endian?c.setFullYear(b[3],b[1]-1,b[2]):c.setFullYear(b[3],b[2]-1,b[1]);b=a.match(/(\d{1,2}):(\d{2}):?(\d{2})?\.?(\d{3})?/)||[0,0,0];a.match(/pm/i)&&12>b[1]&&(b[1]+=12);c.setHours(b[1],b[2],b[3]||0,b[4]||0);a.indexOf("Z")&&c.setTime(c-6E4*c.getTimezoneOffset())}else c.setTime(4294967296>
a?1E3*a:a);return d?c.format(d):c}}(Date,"prototype");
