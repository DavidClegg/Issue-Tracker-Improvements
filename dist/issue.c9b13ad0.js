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
})({"3l1m3":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "2781b57fc9b13ad0";
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

},{}],"9lQtv":[function(require,module,exports) {
var _dataJs = require("../scripts/data.js");
// OldVersion:{
//     const urlMatch = /\?is[0-9]+/
//     const validTarget = urlMatch.test(window.location.search);
//     const targetID = validTarget?urlMatch.exec(window.location.search)[0].replace("?",""):"NO VALID ISSUE";
//     console.log(targetID);
//     const targetIssue = issues.find(issue => issue.id == targetID);
//     console.log(targetIssue);
//     const issueMember = users.find(user=> user.id == targetIssue.assigneeID)
//     console.log(issueMember);
//     const priorityStyle = {"Low":"bg-info","Medium":"bg-warning","High":"bg-danger","Critical":"bg-dark"}
//     const priorityTextStyle = {"Low":"text-dark","Medium":"text-dark","High":"text-white","Critical":"text-white"}
//     const pageElements = {
//         title : document.querySelector("#pageTitle"),
//         id : document.querySelector("#issueIDElement"),
//         assignee : {
//             image: document.querySelector("#assigneeImage"),
//             name: document.querySelector("#assigneeName"),
//         },
//         startdate : document.querySelector("#startDateElement"),
//         duedate : document.querySelector("#dueDateElement"),
//         status : document.querySelector("#issueStatusElement"),
//         priority : document.querySelector("#issuePriorityElement"),
//         summary : document.querySelector("#issueSummaryElement"),
//         description : document.querySelector("#issueDescriptionElement"),
//         logTable : document.querySelector("#issueLogTable"),
//     }
//     pageElements.title.innerText = `Issue: ${targetIssue.id}`
//     pageElements.id.innerText = `${targetIssue.id}`
//     pageElements.assignee.image.src = issueMember.imgSrc;
//     pageElements.assignee.name.innerText = `${issueMember.firstName} ${issueMember.lastName}`;
//     pageElements.startdate.innerText = new Date(targetIssue.dateStart).toLocaleString("en-GB", {"dateStyle":"short"});
//     pageElements.duedate.innerText = new Date(targetIssue.dateDue).toLocaleString("en-GB", {"dateStyle":"short"});
//     pageElements.status.innerText = targetIssue.status;
//     pageElements.priority.innerText = targetIssue.priority;
//     pageElements.priority.classList.add(priorityStyle[targetIssue.priority]);
//     pageElements.priority.classList.add(priorityTextStyle[targetIssue.priority]); // changing this is going to be a bit of a pain
//     pageElements.summary.innerText = targetIssue.summary;
//     pageElements.description.innerText = targetIssue.description;
// }
UpdateIssue: {
    const urlMatch = /\?is[0-9]+/;
    const validTarget = urlMatch.test(window.location.search);
    const targetID = validTarget ? urlMatch.exec(window.location.search)[0].replace("?", "") : "NO VALID ISSUE";
    console.log(targetID);
    const issue = (0, _dataJs.issues).find((issue)=>issue.id == targetID);
    console.log(issue);
    const member = (0, _dataJs.users).find((user)=>user.id == issue.assigneeID);
    console.log(member);
    const priorityStyle = {
        "Low": "text-bg-info",
        "Medium": "text-bg-warning",
        "High": "text-bg-danger",
        "Critical": "text-bg-dark"
    };
    const el = {
        title: document.querySelector("#pageTitle"),
        id: document.querySelector("#Issue #ID"),
        members: document.querySelector("#Issue #MemberDropDown"),
        assignee: {
            image: document.querySelector("#Issue #Image"),
            name: document.querySelector("#Issue #Name")
        },
        startdate: document.querySelector("#Issue #Start"),
        duedate: document.querySelector("#Issue #Due"),
        status: document.querySelector("#Issue #Status"),
        priority: document.querySelector("#Issue #Priority"),
        summary: document.querySelector("#Issue #Summary"),
        description: document.querySelector("#Issue #Description"),
        logTable: document.querySelector("#issueLogTable")
    };
    el.title.innerText = `Issue: ${issue.id}`;
    el.id.innerText = `${issue.id}`;
    el.assignee.image.src = member.imgSrc;
    el.assignee.name.innerText = `${member.firstName} ${member.lastName}`;
    el.startdate.innerText = new Date(issue.dateStart).toLocaleString("en-GB", {
        "dateStyle": "short"
    });
    el.duedate.innerText = new Date(issue.dateDue).toLocaleString("en-GB", {
        "dateStyle": "short"
    });
    el.status.innerText = issue.status;
    el.priority.innerText = issue.priority;
    el.priority.parentElement.classList.add(priorityStyle[issue.priority]);
    el.summary.innerText = issue.summary;
    el.description.innerText = issue.description;
    const edit = {
        // Inputs
        due: document.querySelector("#Issue #DueButton"),
        start: document.querySelector("#Issue #StartButton"),
        summary: document.querySelector("#Issue #SummaryButton"),
        description: document.querySelector("#Issue #DescriptionButton"),
        // Dropdowns
        status: {
            new: document.querySelector("#Issue #StatusNew"),
            progress: document.querySelector("#Issue #StatusProgress"),
            resolved: document.querySelector("#Issue #StatusResolved"),
            closed: document.querySelector("#Issue #StatusClosed")
        },
        priority: {
            low: document.querySelector("#Issue #PriorityLow"),
            medium: document.querySelector("#Issue #PriorityMedium"),
            high: document.querySelector("#Issue #PriorityHigh"),
            critical: document.querySelector("#Issue #PriorityCritical")
        },
        members: {}
    };
    const invalid = {
        due: document.querySelector("#Issue #DueInvalid"),
        start: document.querySelector("#Issue #StartInvalid"),
        summary: document.querySelector("#Issue #SummaryInvalid"),
        description: document.querySelector("#Issue #DescriptionInvalid")
    };
    // Dates
    edit.due.addEventListener("click", (e)=>{
        let newInput = document.createElement("input");
        newInput.setAttribute("type", "date");
        // Convert the due date from a unix timestamp number to a valid min date format yyyy-mm-dd 
        // This was a pain, but it removes the need to add validation because my validation was only checking that the due date was on or after the start date anyway
        newInput.setAttribute("min", new Date(issue.dateStart).toISOString().slice(0, 10));
        let dueDateParent = el.duedate.parentElement;
        dueDateParent.replaceWith(newInput);
        newInput.valueAsNumber = issue.dateDue; // This doesn't keep the updated value until saving is implemented
        newInput.focus();
        newInput.addEventListener("input", (e)=>{
            // SAVE
            console.log(newInput.value);
            newInput.replaceWith(dueDateParent);
            el.duedate.innerText = new Date(newInput.value).toLocaleString("en-GB", {
                "dateStyle": "short"
            });
            save("dateDue", newInput.valueAsNumber);
        });
    });
    edit.start.addEventListener("click", (e)=>{
        let newInput = document.createElement("input");
        newInput.setAttribute("type", "date");
        newInput.setAttribute("max", new Date(issue.dateDue).toISOString().slice(0, 10));
        let startDateParent = el.startdate.parentElement;
        startDateParent.replaceWith(newInput);
        newInput.valueAsNumber = issue.dateStart;
        newInput.focus();
        newInput.addEventListener("input", (e)=>{
            // SAVE
            console.log(newInput.value);
            newInput.replaceWith(startDateParent);
            el.startdate.innerText = new Date(newInput.value).toLocaleString("en-GB", {
                "dateStyle": "short"
            });
            save("dateStart", newInput.valueAsNumber);
        });
    });
    // Summary
    edit.summary.addEventListener("click", (e)=>{
        let inputWrapper = document.createElement("div");
        inputWrapper.classList.add("row");
        inputWrapper.classList.add("col-md-12");
        inputWrapper.classList.add("flex-row");
        inputWrapper.classList.add("gx-0");
        let newInput = document.createElement("input");
        newInput.value = issue.summary;
        newInput.classList.add("col-md-10");
        newInput.classList.add("p-3");
        let newButton = document.createElement("button");
        newButton.innerText = "Enter";
        newButton.classList.add("col-md-2");
        inputWrapper.appendChild(newInput);
        inputWrapper.appendChild(newButton);
        let summaryParent = el.summary.parentElement;
        summaryParent.replaceWith(inputWrapper);
        newInput.focus();
        newInput.addEventListener("input", (e)=>{
            // Validate
            if (newInput.value.length >= 1) {
                newButton.removeAttribute("disabled");
                invalid.summary.style.display = "none";
            } else {
                newButton.setAttribute("disabled", "");
                invalid.summary.style.display = "block";
            }
        });
        newButton.addEventListener("click", (e)=>{
            // SAVE
            console.log(newInput.value);
            inputWrapper.replaceWith(summaryParent);
            el.summary.innerText = newInput.value;
            save("summary", newInput.value);
        });
    });
    // Description
    edit.description.addEventListener("click", (e)=>{
        let inputWrapper = document.createElement("div");
        inputWrapper.classList.add("col-md-12");
        let newInput = document.createElement("textarea");
        newInput.value = issue.description;
        newInput.classList.add("col-md-12");
        newInput.classList.add("p-3");
        newInput.setAttribute("style", "height: 12rem");
        let newButton = document.createElement("button");
        newButton.innerText = "Enter";
        newButton.classList.add("col-md-2");
        newButton.classList.add("float-end");
        inputWrapper.appendChild(newInput);
        inputWrapper.appendChild(newButton);
        let descriptionParent = el.description.parentElement;
        descriptionParent.replaceWith(inputWrapper);
        newInput.focus();
        newInput.addEventListener("input", (e)=>{
            // Validate
            if (newInput.value.length >= 1) {
                newButton.removeAttribute("disabled");
                invalid.description.style.display = "none";
            } else {
                newButton.setAttribute("disabled", "");
                invalid.description.style.display = "block";
            }
        });
        newButton.addEventListener("click", (e)=>{
            // VALIDATE AND SAVE
            console.log(newInput.value);
            inputWrapper.replaceWith(descriptionParent);
            el.description.innerText = newInput.value;
            save("description", newInput.value);
        });
    });
    // Status dropdown
    edit.status.new.addEventListener("click", (e)=>{
        el.status.innerText = "New";
        // SAVE
        save("status", "New");
    });
    edit.status.progress.addEventListener("click", (e)=>{
        el.status.innerText = "In Progress";
        // SAVE
        save("status", "In Progress");
    });
    edit.status.resolved.addEventListener("click", (e)=>{
        el.status.innerText = "Resolved";
        // SAVE
        save("status", "Resolved");
    });
    edit.status.closed.addEventListener("click", (e)=>{
        el.status.innerText = "Closed";
        // SAVE
        save("status", "Closed");
    });
    // Priority dropdown
    edit.priority.low.addEventListener("click", (e)=>{
        priorityChange("Low");
    });
    edit.priority.medium.addEventListener("click", (e)=>{
        priorityChange("Medium");
    });
    edit.priority.high.addEventListener("click", (e)=>{
        priorityChange("High");
    });
    edit.priority.critical.addEventListener("click", (e)=>{
        priorityChange("Critical");
    });
    function priorityChange(priority) {
        let parent = el.priority.parentElement;
        parent.classList.remove(priorityStyle.Low);
        parent.classList.remove(priorityStyle.Medium);
        parent.classList.remove(priorityStyle.High);
        parent.classList.remove(priorityStyle.Critical);
        el.priority.innerText = priority;
        parent.classList.add(priorityStyle[priority]);
        // SAVE
        save("priority", priority);
    }
    // Members dropdown
    (0, _dataJs.users).forEach((user)=>{
        let userOption = document.createElement("li");
        userOption.classList.add("dropdown-item");
        userOption.classList.add("border-bottom");
        let innerDiv = document.createElement("div");
        innerDiv.classList.add("col-md-12");
        innerDiv.classList.add("pb-2");
        let image = document.createElement("img");
        image.classList.add("rounded-circle");
        image.classList.add("me-2");
        image.setAttribute("style", "width: 45px; height: 45px;");
        image.setAttribute("src", user.imgSrc);
        let name = document.createElement("span");
        name.innerText = `${user.firstName} ${user.lastName}`;
        innerDiv.appendChild(image);
        innerDiv.appendChild(name);
        userOption.appendChild(innerDiv);
        userOption.addEventListener("click", (e)=>userOptionFunction(e, user));
        el.members.appendChild(userOption);
    });
    function userOptionFunction(e, user) {
        e.preventDefault();
        el.assignee.image.src = user.imgSrc;
        el.assignee.name.innerText = `${user.firstName} ${user.lastName}`;
        // SAVE
        save("assigneeID", user.id);
    }
    function save(field, value) {
        // log[issue.id].push([Date.now(), field, value]);
        issue[field] = value;
        console.log([
            Date.now(),
            field,
            value
        ]);
        console.log(issue);
        localStorage.setItem("issues", (0, _dataJs.issues).map((issue)=>JSON.stringify(issue)).toString());
    /**{
    "id": "is33",
    "summary": "Issue Update Form Validation",
    "description": "Add form validation to the issue update page. This is an important feature and the next major step to making this a functional app.",
    "assigneeID": "tm584",
    "priority": "High",
    "status": "In Progress",
    "dateStart": 1682553600000,
    "dateDue": 1682640000000
} */ }
// Handle input validation
// Handle Saving
}

},{"../scripts/data.js":"aryXu"}]},["3l1m3","9lQtv"], "9lQtv", "parcelRequirec1be")

//# sourceMappingURL=issue.c9b13ad0.js.map
