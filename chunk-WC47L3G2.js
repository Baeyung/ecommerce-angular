import{a as ne,b as ae}from"./chunk-ZSZ6P7UY.js";import{a as Ie,b as Se}from"./chunk-NOTYH2BA.js";import"./chunk-BIOUTSML.js";import{a as Te,b as Ce}from"./chunk-VO4MWR3R.js";import{d as ge,e as ve,f as xe,g as ie}from"./chunk-JBDDYREW.js";import{$ as F,$a as Z,A as q,B as A,C as ce,E as Q,Fa as J,G as d,H as y,L as de,La as D,Ma as H,N as pe,Na as G,Oa as he,Pa as Y,Q as u,Qa as z,R as _,Ra as L,S as c,T as O,W as K,X as a,Y as r,Z as f,_ as B,aa as W,ab as b,ba as C,ca as h,da as m,db as _e,ea as $,fa as U,ga as X,ia as M,ib as ee,j as se,ja as I,jb as te,ka as g,l as S,la as v,lb as N,mb as j,na as s,oa as me,pb as we,q as V,qa as ue,qb as ye,r as k,ra as be,sa as fe,v as x,w,wa as T,xa as R}from"./chunk-D4TS7EY7.js";var ke=["*"];function Be(i,o){i&1&&W(0)}function Fe(i,o){if(i&1&&(B(0),u(1,Be,1,0,"ng-container",3),F()),i&2){let e=m(2);d(),c("ngTemplateOutlet",e.contentTemplate)}}function Me(i,o){if(i&1&&(a(0,"div",1),U(1),u(2,Fe,2,1,"ng-container",2),r()),i&2){let e=m();c("hidden",!e.selected),_("id",e.tabView.getTabContentId(e.id))("aria-hidden",!e.selected)("aria-labelledby",e.tabView.getTabHeaderActionId(e.id))("data-pc-name","tabpanel"),d(2),c("ngIf",e.contentTemplate&&(e.cache?e.loaded:e.selected))}}var Re=["content"],De=["navbar"],He=["prevBtn"],ze=["nextBtn"],Le=["inkbar"],Ne=["elementToObserve"],je=i=>({"p-tabview p-component":!0,"p-tabview-scrollable":i}),qe=(i,o)=>({"p-highlight":i,"p-disabled":o});function Qe(i,o){i&1&&f(0,"ChevronLeftIcon"),i&2&&_("aria-hidden",!0)}function Ke(i,o){}function We(i,o){i&1&&u(0,Ke,0,0,"ng-template")}function $e(i,o){if(i&1){let e=C();a(0,"button",15,4),h("click",function(){x(e);let n=m();return w(n.navBackward())}),u(2,Qe,1,1,"ChevronLeftIcon",16)(3,We,1,0,null,17),r()}if(i&2){let e=m();_("tabindex",e.tabindex)("aria-label",e.prevButtonAriaLabel),d(2),c("ngIf",!e.previousIconTemplate),d(),c("ngTemplateOutlet",e.previousIconTemplate)}}function Ue(i,o){if(i&1&&f(0,"span",26),i&2){let e=m(3).$implicit;c("ngClass",e.leftIcon)}}function Xe(i,o){}function Je(i,o){i&1&&u(0,Xe,0,0,"ng-template")}function Ge(i,o){if(i&1&&(a(0,"span",27),u(1,Je,1,0,null,17),r()),i&2){let e=m(3).$implicit;d(),c("ngTemplateOutlet",e.leftIconTemplate)}}function Ye(i,o){if(i&1&&f(0,"span",28),i&2){let e=m(3).$implicit;c("ngClass",e.rightIcon)}}function Ze(i,o){}function et(i,o){i&1&&u(0,Ze,0,0,"ng-template")}function tt(i,o){if(i&1&&(a(0,"span",29),u(1,et,1,0,null,17),r()),i&2){let e=m(3).$implicit;d(),c("ngTemplateOutlet",e.rightIconTemplate)}}function it(i,o){if(i&1&&(B(0),u(1,Ue,1,1,"span",21)(2,Ge,2,1,"span",22),a(3,"span",23),s(4),r(),u(5,Ye,1,1,"span",24)(6,tt,2,1,"span",25),F()),i&2){let e=m(2).$implicit;d(),c("ngIf",e.leftIcon&&!e.leftIconTemplate),d(),c("ngIf",e.leftIconTemplate),d(2),me(e.header),d(),c("ngIf",e.rightIcon&&!e.rightIconTemplate),d(),c("ngIf",e.rightIconTemplate)}}function nt(i,o){i&1&&W(0)}function at(i,o){if(i&1){let e=C();a(0,"TimesIcon",32),h("click",function(n){x(e);let l=m(3).$implicit,p=m();return w(p.close(n,l))}),r()}i&2&&c("styleClass","p-tabview-close")}function rt(i,o){i&1&&f(0,"span",33)}function lt(i,o){}function ot(i,o){i&1&&u(0,lt,0,0,"ng-template")}function st(i,o){if(i&1&&(B(0),u(1,at,1,1,"TimesIcon",30)(2,rt,1,0,"span",31)(3,ot,1,0,null,17),F()),i&2){let e=m(2).$implicit;d(),c("ngIf",!e.closeIconTemplate),d(),c("ngIf",e.closeIconTemplate),d(),c("ngTemplateOutlet",e.closeIconTemplate)}}function ct(i,o){if(i&1){let e=C();a(0,"li",19)(1,"a",20),h("click",function(n){x(e);let l=m().$implicit,p=m();return w(p.open(n,l))})("keydown",function(n){x(e);let l=m().$implicit,p=m();return w(p.onTabKeyDown(n,l))}),u(2,it,7,5,"ng-container",16)(3,nt,1,0,"ng-container",17)(4,st,4,3,"ng-container",16),r()()}if(i&2){let e=m(),t=e.$implicit,n=e.index,l=m();K(t.headerStyleClass),c("ngClass",R(19,qe,t.selected,t.disabled))("ngStyle",t.headerStyle),_("data-p-disabled",t.disabled),d(),c("pTooltip",t.tooltip)("tooltipPosition",t.tooltipPosition)("positionStyle",t.tooltipPositionStyle)("tooltipStyleClass",t.tooltipStyleClass),_("id",l.getTabHeaderActionId(t.id))("aria-controls",l.getTabContentId(t.id))("aria-selected",t.selected)("tabindex",t.disabled||!t.selected?"-1":l.tabindex)("aria-disabled",t.disabled)("data-pc-index",n)("data-pc-section","headeraction"),d(),c("ngIf",!t.headerTemplate),d(),c("ngTemplateOutlet",t.headerTemplate),d(),c("ngIf",t.closable)}}function dt(i,o){if(i&1&&u(0,ct,5,22,"li",18),i&2){let e=o.$implicit;c("ngIf",!e.closed)}}function pt(i,o){i&1&&f(0,"ChevronRightIcon"),i&2&&_("aria-hidden",!0)}function mt(i,o){}function ut(i,o){i&1&&u(0,mt,0,0,"ng-template")}function bt(i,o){if(i&1){let e=C();a(0,"button",34,5),h("click",function(){x(e);let n=m();return w(n.navForward())}),u(2,pt,1,1,"ChevronRightIcon",16)(3,ut,1,0,null,17),r()}if(i&2){let e=m();_("tabindex",e.tabindex)("aria-label",e.nextButtonAriaLabel),d(2),c("ngIf",!e.nextIconTemplate),d(),c("ngTemplateOutlet",e.nextIconTemplate)}}var le=(()=>{class i{el;viewContainer;cd;closable=!1;get headerStyle(){return this._headerStyle}set headerStyle(e){this._headerStyle=e,this.tabView.cd.markForCheck()}get headerStyleClass(){return this._headerStyleClass}set headerStyleClass(e){this._headerStyleClass=e,this.tabView.cd.markForCheck()}cache=!0;tooltip;tooltipPosition="top";tooltipPositionStyle="absolute";tooltipStyleClass;get selected(){return!!this._selected}set selected(e){this._selected=e,this.loaded||this.cd.detectChanges(),e&&(this.loaded=!0)}get disabled(){return!!this._disabled}set disabled(e){this._disabled=e,this.tabView.cd.markForCheck()}get header(){return this._header}set header(e){this._header=e,Promise.resolve().then(()=>{this.tabView.updateInkBar(),this.tabView.cd.markForCheck()})}get leftIcon(){return this._leftIcon}set leftIcon(e){this._leftIcon=e,this.tabView.cd.markForCheck()}get rightIcon(){return this._rightIcon}set rightIcon(e){this._rightIcon=e,this.tabView.cd.markForCheck()}templates;closed=!1;view=null;_headerStyle;_headerStyleClass;_selected;_disabled;_header;_leftIcon;_rightIcon=void 0;loaded=!1;id;contentTemplate;headerTemplate;leftIconTemplate;rightIconTemplate;closeIconTemplate;tabView;constructor(e,t,n,l){this.el=t,this.viewContainer=n,this.cd=l,this.tabView=e,this.id=_e()}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"header":this.headerTemplate=e.template;break;case"content":this.contentTemplate=e.template;break;case"righticon":this.rightIconTemplate=e.template;break;case"lefticon":this.leftIconTemplate=e.template;break;case"closeicon":this.closeIconTemplate=e.template;break;default:this.contentTemplate=e.template;break}})}ngOnDestroy(){this.view=null}static \u0275fac=function(t){return new(t||i)(y(se(()=>oe)),y(q),y(pe),y(J))};static \u0275cmp=V({type:i,selectors:[["p-tabPanel"]],contentQueries:function(t,n,l){if(t&1&&M(l,ee,4),t&2){let p;g(p=v())&&(n.templates=p)}},hostAttrs:[1,"p-element"],inputs:{closable:"closable",headerStyle:"headerStyle",headerStyleClass:"headerStyleClass",cache:"cache",tooltip:"tooltip",tooltipPosition:"tooltipPosition",tooltipPositionStyle:"tooltipPositionStyle",tooltipStyleClass:"tooltipStyleClass",selected:"selected",disabled:"disabled",header:"header",leftIcon:"leftIcon",rightIcon:"rightIcon"},ngContentSelectors:ke,decls:1,vars:1,consts:[["class","p-tabview-panel","role","tabpanel",3,"hidden",4,"ngIf"],["role","tabpanel",1,"p-tabview-panel",3,"hidden"],[4,"ngIf"],[4,"ngTemplateOutlet"]],template:function(t,n){t&1&&($(),u(0,Me,3,6,"div",0)),t&2&&c("ngIf",!n.closed)},dependencies:[G,Y],encapsulation:2})}return i})(),oe=(()=>{class i{platformId;el;cd;renderer;style;styleClass;controlClose;scrollable;get activeIndex(){return this._activeIndex}set activeIndex(e){if(this._activeIndex=e,this.preventActiveIndexPropagation){this.preventActiveIndexPropagation=!1;return}this.tabs&&this.tabs.length&&this._activeIndex!=null&&this.tabs.length>this._activeIndex&&(this.findSelectedTab().selected=!1,this.tabs[this._activeIndex].selected=!0,this.tabChanged=!0,this.updateScrollBar(e))}selectOnFocus=!1;nextButtonAriaLabel;prevButtonAriaLabel;autoHideButtons=!0;tabindex=0;onChange=new A;onClose=new A;activeIndexChange=new A;content;navbar;prevBtn;nextBtn;inkbar;tabPanels;templates;initialized;tabs;_activeIndex;preventActiveIndexPropagation;tabChanged;backwardIsDisabled=!0;forwardIsDisabled=!1;tabChangesSubscription;nextIconTemplate;previousIconTemplate;resizeObserver;container;list;buttonVisible;elementToObserve;constructor(e,t,n,l){this.platformId=e,this.el=t,this.cd=n,this.renderer=l}ngAfterContentInit(){this.initTabs(),this.tabChangesSubscription=this.tabPanels.changes.subscribe(e=>{this.initTabs()}),this.templates.forEach(e=>{switch(e.getType()){case"previousicon":this.previousIconTemplate=e.template;break;case"nexticon":this.nextIconTemplate=e.template;break}})}ngAfterViewInit(){L(this.platformId)&&this.autoHideButtons&&this.bindResizeObserver()}bindResizeObserver(){this.container=b.findSingle(this.el.nativeElement,'[data-pc-section="navcontent"]'),this.list=b.findSingle(this.el.nativeElement,'[data-pc-section="nav"]'),this.resizeObserver=new ResizeObserver(()=>{this.list.offsetWidth>this.container.offsetWidth?this.buttonVisible=!0:this.buttonVisible=!1,this.updateButtonState(),this.cd.detectChanges()}),this.resizeObserver.observe(this.container)}unbindResizeObserver(){this.resizeObserver.unobserve(this.elementToObserve.nativeElement),this.resizeObserver=null}ngAfterViewChecked(){L(this.platformId)&&this.tabChanged&&(this.updateInkBar(),this.tabChanged=!1)}ngOnDestroy(){this.tabChangesSubscription&&this.tabChangesSubscription.unsubscribe(),this.resizeObserver&&this.unbindResizeObserver()}getTabHeaderActionId(e){return`${e}_header_action`}getTabContentId(e){return`${e}_content`}initTabs(){this.tabs=this.tabPanels.toArray(),!this.findSelectedTab()&&this.tabs.length&&(this.activeIndex!=null&&this.tabs.length>this.activeIndex?this.tabs[this.activeIndex].selected=!0:this.tabs[0].selected=!0,this.tabChanged=!0),this.cd.markForCheck()}onTabKeyDown(e,t){switch(e.code){case"ArrowLeft":this.onTabArrowLeftKey(e);break;case"ArrowRight":this.onTabArrowRightKey(e);break;case"Home":this.onTabHomeKey(e);break;case"End":this.onTabEndKey(e);break;case"PageDown":this.onTabEndKey(e);break;case"PageUp":this.onTabHomeKey(e);break;case"Enter":case"Space":this.open(e,t);break;default:break}}onTabArrowLeftKey(e){let t=this.findPrevHeaderAction(e.target.parentElement),n=b.getAttribute(t,"data-pc-index");t?this.changeFocusedTab(e,t,n):this.onTabEndKey(e),e.preventDefault()}onTabArrowRightKey(e){let t=this.findNextHeaderAction(e.target.parentElement),n=b.getAttribute(t,"data-pc-index");t?this.changeFocusedTab(e,t,n):this.onTabHomeKey(e),e.preventDefault()}onTabHomeKey(e){let t=this.findFirstHeaderAction(),n=b.getAttribute(t,"data-pc-index");this.changeFocusedTab(e,t,n),e.preventDefault()}onTabEndKey(e){let t=this.findLastHeaderAction(),n=b.getAttribute(t,"data-pc-index");this.changeFocusedTab(e,t,n),e.preventDefault()}changeFocusedTab(e,t,n){if(t&&(b.focus(t),t.scrollIntoView({block:"nearest"}),this.selectOnFocus)){let l=this.tabs[n];this.open(e,l)}}findNextHeaderAction(e,t=!1){let n=t?e:e.nextElementSibling;return n?b.getAttribute(n,"data-p-disabled")||b.getAttribute(n,"data-pc-section")==="inkbar"?this.findNextHeaderAction(n):b.findSingle(n,'[data-pc-section="headeraction"]'):null}findPrevHeaderAction(e,t=!1){let n=t?e:e.previousElementSibling;return n?b.getAttribute(n,"data-p-disabled")||b.getAttribute(n,"data-pc-section")==="inkbar"?this.findPrevHeaderAction(n):b.findSingle(n,'[data-pc-section="headeraction"]'):null}findFirstHeaderAction(){let e=this.navbar.nativeElement.firstElementChild;return this.findNextHeaderAction(e,!0)}findLastHeaderAction(){let e=this.navbar.nativeElement.lastElementChild,t=b.getAttribute(e,"data-pc-section")==="inkbar"?e.previousElementSibling:e;return this.findPrevHeaderAction(t,!0)}open(e,t){if(t.disabled){e&&e.preventDefault();return}if(!t.selected){let n=this.findSelectedTab();n&&(n.selected=!1),this.tabChanged=!0,t.selected=!0;let l=this.findTabIndex(t);this.preventActiveIndexPropagation=!0,this.activeIndexChange.emit(l),this.onChange.emit({originalEvent:e,index:l}),this.updateScrollBar(l)}e&&e.preventDefault()}close(e,t){this.controlClose?this.onClose.emit({originalEvent:e,index:this.findTabIndex(t),close:()=>{this.closeTab(t)}}):(this.closeTab(t),this.onClose.emit({originalEvent:e,index:this.findTabIndex(t)}))}closeTab(e){if(!e.disabled){if(e.selected){this.tabChanged=!0,e.selected=!1;for(let t=0;t<this.tabs.length;t++){let n=this.tabs[t];if(!n.closed&&!e.disabled){n.selected=!0;break}}}e.closed=!0}}findSelectedTab(){for(let e=0;e<this.tabs.length;e++)if(this.tabs[e].selected)return this.tabs[e];return null}findTabIndex(e){let t=-1;for(let n=0;n<this.tabs.length;n++)if(this.tabs[n]==e){t=n;break}return t}getBlockableElement(){return this.el.nativeElement.children[0]}updateInkBar(){if(L(this.platformId)&&this.navbar){let e=b.findSingle(this.navbar.nativeElement,"li.p-highlight");if(!e)return;this.inkbar.nativeElement.style.width=b.getWidth(e)+"px",this.inkbar.nativeElement.style.left=b.getOffset(e).left-b.getOffset(this.navbar.nativeElement).left+"px"}}updateScrollBar(e){this.navbar.nativeElement.children[e].scrollIntoView({block:"nearest"})}updateButtonState(){let e=this.content.nativeElement,{scrollLeft:t,scrollWidth:n}=e,l=b.getWidth(e);this.backwardIsDisabled=t===0,this.forwardIsDisabled=t===n-l}onScroll(e){this.scrollable&&this.updateButtonState(),e.preventDefault()}getVisibleButtonWidths(){return[this.prevBtn?.nativeElement,this.nextBtn?.nativeElement].reduce((e,t)=>t?e+b.getWidth(t):e,0)}navBackward(){let e=this.content.nativeElement,t=b.getWidth(e)-this.getVisibleButtonWidths(),n=e.scrollLeft-t;e.scrollLeft=n<=0?0:n}navForward(){let e=this.content.nativeElement,t=b.getWidth(e)-this.getVisibleButtonWidths(),n=e.scrollLeft+t,l=e.scrollWidth-t;e.scrollLeft=n>=l?l:n}static \u0275fac=function(t){return new(t||i)(y(ce),y(q),y(J),y(de))};static \u0275cmp=V({type:i,selectors:[["p-tabView"]],contentQueries:function(t,n,l){if(t&1&&(M(l,le,4),M(l,ee,4)),t&2){let p;g(p=v())&&(n.tabPanels=p),g(p=v())&&(n.templates=p)}},viewQuery:function(t,n){if(t&1&&(I(Re,5),I(De,5),I(He,5),I(ze,5),I(Le,5),I(Ne,5)),t&2){let l;g(l=v())&&(n.content=l.first),g(l=v())&&(n.navbar=l.first),g(l=v())&&(n.prevBtn=l.first),g(l=v())&&(n.nextBtn=l.first),g(l=v())&&(n.inkbar=l.first),g(l=v())&&(n.elementToObserve=l.first)}},hostAttrs:[1,"p-element"],inputs:{style:"style",styleClass:"styleClass",controlClose:"controlClose",scrollable:"scrollable",activeIndex:"activeIndex",selectOnFocus:"selectOnFocus",nextButtonAriaLabel:"nextButtonAriaLabel",prevButtonAriaLabel:"prevButtonAriaLabel",autoHideButtons:"autoHideButtons",tabindex:"tabindex"},outputs:{onChange:"onChange",onClose:"onClose",activeIndexChange:"activeIndexChange"},ngContentSelectors:ke,decls:14,vars:13,consts:[["elementToObserve",""],["content",""],["navbar",""],["inkbar",""],["prevBtn",""],["nextBtn",""],[3,"ngClass","ngStyle"],[1,"p-tabview-nav-container"],["class","p-tabview-nav-prev p-tabview-nav-btn p-link","type","button","pRipple","",3,"click",4,"ngIf"],[1,"p-tabview-nav-content",3,"scroll"],["role","tablist",1,"p-tabview-nav"],["ngFor","",3,"ngForOf"],["role","presentation","aria-hidden","true",1,"p-tabview-ink-bar"],["class","p-tabview-nav-next p-tabview-nav-btn p-link","type","button","pRipple","",3,"click",4,"ngIf"],[1,"p-tabview-panels"],["type","button","pRipple","",1,"p-tabview-nav-prev","p-tabview-nav-btn","p-link",3,"click"],[4,"ngIf"],[4,"ngTemplateOutlet"],["role","presentation",3,"ngClass","ngStyle","class",4,"ngIf"],["role","presentation",3,"ngClass","ngStyle"],["role","tab","pRipple","",1,"p-tabview-nav-link",3,"click","keydown","pTooltip","tooltipPosition","positionStyle","tooltipStyleClass"],["class","p-tabview-left-icon",3,"ngClass",4,"ngIf"],["class","p-tabview-left-icon",4,"ngIf"],[1,"p-tabview-title"],["class","p-tabview-right-icon",3,"ngClass",4,"ngIf"],["class","p-tabview-right-icon",4,"ngIf"],[1,"p-tabview-left-icon",3,"ngClass"],[1,"p-tabview-left-icon"],[1,"p-tabview-right-icon",3,"ngClass"],[1,"p-tabview-right-icon"],[3,"styleClass","click",4,"ngIf"],["class","tab.closeIconTemplate",4,"ngIf"],[3,"click","styleClass"],[1,"tab.closeIconTemplate"],["type","button","pRipple","",1,"p-tabview-nav-next","p-tabview-nav-btn","p-link",3,"click"]],template:function(t,n){if(t&1){let l=C();$(),a(0,"div",6)(1,"div",7,0),u(3,$e,4,4,"button",8),a(4,"div",9,1),h("scroll",function(E){return x(l),w(n.onScroll(E))}),a(6,"ul",10,2),u(8,dt,1,1,"ng-template",11),f(9,"li",12,3),r()(),u(11,bt,4,4,"button",13),r(),a(12,"div",14),U(13),r()()}t&2&&(K(n.styleClass),c("ngClass",T(11,je,n.scrollable))("ngStyle",n.style),_("data-pc-name","tabview"),d(3),c("ngIf",n.scrollable&&!n.backwardIsDisabled&&n.autoHideButtons),d(),_("data-pc-section","navcontent"),d(2),_("data-pc-section","nav"),d(2),c("ngForOf",n.tabs),d(),_("data-pc-section","inkbar"),d(2),c("ngIf",n.scrollable&&!n.forwardIsDisabled&&n.buttonVisible))},dependencies:()=>[D,H,G,Y,he,Te,N,ie,ne,ae],styles:[`@layer primeng{.p-tabview-nav-container{position:relative}.p-tabview-scrollable .p-tabview-nav-container{overflow:hidden}.p-tabview-nav-content{overflow-x:auto;overflow-y:hidden;scroll-behavior:smooth;scrollbar-width:none;overscroll-behavior:contain auto}.p-tabview-nav{display:inline-flex;min-width:100%;margin:0;padding:0;list-style-type:none;flex:1 1 auto}.p-tabview-nav-link{cursor:pointer;-webkit-user-select:none;user-select:none;display:flex;align-items:center;position:relative;text-decoration:none;overflow:hidden}.p-tabview-ink-bar{display:none;z-index:1}.p-tabview-nav-link:focus{z-index:1}.p-tabview-title{line-height:1;white-space:nowrap}.p-tabview-nav-btn{position:absolute;top:0;z-index:2;height:100%;display:flex;align-items:center;justify-content:center}.p-tabview-nav-prev{left:0}.p-tabview-nav-next{right:0}.p-tabview-nav-content::-webkit-scrollbar{display:none}.p-tabview-close{z-index:1}}
`],encapsulation:2,changeDetection:0})}return i})(),Ee=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=k({type:i});static \u0275inj=S({imports:[z,te,Ce,j,ie,ne,ae,te]})}return i})();var P=i=>({"border-blue-500 border-2 text-blue-500":i}),ht=(i,o)=>({"pi-heart text-600":i,"pi-heart-fill text-orange-500":o}),_t=i=>({"border-primary":i});function gt(i,o){if(i&1){let e=C();a(0,"img",70),h("click",function(){let n=x(e).index,l=m();return w(l.selectedImageIndex=n)}),r()}if(i&2){let e=o.$implicit,t=o.index,n=m();X("src","assets/demo/images/ecommerce/productoverview/",e,"",Q),c("ngClass",T(3,_t,n.selectedImageIndex===t))}}var Ve=(()=>{let o=class o{constructor(){this.color="bluegray",this.size="M",this.liked=!1,this.images=[],this.selectedImageIndex=0,this.quantity=1}ngOnInit(){this.images=["product-overview-3-1.png","product-overview-3-2.png","product-overview-3-3.png","product-overview-3-4.png"]}};o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=V({type:o,selectors:[["product-overview"]],decls:170,vars:31,consts:[[1,"card"],[1,"grid","mb-7"],[1,"col-12","lg:col-7"],[1,"flex"],[1,"flex","flex-column","w-2","justify-content-between",2,"row-gap","1rem"],["class","w-full cursor-pointer border-2 border-transparent transition-colors transition-duration-150 border-round",3,"ngClass","src","click",4,"ngFor","ngForOf"],[1,"pl-3","w-10","flex"],[1,"w-full","border-2","border-transparent","border-round",3,"src"],[1,"col-12","lg:col-4","py-3","lg:pl-6"],[1,"flex","align-items-center","text-xl","font-medium","text-900","mb-4"],[1,"flex","align-items-center","justify-content-between","mb-5"],[1,"text-900","font-medium","text-3xl","block"],[1,"flex","align-items-center"],[1,"mr-3"],[1,"pi","pi-star-fill","text-yellow-500","mr-1"],[1,"pi","pi-star","text-600","mr-1"],[1,"text-sm"],[1,"text-900","mr-1"],[1,"text-500"],[1,"font-bold","text-900","mb-3"],[1,"flex","align-items-center","mb-5"],[1,"w-2rem","h-2rem","flex-shrink-0","border-circle","bg-bluegray-500","mr-3","cursor-pointer","border-2","surface-border","transition-all","transition-duration-300",3,"click"],[1,"w-2rem","h-2rem","flex-shrink-0","border-circle","bg-green-500","mr-3","cursor-pointer","border-2","surface-border","transition-all","transition-duration-300",3,"click"],[1,"w-2rem","h-2rem","flex-shrink-0","border-circle","bg-blue-500","cursor-pointer","border-2","surface-border","transition-all","transition-duration-300",3,"click"],[1,"mb-3","flex","align-items-center","justify-content-between"],[1,"font-bold","text-900"],["tabindex","0",1,"cursor-pointer","text-600","text-sm","flex","align-items-center"],[1,"ml-1","pi","pi-angle-right"],[1,"grid","grid-nogutter","align-items-center","mb-5"],[1,"col","h-3rem","border-1","border-300","text-900","inline-flex","justify-content-center","align-items-center","flex-shrink-0","border-round","mr-3","cursor-pointer","hover:surface-100","transition-duration-150","transition-colors",3,"click","ngClass"],[1,"col","h-3rem","border-1","border-300","text-900","inline-flex","justify-content-center","align-items-center","flex-shrink-0","border-round","cursor-pointer","hover:surface-100","transition-duration-150","transition-colors",3,"click","ngClass"],[1,"flex","flex-column","sm:flex-row","sm:align-items-center","sm:justify-content-between"],["buttonLayout","horizontal","spinnerMode","horizontal","inputStyleClass","w-3rem text-center","decrementButtonClass","p-button-text","incrementButtonClass","p-button-text","incrementButtonIcon","pi pi-plus","decrementButtonIcon","pi pi-minus",3,"ngModelChange","showButtons","min","ngModel"],[1,"flex","align-items-center","flex-1","mt-3","sm:mt-0","ml-0","sm:ml-5"],["pButton","","pRipple","","label","Add to Cart",1,"flex-1","mr-5"],[1,"pi","text-2xl","cursor-pointer",3,"click","ngClass"],["header","Details"],[1,"text-900","font-bold","text-3xl","mb-4","mt-2"],[1,"line-height-3","text-600","p-0","mx-0","mt-0","mb-4"],[1,"grid"],[1,"col-12","lg:col-4"],[1,"text-900","block","font-medium","mb-3","font-bold"],[1,"py-0","pl-3","m-0","text-600","mb-3"],[1,"mb-2"],[1,"text-900","block","mb-3","font-bold"],[1,"list-none","p-0","m-0","text-600","mb-4","text-600"],[1,"mb-3"],[1,"font-semibold"],[1,"p-0","m-0","flex","flex-wrap","flex-column","xl:flex-row","text-600"],[1,"flex","align-items-center","white-space-nowrap","w-10rem","block","mr-2","mb-3"],[1,"pi","pi-sun","mr-2","text-900"],[1,"flex","align-items-center","white-space-nowrap","w-10rem","block","mb-3"],[1,"pi","pi-times-circle","mr-2","text-900"],[1,"flex","align-items-center","white-space-nowrap","w-10rem","block","mb-3","mr-2"],[1,"pi","pi-sliders-h","mr-2","text-900"],[1,"pi","pi-minus-circle","mr-2","text-900"],["header","Reviews"],[1,"list-none","p-0","m-0"],[1,"pb-5","border-bottom-1","surface-border"],[1,"pi","pi-star-fill","text-gray-500"],[1,"text-900","font-bold","text-xl","my-3"],[1,"mx-0","mt-0","mb-3","text-600","line-height-3"],[1,"font-medium"],[1,"py-5","border-bottom-1","surface-border"],[1,"pi","pi-star-fill","text-yellow-500"],["header","Shipping and Returns"],[1,"col-12","md:col-6"],[1,"text-900","block","font-bold","mb-3","font-bold"],[1,"text-900","block","font-bold","mb-3"],[1,"line-height-3","text-600","p-0","m-0"],[1,"w-full","cursor-pointer","border-2","border-transparent","transition-colors","transition-duration-150","border-round",3,"click","ngClass","src"]],template:function(n,l){n&1&&(a(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),u(5,gt,1,5,"img",5),r(),a(6,"div",6),f(7,"img",7),r()()(),a(8,"div",8)(9,"div",9),s(10,"Product Title Placeholder"),r(),a(11,"div",10)(12,"span",11),s(13,"$120"),r(),a(14,"div",12)(15,"span",13),f(16,"i",14)(17,"i",14)(18,"i",14)(19,"i",14)(20,"i",15),r(),a(21,"span",16)(22,"b",17),s(23,"24"),r(),f(24,"span",18),s(25,"reviews"),r()()(),a(26,"div",19),s(27,"Color"),r(),a(28,"div",20)(29,"div",21),h("click",function(){return l.color="bluegray"}),r(),a(30,"div",22),h("click",function(){return l.color="green"}),r(),a(31,"div",23),h("click",function(){return l.color="blue"}),r()(),a(32,"div",24)(33,"span",25),s(34,"Size"),r(),a(35,"a",26),s(36," Size Guide "),f(37,"i",27),r()(),a(38,"div",28)(39,"div",29),h("click",function(){return l.size="XS"}),s(40," 1M "),r(),a(41,"div",29),h("click",function(){return l.size="S"}),s(42," 2M "),r(),a(43,"div",29),h("click",function(){return l.size="M"}),s(44," 3M "),r(),a(45,"div",29),h("click",function(){return l.size="L"}),s(46," 4M "),r(),a(47,"div",30),h("click",function(){return l.size="XL"}),s(48," 20M "),r()(),a(49,"div",19),s(50,"Quantity"),r(),a(51,"div",31)(52,"p-inputNumber",32),fe("ngModelChange",function(E){return be(l.quantity,E)||(l.quantity=E),E}),r(),a(53,"div",33),f(54,"button",34),a(55,"i",35),h("click",function(){return l.liked=!l.liked}),r()()()()(),a(56,"p-tabView")(57,"p-tabPanel",36)(58,"div",37),s(59,"Product Details"),r(),a(60,"p",38),s(61," Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Duis ultricies lacus sed turpis tincidunt id. Sed tempus urna et pharetra. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Viverra justo nec ultrices dui sapien eget mi proin. Laoreet suspendisse interdum consectetur libero id faucibus. "),r(),a(62,"div",39)(63,"div",40)(64,"span",41),s(65,"Highlights"),r(),a(66,"ul",42)(67,"li",43),s(68,"Vulputate sapien nec."),r(),a(69,"li",43),s(70,"Purus gravida quis blandit."),r(),a(71,"li",43),s(72,"Nisi quis eleifend quam adipiscing."),r(),a(73,"li"),s(74,"Imperdiet proin fermentum."),r()()(),a(75,"div",40)(76,"span",44),s(77,"Size and Fit"),r(),a(78,"ul",45)(79,"li",46)(80,"span",47),s(81,"Leo vel:"),r(),s(82," Egestas congue."),r(),a(83,"li",46)(84,"span",47),s(85,"Sociis natoque:"),r(),s(86," Parturient montes nascetur. "),r(),a(87,"li")(88,"span",47),s(89,"Suspendisse in:"),r(),s(90," Purus sit amet volutpat. "),r()()(),a(91,"div",40)(92,"span",44),s(93,"Material & Care"),r(),a(94,"ul",48)(95,"li",49),f(96,"i",50),a(97,"span"),s(98,"Not dryer safe"),r()(),a(99,"li",51),f(100,"i",52),a(101,"span"),s(102,"No chemical wash"),r()(),a(103,"li",53),f(104,"i",54),a(105,"span"),s(106,"Iron medium heat"),r()(),a(107,"li",51),f(108,"i",55),a(109,"span"),s(110,"Dry flat"),r()()()()()(),a(111,"p-tabPanel",56)(112,"div",37),s(113,"Customer Reviews"),r(),a(114,"ul",57)(115,"li",58)(116,"span"),f(117,"i",14)(118,"i",14)(119,"i",14)(120,"i",14)(121,"i",59),r(),a(122,"div",60),s(123,"Absolute Perfection!"),r(),a(124,"p",61),s(125," Blandit libero volutpat sed cras ornare arcu dui vivamus. Arcu dictum varius duis at consectetur lorem donec massa. Imperdiet proin fermentum leo vel orci porta non. Porttitor rhoncus dolor purus non. "),r(),a(126,"span",62),s(127,"Darlene Robertson, 2 days ago"),r()(),a(128,"li",63)(129,"span"),f(130,"i",14)(131,"i",14)(132,"i",14)(133,"i",14)(134,"i",64),r(),a(135,"div",60),s(136,"Classy"),r(),a(137,"p",61),s(138," Venenatis cras sed felis eget. Proin nibh nisl condimentum id venenatis a condimentum. "),r(),a(139,"span",62),s(140,"Kristin Watson, 2 days ago"),r()()()(),a(141,"p-tabPanel",65)(142,"div",37),s(143,"Shipping Placeholder"),r(),a(144,"p",38),s(145," Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Justo donec enim diam vulputate ut pharetra. Tempus egestas sed sed risus. Feugiat sed lectus vestibulum mattis. Tristique nulla aliquet enim tortor at auctor urna nunc. Habitant morbi tristique senectus et. Facilisi nullam vehicula ipsum. "),r(),a(146,"div",39)(147,"div",66)(148,"span",67),s(149,"Shipping Costs"),r(),a(150,"ul",42)(151,"li",43),s(152,"Japan - JPY 2,500."),r(),a(153,"li",43),s(154,"Europe - EUR 10"),r(),a(155,"li",43),s(156,"Switzerland - CHF 10"),r(),a(157,"li",43),s(158,"Canada - CAD 25"),r(),a(159,"li",43),s(160,"USA - USD 20"),r(),a(161,"li",43),s(162,"Australia - AUD 30"),r(),a(163,"li",43),s(164,"United Kingdom - GBP 10"),r()()(),a(165,"div",66)(166,"span",68),s(167,"Return Policy"),r(),a(168,"p",69),s(169," Pharetra et ultrices neque ornare aenean euismod elementum nisi. Diam phasellus vestibulum lorem sed. Mattis molestie a iaculis at. "),r()()()()()()),n&2&&(d(5),c("ngForOf",l.images),d(2),X("src","assets/demo/images/ecommerce/productoverview/",l.images[l.selectedImageIndex],"",Q),d(22),O("box-shadow",l.color==="bluegray"?"0 0 0 0.2rem var(--bluegray-500)":null),d(),O("box-shadow",l.color==="green"?"0 0 0 0.2rem var(--green-500)":null),d(),O("box-shadow",l.color==="blue"?"0 0 0 0.2rem var(--blue-500)":null),d(8),c("ngClass",T(18,P,l.size==="XS")),d(2),c("ngClass",T(20,P,l.size==="S")),d(2),c("ngClass",T(22,P,l.size==="M")),d(2),c("ngClass",T(24,P,l.size==="L")),d(2),c("ngClass",T(26,P,l.size==="XL")),d(5),c("showButtons",!0)("min",0),ue("ngModel",l.quantity),d(3),c("ngClass",R(28,ht,!l.liked,l.liked)))},dependencies:[D,H,ge,ve,Ie,we,N,oe,le],encapsulation:2});let i=o;return i})();var Pe=(()=>{let o=class o{};o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=k({type:o}),o.\u0275inj=S({imports:[Z.forChild([{path:"",component:Ve}]),Z]});let i=o;return i})();var ti=(()=>{let o=class o{};o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=k({type:o}),o.\u0275inj=S({imports:[z,xe,Se,ye,j,Ee,Pe]});let i=o;return i})();export{ti as ProductoverviewModule};
