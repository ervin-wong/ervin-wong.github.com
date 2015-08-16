/**
 * Client page text search and highlight.
 * @author: Chiroc(470597142@qq.com)
 * @dependence jQuery
 * @usage:
 * var target = $('#scope').find('td'); //The target for searching.
 * //$('#txt') is input object.
 * $('#txt').fastSearch(target, {
 *      dynamic: false, //Used for dynamic node.
 *      parent: true //Whether to hide its parent node when toggle(show/hide) node.
 *      caseSensitive: true, //Case sensitive.
 *      autoSearch: true, //Set true,Searching text after input completed, otherwise(false) need to type enter key for searching.
 *      autoToggle: true, //Whether to toggle(show/hide) DOM node when searching.
 *      highlight: true, //Set highlight text or not.
 *      color: '#fff', //font color for results.
 *      background: '#00f' //background color for results.
 *      afterClear: function (self) {
 *          // afterClear: event after clear search results.
 *      },
 *      beforeSearch: function (self, keyWords) {
 *         // beforeSearch: event before search started.
 *      },
 *      afterSearch: function (self, keyWords, result) {
 *         // afterSearch: event after search completed.
 *      }
 * });
 **/
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(5($){$.1h.1s=5(d,f){t g=$(l),h=[],n=o,7=d.7(),O=d.O,N=\'1k\',L=\'\',k=\'\',p=1l,19=1A,1b=13,1c=8,Q=1r,K=1w,2={S:o,7:o,v:o,J:H,G:H,q:H,C:\'#1v\',P:\'#1z\',E:5(a,b){4(l.G){4(!b){l.7?7.B():d.B()}}},1d:5(a,b,c){4(l.G){l.7?(c?h.7():7).T():(c?h:d).T()}},U:5(a,b,c){4(l.G){l.7?c.7().B():c.B()}}},6={1a:5(){d=$(O);7=d.7()},r:5(a){n=o;a=$.1D(a.9(/[<>]+|<(\\/?)([A-1i-z]+)([<>]*)>|[\\\\`\'"\\[\\]&]/g,\'\'));4(k!==a){4(k!==\'\'){4(!2.v){n=a.F().I(k.F())!=-1}u{n=a.I(k)!=-1}}4(2.q){6.w();2.E(g,n)}}4(a===\'\'){j}2.1d(g,a,n);4(2.S){6.1a()}4(!2.v){h=(n?h:d).V(\':W("\'+a+\'")\').X(\'.Y\')}u{h=(n?h:d).V(\':1B("\'+a+\'")\').X(\'.Y\')}2.U(g,a,h);4(2.q){6.q(h,a)}k=a},q:5(a,b){t c,Z=1e 1f(\'(\'+6.10(b)+\')(?![^<]*>)\',N);a.11(5(){c=$(l);c.12(c.12().9(Z,L))})},10:5(s){j s.9(/\\./g,\'\\\\.\').9(/\\?/g,\'\\\\?\').9(/\\+/g,\'\\\\+\').9(/\\(/g,\'\\\\(\').9(/\\)/g,\'\\\\)\').9(/\\|/g,\'\\\\|\').9(/\\$/g,\'\\\\$\').9(/\\*/g,\'\\\\*\').9(/\\^/g,\'\\\\^\')},w:5(){$(\'.14\',h).11(5(){t a=$(l);a.1j(a.15())})}};2=$.16(2,f);L=\'<17 1m="14" 1n="\'+[\'C:\',2.C,\';P-C:\',2.P].1o(\'\')+\'">$1</17>\';d=d||$(\'1p\');4(2.v){N=\'g\'}u{$.1q[\':\'].W=5(a,i,m){j $(a).15().18().I(m[3].18())>=0}}g.1t(\'1u\',5(e){t a=g.M();1x(e.1y){y 19:{x(p);k=\'\';g.M(\'\');6.w();2.E(g,o)}D;y 1b:{x(p);4(!2.v){4(k.F()===a.F()){j}}u{4(k===a){j}}6.r(a)}D;y 1c:{x(p)}D;y Q:{x(p)}D;1C:{4(d.R>K&&2.q&&2.J){x(p)}}}}).1E(\'1F\',5(){t a=g.M();4(a===\'\'){k=\'\';6.w();2.E(g,o);j}4(!2.J){j}4(d.R>K&&2.q){p=1G(5(){6.r(a)},1H)}u{6.r(a)}});j{1I:5(){j h},1J:5(){j d},2:5(a){2=$.16(2,a)},r:6.r,1K:6.w}}})(1g);',62,109,'||setting||if|function|_|parent||replace||||||||result||return|searchedTxt|this||inc|false|tick|highlight|search||var|else|caseSensitive|clearHighlight|clearTimeout|case|||show|color|break|afterClear|toLowerCase|autoToggle|true|indexOf|autoSearch|threshold|replacement|val|flags|selector|background|KEY_CODE_DELETE|length|dynamic|hide|afterSearch|filter|contains_ext|not|ignore|regExp|formatExp|each|html||jfs|text|extend|span|toUpperCase|KEY_CODE_ESC|refreshTarget|KEY_CODE_ENTER|KEY_CODE_BACKSPACE|beforeSearch|new|RegExp|jQuery|fn|Za|replaceWith|gi|null|class|style|join|body|expr|64|fastSearch|on|keydown|fff|500|switch|keyCode|00f|27|contains|default|trim|bind|input|setTimeout|250|getResult|getTarget|clear'.split('|'),0,{}));