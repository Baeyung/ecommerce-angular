import{Ca as f,M as l,a as r,d as c,k as h}from"./chunk-L5WE5A67.js";var g=(()=>{let t=class t{constructor(){this._config={ripple:!1,inputStyle:"outlined",menuMode:"static",colorScheme:"light",theme:"lara-light-indigo",scale:14},this.config=l(this._config),this.state={staticMenuDesktopInactive:!0,overlayMenuActive:!1,profileSidebarVisible:!1,configSidebarVisible:!1,staticMenuMobileActive:!1,menuHoverActive:!1},this.configUpdate=new c,this.overlayOpen=new c,this.configUpdate$=this.configUpdate.asObservable(),this.overlayOpen$=this.overlayOpen.asObservable(),f(()=>{let e=this.config();this.updateStyle(e)&&this.changeTheme(),this.changeScale(e.scale),this.onConfigUpdate()})}updateStyle(e){return e.theme!==this._config.theme||e.colorScheme!==this._config.colorScheme}onMenuToggle(){this.isOverlay()&&(this.state.overlayMenuActive=!this.state.overlayMenuActive,this.state.overlayMenuActive&&this.overlayOpen.next(null)),this.isDesktop()?this.state.staticMenuDesktopInactive=!this.state.staticMenuDesktopInactive:(this.state.staticMenuMobileActive=!this.state.staticMenuMobileActive,this.state.staticMenuMobileActive&&this.overlayOpen.next(null))}showProfileSidebar(){this.state.profileSidebarVisible=!this.state.profileSidebarVisible,this.state.profileSidebarVisible&&this.overlayOpen.next(null)}showConfigSidebar(){this.state.configSidebarVisible=!0}isOverlay(){return this.config().menuMode==="overlay"}isDesktop(){return window.innerWidth>991}isMobile(){return!this.isDesktop()}onConfigUpdate(){this._config=r({},this.config()),this.configUpdate.next(this.config())}changeTheme(){let e=this.config(),i=document.getElementById("theme-css").getAttribute("href").split("/").map(o=>o==this._config.theme?o=e.theme:o==`theme-${this._config.colorScheme}`?o=`theme-${e.colorScheme}`:o).join("/");this.replaceThemeLink(i)}replaceThemeLink(e){let s="theme-css",n=document.getElementById(s),i=n.cloneNode(!0);i.setAttribute("href",e),i.setAttribute("id",s+"-clone"),n.parentNode.insertBefore(i,n.nextSibling),i.addEventListener("load",()=>{n.remove(),i.setAttribute("id",s)})}changeScale(e){document.documentElement.style.fontSize=`${e}px`}};t.\u0275fac=function(s){return new(s||t)},t.\u0275prov=h({token:t,factory:t.\u0275fac,providedIn:"root"});let a=t;return a})();export{g as a};
