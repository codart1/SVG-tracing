// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
var e=async(e,t={})=>{Array.isArray(t)&&(t=t[0]);const c=document.createElement("a");let a;c.download=t.fileName||"Untitled",c.href=URL.createObjectURL(e);t.setupLegacyCleanupAndRejection&&(a=t.setupLegacyCleanupAndRejection((()=>a(reject)))),c.addEventListener("click",(()=>{"function"==typeof a&&a(),setTimeout((()=>URL.revokeObjectURL(c.href)),3e4)})),c.click()};export{e as default};