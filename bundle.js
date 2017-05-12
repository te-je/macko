webpackJsonp([0],{202:function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(11),a=r(206),l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){return o.createElement("div",{className:"landing"},o.createElement("div",{className:"landing-hero"},o.createElement("div",{className:"landing-text",style:{position:"relative"}},o.createElement("h1",null,"Macko 👀"),o.createElement("p",{className:"lead"},"Watch real-time web resources—in real time."),o.createElement(a.default,{color:"primary",size:"lg"})),o.createElement("div",{className:"screenshot"})))},t}(o.Component);t.default=l},203:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,a=arguments.length,l=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,n);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(l=(a<3?o(l):a>3?o(t,r,l):o(t,r))||l);return a>3&&l&&Object.defineProperty(t,r,l),l},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,a){function l(e){try{s(n.next(e))}catch(e){a(e)}}function i(e){try{s(n.throw(e))}catch(e){a(e)}}function s(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(l,i)}s((n=n.apply(e,t||[])).next())})},l=this&&this.__generator||function(e,t){function r(e){return function(t){return n([e,t])}}function n(r){if(o)throw new TypeError("Generator is already executing.");for(;s;)try{if(o=1,a&&(l=a[2&r[0]?"return":r[0]?"throw":"next"])&&!(l=l.call(a,r[1])).done)return l;switch(a=0,l&&(r=[0,l.value]),r[0]){case 0:case 1:l=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,a=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(l=s.trys,!(l=l.length>0&&l[l.length-1])&&(6===r[0]||2===r[0])){s=0;continue}if(3===r[0]&&(!l||r[1]>l[0]&&r[1]<l[3])){s.label=r[1];break}if(6===r[0]&&s.label<l[1]){s.label=l[1],l=r;break}if(l&&s.label<l[2]){s.label=l[2],s.ops.push(r);break}l[2]&&s.ops.pop(),s.trys.pop();continue}r=t.call(e,s)}catch(e){r=[6,e],a=0}finally{o=l=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}var o,a,l,i,s={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]};return i={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i};Object.defineProperty(t,"__esModule",{value:!0});var i=r(89),s=function(){function e(e,t){void 0===t&&(t=!1),this.repoName=e,this.excludePreReleases=t,this.releases=[],this.refresh()}return e.prototype.refresh=function(){return a(this,void 0,void 0,function(){var e,t,r=this;return l(this,function(n){switch(n.label){case 0:return[4,fetch("https://api.github.com/repos/"+this.repoName+"/releases",{headers:{Accept:"application/vnd.github.v3+json"}})];case 1:if(e=n.sent(),!e.ok)throw new Error("Could not fetch the current release set");return t=this,[4,e.json()];case 2:return t.releases=n.sent().map(function(e){return{downloads:{OSX:r.getDownloadUrl(e.assets,/Macko-[^\/]*mac/i),linux:r.getDownloadUrl(e.assets,/Macko-[^\/]*linux/i),tar:e.tarball_url,win32:r.getDownloadUrl(e.assets,/Macko-[^\/]*win32/i),zip:e.zipball_url},name:e.name,prerelease:e.prerelease,publish_date:new Date(e.published_at),tag:e.tag_name}}),[2]}})})},Object.defineProperty(e.prototype,"latest",{get:function(){return 0===this.releases.length?null:this.releases.slice().sort(function(e,t){return t.publish_date.valueOf()-e.publish_date.valueOf()})[0]},enumerable:!0,configurable:!0}),e.prototype.getDownloadUrl=function(e,t){var r=e.find(function(e){return t.test(e.name)});return r?r.browser_download_url:null},e}();n([i.observable,o("design:type",Array)],s.prototype,"releases",void 0),n([i.action,o("design:type",Function),o("design:paramtypes",[]),o("design:returntype",Promise)],s.prototype,"refresh",null),n([i.computed,o("design:type",Object),o("design:paramtypes",[])],s.prototype,"latest",null),t.ReleasesStore=s},204:function(e,t){},206:function(e,t,r){"use strict";function n(){return navigator&&navigator.platform?/win32/i.test(navigator.platform)?"win32":/mac/i.test(navigator.platform)?"OSX":/linux/i.test(navigator.platform)?"linux":"tar":"tar"}var o=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),a=this&&this.__decorate||function(e,t,r,n){var o,a=arguments.length,l=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,n);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(l=(a<3?o(l):a>3?o(t,r,l):o(t,r))||l);return a>3&&l&&Object.defineProperty(t,r,l),l},l=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=r(73),s=r(11),c=r(139),u={OSX:"Download for OS X 10.6+",linux:"Download for Linux",tar:"Download Source Tarball",win32:"Download for Windows 7+"},p=function(e){function t(t){var r=e.call(this,t)||this;return r.toggleDropdown=function(){r.setState({dropdownOpen:!r.state.dropdownOpen})},r.state={dropdownOpen:!1},t.releases&&(r.releases=t.releases),r.platform=n(),r}return o(t,e),t.prototype.render=function(){if(null===this.releases.latest)return null;var e=this.downloadList,t=s.createElement(c.Button,{tag:"a",href:e[0].url,size:this.props.size,color:this.props.color},u[e[0].platform]);return 1===e.length?t:s.createElement(c.ButtonDropdown,{isOpen:this.state.dropdownOpen,toggle:this.toggleDropdown},t,s.createElement(c.DropdownToggle,{caret:!0,color:this.props.color,size:this.props.size}),s.createElement(c.DropdownMenu,null,e.slice(1).map(function(e,t){return s.createElement(c.DropdownItem,{key:t},s.createElement("a",{href:e.url},u[e.platform]))})))},Object.defineProperty(t.prototype,"downloadList",{get:function(){if(null===this.releases.latest)return[];var e=this.releases.latest,t=null===e.downloads[this.platform]?"tar":this.platform,r=[{platform:t,url:e.downloads[t]}];return["tar","win32","OSX","linux"].forEach(function(n){var o=e.downloads[n];n!==t&&null!==o&&r.push({platform:n,url:o})}),r},enumerable:!0,configurable:!0}),t}(s.Component);p=a([i.inject("releases"),i.observer,l("design:paramtypes",[Object])],p),t.default=p},207:function(e,t,r){"use strict";var n=this&&this.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e};Object.defineProperty(t,"__esModule",{value:!0}),r(90),r(204);var o=r(73),a=r(11),l=r(62),i=r(91),s=r(202),c=r(203),u={releases:new c.ReleasesStore("te-je/macko")};l.render(a.createElement(o.Provider,n({},u),a.createElement(i.BrowserRouter,null,a.createElement(i.Switch,null,a.createElement(i.Route,{exact:!0,path:"/",component:s.default})))),document.getElementById("root"))}},[207]);
//# sourceMappingURL=bundle.js.map