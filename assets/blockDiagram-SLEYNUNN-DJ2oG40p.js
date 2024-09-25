import{a as Re,i as Be,p as ke,m as Pe}from"./chunk-MKAIFKW5-DAKWYe8-.js";import{i as xe,p as Fe}from"./chunk-GWHMDDHB-DTD9yf2g.js";import{_ as u,d as Le,l as L,P as Ke,B as ie,j as G,k as Me,r as Ye,y as We,ah as Ve,e as je}from"./index-BpCi-oQw.js";import{G as Ue}from"./graph-CECcNzMr.js";import{c as Xe}from"./channel-BDElaB6c.js";import"./_baseUniq-B2uRNG0U.js";var se=function(){var e=u(function(N,c,s,r){for(s=s||{},r=N.length;r--;s[N[r]]=c);return s},"o"),l=[1,7],h=[1,13],n=[1,14],i=[1,15],d=[1,19],o=[1,16],f=[1,17],S=[1,18],m=[8,30],x=[8,21,28,29,30,31,32,40,44,47],_=[1,23],O=[1,24],I=[8,15,16,21,28,29,30,31,32,40,44,47],D=[8,15,16,21,27,28,29,30,31,32,40,44,47],C=[1,49],E={trace:u(function(){},"trace"),yy:{},symbols_:{error:2,spaceLines:3,SPACELINE:4,NL:5,separator:6,SPACE:7,EOF:8,start:9,BLOCK_DIAGRAM_KEY:10,document:11,stop:12,statement:13,link:14,LINK:15,START_LINK:16,LINK_LABEL:17,STR:18,nodeStatement:19,columnsStatement:20,SPACE_BLOCK:21,blockStatement:22,classDefStatement:23,cssClassStatement:24,styleStatement:25,node:26,SIZE:27,COLUMNS:28,"id-block":29,end:30,block:31,NODE_ID:32,nodeShapeNLabel:33,dirList:34,DIR:35,NODE_DSTART:36,NODE_DEND:37,BLOCK_ARROW_START:38,BLOCK_ARROW_END:39,classDef:40,CLASSDEF_ID:41,CLASSDEF_STYLEOPTS:42,DEFAULT:43,class:44,CLASSENTITY_IDS:45,STYLECLASS:46,style:47,STYLE_ENTITY_IDS:48,STYLE_DEFINITION_DATA:49,$accept:0,$end:1},terminals_:{2:"error",4:"SPACELINE",5:"NL",7:"SPACE",8:"EOF",10:"BLOCK_DIAGRAM_KEY",15:"LINK",16:"START_LINK",17:"LINK_LABEL",18:"STR",21:"SPACE_BLOCK",27:"SIZE",28:"COLUMNS",29:"id-block",30:"end",31:"block",32:"NODE_ID",35:"DIR",36:"NODE_DSTART",37:"NODE_DEND",38:"BLOCK_ARROW_START",39:"BLOCK_ARROW_END",40:"classDef",41:"CLASSDEF_ID",42:"CLASSDEF_STYLEOPTS",43:"DEFAULT",44:"class",45:"CLASSENTITY_IDS",46:"STYLECLASS",47:"style",48:"STYLE_ENTITY_IDS",49:"STYLE_DEFINITION_DATA"},productions_:[0,[3,1],[3,2],[3,2],[6,1],[6,1],[6,1],[9,3],[12,1],[12,1],[12,2],[12,2],[11,1],[11,2],[14,1],[14,4],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[19,3],[19,2],[19,1],[20,1],[22,4],[22,3],[26,1],[26,2],[34,1],[34,2],[33,3],[33,4],[23,3],[23,3],[24,3],[25,3]],performAction:u(function(c,s,r,g,p,t,b){var a=t.length-1;switch(p){case 4:g.getLogger().debug("Rule: separator (NL) ");break;case 5:g.getLogger().debug("Rule: separator (Space) ");break;case 6:g.getLogger().debug("Rule: separator (EOF) ");break;case 7:g.getLogger().debug("Rule: hierarchy: ",t[a-1]),g.setHierarchy(t[a-1]);break;case 8:g.getLogger().debug("Stop NL ");break;case 9:g.getLogger().debug("Stop EOF ");break;case 10:g.getLogger().debug("Stop NL2 ");break;case 11:g.getLogger().debug("Stop EOF2 ");break;case 12:g.getLogger().debug("Rule: statement: ",t[a]),typeof t[a].length=="number"?this.$=t[a]:this.$=[t[a]];break;case 13:g.getLogger().debug("Rule: statement #2: ",t[a-1]),this.$=[t[a-1]].concat(t[a]);break;case 14:g.getLogger().debug("Rule: link: ",t[a],c),this.$={edgeTypeStr:t[a],label:""};break;case 15:g.getLogger().debug("Rule: LABEL link: ",t[a-3],t[a-1],t[a]),this.$={edgeTypeStr:t[a],label:t[a-1]};break;case 18:const P=parseInt(t[a]),W=g.generateId();this.$={id:W,type:"space",label:"",width:P,children:[]};break;case 23:g.getLogger().debug("Rule: (nodeStatement link node) ",t[a-2],t[a-1],t[a]," typestr: ",t[a-1].edgeTypeStr);const K=g.edgeStrToEdgeData(t[a-1].edgeTypeStr);this.$=[{id:t[a-2].id,label:t[a-2].label,type:t[a-2].type,directions:t[a-2].directions},{id:t[a-2].id+"-"+t[a].id,start:t[a-2].id,end:t[a].id,label:t[a-1].label,type:"edge",directions:t[a].directions,arrowTypeEnd:K,arrowTypeStart:"arrow_open"},{id:t[a].id,label:t[a].label,type:g.typeStr2Type(t[a].typeStr),directions:t[a].directions}];break;case 24:g.getLogger().debug("Rule: nodeStatement (abc88 node size) ",t[a-1],t[a]),this.$={id:t[a-1].id,label:t[a-1].label,type:g.typeStr2Type(t[a-1].typeStr),directions:t[a-1].directions,widthInColumns:parseInt(t[a],10)};break;case 25:g.getLogger().debug("Rule: nodeStatement (node) ",t[a]),this.$={id:t[a].id,label:t[a].label,type:g.typeStr2Type(t[a].typeStr),directions:t[a].directions,widthInColumns:1};break;case 26:g.getLogger().debug("APA123",this?this:"na"),g.getLogger().debug("COLUMNS: ",t[a]),this.$={type:"column-setting",columns:t[a]==="auto"?-1:parseInt(t[a])};break;case 27:g.getLogger().debug("Rule: id-block statement : ",t[a-2],t[a-1]),g.generateId(),this.$={...t[a-2],type:"composite",children:t[a-1]};break;case 28:g.getLogger().debug("Rule: blockStatement : ",t[a-2],t[a-1],t[a]);const B=g.generateId();this.$={id:B,type:"composite",label:"",children:t[a-1]};break;case 29:g.getLogger().debug("Rule: node (NODE_ID separator): ",t[a]),this.$={id:t[a]};break;case 30:g.getLogger().debug("Rule: node (NODE_ID nodeShapeNLabel separator): ",t[a-1],t[a]),this.$={id:t[a-1],label:t[a].label,typeStr:t[a].typeStr,directions:t[a].directions};break;case 31:g.getLogger().debug("Rule: dirList: ",t[a]),this.$=[t[a]];break;case 32:g.getLogger().debug("Rule: dirList: ",t[a-1],t[a]),this.$=[t[a-1]].concat(t[a]);break;case 33:g.getLogger().debug("Rule: nodeShapeNLabel: ",t[a-2],t[a-1],t[a]),this.$={typeStr:t[a-2]+t[a],label:t[a-1]};break;case 34:g.getLogger().debug("Rule: BLOCK_ARROW nodeShapeNLabel: ",t[a-3],t[a-2]," #3:",t[a-1],t[a]),this.$={typeStr:t[a-3]+t[a],label:t[a-2],directions:t[a-1]};break;case 35:case 36:this.$={type:"classDef",id:t[a-1].trim(),css:t[a].trim()};break;case 37:this.$={type:"applyClass",id:t[a-1].trim(),styleClass:t[a].trim()};break;case 38:this.$={type:"applyStyles",id:t[a-1].trim(),stylesStr:t[a].trim()};break}},"anonymous"),table:[{9:1,10:[1,2]},{1:[3]},{11:3,13:4,19:5,20:6,21:l,22:8,23:9,24:10,25:11,26:12,28:h,29:n,31:i,32:d,40:o,44:f,47:S},{8:[1,20]},e(m,[2,12],{13:4,19:5,20:6,22:8,23:9,24:10,25:11,26:12,11:21,21:l,28:h,29:n,31:i,32:d,40:o,44:f,47:S}),e(x,[2,16],{14:22,15:_,16:O}),e(x,[2,17]),e(x,[2,18]),e(x,[2,19]),e(x,[2,20]),e(x,[2,21]),e(x,[2,22]),e(I,[2,25],{27:[1,25]}),e(x,[2,26]),{19:26,26:12,32:d},{11:27,13:4,19:5,20:6,21:l,22:8,23:9,24:10,25:11,26:12,28:h,29:n,31:i,32:d,40:o,44:f,47:S},{41:[1,28],43:[1,29]},{45:[1,30]},{48:[1,31]},e(D,[2,29],{33:32,36:[1,33],38:[1,34]}),{1:[2,7]},e(m,[2,13]),{26:35,32:d},{32:[2,14]},{17:[1,36]},e(I,[2,24]),{11:37,13:4,14:22,15:_,16:O,19:5,20:6,21:l,22:8,23:9,24:10,25:11,26:12,28:h,29:n,31:i,32:d,40:o,44:f,47:S},{30:[1,38]},{42:[1,39]},{42:[1,40]},{46:[1,41]},{49:[1,42]},e(D,[2,30]),{18:[1,43]},{18:[1,44]},e(I,[2,23]),{18:[1,45]},{30:[1,46]},e(x,[2,28]),e(x,[2,35]),e(x,[2,36]),e(x,[2,37]),e(x,[2,38]),{37:[1,47]},{34:48,35:C},{15:[1,50]},e(x,[2,27]),e(D,[2,33]),{39:[1,51]},{34:52,35:C,39:[2,31]},{32:[2,15]},e(D,[2,34]),{39:[2,32]}],defaultActions:{20:[2,7],23:[2,14],50:[2,15],52:[2,32]},parseError:u(function(c,s){if(s.recoverable)this.trace(c);else{var r=new Error(c);throw r.hash=s,r}},"parseError"),parse:u(function(c){var s=this,r=[0],g=[],p=[null],t=[],b=this.table,a="",P=0,W=0,K=2,B=1,ze=t.slice.call(arguments,1),w=Object.create(this.lexer),M={yy:{}};for(var Q in this.yy)Object.prototype.hasOwnProperty.call(this.yy,Q)&&(M.yy[Q]=this.yy[Q]);w.setInput(c,M.yy),M.yy.lexer=w,M.yy.parser=this,typeof w.yylloc>"u"&&(w.yylloc={});var $=w.yylloc;t.push($);var Ce=w.options&&w.options.ranges;typeof M.yy.parseError=="function"?this.parseError=M.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function Ae(z){r.length=r.length-2*z,p.length=p.length-z,t.length=t.length-z}u(Ae,"popStack");function he(){var z;return z=g.pop()||w.lex()||B,typeof z!="number"&&(z instanceof Array&&(g=z,z=g.pop()),z=s.symbols_[z]||z),z}u(he,"lex");for(var T,Y,A,ee,V={},U,F,ue,X;;){if(Y=r[r.length-1],this.defaultActions[Y]?A=this.defaultActions[Y]:((T===null||typeof T>"u")&&(T=he()),A=b[Y]&&b[Y][T]),typeof A>"u"||!A.length||!A[0]){var te="";X=[];for(U in b[Y])this.terminals_[U]&&U>K&&X.push("'"+this.terminals_[U]+"'");w.showPosition?te="Parse error on line "+(P+1)+`:
`+w.showPosition()+`
Expecting `+X.join(", ")+", got '"+(this.terminals_[T]||T)+"'":te="Parse error on line "+(P+1)+": Unexpected "+(T==B?"end of input":"'"+(this.terminals_[T]||T)+"'"),this.parseError(te,{text:w.match,token:this.terminals_[T]||T,line:w.yylineno,loc:$,expected:X})}if(A[0]instanceof Array&&A.length>1)throw new Error("Parse Error: multiple actions possible at state: "+Y+", token: "+T);switch(A[0]){case 1:r.push(T),p.push(w.yytext),t.push(w.yylloc),r.push(A[1]),T=null,W=w.yyleng,a=w.yytext,P=w.yylineno,$=w.yylloc;break;case 2:if(F=this.productions_[A[1]][1],V.$=p[p.length-F],V._$={first_line:t[t.length-(F||1)].first_line,last_line:t[t.length-1].last_line,first_column:t[t.length-(F||1)].first_column,last_column:t[t.length-1].last_column},Ce&&(V._$.range=[t[t.length-(F||1)].range[0],t[t.length-1].range[1]]),ee=this.performAction.apply(V,[a,W,P,M.yy,A[1],p,t].concat(ze)),typeof ee<"u")return ee;F&&(r=r.slice(0,-1*F*2),p=p.slice(0,-1*F),t=t.slice(0,-1*F)),r.push(this.productions_[A[1]][0]),p.push(V.$),t.push(V._$),ue=b[r[r.length-2]][r[r.length-1]],r.push(ue);break;case 3:return!0}}return!0},"parse")},k=function(){var N={EOF:1,parseError:u(function(s,r){if(this.yy.parser)this.yy.parser.parseError(s,r);else throw new Error(s)},"parseError"),setInput:u(function(c,s){return this.yy=s||this.yy||{},this._input=c,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:u(function(){var c=this._input[0];this.yytext+=c,this.yyleng++,this.offset++,this.match+=c,this.matched+=c;var s=c.match(/(?:\r\n?|\n).*/g);return s?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),c},"input"),unput:u(function(c){var s=c.length,r=c.split(/(?:\r\n?|\n)/g);this._input=c+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-s),this.offset-=s;var g=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),r.length-1&&(this.yylineno-=r.length-1);var p=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:r?(r.length===g.length?this.yylloc.first_column:0)+g[g.length-r.length].length-r[0].length:this.yylloc.first_column-s},this.options.ranges&&(this.yylloc.range=[p[0],p[0]+this.yyleng-s]),this.yyleng=this.yytext.length,this},"unput"),more:u(function(){return this._more=!0,this},"more"),reject:u(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:u(function(c){this.unput(this.match.slice(c))},"less"),pastInput:u(function(){var c=this.matched.substr(0,this.matched.length-this.match.length);return(c.length>20?"...":"")+c.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:u(function(){var c=this.match;return c.length<20&&(c+=this._input.substr(0,20-c.length)),(c.substr(0,20)+(c.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:u(function(){var c=this.pastInput(),s=new Array(c.length+1).join("-");return c+this.upcomingInput()+`
`+s+"^"},"showPosition"),test_match:u(function(c,s){var r,g,p;if(this.options.backtrack_lexer&&(p={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(p.yylloc.range=this.yylloc.range.slice(0))),g=c[0].match(/(?:\r\n?|\n).*/g),g&&(this.yylineno+=g.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:g?g[g.length-1].length-g[g.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+c[0].length},this.yytext+=c[0],this.match+=c[0],this.matches=c,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(c[0].length),this.matched+=c[0],r=this.performAction.call(this,this.yy,this,s,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),r)return r;if(this._backtrack){for(var t in p)this[t]=p[t];return!1}return!1},"test_match"),next:u(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var c,s,r,g;this._more||(this.yytext="",this.match="");for(var p=this._currentRules(),t=0;t<p.length;t++)if(r=this._input.match(this.rules[p[t]]),r&&(!s||r[0].length>s[0].length)){if(s=r,g=t,this.options.backtrack_lexer){if(c=this.test_match(r,p[t]),c!==!1)return c;if(this._backtrack){s=!1;continue}else return!1}else if(!this.options.flex)break}return s?(c=this.test_match(s,p[g]),c!==!1?c:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:u(function(){var s=this.next();return s||this.lex()},"lex"),begin:u(function(s){this.conditionStack.push(s)},"begin"),popState:u(function(){var s=this.conditionStack.length-1;return s>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:u(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:u(function(s){return s=this.conditionStack.length-1-Math.abs(s||0),s>=0?this.conditionStack[s]:"INITIAL"},"topState"),pushState:u(function(s){this.begin(s)},"pushState"),stateStackSize:u(function(){return this.conditionStack.length},"stateStackSize"),options:{},performAction:u(function(s,r,g,p){switch(g){case 0:return 10;case 1:return s.getLogger().debug("Found space-block"),31;case 2:return s.getLogger().debug("Found nl-block"),31;case 3:return s.getLogger().debug("Found space-block"),29;case 4:s.getLogger().debug(".",r.yytext);break;case 5:s.getLogger().debug("_",r.yytext);break;case 6:return 5;case 7:return r.yytext=-1,28;case 8:return r.yytext=r.yytext.replace(/columns\s+/,""),s.getLogger().debug("COLUMNS (LEX)",r.yytext),28;case 9:this.pushState("md_string");break;case 10:return"MD_STR";case 11:this.popState();break;case 12:this.pushState("string");break;case 13:s.getLogger().debug("LEX: POPPING STR:",r.yytext),this.popState();break;case 14:return s.getLogger().debug("LEX: STR end:",r.yytext),"STR";case 15:return r.yytext=r.yytext.replace(/space\:/,""),s.getLogger().debug("SPACE NUM (LEX)",r.yytext),21;case 16:return r.yytext="1",s.getLogger().debug("COLUMNS (LEX)",r.yytext),21;case 17:return 43;case 18:return"LINKSTYLE";case 19:return"INTERPOLATE";case 20:return this.pushState("CLASSDEF"),40;case 21:return this.popState(),this.pushState("CLASSDEFID"),"DEFAULT_CLASSDEF_ID";case 22:return this.popState(),this.pushState("CLASSDEFID"),41;case 23:return this.popState(),42;case 24:return this.pushState("CLASS"),44;case 25:return this.popState(),this.pushState("CLASS_STYLE"),45;case 26:return this.popState(),46;case 27:return this.pushState("STYLE_STMNT"),47;case 28:return this.popState(),this.pushState("STYLE_DEFINITION"),48;case 29:return this.popState(),49;case 30:return this.pushState("acc_title"),"acc_title";case 31:return this.popState(),"acc_title_value";case 32:return this.pushState("acc_descr"),"acc_descr";case 33:return this.popState(),"acc_descr_value";case 34:this.pushState("acc_descr_multiline");break;case 35:this.popState();break;case 36:return"acc_descr_multiline_value";case 37:return 30;case 38:return this.popState(),s.getLogger().debug("Lex: (("),"NODE_DEND";case 39:return this.popState(),s.getLogger().debug("Lex: (("),"NODE_DEND";case 40:return this.popState(),s.getLogger().debug("Lex: ))"),"NODE_DEND";case 41:return this.popState(),s.getLogger().debug("Lex: (("),"NODE_DEND";case 42:return this.popState(),s.getLogger().debug("Lex: (("),"NODE_DEND";case 43:return this.popState(),s.getLogger().debug("Lex: (-"),"NODE_DEND";case 44:return this.popState(),s.getLogger().debug("Lex: -)"),"NODE_DEND";case 45:return this.popState(),s.getLogger().debug("Lex: (("),"NODE_DEND";case 46:return this.popState(),s.getLogger().debug("Lex: ]]"),"NODE_DEND";case 47:return this.popState(),s.getLogger().debug("Lex: ("),"NODE_DEND";case 48:return this.popState(),s.getLogger().debug("Lex: ])"),"NODE_DEND";case 49:return this.popState(),s.getLogger().debug("Lex: /]"),"NODE_DEND";case 50:return this.popState(),s.getLogger().debug("Lex: /]"),"NODE_DEND";case 51:return this.popState(),s.getLogger().debug("Lex: )]"),"NODE_DEND";case 52:return this.popState(),s.getLogger().debug("Lex: )"),"NODE_DEND";case 53:return this.popState(),s.getLogger().debug("Lex: ]>"),"NODE_DEND";case 54:return this.popState(),s.getLogger().debug("Lex: ]"),"NODE_DEND";case 55:return s.getLogger().debug("Lexa: -)"),this.pushState("NODE"),36;case 56:return s.getLogger().debug("Lexa: (-"),this.pushState("NODE"),36;case 57:return s.getLogger().debug("Lexa: ))"),this.pushState("NODE"),36;case 58:return s.getLogger().debug("Lexa: )"),this.pushState("NODE"),36;case 59:return s.getLogger().debug("Lex: ((("),this.pushState("NODE"),36;case 60:return s.getLogger().debug("Lexa: )"),this.pushState("NODE"),36;case 61:return s.getLogger().debug("Lexa: )"),this.pushState("NODE"),36;case 62:return s.getLogger().debug("Lexa: )"),this.pushState("NODE"),36;case 63:return s.getLogger().debug("Lexc: >"),this.pushState("NODE"),36;case 64:return s.getLogger().debug("Lexa: (["),this.pushState("NODE"),36;case 65:return s.getLogger().debug("Lexa: )"),this.pushState("NODE"),36;case 66:return this.pushState("NODE"),36;case 67:return this.pushState("NODE"),36;case 68:return this.pushState("NODE"),36;case 69:return this.pushState("NODE"),36;case 70:return this.pushState("NODE"),36;case 71:return this.pushState("NODE"),36;case 72:return this.pushState("NODE"),36;case 73:return s.getLogger().debug("Lexa: ["),this.pushState("NODE"),36;case 74:return this.pushState("BLOCK_ARROW"),s.getLogger().debug("LEX ARR START"),38;case 75:return s.getLogger().debug("Lex: NODE_ID",r.yytext),32;case 76:return s.getLogger().debug("Lex: EOF",r.yytext),8;case 77:this.pushState("md_string");break;case 78:this.pushState("md_string");break;case 79:return"NODE_DESCR";case 80:this.popState();break;case 81:s.getLogger().debug("Lex: Starting string"),this.pushState("string");break;case 82:s.getLogger().debug("LEX ARR: Starting string"),this.pushState("string");break;case 83:return s.getLogger().debug("LEX: NODE_DESCR:",r.yytext),"NODE_DESCR";case 84:s.getLogger().debug("LEX POPPING"),this.popState();break;case 85:s.getLogger().debug("Lex: =>BAE"),this.pushState("ARROW_DIR");break;case 86:return r.yytext=r.yytext.replace(/^,\s*/,""),s.getLogger().debug("Lex (right): dir:",r.yytext),"DIR";case 87:return r.yytext=r.yytext.replace(/^,\s*/,""),s.getLogger().debug("Lex (left):",r.yytext),"DIR";case 88:return r.yytext=r.yytext.replace(/^,\s*/,""),s.getLogger().debug("Lex (x):",r.yytext),"DIR";case 89:return r.yytext=r.yytext.replace(/^,\s*/,""),s.getLogger().debug("Lex (y):",r.yytext),"DIR";case 90:return r.yytext=r.yytext.replace(/^,\s*/,""),s.getLogger().debug("Lex (up):",r.yytext),"DIR";case 91:return r.yytext=r.yytext.replace(/^,\s*/,""),s.getLogger().debug("Lex (down):",r.yytext),"DIR";case 92:return r.yytext="]>",s.getLogger().debug("Lex (ARROW_DIR end):",r.yytext),this.popState(),this.popState(),"BLOCK_ARROW_END";case 93:return s.getLogger().debug("Lex: LINK","#"+r.yytext+"#"),15;case 94:return s.getLogger().debug("Lex: LINK",r.yytext),15;case 95:return s.getLogger().debug("Lex: LINK",r.yytext),15;case 96:return s.getLogger().debug("Lex: LINK",r.yytext),15;case 97:return s.getLogger().debug("Lex: START_LINK",r.yytext),this.pushState("LLABEL"),16;case 98:return s.getLogger().debug("Lex: START_LINK",r.yytext),this.pushState("LLABEL"),16;case 99:return s.getLogger().debug("Lex: START_LINK",r.yytext),this.pushState("LLABEL"),16;case 100:this.pushState("md_string");break;case 101:return s.getLogger().debug("Lex: Starting string"),this.pushState("string"),"LINK_LABEL";case 102:return this.popState(),s.getLogger().debug("Lex: LINK","#"+r.yytext+"#"),15;case 103:return this.popState(),s.getLogger().debug("Lex: LINK",r.yytext),15;case 104:return this.popState(),s.getLogger().debug("Lex: LINK",r.yytext),15;case 105:return s.getLogger().debug("Lex: COLON",r.yytext),r.yytext=r.yytext.slice(1),27}},"anonymous"),rules:[/^(?:block-beta\b)/,/^(?:block\s+)/,/^(?:block\n+)/,/^(?:block:)/,/^(?:[\s]+)/,/^(?:[\n]+)/,/^(?:((\u000D\u000A)|(\u000A)))/,/^(?:columns\s+auto\b)/,/^(?:columns\s+[\d]+)/,/^(?:["][`])/,/^(?:[^`"]+)/,/^(?:[`]["])/,/^(?:["])/,/^(?:["])/,/^(?:[^"]*)/,/^(?:space[:]\d+)/,/^(?:space\b)/,/^(?:default\b)/,/^(?:linkStyle\b)/,/^(?:interpolate\b)/,/^(?:classDef\s+)/,/^(?:DEFAULT\s+)/,/^(?:\w+\s+)/,/^(?:[^\n]*)/,/^(?:class\s+)/,/^(?:(\w+)+((,\s*\w+)*))/,/^(?:[^\n]*)/,/^(?:style\s+)/,/^(?:(\w+)+((,\s*\w+)*))/,/^(?:[^\n]*)/,/^(?:accTitle\s*:\s*)/,/^(?:(?!\n||)*[^\n]*)/,/^(?:accDescr\s*:\s*)/,/^(?:(?!\n||)*[^\n]*)/,/^(?:accDescr\s*\{\s*)/,/^(?:[\}])/,/^(?:[^\}]*)/,/^(?:end\b\s*)/,/^(?:\(\(\()/,/^(?:\)\)\))/,/^(?:[\)]\))/,/^(?:\}\})/,/^(?:\})/,/^(?:\(-)/,/^(?:-\))/,/^(?:\(\()/,/^(?:\]\])/,/^(?:\()/,/^(?:\]\))/,/^(?:\\\])/,/^(?:\/\])/,/^(?:\)\])/,/^(?:[\)])/,/^(?:\]>)/,/^(?:[\]])/,/^(?:-\))/,/^(?:\(-)/,/^(?:\)\))/,/^(?:\))/,/^(?:\(\(\()/,/^(?:\(\()/,/^(?:\{\{)/,/^(?:\{)/,/^(?:>)/,/^(?:\(\[)/,/^(?:\()/,/^(?:\[\[)/,/^(?:\[\|)/,/^(?:\[\()/,/^(?:\)\)\))/,/^(?:\[\\)/,/^(?:\[\/)/,/^(?:\[\\)/,/^(?:\[)/,/^(?:<\[)/,/^(?:[^\(\[\n\-\)\{\}\s\<\>:]+)/,/^(?:$)/,/^(?:["][`])/,/^(?:["][`])/,/^(?:[^`"]+)/,/^(?:[`]["])/,/^(?:["])/,/^(?:["])/,/^(?:[^"]+)/,/^(?:["])/,/^(?:\]>\s*\()/,/^(?:,?\s*right\s*)/,/^(?:,?\s*left\s*)/,/^(?:,?\s*x\s*)/,/^(?:,?\s*y\s*)/,/^(?:,?\s*up\s*)/,/^(?:,?\s*down\s*)/,/^(?:\)\s*)/,/^(?:\s*[xo<]?--+[-xo>]\s*)/,/^(?:\s*[xo<]?==+[=xo>]\s*)/,/^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/,/^(?:\s*~~[\~]+\s*)/,/^(?:\s*[xo<]?--\s*)/,/^(?:\s*[xo<]?==\s*)/,/^(?:\s*[xo<]?-\.\s*)/,/^(?:["][`])/,/^(?:["])/,/^(?:\s*[xo<]?--+[-xo>]\s*)/,/^(?:\s*[xo<]?==+[=xo>]\s*)/,/^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/,/^(?::\d+)/],conditions:{STYLE_DEFINITION:{rules:[29],inclusive:!1},STYLE_STMNT:{rules:[28],inclusive:!1},CLASSDEFID:{rules:[23],inclusive:!1},CLASSDEF:{rules:[21,22],inclusive:!1},CLASS_STYLE:{rules:[26],inclusive:!1},CLASS:{rules:[25],inclusive:!1},LLABEL:{rules:[100,101,102,103,104],inclusive:!1},ARROW_DIR:{rules:[86,87,88,89,90,91,92],inclusive:!1},BLOCK_ARROW:{rules:[77,82,85],inclusive:!1},NODE:{rules:[38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,78,81],inclusive:!1},md_string:{rules:[10,11,79,80],inclusive:!1},space:{rules:[],inclusive:!1},string:{rules:[13,14,83,84],inclusive:!1},acc_descr_multiline:{rules:[35,36],inclusive:!1},acc_descr:{rules:[33],inclusive:!1},acc_title:{rules:[31],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,12,15,16,17,18,19,20,24,27,30,32,34,37,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,93,94,95,96,97,98,99,105],inclusive:!0}}};return N}();E.lexer=k;function v(){this.yy={}}return u(v,"Parser"),v.prototype=E,E.Parser=v,new v}();se.parser=se;var Ge=se,R=new Map,ae=[],re=new Map,ge="color",de="fill",He="bgFill",be=",",qe=Le(),q=new Map,Je=u(e=>je.sanitizeText(e,qe),"sanitizeText"),Ze=u(function(e,l=""){let h=q.get(e);h||(h={id:e,styles:[],textStyles:[]},q.set(e,h)),l!=null&&l.split(be).forEach(n=>{const i=n.replace(/([^;]*);/,"$1").trim();if(RegExp(ge).exec(n)){const o=i.replace(de,He).replace(ge,de);h.textStyles.push(o)}h.styles.push(i)})},"addStyleClass"),Qe=u(function(e,l=""){const h=R.get(e);l!=null&&(h.styles=l.split(be))},"addStyle2Node"),$e=u(function(e,l){e.split(",").forEach(function(h){let n=R.get(h);if(n===void 0){const i=h.trim();n={id:i,type:"na",children:[]},R.set(i,n)}n.classes||(n.classes=[]),n.classes.push(l)})},"setCssClass"),me=u((e,l)=>{const h=e.flat(),n=[];for(const i of h){if(i.label&&(i.label=Je(i.label)),i.type==="classDef"){Ze(i.id,i.css);continue}if(i.type==="applyClass"){$e(i.id,(i==null?void 0:i.styleClass)??"");continue}if(i.type==="applyStyles"){i!=null&&i.stylesStr&&Qe(i.id,i==null?void 0:i.stylesStr);continue}if(i.type==="column-setting")l.columns=i.columns??-1;else if(i.type==="edge"){const d=(re.get(i.id)??0)+1;re.set(i.id,d),i.id=d+"-"+i.id,ae.push(i)}else{i.label||(i.type==="composite"?i.label="":i.label=i.id);const d=R.get(i.id);if(d===void 0?R.set(i.id,i):(i.type!=="na"&&(d.type=i.type),i.label!==i.id&&(d.label=i.label)),i.children&&me(i.children,i),i.type==="space"){const o=i.width??1;for(let f=0;f<o;f++){const S=Ve(i);S.id=S.id+"-"+f,R.set(S.id,S),n.push(S)}}else d===void 0&&n.push(i)}}l.children=n},"populateBlockDatabase"),ne=[],j={id:"root",type:"composite",children:[],columns:-1},et=u(()=>{L.debug("Clear called"),Ye(),j={id:"root",type:"composite",children:[],columns:-1},R=new Map([["root",j]]),ne=[],q=new Map,ae=[],re=new Map},"clear");function ye(e){switch(L.debug("typeStr2Type",e),e){case"[]":return"square";case"()":return L.debug("we have a round"),"round";case"(())":return"circle";case">]":return"rect_left_inv_arrow";case"{}":return"diamond";case"{{}}":return"hexagon";case"([])":return"stadium";case"[[]]":return"subroutine";case"[()]":return"cylinder";case"((()))":return"doublecircle";case"[//]":return"lean_right";case"[\\\\]":return"lean_left";case"[/\\]":return"trapezoid";case"[\\/]":return"inv_trapezoid";case"<[]>":return"block_arrow";default:return"na"}}u(ye,"typeStr2Type");function Ee(e){switch(L.debug("typeStr2Type",e),e){case"==":return"thick";default:return"normal"}}u(Ee,"edgeTypeStr2Type");function _e(e){switch(e.trim()){case"--x":return"arrow_cross";case"--o":return"arrow_circle";default:return"arrow_point"}}u(_e,"edgeStrToEdgeData");var pe=0,tt=u(()=>(pe++,"id-"+Math.random().toString(36).substr(2,12)+"-"+pe),"generateId"),st=u(e=>{j.children=e,me(e,j),ne=j.children},"setHierarchy"),rt=u(e=>{const l=R.get(e);return l?l.columns?l.columns:l.children?l.children.length:-1:-1},"getColumns"),it=u(()=>[...R.values()],"getBlocksFlat"),at=u(()=>ne||[],"getBlocks"),nt=u(()=>ae,"getEdges"),ot=u(e=>R.get(e),"getBlock"),lt=u(e=>{R.set(e.id,e)},"setBlock"),ct=u(()=>console,"getLogger"),ht=u(function(){return q},"getClasses"),ut={getConfig:u(()=>ie().block,"getConfig"),typeStr2Type:ye,edgeTypeStr2Type:Ee,edgeStrToEdgeData:_e,getLogger:ct,getBlocksFlat:it,getBlocks:at,getEdges:nt,setHierarchy:st,getBlock:ot,setBlock:lt,getColumns:rt,getClasses:ht,clear:et,generateId:tt},gt=ut,H=u((e,l)=>{const h=Xe,n=h(e,"r"),i=h(e,"g"),d=h(e,"b");return We(n,i,d,l)},"fade"),dt=u(e=>`.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor||e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }



  .label text,span,p {
    fill: ${e.nodeTextColor||e.textColor};
    color: ${e.nodeTextColor||e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${H(e.edgeLabelBackground,.5)};
    // background-color:
  }

  .node .cluster {
    // fill: ${H(e.mainBkg,.5)};
    fill: ${H(e.clusterBkg,.5)};
    stroke: ${H(e.clusterBorder,.2)};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span,p {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
`,"getStyles"),pt=dt,fe,Se,y=((Se=(fe=Le())==null?void 0:fe.block)==null?void 0:Se.padding)??8;function we(e,l){if(e===0||!Number.isInteger(e))throw new Error("Columns must be an integer !== 0.");if(l<0||!Number.isInteger(l))throw new Error("Position must be a non-negative integer."+l);if(e<0)return{px:l,py:0};if(e===1)return{px:0,py:l};const h=l%e,n=Math.floor(l/e);return{px:h,py:n}}u(we,"calculateBlockPosition");var ft=u(e=>{let l=0,h=0;for(const n of e.children){const{width:i,height:d,x:o,y:f}=n.size??{width:0,height:0,x:0,y:0};L.debug("getMaxChildSize abc95 child:",n.id,"width:",i,"height:",d,"x:",o,"y:",f,n.type),n.type!=="space"&&(i>l&&(l=i/(e.widthInColumns??1)),d>h&&(h=d))}return{width:l,height:h}},"getMaxChildSize");function J(e,l,h=0,n=0){var o,f,S,m,x,_,O,I,D,C,E;L.debug("setBlockSizes abc95 (start)",e.id,(o=e==null?void 0:e.size)==null?void 0:o.x,"block width =",e==null?void 0:e.size,"sieblingWidth",h),(f=e==null?void 0:e.size)!=null&&f.width||(e.size={width:h,height:n,x:0,y:0});let i=0,d=0;if(((S=e.children)==null?void 0:S.length)>0){for(const p of e.children)J(p,l);const k=ft(e);i=k.width,d=k.height,L.debug("setBlockSizes abc95 maxWidth of",e.id,":s children is ",i,d);for(const p of e.children)p.size&&(L.debug(`abc95 Setting size of children of ${e.id} id=${p.id} ${i} ${d} ${JSON.stringify(p.size)}`),p.size.width=i*(p.widthInColumns??1)+y*((p.widthInColumns??1)-1),p.size.height=d,p.size.x=0,p.size.y=0,L.debug(`abc95 updating size of ${e.id} children child:${p.id} maxWidth:${i} maxHeight:${d}`));for(const p of e.children)J(p,l,i,d);const v=e.columns??-1;let N=0;for(const p of e.children)N+=p.widthInColumns??1;let c=e.children.length;v>0&&v<N&&(c=v);const s=Math.ceil(N/c);let r=c*(i+y)+y,g=s*(d+y)+y;if(r<h){L.debug(`Detected to small siebling: abc95 ${e.id} sieblingWidth ${h} sieblingHeight ${n} width ${r}`),r=h,g=n;const p=(h-c*y-y)/c,t=(n-s*y-y)/s;L.debug("Size indata abc88",e.id,"childWidth",p,"maxWidth",i),L.debug("Size indata abc88",e.id,"childHeight",t,"maxHeight",d),L.debug("Size indata abc88 xSize",c,"padding",y);for(const b of e.children)b.size&&(b.size.width=p,b.size.height=t,b.size.x=0,b.size.y=0)}if(L.debug(`abc95 (finale calc) ${e.id} xSize ${c} ySize ${s} columns ${v}${e.children.length} width=${Math.max(r,((m=e.size)==null?void 0:m.width)||0)}`),r<(((x=e==null?void 0:e.size)==null?void 0:x.width)||0)){r=((_=e==null?void 0:e.size)==null?void 0:_.width)||0;const p=v>0?Math.min(e.children.length,v):e.children.length;if(p>0){const t=(r-p*y-y)/p;L.debug("abc95 (growing to fit) width",e.id,r,(O=e.size)==null?void 0:O.width,t);for(const b of e.children)b.size&&(b.size.width=t)}}e.size={width:r,height:g,x:0,y:0}}L.debug("setBlockSizes abc94 (done)",e.id,(I=e==null?void 0:e.size)==null?void 0:I.x,(D=e==null?void 0:e.size)==null?void 0:D.width,(C=e==null?void 0:e.size)==null?void 0:C.y,(E=e==null?void 0:e.size)==null?void 0:E.height)}u(J,"setBlockSizes");function oe(e,l){var n,i,d,o,f,S,m,x,_,O,I,D,C,E,k,v,N;L.debug(`abc85 layout blocks (=>layoutBlocks) ${e.id} x: ${(n=e==null?void 0:e.size)==null?void 0:n.x} y: ${(i=e==null?void 0:e.size)==null?void 0:i.y} width: ${(d=e==null?void 0:e.size)==null?void 0:d.width}`);const h=e.columns??-1;if(L.debug("layoutBlocks columns abc95",e.id,"=>",h,e),e.children&&e.children.length>0){const c=((f=(o=e==null?void 0:e.children[0])==null?void 0:o.size)==null?void 0:f.width)??0,s=e.children.length*c+(e.children.length-1)*y;L.debug("widthOfChildren 88",s,"posX");let r=0;L.debug("abc91 block?.size?.x",e.id,(S=e==null?void 0:e.size)==null?void 0:S.x);let g=(m=e==null?void 0:e.size)!=null&&m.x?((x=e==null?void 0:e.size)==null?void 0:x.x)+(-((_=e==null?void 0:e.size)==null?void 0:_.width)/2||0):-y,p=0;for(const t of e.children){const b=e;if(!t.size)continue;const{width:a,height:P}=t.size,{px:W,py:K}=we(h,r);if(K!=p&&(p=K,g=(O=e==null?void 0:e.size)!=null&&O.x?((I=e==null?void 0:e.size)==null?void 0:I.x)+(-((D=e==null?void 0:e.size)==null?void 0:D.width)/2||0):-y,L.debug("New row in layout for block",e.id," and child ",t.id,p)),L.debug(`abc89 layout blocks (child) id: ${t.id} Pos: ${r} (px, py) ${W},${K} (${(C=b==null?void 0:b.size)==null?void 0:C.x},${(E=b==null?void 0:b.size)==null?void 0:E.y}) parent: ${b.id} width: ${a}${y}`),b.size){const B=a/2;t.size.x=g+y+B,L.debug(`abc91 layout blocks (calc) px, pyid:${t.id} startingPos=X${g} new startingPosX${t.size.x} ${B} padding=${y} width=${a} halfWidth=${B} => x:${t.size.x} y:${t.size.y} ${t.widthInColumns} (width * (child?.w || 1)) / 2 ${a*((t==null?void 0:t.widthInColumns)??1)/2}`),g=t.size.x+B,t.size.y=b.size.y-b.size.height/2+K*(P+y)+P/2+y,L.debug(`abc88 layout blocks (calc) px, pyid:${t.id}startingPosX${g}${y}${B}=>x:${t.size.x}y:${t.size.y}${t.widthInColumns}(width * (child?.w || 1)) / 2${a*((t==null?void 0:t.widthInColumns)??1)/2}`)}t.children&&oe(t),r+=(t==null?void 0:t.widthInColumns)??1,L.debug("abc88 columnsPos",t,r)}}L.debug(`layout blocks (<==layoutBlocks) ${e.id} x: ${(k=e==null?void 0:e.size)==null?void 0:k.x} y: ${(v=e==null?void 0:e.size)==null?void 0:v.y} width: ${(N=e==null?void 0:e.size)==null?void 0:N.width}`)}u(oe,"layoutBlocks");function le(e,{minX:l,minY:h,maxX:n,maxY:i}={minX:0,minY:0,maxX:0,maxY:0}){if(e.size&&e.id!=="root"){const{x:d,y:o,width:f,height:S}=e.size;d-f/2<l&&(l=d-f/2),o-S/2<h&&(h=o-S/2),d+f/2>n&&(n=d+f/2),o+S/2>i&&(i=o+S/2)}if(e.children)for(const d of e.children)({minX:l,minY:h,maxX:n,maxY:i}=le(d,{minX:l,minY:h,maxX:n,maxY:i}));return{minX:l,minY:h,maxX:n,maxY:i}}u(le,"findBounds");function De(e){const l=e.getBlock("root");if(!l)return;J(l,e,0,0),oe(l),L.debug("getBlocks",JSON.stringify(l,null,2));const{minX:h,minY:n,maxX:i,maxY:d}=le(l),o=d-n,f=i-h;return{x:h,y:n,width:f,height:o}}u(De,"layout");function ce(e,l,h=!1){var O,I,D;const n=e;let i="default";(((O=n==null?void 0:n.classes)==null?void 0:O.length)||0)>0&&(i=((n==null?void 0:n.classes)??[]).join(" ")),i=i+" flowchart-label";let d=0,o="",f;switch(n.type){case"round":d=5,o="rect";break;case"composite":d=0,o="composite",f=0;break;case"square":o="rect";break;case"diamond":o="question";break;case"hexagon":o="hexagon";break;case"block_arrow":o="block_arrow";break;case"odd":o="rect_left_inv_arrow";break;case"lean_right":o="lean_right";break;case"lean_left":o="lean_left";break;case"trapezoid":o="trapezoid";break;case"inv_trapezoid":o="inv_trapezoid";break;case"rect_left_inv_arrow":o="rect_left_inv_arrow";break;case"circle":o="circle";break;case"ellipse":o="ellipse";break;case"stadium":o="stadium";break;case"subroutine":o="subroutine";break;case"cylinder":o="cylinder";break;case"group":o="rect";break;case"doublecircle":o="doublecircle";break;default:o="rect"}const S=Ke((n==null?void 0:n.styles)??[]),m=n.label,x=n.size??{width:0,height:0,x:0,y:0};return{labelStyle:S.labelStyle,shape:o,labelText:m,rx:d,ry:d,class:i,style:S.style,id:n.id,directions:n.directions,width:x.width,height:x.height,x:x.x,y:x.y,positioned:h,intersect:void 0,type:n.type,padding:f??((D=(I=ie())==null?void 0:I.block)==null?void 0:D.padding)??0}}u(ce,"getNodeFromBlock");async function Ne(e,l,h){const n=ce(l,h,!1);if(n.type==="group")return;const i=await xe(e,n),d=i.node().getBBox(),o=h.getBlock(n.id);o.size={width:d.width,height:d.height,x:0,y:0,node:i},h.setBlock(o),i.remove()}u(Ne,"calculateBlockSize");async function ve(e,l,h){const n=ce(l,h,!0);h.getBlock(n.id).type!=="space"&&(await xe(e,n),l.intersect=n==null?void 0:n.intersect,Fe(n))}u(ve,"insertBlockPositioned");async function Z(e,l,h,n){for(const i of l)await n(e,i,h),i.children&&await Z(e,i.children,h,n)}u(Z,"performOperations");async function Ie(e,l,h){await Z(e,l,h,Ne)}u(Ie,"calculateBlockSizes");async function Te(e,l,h){await Z(e,l,h,ve)}u(Te,"insertBlocks");async function Oe(e,l,h,n,i){const d=new Ue({multigraph:!0,compound:!0});d.setGraph({rankdir:"TB",nodesep:10,ranksep:10,marginx:8,marginy:8});for(const o of h)o.size&&d.setNode(o.id,{width:o.size.width,height:o.size.height,intersect:o.intersect});for(const o of l)if(o.start&&o.end){const f=n.getBlock(o.start),S=n.getBlock(o.end);if(f!=null&&f.size&&(S!=null&&S.size)){const m=f.size,x=S.size,_=[{x:m.x,y:m.y},{x:m.x+(x.x-m.x)/2,y:m.y+(x.y-m.y)/2},{x:x.x,y:x.y}];Re(e,{v:o.start,w:o.end,name:o.id},{...o,arrowTypeEnd:o.arrowTypeEnd,arrowTypeStart:o.arrowTypeStart,points:_,classes:"edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1"},void 0,"block",d,i),o.label&&(await Be(e,{...o,label:o.label,labelStyle:"stroke: #333; stroke-width: 1.5px;fill:none;",arrowTypeEnd:o.arrowTypeEnd,arrowTypeStart:o.arrowTypeStart,points:_,classes:"edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1"}),ke({...o,x:_[1].x,y:_[1].y},{originalPath:_}))}}}u(Oe,"insertEdges");var St=u(function(e,l){return l.db.getClasses()},"getClasses"),xt=u(async function(e,l,h,n){const{securityLevel:i,block:d}=ie(),o=n.db;let f;i==="sandbox"&&(f=G("#i"+l));const S=i==="sandbox"?G(f.nodes()[0].contentDocument.body):G("body"),m=i==="sandbox"?S.select(`[id="${l}"]`):G(`[id="${l}"]`);Pe(m,["point","circle","cross"],n.type,l);const _=o.getBlocks(),O=o.getBlocksFlat(),I=o.getEdges(),D=m.insert("g").attr("class","block");await Ie(D,_,o);const C=De(o);if(await Te(D,_,o),await Oe(D,I,O,o,l),C){const E=C,k=Math.max(1,Math.round(.125*(E.width/E.height))),v=E.height+k+10,N=E.width+10,{useMaxWidth:c}=d;Me(m,v,N,!!c),L.debug("Here Bounds",C,E),m.attr("viewBox",`${E.x-5} ${E.y-5} ${E.width+10} ${E.height+10}`)}},"draw"),Lt={draw:xt,getClasses:St},Dt={parser:Ge,db:gt,renderer:Lt,styles:pt};export{Dt as diagram};
