"use strict";var e=require("react/jsx-runtime"),r=require("next-themes"),t=require("clsx"),n=require("tailwind-merge"),o=require("tailwind-variants"),i=function(){return i=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},i.apply(this,arguments)};function F(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}"function"==typeof SuppressedError&&SuppressedError;var a,c,u,s,l={},d={};function E(){return c||(c=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n}});const r=t((a||(a=1,function(e){function r(e,r){return{handler:e,config:r}}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t}}),r.withOptions=function(e,r=()=>({})){const t=function(t){return{__options:t,handler:e(t),config:r(t)}};return t.__isOptionsFunction=!0,t.__pluginFunction=e,t.__configFunction=r,t};const t=r}(d)),d));function t(e){return e&&e.__esModule?e:{default:e}}const n=r.default}(l)),l}var f=function(){if(s)return u;s=1;let e=E();return u=(e.__esModule?e:{default:e}).default}(),p=F(f),B={primary:{light:{50:"#EBF5FF",100:"#E1EFFE",200:"#C3DDFD",300:"#A4CAFE",400:"#76A9FA",500:"#3F83F8",600:"#1C64F2",700:"#1A56DB",800:"#1E429F",900:"#233876"},dark:{50:"#1E3A8A",100:"#1E40AF",200:"#1D4ED8",300:"#2563EB",400:"#3B82F6",500:"#60A5FA",600:"#93C5FD",700:"#BFDBFE",800:"#DBEAFE",900:"#EFF6FF"}},success:{light:{50:"#F0FDF4",100:"#DCFCE7",200:"#BBF7D0",300:"#86EFAC",400:"#4ADE80",500:"#22C55E",600:"#16A34A",700:"#15803D",800:"#166534",900:"#14532D"},dark:{50:"#166534",100:"#15803D",200:"#16A34A",300:"#22C55E",400:"#4ADE80",500:"#86EFAC",600:"#BBF7D0",700:"#DCFCE7",800:"#EFF6FF",900:"#F0FDF4"}},warning:{light:{50:"#FFFBEB",100:"#FEF3C7",200:"#FDE68A",300:"#FCD34D",400:"#FBBF24",500:"#F59E0B",600:"#D97706",700:"#B45309",800:"#92400E",900:"#78350F"},dark:{50:"#78350F",100:"#92400E",200:"#B45309",300:"#D97706",400:"#F59E0B",500:"#FBBF24",600:"#FCD34D",700:"#FEF3C7",800:"#FFFBEB",900:"#FFFBEB"}},danger:{light:{50:"#FEF2F2",100:"#FEE2E2",200:"#FECACA",300:"#FCA5A5",400:"#F87171",500:"#EF4444",600:"#DC2626",700:"#B91C1C",800:"#991B1B",900:"#7F1D1D"},dark:{50:"#7F1D1D",100:"#991B1B",200:"#B91C1C",300:"#DC2626",400:"#EF4444",500:"#F87171",600:"#FCA5A5",700:"#FECACA",800:"#FEE2E2",900:"#FEF2F2"}},info:{light:{50:"#EFF6FF",100:"#DBEAFE",200:"#BFDBFE",300:"#93C5FD",400:"#60A5FA",500:"#3B82F6",600:"#2563EB",700:"#1D4ED8",800:"#1E40AF",900:"#1E3A8A"},dark:{50:"#1E3A8A",100:"#1E40AF",200:"#1D4ED8",300:"#2563EB",400:"#3B82F6",500:"#60A5FA",600:"#93C5FD",700:"#BFDBFE",800:"#DBEAFE",900:"#EFF6FF"}},default:{light:{50:"#F9FAFB",100:"#F3F4F6",200:"#E5E7EB",300:"#D1D5DB",400:"#9CA3AF",500:"#6B7280",600:"#4B5563",700:"#374151",800:"#1F2937",900:"#111827"},dark:{50:"#111827",100:"#1F2937",200:"#374151",300:"#4B5563",400:"#6B7280",500:"#9CA3AF",600:"#D1D5DB",700:"#E5E7EB",800:"#F3F4F6",900:"#F9FAFB"}}},D={none:"0px",small:"0.125rem",medium:"0.375rem",large:"0.5rem",full:"9999px"},m={small:"0.75rem",medium:"1rem",large:"1.5rem"};Object.defineProperty(exports,"tv",{enumerable:!0,get:function(){return o.tv}}),exports.ThemeProvider=function(t){var n=t.children,o=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t}(t,["children"]);return e.jsx(r.ThemeProvider,i({attribute:"class",defaultTheme:"system",enableSystem:!0},o,{children:n}))},exports.cn=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return n.twMerge(t.clsx(e))},exports.doomUI=function(e){void 0===e&&(e={});var r={colors:i(i({},B),e.colors),radius:i(i({},D),e.radius),spacing:i(i({},m),e.spacing)};return p((function(e){var t=e.addBase,n=e.addComponents,o=e.addUtilities;t({":root":i({},Object.entries(r.colors).reduce((function(e,r){for(var t=r[0],n=r[1],o=0,i=Object.entries(n.light);o<i.length;o++){var F=i[o],a=F[0],c=F[1];e["--doom-".concat(t,"-").concat(a)]=c}return e}),{})),".dark":i({},Object.entries(r.colors).reduce((function(e,r){for(var t=r[0],n=r[1],o=0,i=Object.entries(n.dark);o<i.length;o++){var F=i[o],a=F[0],c=F[1];e["--doom-".concat(t,"-").concat(a)]=c}return e}),{}))}),n({".doom-btn":{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"0.5rem",fontWeight:"600",padding:r.spacing.medium&&r.spacing.large?"".concat(r.spacing.medium," ").concat(r.spacing.large):"1rem 1.5rem",borderRadius:r.radius.medium||"0.375rem",transition:"all 150ms ease-in-out","&:focus":{outline:"none",ringWidth:"2px",ringOffset:"2px"}}}),o({".doom-text-shadow":{textShadow:"0 2px 4px var(--tw-shadow-color)"}})}),{theme:{extend:{colors:Object.entries(r.colors).reduce((function(e,r){var t=r[0],n=r[1];return e[t]=Object.entries(n.light).reduce((function(e,r){var n=r[0];return r[1],e[n]="var(--doom-".concat(t,"-").concat(n,")"),e}),{}),e}),{}),borderRadius:r.radius,spacing:r.spacing}}})};
//# sourceMappingURL=index.js.map
