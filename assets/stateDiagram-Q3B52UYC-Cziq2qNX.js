import{s as W,a as N,b as P}from"./chunk-W3SRJFPQ-B1vxxwVv.js";import{_ as u,d as t,j as H,l as S,k as C,e as z,H as U,M as F,u as O}from"./index-BpCi-oQw.js";import"./chunk-GWHMDDHB-DTD9yf2g.js";import{G as J}from"./graph-CECcNzMr.js";import{l as X}from"./layout-CtXRRQGm.js";import"./chunk-WZBIATSK-TcPZofTu.js";import"./_baseUniq-B2uRNG0U.js";import"./min-DlRYCFKG.js";var L={},D=u((e,i)=>{L[e]=i},"set"),Y=u(e=>L[e],"get"),G=u(()=>Object.keys(L),"keys"),I=u(()=>G().length,"size"),$={get:Y,set:D,keys:G,size:I},j=u(e=>e.append("circle").attr("class","start-state").attr("r",t().state.sizeUnit).attr("cx",t().state.padding+t().state.sizeUnit).attr("cy",t().state.padding+t().state.sizeUnit),"drawStartState"),q=u(e=>e.append("line").style("stroke","grey").style("stroke-dasharray","3").attr("x1",t().state.textHeight).attr("class","divider").attr("x2",t().state.textHeight*2).attr("y1",0).attr("y2",0),"drawDivider"),Z=u((e,i)=>{const d=e.append("text").attr("x",2*t().state.padding).attr("y",t().state.textHeight+2*t().state.padding).attr("font-size",t().state.fontSize).attr("class","state-title").text(i.id),o=d.node().getBBox();return e.insert("rect",":first-child").attr("x",t().state.padding).attr("y",t().state.padding).attr("width",o.width+2*t().state.padding).attr("height",o.height+2*t().state.padding).attr("rx",t().state.radius),d},"drawSimpleState"),K=u((e,i)=>{const d=u(function(l,B,m){const k=l.append("tspan").attr("x",2*t().state.padding).text(B);m||k.attr("dy",t().state.textHeight)},"addTspan"),n=e.append("text").attr("x",2*t().state.padding).attr("y",t().state.textHeight+1.3*t().state.padding).attr("font-size",t().state.fontSize).attr("class","state-title").text(i.descriptions[0]).node().getBBox(),g=n.height,p=e.append("text").attr("x",t().state.padding).attr("y",g+t().state.padding*.4+t().state.dividerMargin+t().state.textHeight).attr("class","state-description");let a=!0,s=!0;i.descriptions.forEach(function(l){a||(d(p,l,s),s=!1),a=!1});const y=e.append("line").attr("x1",t().state.padding).attr("y1",t().state.padding+g+t().state.dividerMargin/2).attr("y2",t().state.padding+g+t().state.dividerMargin/2).attr("class","descr-divider"),x=p.node().getBBox(),c=Math.max(x.width,n.width);return y.attr("x2",c+3*t().state.padding),e.insert("rect",":first-child").attr("x",t().state.padding).attr("y",t().state.padding).attr("width",c+2*t().state.padding).attr("height",x.height+g+2*t().state.padding).attr("rx",t().state.radius),e},"drawDescrState"),Q=u((e,i,d)=>{const o=t().state.padding,n=2*t().state.padding,g=e.node().getBBox(),p=g.width,a=g.x,s=e.append("text").attr("x",0).attr("y",t().state.titleShift).attr("font-size",t().state.fontSize).attr("class","state-title").text(i.id),x=s.node().getBBox().width+n;let c=Math.max(x,p);c===p&&(c=c+n);let l;const B=e.node().getBBox();i.doc,l=a-o,x>p&&(l=(p-c)/2+o),Math.abs(a-B.x)<o&&x>p&&(l=a-(x-p)/2);const m=1-t().state.textHeight;return e.insert("rect",":first-child").attr("x",l).attr("y",m).attr("class",d?"alt-composit":"composit").attr("width",c).attr("height",B.height+t().state.textHeight+t().state.titleShift+1).attr("rx","0"),s.attr("x",l+o),x<=p&&s.attr("x",a+(c-n)/2-x/2+o),e.insert("rect",":first-child").attr("x",l).attr("y",t().state.titleShift-t().state.textHeight-t().state.padding).attr("width",c).attr("height",t().state.textHeight*3).attr("rx",t().state.radius),e.insert("rect",":first-child").attr("x",l).attr("y",t().state.titleShift-t().state.textHeight-t().state.padding).attr("width",c).attr("height",B.height+3+2*t().state.textHeight).attr("rx",t().state.radius),e},"addTitleAndBox"),V=u(e=>(e.append("circle").attr("class","end-state-outer").attr("r",t().state.sizeUnit+t().state.miniPadding).attr("cx",t().state.padding+t().state.sizeUnit+t().state.miniPadding).attr("cy",t().state.padding+t().state.sizeUnit+t().state.miniPadding),e.append("circle").attr("class","end-state-inner").attr("r",t().state.sizeUnit).attr("cx",t().state.padding+t().state.sizeUnit+2).attr("cy",t().state.padding+t().state.sizeUnit+2)),"drawEndState"),tt=u((e,i)=>{let d=t().state.forkWidth,o=t().state.forkHeight;if(i.parentId){let n=d;d=o,o=n}return e.append("rect").style("stroke","black").style("fill","black").attr("width",d).attr("height",o).attr("x",t().state.padding).attr("y",t().state.padding)},"drawForkJoinState"),et=u((e,i,d,o)=>{let n=0;const g=o.append("text");g.style("text-anchor","start"),g.attr("class","noteText");let p=e.replace(/\r\n/g,"<br/>");p=p.replace(/\n/g,"<br/>");const a=p.split(z.lineBreakRegex);let s=1.25*t().state.noteMargin;for(const y of a){const x=y.trim();if(x.length>0){const c=g.append("tspan");if(c.text(x),s===0){const l=c.node().getBBox();s+=l.height}n+=s,c.attr("x",i+t().state.noteMargin),c.attr("y",d+n+1.25*t().state.noteMargin)}}return{textWidth:g.node().getBBox().width,textHeight:n}},"_drawLongText"),at=u((e,i)=>{i.attr("class","state-note");const d=i.append("rect").attr("x",0).attr("y",t().state.padding),o=i.append("g"),{textWidth:n,textHeight:g}=et(e,0,0,o);return d.attr("height",g+2*t().state.noteMargin),d.attr("width",n+t().state.noteMargin*2),d},"drawNote"),_=u(function(e,i){const d=i.id,o={id:d,label:i.id,width:0,height:0},n=e.append("g").attr("id",d).attr("class","stateGroup");i.type==="start"&&j(n),i.type==="end"&&V(n),(i.type==="fork"||i.type==="join")&&tt(n,i),i.type==="note"&&at(i.note.text,n),i.type==="divider"&&q(n),i.type==="default"&&i.descriptions.length===0&&Z(n,i),i.type==="default"&&i.descriptions.length>0&&K(n,i);const g=n.node().getBBox();return o.width=g.width+2*t().state.padding,o.height=g.height+2*t().state.padding,$.set(d,o),o},"drawState"),A=0,it=u(function(e,i,d){const o=u(function(s){switch(s){case N.relationType.AGGREGATION:return"aggregation";case N.relationType.EXTENSION:return"extension";case N.relationType.COMPOSITION:return"composition";case N.relationType.DEPENDENCY:return"dependency"}},"getRelationType");i.points=i.points.filter(s=>!Number.isNaN(s.y));const n=i.points,g=U().x(function(s){return s.x}).y(function(s){return s.y}).curve(F),p=e.append("path").attr("d",g(n)).attr("id","edge"+A).attr("class","transition");let a="";if(t().state.arrowMarkerAbsolute&&(a=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,a=a.replace(/\(/g,"\\("),a=a.replace(/\)/g,"\\)")),p.attr("marker-end","url("+a+"#"+o(N.relationType.DEPENDENCY)+"End)"),d.title!==void 0){const s=e.append("g").attr("class","stateLabel"),{x:y,y:x}=O.calcLabelPosition(i.points),c=z.getRows(d.title);let l=0;const B=[];let m=0,k=0;for(let f=0;f<=c.length;f++){const h=s.append("text").attr("text-anchor","middle").text(c[f]).attr("x",y).attr("y",x+l),w=h.node().getBBox();m=Math.max(m,w.width),k=Math.min(k,w.x),S.info(w.x,y,x+l),l===0&&(l=h.node().getBBox().height,S.info("Title height",l,x)),B.push(h)}let E=l*c.length;if(c.length>1){const f=(c.length-1)*l*.5;B.forEach((h,w)=>h.attr("y",x+w*l-f)),E=l*c.length}const r=s.node().getBBox();s.insert("rect",":first-child").attr("class","box").attr("x",y-m/2-t().state.padding/2).attr("y",x-E/2-t().state.padding/2-3.5).attr("width",m+t().state.padding).attr("height",E+t().state.padding),S.info(r)}A++},"drawEdge"),b,T={},rt=u(function(){},"setConf"),nt=u(function(e){e.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")},"insertMarkers"),st=u(function(e,i,d,o){b=t().state;const n=t().securityLevel;let g;n==="sandbox"&&(g=H("#i"+i));const p=n==="sandbox"?H(g.nodes()[0].contentDocument.body):H("body"),a=n==="sandbox"?g.nodes()[0].contentDocument:document;S.debug("Rendering diagram "+e);const s=p.select(`[id='${i}']`);nt(s);const y=o.db.getRootDoc();R(y,s,void 0,!1,p,a,o);const x=b.padding,c=s.node().getBBox(),l=c.width+x*2,B=c.height+x*2,m=l*1.75;C(s,B,m,b.useMaxWidth),s.attr("viewBox",`${c.x-b.padding}  ${c.y-b.padding} `+l+" "+B)},"draw"),dt=u(e=>e?e.length*b.fontSizeFactor:1,"getLabelWidth"),R=u((e,i,d,o,n,g,p)=>{const a=new J({compound:!0,multigraph:!0});let s,y=!0;for(s=0;s<e.length;s++)if(e[s].stmt==="relation"){y=!1;break}d?a.setGraph({rankdir:"LR",multigraph:!0,compound:!0,ranker:"tight-tree",ranksep:y?1:b.edgeLengthFactor,nodeSep:y?1:50,isMultiGraph:!0}):a.setGraph({rankdir:"TB",multigraph:!0,compound:!0,ranksep:y?1:b.edgeLengthFactor,nodeSep:y?1:50,ranker:"tight-tree",isMultiGraph:!0}),a.setDefaultEdgeLabel(function(){return{}}),p.db.extract(e);const x=p.db.getStates(),c=p.db.getRelations(),l=Object.keys(x);for(const r of l){const f=x[r];d&&(f.parentId=d);let h;if(f.doc){let w=i.append("g").attr("id",f.id).attr("class","stateGroup");h=R(f.doc,w,f.id,!o,n,g,p);{w=Q(w,f,o);let v=w.node().getBBox();h.width=v.width,h.height=v.height+b.padding/2,T[f.id]={y:b.compositTitleSize}}}else h=_(i,f,a);if(f.note){const w={descriptions:[],id:f.id+"-note",note:f.note,type:"note"},v=_(i,w,a);f.note.position==="left of"?(a.setNode(h.id+"-note",v),a.setNode(h.id,h)):(a.setNode(h.id,h),a.setNode(h.id+"-note",v)),a.setParent(h.id,h.id+"-group"),a.setParent(h.id+"-note",h.id+"-group")}else a.setNode(h.id,h)}S.debug("Count=",a.nodeCount(),a);let B=0;c.forEach(function(r){B++,S.debug("Setting edge",r),a.setEdge(r.id1,r.id2,{relation:r,width:dt(r.title),height:b.labelHeight*z.getRows(r.title).length,labelpos:"c"},"id"+B)}),X(a),S.debug("Graph after layout",a.nodes());const m=i.node();a.nodes().forEach(function(r){r!==void 0&&a.node(r)!==void 0?(S.warn("Node "+r+": "+JSON.stringify(a.node(r))),n.select("#"+m.id+" #"+r).attr("transform","translate("+(a.node(r).x-a.node(r).width/2)+","+(a.node(r).y+(T[r]?T[r].y:0)-a.node(r).height/2)+" )"),n.select("#"+m.id+" #"+r).attr("data-x-shift",a.node(r).x-a.node(r).width/2),g.querySelectorAll("#"+m.id+" #"+r+" .divider").forEach(h=>{const w=h.parentElement;let v=0,M=0;w&&(w.parentElement&&(v=w.parentElement.getBBox().width),M=parseInt(w.getAttribute("data-x-shift"),10),Number.isNaN(M)&&(M=0)),h.setAttribute("x1",0-M+8),h.setAttribute("x2",v-M-8)})):S.debug("No Node "+r+": "+JSON.stringify(a.node(r)))});let k=m.getBBox();a.edges().forEach(function(r){r!==void 0&&a.edge(r)!==void 0&&(S.debug("Edge "+r.v+" -> "+r.w+": "+JSON.stringify(a.edge(r))),it(i,a.edge(r),a.edge(r).relation))}),k=m.getBBox();const E={id:d||"root",label:d||"root",width:0,height:0};return E.width=k.width+2*b.padding,E.height=k.height+2*b.padding,S.debug("Doc rendered",E,a),E},"renderDoc"),ot={setConf:rt,draw:st},wt={parser:W,db:N,renderer:ot,styles:P,init:u(e=>{e.state||(e.state={}),e.state.arrowMarkerAbsolute=e.arrowMarkerAbsolute,N.clear()},"init")};export{wt as diagram};
