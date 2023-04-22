// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"a04jt":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "cb75fcfe4777e632";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aryXu":[function(require,module,exports) {
// // Import users, issues, logs
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "users", ()=>users);
parcelHelpers.export(exports, "issues", ()=>issues);
parcelHelpers.export(exports, "issueLogs", ()=>issueLogs);
var _teamJson = require("../../dist/assets/data/team.json");
var _teamJsonDefault = parcelHelpers.interopDefault(_teamJson);
var _issuesJson = require("../../dist/assets/data/issues.json");
var _issuesJsonDefault = parcelHelpers.interopDefault(_issuesJson);
var _issueLogsJson = require("../../dist/assets/data/issueLogs.json");
var _issueLogsJsonDefault = parcelHelpers.interopDefault(_issueLogsJson);
let users = [];
let issues = [];
let issueLogs = [];
// if localstorage
localStorage.getItem("team") ? users = fromLocal("team") : users = Object.values((0, _teamJsonDefault.default));
localStorage.getItem("issues") ? issues = fromLocal("issues") : issues = Object.values((0, _issuesJsonDefault.default));
localStorage.getItem("issueLogs") ? issueLogs = fromLocal("issueLogs") : issueLogs = Object.values((0, _issueLogsJsonDefault.default));
function fromLocal(storageName) {
    let itemString = localStorage.getItem(storageName);
    let sanitisedString = itemString.replaceAll("},", "}|");
    let arrayOfStrings = sanitisedString.split("|");
    let arrayOfObjects = arrayOfStrings.map((item)=>JSON.parse(item));
    return arrayOfObjects;
}
localStorage.setItem("team", users.map((user)=>JSON.stringify(user)).toString());
localStorage.setItem("issues", issues.map((issue)=>JSON.stringify(issue)).toString()); // localStorage.setItem("issueLogs", issueLogObject);
 // export function save(target, data){}
 // // The data-handling module for Users, Issues, and Logs(unimplemented)
 // class Data{
 //     constructor(storageName = ""){
 //         this.array = [];
 //         this.storageName = storageName;
 //         // return this.array;
 //     }
 //     fromLocalStorage(storageName = this.storageName){
 //         let itemString  = localStorage.getItem(storageName)
 //         // replacing the comma seperator with an uncommon symbol to make splitting easier
 //         let sanitisedString = itemString.replaceAll("},", "}|")
 //         let arrayOfStrings = sanitisedString.split("|")
 //         let arrayOfObjects = arrayOfStrings.map(item =>JSON.parse(item));
 //         this.array = arrayOfObjects;
 //     }
 //     fromFile(fileObject){
 //         // The file should always be a JSON object
 //         this.array = [...Object.values(fileObject)];
 //     }
 //     save(storageName = this.storageName){
 //         if(storageName == ""){
 //             console.error("No Storage Name Given")
 //             return;
 //         }
 //         let stringArray = this.array.map(item => JSON.stringify(item))
 //         let string = stringArray.toString()
 //         localStorage.setItem(storageName, string)
 //     }
 //     toArray(){
 //         return this.array
 //     }
 // }
 // // Users
 // export const users = new Data("team");
 // import teamJSON from "../../dist/assets/data/team.json";
 // if(localStorage.getItem(users.storageName) == null){
 //     if(Object.values(teamJSON).length > 0){
 //         users.fromFile(teamJSON)
 //     } 
 // } else {
 //     users.fromLocalStorage()
 // }
 // console.log("Users")
 // console.log(users)
 // users.save(); 
 // // This is just a redundency to make sure there is a localStorage version of the array, in case it didn't already exist
 // // Issues
 // export const issues = new Date("issues");
 // // import issuesJSON from "../../dist/assets/data/issues.json";
 // if(localStorage.getItem(issues.storageName) == null){
 //     // if(Object.values(issuesJSON).length > 0){
 //     //     issues.fromFile(issuesJSON)
 //     // } 
 // } else {
 //     issues.fromLocalStorage()
 // }
 // console.log("Issues")
 // console.log(issues)
 // // issues.save(); 
 // // Log // Not Implemented Yet
 // // export const log = new Date("issueLog");
 // // import issueLogJSON from "../../dist/assets/data/issueLog.json";
 // // if(localStorage.getItem(log.storageName) == null){
 // //     if(Object.values(issueLogJSON).length > 0){
 // //         log.fromFile(issueLogJSON)
 // //     } 
 // // } else {
 // //     log.fromLocalStorage()
 // // }
 // // log.save(); 

},{"../../dist/assets/data/team.json":"lI96l","../../dist/assets/data/issues.json":"cocnQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../dist/assets/data/issueLogs.json":"lCRj0"}],"lI96l":[function(require,module,exports) {
module.exports = JSON.parse('{"tm1":{"id":"tm1","firstName":"Lea","lastName":"Ross","imgSrc":"./assets/users/lea_ross.jpg","issuesAssigned":0},"tm2":{"id":"tm2","firstName":"Ida","lastName":"Johansen","imgSrc":"./assets/users/ida_johansen.jpg","issuesAssigned":0},"tm3":{"id":"tm3","firstName":"Heather","lastName":"Walters","imgSrc":"./assets/users/heather_walters.jpg","issuesAssigned":0},"tm4":{"id":"tm4","firstName":"Ethan","lastName":"Addy","imgSrc":"./assets/users/ethan_addy.jpg","issuesAssigned":0},"tm5":{"id":"tm5","firstName":"Raj","lastName":"Saldanha","imgSrc":"./assets/users/raj_saldanha.jpg","issuesAssigned":0},"tm6":{"id":"tm6","firstName":"Hannah","lastName":"Rogers","imgSrc":"./assets/users/hannah_rogers.jpg","issuesAssigned":0},"tm7":{"id":"tm7","firstName":"Craig","lastName":"Steward","imgSrc":"./assets/users/craig_steward.jpg","issuesAssigned":0},"tm8":{"id":"tm8","firstName":"Wesley","lastName":"Cooper","imgSrc":"./assets/users/wesley_cooper.jpg","issuesAssigned":0}}');

},{}],"cocnQ":[function(require,module,exports) {
module.exports = JSON.parse('{"is0":{"id":"is0","summary":"officia","description":"Nisi velit laborum laborum ipsum in sunt aliquip est. Enim dolore laborum laboris anim minim labore id deserunt ipsum quis laboris consequat. Labore ullamco sunt veniam Lorem laboris et fugiat ea adipisicing velit et esse. Lorem ad id aute minim aute aliqua.\\r\\n","assigneeID":"tm8","priority":"Critical","status":"Resolved","dateStart":1682203782272,"dateDue":1683710750110},"is1":{"id":"is1","summary":"labore aliqua aliquip fugiat incididunt","description":"Sunt consequat in mollit reprehenderit laborum duis eiusmod duis. Dolore consectetur ullamco excepteur eu nisi dolor fugiat. Magna do ut nostrud laborum et. Eiusmod consectetur pariatur do aliquip aliqua enim. Adipisicing anim anim consequat eiusmod velit officia sint dolor ullamco et minim sint veniam minim.\\r\\n","assigneeID":"tm5","priority":"High","status":"Closed","dateStart":1681776189931,"dateDue":1686047427878},"is2":{"id":"is2","summary":"aliqua labore excepteur dolore amet","description":"Non enim elit aliquip eiusmod nostrud laboris in Lorem minim tempor aute proident eu occaecat. Ex in eiusmod magna nisi do ad mollit amet tempor commodo quis quis. Eu fugiat proident cillum ipsum sit duis adipisicing sunt. Laborum esse laborum in consequat labore dolor sint ad culpa non labore ut ullamco enim. Incididunt sint incididunt cillum duis nulla adipisicing culpa duis dolore aute sint. Sunt ipsum amet elit fugiat enim deserunt nulla reprehenderit. Amet proident labore cupidatat laborum consequat eu veniam dolore minim.\\r\\n","assigneeID":"tm5","priority":"Medium","status":"In Progress","dateStart":1685165240818,"dateDue":1685906147796},"is3":{"id":"is3","summary":"ipsum nostrud pariatur","description":"Sunt dolor voluptate excepteur veniam ex eiusmod cupidatat do laboris cillum ipsum commodo. Do veniam enim sit ad eiusmod do cupidatat esse ea id amet minim deserunt. Esse velit dolore est fugiat ullamco occaecat ullamco. Minim labore ullamco exercitation nostrud deserunt ad aliqua enim dolor sunt quis voluptate eiusmod commodo. Tempor magna id tempor nisi Lorem. Non excepteur sint mollit dolore anim dolore ut officia reprehenderit duis irure.\\r\\n","assigneeID":"tm7","priority":"Low","status":"Closed","dateStart":1687681938759,"dateDue":1689926327881},"is4":{"id":"is4","summary":"tempor sit culpa est laboris","description":"Dolor esse veniam amet velit aliqua ipsum consequat elit nisi est quis exercitation sint sunt. Labore incididunt incididunt pariatur aute deserunt nisi culpa non. Magna voluptate pariatur cillum magna ad.\\r\\n","assigneeID":"tm8","priority":"Low","status":"New","dateStart":1682906910020,"dateDue":1688974811093},"is5":{"id":"is5","summary":"id","description":"Anim consectetur reprehenderit sunt veniam non. Ex nisi sit aute fugiat. Reprehenderit adipisicing consectetur est nulla do anim veniam occaecat amet. Veniam dolore sint reprehenderit consectetur cillum mollit sunt cillum officia et qui ex non aliquip. Eiusmod ipsum aliquip duis aliquip duis aliquip mollit sint consequat cillum pariatur ex laboris minim. Exercitation laborum esse enim officia non in exercitation dolor fugiat aliqua est veniam tempor. Et voluptate cupidatat mollit occaecat adipisicing nulla labore dolor voluptate dolor officia veniam.\\r\\n","assigneeID":"tm1","priority":"High","status":"Closed","dateStart":1683074575125,"dateDue":1688923243454},"is6":{"id":"is6","summary":"qui","description":"Officia proident ea elit veniam aliquip. Ipsum laborum exercitation enim sint sunt. Amet id laboris magna deserunt.\\r\\n","assigneeID":"tm5","priority":"Low","status":"Closed","dateStart":1685578577311,"dateDue":1686935589327},"is7":{"id":"is7","summary":"tempor","description":"Eu cillum laboris deserunt veniam eu ad ullamco ea mollit. Veniam incididunt labore pariatur labore quis culpa quis voluptate magna fugiat cupidatat magna. Esse magna minim cupidatat pariatur est velit eiusmod sunt Lorem amet. Sint elit ipsum nulla aute cillum aliqua.\\r\\n","assigneeID":"tm3","priority":"High","status":"In Progress","dateStart":1682807944304,"dateDue":1685901619526},"is8":{"id":"is8","summary":"irure","description":"Do labore ut occaecat sit sunt labore nisi et adipisicing. Et est anim incididunt voluptate cillum non. Cillum adipisicing quis commodo anim incididunt anim in dolor ullamco ullamco. Quis ex laboris commodo occaecat fugiat voluptate aute.\\r\\n","assigneeID":"tm5","priority":"High","status":"Closed","dateStart":1686440982098,"dateDue":1692898299228},"is9":{"id":"is9","summary":"do","description":"Laborum ea laborum consequat Lorem. Sit labore adipisicing occaecat velit laborum est mollit incididunt ea. Pariatur nostrud in exercitation fugiat eu duis elit dolor adipisicing irure.\\r\\n","assigneeID":"tm8","priority":"Low","status":"In Progress","dateStart":1685710260765,"dateDue":1688774922438},"is10":{"id":"is10","summary":"quis labore","description":"Et cillum occaecat est eiusmod exercitation. Lorem esse qui amet cillum proident enim laboris aliqua id occaecat. Consequat nostrud dolor magna in commodo in veniam consectetur sit non laboris labore quis. Occaecat mollit dolore magna nisi enim veniam. Deserunt quis exercitation consectetur cupidatat dolor velit. Do excepteur tempor nulla ad et veniam fugiat consequat do et.\\r\\n","assigneeID":"tm2","priority":"Medium","status":"In Progress","dateStart":1684614619893,"dateDue":1685608396020},"is11":{"id":"is11","summary":"nulla elit cupidatat aliqua ullamco","description":"Elit exercitation nisi id id deserunt cupidatat velit mollit in id qui aliquip. Ipsum do duis dolore dolore anim. Quis minim id pariatur ullamco dolore exercitation labore. Amet mollit laboris minim est consequat pariatur consequat. Dolore non in officia occaecat sit. Fugiat labore id in non ea ad ad Lorem adipisicing ut enim cupidatat consequat sit. Minim et in minim id sint occaecat in reprehenderit mollit exercitation nulla do nisi.\\r\\n","assigneeID":"tm5","priority":"Low","status":"Closed","dateStart":1682448441641,"dateDue":1688626842208},"is12":{"id":"is12","summary":"non ea laborum culpa","description":"Ea ex occaecat pariatur cillum amet culpa magna irure nostrud culpa consectetur minim culpa duis. Ipsum laborum et aute enim laboris. Id excepteur id consequat fugiat commodo consectetur pariatur qui id officia magna consectetur pariatur. Enim quis amet veniam deserunt sunt minim reprehenderit nostrud eu minim nisi ad id amet. Aute laborum proident qui aliquip qui qui Lorem voluptate duis elit occaecat veniam reprehenderit. Ipsum velit anim proident magna magna in in sint pariatur excepteur ad anim. Eiusmod esse non dolore consequat occaecat enim consequat exercitation Lorem laboris consequat.\\r\\n","assigneeID":"tm6","priority":"High","status":"Resolved","dateStart":1686917238416,"dateDue":1690014321570},"is13":{"id":"is13","summary":"elit id","description":"Excepteur ad reprehenderit adipisicing labore duis sit dolor non laborum dolor aute. Eu id cillum magna excepteur pariatur cillum ex sit proident pariatur. Esse qui sint exercitation ullamco sit id do officia. Cupidatat sint sint id fugiat excepteur laborum quis exercitation incididunt velit non duis labore ipsum. Tempor minim dolor pariatur est dolore ad excepteur sint ex ad eiusmod et cillum. Voluptate exercitation cillum fugiat amet incididunt officia excepteur pariatur mollit. Incididunt consequat tempor quis reprehenderit anim labore.\\r\\n","assigneeID":"tm2","priority":"High","status":"In Progress","dateStart":1682864151197,"dateDue":1686278657111},"is14":{"id":"is14","summary":"consectetur id","description":"Commodo nulla incididunt Lorem id commodo. Sint enim tempor exercitation sunt reprehenderit adipisicing sint velit et anim in et. Reprehenderit enim ut anim anim laboris ex commodo do enim anim est velit minim. Eu consequat fugiat sunt nostrud cillum ipsum. Veniam veniam enim elit aute. Ea labore amet ullamco irure ullamco qui esse voluptate id.\\r\\n","assigneeID":"tm6","priority":"Medium","status":"New","dateStart":1684985066891,"dateDue":1685900343205},"is15":{"id":"is15","summary":"anim magna ea","description":"Lorem ipsum eu laborum labore ipsum adipisicing et velit nisi in. In exercitation dolore reprehenderit anim ut Lorem officia ex eiusmod fugiat ea adipisicing adipisicing nulla. Laboris aliquip commodo in minim culpa minim ex. Id aute reprehenderit velit ut. Sunt laborum magna nostrud minim in culpa mollit velit. Cillum aute voluptate sunt ullamco.\\r\\n","assigneeID":"tm4","priority":"Critical","status":"Closed","dateStart":1683507220977,"dateDue":1685281161266},"is16":{"id":"is16","summary":"excepteur exercitation exercitation ad","description":"Aliquip excepteur culpa duis eiusmod laboris occaecat veniam. Commodo ad nulla est dolore ullamco id quis labore commodo est. Minim esse tempor pariatur esse ad duis dolor pariatur ipsum culpa incididunt deserunt ea. Adipisicing cupidatat occaecat nulla consectetur mollit adipisicing consectetur adipisicing aliquip ea quis est ex amet. Tempor commodo fugiat laborum dolor ullamco ex. Id dolor excepteur quis sunt dolor consectetur cillum reprehenderit deserunt. Ullamco magna dolore qui sint aliquip.\\r\\n","assigneeID":"tm2","priority":"Medium","status":"In Progress","dateStart":1683726823617,"dateDue":1688798965271},"is17":{"id":"is17","summary":"proident sit","description":"Et enim Lorem do enim ex. Minim voluptate amet ullamco id esse. Enim sint irure nostrud excepteur quis id pariatur amet sit ad eu eu ad. Enim minim culpa est cupidatat culpa eiusmod. Amet excepteur mollit ipsum anim duis eu et quis qui.\\r\\n","assigneeID":"tm4","priority":"Critical","status":"Closed","dateStart":1688013212152,"dateDue":1690788206866},"is18":{"id":"is18","summary":"do eiusmod sunt","description":"Velit minim esse dolor pariatur officia laborum consequat aliqua in ad. Ullamco et nostrud voluptate nulla eu anim proident commodo proident esse amet. Amet officia excepteur laborum incididunt consectetur sunt laboris voluptate magna id sint ullamco laborum. Quis duis consectetur labore velit. Incididunt ad adipisicing excepteur nisi cupidatat nisi. Exercitation incididunt fugiat commodo incididunt laboris nisi ipsum minim consectetur fugiat dolor voluptate.\\r\\n","assigneeID":"tm5","priority":"Medium","status":"Closed","dateStart":1684259233097,"dateDue":1686344632235},"is19":{"id":"is19","summary":"sunt consectetur ullamco","description":"Nostrud do consequat qui officia ex est nostrud. Qui nisi do incididunt magna officia laboris. Eiusmod mollit eiusmod nostrud duis dolor eiusmod sint excepteur velit ipsum laboris. Duis esse qui minim non amet incididunt aliqua consequat minim enim. Mollit mollit ullamco dolore nulla velit et do non deserunt cillum reprehenderit ut elit elit. Ipsum pariatur proident elit consectetur irure commodo est. Magna adipisicing pariatur irure nostrud pariatur pariatur minim aute.\\r\\n","assigneeID":"tm5","priority":"Medium","status":"New","dateStart":1682912388061,"dateDue":1687214985970},"is20":{"id":"is20","summary":"occaecat enim veniam reprehenderit","description":"Eiusmod nostrud est incididunt pariatur ad ea excepteur. Ea minim ex elit exercitation qui laboris aliquip ut qui ex magna ad sunt. Ex aliquip nulla est ullamco anim ea voluptate quis sunt. Tempor excepteur magna consectetur aliquip sunt esse magna anim consectetur laborum est. Labore nisi exercitation cupidatat id voluptate reprehenderit laboris nostrud pariatur ex ea anim anim.\\r\\n","assigneeID":"tm6","priority":"Medium","status":"Resolved","dateStart":1685613804885,"dateDue":1691318184832},"is21":{"id":"is21","summary":"fugiat officia voluptate ullamco voluptate","description":"Est commodo aliquip sunt minim eiusmod. Eiusmod commodo ex reprehenderit dolor cupidatat qui. Non laboris aliqua id ipsum incididunt occaecat esse.\\r\\n","assigneeID":"tm4","priority":"Low","status":"New","dateStart":1686565182619,"dateDue":1686894347723},"is22":{"id":"is22","summary":"est eu do","description":"Nostrud magna non mollit Lorem culpa proident in in ipsum laborum in nostrud. Est voluptate est officia reprehenderit consectetur enim id sint. Veniam deserunt laboris minim laboris aute sint irure mollit eu amet ut nostrud. Eiusmod proident Lorem ad enim occaecat magna anim eu laboris officia qui sint aliquip. Esse id exercitation amet aliqua quis quis ex esse ipsum exercitation. Aliquip excepteur id laborum commodo amet veniam.\\r\\n","assigneeID":"tm3","priority":"Critical","status":"Resolved","dateStart":1685591567462,"dateDue":1686422655962},"is23":{"id":"is23","summary":"sunt deserunt cillum amet","description":"Incididunt ad sit laborum proident aliqua voluptate. Occaecat exercitation aliqua minim labore ut. Occaecat sint culpa ullamco magna est occaecat excepteur aliqua non. Aute eu laboris laboris esse non veniam labore dolor nostrud. Culpa anim tempor fugiat cillum nisi dolor. Culpa esse ex aliquip ut qui anim commodo dolor nisi.\\r\\n","assigneeID":"tm6","priority":"Medium","status":"In Progress","dateStart":1682274355334,"dateDue":1686432951569},"is24":{"id":"is24","summary":"dolor qui voluptate est magna","description":"Eu et eu in fugiat adipisicing Lorem ea non aute dolor. Est enim magna cupidatat laboris eu do amet ex amet. Ea excepteur ipsum irure consectetur dolor deserunt. Ea ex ipsum tempor aliquip voluptate tempor nostrud labore.\\r\\n","assigneeID":"tm3","priority":"Low","status":"New","dateStart":1683310265412,"dateDue":1687652725157},"is25":{"id":"is25","summary":"ad pariatur dolore mollit elit","description":"Adipisicing laborum occaecat pariatur ullamco id proident dolore consequat enim sit laboris anim. Ea et magna incididunt sint minim pariatur. Cillum ullamco cillum nulla est tempor eu qui ex ullamco anim non id. Consequat aute ut nulla excepteur sit nulla mollit dolor mollit. Elit et consectetur nisi fugiat elit veniam pariatur esse nostrud ut sit duis.\\r\\n","assigneeID":"tm4","priority":"Medium","status":"New","dateStart":1683421620183,"dateDue":1686064360543},"is26":{"id":"is26","summary":"cupidatat et","description":"Laboris dolor tempor qui fugiat reprehenderit. Quis consequat id magna ad eu culpa anim ex cillum. Cupidatat sunt exercitation anim aute anim aliquip proident ad proident. Ea aliquip do veniam irure fugiat sunt aliquip commodo est sit deserunt tempor eu aliquip. Ut irure veniam nulla proident magna exercitation ex. Laboris aliqua minim aute est eu aute dolore officia sit exercitation consequat.\\r\\n","assigneeID":"tm2","priority":"Critical","status":"Closed","dateStart":1683217550778,"dateDue":1687257837000},"is27":{"id":"is27","summary":"cupidatat labore ad cillum nulla","description":"Mollit dolor aute laborum laborum non sint aliqua cupidatat laboris mollit. Commodo laboris nostrud mollit amet qui nulla pariatur nostrud quis occaecat nulla. Amet eiusmod voluptate adipisicing quis id Lorem nisi esse nulla elit incididunt. Tempor sunt anim sunt aliqua esse veniam cillum aute occaecat ad anim. In ut esse do eu proident. Sint anim incididunt laboris ad et. Cupidatat laborum dolore voluptate ad.\\r\\n","assigneeID":"tm5","priority":"Low","status":"New","dateStart":1683148985582,"dateDue":1689515731644},"is28":{"id":"is28","summary":"irure mollit laboris dolor tempor","description":"Ullamco et eiusmod mollit eiusmod voluptate proident proident esse. Eiusmod tempor est ex Lorem dolor laboris esse. Exercitation pariatur ad elit velit deserunt sunt sint aliquip officia esse. Non mollit consequat nulla veniam. Fugiat eiusmod adipisicing sunt fugiat esse consectetur ad veniam in ullamco deserunt. Fugiat minim sunt veniam laborum eiusmod dolor officia laboris. Nostrud veniam irure in reprehenderit exercitation cupidatat.\\r\\n","assigneeID":"tm2","priority":"Low","status":"In Progress","dateStart":1683324860125,"dateDue":1684377890970},"is29":{"id":"is29","summary":"sunt in proident voluptate","description":"Est commodo adipisicing aliqua nostrud aliqua voluptate consectetur fugiat. Lorem deserunt et labore voluptate elit aliquip. Duis irure id laboris ad et exercitation veniam sit ullamco voluptate magna. Eu sint culpa nulla consectetur sunt veniam dolore consectetur laborum. Id et aliquip ipsum minim ea tempor ad.\\r\\n","assigneeID":"tm6","priority":"Medium","status":"Closed","dateStart":1685282441073,"dateDue":1691149414713}}');

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"lCRj0":[function(require,module,exports) {
module.exports = JSON.parse("{}");

},{}]},["a04jt"], null, "parcelRequirec1be")

//# sourceMappingURL=index.4777e632.js.map
