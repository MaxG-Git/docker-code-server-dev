/* PrismJS 1.21.0
https://prismjs.com/download.html#themes=prism-okaidia&languages=markup+css+clike+javascript+abap+abnf+actionscript+apacheconf+apl+arduino+asciidoc+aspnet+bash+basic+c+csharp+cpp+coffeescript+css-extras+dns-zone-file+docker+editorconfig+ejs+flow+ftl+gml+git+go+graphql+http+hpkp+hsts+icon+ignore+inform7+ini+java+javadoc+javadoclike+javastacktrace+jsdoc+js-extras+json+json5+jsonp+jsstacktrace+js-templates+latex+latte+less+liquid+makefile+markdown+markup-templating+mongodb+naniscript+nginx+objectivec+pascal+pascaligo+perl+php+phpdoc+php-extras+plsql+powershell+processing+properties+python+jsx+tsx+regex+rest+ruby+sas+sass+shell-session+sql+iecst+t4-templating+t4-cs+textile+typescript+typoscript+vim+visual-basic+warpscript+wasm+wiki+xml-doc+yaml&plugins=line-numbers+autolinker+file-highlight+show-language+command-line+normalize-whitespace+toolbar+copy-to-clipboard+match-braces */
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {}
  , Prism = function(u) {
    var c = /\blang(?:uage)?-([\w-]+)\b/i
      , n = 0
      , M = {
        manual: u.Prism && u.Prism.manual,
        disableWorkerMessageHandler: u.Prism && u.Prism.disableWorkerMessageHandler,
        util: {
            encode: function e(n) {
                return n instanceof W ? new W(n.type,e(n.content),n.alias) : Array.isArray(n) ? n.map(e) : n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
            },
            type: function(e) {
                return Object.prototype.toString.call(e).slice(8, -1)
            },
            objId: function(e) {
                return e.__id || Object.defineProperty(e, "__id", {
                    value: ++n
                }),
                e.__id
            },
            clone: function t(e, r) {
                var a, n;
                switch (r = r || {},
                M.util.type(e)) {
                case "Object":
                    if (n = M.util.objId(e),
                    r[n])
                        return r[n];
                    for (var i in a = {},
                    r[n] = a,
                    e)
                        e.hasOwnProperty(i) && (a[i] = t(e[i], r));
                    return a;
                case "Array":
                    return n = M.util.objId(e),
                    r[n] ? r[n] : (a = [],
                    r[n] = a,
                    e.forEach(function(e, n) {
                        a[n] = t(e, r)
                    }),
                    a);
                default:
                    return e
                }
            },
            getLanguage: function(e) {
                for (; e && !c.test(e.className); )
                    e = e.parentElement;
                return e ? (e.className.match(c) || [, "none"])[1].toLowerCase() : "none"
            },
            currentScript: function() {
                if ("undefined" == typeof document)
                    return null;
                if ("currentScript"in document)
                    return document.currentScript;
                try {
                    throw new Error
                } catch (e) {
                    var n = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack) || [])[1];
                    if (n) {
                        var t = document.getElementsByTagName("script");
                        for (var r in t)
                            if (t[r].src == n)
                                return t[r]
                    }
                    return null
                }
            },
            isActive: function(e, n, t) {
                for (var r = "no-" + n; e; ) {
                    var a = e.classList;
                    if (a.contains(n))
                        return !0;
                    if (a.contains(r))
                        return !1;
                    e = e.parentElement
                }
                return !!t
            }
        },
        languages: {
            extend: function(e, n) {
                var t = M.util.clone(M.languages[e]);
                for (var r in n)
                    t[r] = n[r];
                return t
            },
            insertBefore: function(t, e, n, r) {
                var a = (r = r || M.languages)[t]
                  , i = {};
                for (var l in a)
                    if (a.hasOwnProperty(l)) {
                        if (l == e)
                            for (var o in n)
                                n.hasOwnProperty(o) && (i[o] = n[o]);
                        n.hasOwnProperty(l) || (i[l] = a[l])
                    }
                var s = r[t];
                return r[t] = i,
                M.languages.DFS(M.languages, function(e, n) {
                    n === s && e != t && (this[e] = i)
                }),
                i
            },
            DFS: function e(n, t, r, a) {
                a = a || {};
                var i = M.util.objId;
                for (var l in n)
                    if (n.hasOwnProperty(l)) {
                        t.call(n, l, n[l], r || l);
                        var o = n[l]
                          , s = M.util.type(o);
                        "Object" !== s || a[i(o)] ? "Array" !== s || a[i(o)] || (a[i(o)] = !0,
                        e(o, t, l, a)) : (a[i(o)] = !0,
                        e(o, t, null, a))
                    }
            }
        },
        plugins: {},
        highlightAll: function(e, n) {
            M.highlightAllUnder(document, e, n)
        },
        highlightAllUnder: function(e, n, t) {
            var r = {
                callback: t,
                container: e,
                selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
            };
            M.hooks.run("before-highlightall", r),
            r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),
            M.hooks.run("before-all-elements-highlight", r);
            for (var a, i = 0; a = r.elements[i++]; )
                M.highlightElement(a, !0 === n, r.callback)
        },
        highlightElement: function(e, n, t) {
            var r = M.util.getLanguage(e)
              , a = M.languages[r];
            e.className = e.className.replace(c, "").replace(/\s+/g, " ") + " language-" + r;
            var i = e.parentElement;
            i && "pre" === i.nodeName.toLowerCase() && (i.className = i.className.replace(c, "").replace(/\s+/g, " ") + " language-" + r);
            var l = {
                element: e,
                language: r,
                grammar: a,
                code: e.textContent
            };
            function o(e) {
                l.highlightedCode = e,
                M.hooks.run("before-insert", l),
                l.element.innerHTML = l.highlightedCode,
                M.hooks.run("after-highlight", l),
                M.hooks.run("complete", l),
                t && t.call(l.element)
            }
            if (M.hooks.run("before-sanity-check", l),
            !l.code)
                return M.hooks.run("complete", l),
                void (t && t.call(l.element));
            if (M.hooks.run("before-highlight", l),
            l.grammar)
                if (n && u.Worker) {
                    var s = new Worker(M.filename);
                    s.onmessage = function(e) {
                        o(e.data)
                    }
                    ,
                    s.postMessage(JSON.stringify({
                        language: l.language,
                        code: l.code,
                        immediateClose: !0
                    }))
                } else
                    o(M.highlight(l.code, l.grammar, l.language));
            else
                o(M.util.encode(l.code))
        },
        highlight: function(e, n, t) {
            var r = {
                code: e,
                grammar: n,
                language: t
            };
            return M.hooks.run("before-tokenize", r),
            r.tokens = M.tokenize(r.code, r.grammar),
            M.hooks.run("after-tokenize", r),
            W.stringify(M.util.encode(r.tokens), r.language)
        },
        tokenize: function(e, n) {
            var t = n.rest;
            if (t) {
                for (var r in t)
                    n[r] = t[r];
                delete n.rest
            }
            var a = new i;
            return I(a, a.head, e),
            function e(n, t, r, a, i, l) {
                for (var o in r)
                    if (r.hasOwnProperty(o) && r[o]) {
                        var s = r[o];
                        s = Array.isArray(s) ? s : [s];
                        for (var u = 0; u < s.length; ++u) {
                            if (l && l.cause == o + "," + u)
                                return;
                            var c = s[u]
                              , g = c.inside
                              , f = !!c.lookbehind
                              , h = !!c.greedy
                              , d = 0
                              , v = c.alias;
                            if (h && !c.pattern.global) {
                                var p = c.pattern.toString().match(/[imsuy]*$/)[0];
                                c.pattern = RegExp(c.pattern.source, p + "g")
                            }
                            for (var m = c.pattern || c, y = a.next, k = i; y !== t.tail && !(l && k >= l.reach); k += y.value.length,
                            y = y.next) {
                                var b = y.value;
                                if (t.length > n.length)
                                    return;
                                if (!(b instanceof W)) {
                                    var x = 1;
                                    if (h && y != t.tail.prev) {
                                        m.lastIndex = k;
                                        var w = m.exec(n);
                                        if (!w)
                                            break;
                                        var A = w.index + (f && w[1] ? w[1].length : 0)
                                          , P = w.index + w[0].length
                                          , S = k;
                                        for (S += y.value.length; S <= A; )
                                            y = y.next,
                                            S += y.value.length;
                                        if (S -= y.value.length,
                                        k = S,
                                        y.value instanceof W)
                                            continue;
                                        for (var E = y; E !== t.tail && (S < P || "string" == typeof E.value); E = E.next)
                                            x++,
                                            S += E.value.length;
                                        x--,
                                        b = n.slice(k, S),
                                        w.index -= k
                                    } else {
                                        m.lastIndex = 0;
                                        var w = m.exec(b)
                                    }
                                    if (w) {
                                        f && (d = w[1] ? w[1].length : 0);
                                        var A = w.index + d
                                          , O = w[0].slice(d)
                                          , P = A + O.length
                                          , L = b.slice(0, A)
                                          , N = b.slice(P)
                                          , j = k + b.length;
                                        l && j > l.reach && (l.reach = j);
                                        var C = y.prev;
                                        L && (C = I(t, C, L),
                                        k += L.length),
                                        z(t, C, x);
                                        var _ = new W(o,g ? M.tokenize(O, g) : O,v,O);
                                        y = I(t, C, _),
                                        N && I(t, y, N),
                                        1 < x && e(n, t, r, y.prev, k, {
                                            cause: o + "," + u,
                                            reach: j
                                        })
                                    }
                                }
                            }
                        }
                    }
            }(e, a, n, a.head, 0),
            function(e) {
                var n = []
                  , t = e.head.next;
                for (; t !== e.tail; )
                    n.push(t.value),
                    t = t.next;
                return n
            }(a)
        },
        hooks: {
            all: {},
            add: function(e, n) {
                var t = M.hooks.all;
                t[e] = t[e] || [],
                t[e].push(n)
            },
            run: function(e, n) {
                var t = M.hooks.all[e];
                if (t && t.length)
                    for (var r, a = 0; r = t[a++]; )
                        r(n)
            }
        },
        Token: W
    };
    function W(e, n, t, r) {
        this.type = e,
        this.content = n,
        this.alias = t,
        this.length = 0 | (r || "").length
    }
    function i() {
        var e = {
            value: null,
            prev: null,
            next: null
        }
          , n = {
            value: null,
            prev: e,
            next: null
        };
        e.next = n,
        this.head = e,
        this.tail = n,
        this.length = 0
    }
    function I(e, n, t) {
        var r = n.next
          , a = {
            value: t,
            prev: n,
            next: r
        };
        return n.next = a,
        r.prev = a,
        e.length++,
        a
    }
    function z(e, n, t) {
        for (var r = n.next, a = 0; a < t && r !== e.tail; a++)
            r = r.next;
        (n.next = r).prev = n,
        e.length -= a
    }
    if (u.Prism = M,
    W.stringify = function n(e, t) {
        if ("string" == typeof e)
            return e;
        if (Array.isArray(e)) {
            var r = "";
            return e.forEach(function(e) {
                r += n(e, t)
            }),
            r
        }
        var a = {
            type: e.type,
            content: n(e.content, t),
            tag: "span",
            classes: ["token", e.type],
            attributes: {},
            language: t
        }
          , i = e.alias;
        i && (Array.isArray(i) ? Array.prototype.push.apply(a.classes, i) : a.classes.push(i)),
        M.hooks.run("wrap", a);
        var l = "";
        for (var o in a.attributes)
            l += " " + o + '="' + (a.attributes[o] || "").replace(/"/g, "&quot;") + '"';
        return "<" + a.tag + ' class="' + a.classes.join(" ") + '"' + l + ">" + a.content + "</" + a.tag + ">"
    }
    ,
    !u.document)
        return u.addEventListener && (M.disableWorkerMessageHandler || u.addEventListener("message", function(e) {
            var n = JSON.parse(e.data)
              , t = n.language
              , r = n.code
              , a = n.immediateClose;
            u.postMessage(M.highlight(r, M.languages[t], t)),
            a && u.close()
        }, !1)),
        M;
    var e = M.util.currentScript();
    function t() {
        M.manual || M.highlightAll()
    }
    if (e && (M.filename = e.src,
    e.hasAttribute("data-manual") && (M.manual = !0)),
    !M.manual) {
        var r = document.readyState;
        "loading" === r || "interactive" === r && e && e.defer ? document.addEventListener("DOMContentLoaded", t) : window.requestAnimationFrame ? window.requestAnimationFrame(t) : window.setTimeout(t, 16)
    }
    return M
}(_self);
"undefined" != typeof module && module.exports && (module.exports = Prism),
"undefined" != typeof global && (global.Prism = Prism);
Prism.languages.markup = {
    comment: /<!--[\s\S]*?-->/,
    prolog: /<\?[\s\S]+?\?>/,
    doctype: {
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: !0,
        inside: {
            "internal-subset": {
                pattern: /(\[)[\s\S]+(?=\]>$)/,
                lookbehind: !0,
                greedy: !0,
                inside: null
            },
            string: {
                pattern: /"[^"]*"|'[^']*'/,
                greedy: !0
            },
            punctuation: /^<!|>$|[[\]]/,
            "doctype-tag": /^DOCTYPE/,
            name: /[^\s<>'"]+/
        }
    },
    cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
    tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: !0,
        inside: {
            tag: {
                pattern: /^<\/?[^\s>\/]+/,
                inside: {
                    punctuation: /^<\/?/,
                    namespace: /^[^\s>\/:]+:/
                }
            },
            "attr-value": {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                    punctuation: [{
                        pattern: /^=/,
                        alias: "attr-equals"
                    }, /"|'/]
                }
            },
            punctuation: /\/?>/,
            "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: {
                    namespace: /^[^\s>\/:]+:/
                }
            }
        }
    },
    entity: [{
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
    }, /&#x?[\da-f]{1,8};/i]
},
Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity,
Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup,
Prism.hooks.add("wrap", function(a) {
    "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"))
}),
Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
    value: function(a, e) {
        var s = {};
        s["language-" + e] = {
            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
            lookbehind: !0,
            inside: Prism.languages[e]
        },
        s.cdata = /^<!\[CDATA\[|\]\]>$/i;
        var n = {
            "included-cdata": {
                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                inside: s
            }
        };
        n["language-" + e] = {
            pattern: /[\s\S]+/,
            inside: Prism.languages[e]
        };
        var t = {};
        t[a] = {
            pattern: RegExp("(<__[^]*?>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g, function() {
                return a
            }), "i"),
            lookbehind: !0,
            greedy: !0,
            inside: n
        },
        Prism.languages.insertBefore("markup", "cdata", t)
    }
}),
Prism.languages.html = Prism.languages.markup,
Prism.languages.mathml = Prism.languages.markup,
Prism.languages.svg = Prism.languages.markup,
Prism.languages.xml = Prism.languages.extend("markup", {}),
Prism.languages.ssml = Prism.languages.xml,
Prism.languages.atom = Prism.languages.xml,
Prism.languages.rss = Prism.languages.xml;
!function(e) {
    var s = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
    e.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
            pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
            inside: {
                rule: /^@[\w-]+/,
                "selector-function-argument": {
                    pattern: /(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,
                    lookbehind: !0,
                    alias: "selector"
                },
                keyword: {
                    pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                    lookbehind: !0
                }
            }
        },
        url: {
            pattern: RegExp("\\burl\\((?:" + s.source + "|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)", "i"),
            greedy: !0,
            inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/,
                string: {
                    pattern: RegExp("^" + s.source + "$"),
                    alias: "url"
                }
            }
        },
        selector: RegExp("[^{}\\s](?:[^{};\"']|" + s.source + ")*?(?=\\s*\\{)"),
        string: {
            pattern: s,
            greedy: !0
        },
        property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
        important: /!important\b/i,
        function: /[-a-z0-9]+(?=\()/i,
        punctuation: /[(){};:,]/
    },
    e.languages.css.atrule.inside.rest = e.languages.css;
    var t = e.languages.markup;
    t && (t.tag.addInlined("style", "css"),
    e.languages.insertBefore("inside", "attr-value", {
        "style-attr": {
            pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
            inside: {
                "attr-name": {
                    pattern: /^\s*style/i,
                    inside: t.tag.inside
                },
                punctuation: /^\s*=\s*['"]|['"]\s*$/,
                "attr-value": {
                    pattern: /.+/i,
                    inside: e.languages.css
                }
            },
            alias: "language-css"
        }
    }, t.tag))
}(Prism);
Prism.languages.clike = {
    comment: [{
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0
    }, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
    }],
    string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    "class-name": {
        pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: !0,
        inside: {
            punctuation: /[.\\]/
        }
    },
    keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    boolean: /\b(?:true|false)\b/,
    function: /\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
};
Prism.languages.javascript = Prism.languages.extend("clike", {
    "class-name": [Prism.languages.clike["class-name"], {
        pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
        lookbehind: !0
    }],
    keyword: [{
        pattern: /((?:^|})\s*)(?:catch|finally)\b/,
        lookbehind: !0
    }, {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0
    }],
    number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
    function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
}),
Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,
Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
        pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
        lookbehind: !0,
        greedy: !0
    },
    "function-variable": {
        pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
        alias: "function"
    },
    parameter: [{
        pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }, {
        pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
        inside: Prism.languages.javascript
    }, {
        pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }, {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
}),
Prism.languages.insertBefore("javascript", "string", {
    "template-string": {
        pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
        greedy: !0,
        inside: {
            "template-punctuation": {
                pattern: /^`|`$/,
                alias: "string"
            },
            interpolation: {
                pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
                lookbehind: !0,
                inside: {
                    "interpolation-punctuation": {
                        pattern: /^\${|}$/,
                        alias: "punctuation"
                    },
                    rest: Prism.languages.javascript
                }
            },
            string: /[\s\S]+/
        }
    }
}),
Prism.languages.markup && Prism.languages.markup.tag.addInlined("script", "javascript"),
Prism.languages.js = Prism.languages.javascript;
Prism.languages.abap = {
    comment: /^\*.*/m,
    string: /(`|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,
    "string-template": {
        pattern: /([|}])(?:\\.|[^\\|{\r\n])*(?=[|{])/,
        lookbehind: !0,
        alias: "string"
    },
    "eol-comment": {
        pattern: /(^|\s)".*/m,
        lookbehind: !0,
        alias: "comment"
    },
    keyword: {
        pattern: /(\s|\.|^)(?:SCIENTIFIC_WITH_LEADING_ZERO|SCALE_PRESERVING_SCIENTIFIC|RMC_COMMUNICATION_FAILURE|END-ENHANCEMENT-SECTION|MULTIPLY-CORRESPONDING|SUBTRACT-CORRESPONDING|VERIFICATION-MESSAGE|DIVIDE-CORRESPONDING|ENHANCEMENT-SECTION|CURRENCY_CONVERSION|RMC_SYSTEM_FAILURE|START-OF-SELECTION|MOVE-CORRESPONDING|RMC_INVALID_STATUS|CUSTOMER-FUNCTION|END-OF-DEFINITION|ENHANCEMENT-POINT|SYSTEM-EXCEPTIONS|ADD-CORRESPONDING|SCALE_PRESERVING|SELECTION-SCREEN|CURSOR-SELECTION|END-OF-SELECTION|LOAD-OF-PROGRAM|SCROLL-BOUNDARY|SELECTION-TABLE|EXCEPTION-TABLE|IMPLEMENTATIONS|PARAMETER-TABLE|RIGHT-JUSTIFIED|UNIT_CONVERSION|AUTHORITY-CHECK|LIST-PROCESSING|SIGN_AS_POSTFIX|COL_BACKGROUND|IMPLEMENTATION|INTERFACE-POOL|TRANSFORMATION|IDENTIFICATION|ENDENHANCEMENT|LINE-SELECTION|INITIALIZATION|LEFT-JUSTIFIED|SELECT-OPTIONS|SELECTION-SETS|COMMUNICATION|CORRESPONDING|DECIMAL_SHIFT|PRINT-CONTROL|VALUE-REQUEST|CHAIN-REQUEST|FUNCTION-POOL|FIELD-SYMBOLS|FUNCTIONALITY|INVERTED-DATE|SELECTION-SET|CLASS-METHODS|OUTPUT-LENGTH|CLASS-CODING|COL_NEGATIVE|ERRORMESSAGE|FIELD-GROUPS|HELP-REQUEST|NO-EXTENSION|NO-TOPOFPAGE|REDEFINITION|DISPLAY-MODE|ENDINTERFACE|EXIT-COMMAND|FIELD-SYMBOL|NO-SCROLLING|SHORTDUMP-ID|ACCESSPOLICY|CLASS-EVENTS|COL_POSITIVE|DECLARATIONS|ENHANCEMENTS|FILTER-TABLE|SWITCHSTATES|SYNTAX-CHECK|TRANSPORTING|ASYNCHRONOUS|SYNTAX-TRACE|TOKENIZATION|USER-COMMAND|WITH-HEADING|ABAP-SOURCE|BREAK-POINT|CHAIN-INPUT|COMPRESSION|FIXED-POINT|NEW-SECTION|NON-UNICODE|OCCURRENCES|RESPONSIBLE|SYSTEM-CALL|TRACE-TABLE|ABBREVIATED|CHAR-TO-HEX|END-OF-FILE|ENDFUNCTION|ENVIRONMENT|ASSOCIATION|COL_HEADING|EDITOR-CALL|END-OF-PAGE|ENGINEERING|IMPLEMENTED|INTENSIFIED|RADIOBUTTON|SYSTEM-EXIT|TOP-OF-PAGE|TRANSACTION|APPLICATION|CONCATENATE|DESTINATION|ENHANCEMENT|IMMEDIATELY|NO-GROUPING|PRECOMPILED|REPLACEMENT|TITLE-LINES|ACTIVATION|BYTE-ORDER|CLASS-POOL|CONNECTION|CONVERSION|DEFINITION|DEPARTMENT|EXPIRATION|INHERITING|MESSAGE-ID|NO-HEADING|PERFORMING|QUEUE-ONLY|RIGHTSPACE|SCIENTIFIC|STATUSINFO|STRUCTURES|SYNCPOINTS|WITH-TITLE|ATTRIBUTES|BOUNDARIES|CLASS-DATA|COL_NORMAL|DD\/MM\/YYYY|DESCENDING|INTERFACES|LINE-COUNT|MM\/DD\/YYYY|NON-UNIQUE|PRESERVING|SELECTIONS|STATEMENTS|SUBROUTINE|TRUNCATION|TYPE-POOLS|ARITHMETIC|BACKGROUND|ENDPROVIDE|EXCEPTIONS|IDENTIFIER|INDEX-LINE|OBLIGATORY|PARAMETERS|PERCENTAGE|PUSHBUTTON|RESOLUTION|COMPONENTS|DEALLOCATE|DISCONNECT|DUPLICATES|FIRST-LINE|HEAD-LINES|NO-DISPLAY|OCCURRENCE|RESPECTING|RETURNCODE|SUBMATCHES|TRACE-FILE|ASCENDING|BYPASSING|ENDMODULE|EXCEPTION|EXCLUDING|EXPORTING|INCREMENT|MATCHCODE|PARAMETER|PARTIALLY|PREFERRED|REFERENCE|REPLACING|RETURNING|SELECTION|SEPARATED|SPECIFIED|STATEMENT|TIMESTAMP|TYPE-POOL|ACCEPTING|APPENDAGE|ASSIGNING|COL_GROUP|COMPARING|CONSTANTS|DANGEROUS|IMPORTING|INSTANCES|LEFTSPACE|LOG-POINT|QUICKINFO|READ-ONLY|SCROLLING|SQLSCRIPT|STEP-LOOP|TOP-LINES|TRANSLATE|APPENDING|AUTHORITY|CHARACTER|COMPONENT|CONDITION|DIRECTORY|DUPLICATE|MESSAGING|RECEIVING|SUBSCREEN|ACCORDING|COL_TOTAL|END-LINES|ENDMETHOD|ENDSELECT|EXPANDING|EXTENSION|INCLUDING|INFOTYPES|INTERFACE|INTERVALS|LINE-SIZE|PF-STATUS|PROCEDURE|PROTECTED|REQUESTED|RESUMABLE|RIGHTPLUS|SAP-SPOOL|SECONDARY|STRUCTURE|SUBSTRING|TABLEVIEW|NUMOFCHAR|ADJACENT|ANALYSIS|ASSIGNED|BACKWARD|CHANNELS|CHECKBOX|CONTINUE|CRITICAL|DATAINFO|DD\/MM\/YY|DURATION|ENCODING|ENDCLASS|FUNCTION|LEFTPLUS|LINEFEED|MM\/DD\/YY|OVERFLOW|RECEIVED|SKIPPING|SORTABLE|STANDARD|SUBTRACT|SUPPRESS|TABSTRIP|TITLEBAR|TRUNCATE|UNASSIGN|WHENEVER|ANALYZER|COALESCE|COMMENTS|CONDENSE|DECIMALS|DEFERRED|ENDWHILE|EXPLICIT|KEYWORDS|MESSAGES|POSITION|PRIORITY|RECEIVER|RENAMING|TIMEZONE|TRAILING|ALLOCATE|CENTERED|CIRCULAR|CONTROLS|CURRENCY|DELETING|DESCRIBE|DISTANCE|ENDCATCH|EXPONENT|EXTENDED|GENERATE|IGNORING|INCLUDES|INTERNAL|MAJOR-ID|MODIFIER|NEW-LINE|OPTIONAL|PROPERTY|ROLLBACK|STARTING|SUPPLIED|ABSTRACT|CHANGING|CONTEXTS|CREATING|CUSTOMER|DATABASE|DAYLIGHT|DEFINING|DISTINCT|DIVISION|ENABLING|ENDCHAIN|ESCAPING|HARMLESS|IMPLICIT|INACTIVE|LANGUAGE|MINOR-ID|MULTIPLY|NEW-PAGE|NO-TITLE|POS_HIGH|SEPARATE|TEXTPOOL|TRANSFER|SELECTOR|DBMAXLEN|ITERATOR|SELECTOR|ARCHIVE|BIT-XOR|BYTE-CO|COLLECT|COMMENT|CURRENT|DEFAULT|DISPLAY|ENDFORM|EXTRACT|LEADING|LISTBOX|LOCATOR|MEMBERS|METHODS|NESTING|POS_LOW|PROCESS|PROVIDE|RAISING|RESERVE|SECONDS|SUMMARY|VISIBLE|BETWEEN|BIT-AND|BYTE-CS|CLEANUP|COMPUTE|CONTROL|CONVERT|DATASET|ENDCASE|FORWARD|HEADERS|HOTSPOT|INCLUDE|INVERSE|KEEPING|NO-ZERO|OBJECTS|OVERLAY|PADDING|PATTERN|PROGRAM|REFRESH|SECTION|SUMMING|TESTING|VERSION|WINDOWS|WITHOUT|BIT-NOT|BYTE-CA|BYTE-NA|CASTING|CONTEXT|COUNTRY|DYNAMIC|ENABLED|ENDLOOP|EXECUTE|FRIENDS|HANDLER|HEADING|INITIAL|\*-INPUT|LOGFILE|MAXIMUM|MINIMUM|NO-GAPS|NO-SIGN|PRAGMAS|PRIMARY|PRIVATE|REDUCED|REPLACE|REQUEST|RESULTS|UNICODE|WARNING|ALIASES|BYTE-CN|BYTE-NS|CALLING|COL_KEY|COLUMNS|CONNECT|ENDEXEC|ENTRIES|EXCLUDE|FILTERS|FURTHER|HELP-ID|LOGICAL|MAPPING|MESSAGE|NAMETAB|OPTIONS|PACKAGE|PERFORM|RECEIVE|STATICS|VARYING|BINDING|CHARLEN|GREATER|XSTRLEN|ACCEPT|APPEND|DETAIL|ELSEIF|ENDING|ENDTRY|FORMAT|FRAMES|GIVING|HASHED|HEADER|IMPORT|INSERT|MARGIN|MODULE|NATIVE|OBJECT|OFFSET|REMOTE|RESUME|SAVING|SIMPLE|SUBMIT|TABBED|TOKENS|UNIQUE|UNPACK|UPDATE|WINDOW|YELLOW|ACTUAL|ASPECT|CENTER|CURSOR|DELETE|DIALOG|DIVIDE|DURING|ERRORS|EVENTS|EXTEND|FILTER|HANDLE|HAVING|IGNORE|LITTLE|MEMORY|NO-GAP|OCCURS|OPTION|PERSON|PLACES|PUBLIC|REDUCE|REPORT|RESULT|SINGLE|SORTED|SWITCH|SYNTAX|TARGET|VALUES|WRITER|ASSERT|BLOCKS|BOUNDS|BUFFER|CHANGE|COLUMN|COMMIT|CONCAT|COPIES|CREATE|DDMMYY|DEFINE|ENDIAN|ESCAPE|EXPAND|KERNEL|LAYOUT|LEGACY|LEVELS|MMDDYY|NUMBER|OUTPUT|RANGES|READER|RETURN|SCREEN|SEARCH|SELECT|SHARED|SOURCE|STABLE|STATIC|SUBKEY|SUFFIX|TABLES|UNWIND|YYMMDD|ASSIGN|BACKUP|BEFORE|BINARY|BIT-OR|BLANKS|CLIENT|CODING|COMMON|DEMAND|DYNPRO|EXCEPT|EXISTS|EXPORT|FIELDS|GLOBAL|GROUPS|LENGTH|LOCALE|MEDIUM|METHOD|MODIFY|NESTED|OTHERS|REJECT|SCROLL|SUPPLY|SYMBOL|ENDFOR|STRLEN|ALIGN|BEGIN|BOUND|ENDAT|ENTRY|EVENT|FINAL|FLUSH|GRANT|INNER|SHORT|USING|WRITE|AFTER|BLACK|BLOCK|CLOCK|COLOR|COUNT|DUMMY|EMPTY|ENDDO|ENDON|GREEN|INDEX|INOUT|LEAVE|LEVEL|LINES|MODIF|ORDER|OUTER|RANGE|RESET|RETRY|RIGHT|SMART|SPLIT|STYLE|TABLE|THROW|UNDER|UNTIL|UPPER|UTF-8|WHERE|ALIAS|BLANK|CLEAR|CLOSE|EXACT|FETCH|FIRST|FOUND|GROUP|LLANG|LOCAL|OTHER|REGEX|SPOOL|TITLE|TYPES|VALID|WHILE|ALPHA|BOXED|CATCH|CHAIN|CHECK|CLASS|COVER|ENDIF|EQUIV|FIELD|FLOOR|FRAME|INPUT|LOWER|MATCH|NODES|PAGES|PRINT|RAISE|ROUND|SHIFT|SPACE|SPOTS|STAMP|STATE|TASKS|TIMES|TRMAC|ULINE|UNION|VALUE|WIDTH|EQUAL|LOG10|TRUNC|BLOB|CASE|CEIL|CLOB|COND|EXIT|FILE|GAPS|HOLD|INCL|INTO|KEEP|KEYS|LAST|LINE|LONG|LPAD|MAIL|MODE|OPEN|PINK|READ|ROWS|TEST|THEN|ZERO|AREA|BACK|BADI|BYTE|CAST|EDIT|EXEC|FAIL|FIND|FKEQ|FONT|FREE|GKEQ|HIDE|INIT|ITNO|LATE|LOOP|MAIN|MARK|MOVE|NEXT|NULL|RISK|ROLE|UNIT|WAIT|ZONE|BASE|CALL|CODE|DATA|DATE|FKGE|GKGE|HIGH|KIND|LEFT|LIST|MASK|MESH|NAME|NODE|PACK|PAGE|POOL|SEND|SIGN|SIZE|SOME|STOP|TASK|TEXT|TIME|USER|VARY|WITH|WORD|BLUE|CONV|COPY|DEEP|ELSE|FORM|FROM|HINT|ICON|JOIN|LIKE|LOAD|ONLY|PART|SCAN|SKIP|SORT|TYPE|UNIX|VIEW|WHEN|WORK|ACOS|ASIN|ATAN|COSH|EACH|FRAC|LESS|RTTI|SINH|SQRT|TANH|AVG|BIT|DIV|ISO|LET|OUT|PAD|SQL|ALL|CI_|CPI|END|LOB|LPI|MAX|MIN|NEW|OLE|RUN|SET|\?TO|YES|ABS|ADD|AND|BIG|FOR|HDB|JOB|LOW|NOT|SAP|TRY|VIA|XML|ANY|GET|IDS|KEY|MOD|OFF|PUT|RAW|RED|REF|SUM|TAB|XSD|CNT|COS|EXP|LOG|SIN|TAN|XOR|AT|CO|CP|DO|GT|ID|IF|NS|OR|BT|CA|CS|GE|NA|NB|EQ|IN|LT|NE|NO|OF|ON|PF|TO|AS|BY|CN|IS|LE|NP|UP|E|I|M|O|Z|C|X)\b/i,
        lookbehind: !0
    },
    number: /\b\d+\b/,
    operator: {
        pattern: /(\s)(?:\*\*?|<[=>]?|>=?|\?=|[-+\/=])(?=\s)/,
        lookbehind: !0
    },
    "string-operator": {
        pattern: /(\s)&&?(?=\s)/,
        lookbehind: !0,
        alias: "keyword"
    },
    "token-operator": [{
        pattern: /(\w)(?:->?|=>|[~|{}])(?=\w)/,
        lookbehind: !0,
        alias: "punctuation"
    }, {
        pattern: /[|{}]/,
        alias: "punctuation"
    }],
    punctuation: /[,.:()]/
};
!function(n) {
    var i = "(?:ALPHA|BIT|CHAR|CR|CRLF|CTL|DIGIT|DQUOTE|HEXDIG|HTAB|LF|LWSP|OCTET|SP|VCHAR|WSP)";
    Prism.languages.abnf = {
        comment: /;.*/,
        string: {
            pattern: /(?:%[is])?"[^"\n\r]*"/,
            greedy: !0,
            inside: {
                punctuation: /^%[is]/
            }
        },
        range: {
            pattern: /%(?:b[01]+-[01]+|d\d+-\d+|x[A-F\d]+-[A-F\d]+)/i,
            alias: "number"
        },
        terminal: {
            pattern: /%(?:b[01]+(?:\.[01]+)*|d\d+(?:\.\d+)*|x[A-F\d]+(?:\.[A-F\d]+)*)/i,
            alias: "number"
        },
        repetition: {
            pattern: /(^|[^\w-])(?:\d*\*\d*|\d+)/,
            lookbehind: !0,
            alias: "operator"
        },
        definition: {
            pattern: /(^[ \t]*)(?:[a-z][\w-]*|<[^>\r\n]*>)(?=\s*=)/m,
            lookbehind: !0,
            alias: "keyword",
            inside: {
                punctuation: /<|>/
            }
        },
        "core-rule": {
            pattern: RegExp("(?:(^|[^<\\w-])" + i + "|<" + i + ">)(?![\\w-])", "i"),
            lookbehind: !0,
            alias: ["rule", "constant"],
            inside: {
                punctuation: /<|>/
            }
        },
        rule: {
            pattern: /(^|[^<\w-])[a-z][\w-]*|<[^>\r\n]*>/i,
            lookbehind: !0,
            inside: {
                punctuation: /<|>/
            }
        },
        operator: /=\/?|\//,
        punctuation: /[()\[\]]/
    }
}();
Prism.languages.actionscript = Prism.languages.extend("javascript", {
    keyword: /\b(?:as|break|case|catch|class|const|default|delete|do|else|extends|finally|for|function|if|implements|import|in|instanceof|interface|internal|is|native|new|null|package|private|protected|public|return|super|switch|this|throw|try|typeof|use|var|void|while|with|dynamic|each|final|get|include|namespace|native|override|set|static)\b/,
    operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/
}),
Prism.languages.actionscript["class-name"].alias = "function",
Prism.languages.markup && Prism.languages.insertBefore("actionscript", "string", {
    xml: {
        pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,
        lookbehind: !0,
        inside: Prism.languages.markup
    }
});
Prism.languages.apacheconf = {
    comment: /#.*/,
    "directive-inline": {
        pattern: /(^\s*)\b(?:AcceptFilter|AcceptPathInfo|AccessFileName|Action|Add(?:Alt|AltByEncoding|AltByType|Charset|DefaultCharset|Description|Encoding|Handler|Icon|IconByEncoding|IconByType|InputFilter|Language|ModuleInfo|OutputFilter|OutputFilterByType|Type)|Alias|AliasMatch|Allow(?:CONNECT|EncodedSlashes|Methods|Override|OverrideList)?|Anonymous(?:_LogEmail|_MustGiveEmail|_NoUserID|_VerifyEmail)?|AsyncRequestWorkerFactor|Auth(?:BasicAuthoritative|BasicFake|BasicProvider|BasicUseDigestAlgorithm|DBDUserPWQuery|DBDUserRealmQuery|DBMGroupFile|DBMType|DBMUserFile|Digest(?:Algorithm|Domain|NonceLifetime|Provider|Qop|ShmemSize)|Form(?:Authoritative|Body|DisableNoStore|FakeBasicAuth|Location|LoginRequiredLocation|LoginSuccessLocation|LogoutLocation|Method|Mimetype|Password|Provider|SitePassphrase|Size|Username)|GroupFile|LDAP(?:AuthorizePrefix|BindAuthoritative|BindDN|BindPassword|CharsetConfig|CompareAsUser|CompareDNOnServer|DereferenceAliases|GroupAttribute|GroupAttributeIsDN|InitialBindAsUser|InitialBindPattern|MaxSubGroupDepth|RemoteUserAttribute|RemoteUserIsDN|SearchAsUser|SubGroupAttribute|SubGroupClass|Url)|Merging|Name|Type|UserFile|nCache(?:Context|Enable|ProvideFor|SOCache|Timeout)|nzFcgiCheckAuthnProvider|nzFcgiDefineProvider|zDBDLoginToReferer|zDBDQuery|zDBDRedirectQuery|zDBMType|zSendForbiddenOnFailure)|BalancerGrowth|BalancerInherit|BalancerMember|BalancerPersist|BrowserMatch|BrowserMatchNoCase|BufferSize|BufferedLogs|CGIDScriptTimeout|CGIMapExtension|Cache(?:DefaultExpire|DetailHeader|DirLength|DirLevels|Disable|Enable|File|Header|IgnoreCacheControl|IgnoreHeaders|IgnoreNoLastMod|IgnoreQueryString|IgnoreURLSessionIdentifiers|KeyBaseURL|LastModifiedFactor|Lock|LockMaxAge|LockPath|MaxExpire|MaxFileSize|MinExpire|MinFileSize|NegotiatedDocs|QuickHandler|ReadSize|ReadTime|Root|Socache(?:MaxSize|MaxTime|MinTime|ReadSize|ReadTime)?|StaleOnError|StoreExpired|StoreNoStore|StorePrivate)|CharsetDefault|CharsetOptions|CharsetSourceEnc|CheckCaseOnly|CheckSpelling|ChrootDir|ContentDigest|CookieDomain|CookieExpires|CookieName|CookieStyle|CookieTracking|CoreDumpDirectory|CustomLog|DBDExptime|DBDInitSQL|DBDKeep|DBDMax|DBDMin|DBDParams|DBDPersist|DBDPrepareSQL|DBDriver|DTracePrivileges|Dav|DavDepthInfinity|DavGenericLockDB|DavLockDB|DavMinTimeout|DefaultIcon|DefaultLanguage|DefaultRuntimeDir|DefaultType|Define|Deflate(?:BufferSize|CompressionLevel|FilterNote|InflateLimitRequestBody|InflateRatio(?:Burst|Limit)|MemLevel|WindowSize)|Deny|DirectoryCheckHandler|DirectoryIndex|DirectoryIndexRedirect|DirectorySlash|DocumentRoot|DumpIOInput|DumpIOOutput|EnableExceptionHook|EnableMMAP|EnableSendfile|Error|ErrorDocument|ErrorLog|ErrorLogFormat|Example|ExpiresActive|ExpiresByType|ExpiresDefault|ExtFilterDefine|ExtFilterOptions|ExtendedStatus|FallbackResource|FileETag|FilterChain|FilterDeclare|FilterProtocol|FilterProvider|FilterTrace|ForceLanguagePriority|ForceType|ForensicLog|GprofDir|GracefulShutdownTimeout|Group|Header|HeaderName|Heartbeat(?:Address|Listen|MaxServers|Storage)|HostnameLookups|ISAPI(?:AppendLogToErrors|AppendLogToQuery|CacheFile|FakeAsync|LogNotSupported|ReadAheadBuffer)|IdentityCheck|IdentityCheckTimeout|ImapBase|ImapDefault|ImapMenu|Include|IncludeOptional|Index(?:HeadInsert|Ignore|IgnoreReset|Options|OrderDefault|StyleSheet)|InputSed|KeepAlive|KeepAliveTimeout|KeptBodySize|LDAP(?:CacheEntries|CacheTTL|ConnectionPoolTTL|ConnectionTimeout|LibraryDebug|OpCacheEntries|OpCacheTTL|ReferralHopLimit|Referrals|Retries|RetryDelay|SharedCacheFile|SharedCacheSize|Timeout|TrustedClientCert|TrustedGlobalCert|TrustedMode|VerifyServerCert)|LanguagePriority|Limit(?:InternalRecursion|Request(?:Body|FieldSize|Fields|Line)|XMLRequestBody)|Listen|ListenBackLog|LoadFile|LoadModule|LogFormat|LogLevel|LogMessage|LuaAuthzProvider|LuaCodeCache|Lua(?:Hook(?:AccessChecker|AuthChecker|CheckUserID|Fixups|InsertFilter|Log|MapToStorage|TranslateName|TypeChecker)|Inherit|InputFilter|MapHandler|OutputFilter|PackageCPath|PackagePath|QuickHandler|Root|Scope)|MMapFile|Max(?:ConnectionsPerChild|KeepAliveRequests|MemFree|RangeOverlaps|RangeReversals|Ranges|RequestWorkers|SpareServers|SpareThreads|Threads)|MergeTrailers|MetaDir|MetaFiles|MetaSuffix|MimeMagicFile|MinSpareServers|MinSpareThreads|ModMimeUsePathInfo|ModemStandard|MultiviewsMatch|Mutex|NWSSLTrustedCerts|NWSSLUpgradeable|NameVirtualHost|NoProxy|Options|Order|OutputSed|PassEnv|PidFile|PrivilegesMode|Protocol|ProtocolEcho|Proxy(?:AddHeaders|BadHeader|Block|Domain|ErrorOverride|ExpressDBMFile|ExpressDBMType|ExpressEnable|FtpDirCharset|FtpEscapeWildcards|FtpListOnWildcard|HTML(?:BufSize|CharsetOut|DocType|Enable|Events|Extended|Fixups|Interp|Links|Meta|StripComments|URLMap)|IOBufferSize|MaxForwards|Pass(?:Inherit|InterpolateEnv|Match|Reverse|ReverseCookieDomain|ReverseCookiePath)?|PreserveHost|ReceiveBufferSize|Remote|RemoteMatch|Requests|SCGIInternalRedirect|SCGISendfile|Set|SourceAddress|Status|Timeout|Via)|RLimitCPU|RLimitMEM|RLimitNPROC|ReadmeName|ReceiveBufferSize|Redirect|RedirectMatch|RedirectPermanent|RedirectTemp|ReflectorHeader|RemoteIP(?:Header|InternalProxy|InternalProxyList|ProxiesHeader|TrustedProxy|TrustedProxyList)|RemoveCharset|RemoveEncoding|RemoveHandler|RemoveInputFilter|RemoveLanguage|RemoveOutputFilter|RemoveType|RequestHeader|RequestReadTimeout|Require|Rewrite(?:Base|Cond|Engine|Map|Options|Rule)|SSIETag|SSIEndTag|SSIErrorMsg|SSILastModified|SSILegacyExprParser|SSIStartTag|SSITimeFormat|SSIUndefinedEcho|SSL(?:CACertificateFile|CACertificatePath|CADNRequestFile|CADNRequestPath|CARevocationCheck|CARevocationFile|CARevocationPath|CertificateChainFile|CertificateFile|CertificateKeyFile|CipherSuite|Compression|CryptoDevice|Engine|FIPS|HonorCipherOrder|InsecureRenegotiation|OCSP(?:DefaultResponder|Enable|OverrideResponder|ResponderTimeout|ResponseMaxAge|ResponseTimeSkew|UseRequestNonce)|OpenSSLConfCmd|Options|PassPhraseDialog|Protocol|Proxy(?:CACertificateFile|CACertificatePath|CARevocation(?:Check|File|Path)|CheckPeer(?:CN|Expire|Name)|CipherSuite|Engine|MachineCertificate(?:ChainFile|File|Path)|Protocol|Verify|VerifyDepth)|RandomSeed|RenegBufferSize|Require|RequireSSL|SRPUnknownUserSeed|SRPVerifierFile|Session(?:Cache|CacheTimeout|TicketKeyFile|Tickets)|Stapling(?:Cache|ErrorCacheTimeout|FakeTryLater|ForceURL|ResponderTimeout|ResponseMaxAge|ResponseTimeSkew|ReturnResponderErrors|StandardCacheTimeout)|StrictSNIVHostCheck|UseStapling|UserName|VerifyClient|VerifyDepth)|Satisfy|ScoreBoardFile|Script(?:Alias|AliasMatch|InterpreterSource|Log|LogBuffer|LogLength|Sock)?|SecureListen|SeeRequestTail|SendBufferSize|Server(?:Admin|Alias|Limit|Name|Path|Root|Signature|Tokens)|Session(?:Cookie(?:Name|Name2|Remove)|Crypto(?:Cipher|Driver|Passphrase|PassphraseFile)|DBD(?:CookieName|CookieName2|CookieRemove|DeleteLabel|InsertLabel|PerUser|SelectLabel|UpdateLabel)|Env|Exclude|Header|Include|MaxAge)?|SetEnv|SetEnvIf|SetEnvIfExpr|SetEnvIfNoCase|SetHandler|SetInputFilter|SetOutputFilter|StartServers|StartThreads|Substitute|Suexec|SuexecUserGroup|ThreadLimit|ThreadStackSize|ThreadsPerChild|TimeOut|TraceEnable|TransferLog|TypesConfig|UnDefine|UndefMacro|UnsetEnv|Use|UseCanonicalName|UseCanonicalPhysicalPort|User|UserDir|VHostCGIMode|VHostCGIPrivs|VHostGroup|VHostPrivs|VHostSecure|VHostUser|Virtual(?:DocumentRoot|ScriptAlias)(?:IP)?|WatchdogInterval|XBitHack|xml2EncAlias|xml2EncDefault|xml2StartParse)\b/im,
        lookbehind: !0,
        alias: "property"
    },
    "directive-block": {
        pattern: /<\/?\b(?:Auth[nz]ProviderAlias|Directory|DirectoryMatch|Else|ElseIf|Files|FilesMatch|If|IfDefine|IfModule|IfVersion|Limit|LimitExcept|Location|LocationMatch|Macro|Proxy|Require(?:All|Any|None)|VirtualHost)\b *.*>/i,
        inside: {
            "directive-block": {
                pattern: /^<\/?\w+/,
                inside: {
                    punctuation: /^<\/?/
                },
                alias: "tag"
            },
            "directive-block-parameter": {
                pattern: /.*[^>]/,
                inside: {
                    punctuation: /:/,
                    string: {
                        pattern: /("|').*\1/,
                        inside: {
                            variable: /[$%]\{?(?:\w\.?[-+:]?)+\}?/
                        }
                    }
                },
                alias: "attr-value"
            },
            punctuation: />/
        },
        alias: "tag"
    },
    "directive-flags": {
        pattern: /\[(?:\w,?)+\]/,
        alias: "keyword"
    },
    string: {
        pattern: /("|').*\1/,
        inside: {
            variable: /[$%]\{?(?:\w\.?[-+:]?)+\}?/
        }
    },
    variable: /[$%]\{?(?:\w\.?[-+:]?)+\}?/,
    regex: /\^?.*\$|\^.*\$?/
};
Prism.languages.apl = {
    comment: /(?:⍝|#[! ]).*$/m,
    string: {
        pattern: /'(?:[^'\r\n]|'')*'/,
        greedy: !0
    },
    number: /¯?(?:\d*\.?\b\d+(?:e[+¯]?\d+)?|¯|∞)(?:j¯?(?:\d*\.?\d+(?:e[+¯]?\d+)?|¯|∞))?/i,
    statement: /:[A-Z][a-z][A-Za-z]*\b/,
    "system-function": {
        pattern: /⎕[A-Z]+/i,
        alias: "function"
    },
    constant: /[⍬⌾#⎕⍞]/,
    function: /[-+×÷⌈⌊∣|⍳⍸?*⍟○!⌹<≤=>≥≠≡≢∊⍷∪∩~∨∧⍱⍲⍴,⍪⌽⊖⍉↑↓⊂⊃⊆⊇⌷⍋⍒⊤⊥⍕⍎⊣⊢⍁⍂≈⍯↗¤→]/,
    "monadic-operator": {
        pattern: /[\\\/⌿⍀¨⍨⌶&∥]/,
        alias: "operator"
    },
    "dyadic-operator": {
        pattern: /[.⍣⍠⍤∘⌸@⌺⍥]/,
        alias: "operator"
    },
    assignment: {
        pattern: /←/,
        alias: "keyword"
    },
    punctuation: /[\[;\]()◇⋄]/,
    dfn: {
        pattern: /[{}⍺⍵⍶⍹∇⍫:]/,
        alias: "builtin"
    }
};
Prism.languages.c = Prism.languages.extend("clike", {
    comment: {
        pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
        greedy: !0
    },
    "class-name": {
        pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+/,
        lookbehind: !0
    },
    keyword: /\b(?:__attribute__|_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
    function: /[a-z_]\w*(?=\s*\()/i,
    operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
    number: /(?:\b0x(?:[\da-f]+\.?[\da-f]*|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)[ful]*/i
}),
Prism.languages.insertBefore("c", "string", {
    macro: {
        pattern: /(^\s*)#\s*[a-z]+(?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
        lookbehind: !0,
        greedy: !0,
        alias: "property",
        inside: {
            string: [{
                pattern: /^(#\s*include\s*)<[^>]+>/,
                lookbehind: !0
            }, Prism.languages.c.string],
            comment: Prism.languages.c.comment,
            directive: {
                pattern: /^(#\s*)[a-z]+/,
                lookbehind: !0,
                alias: "keyword"
            },
            "directive-hash": /^#/,
            punctuation: /##|\\(?=[\r\n])/,
            expression: {
                pattern: /\S[\s\S]*/,
                inside: Prism.languages.c
            }
        }
    },
    constant: /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/
}),
delete Prism.languages.c.boolean;
!function(e) {
    var t = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char8_t|char16_t|char32_t|class|compl|concept|const|consteval|constexpr|constinit|const_cast|continue|co_await|co_return|co_yield|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/;
    e.languages.cpp = e.languages.extend("c", {
        "class-name": [{
            pattern: RegExp("(\\b(?:class|concept|enum|struct|typename)\\s+)(?!<keyword>)\\w+".replace(/<keyword>/g, function() {
                return t.source
            })),
            lookbehind: !0
        }, /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/, /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i, /\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],
        keyword: t,
        number: {
            pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+\.?[\da-f']*|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+\.?[\d']*|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]*/i,
            greedy: !0
        },
        operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
        boolean: /\b(?:true|false)\b/
    }),
    e.languages.insertBefore("cpp", "string", {
        "raw-string": {
            pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
            alias: "string",
            greedy: !0
        }
    }),
    e.languages.insertBefore("cpp", "class-name", {
        "base-clause": {
            pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)(?:[^;{}"'])+?(?=\s*[;{])/,
            lookbehind: !0,
            greedy: !0,
            inside: e.languages.extend("cpp", {})
        }
    }),
    e.languages.insertBefore("inside", "operator", {
        "class-name": /\b[a-z_]\w*\b(?!\s*::)/i
    }, e.languages.cpp["base-clause"])
}(Prism);
Prism.languages.arduino = Prism.languages.extend("cpp", {
    keyword: /\b(?:setup|if|else|while|do|for|return|in|instanceof|default|function|loop|goto|switch|case|new|try|throw|catch|finally|null|break|continue|boolean|bool|void|byte|word|string|String|array|int|long|integer|double)\b/,
    builtin: /\b(?:KeyboardController|MouseController|SoftwareSerial|EthernetServer|EthernetClient|LiquidCrystal|LiquidCrystal_I2C|RobotControl|GSMVoiceCall|EthernetUDP|EsploraTFT|HttpClient|RobotMotor|WiFiClient|GSMScanner|FileSystem|Scheduler|GSMServer|YunClient|YunServer|IPAddress|GSMClient|GSMModem|Keyboard|Ethernet|Console|GSMBand|Esplora|Stepper|Process|WiFiUDP|GSM_SMS|Mailbox|USBHost|Firmata|PImage|Client|Server|GSMPIN|FileIO|Bridge|Serial|EEPROM|Stream|Mouse|Audio|Servo|File|Task|GPRS|WiFi|Wire|TFT|GSM|SPI|SD|runShellCommandAsynchronously|analogWriteResolution|retrieveCallingNumber|printFirmwareVersion|analogReadResolution|sendDigitalPortPair|noListenOnLocalhost|readJoystickButton|setFirmwareVersion|readJoystickSwitch|scrollDisplayRight|getVoiceCallStatus|scrollDisplayLeft|writeMicroseconds|delayMicroseconds|beginTransmission|getSignalStrength|runAsynchronously|getAsynchronously|listenOnLocalhost|getCurrentCarrier|readAccelerometer|messageAvailable|sendDigitalPorts|lineFollowConfig|countryNameWrite|runShellCommand|readStringUntil|rewindDirectory|readTemperature|setClockDivider|readLightSensor|endTransmission|analogReference|detachInterrupt|countryNameRead|attachInterrupt|encryptionType|readBytesUntil|robotNameWrite|readMicrophone|robotNameRead|cityNameWrite|userNameWrite|readJoystickY|readJoystickX|mouseReleased|openNextFile|scanNetworks|noInterrupts|digitalWrite|beginSpeaker|mousePressed|isActionDone|mouseDragged|displayLogos|noAutoscroll|addParameter|remoteNumber|getModifiers|keyboardRead|userNameRead|waitContinue|processInput|parseCommand|printVersion|readNetworks|writeMessage|blinkVersion|cityNameRead|readMessage|setDataMode|parsePacket|isListening|setBitOrder|beginPacket|isDirectory|motorsWrite|drawCompass|digitalRead|clearScreen|serialEvent|rightToLeft|setTextSize|leftToRight|requestFrom|keyReleased|compassRead|analogWrite|interrupts|WiFiServer|disconnect|playMelody|parseFloat|autoscroll|getPINUsed|setPINUsed|setTimeout|sendAnalog|readSlider|analogRead|beginWrite|createChar|motorsStop|keyPressed|tempoWrite|readButton|subnetMask|debugPrint|macAddress|writeGreen|randomSeed|attachGPRS|readString|sendString|remotePort|releaseAll|mouseMoved|background|getXChange|getYChange|answerCall|getResult|voiceCall|endPacket|constrain|getSocket|writeJSON|getButton|available|connected|findUntil|readBytes|exitValue|readGreen|writeBlue|startLoop|IPAddress|isPressed|sendSysex|pauseMode|gatewayIP|setCursor|getOemKey|tuneWrite|noDisplay|loadImage|switchPIN|onRequest|onReceive|changePIN|playFile|noBuffer|parseInt|overflow|checkPIN|knobRead|beginTFT|bitClear|updateIR|bitWrite|position|writeRGB|highByte|writeRed|setSpeed|readBlue|noStroke|remoteIP|transfer|shutdown|hangCall|beginSMS|endWrite|attached|maintain|noCursor|checkReg|checkPUK|shiftOut|isValid|shiftIn|pulseIn|connect|println|localIP|pinMode|getIMEI|display|noBlink|process|getBand|running|beginSD|drawBMP|lowByte|setBand|release|bitRead|prepare|pointTo|readRed|setMode|noFill|remove|listen|stroke|detach|attach|noTone|exists|buffer|height|bitSet|circle|config|cursor|random|IRread|setDNS|endSMS|getKey|micros|millis|begin|print|write|ready|flush|width|isPIN|blink|clear|press|mkdir|rmdir|close|point|yield|image|BSSID|click|delay|read|text|move|peek|beep|rect|line|open|seek|fill|size|turn|stop|home|find|step|tone|sqrt|RSSI|SSID|end|bit|tan|cos|sin|pow|map|abs|max|min|get|run|put)\b/,
    constant: /\b(?:DIGITAL_MESSAGE|FIRMATA_STRING|ANALOG_MESSAGE|REPORT_DIGITAL|REPORT_ANALOG|INPUT_PULLUP|SET_PIN_MODE|INTERNAL2V56|SYSTEM_RESET|LED_BUILTIN|INTERNAL1V1|SYSEX_START|INTERNAL|EXTERNAL|DEFAULT|OUTPUT|INPUT|HIGH|LOW)\b/
});
!function(t) {
    var n = {
        pattern: /(^[ \t]*)\[(?!\[)(?:(["'$`])(?:(?!\2)[^\\]|\\.)*\2|\[(?:[^\]\\]|\\.)*\]|[^\]\\]|\\.)*\]/m,
        lookbehind: !0,
        inside: {
            quoted: {
                pattern: /([$`])(?:(?!\1)[^\\]|\\.)*\1/,
                inside: {
                    punctuation: /^[$`]|[$`]$/
                }
            },
            interpreted: {
                pattern: /'(?:[^'\\]|\\.)*'/,
                inside: {
                    punctuation: /^'|'$/
                }
            },
            string: /"(?:[^"\\]|\\.)*"/,
            variable: /\w+(?==)/,
            punctuation: /^\[|\]$|,/,
            operator: /=/,
            "attr-value": /(?!^\s+$).+/
        }
    }
      , a = t.languages.asciidoc = {
        "comment-block": {
            pattern: /^(\/{4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1/m,
            alias: "comment"
        },
        table: {
            pattern: /^\|={3,}(?:(?:\r?\n|\r).*)*?(?:\r?\n|\r)\|={3,}$/m,
            inside: {
                specifiers: {
                    pattern: /(?!\|)(?:(?:(?:\d+(?:\.\d+)?|\.\d+)[+*])?(?:[<^>](?:\.[<^>])?|\.[<^>])?[a-z]*)(?=\|)/,
                    alias: "attr-value"
                },
                punctuation: {
                    pattern: /(^|[^\\])[|!]=*/,
                    lookbehind: !0
                }
            }
        },
        "passthrough-block": {
            pattern: /^(\+{4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1$/m,
            inside: {
                punctuation: /^\++|\++$/
            }
        },
        "literal-block": {
            pattern: /^(-{4,}|\.{4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1$/m,
            inside: {
                punctuation: /^(?:-+|\.+)|(?:-+|\.+)$/
            }
        },
        "other-block": {
            pattern: /^(--|\*{4,}|_{4,}|={4,})(?:\r?\n|\r)(?:[\s\S]*(?:\r?\n|\r))??\1$/m,
            inside: {
                punctuation: /^(?:-+|\*+|_+|=+)|(?:-+|\*+|_+|=+)$/
            }
        },
        "list-punctuation": {
            pattern: /(^[ \t]*)(?:-|\*{1,5}|\.{1,5}|(?:[a-z]|\d+)\.|[xvi]+\))(?= )/im,
            lookbehind: !0,
            alias: "punctuation"
        },
        "list-label": {
            pattern: /(^[ \t]*)[a-z\d].+(?::{2,4}|;;)(?=\s)/im,
            lookbehind: !0,
            alias: "symbol"
        },
        "indented-block": {
            pattern: /((\r?\n|\r)\2)([ \t]+)\S.*(?:(?:\r?\n|\r)\3.+)*(?=\2{2}|$)/,
            lookbehind: !0
        },
        comment: /^\/\/.*/m,
        title: {
            pattern: /^.+(?:\r?\n|\r)(?:={3,}|-{3,}|~{3,}|\^{3,}|\+{3,})$|^={1,5} +.+|^\.(?![\s.]).*/m,
            alias: "important",
            inside: {
                punctuation: /^(?:\.|=+)|(?:=+|-+|~+|\^+|\++)$/
            }
        },
        "attribute-entry": {
            pattern: /^:[^:\r\n]+:(?: .*?(?: \+(?:\r?\n|\r).*?)*)?$/m,
            alias: "tag"
        },
        attributes: n,
        hr: {
            pattern: /^'{3,}$/m,
            alias: "punctuation"
        },
        "page-break": {
            pattern: /^<{3,}$/m,
            alias: "punctuation"
        },
        admonition: {
            pattern: /^(?:TIP|NOTE|IMPORTANT|WARNING|CAUTION):/m,
            alias: "keyword"
        },
        callout: [{
            pattern: /(^[ \t]*)<?\d*>/m,
            lookbehind: !0,
            alias: "symbol"
        }, {
            pattern: /<\d+>/,
            alias: "symbol"
        }],
        macro: {
            pattern: /\b[a-z\d][a-z\d-]*::?(?:(?:\S+)??\[(?:[^\]\\"]|(["'])(?:(?!\1)[^\\]|\\.)*\1|\\.)*\])/,
            inside: {
                function: /^[a-z\d-]+(?=:)/,
                punctuation: /^::?/,
                attributes: {
                    pattern: /(?:\[(?:[^\]\\"]|(["'])(?:(?!\1)[^\\]|\\.)*\1|\\.)*\])/,
                    inside: n.inside
                }
            }
        },
        inline: {
            pattern: /(^|[^\\])(?:(?:\B\[(?:[^\]\\"]|(["'])(?:(?!\2)[^\\]|\\.)*\2|\\.)*\])?(?:\b_(?!\s)(?: _|[^_\\\r\n]|\\.)+(?:(?:\r?\n|\r)(?: _|[^_\\\r\n]|\\.)+)*_\b|\B``(?!\s).+?(?:(?:\r?\n|\r).+?)*''\B|\B`(?!\s)(?:[^`'\s]|\s+\S)+['`]\B|\B(['*+#])(?!\s)(?: \3|(?!\3)[^\\\r\n]|\\.)+(?:(?:\r?\n|\r)(?: \3|(?!\3)[^\\\r\n]|\\.)+)*\3\B)|(?:\[(?:[^\]\\"]|(["'])(?:(?!\4)[^\\]|\\.)*\4|\\.)*\])?(?:(__|\*\*|\+\+\+?|##|\$\$|[~^]).+?(?:(?:\r?\n|\r).+?)*\5|\{[^}\r\n]+\}|\[\[\[?.+?(?:(?:\r?\n|\r).+?)*\]?\]\]|<<.+?(?:(?:\r?\n|\r).+?)*>>|\(\(\(?.+?(?:(?:\r?\n|\r).+?)*\)?\)\)))/m,
            lookbehind: !0,
            inside: {
                attributes: n,
                url: {
                    pattern: /^(?:\[\[\[?.+?\]?\]\]|<<.+?>>)$/,
                    inside: {
                        punctuation: /^(?:\[\[\[?|<<)|(?:\]\]\]?|>>)$/
                    }
                },
                "attribute-ref": {
                    pattern: /^\{.+\}$/,
                    inside: {
                        variable: {
                            pattern: /(^\{)[a-z\d,+_-]+/,
                            lookbehind: !0
                        },
                        operator: /^[=?!#%@$]|!(?=[:}])/,
                        punctuation: /^\{|\}$|::?/
                    }
                },
                italic: {
                    pattern: /^(['_])[\s\S]+\1$/,
                    inside: {
                        punctuation: /^(?:''?|__?)|(?:''?|__?)$/
                    }
                },
                bold: {
                    pattern: /^\*[\s\S]+\*$/,
                    inside: {
                        punctuation: /^\*\*?|\*\*?$/
                    }
                },
                punctuation: /^(?:``?|\+{1,3}|##?|\$\$|[~^]|\(\(\(?)|(?:''?|\+{1,3}|##?|\$\$|[~^`]|\)?\)\))$/
            }
        },
        replacement: {
            pattern: /\((?:C|TM|R)\)/,
            alias: "builtin"
        },
        entity: /&#?[\da-z]{1,8};/i,
        "line-continuation": {
            pattern: /(^| )\+$/m,
            lookbehind: !0,
            alias: "punctuation"
        }
    };
    function i(t) {
        for (var n = {}, i = 0, e = (t = t.split(" ")).length; i < e; i++)
            n[t[i]] = a[t[i]];
        return n
    }
    n.inside.interpreted.inside.rest = i("macro inline replacement entity"),
    a["passthrough-block"].inside.rest = i("macro"),
    a["literal-block"].inside.rest = i("callout"),
    a.table.inside.rest = i("comment-block passthrough-block literal-block other-block list-punctuation indented-block comment title attribute-entry attributes hr page-break admonition list-label callout macro inline replacement entity line-continuation"),
    a["other-block"].inside.rest = i("table list-punctuation indented-block comment attribute-entry attributes hr page-break admonition list-label macro inline replacement entity line-continuation"),
    a.title.inside.rest = i("macro inline replacement entity"),
    t.hooks.add("wrap", function(t) {
        "entity" === t.type && (t.attributes.title = t.content.replace(/&amp;/, "&"))
    }),
    t.languages.adoc = t.languages.asciidoc
}(Prism);
!function(s) {
    function a(e, s) {
        return e.replace(/<<(\d+)>>/g, function(e, n) {
            return "(?:" + s[+n] + ")"
        })
    }
    function t(e, n, s) {
        return RegExp(a(e, n), s || "")
    }
    function e(e, n) {
        for (var s = 0; s < n; s++)
            e = e.replace(/<<self>>/g, function() {
                return "(?:" + e + ")"
            });
        return e.replace(/<<self>>/g, "[^\\s\\S]")
    }
    var n = "bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void"
      , r = "class enum interface struct"
      , i = "add alias and ascending async await by descending from get global group into join let nameof not notnull on or orderby partial remove select set unmanaged value when where where"
      , o = "abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";
    function l(e) {
        return "\\b(?:" + e.trim().replace(/ /g, "|") + ")\\b"
    }
    var d = l(r)
      , p = RegExp(l(n + " " + r + " " + i + " " + o))
      , c = l(r + " " + i + " " + o)
      , u = l(n + " " + r + " " + o)
      , g = e("<(?:[^<>;=+\\-*/%&|^]|<<self>>)*>", 2)
      , b = e("\\((?:[^()]|<<self>>)*\\)", 2)
      , h = "@?\\b[A-Za-z_]\\w*\\b"
      , f = a("<<0>>(?:\\s*<<1>>)?", [h, g])
      , m = a("(?!<<0>>)<<1>>(?:\\s*\\.\\s*<<1>>)*", [c, f])
      , k = "\\[\\s*(?:,\\s*)*\\]"
      , y = a("<<0>>(?:\\s*(?:\\?\\s*)?<<1>>)*(?:\\s*\\?)?", [m, k])
      , w = a("(?:<<0>>|<<1>>)(?:\\s*(?:\\?\\s*)?<<2>>)*(?:\\s*\\?)?", [a("\\(<<0>>+(?:,<<0>>+)+\\)", [a("[^,()<>[\\];=+\\-*/%&|^]|<<0>>|<<1>>|<<2>>", [g, b, k])]), m, k])
      , v = {
        keyword: p,
        punctuation: /[<>()?,.:[\]]/
    }
      , x = "'(?:[^\r\n'\\\\]|\\\\.|\\\\[Uux][\\da-fA-F]{1,8})'"
      , $ = '"(?:\\\\.|[^\\\\"\r\n])*"';
    s.languages.csharp = s.languages.extend("clike", {
        string: [{
            pattern: t("(^|[^$\\\\])<<0>>", ['@"(?:""|\\\\[^]|[^\\\\"])*"(?!")']),
            lookbehind: !0,
            greedy: !0
        }, {
            pattern: t("(^|[^@$\\\\])<<0>>", [$]),
            lookbehind: !0,
            greedy: !0
        }, {
            pattern: RegExp(x),
            greedy: !0,
            alias: "character"
        }],
        "class-name": [{
            pattern: t("(\\busing\\s+static\\s+)<<0>>(?=\\s*;)", [m]),
            lookbehind: !0,
            inside: v
        }, {
            pattern: t("(\\busing\\s+<<0>>\\s*=\\s*)<<1>>(?=\\s*;)", [h, w]),
            lookbehind: !0,
            inside: v
        }, {
            pattern: t("(\\busing\\s+)<<0>>(?=\\s*=)", [h]),
            lookbehind: !0
        }, {
            pattern: t("(\\b<<0>>\\s+)<<1>>", [d, f]),
            lookbehind: !0,
            inside: v
        }, {
            pattern: t("(\\bcatch\\s*\\(\\s*)<<0>>", [m]),
            lookbehind: !0,
            inside: v
        }, {
            pattern: t("(\\bwhere\\s+)<<0>>", [h]),
            lookbehind: !0
        }, {
            pattern: t("(\\b(?:is(?:\\s+not)?|as)\\s+)<<0>>", [y]),
            lookbehind: !0,
            inside: v
        }, {
            pattern: t("\\b<<0>>(?=\\s+(?!<<1>>)<<2>>(?:\\s*[=,;:{)\\]]|\\s+(?:in|when)\\b))", [w, u, h]),
            inside: v
        }],
        keyword: p,
        number: /(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:ul|lu|[dflmu])?\b/i,
        operator: />>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,
        punctuation: /\?\.?|::|[{}[\];(),.:]/
    }),
    s.languages.insertBefore("csharp", "number", {
        range: {
            pattern: /\.\./,
            alias: "operator"
        }
    }),
    s.languages.insertBefore("csharp", "punctuation", {
        "named-parameter": {
            pattern: t("([(,]\\s*)<<0>>(?=\\s*:)", [h]),
            lookbehind: !0,
            alias: "punctuation"
        }
    }),
    s.languages.insertBefore("csharp", "class-name", {
        namespace: {
            pattern: t("(\\b(?:namespace|using)\\s+)<<0>>(?:\\s*\\.\\s*<<0>>)*(?=\\s*[;{])", [h]),
            lookbehind: !0,
            inside: {
                punctuation: /\./
            }
        },
        "type-expression": {
            pattern: t("(\\b(?:default|typeof|sizeof)\\s*\\(\\s*)(?:[^()\\s]|\\s(?!\\s*\\))|<<0>>)*(?=\\s*\\))", [b]),
            lookbehind: !0,
            alias: "class-name",
            inside: v
        },
        "return-type": {
            pattern: t("<<0>>(?=\\s+(?:<<1>>\\s*(?:=>|[({]|\\.\\s*this\\s*\\[)|this\\s*\\[))", [w, m]),
            inside: v,
            alias: "class-name"
        },
        "constructor-invocation": {
            pattern: t("(\\bnew\\s+)<<0>>(?=\\s*[[({])", [w]),
            lookbehind: !0,
            inside: v,
            alias: "class-name"
        },
        "generic-method": {
            pattern: t("<<0>>\\s*<<1>>(?=\\s*\\()", [h, g]),
            inside: {
                function: t("^<<0>>", [h]),
                generic: {
                    pattern: RegExp(g),
                    alias: "class-name",
                    inside: v
                }
            }
        },
        "type-list": {
            pattern: t("\\b((?:<<0>>\\s+<<1>>|where\\s+<<2>>)\\s*:\\s*)(?:<<3>>|<<4>>)(?:\\s*,\\s*(?:<<3>>|<<4>>))*(?=\\s*(?:where|[{;]|=>|$))", [d, f, h, w, p.source]),
            lookbehind: !0,
            inside: {
                keyword: p,
                "class-name": {
                    pattern: RegExp(w),
                    greedy: !0,
                    inside: v
                },
                punctuation: /,/
            }
        },
        preprocessor: {
            pattern: /(^\s*)#.*/m,
            lookbehind: !0,
            alias: "property",
            inside: {
                directive: {
                    pattern: /(\s*#)\b(?:define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,
                    lookbehind: !0,
                    alias: "keyword"
                }
            }
        }
    });
    var _ = $ + "|" + x
      , B = a("/(?![*/])|//[^\r\n]*[\r\n]|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>", [_])
      , E = e(a("[^\"'/()]|<<0>>|\\(<<self>>*\\)", [B]), 2)
      , R = "\\b(?:assembly|event|field|method|module|param|property|return|type)\\b"
      , P = a("<<0>>(?:\\s*\\(<<1>>*\\))?", [m, E]);
    s.languages.insertBefore("csharp", "class-name", {
        attribute: {
            pattern: t("((?:^|[^\\s\\w>)?])\\s*\\[\\s*)(?:<<0>>\\s*:\\s*)?<<1>>(?:\\s*,\\s*<<1>>)*(?=\\s*\\])", [R, P]),
            lookbehind: !0,
            greedy: !0,
            inside: {
                target: {
                    pattern: t("^<<0>>(?=\\s*:)", [R]),
                    alias: "keyword"
                },
                "attribute-arguments": {
                    pattern: t("\\(<<0>>*\\)", [E]),
                    inside: s.languages.csharp
                },
                "class-name": {
                    pattern: RegExp(m),
                    inside: {
                        punctuation: /\./
                    }
                },
                punctuation: /[:,]/
            }
        }
    });
    var z = ":[^}\r\n]+"
      , S = e(a("[^\"'/()]|<<0>>|\\(<<self>>*\\)", [B]), 2)
      , j = a("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}", [S, z])
      , A = e(a("[^\"'/()]|/(?!\\*)|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>|\\(<<self>>*\\)", [_]), 2)
      , F = a("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}", [A, z]);
    function U(e, n) {
        return {
            interpolation: {
                pattern: t("((?:^|[^{])(?:\\{\\{)*)<<0>>", [e]),
                lookbehind: !0,
                inside: {
                    "format-string": {
                        pattern: t("(^\\{(?:(?![}:])<<0>>)*)<<1>>(?=\\}$)", [n, z]),
                        lookbehind: !0,
                        inside: {
                            punctuation: /^:/
                        }
                    },
                    punctuation: /^\{|\}$/,
                    expression: {
                        pattern: /[\s\S]+/,
                        alias: "language-csharp",
                        inside: s.languages.csharp
                    }
                }
            },
            string: /[\s\S]+/
        }
    }
    s.languages.insertBefore("csharp", "string", {
        "interpolation-string": [{
            pattern: t('(^|[^\\\\])(?:\\$@|@\\$)"(?:""|\\\\[^]|\\{\\{|<<0>>|[^\\\\{"])*"', [j]),
            lookbehind: !0,
            greedy: !0,
            inside: U(j, S)
        }, {
            pattern: t('(^|[^@\\\\])\\$"(?:\\\\.|\\{\\{|<<0>>|[^\\\\"{])*"', [F]),
            lookbehind: !0,
            greedy: !0,
            inside: U(F, A)
        }]
    })
}(Prism),
Prism.languages.dotnet = Prism.languages.cs = Prism.languages.csharp;
Prism.languages.aspnet = Prism.languages.extend("markup", {
    "page-directive": {
        pattern: /<%\s*@.*%>/i,
        alias: "tag",
        inside: {
            "page-directive": {
                pattern: /<%\s*@\s*(?:Assembly|Control|Implements|Import|Master(?:Type)?|OutputCache|Page|PreviousPageType|Reference|Register)?|%>/i,
                alias: "tag"
            },
            rest: Prism.languages.markup.tag.inside
        }
    },
    directive: {
        pattern: /<%.*%>/i,
        alias: "tag",
        inside: {
            directive: {
                pattern: /<%\s*?[$=%#:]{0,2}|%>/i,
                alias: "tag"
            },
            rest: Prism.languages.csharp
        }
    }
}),
Prism.languages.aspnet.tag.pattern = /<(?!%)\/?[^\s>\/]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
Prism.languages.insertBefore("inside", "punctuation", {
    directive: Prism.languages.aspnet.directive
}, Prism.languages.aspnet.tag.inside["attr-value"]),
Prism.languages.insertBefore("aspnet", "comment", {
    "asp-comment": {
        pattern: /<%--[\s\S]*?--%>/,
        alias: ["asp", "comment"]
    }
}),
Prism.languages.insertBefore("aspnet", Prism.languages.javascript ? "script" : "tag", {
    "asp-script": {
        pattern: /(<script(?=.*runat=['"]?server['"]?)[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
        lookbehind: !0,
        alias: ["asp", "script"],
        inside: Prism.languages.csharp || {}
    }
});
!function(e) {
    var t = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b"
      , n = {
        environment: {
            pattern: RegExp("\\$" + t),
            alias: "constant"
        },
        variable: [{
            pattern: /\$?\(\([\s\S]+?\)\)/,
            greedy: !0,
            inside: {
                variable: [{
                    pattern: /(^\$\(\([\s\S]+)\)\)/,
                    lookbehind: !0
                }, /^\$\(\(/],
                number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,
                operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
                punctuation: /\(\(?|\)\)?|,|;/
            }
        }, {
            pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
            greedy: !0,
            inside: {
                variable: /^\$\(|^`|\)$|`$/
            }
        }, {
            pattern: /\$\{[^}]+\}/,
            greedy: !0,
            inside: {
                operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                punctuation: /[\[\]]/,
                environment: {
                    pattern: RegExp("(\\{)" + t),
                    lookbehind: !0,
                    alias: "constant"
                }
            }
        }, /\$(?:\w+|[#?*!@$])/],
        entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/
    };
    e.languages.bash = {
        shebang: {
            pattern: /^#!\s*\/.*/,
            alias: "important"
        },
        comment: {
            pattern: /(^|[^"{\\$])#.*/,
            lookbehind: !0
        },
        "function-name": [{
            pattern: /(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,
            lookbehind: !0,
            alias: "function"
        }, {
            pattern: /\b\w+(?=\s*\(\s*\)\s*\{)/,
            alias: "function"
        }],
        "for-or-select": {
            pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
            alias: "variable",
            lookbehind: !0
        },
        "assign-left": {
            pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
            inside: {
                environment: {
                    pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t),
                    lookbehind: !0,
                    alias: "constant"
                }
            },
            alias: "variable",
            lookbehind: !0
        },
        string: [{
            pattern: /((?:^|[^<])<<-?\s*)(\w+?)\s*(?:\r?\n|\r)[\s\S]*?(?:\r?\n|\r)\2/,
            lookbehind: !0,
            greedy: !0,
            inside: n
        }, {
            pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s*(?:\r?\n|\r)[\s\S]*?(?:\r?\n|\r)\3/,
            lookbehind: !0,
            greedy: !0
        }, {
            pattern: /(^|[^\\](?:\\\\)*)(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\2)[^\\])*\2/,
            lookbehind: !0,
            greedy: !0,
            inside: n
        }],
        environment: {
            pattern: RegExp("\\$?" + t),
            alias: "constant"
        },
        variable: n.variable,
        function: {
            pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
            lookbehind: !0
        },
        keyword: {
            pattern: /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,
            lookbehind: !0
        },
        builtin: {
            pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,
            lookbehind: !0,
            alias: "class-name"
        },
        boolean: {
            pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,
            lookbehind: !0
        },
        "file-descriptor": {
            pattern: /\B&\d\b/,
            alias: "important"
        },
        operator: {
            pattern: /\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,
            inside: {
                "file-descriptor": {
                    pattern: /^\d/,
                    alias: "important"
                }
            }
        },
        punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
        number: {
            pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
            lookbehind: !0
        }
    };
    for (var a = ["comment", "function-name", "for-or-select", "assign-left", "string", "environment", "function", "keyword", "builtin", "boolean", "file-descriptor", "operator", "punctuation", "number"], r = n.variable[1].inside, s = 0; s < a.length; s++)
        r[a[s]] = e.languages.bash[a[s]];
    e.languages.shell = e.languages.bash
}(Prism);
Prism.languages.basic = {
    comment: {
        pattern: /(?:!|REM\b).+/i,
        inside: {
            keyword: /^REM/i
        }
    },
    string: {
        pattern: /"(?:""|[!#$%&'()*,\/:;<=>?^_ +\-.A-Z\d])*"/i,
        greedy: !0
    },
    number: /(?:\b\d+\.?\d*|\B\.\d+)(?:E[+-]?\d+)?/i,
    keyword: /\b(?:AS|BEEP|BLOAD|BSAVE|CALL(?: ABSOLUTE)?|CASE|CHAIN|CHDIR|CLEAR|CLOSE|CLS|COM|COMMON|CONST|DATA|DECLARE|DEF(?: FN| SEG|DBL|INT|LNG|SNG|STR)|DIM|DO|DOUBLE|ELSE|ELSEIF|END|ENVIRON|ERASE|ERROR|EXIT|FIELD|FILES|FOR|FUNCTION|GET|GOSUB|GOTO|IF|INPUT|INTEGER|IOCTL|KEY|KILL|LINE INPUT|LOCATE|LOCK|LONG|LOOP|LSET|MKDIR|NAME|NEXT|OFF|ON(?: COM| ERROR| KEY| TIMER)?|OPEN|OPTION BASE|OUT|POKE|PUT|READ|REDIM|REM|RESTORE|RESUME|RETURN|RMDIR|RSET|RUN|SHARED|SINGLE|SELECT CASE|SHELL|SLEEP|STATIC|STEP|STOP|STRING|SUB|SWAP|SYSTEM|THEN|TIMER|TO|TROFF|TRON|TYPE|UNLOCK|UNTIL|USING|VIEW PRINT|WAIT|WEND|WHILE|WRITE)(?:\$|\b)/i,
    function: /\b(?:ABS|ACCESS|ACOS|ANGLE|AREA|ARITHMETIC|ARRAY|ASIN|ASK|AT|ATN|BASE|BEGIN|BREAK|CAUSE|CEIL|CHR|CLIP|COLLATE|COLOR|CON|COS|COSH|COT|CSC|DATE|DATUM|DEBUG|DECIMAL|DEF|DEG|DEGREES|DELETE|DET|DEVICE|DISPLAY|DOT|ELAPSED|EPS|ERASABLE|EXLINE|EXP|EXTERNAL|EXTYPE|FILETYPE|FIXED|FP|GO|GRAPH|HANDLER|IDN|IMAGE|IN|INT|INTERNAL|IP|IS|KEYED|LBOUND|LCASE|LEFT|LEN|LENGTH|LET|LINE|LINES|LOG|LOG10|LOG2|LTRIM|MARGIN|MAT|MAX|MAXNUM|MID|MIN|MISSING|MOD|NATIVE|NUL|NUMERIC|OF|OPTION|ORD|ORGANIZATION|OUTIN|OUTPUT|PI|POINT|POINTER|POINTS|POS|PRINT|PROGRAM|PROMPT|RAD|RADIANS|RANDOMIZE|RECORD|RECSIZE|RECTYPE|RELATIVE|REMAINDER|REPEAT|REST|RETRY|REWRITE|RIGHT|RND|ROUND|RTRIM|SAME|SEC|SELECT|SEQUENTIAL|SET|SETTER|SGN|SIN|SINH|SIZE|SKIP|SQR|STANDARD|STATUS|STR|STREAM|STYLE|TAB|TAN|TANH|TEMPLATE|TEXT|THERE|TIME|TIMEOUT|TRACE|TRANSFORM|TRUNCATE|UBOUND|UCASE|USE|VAL|VARIABLE|VIEWPORT|WHEN|WINDOW|WITH|ZER|ZONEWIDTH)(?:\$|\b)/i,
    operator: /<[=>]?|>=?|[+\-*\/^=&]|\b(?:AND|EQV|IMP|NOT|OR|XOR)\b/i,
    punctuation: /[,;:()]/
};
!function(e) {
    var t = /#(?!\{).+/
      , n = {
        pattern: /#\{[^}]+\}/,
        alias: "variable"
    };
    e.languages.coffeescript = e.languages.extend("javascript", {
        comment: t,
        string: [{
            pattern: /'(?:\\[\s\S]|[^\\'])*'/,
            greedy: !0
        }, {
            pattern: /"(?:\\[\s\S]|[^\\"])*"/,
            greedy: !0,
            inside: {
                interpolation: n
            }
        }],
        keyword: /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
        "class-member": {
            pattern: /@(?!\d)\w+/,
            alias: "variable"
        }
    }),
    e.languages.insertBefore("coffeescript", "comment", {
        "multiline-comment": {
            pattern: /###[\s\S]+?###/,
            alias: "comment"
        },
        "block-regex": {
            pattern: /\/{3}[\s\S]*?\/{3}/,
            alias: "regex",
            inside: {
                comment: t,
                interpolation: n
            }
        }
    }),
    e.languages.insertBefore("coffeescript", "string", {
        "inline-javascript": {
            pattern: /`(?:\\[\s\S]|[^\\`])*`/,
            inside: {
                delimiter: {
                    pattern: /^`|`$/,
                    alias: "punctuation"
                },
                rest: e.languages.javascript
            }
        },
        "multiline-string": [{
            pattern: /'''[\s\S]*?'''/,
            greedy: !0,
            alias: "string"
        }, {
            pattern: /"""[\s\S]*?"""/,
            greedy: !0,
            alias: "string",
            inside: {
                interpolation: n
            }
        }]
    }),
    e.languages.insertBefore("coffeescript", "keyword", {
        property: /(?!\d)\w+(?=\s*:(?!:))/
    }),
    delete e.languages.coffeescript["template-string"],
    e.languages.coffee = e.languages.coffeescript
}(Prism);
!function(e) {
    var a, n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
    e.languages.css.selector = {
        pattern: e.languages.css.selector,
        inside: a = {
            "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
            "pseudo-class": /:[-\w]+/,
            class: /\.[-\w]+/,
            id: /#[-\w]+/,
            attribute: {
                pattern: RegExp("\\[(?:[^[\\]\"']|" + n.source + ")*\\]"),
                greedy: !0,
                inside: {
                    punctuation: /^\[|\]$/,
                    "case-sensitivity": {
                        pattern: /(\s)[si]$/i,
                        lookbehind: !0,
                        alias: "keyword"
                    },
                    namespace: {
                        pattern: /^(\s*)[-*\w\xA0-\uFFFF]*\|(?!=)/,
                        lookbehind: !0,
                        inside: {
                            punctuation: /\|$/
                        }
                    },
                    "attr-name": {
                        pattern: /^(\s*)[-\w\xA0-\uFFFF]+/,
                        lookbehind: !0
                    },
                    "attr-value": [n, {
                        pattern: /(=\s*)[-\w\xA0-\uFFFF]+(?=\s*$)/,
                        lookbehind: !0
                    }],
                    operator: /[|~*^$]?=/
                }
            },
            "n-th": [{
                pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
                lookbehind: !0,
                inside: {
                    number: /[\dn]+/,
                    operator: /[+-]/
                }
            }, {
                pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
                lookbehind: !0
            }],
            combinator: />|\+|~|\|\|/,
            punctuation: /[(),]/
        }
    },
    e.languages.css.atrule.inside["selector-function-argument"].inside = a,
    e.languages.insertBefore("css", "property", {
        variable: {
            pattern: /(^|[^-\w\xA0-\uFFFF])--[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*/i,
            lookbehind: !0
        }
    });
    var r = {
        pattern: /(\b\d+)(?:%|[a-z]+\b)/,
        lookbehind: !0
    }
      , i = {
        pattern: /(^|[^\w.-])-?\d*\.?\d+/,
        lookbehind: !0
    };
    e.languages.insertBefore("css", "function", {
        operator: {
            pattern: /(\s)[+\-*\/](?=\s)/,
            lookbehind: !0
        },
        hexcode: {
            pattern: /\B#(?:[\da-f]{1,2}){3,4}\b/i,
            alias: "color"
        },
        color: [/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i, {
            pattern: /\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
            inside: {
                unit: r,
                number: i,
                function: /[\w-]+(?=\()/,
                punctuation: /[(),]/
            }
        }],
        entity: /\\[\da-f]{1,8}/i,
        unit: r,
        number: i
    })
}(Prism);
Prism.languages["dns-zone-file"] = {
    comment: /;.*/,
    string: {
        pattern: /"(?:\\.|[^"\\\r\n])*"/,
        greedy: !0
    },
    variable: [{
        pattern: /(^\$ORIGIN[ \t]+)\S+/m,
        lookbehind: !0
    }, {
        pattern: /(^|\s)@(?=\s|$)/,
        lookbehind: !0
    }],
    keyword: /^\$(?:ORIGIN|INCLUDE|TTL)(?=\s|$)/m,
    class: {
        pattern: /(^|\s)(?:IN|CH|CS|HS)(?=\s|$)/,
        lookbehind: !0,
        alias: "keyword"
    },
    type: {
        pattern: /(^|\s)(?:A|A6|AAAA|AFSDB|APL|ATMA|CAA|CDNSKEY|CDS|CERT|CNAME|DHCID|DLV|DNAME|DNSKEY|DS|EID|GID|GPOS|HINFO|HIP|IPSECKEY|ISDN|KEY|KX|LOC|MAILA|MAILB|MB|MD|MF|MG|MINFO|MR|MX|NAPTR|NB|NBSTAT|NIMLOC|NINFO|NS|NSAP|NSAP-PTR|NSEC|NSEC3|NSEC3PARAM|NULL|NXT|OPENPGPKEY|PTR|PX|RKEY|RP|RRSIG|RT|SIG|SINK|SMIMEA|SOA|SPF|SRV|SSHFP|TA|TKEY|TLSA|TSIG|TXT|UID|UINFO|UNSPEC|URI|WKS|X25)(?=\s|$)/,
        lookbehind: !0,
        alias: "keyword"
    },
    punctuation: /[()]/
},
Prism.languages["dns-zone"] = Prism.languages["dns-zone-file"];
Prism.languages.docker = {
    keyword: {
        pattern: /(^\s*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)/im,
        lookbehind: !0
    },
    string: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
    comment: {
        pattern: /#.*/,
        greedy: !0
    },
    punctuation: /---|\.\.\.|[:[\]{}\-,|>?]/
},
Prism.languages.dockerfile = Prism.languages.docker;
Prism.languages.editorconfig = {
    comment: /[;#].*/,
    section: {
        pattern: /(^[ \t]*)\[.+]/m,
        lookbehind: !0,
        alias: "keyword",
        inside: {
            regex: /\\\\[\[\]{},!?.*]/,
            operator: /[!?]|\.\.|\*{1,2}/,
            punctuation: /[\[\]{},]/
        }
    },
    property: {
        pattern: /(^[ \t]*)[^\s=]+(?=[ \t]*=)/m,
        lookbehind: !0
    },
    value: {
        pattern: /=.*/,
        alias: "string",
        inside: {
            punctuation: /^=/
        }
    }
};
!function(h) {
    function v(e, n) {
        return "___" + e.toUpperCase() + n + "___"
    }
    Object.defineProperties(h.languages["markup-templating"] = {}, {
        buildPlaceholders: {
            value: function(a, r, e, o) {
                if (a.language === r) {
                    var c = a.tokenStack = [];
                    a.code = a.code.replace(e, function(e) {
                        if ("function" == typeof o && !o(e))
                            return e;
                        for (var n, t = c.length; -1 !== a.code.indexOf(n = v(r, t)); )
                            ++t;
                        return c[t] = e,
                        n
                    }),
                    a.grammar = h.languages.markup
                }
            }
        },
        tokenizePlaceholders: {
            value: function(p, k) {
                if (p.language === k && p.tokenStack) {
                    p.grammar = h.languages[k];
                    var m = 0
                      , d = Object.keys(p.tokenStack);
                    !function e(n) {
                        for (var t = 0; t < n.length && !(m >= d.length); t++) {
                            var a = n[t];
                            if ("string" == typeof a || a.content && "string" == typeof a.content) {
                                var r = d[m]
                                  , o = p.tokenStack[r]
                                  , c = "string" == typeof a ? a : a.content
                                  , i = v(k, r)
                                  , u = c.indexOf(i);
                                if (-1 < u) {
                                    ++m;
                                    var g = c.substring(0, u)
                                      , l = new h.Token(k,h.tokenize(o, p.grammar),"language-" + k,o)
                                      , s = c.substring(u + i.length)
                                      , f = [];
                                    g && f.push.apply(f, e([g])),
                                    f.push(l),
                                    s && f.push.apply(f, e([s])),
                                    "string" == typeof a ? n.splice.apply(n, [t, 1].concat(f)) : a.content = f
                                }
                            } else
                                a.content && e(a.content)
                        }
                        return n
                    }(p.tokens)
                }
            }
        }
    })
}(Prism);
!function(e) {
    e.languages.ejs = {
        delimiter: {
            pattern: /^<%[-_=]?|[-_]?%>$/,
            alias: "punctuation"
        },
        comment: /^#[\s\S]*/,
        "language-javascript": {
            pattern: /[\s\S]+/,
            inside: e.languages.javascript
        }
    },
    e.hooks.add("before-tokenize", function(a) {
        e.languages["markup-templating"].buildPlaceholders(a, "ejs", /<%(?!%)[\s\S]+?%>/g)
    }),
    e.hooks.add("after-tokenize", function(a) {
        e.languages["markup-templating"].tokenizePlaceholders(a, "ejs")
    }),
    e.languages.eta = e.languages.ejs
}(Prism);
!function(a) {
    a.languages.flow = a.languages.extend("javascript", {}),
    a.languages.insertBefore("flow", "keyword", {
        type: [{
            pattern: /\b(?:[Nn]umber|[Ss]tring|[Bb]oolean|Function|any|mixed|null|void)\b/,
            alias: "tag"
        }]
    }),
    a.languages.flow["function-variable"].pattern = /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
    delete a.languages.flow.parameter,
    a.languages.insertBefore("flow", "operator", {
        "flow-punctuation": {
            pattern: /\{\||\|\}/,
            alias: "punctuation"
        }
    }),
    Array.isArray(a.languages.flow.keyword) || (a.languages.flow.keyword = [a.languages.flow.keyword]),
    a.languages.flow.keyword.unshift({
        pattern: /(^|[^$]\b)(?:type|opaque|declare|Class)\b(?!\$)/,
        lookbehind: !0
    }, {
        pattern: /(^|[^$]\B)\$(?:await|Diff|Exact|Keys|ObjMap|PropertyType|Shape|Record|Supertype|Subtype|Enum)\b(?!\$)/,
        lookbehind: !0
    })
}(Prism);
!function(n) {
    for (var i = "[^<()\"']|\\((?:<expr>)*\\)|<(?!#--)|<#--(?:[^-]|-(?!->))*--\x3e|\"(?:[^\\\\\"]|\\\\.)*\"|'(?:[^\\\\']|\\\\.)*'", e = 0; e < 2; e++)
        i = i.replace(/<expr>/g, function() {
            return i
        });
    i = i.replace(/<expr>/g, "[^\\s\\S]");
    var t = {
        comment: /<#--[\s\S]*?-->/,
        string: [{
            pattern: /\br("|')(?:(?!\1)[^\\]|\\.)*\1/,
            greedy: !0
        }, {
            pattern: RegExp("(\"|')(?:(?!\\1|\\$\\{)[^\\\\]|\\\\.|\\$\\{(?:<expr>)*?\\})*\\1".replace(/<expr>/g, function() {
                return i
            })),
            greedy: !0,
            inside: {
                interpolation: {
                    pattern: RegExp("((?:^|[^\\\\])(?:\\\\\\\\)*)\\$\\{(?:<expr>)*?\\}".replace(/<expr>/g, function() {
                        return i
                    })),
                    lookbehind: !0,
                    inside: {
                        "interpolation-punctuation": {
                            pattern: /^\$\{|\}$/,
                            alias: "punctuation"
                        },
                        rest: null
                    }
                }
            }
        }],
        keyword: /\b(?:as)\b/,
        boolean: /\b(?:true|false)\b/,
        "builtin-function": {
            pattern: /((?:^|[^?])\?\s*)\w+/,
            lookbehind: !0,
            alias: "function"
        },
        function: /\w+(?=\s*\()/,
        number: /\d+(?:\.\d+)?/,
        operator: /\.\.[<*!]?|->|--|\+\+|&&|\|\||\?{1,2}|[-+*/%!=<>]=?|\b(?:gt|gte|lt|lte)\b/,
        punctuation: /[,;.:()[\]{}]/
    };
    t.string[1].inside.interpolation.inside.rest = t,
    n.languages.ftl = {
        "ftl-comment": {
            pattern: /^<#--[\s\S]*/,
            alias: "comment"
        },
        "ftl-directive": {
            pattern: /^<[\s\S]+>$/,
            inside: {
                directive: {
                    pattern: /(^<\/?)[#@][a-z]\w*/i,
                    lookbehind: !0,
                    alias: "keyword"
                },
                punctuation: /^<\/?|\/?>$/,
                content: {
                    pattern: /[\s\S]*\S[\s\S]*/,
                    alias: "ftl",
                    inside: t
                }
            }
        },
        "ftl-interpolation": {
            pattern: /^\$\{[\s\S]*\}$/,
            inside: {
                punctuation: /^\$\{|\}$/,
                content: {
                    pattern: /[\s\S]*\S[\s\S]*/,
                    alias: "ftl",
                    inside: t
                }
            }
        }
    },
    n.hooks.add("before-tokenize", function(e) {
        var t = RegExp("<#--[^]*?--\x3e|</?[#@][a-zA-Z](?:<expr>)*?>|\\$\\{(?:<expr>)*?\\}".replace(/<expr>/g, function() {
            return i
        }), "gi");
        n.languages["markup-templating"].buildPlaceholders(e, "ftl", t)
    }),
    n.hooks.add("after-tokenize", function(e) {
        n.languages["markup-templating"].tokenizePlaceholders(e, "ftl")
    })
}(Prism);
Prism.languages.gamemakerlanguage = Prism.languages.gml = Prism.languages.extend("clike", {
    number: /(?:\b0x[\da-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)[ulf]*/i,
    keyword: /\b(?:if|else|switch|case|default|break|for|repeat|while|do|until|continue|exit|return|globalvar|var|enum)\b/,
    operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not|with|at|xor|not)\b/,
    constant: /\b(?:self|other|all|noone|global|local|undefined|pointer_(?:invalid|null)|action_(?:stop|restart|continue|reverse)|pi|GM_build_date|GM_version|timezone_(?:local|utc)|gamespeed_(?:fps|microseconds)|ev_(?:create|destroy|step|alarm|keyboard|mouse|collision|other|draw|draw_(?:begin|end|pre|post)|keypress|keyrelease|trigger|(?:left|right|middle|no)_button|(?:left|right|middle)_press|(?:left|right|middle)_release|mouse_(?:enter|leave|wheel_up|wheel_down)|global_(?:left|right|middle)_button|global_(?:left|right|middle)_press|global_(?:left|right|middle)_release|joystick(?:1|2)_(?:left|right|up|down|button1|button2|button3|button4|button5|button6|button7|button8)|outside|boundary|game_start|game_end|room_start|room_end|no_more_lives|animation_end|end_of_path|no_more_health|user\d|step_(?:normal|begin|end)|gui|gui_begin|gui_end)|vk_(?:nokey|anykey|enter|return|shift|control|alt|escape|space|backspace|tab|pause|printscreen|left|right|up|down|home|end|delete|insert|pageup|pagedown|f\d|numpad\d|divide|multiply|subtract|add|decimal|lshift|lcontrol|lalt|rshift|rcontrol|ralt)|mb_(?:any|none|left|right|middle)|c_(?:aqua|black|blue|dkgray|fuchsia|gray|green|lime|ltgray|maroon|navy|olive|purple|red|silver|teal|white|yellow|orange)|fa_(?:left|center|right|top|middle|bottom|readonly|hidden|sysfile|volumeid|directory|archive)|pr_(?:pointlist|linelist|linestrip|trianglelist|trianglestrip|trianglefan)|bm_(?:complex|normal|add|max|subtract|zero|one|src_colour|inv_src_colour|src_color|inv_src_color|src_alpha|inv_src_alpha|dest_alpha|inv_dest_alpha|dest_colour|inv_dest_colour|dest_color|inv_dest_color|src_alpha_sat)|audio_(?:falloff_(?:none|inverse_distance|inverse_distance_clamped|linear_distance|linear_distance_clamped|exponent_distance|exponent_distance_clamped)|old_system|new_system|mono|stereo|3d)|cr_(?:default|none|arrow|cross|beam|size_nesw|size_ns|size_nwse|size_we|uparrow|hourglass|drag|appstart|handpoint|size_all)|spritespeed_framesper(?:second|gameframe)|asset_(?:object|unknown|sprite|sound|room|path|script|font|timeline|tiles|shader)|ds_type_(?:map|list|stack|queue|grid|priority)|ef_(?:explosion|ring|ellipse|firework|smoke|smokeup|star|spark|flare|cloud|rain|snow)|pt_shape_(?:pixel|disk|square|line|star|circle|ring|sphere|flare|spark|explosion|cloud|smoke|snow)|ps_(?:distr|shape)_(?:linear|gaussian|invgaussian|rectangle|ellipse|diamond|line)|ty_(?:real|string)|dll_(?:cdel|cdecl|stdcall)|matrix_(?:view|projection|world)|os_(?:win32|windows|macosx|ios|android|linux|unknown|winphone|win8native|psvita|ps4|xboxone|ps3|uwp)|browser_(?:not_a_browser|unknown|ie|firefox|chrome|safari|safari_mobile|opera|tizen|windows_store|ie_mobile)|device_ios_(?:unknown|iphone|iphone_retina|ipad|ipad_retina|iphone5|iphone6|iphone6plus)|device_(?:emulator|tablet)|display_(?:landscape|landscape_flipped|portrait|portrait_flipped)|of_challenge_(?:win|lose|tie)|leaderboard_type_(?:number|time_mins_secs)|cmpfunc_(?:never|less|equal|lessequal|greater|notequal|greaterequal|always)|cull_(?:noculling|clockwise|counterclockwise)|lighttype_(?:dir|point)|iap_(?:ev_storeload|ev_product|ev_purchase|ev_consume|ev_restore|storeload_ok|storeload_failed|status_uninitialised|status_unavailable|status_loading|status_available|status_processing|status_restoring|failed|unavailable|available|purchased|canceled|refunded)|fb_login_(?:default|fallback_to_webview|no_fallback_to_webview|forcing_webview|use_system_account|forcing_safari)|phy_joint_(?:anchor_1_x|anchor_1_y|anchor_2_x|anchor_2_y|reaction_force_x|reaction_force_y|reaction_torque|motor_speed|angle|motor_torque|max_motor_torque|translation|speed|motor_force|max_motor_force|length_1|length_2|damping_ratio|frequency|lower_angle_limit|upper_angle_limit|angle_limits|max_length|max_torque|max_force)|phy_debug_render_(?:aabb|collision_pairs|coms|core_shapes|joints|obb|shapes)|phy_particle_flag_(?:water|zombie|wall|spring|elastic|viscous|powder|tensile|colourmixing|colormixing)|phy_particle_group_flag_(?:solid|rigid)|phy_particle_data_flag_(?:typeflags|position|velocity|colour|color|category)|achievement_(?:our_info|friends_info|leaderboard_info|info|filter_(?:all_players|friends_only|favorites_only)|type_challenge|type_score_challenge|pic_loaded|show_(?:ui|profile|leaderboard|achievement|bank|friend_picker|purchase_prompt))|network_(?:socket_(?:tcp|udp|bluetooth)|type_(?:connect|disconnect|data|non_blocking_connect)|config_(?:connect_timeout|use_non_blocking_socket|enable_reliable_udp|disable_reliable_udp))|buffer_(?:fixed|grow|wrap|fast|vbuffer|network|u8|s8|u16|s16|u32|s32|u64|f16|f32|f64|bool|text|string|seek_start|seek_relative|seek_end|generalerror|outofspace|outofbounds|invalidtype)|gp_(?:face\d|shoulderl|shoulderr|shoulderlb|shoulderrb|select|start|stickl|stickr|padu|padd|padl|padr|axislh|axislv|axisrh|axisrv)|ov_(?:friends|community|players|settings|gamegroup|achievements)|lb_sort_(?:none|ascending|descending)|lb_disp_(?:none|numeric|time_sec|time_ms)|ugc_(?:result_success|filetype_(?:community|microtrans)|visibility_(?:public|friends_only|private)|query_RankedBy(?:Vote|PublicationDate|Trend|NumTimesReported|TotalVotesAsc|VotesUp|TextSearch)|query_(?:AcceptedForGameRankedByAcceptanceDate|FavoritedByFriendsRankedByPublicationDate|CreatedByFriendsRankedByPublicationDate|NotYetRated)|sortorder_CreationOrder(?:Desc|Asc)|sortorder_(?:TitleAsc|LastUpdatedDesc|SubscriptionDateDesc|VoteScoreDesc|ForModeration)|list_(?:Published|VotedOn|VotedUp|VotedDown|WillVoteLater|Favorited|Subscribed|UsedOrPlayed|Followed)|match_(?:Items|Items_Mtx|Items_ReadyToUse|Collections|Artwork|Videos|Screenshots|AllGuides|WebGuides|IntegratedGuides|UsableInGame|ControllerBindings))|vertex_usage_(?:position|colour|color|normal|texcoord|textcoord|blendweight|blendindices|psize|tangent|binormal|fog|depth|sample)|vertex_type_(?:float\d|colour|color|ubyte4)|layerelementtype_(?:undefined|background|instance|oldtilemap|sprite|tilemap|particlesystem|tile)|tile_(?:rotate|flip|mirror|index_mask)|input_type|se_(?:chorus|compressor|echo|equalizer|flanger|gargle|none|reverb)|text_type|(?:obj|scr|spr|rm)\w+)\b/,
    variable: /\b(?:x|y|(?:x|y)(?:previous|start)|(?:h|v)speed|direction|speed|friction|gravity|gravity_direction|path_(?:index|position|positionprevious|speed|scale|orientation|endaction)|object_index|id|solid|persistent|mask_index|instance_(?:count|id)|alarm|timeline_(?:index|position|speed|running|loop)|visible|sprite_(?:index|width|height|xoffset|yoffset)|image_(?:number|index|speed|depth|xscale|yscale|angle|alpha|blend)|bbox_(?:left|right|top|bottom)|layer|phy_(?:rotation|(?:position|linear_velocity|speed|com|collision|col_normal)_(?:x|y)|angular_(?:velocity|damping)|position_(?:x|y)previous|speed|linear_damping|bullet|fixed_rotation|active|mass|inertia|dynamic|kinematic|sleeping|collision_points)|working_directory|webgl_enabled|view_(?:(?:y|x|w|h)view|(?:y|x|w|h)port|(?:v|h)(?:speed|border)|visible|surface_id|object|enabled|current|angle)|undefined|transition_(?:steps|kind|color)|temp_directory|show_(?:score|lives|health)|secure_mode|score|room_(?:width|speed|persistent|last|height|first|caption)|room|pointer_(?:null|invalid)|os_(?:version|type|device|browser)|mouse_(?:y|x|lastbutton|button)|lives|keyboard_(?:string|lastkey|lastchar|key)|iap_data|health|gamemaker_(?:version|registered|pro)|game_(?:save|project|display)_(?:id|name)|fps_real|fps|event_(?:type|object|number|action)|error_(?:occurred|last)|display_aa|delta_time|debug_mode|cursor_sprite|current_(?:year|weekday|time|second|month|minute|hour|day)|caption_(?:score|lives|health)|browser_(?:width|height)|background_(?:yscale|y|xscale|x|width|vtiled|vspeed|visible|showcolour|showcolor|index|htiled|hspeed|height|foreground|colour|color|blend|alpha)|async_load|application_surface|argument(?:_relitive|_count|\d)|argument|global|local|self|other)\b/
});
Prism.languages.git = {
    comment: /^#.*/m,
    deleted: /^[-–].*/m,
    inserted: /^\+.*/m,
    string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,
    command: {
        pattern: /^.*\$ git .*$/m,
        inside: {
            parameter: /\s--?\w+/m
        }
    },
    coord: /^@@.*@@$/m,
    commit_sha1: /^commit \w{40}$/m
};
Prism.languages.go = Prism.languages.extend("clike", {
    keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
    builtin: /\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/,
    boolean: /\b(?:_|iota|nil|true|false)\b/,
    operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
    number: /(?:\b0x[a-f\d]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
    string: {
        pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/,
        greedy: !0
    }
}),
delete Prism.languages.go["class-name"];
Prism.languages.graphql = {
    comment: /#.*/,
    description: {
        pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
        greedy: !0,
        alias: "string",
        inside: {
            "language-markdown": {
                pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
                lookbehind: !0,
                inside: Prism.languages.markdown
            }
        }
    },
    string: {
        pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
        greedy: !0
    },
    number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    boolean: /\b(?:true|false)\b/,
    variable: /\$[a-z_]\w*/i,
    directive: {
        pattern: /@[a-z_]\w*/i,
        alias: "function"
    },
    "attr-name": {
        pattern: /[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
        greedy: !0
    },
    "class-name": {
        pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*)[a-zA-Z_]\w*/,
        lookbehind: !0
    },
    fragment: {
        pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
        lookbehind: !0,
        alias: "function"
    },
    keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
    operator: /[!=|&]|\.{3}/,
    punctuation: /[!(){}\[\]:=,]/,
    constant: /\b(?!ID\b)[A-Z][A-Z_\d]*\b/
};
!function(t) {
    t.languages.http = {
        "request-line": {
            pattern: /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\s(?:https?:\/\/|\/)\S+\sHTTP\/[0-9.]+/m,
            inside: {
                property: /^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,
                "attr-name": /:\w+/
            }
        },
        "response-status": {
            pattern: /^HTTP\/1.[01] \d+.*/m,
            inside: {
                property: {
                    pattern: /(^HTTP\/1.[01] )\d+.*/i,
                    lookbehind: !0
                }
            }
        },
        "header-name": {
            pattern: /^[\w-]+:(?=.)/m,
            alias: "keyword"
        }
    };
    var a, e, n, i = t.languages, p = {
        "application/javascript": i.javascript,
        "application/json": i.json || i.javascript,
        "application/xml": i.xml,
        "text/xml": i.xml,
        "text/html": i.html,
        "text/css": i.css
    }, s = {
        "application/json": !0,
        "application/xml": !0
    };
    for (var r in p)
        if (p[r]) {
            a = a || {};
            var T = s[r] ? (void 0,
            n = (e = r).replace(/^[a-z]+\//, ""),
            "(?:" + e + "|\\w+/(?:[\\w.-]+\\+)+" + n + "(?![+\\w.-]))") : r;
            a[r.replace(/\//g, "-")] = {
                pattern: RegExp("(content-type:\\s*" + T + "[\\s\\S]*?)(?:\\r?\\n|\\r){2}[\\s\\S]*", "i"),
                lookbehind: !0,
                inside: p[r]
            }
        }
    a && t.languages.insertBefore("http", "header-name", a)
}(Prism);
Prism.languages.hpkp = {
    directive: {
        pattern: /\b(?:(?:includeSubDomains|preload|strict)(?: |;)|pin-sha256="[a-zA-Z\d+=/]+"|(?:max-age|report-uri)=|report-to )/,
        alias: "keyword"
    },
    safe: {
        pattern: /\b\d{7,}\b/,
        alias: "selector"
    },
    unsafe: {
        pattern: /\b\d{1,6}\b/,
        alias: "function"
    }
};
Prism.languages.hsts = {
    directive: {
        pattern: /\b(?:max-age=|includeSubDomains|preload)/,
        alias: "keyword"
    },
    safe: {
        pattern: /\b\d{8,}\b/,
        alias: "selector"
    },
    unsafe: {
        pattern: /\b\d{1,7}\b/,
        alias: "function"
    }
};
Prism.languages.icon = {
    comment: /#.*/,
    string: {
        pattern: /(["'])(?:(?!\1)[^\\\r\n_]|\\.|_(?!\1)(?:\r\n|[\s\S]))*\1/,
        greedy: !0
    },
    number: /\b(?:\d+r[a-z\d]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b|\.\d+\b/i,
    "builtin-keyword": {
        pattern: /&(?:allocated|ascii|clock|collections|cset|current|date|dateline|digits|dump|e|error(?:number|text|value)?|errout|fail|features|file|host|input|lcase|letters|level|line|main|null|output|phi|pi|pos|progname|random|regions|source|storage|subject|time|trace|ucase|version)\b/,
        alias: "variable"
    },
    directive: {
        pattern: /\$\w+/,
        alias: "builtin"
    },
    keyword: /\b(?:break|by|case|create|default|do|else|end|every|fail|global|if|initial|invocable|link|local|next|not|of|procedure|record|repeat|return|static|suspend|then|to|until|while)\b/,
    function: /(?!\d)\w+(?=\s*[({]|\s*!\s*\[)/,
    operator: /[+-]:(?!=)|(?:[\/?@^%&]|\+\+?|--?|==?=?|~==?=?|\*\*?|\|\|\|?|<(?:->?|<?=?)|>>?=?)(?::=)?|:(?:=:?)?|[!.\\|~]/,
    punctuation: /[\[\](){},;]/
};
!function(n) {
    n.languages.ignore = {
        comment: /^#.*/m,
        entry: {
            pattern: /\S(?:.*(?:(?:\\ )|\S))?/,
            alias: "string",
            inside: {
                operator: /^!|\*\*?|\?/,
                regex: {
                    pattern: /(^|[^\\])\[[^\[\]]*\]/,
                    lookbehind: !0
                },
                punctuation: /\//
            }
        }
    },
    n.languages.gitignore = n.languages.ignore,
    n.languages.hgignore = n.languages.ignore,
    n.languages.npmignore = n.languages.ignore
}(Prism);
Prism.languages.inform7 = {
    string: {
        pattern: /"[^"]*"/,
        inside: {
            substitution: {
                pattern: /\[[^\]]+\]/,
                inside: {
                    delimiter: {
                        pattern: /\[|\]/,
                        alias: "punctuation"
                    }
                }
            }
        }
    },
    comment: {
        pattern: /\[[^\]]+\]/,
        greedy: !0
    },
    title: {
        pattern: /^[ \t]*(?:volume|book|part(?! of)|chapter|section|table)\b.+/im,
        alias: "important"
    },
    number: {
        pattern: /(^|[^-])(?:\b\d+(?:\.\d+)?(?:\^\d+)?\w*|\b(?:one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve))\b(?!-)/i,
        lookbehind: !0
    },
    verb: {
        pattern: /(^|[^-])\b(?:applying to|are|attacking|answering|asking|be(?:ing)?|burning|buying|called|carries|carry(?! out)|carrying|climbing|closing|conceal(?:s|ing)?|consulting|contain(?:s|ing)?|cutting|drinking|dropping|eating|enclos(?:es?|ing)|entering|examining|exiting|getting|giving|going|ha(?:ve|s|ving)|hold(?:s|ing)?|impl(?:y|ies)|incorporat(?:es?|ing)|inserting|is|jumping|kissing|listening|locking|looking|mean(?:s|ing)?|opening|provid(?:es?|ing)|pulling|pushing|putting|relat(?:es?|ing)|removing|searching|see(?:s|ing)?|setting|showing|singing|sleeping|smelling|squeezing|switching|support(?:s|ing)?|swearing|taking|tasting|telling|thinking|throwing|touching|turning|tying|unlock(?:s|ing)?|var(?:y|ies|ying)|waiting|waking|waving|wear(?:s|ing)?)\b(?!-)/i,
        lookbehind: !0,
        alias: "operator"
    },
    keyword: {
        pattern: /(^|[^-])\b(?:after|before|carry out|check|continue the action|definition(?= *:)|do nothing|else|end (?:if|unless|the story)|every turn|if|include|instead(?: of)?|let|move|no|now|otherwise|repeat|report|resume the story|rule for|running through|say(?:ing)?|stop the action|test|try(?:ing)?|understand|unless|use|when|while|yes)\b(?!-)/i,
        lookbehind: !0
    },
    property: {
        pattern: /(^|[^-])\b(?:adjacent(?! to)|carried|closed|concealed|contained|dark|described|edible|empty|enclosed|enterable|even|female|fixed in place|full|handled|held|improper-named|incorporated|inedible|invisible|lighted|lit|lock(?:able|ed)|male|marked for listing|mentioned|negative|neuter|non-(?:empty|full|recurring)|odd|opaque|open(?:able)?|plural-named|portable|positive|privately-named|proper-named|provided|publically-named|pushable between rooms|recurring|related|rubbing|scenery|seen|singular-named|supported|swinging|switch(?:able|ed(?: on| off)?)|touch(?:able|ed)|transparent|unconcealed|undescribed|unlit|unlocked|unmarked for listing|unmentioned|unopenable|untouchable|unvisited|variable|visible|visited|wearable|worn)\b(?!-)/i,
        lookbehind: !0,
        alias: "symbol"
    },
    position: {
        pattern: /(^|[^-])\b(?:above|adjacent to|back side of|below|between|down|east|everywhere|front side|here|in|inside(?: from)?|north(?:east|west)?|nowhere|on(?: top of)?|other side|outside(?: from)?|parts? of|regionally in|south(?:east|west)?|through|up|west|within)\b(?!-)/i,
        lookbehind: !0,
        alias: "keyword"
    },
    type: {
        pattern: /(^|[^-])\b(?:actions?|activit(?:y|ies)|actors?|animals?|backdrops?|containers?|devices?|directions?|doors?|holders?|kinds?|lists?|m[ae]n|nobody|nothing|nouns?|numbers?|objects?|people|persons?|player(?:'s holdall)?|regions?|relations?|rooms?|rule(?:book)?s?|scenes?|someone|something|supporters?|tables?|texts?|things?|time|vehicles?|wom[ae]n)\b(?!-)/i,
        lookbehind: !0,
        alias: "variable"
    },
    punctuation: /[.,:;(){}]/
},
Prism.languages.inform7.string.inside.substitution.inside.rest = Prism.languages.inform7,
Prism.languages.inform7.string.inside.substitution.inside.rest.text = {
    pattern: /\S(?:\s*\S)*/,
    alias: "comment"
};
Prism.languages.ini = {
    comment: /^[ \t]*[;#].*$/m,
    selector: /^[ \t]*\[.*?\]/m,
    constant: /^[ \t]*[^\s=]+?(?=[ \t]*=)/m,
    "attr-value": {
        pattern: /=.*/,
        inside: {
            punctuation: /^[=]/
        }
    }
};
!function(e) {
    var t = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|null|open|opens|package|private|protected|provides|public|record|requires|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/
      , a = /\b[A-Z](?:\w*[a-z]\w*)?\b/;
    e.languages.java = e.languages.extend("clike", {
        "class-name": [a, /\b[A-Z]\w*(?=\s+\w+\s*[;,=())])/],
        keyword: t,
        function: [e.languages.clike.function, {
            pattern: /(\:\:)[a-z_]\w*/,
            lookbehind: !0
        }],
        number: /\b0b[01][01_]*L?\b|\b0x[\da-f_]*\.?[\da-f_p+-]+\b|(?:\b\d[\d_]*\.?[\d_]*|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
        operator: {
            pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
            lookbehind: !0
        }
    }),
    e.languages.insertBefore("java", "string", {
        "triple-quoted-string": {
            pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
            greedy: !0,
            alias: "string"
        }
    }),
    e.languages.insertBefore("java", "class-name", {
        annotation: {
            alias: "punctuation",
            pattern: /(^|[^.])@\w+/,
            lookbehind: !0
        },
        namespace: {
            pattern: RegExp("(\\b(?:exports|import(?:\\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\\s+)(?!<keyword>)[a-z]\\w*(?:\\.[a-z]\\w*)*\\.?".replace(/<keyword>/g, function() {
                return t.source
            })),
            lookbehind: !0,
            inside: {
                punctuation: /\./
            }
        },
        generics: {
            pattern: /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,
            inside: {
                "class-name": a,
                keyword: t,
                punctuation: /[<>(),.:]/,
                operator: /[?&|]/
            }
        }
    })
}(Prism);
!function(n) {
    n.languages.php = n.languages.extend("clike", {
        keyword: /\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|new|or|parent|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,
        boolean: {
            pattern: /\b(?:false|true)\b/i,
            alias: "constant"
        },
        constant: [/\b[A-Z_][A-Z0-9_]*\b/, /\b(?:null)\b/i],
        comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
            lookbehind: !0
        }
    }),
    n.languages.insertBefore("php", "string", {
        "shell-comment": {
            pattern: /(^|[^\\])#.*/,
            lookbehind: !0,
            alias: "comment"
        }
    }),
    n.languages.insertBefore("php", "comment", {
        delimiter: {
            pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
            alias: "important"
        }
    }),
    n.languages.insertBefore("php", "keyword", {
        variable: /\$+(?:\w+\b|(?={))/i,
        package: {
            pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
            lookbehind: !0,
            inside: {
                punctuation: /\\/
            }
        }
    }),
    n.languages.insertBefore("php", "operator", {
        property: {
            pattern: /(->)[\w]+/,
            lookbehind: !0
        }
    });
    var e = {
        pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)*)/,
        lookbehind: !0,
        inside: n.languages.php
    };
    n.languages.insertBefore("php", "string", {
        "nowdoc-string": {
            pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,
            greedy: !0,
            alias: "string",
            inside: {
                delimiter: {
                    pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
                    alias: "symbol",
                    inside: {
                        punctuation: /^<<<'?|[';]$/
                    }
                }
            }
        },
        "heredoc-string": {
            pattern: /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
            greedy: !0,
            alias: "string",
            inside: {
                delimiter: {
                    pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
                    alias: "symbol",
                    inside: {
                        punctuation: /^<<<"?|[";]$/
                    }
                },
                interpolation: e
            }
        },
        "single-quoted-string": {
            pattern: /'(?:\\[\s\S]|[^\\'])*'/,
            greedy: !0,
            alias: "string"
        },
        "double-quoted-string": {
            pattern: /"(?:\\[\s\S]|[^\\"])*"/,
            greedy: !0,
            alias: "string",
            inside: {
                interpolation: e
            }
        }
    }),
    delete n.languages.php.string,
    n.hooks.add("before-tokenize", function(e) {
        if (/<\?/.test(e.code)) {
            n.languages["markup-templating"].buildPlaceholders(e, "php", /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#)(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|\/\*[\s\S]*?(?:\*\/|$))*?(?:\?>|$)/gi)
        }
    }),
    n.hooks.add("after-tokenize", function(e) {
        n.languages["markup-templating"].tokenizePlaceholders(e, "php")
    })
}(Prism);
!function(p) {
    var a = p.languages.javadoclike = {
        parameter: {
            pattern: /(^\s*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m,
            lookbehind: !0
        },
        keyword: {
            pattern: /(^\s*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,
            lookbehind: !0
        },
        punctuation: /[{}]/
    };
    Object.defineProperty(a, "addSupport", {
        value: function(a, e) {
            "string" == typeof a && (a = [a]),
            a.forEach(function(a) {
                !function(a, e) {
                    var n = "doc-comment"
                      , t = p.languages[a];
                    if (t) {
                        var r = t[n];
                        if (!r) {
                            var o = {
                                "doc-comment": {
                                    pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,
                                    lookbehind: !0,
                                    alias: "comment"
                                }
                            };
                            r = (t = p.languages.insertBefore(a, "comment", o))[n]
                        }
                        if (r instanceof RegExp && (r = t[n] = {
                            pattern: r
                        }),
                        Array.isArray(r))
                            for (var i = 0, s = r.length; i < s; i++)
                                r[i]instanceof RegExp && (r[i] = {
                                    pattern: r[i]
                                }),
                                e(r[i]);
                        else
                            e(r)
                    }
                }(a, function(a) {
                    a.inside || (a.inside = {}),
                    a.inside.rest = e
                })
            })
        }
    }),
    a.addSupport(["java", "javascript", "php"], a)
}(Prism);
!function(a) {
    var e = /(^(?:\s*(?:\*\s*)*)).*[^*\s].*$/m
      , n = "(?:[a-zA-Z]\\w+\\s*\\.\\s*)*[A-Z]\\w*(?:\\s*<mem>)?|<mem>".replace(/<mem>/g, function() {
        return "#\\s*\\w+(?:\\s*\\([^()]*\\))?"
    });
    a.languages.javadoc = a.languages.extend("javadoclike", {}),
    a.languages.insertBefore("javadoc", "keyword", {
        reference: {
            pattern: RegExp("(@(?:exception|throws|see|link|linkplain|value)\\s+(?:\\*\\s*)?)(?:" + n + ")"),
            lookbehind: !0,
            inside: {
                function: {
                    pattern: /(#\s*)\w+(?=\s*\()/,
                    lookbehind: !0
                },
                field: {
                    pattern: /(#\s*)\w+/,
                    lookbehind: !0
                },
                namespace: {
                    pattern: /\b(?:[a-z]\w*\s*\.\s*)+/,
                    inside: {
                        punctuation: /\./
                    }
                },
                "class-name": /\b[A-Z]\w*/,
                keyword: a.languages.java.keyword,
                punctuation: /[#()[\],.]/
            }
        },
        "class-name": {
            pattern: /(@param\s+)<[A-Z]\w*>/,
            lookbehind: !0,
            inside: {
                punctuation: /[.<>]/
            }
        },
        "code-section": [{
            pattern: /(\{@code\s+)(?:[^{}]|\{(?:[^{}]|\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*\})+?(?=\s*\})/,
            lookbehind: !0,
            inside: {
                code: {
                    pattern: e,
                    lookbehind: !0,
                    inside: a.languages.java,
                    alias: "language-java"
                }
            }
        }, {
            pattern: /(<(code|pre|tt)>(?!<code>)\s*)[\s\S]+?(?=\s*<\/\2>)/,
            lookbehind: !0,
            inside: {
                line: {
                    pattern: e,
                    lookbehind: !0,
                    inside: {
                        tag: a.languages.markup.tag,
                        entity: a.languages.markup.entity,
                        code: {
                            pattern: /.+/,
                            inside: a.languages.java,
                            alias: "language-java"
                        }
                    }
                }
            }
        }],
        tag: a.languages.markup.tag,
        entity: a.languages.markup.entity
    }),
    a.languages.javadoclike.addSupport("java", a.languages.javadoc)
}(Prism);
Prism.languages.javastacktrace = {
    summary: {
        pattern: /^[\t ]*(?:(?:Caused by:|Suppressed:|Exception in thread "[^"]*")[\t ]+)?[\w$.]+(?:\:.*)?$/m,
        inside: {
            keyword: {
                pattern: /^(\s*)(?:(?:Caused by|Suppressed)(?=:)|Exception in thread)/m,
                lookbehind: !0
            },
            string: {
                pattern: /^(\s*)"[^"]*"/,
                lookbehind: !0
            },
            exceptions: {
                pattern: /^(:?\s*)[\w$.]+(?=:|$)/,
                lookbehind: !0,
                inside: {
                    "class-name": /[\w$]+(?=$|:)/,
                    namespace: /[a-z]\w*/,
                    punctuation: /[.:]/
                }
            },
            message: {
                pattern: /(:\s*)\S.*/,
                lookbehind: !0,
                alias: "string"
            },
            punctuation: /[:]/
        }
    },
    "stack-frame": {
        pattern: /^[\t ]*at [\w$.]+(?:<init>)?\([^()]*\)/m,
        inside: {
            keyword: {
                pattern: /^(\s*)at/,
                lookbehind: !0
            },
            source: [{
                pattern: /(\()\w+.\w+:\d+(?=\))/,
                lookbehind: !0,
                inside: {
                    file: /^\w+\.\w+/,
                    punctuation: /:/,
                    "line-number": {
                        pattern: /\d+/,
                        alias: "number"
                    }
                }
            }, {
                pattern: /(\()[^()]*(?=\))/,
                lookbehind: !0,
                inside: {
                    keyword: /^(?:Unknown Source|Native Method)$/
                }
            }],
            "class-name": /[\w$]+(?=\.(?:<init>|[\w$]+)\()/,
            function: /(?:<init>|[\w$]+)(?=\()/,
            namespace: /[a-z]\w*/,
            punctuation: /[.()]/
        }
    },
    more: {
        pattern: /^[\t ]*\.{3} \d+ [a-z]+(?: [a-z]+)*/m,
        inside: {
            punctuation: /\.{3}/,
            number: /\d+/,
            keyword: /\b[a-z]+(?: [a-z]+)*\b/
        }
    }
};
!function(e) {
    e.languages.typescript = e.languages.extend("javascript", {
        "class-name": {
            pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
            lookbehind: !0,
            greedy: !0,
            inside: null
        },
        keyword: /\b(?:abstract|as|asserts|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|undefined|var|void|while|with|yield)\b/,
        builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/
    }),
    delete e.languages.typescript.parameter;
    var n = e.languages.extend("typescript", {});
    delete n["class-name"],
    e.languages.typescript["class-name"].inside = n,
    e.languages.insertBefore("typescript", "function", {
        "generic-function": {
            pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
            greedy: !0,
            inside: {
                function: /^#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*/,
                generic: {
                    pattern: /<[\s\S]+/,
                    alias: "class-name",
                    inside: n
                }
            }
        }
    }),
    e.languages.ts = e.languages.typescript
}(Prism);
!function(e) {
    var a = e.languages.javascript
      , n = "{(?:[^{}]|{(?:[^{}]|{[^{}]*})*})+}"
      , t = "(@(?:param|arg|argument|property)\\s+(?:" + n + "\\s+)?)";
    e.languages.jsdoc = e.languages.extend("javadoclike", {
        parameter: {
            pattern: RegExp(t + "[$\\w\\xA0-\\uFFFF.]+(?=\\s|$)"),
            lookbehind: !0,
            inside: {
                punctuation: /\./
            }
        }
    }),
    e.languages.insertBefore("jsdoc", "keyword", {
        "optional-parameter": {
            pattern: RegExp(t + "\\[[$\\w\\xA0-\\uFFFF.]+(?:=[^[\\]]+)?\\](?=\\s|$)"),
            lookbehind: !0,
            inside: {
                parameter: {
                    pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/,
                    lookbehind: !0,
                    inside: {
                        punctuation: /\./
                    }
                },
                code: {
                    pattern: /(=)[\s\S]*(?=\]$)/,
                    lookbehind: !0,
                    inside: a,
                    alias: "language-javascript"
                },
                punctuation: /[=[\]]/
            }
        },
        "class-name": [{
            pattern: RegExp("(@(?:augments|extends|class|interface|memberof!?|template|this|typedef)\\s+(?:<TYPE>\\s+)?)[A-Z]\\w*(?:\\.[A-Z]\\w*)*".replace(/<TYPE>/g, function() {
                return n
            })),
            lookbehind: !0,
            inside: {
                punctuation: /\./
            }
        }, {
            pattern: RegExp("(@[a-z]+\\s+)" + n),
            lookbehind: !0,
            inside: {
                string: a.string,
                number: a.number,
                boolean: a.boolean,
                keyword: e.languages.typescript.keyword,
                operator: /=>|\.\.\.|[&|?:*]/,
                punctuation: /[.,;=<>{}()[\]]/
            }
        }],
        example: {
            pattern: /(@example\s+)[^@]+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,
            lookbehind: !0,
            inside: {
                code: {
                    pattern: /^(\s*(?:\*\s*)?).+$/m,
                    lookbehind: !0,
                    inside: a,
                    alias: "language-javascript"
                }
            }
        }
    }),
    e.languages.javadoclike.addSupport("javascript", e.languages.jsdoc)
}(Prism);
!function(a) {
    a.languages.insertBefore("javascript", "function-variable", {
        "method-variable": {
            pattern: RegExp("(\\.\\s*)" + a.languages.javascript["function-variable"].pattern.source),
            lookbehind: !0,
            alias: ["function-variable", "method", "function", "property-access"]
        }
    }),
    a.languages.insertBefore("javascript", "function", {
        method: {
            pattern: RegExp("(\\.\\s*)" + a.languages.javascript.function.source),
            lookbehind: !0,
            alias: ["function", "property-access"]
        }
    }),
    a.languages.insertBefore("javascript", "constant", {
        "known-class-name": [{
            pattern: /\b(?:(?:(?:Uint|Int)(?:8|16|32)|Uint8Clamped|Float(?:32|64))?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|(?:Weak)?(?:Set|Map)|WebAssembly)\b/,
            alias: "class-name"
        }, {
            pattern: /\b(?:[A-Z]\w*)Error\b/,
            alias: "class-name"
        }]
    }),
    a.languages.javascript.keyword.unshift({
        pattern: /\b(?:as|default|export|from|import)\b/,
        alias: "module"
    }, {
        pattern: /\bnull\b/,
        alias: ["null", "nil"]
    }, {
        pattern: /\bundefined\b/,
        alias: "nil"
    }),
    a.languages.insertBefore("javascript", "operator", {
        spread: {
            pattern: /\.{3}/,
            alias: "operator"
        },
        arrow: {
            pattern: /=>/,
            alias: "operator"
        }
    }),
    a.languages.insertBefore("javascript", "punctuation", {
        "property-access": {
            pattern: /(\.\s*)#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*/,
            lookbehind: !0
        },
        "maybe-class-name": {
            pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
            lookbehind: !0
        },
        dom: {
            pattern: /\b(?:document|location|navigator|performance|(?:local|session)Storage|window)\b/,
            alias: "variable"
        },
        console: {
            pattern: /\bconsole(?=\s*\.)/,
            alias: "class-name"
        }
    });
    for (var e = ["function", "function-variable", "method", "method-variable", "property-access"], t = 0; t < e.length; t++) {
        var n = e[t]
          , r = a.languages.javascript[n];
        "RegExp" === a.util.type(r) && (r = a.languages.javascript[n] = {
            pattern: r
        });
        var s = r.inside || {};
        (r.inside = s)["maybe-class-name"] = /^[A-Z][\s\S]*/
    }
}(Prism);
Prism.languages.json = {
    property: {
        pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
        greedy: !0
    },
    string: {
        pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
        greedy: !0
    },
    comment: {
        pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
        greedy: !0
    },
    number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    punctuation: /[{}[\],]/,
    operator: /:/,
    boolean: /\b(?:true|false)\b/,
    null: {
        pattern: /\bnull\b/,
        alias: "keyword"
    }
},
Prism.languages.webmanifest = Prism.languages.json;
!function(n) {
    var e = /("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/;
    n.languages.json5 = n.languages.extend("json", {
        property: [{
            pattern: RegExp(e.source + "(?=\\s*:)"),
            greedy: !0
        }, {
            pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*:)/,
            alias: "unquoted"
        }],
        string: {
            pattern: e,
            greedy: !0
        },
        number: /[+-]?\b(?:NaN|Infinity|0x[a-fA-F\d]+)\b|[+-]?(?:\b\d+\.?\d*|\B\.\d+)(?:[eE][+-]?\d+\b)?/
    })
}(Prism);
Prism.languages.jsonp = Prism.languages.extend("json", {
    punctuation: /[{}[\]();,.]/
}),
Prism.languages.insertBefore("jsonp", "punctuation", {
    function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/
});
Prism.languages.jsstacktrace = {
    "error-message": {
        pattern: /^\S.*/m,
        alias: "string"
    },
    "stack-frame": {
        pattern: /^[ \t]+at[ \t]+.*/m,
        inside: {
            "not-my-code": {
                pattern: /[ \t]+at[ \t]+(?:node\.js|\<unknown\>|.*(?:node_modules|\(\<anonymous\>\)|\(\<unknown\>|\<anonymous\>$|\(internal\/|\(node\.js)).*/m,
                alias: "comment"
            },
            filename: {
                pattern: /(\bat\s+|\()(?:[a-zA-Z]:)?[^():]+(?=:)/,
                lookbehind: !0,
                alias: "url"
            },
            function: {
                pattern: /(at\s+(?:new\s+)?)[_$a-zA-Z\xA0-\uFFFF<][.$\w\xA0-\uFFFF<>]*/,
                lookbehind: !0,
                inside: {
                    punctuation: /\./
                }
            },
            punctuation: /[()]/,
            keyword: /\b(?:at|new)\b/,
            alias: {
                pattern: /\[(?:as\s+)?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\]/,
                alias: "variable"
            },
            "line-number": {
                pattern: /:[0-9]+(?::[0-9]+)?\b/,
                alias: "number",
                inside: {
                    punctuation: /:/
                }
            }
        }
    }
};
!function(u) {
    var e = u.languages.javascript["template-string"]
      , n = e.pattern.source
      , a = e.inside.interpolation
      , i = a.inside["interpolation-punctuation"]
      , r = a.pattern.source;
    function t(e, t) {
        if (u.languages[e])
            return {
                pattern: RegExp("((?:" + t + ")\\s*)" + n),
                lookbehind: !0,
                greedy: !0,
                inside: {
                    "template-punctuation": {
                        pattern: /^`|`$/,
                        alias: "string"
                    },
                    "embedded-code": {
                        pattern: /[\s\S]+/,
                        alias: e
                    }
                }
            }
    }
    function o(e, t, n) {
        var r = {
            code: e,
            grammar: t,
            language: n
        };
        return u.hooks.run("before-tokenize", r),
        r.tokens = u.tokenize(r.code, r.grammar),
        u.hooks.run("after-tokenize", r),
        r.tokens
    }
    function d(e) {
        var t = {};
        t["interpolation-punctuation"] = i;
        var n = u.tokenize(e, t);
        if (3 === n.length) {
            var r = [1, 1];
            r.push.apply(r, o(n[1], u.languages.javascript, "javascript")),
            n.splice.apply(n, r)
        }
        return new u.Token("interpolation",n,a.alias,e)
    }
    function c(a, e, i) {
        var t = u.tokenize(a, {
            interpolation: {
                pattern: RegExp(r),
                lookbehind: !0
            }
        })
          , f = 0
          , y = {}
          , n = o(t.map(function(e) {
            if ("string" == typeof e)
                return e;
            for (var t, n = e.content; -1 !== a.indexOf((r = f++,
            t = "___" + i.toUpperCase() + "_" + r + "___")); )
                ;
            return y[t] = n,
            t;
            var r
        }).join(""), e, i)
          , v = Object.keys(y);
        return f = 0,
        function e(t) {
            for (var n = 0; n < t.length; n++) {
                if (f >= v.length)
                    return;
                var r = t[n];
                if ("string" == typeof r || "string" == typeof r.content) {
                    var a = v[f]
                      , i = "string" == typeof r ? r : r.content
                      , o = i.indexOf(a);
                    if (-1 !== o) {
                        ++f;
                        var s = i.substring(0, o)
                          , p = d(y[a])
                          , l = i.substring(o + a.length)
                          , g = [];
                        if (s && g.push(s),
                        g.push(p),
                        l) {
                            var u = [l];
                            e(u),
                            g.push.apply(g, u)
                        }
                        "string" == typeof r ? (t.splice.apply(t, [n, 1].concat(g)),
                        n += g.length - 1) : r.content = g
                    }
                } else {
                    var c = r.content;
                    Array.isArray(c) ? e(c) : e([c])
                }
            }
        }(n),
        new u.Token(i,n,"language-" + i,a)
    }
    u.languages.javascript["template-string"] = [t("css", "\\b(?:styled(?:\\([^)]*\\))?(?:\\s*\\.\\s*\\w+(?:\\([^)]*\\))*)*|css(?:\\s*\\.\\s*(?:global|resolve))?|createGlobalStyle|keyframes)"), t("html", "\\bhtml|\\.\\s*(?:inner|outer)HTML\\s*\\+?="), t("svg", "\\bsvg"), t("markdown", "\\b(?:md|markdown)"), t("graphql", "\\b(?:gql|graphql(?:\\s*\\.\\s*experimental)?)"), e].filter(Boolean);
    var s = {
        javascript: !0,
        js: !0,
        typescript: !0,
        ts: !0,
        jsx: !0,
        tsx: !0
    };
    function f(e) {
        return "string" == typeof e ? e : Array.isArray(e) ? e.map(f).join("") : f(e.content)
    }
    u.hooks.add("after-tokenize", function(e) {
        e.language in s && !function e(t) {
            for (var n = 0, r = t.length; n < r; n++) {
                var a = t[n];
                if ("string" != typeof a) {
                    var i = a.content;
                    if (Array.isArray(i))
                        if ("template-string" === a.type) {
                            var o = i[1];
                            if (3 === i.length && "string" != typeof o && "embedded-code" === o.type) {
                                var s = f(o)
                                  , p = o.alias
                                  , l = Array.isArray(p) ? p[0] : p
                                  , g = u.languages[l];
                                if (!g)
                                    continue;
                                i[1] = c(s, g, l)
                            }
                        } else
                            e(i);
                    else
                        "string" != typeof i && e([i])
                }
            }
        }(e.tokens)
    })
}(Prism);
!function(a) {
    var e = /\\(?:[^a-z()[\]]|[a-z*]+)/i
      , n = {
        "equation-command": {
            pattern: e,
            alias: "regex"
        }
    };
    a.languages.latex = {
        comment: /%.*/m,
        cdata: {
            pattern: /(\\begin\{((?:verbatim|lstlisting)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
            lookbehind: !0
        },
        equation: [{
            pattern: /\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,
            inside: n,
            alias: "string"
        }, {
            pattern: /(\\begin\{((?:equation|math|eqnarray|align|multline|gather)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
            lookbehind: !0,
            inside: n,
            alias: "string"
        }],
        keyword: {
            pattern: /(\\(?:begin|end|ref|cite|label|usepackage|documentclass)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
            lookbehind: !0
        },
        url: {
            pattern: /(\\url\{)[^}]+(?=\})/,
            lookbehind: !0
        },
        headline: {
            pattern: /(\\(?:part|chapter|section|subsection|frametitle|subsubsection|paragraph|subparagraph|subsubparagraph|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\}(?:\[[^\]]+\])?)/,
            lookbehind: !0,
            alias: "class-name"
        },
        function: {
            pattern: e,
            alias: "selector"
        },
        punctuation: /[[\]{}&]/
    },
    a.languages.tex = a.languages.latex,
    a.languages.context = a.languages.latex
}(Prism);
!function(t) {
    t.languages.latte = {
        comment: /^\{\*[\s\S]*/,
        ld: {
            pattern: /^\{(?:[=_]|\/?(?!\d|\w+\()\w+|)/,
            inside: {
                punctuation: /^\{\/?/,
                tag: {
                    pattern: /.+/,
                    alias: "important"
                }
            }
        },
        rd: {
            pattern: /\}$/,
            inside: {
                punctuation: /.+/
            }
        },
        php: {
            pattern: /\S(?:[\s\S]*\S)?/,
            alias: "language-php",
            inside: t.languages.php
        }
    };
    var e = t.languages.extend("markup", {});
    t.languages.insertBefore("inside", "attr-value", {
        "n-attr": {
            pattern: /n:[\w-]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+))?/,
            inside: {
                "attr-name": {
                    pattern: /^[^\s=]+/,
                    alias: "important"
                },
                "attr-value": {
                    pattern: /=[\s\S]+/,
                    inside: {
                        punctuation: [/^=/, {
                            pattern: /^(\s*)["']|["']$/,
                            lookbehind: !0
                        }],
                        php: {
                            pattern: /\S(?:[\s\S]*\S)?/,
                            inside: t.languages.php
                        }
                    }
                }
            }
        }
    }, e.tag),
    t.hooks.add("before-tokenize", function(a) {
        if ("latte" === a.language) {
            t.languages["markup-templating"].buildPlaceholders(a, "latte", /\{\*[\s\S]*?\*\}|\{[^'"\s{}*](?:[^"'/{}]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|\/\*[\s\S]*?\*\/)*?\}/g),
            a.grammar = e
        }
    }),
    t.hooks.add("after-tokenize", function(a) {
        t.languages["markup-templating"].tokenizePlaceholders(a, "latte")
    })
}(Prism);
Prism.languages.less = Prism.languages.extend("css", {
    comment: [/\/\*[\s\S]*?\*\//, {
        pattern: /(^|[^\\])\/\/.*/,
        lookbehind: !0
    }],
    atrule: {
        pattern: /@[\w-]+?(?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};])*?(?=\s*\{)/,
        inside: {
            punctuation: /[:()]/
        }
    },
    selector: {
        pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@])*?(?=\s*\{)/,
        inside: {
            variable: /@+[\w-]+/
        }
    },
    property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
    operator: /[+\-*\/]/
}),
Prism.languages.insertBefore("less", "property", {
    variable: [{
        pattern: /@[\w-]+\s*:/,
        inside: {
            punctuation: /:/
        }
    }, /@@?[\w-]+/],
    "mixin-usage": {
        pattern: /([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/,
        lookbehind: !0,
        alias: "function"
    }
});
Prism.languages.liquid = {
    keyword: /\b(?:comment|endcomment|if|elsif|else|endif|unless|endunless|for|endfor|case|endcase|when|in|break|assign|continue|limit|offset|range|reversed|raw|endraw|capture|endcapture|tablerow|endtablerow)\b/,
    number: /\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp-]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?[df]?/i,
    operator: {
        pattern: /(^|[^.])(?:\+[+=]?|-[-=]?|!=?|<<?=?|>>?>?=?|==?|&[&=]?|\|[|=]?|\*=?|\/=?|%=?|\^=?|[?:~])/m,
        lookbehind: !0
    },
    function: {
        pattern: /(^|[\s;|&])(?:append|prepend|capitalize|cycle|cols|increment|decrement|abs|at_least|at_most|ceil|compact|concat|date|default|divided_by|downcase|escape|escape_once|first|floor|join|last|lstrip|map|minus|modulo|newline_to_br|plus|remove|remove_first|replace|replace_first|reverse|round|rstrip|size|slice|sort|sort_natural|split|strip|strip_html|strip_newlines|times|truncate|truncatewords|uniq|upcase|url_decode|url_encode|include|paginate)(?=$|[\s;|&])/,
        lookbehind: !0
    }
};
Prism.languages.makefile = {
    comment: {
        pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
        lookbehind: !0
    },
    string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    builtin: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
    symbol: {
        pattern: /^[^:=\r\n]+(?=\s*:(?!=))/m,
        inside: {
            variable: /\$+(?:[^(){}:#=\s]+|(?=[({]))/
        }
    },
    variable: /\$+(?:[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
    keyword: [/-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/, {
        pattern: /(\()(?:addsuffix|abspath|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:s|list)?)(?=[ \t])/,
        lookbehind: !0
    }],
    operator: /(?:::|[?:+!])?=|[|@]/,
    punctuation: /[:;(){}]/
};
!function(d) {
    function n(n) {
        return n = n.replace(/<inner>/g, function() {
            return "(?:\\\\.|[^\\\\\n\r]|(?:\n|\r\n?)(?!\n|\r\n?))"
        }),
        RegExp("((?:^|[^\\\\])(?:\\\\{2})*)(?:" + n + ")")
    }
    var e = "(?:\\\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\\\|\r\n`])+"
      , t = "\\|?__(?:\\|__)+\\|?(?:(?:\n|\r\n?)|$)".replace(/__/g, function() {
        return e
    })
      , a = "\\|?[ \t]*:?-{3,}:?[ \t]*(?:\\|[ \t]*:?-{3,}:?[ \t]*)+\\|?(?:\n|\r\n?)";
    d.languages.markdown = d.languages.extend("markup", {}),
    d.languages.insertBefore("markdown", "prolog", {
        blockquote: {
            pattern: /^>(?:[\t ]*>)*/m,
            alias: "punctuation"
        },
        table: {
            pattern: RegExp("^" + t + a + "(?:" + t + ")*", "m"),
            inside: {
                "table-data-rows": {
                    pattern: RegExp("^(" + t + a + ")(?:" + t + ")*$"),
                    lookbehind: !0,
                    inside: {
                        "table-data": {
                            pattern: RegExp(e),
                            inside: d.languages.markdown
                        },
                        punctuation: /\|/
                    }
                },
                "table-line": {
                    pattern: RegExp("^(" + t + ")" + a + "$"),
                    lookbehind: !0,
                    inside: {
                        punctuation: /\||:?-{3,}:?/
                    }
                },
                "table-header-row": {
                    pattern: RegExp("^" + t + "$"),
                    inside: {
                        "table-header": {
                            pattern: RegExp(e),
                            alias: "important",
                            inside: d.languages.markdown
                        },
                        punctuation: /\|/
                    }
                }
            }
        },
        code: [{
            pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
            lookbehind: !0,
            alias: "keyword"
        }, {
            pattern: /``.+?``|`[^`\r\n]+`/,
            alias: "keyword"
        }, {
            pattern: /^```[\s\S]*?^```$/m,
            greedy: !0,
            inside: {
                "code-block": {
                    pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                    lookbehind: !0
                },
                "code-language": {
                    pattern: /^(```).+/,
                    lookbehind: !0
                },
                punctuation: /```/
            }
        }],
        title: [{
            pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
            alias: "important",
            inside: {
                punctuation: /==+$|--+$/
            }
        }, {
            pattern: /(^\s*)#+.+/m,
            lookbehind: !0,
            alias: "important",
            inside: {
                punctuation: /^#+|#+$/
            }
        }],
        hr: {
            pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
            lookbehind: !0,
            alias: "punctuation"
        },
        list: {
            pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
            lookbehind: !0,
            alias: "punctuation"
        },
        "url-reference": {
            pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
            inside: {
                variable: {
                    pattern: /^(!?\[)[^\]]+/,
                    lookbehind: !0
                },
                string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                punctuation: /^[\[\]!:]|[<>]/
            },
            alias: "url"
        },
        bold: {
            pattern: n("\\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\\b|\\*\\*(?:(?!\\*)<inner>|\\*(?:(?!\\*)<inner>)+\\*)+\\*\\*"),
            lookbehind: !0,
            greedy: !0,
            inside: {
                content: {
                    pattern: /(^..)[\s\S]+(?=..$)/,
                    lookbehind: !0,
                    inside: {}
                },
                punctuation: /\*\*|__/
            }
        },
        italic: {
            pattern: n("\\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\\b|\\*(?:(?!\\*)<inner>|\\*\\*(?:(?!\\*)<inner>)+\\*\\*)+\\*"),
            lookbehind: !0,
            greedy: !0,
            inside: {
                content: {
                    pattern: /(^.)[\s\S]+(?=.$)/,
                    lookbehind: !0,
                    inside: {}
                },
                punctuation: /[*_]/
            }
        },
        strike: {
            pattern: n("(~~?)(?:(?!~)<inner>)+?\\2"),
            lookbehind: !0,
            greedy: !0,
            inside: {
                content: {
                    pattern: /(^~~?)[\s\S]+(?=\1$)/,
                    lookbehind: !0,
                    inside: {}
                },
                punctuation: /~~?/
            }
        },
        url: {
            pattern: n('!?\\[(?:(?!\\])<inner>)+\\](?:\\([^\\s)]+(?:[\t ]+"(?:\\\\.|[^"\\\\])*")?\\)| ?\\[(?:(?!\\])<inner>)+\\])'),
            lookbehind: !0,
            greedy: !0,
            inside: {
                variable: {
                    pattern: /(\[)[^\]]+(?=\]$)/,
                    lookbehind: !0
                },
                content: {
                    pattern: /(^!?\[)[^\]]+(?=\])/,
                    lookbehind: !0,
                    inside: {}
                },
                string: {
                    pattern: /"(?:\\.|[^"\\])*"(?=\)$)/
                }
            }
        }
    }),
    ["url", "bold", "italic", "strike"].forEach(function(e) {
        ["url", "bold", "italic", "strike"].forEach(function(n) {
            e !== n && (d.languages.markdown[e].inside.content.inside[n] = d.languages.markdown[n])
        })
    }),
    d.hooks.add("after-tokenize", function(n) {
        "markdown" !== n.language && "md" !== n.language || !function n(e) {
            if (e && "string" != typeof e)
                for (var t = 0, a = e.length; t < a; t++) {
                    var i = e[t];
                    if ("code" === i.type) {
                        var r = i.content[1]
                          , o = i.content[3];
                        if (r && o && "code-language" === r.type && "code-block" === o.type && "string" == typeof r.content) {
                            var l = r.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp")
                              , s = "language-" + (l = (/[a-z][\w-]*/i.exec(l) || [""])[0].toLowerCase());
                            o.alias ? "string" == typeof o.alias ? o.alias = [o.alias, s] : o.alias.push(s) : o.alias = [s]
                        }
                    } else
                        n(i.content)
                }
        }(n.tokens)
    }),
    d.hooks.add("wrap", function(n) {
        if ("code-block" === n.type) {
            for (var e = "", t = 0, a = n.classes.length; t < a; t++) {
                var i = n.classes[t]
                  , r = /language-(.+)/.exec(i);
                if (r) {
                    e = r[1];
                    break
                }
            }
            var o = d.languages[e];
            if (o) {
                var l = n.content.replace(/&lt;/g, "<").replace(/&amp;/g, "&");
                n.content = d.highlight(l, o, e)
            } else if (e && "none" !== e && d.plugins.autoloader) {
                var s = "md-" + (new Date).valueOf() + "-" + Math.floor(1e16 * Math.random());
                n.attributes.id = s,
                d.plugins.autoloader.loadLanguages(e, function() {
                    var n = document.getElementById(s);
                    n && (n.innerHTML = d.highlight(n.textContent, d.languages[e], e))
                })
            }
        }
    }),
    d.languages.md = d.languages.markdown
}(Prism);
!function($) {
    var e = ["$eq", "$gt", "$gte", "$in", "$lt", "$lte", "$ne", "$nin", "$and", "$not", "$nor", "$or", "$exists", "$type", "$expr", "$jsonSchema", "$mod", "$regex", "$text", "$where", "$geoIntersects", "$geoWithin", "$near", "$nearSphere", "$all", "$elemMatch", "$size", "$bitsAllClear", "$bitsAllSet", "$bitsAnyClear", "$bitsAnySet", "$comment", "$elemMatch", "$meta", "$slice", "$currentDate", "$inc", "$min", "$max", "$mul", "$rename", "$set", "$setOnInsert", "$unset", "$addToSet", "$pop", "$pull", "$push", "$pullAll", "$each", "$position", "$slice", "$sort", "$bit", "$addFields", "$bucket", "$bucketAuto", "$collStats", "$count", "$currentOp", "$facet", "$geoNear", "$graphLookup", "$group", "$indexStats", "$limit", "$listLocalSessions", "$listSessions", "$lookup", "$match", "$merge", "$out", "$planCacheStats", "$project", "$redact", "$replaceRoot", "$replaceWith", "$sample", "$set", "$skip", "$sort", "$sortByCount", "$unionWith", "$unset", "$unwind", "$abs", "$accumulator", "$acos", "$acosh", "$add", "$addToSet", "$allElementsTrue", "$and", "$anyElementTrue", "$arrayElemAt", "$arrayToObject", "$asin", "$asinh", "$atan", "$atan2", "$atanh", "$avg", "$binarySize", "$bsonSize", "$ceil", "$cmp", "$concat", "$concatArrays", "$cond", "$convert", "$cos", "$dateFromParts", "$dateToParts", "$dateFromString", "$dateToString", "$dayOfMonth", "$dayOfWeek", "$dayOfYear", "$degreesToRadians", "$divide", "$eq", "$exp", "$filter", "$first", "$floor", "$function", "$gt", "$gte", "$hour", "$ifNull", "$in", "$indexOfArray", "$indexOfBytes", "$indexOfCP", "$isArray", "$isNumber", "$isoDayOfWeek", "$isoWeek", "$isoWeekYear", "$last", "$last", "$let", "$literal", "$ln", "$log", "$log10", "$lt", "$lte", "$ltrim", "$map", "$max", "$mergeObjects", "$meta", "$min", "$millisecond", "$minute", "$mod", "$month", "$multiply", "$ne", "$not", "$objectToArray", "$or", "$pow", "$push", "$radiansToDegrees", "$range", "$reduce", "$regexFind", "$regexFindAll", "$regexMatch", "$replaceOne", "$replaceAll", "$reverseArray", "$round", "$rtrim", "$second", "$setDifference", "$setEquals", "$setIntersection", "$setIsSubset", "$setUnion", "$size", "$sin", "$slice", "$split", "$sqrt", "$stdDevPop", "$stdDevSamp", "$strcasecmp", "$strLenBytes", "$strLenCP", "$substr", "$substrBytes", "$substrCP", "$subtract", "$sum", "$switch", "$tan", "$toBool", "$toDate", "$toDecimal", "$toDouble", "$toInt", "$toLong", "$toObjectId", "$toString", "$toLower", "$toUpper", "$trim", "$trunc", "$type", "$week", "$year", "$zip", "$comment", "$explain", "$hint", "$max", "$maxTimeMS", "$min", "$orderby", "$query", "$returnKey", "$showDiskLoc", "$natural"]
      , t = "(?:" + (e = e.map(function($) {
        return $.replace("$", "\\$")
    })).join("|") + ")\\b";
    $.languages.mongodb = $.languages.extend("javascript", {}),
    $.languages.insertBefore("mongodb", "string", {
        property: {
            pattern: /(?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)(?=\s*:)/,
            greedy: !0,
            inside: {
                keyword: RegExp("^(['\"])?" + t + "(?:\\1)?$")
            }
        }
    }),
    $.languages.mongodb.string.inside = {
        url: {
            pattern: /https?:\/\/[-\w@:%.+~#=]{1,256}\.[a-z0-9()]{1,6}\b[-\w()@:%+.~#?&/=]*/i,
            greedy: !0
        },
        entity: {
            pattern: /\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/,
            greedy: !0
        }
    },
    $.languages.insertBefore("mongodb", "constant", {
        builtin: {
            pattern: RegExp("\\b(?:" + ["ObjectId", "Code", "BinData", "DBRef", "Timestamp", "NumberLong", "NumberDecimal", "MaxKey", "MinKey", "RegExp", "ISODate", "UUID"].join("|") + ")\\b"),
            alias: "keyword"
        }
    })
}(Prism);
!function(e) {
    var a = /\{[^\r\n\[\]{}]*\}/
      , n = {
        "quoted-string": {
            pattern: /"(?:[^"\\]|\\.)*"/,
            alias: "operator"
        },
        "command-param-id": {
            pattern: /(\s)\w+:/,
            lookbehind: !0,
            alias: "property"
        },
        "command-param-value": [{
            pattern: a,
            alias: "selector"
        }, {
            pattern: /([\t ])\S+/,
            lookbehind: !0,
            greedy: !0,
            alias: "operator"
        }, {
            pattern: /\S(?:.*\S)?/,
            alias: "operator"
        }]
    };
    function t(e) {
        return "string" == typeof e ? e : Array.isArray(e) ? e.map(t).join("") : t(e.content)
    }
    e.languages.naniscript = {
        comment: {
            pattern: /^([\t ]*);.*/m,
            lookbehind: !0
        },
        define: {
            pattern: /^>.+/m,
            alias: "tag",
            inside: {
                value: {
                    pattern: /(^>\w+[\t ]+)(?!\s)[^{}\r\n]+/,
                    lookbehind: !0,
                    alias: "operator"
                },
                key: {
                    pattern: /(^>)\w+/,
                    lookbehind: !0
                }
            }
        },
        label: {
            pattern: /^([\t ]*)#[\t ]*\w+[\t ]*$/m,
            lookbehind: !0,
            alias: "regex"
        },
        command: {
            pattern: /^([\t ]*)@\w+(?=[\t ]|$).*/m,
            lookbehind: !0,
            alias: "function",
            inside: {
                "command-name": /^@\w+/,
                expression: {
                    pattern: a,
                    greedy: !0,
                    alias: "selector"
                },
                "command-params": {
                    pattern: /[\s\S]*\S[\s\S]*/,
                    inside: n
                }
            }
        },
        "generic-text": {
            pattern: /(^[ \t]*)[^#@>;\s].*/m,
            lookbehind: !0,
            alias: "punctuation",
            inside: {
                "escaped-char": /\\[{}\[\]"]/,
                expression: {
                    pattern: a,
                    greedy: !0,
                    alias: "selector"
                },
                "inline-command": {
                    pattern: /\[[\t ]*\w+[^\r\n\[\]]*\]/,
                    greedy: !0,
                    alias: "function",
                    inside: {
                        "command-params": {
                            pattern: /(^\[[\t ]*\w+\b)[\s\S]+(?=\]$)/,
                            lookbehind: !0,
                            inside: n
                        },
                        "command-param-name": {
                            pattern: /^(\[[\t ]*)\w+/,
                            lookbehind: !0,
                            alias: "name"
                        },
                        "start-stop-char": /[\[\]]/
                    }
                }
            }
        }
    },
    e.languages.nani = e.languages.naniscript,
    e.hooks.add("after-tokenize", function(e) {
        e.tokens.forEach(function(e) {
            if ("string" != typeof e && "generic-text" === e.type) {
                var a = t(e);
                (function(e) {
                    for (var a = [], n = 0; n < e.length; n++) {
                        var t = e[n]
                          , r = "[]{}".indexOf(t);
                        if (-1 !== r)
                            if (r % 2 == 0)
                                a.push(r + 1);
                            else if (a.pop() !== r)
                                return !1
                    }
                    return 0 === a.length
                }
                )(a) || (e.type = "bad-line",
                e.content = a)
            }
        })
    })
}(Prism);
Prism.languages.nginx = Prism.languages.extend("clike", {
    comment: {
        pattern: /(^|[^"{\\])#.*/,
        lookbehind: !0
    },
    keyword: /\b(?:CONTENT_|DOCUMENT_|GATEWAY_|HTTP_|HTTPS|if_not_empty|PATH_|QUERY_|REDIRECT_|REMOTE_|REQUEST_|SCGI|SCRIPT_|SERVER_|http|events|accept_mutex|accept_mutex_delay|access_log|add_after_body|add_before_body|add_header|addition_types|aio|alias|allow|ancient_browser|ancient_browser_value|auth|auth_basic|auth_basic_user_file|auth_http|auth_http_header|auth_http_timeout|autoindex|autoindex_exact_size|autoindex_localtime|break|charset|charset_map|charset_types|chunked_transfer_encoding|client_body_buffer_size|client_body_in_file_only|client_body_in_single_buffer|client_body_temp_path|client_body_timeout|client_header_buffer_size|client_header_timeout|client_max_body_size|connection_pool_size|create_full_put_path|daemon|dav_access|dav_methods|debug_connection|debug_points|default_type|deny|devpoll_changes|devpoll_events|directio|directio_alignment|disable_symlinks|empty_gif|env|epoll_events|error_log|error_page|expires|fastcgi_buffer_size|fastcgi_buffers|fastcgi_busy_buffers_size|fastcgi_cache|fastcgi_cache_bypass|fastcgi_cache_key|fastcgi_cache_lock|fastcgi_cache_lock_timeout|fastcgi_cache_methods|fastcgi_cache_min_uses|fastcgi_cache_path|fastcgi_cache_purge|fastcgi_cache_use_stale|fastcgi_cache_valid|fastcgi_connect_timeout|fastcgi_hide_header|fastcgi_ignore_client_abort|fastcgi_ignore_headers|fastcgi_index|fastcgi_intercept_errors|fastcgi_keep_conn|fastcgi_max_temp_file_size|fastcgi_next_upstream|fastcgi_no_cache|fastcgi_param|fastcgi_pass|fastcgi_pass_header|fastcgi_read_timeout|fastcgi_redirect_errors|fastcgi_send_timeout|fastcgi_split_path_info|fastcgi_store|fastcgi_store_access|fastcgi_temp_file_write_size|fastcgi_temp_path|flv|geo|geoip_city|geoip_country|google_perftools_profiles|gzip|gzip_buffers|gzip_comp_level|gzip_disable|gzip_http_version|gzip_min_length|gzip_proxied|gzip_static|gzip_types|gzip_vary|if|if_modified_since|ignore_invalid_headers|image_filter|image_filter_buffer|image_filter_jpeg_quality|image_filter_sharpen|image_filter_transparency|imap_capabilities|imap_client_buffer|include|index|internal|ip_hash|keepalive|keepalive_disable|keepalive_requests|keepalive_timeout|kqueue_changes|kqueue_events|large_client_header_buffers|limit_conn|limit_conn_log_level|limit_conn_zone|limit_except|limit_rate|limit_rate_after|limit_req|limit_req_log_level|limit_req_zone|limit_zone|lingering_close|lingering_time|lingering_timeout|listen|location|lock_file|log_format|log_format_combined|log_not_found|log_subrequest|map|map_hash_bucket_size|map_hash_max_size|master_process|max_ranges|memcached_buffer_size|memcached_connect_timeout|memcached_next_upstream|memcached_pass|memcached_read_timeout|memcached_send_timeout|merge_slashes|min_delete_depth|modern_browser|modern_browser_value|mp4|mp4_buffer_size|mp4_max_buffer_size|msie_padding|msie_refresh|multi_accept|open_file_cache|open_file_cache_errors|open_file_cache_min_uses|open_file_cache_valid|open_log_file_cache|optimize_server_names|override_charset|pcre_jit|perl|perl_modules|perl_require|perl_set|pid|pop3_auth|pop3_capabilities|port_in_redirect|post_action|postpone_output|protocol|proxy|proxy_buffer|proxy_buffer_size|proxy_buffering|proxy_buffers|proxy_busy_buffers_size|proxy_cache|proxy_cache_bypass|proxy_cache_key|proxy_cache_lock|proxy_cache_lock_timeout|proxy_cache_methods|proxy_cache_min_uses|proxy_cache_path|proxy_cache_use_stale|proxy_cache_valid|proxy_connect_timeout|proxy_cookie_domain|proxy_cookie_path|proxy_headers_hash_bucket_size|proxy_headers_hash_max_size|proxy_hide_header|proxy_http_version|proxy_ignore_client_abort|proxy_ignore_headers|proxy_intercept_errors|proxy_max_temp_file_size|proxy_method|proxy_next_upstream|proxy_no_cache|proxy_pass|proxy_pass_error_message|proxy_pass_header|proxy_pass_request_body|proxy_pass_request_headers|proxy_read_timeout|proxy_redirect|proxy_redirect_errors|proxy_send_lowat|proxy_send_timeout|proxy_set_body|proxy_set_header|proxy_ssl_session_reuse|proxy_store|proxy_store_access|proxy_temp_file_write_size|proxy_temp_path|proxy_timeout|proxy_upstream_fail_timeout|proxy_upstream_max_fails|random_index|read_ahead|real_ip_header|recursive_error_pages|request_pool_size|reset_timedout_connection|resolver|resolver_timeout|return|rewrite|root|rtsig_overflow_events|rtsig_overflow_test|rtsig_overflow_threshold|rtsig_signo|satisfy|satisfy_any|secure_link_secret|send_lowat|send_timeout|sendfile|sendfile_max_chunk|server|server_name|server_name_in_redirect|server_names_hash_bucket_size|server_names_hash_max_size|server_tokens|set|set_real_ip_from|smtp_auth|smtp_capabilities|so_keepalive|source_charset|split_clients|ssi|ssi_silent_errors|ssi_types|ssi_value_length|ssl|ssl_certificate|ssl_certificate_key|ssl_ciphers|ssl_client_certificate|ssl_crl|ssl_dhparam|ssl_engine|ssl_prefer_server_ciphers|ssl_protocols|ssl_session_cache|ssl_session_timeout|ssl_verify_client|ssl_verify_depth|starttls|stub_status|sub_filter|sub_filter_once|sub_filter_types|tcp_nodelay|tcp_nopush|timeout|timer_resolution|try_files|types|types_hash_bucket_size|types_hash_max_size|underscores_in_headers|uninitialized_variable_warn|upstream|use|user|userid|userid_domain|userid_expires|userid_name|userid_p3p|userid_path|userid_service|valid_referers|variables_hash_bucket_size|variables_hash_max_size|worker_connections|worker_cpu_affinity|worker_priority|worker_processes|worker_rlimit_core|worker_rlimit_nofile|worker_rlimit_sigpending|working_directory|xclient|xml_entities|xslt_entities|xslt_stylesheet|xslt_types|ssl_session_tickets|ssl_stapling|ssl_stapling_verify|ssl_ecdh_curve|ssl_trusted_certificate|more_set_headers|ssl_early_data)\b/i
}),
Prism.languages.insertBefore("nginx", "keyword", {
    variable: /\$[a-z_]+/i
});
Prism.languages.objectivec = Prism.languages.extend("c", {
    keyword: /\b(?:asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
    string: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
}),
delete Prism.languages.objectivec["class-name"],
Prism.languages.objc = Prism.languages.objectivec;
Prism.languages.pascal = {
    comment: [/\(\*[\s\S]+?\*\)/, /\{[\s\S]+?\}/, /\/\/.*/],
    string: {
        pattern: /(?:'(?:''|[^'\r\n])*'(?!')|#[&$%]?[a-f\d]+)+|\^[a-z]/i,
        greedy: !0
    },
    keyword: [{
        pattern: /(^|[^&])\b(?:absolute|array|asm|begin|case|const|constructor|destructor|do|downto|else|end|file|for|function|goto|if|implementation|inherited|inline|interface|label|nil|object|of|operator|packed|procedure|program|record|reintroduce|repeat|self|set|string|then|to|type|unit|until|uses|var|while|with)\b/i,
        lookbehind: !0
    }, {
        pattern: /(^|[^&])\b(?:dispose|exit|false|new|true)\b/i,
        lookbehind: !0
    }, {
        pattern: /(^|[^&])\b(?:class|dispinterface|except|exports|finalization|finally|initialization|inline|library|on|out|packed|property|raise|resourcestring|threadvar|try)\b/i,
        lookbehind: !0
    }, {
        pattern: /(^|[^&])\b(?:absolute|abstract|alias|assembler|bitpacked|break|cdecl|continue|cppdecl|cvar|default|deprecated|dynamic|enumerator|experimental|export|external|far|far16|forward|generic|helper|implements|index|interrupt|iochecks|local|message|name|near|nodefault|noreturn|nostackframe|oldfpccall|otherwise|overload|override|pascal|platform|private|protected|public|published|read|register|reintroduce|result|safecall|saveregisters|softfloat|specialize|static|stdcall|stored|strict|unaligned|unimplemented|varargs|virtual|write)\b/i,
        lookbehind: !0
    }],
    number: [/(?:[&%]\d+|\$[a-f\d]+)/i, /\b\d+(?:\.\d+)?(?:e[+-]?\d+)?/i],
    operator: [/\.\.|\*\*|:=|<[<=>]?|>[>=]?|[+\-*\/]=?|[@^=]/i, {
        pattern: /(^|[^&])\b(?:and|as|div|exclude|in|include|is|mod|not|or|shl|shr|xor)\b/,
        lookbehind: !0
    }],
    punctuation: /\(\.|\.\)|[()\[\]:;,.]/
},
Prism.languages.objectpascal = Prism.languages.pascal;
!function(e) {
    var n = "(?:\\w+(?:<braces>)?|<braces>)".replace(/<braces>/g, function() {
        return "\\((?:[^()]|\\((?:[^()]|\\([^()]*\\))*\\))*\\)"
    })
      , t = e.languages.pascaligo = {
        comment: /\(\*[\s\S]+?\*\)|\/\/.*/,
        string: {
            pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1|\^[a-z]/i,
            greedy: !0
        },
        "class-name": [{
            pattern: RegExp("(\\btype\\s+\\w+\\s+is\\s+)<type>".replace(/<type>/g, function() {
                return n
            }), "i"),
            lookbehind: !0,
            inside: null
        }, {
            pattern: RegExp("<type>(?=\\s+is\\b)".replace(/<type>/g, function() {
                return n
            }), "i"),
            inside: null
        }, {
            pattern: RegExp("(:\\s*)<type>".replace(/<type>/g, function() {
                return n
            })),
            lookbehind: !0,
            inside: null
        }],
        keyword: {
            pattern: /(^|[^&])\b(?:begin|block|case|const|else|end|fail|for|from|function|if|is|nil|of|remove|return|skip|then|type|var|while|with)\b/i,
            lookbehind: !0
        },
        boolean: {
            pattern: /(^|[^&])\b(?:True|False)\b/i,
            lookbehind: !0
        },
        builtin: {
            pattern: /(^|[^&])\b(?:bool|int|list|map|nat|record|string|unit)\b/i,
            lookbehind: !0
        },
        function: /\w+(?=\s*\()/i,
        number: [/%[01]+|&[0-7]+|\$[a-f\d]+/i, /\b\d+(?:\.\d+)?(?:e[+-]?\d+)?(?:mtz|n)?/i],
        operator: /->|=\/=|\.\.|\*\*|:=|<[<=>]?|>[>=]?|[+\-*\/]=?|[@^=|]|\b(?:and|mod|or)\b/,
        punctuation: /\(\.|\.\)|[()\[\]:;,.{}]/
    }
      , i = ["comment", "keyword", "builtin", "operator", "punctuation"].reduce(function(e, n) {
        return e[n] = t[n],
        e
    }, {});
    t["class-name"].forEach(function(e) {
        e.inside = i
    })
}(Prism);
Prism.languages.perl = {
    comment: [{
        pattern: /(^\s*)=\w+[\s\S]*?=cut.*/m,
        lookbehind: !0
    }, {
        pattern: /(^|[^\\$])#.*/,
        lookbehind: !0
    }],
    string: [{
        pattern: /\b(?:q|qq|qx|qw)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
        greedy: !0
    }, {
        pattern: /\b(?:q|qq|qx|qw)\s+([a-zA-Z0-9])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
        greedy: !0
    }, {
        pattern: /\b(?:q|qq|qx|qw)\s*\((?:[^()\\]|\\[\s\S])*\)/,
        greedy: !0
    }, {
        pattern: /\b(?:q|qq|qx|qw)\s*\{(?:[^{}\\]|\\[\s\S])*\}/,
        greedy: !0
    }, {
        pattern: /\b(?:q|qq|qx|qw)\s*\[(?:[^[\]\\]|\\[\s\S])*\]/,
        greedy: !0
    }, {
        pattern: /\b(?:q|qq|qx|qw)\s*<(?:[^<>\\]|\\[\s\S])*>/,
        greedy: !0
    }, {
        pattern: /("|`)(?:(?!\1)[^\\]|\\[\s\S])*\1/,
        greedy: !0
    }, {
        pattern: /'(?:[^'\\\r\n]|\\.)*'/,
        greedy: !0
    }],
    regex: [{
        pattern: /\b(?:m|qr)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\1)[^\\]|\\[\s\S])*\1[msixpodualngc]*/,
        greedy: !0
    }, {
        pattern: /\b(?:m|qr)\s+([a-zA-Z0-9])(?:(?!\1)[^\\]|\\[\s\S])*\1[msixpodualngc]*/,
        greedy: !0
    }, {
        pattern: /\b(?:m|qr)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngc]*/,
        greedy: !0
    }, {
        pattern: /\b(?:m|qr)\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngc]*/,
        greedy: !0
    }, {
        pattern: /\b(?:m|qr)\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngc]*/,
        greedy: !0
    }, {
        pattern: /\b(?:m|qr)\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngc]*/,
        greedy: !0
    }, {
        pattern: /(^|[^-]\b)(?:s|tr|y)\s*([^a-zA-Z0-9\s{(\[<])(?:(?!\2)[^\\]|\\[\s\S])*\2(?:(?!\2)[^\\]|\\[\s\S])*\2[msixpodualngcer]*/,
        lookbehind: !0,
        greedy: !0
    }, {
        pattern: /(^|[^-]\b)(?:s|tr|y)\s+([a-zA-Z0-9])(?:(?!\2)[^\\]|\\[\s\S])*\2(?:(?!\2)[^\\]|\\[\s\S])*\2[msixpodualngcer]*/,
        lookbehind: !0,
        greedy: !0
    }, {
        pattern: /(^|[^-]\b)(?:s|tr|y)\s*\((?:[^()\\]|\\[\s\S])*\)\s*\((?:[^()\\]|\\[\s\S])*\)[msixpodualngcer]*/,
        lookbehind: !0,
        greedy: !0
    }, {
        pattern: /(^|[^-]\b)(?:s|tr|y)\s*\{(?:[^{}\\]|\\[\s\S])*\}\s*\{(?:[^{}\\]|\\[\s\S])*\}[msixpodualngcer]*/,
        lookbehind: !0,
        greedy: !0
    }, {
        pattern: /(^|[^-]\b)(?:s|tr|y)\s*\[(?:[^[\]\\]|\\[\s\S])*\]\s*\[(?:[^[\]\\]|\\[\s\S])*\][msixpodualngcer]*/,
        lookbehind: !0,
        greedy: !0
    }, {
        pattern: /(^|[^-]\b)(?:s|tr|y)\s*<(?:[^<>\\]|\\[\s\S])*>\s*<(?:[^<>\\]|\\[\s\S])*>[msixpodualngcer]*/,
        lookbehind: !0,
        greedy: !0
    }, {
        pattern: /\/(?:[^\/\\\r\n]|\\.)*\/[msixpodualngc]*(?=\s*(?:$|[\r\n,.;})&|\-+*~<>!?^]|(?:lt|gt|le|ge|eq|ne|cmp|not|and|or|xor|x)\b))/,
        greedy: !0
    }],
    variable: [/[&*$@%]\{\^[A-Z]+\}/, /[&*$@%]\^[A-Z_]/, /[&*$@%]#?(?=\{)/, /[&*$@%]#?(?:(?:::)*'?(?!\d)[\w$]+)+(?:::)*/i, /[&*$@%]\d+/, /(?!%=)[$@%][!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/],
    filehandle: {
        pattern: /<(?![<=])\S*>|\b_\b/,
        alias: "symbol"
    },
    vstring: {
        pattern: /v\d+(?:\.\d+)*|\d+(?:\.\d+){2,}/,
        alias: "string"
    },
    function: {
        pattern: /sub [a-z0-9_]+/i,
        inside: {
            keyword: /sub/
        }
    },
    keyword: /\b(?:any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|return|say|state|sub|switch|undef|unless|until|use|when|while)\b/,
    number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0b[01](?:_?[01])*|(?:\d(?:_?\d)*)?\.?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)\b/,
    operator: /-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|\+[+=]?|-[-=>]?|\*\*?=?|\/\/?=?|=[=~>]?|~[~=]?|\|\|?=?|&&?=?|<(?:=>?|<=?)?|>>?=?|![~=]?|[%^]=?|\.(?:=|\.\.?)?|[\\?]|\bx(?:=|\b)|\b(?:lt|gt|le|ge|eq|ne|cmp|not|and|or|xor)\b/,
    punctuation: /[{}[\];(),:]/
};
!function(a) {
    var e = "(?:\\b[a-zA-Z]\\w*|[|\\\\[\\]])+";
    a.languages.phpdoc = a.languages.extend("javadoclike", {
        parameter: {
            pattern: RegExp("(@(?:global|param|property(?:-read|-write)?|var)\\s+(?:" + e + "\\s+)?)\\$\\w+"),
            lookbehind: !0
        }
    }),
    a.languages.insertBefore("phpdoc", "keyword", {
        "class-name": [{
            pattern: RegExp("(@(?:global|package|param|property(?:-read|-write)?|return|subpackage|throws|var)\\s+)" + e),
            lookbehind: !0,
            inside: {
                keyword: /\b(?:callback|resource|boolean|integer|double|object|string|array|false|float|mixed|bool|null|self|true|void|int)\b/,
                punctuation: /[|\\[\]()]/
            }
        }]
    }),
    a.languages.javadoclike.addSupport("php", a.languages.phpdoc)
}(Prism);
Prism.languages.insertBefore("php", "variable", {
    this: /\$this\b/,
    global: /\$(?:_(?:SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE)|GLOBALS|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)\b/,
    scope: {
        pattern: /\b[\w\\]+::/,
        inside: {
            keyword: /static|self|parent/,
            punctuation: /::|\\/
        }
    }
});
Prism.languages.sql = {
    comment: {
        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
        lookbehind: !0
    },
    variable: [{
        pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
        greedy: !0
    }, /@[\w.$]+/],
    string: {
        pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
        greedy: !0,
        lookbehind: !0
    },
    function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
    keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:S|ING)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
    boolean: /\b(?:TRUE|FALSE|NULL)\b/i,
    number: /\b0x[\da-f]+\b|\b\d+\.?\d*|\B\.\d+\b/i,
    operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
    punctuation: /[;[\]()`,.]/
};
!function(E) {
    var A = E.languages.plsql = E.languages.extend("sql", {
        comment: [/\/\*[\s\S]*?\*\//, /--.*/]
    })
      , T = A.keyword;
    Array.isArray(T) || (T = A.keyword = [T]),
    T.unshift(/\b(?:ACCESS|AGENT|AGGREGATE|ARRAY|ARROW|AT|ATTRIBUTE|AUDIT|AUTHID|BFILE_BASE|BLOB_BASE|BLOCK|BODY|BOTH|BOUND|BYTE|CALLING|CHAR_BASE|CHARSET(?:FORM|ID)|CLOB_BASE|COLAUTH|COLLECT|CLUSTERS?|COMPILED|COMPRESS|CONSTANT|CONSTRUCTOR|CONTEXT|CRASH|CUSTOMDATUM|DANGLING|DATE_BASE|DEFINE|DETERMINISTIC|DURATION|ELEMENT|EMPTY|EXCEPTIONS?|EXCLUSIVE|EXTERNAL|FINAL|FORALL|FORM|FOUND|GENERAL|HEAP|HIDDEN|IDENTIFIED|IMMEDIATE|INCLUDING|INCREMENT|INDICATOR|INDEXES|INDICES|INFINITE|INITIAL|ISOPEN|INSTANTIABLE|INTERFACE|INVALIDATE|JAVA|LARGE|LEADING|LENGTH|LIBRARY|LIKE[24C]|LIMITED|LONG|LOOP|MAP|MAXEXTENTS|MAXLEN|MEMBER|MINUS|MLSLABEL|MULTISET|NAME|NAN|NATIVE|NEW|NOAUDIT|NOCOMPRESS|NOCOPY|NOTFOUND|NOWAIT|NUMBER(?:_BASE)?|OBJECT|OCI(?:COLL|DATE|DATETIME|DURATION|INTERVAL|LOBLOCATOR|NUMBER|RAW|REF|REFCURSOR|ROWID|STRING|TYPE)|OFFLINE|ONLINE|ONLY|OPAQUE|OPERATOR|ORACLE|ORADATA|ORGANIZATION|ORL(?:ANY|VARY)|OTHERS|OVERLAPS|OVERRIDING|PACKAGE|PARALLEL_ENABLE|PARAMETERS?|PASCAL|PCTFREE|PIPE(?:LINED)?|PRAGMA|PRIOR|PRIVATE|RAISE|RANGE|RAW|RECORD|REF|REFERENCE|REM|REMAINDER|RESULT|RESOURCE|RETURNING|REVERSE|ROW(?:ID|NUM|TYPE)|SAMPLE|SB[124]|SEGMENT|SELF|SEPARATE|SEQUENCE|SHORT|SIZE(?:_T)?|SPARSE|SQL(?:CODE|DATA|NAME|STATE)|STANDARD|STATIC|STDDEV|STORED|STRING|STRUCT|STYLE|SUBMULTISET|SUBPARTITION|SUBSTITUTABLE|SUBTYPE|SUCCESSFUL|SYNONYM|SYSDATE|TABAUTH|TDO|THE|TIMEZONE_(?:ABBR|HOUR|MINUTE|REGION)|TRAILING|TRANSAC(?:TIONAL)?|TRUSTED|UB[124]|UID|UNDER|UNTRUSTED|VALIDATE|VALIST|VARCHAR2|VARIABLE|VARIANCE|VARRAY|VIEWS|VOID|WHENEVER|WRAPPED|ZONE)\b/i);
    var R = A.operator;
    Array.isArray(R) || (R = A.operator = [R]),
    R.unshift(/:=/)
}(Prism);
!function(e) {
    var i = Prism.languages.powershell = {
        comment: [{
            pattern: /(^|[^`])<#[\s\S]*?#>/,
            lookbehind: !0
        }, {
            pattern: /(^|[^`])#.*/,
            lookbehind: !0
        }],
        string: [{
            pattern: /"(?:`[\s\S]|[^`"])*"/,
            greedy: !0,
            inside: {
                function: {
                    pattern: /(^|[^`])\$\((?:\$\([^\r\n()]*\)|(?!\$\()[^\r\n)])*\)/,
                    lookbehind: !0,
                    inside: {}
                }
            }
        }, {
            pattern: /'(?:[^']|'')*'/,
            greedy: !0
        }],
        namespace: /\[[a-z](?:\[(?:\[[^\]]*]|[^\[\]])*]|[^\[\]])*]/i,
        boolean: /\$(?:true|false)\b/i,
        variable: /\$\w+\b/,
        function: [/\b(?:Add|Approve|Assert|Backup|Block|Checkpoint|Clear|Close|Compare|Complete|Compress|Confirm|Connect|Convert|ConvertFrom|ConvertTo|Copy|Debug|Deny|Disable|Disconnect|Dismount|Edit|Enable|Enter|Exit|Expand|Export|Find|ForEach|Format|Get|Grant|Group|Hide|Import|Initialize|Install|Invoke|Join|Limit|Lock|Measure|Merge|Move|New|New|Open|Optimize|Out|Ping|Pop|Protect|Publish|Push|Read|Receive|Redo|Register|Remove|Rename|Repair|Request|Reset|Resize|Resolve|Restart|Restore|Resume|Revoke|Save|Search|Select|Send|Set|Show|Skip|Sort|Split|Start|Step|Stop|Submit|Suspend|Switch|Sync|Tee|Test|Trace|Unblock|Undo|Uninstall|Unlock|Unprotect|Unpublish|Unregister|Update|Use|Wait|Watch|Where|Write)-[a-z]+\b/i, /\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i],
        keyword: /\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,
        operator: {
            pattern: /(\W?)(?:!|-(?:eq|ne|gt|ge|lt|le|sh[lr]|not|b?(?:and|x?or)|(?:Not)?(?:Like|Match|Contains|In)|Replace|Join|is(?:Not)?|as)\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,
            lookbehind: !0
        },
        punctuation: /[|{}[\];(),.]/
    }
      , r = i.string[0].inside;
    r.boolean = i.boolean,
    r.variable = i.variable,
    r.function.inside = i
}();
Prism.languages.processing = Prism.languages.extend("clike", {
    keyword: /\b(?:break|catch|case|class|continue|default|else|extends|final|for|if|implements|import|new|null|private|public|return|static|super|switch|this|try|void|while)\b/,
    operator: /<[<=]?|>[>=]?|&&?|\|\|?|[%?]|[!=+\-*\/]=?/
}),
Prism.languages.insertBefore("processing", "number", {
    constant: /\b(?!XML\b)[A-Z][A-Z\d_]+\b/,
    type: {
        pattern: /\b(?:boolean|byte|char|color|double|float|int|XML|[A-Z]\w*)\b/,
        alias: "variable"
    }
}),
Prism.languages.processing.function.pattern = /\w+(?=\s*\()/,
Prism.languages.processing["class-name"].alias = "variable";
Prism.languages.properties = {
    comment: /^[ \t]*[#!].*$/m,
    "attr-value": {
        pattern: /(^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+?(?: *[=:] *| ))(?:\\(?:\r\n|[\s\S])|[^\\\r\n])+/m,
        lookbehind: !0
    },
    "attr-name": /^[ \t]*(?:\\(?:\r\n|[\s\S])|[^\\\s:=])+?(?= *[=:] *| )/m,
    punctuation: /[=:]/
};
Prism.languages.python = {
    comment: {
        pattern: /(^|[^\\])#.*/,
        lookbehind: !0
    },
    "string-interpolation": {
        pattern: /(?:f|rf|fr)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
        greedy: !0,
        inside: {
            interpolation: {
                pattern: /((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,
                lookbehind: !0,
                inside: {
                    "format-spec": {
                        pattern: /(:)[^:(){}]+(?=}$)/,
                        lookbehind: !0
                    },
                    "conversion-option": {
                        pattern: /![sra](?=[:}]$)/,
                        alias: "punctuation"
                    },
                    rest: null
                }
            },
            string: /[\s\S]+/
        }
    },
    "triple-quoted-string": {
        pattern: /(?:[rub]|rb|br)?("""|''')[\s\S]*?\1/i,
        greedy: !0,
        alias: "string"
    },
    string: {
        pattern: /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
        greedy: !0
    },
    function: {
        pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
        lookbehind: !0
    },
    "class-name": {
        pattern: /(\bclass\s+)\w+/i,
        lookbehind: !0
    },
    decorator: {
        pattern: /(^\s*)@\w+(?:\.\w+)*/im,
        lookbehind: !0,
        alias: ["annotation", "punctuation"],
        inside: {
            punctuation: /\./
        }
    },
    keyword: /\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
    builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
    boolean: /\b(?:True|False|None)\b/,
    number: /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
    operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
    punctuation: /[{}[\];(),.:]/
},
Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python,
Prism.languages.py = Prism.languages.python;
!function(i) {
    var t = i.util.clone(i.languages.javascript);
    i.languages.jsx = i.languages.extend("markup", t),
    i.languages.jsx.tag.pattern = /<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:$-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i,
    i.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/i,
    i.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i,
    i.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/,
    i.languages.insertBefore("inside", "attr-name", {
        spread: {
            pattern: /\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/,
            inside: {
                punctuation: /\.{3}|[{}.]/,
                "attr-value": /\w+/
            }
        }
    }, i.languages.jsx.tag),
    i.languages.insertBefore("inside", "attr-value", {
        script: {
            pattern: /=(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\})/i,
            inside: {
                "script-punctuation": {
                    pattern: /^=(?={)/,
                    alias: "punctuation"
                },
                rest: i.languages.jsx
            },
            alias: "language-javascript"
        }
    }, i.languages.jsx.tag);
    var o = function(t) {
        return t ? "string" == typeof t ? t : "string" == typeof t.content ? t.content : t.content.map(o).join("") : ""
    }
      , p = function(t) {
        for (var n = [], e = 0; e < t.length; e++) {
            var a = t[e]
              , s = !1;
            if ("string" != typeof a && ("tag" === a.type && a.content[0] && "tag" === a.content[0].type ? "</" === a.content[0].content[0].content ? 0 < n.length && n[n.length - 1].tagName === o(a.content[0].content[1]) && n.pop() : "/>" === a.content[a.content.length - 1].content || n.push({
                tagName: o(a.content[0].content[1]),
                openedBraces: 0
            }) : 0 < n.length && "punctuation" === a.type && "{" === a.content ? n[n.length - 1].openedBraces++ : 0 < n.length && 0 < n[n.length - 1].openedBraces && "punctuation" === a.type && "}" === a.content ? n[n.length - 1].openedBraces-- : s = !0),
            (s || "string" == typeof a) && 0 < n.length && 0 === n[n.length - 1].openedBraces) {
                var g = o(a);
                e < t.length - 1 && ("string" == typeof t[e + 1] || "plain-text" === t[e + 1].type) && (g += o(t[e + 1]),
                t.splice(e + 1, 1)),
                0 < e && ("string" == typeof t[e - 1] || "plain-text" === t[e - 1].type) && (g = o(t[e - 1]) + g,
                t.splice(e - 1, 1),
                e--),
                t[e] = new i.Token("plain-text",g,null,g)
            }
            a.content && "string" != typeof a.content && p(a.content)
        }
    };
    i.hooks.add("after-tokenize", function(t) {
        "jsx" !== t.language && "tsx" !== t.language || p(t.tokens)
    })
}(Prism);
var typescript = Prism.util.clone(Prism.languages.typescript);
Prism.languages.tsx = Prism.languages.extend("jsx", typescript);
!function(n) {
    var a = {
        pattern: /\\[\\(){}[\]^$+*?|.]/,
        alias: "escape"
    }
      , e = /\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|c[a-zA-Z]|0[0-7]{0,2}|[123][0-7]{2}|.)/
      , t = "(?:[^\\\\-]|" + e.source + ")"
      , i = RegExp(t + "-" + t)
      , r = {
        pattern: /(<|')[^<>']+(?=[>']$)/,
        lookbehind: !0,
        alias: "variable"
    };
    n.languages.regex = {
        charset: {
            pattern: /((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,
            lookbehind: !0,
            inside: {
                "charset-negation": {
                    pattern: /(^\[)\^/,
                    lookbehind: !0,
                    alias: "operator"
                },
                "charset-punctuation": {
                    pattern: /^\[|\]$/,
                    alias: "punctuation"
                },
                range: {
                    pattern: i,
                    inside: {
                        escape: e,
                        "range-punctuation": {
                            pattern: /-/,
                            alias: "operator"
                        }
                    }
                },
                "special-escape": a,
                charclass: {
                    pattern: /\\[wsd]|\\p{[^{}]+}/i,
                    alias: "class-name"
                },
                escape: e
            }
        },
        "special-escape": a,
        charclass: {
            pattern: /\.|\\[wsd]|\\p{[^{}]+}/i,
            alias: "class-name"
        },
        backreference: [{
            pattern: /\\(?![123][0-7]{2})[1-9]/,
            alias: "keyword"
        }, {
            pattern: /\\k<[^<>']+>/,
            alias: "keyword",
            inside: {
                "group-name": r
            }
        }],
        anchor: {
            pattern: /[$^]|\\[ABbGZz]/,
            alias: "function"
        },
        escape: e,
        group: [{
            pattern: /\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,
            alias: "punctuation",
            inside: {
                "group-name": r
            }
        }, {
            pattern: /\)/,
            alias: "punctuation"
        }],
        quantifier: {
            pattern: /(?:[+*?]|\{(?:\d+,?\d*)\})[?+]?/,
            alias: "number"
        },
        alternation: {
            pattern: /\|/,
            alias: "keyword"
        }
    },
    ["actionscript", "coffescript", "flow", "javascript", "typescript", "vala"].forEach(function(a) {
        var e = n.languages[a];
        e && (e.regex.inside = {
            "language-regex": {
                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/i,
                lookbehind: !0,
                inside: n.languages.regex
            },
            "regex-flags": /[a-z]+$/i,
            "regex-delimiter": /^\/|\/$/
        })
    })
}(Prism);
Prism.languages.rest = {
    table: [{
        pattern: /(\s*)(?:\+[=-]+)+\+(?:\r?\n|\r)(?:\1(?:[+|].+)+[+|](?:\r?\n|\r))+\1(?:\+[=-]+)+\+/,
        lookbehind: !0,
        inside: {
            punctuation: /\||(?:\+[=-]+)+\+/
        }
    }, {
        pattern: /(\s*)(?:=+ +)+=+(?:(?:\r?\n|\r)\1.+)+(?:\r?\n|\r)\1(?:=+ +)+=+(?=(?:\r?\n|\r){2}|\s*$)/,
        lookbehind: !0,
        inside: {
            punctuation: /[=-]+/
        }
    }],
    "substitution-def": {
        pattern: /(^\s*\.\. )\|(?:[^|\s](?:[^|]*[^|\s])?)\| [^:]+::/m,
        lookbehind: !0,
        inside: {
            substitution: {
                pattern: /^\|(?:[^|\s]|[^|\s][^|]*[^|\s])\|/,
                alias: "attr-value",
                inside: {
                    punctuation: /^\||\|$/
                }
            },
            directive: {
                pattern: /( +)[^:]+::/,
                lookbehind: !0,
                alias: "function",
                inside: {
                    punctuation: /::$/
                }
            }
        }
    },
    "link-target": [{
        pattern: /(^\s*\.\. )\[[^\]]+\]/m,
        lookbehind: !0,
        alias: "string",
        inside: {
            punctuation: /^\[|\]$/
        }
    }, {
        pattern: /(^\s*\.\. )_(?:`[^`]+`|(?:[^:\\]|\\.)+):/m,
        lookbehind: !0,
        alias: "string",
        inside: {
            punctuation: /^_|:$/
        }
    }],
    directive: {
        pattern: /(^\s*\.\. )[^:]+::/m,
        lookbehind: !0,
        alias: "function",
        inside: {
            punctuation: /::$/
        }
    },
    comment: {
        pattern: /(^\s*\.\.)(?:(?: .+)?(?:(?:\r?\n|\r).+)+| .+)(?=(?:\r?\n|\r){2}|$)/m,
        lookbehind: !0
    },
    title: [{
        pattern: /^(([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\2+)(?:\r?\n|\r).+(?:\r?\n|\r)\1$/m,
        inside: {
            punctuation: /^[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]+|[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]+$/,
            important: /.+/
        }
    }, {
        pattern: /(^|(?:\r?\n|\r){2}).+(?:\r?\n|\r)([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\2+(?=\r?\n|\r|$)/,
        lookbehind: !0,
        inside: {
            punctuation: /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]+$/,
            important: /.+/
        }
    }],
    hr: {
        pattern: /((?:\r?\n|\r){2})([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\2{3,}(?=(?:\r?\n|\r){2})/,
        lookbehind: !0,
        alias: "punctuation"
    },
    field: {
        pattern: /(^\s*):[^:\r\n]+:(?= )/m,
        lookbehind: !0,
        alias: "attr-name"
    },
    "command-line-option": {
        pattern: /(^\s*)(?:[+-][a-z\d]|(?:--|\/)[a-z\d-]+)(?:[ =](?:[a-z][\w-]*|<[^<>]+>))?(?:, (?:[+-][a-z\d]|(?:--|\/)[a-z\d-]+)(?:[ =](?:[a-z][\w-]*|<[^<>]+>))?)*(?=(?:\r?\n|\r)? {2,}\S)/im,
        lookbehind: !0,
        alias: "symbol"
    },
    "literal-block": {
        pattern: /::(?:\r?\n|\r){2}([ \t]+).+(?:(?:\r?\n|\r)\1.+)*/,
        inside: {
            "literal-block-punctuation": {
                pattern: /^::/,
                alias: "punctuation"
            }
        }
    },
    "quoted-literal-block": {
        pattern: /::(?:\r?\n|\r){2}([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]).*(?:(?:\r?\n|\r)\1.*)*/,
        inside: {
            "literal-block-punctuation": {
                pattern: /^(?:::|([!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])\1*)/m,
                alias: "punctuation"
            }
        }
    },
    "list-bullet": {
        pattern: /(^\s*)(?:[*+\-•‣⁃]|\(?(?:\d+|[a-z]|[ivxdclm]+)\)|(?:\d+|[a-z]|[ivxdclm]+)\.)(?= )/im,
        lookbehind: !0,
        alias: "punctuation"
    },
    "doctest-block": {
        pattern: /(^\s*)>>> .+(?:(?:\r?\n|\r).+)*/m,
        lookbehind: !0,
        inside: {
            punctuation: /^>>>/
        }
    },
    inline: [{
        pattern: /(^|[\s\-:\/'"<(\[{])(?::[^:]+:`.*?`|`.*?`:[^:]+:|(\*\*?|``?|\|)(?!\s).*?[^\s]\2(?=[\s\-.,:;!?\\\/'")\]}]|$))/m,
        lookbehind: !0,
        inside: {
            bold: {
                pattern: /(^\*\*).+(?=\*\*$)/,
                lookbehind: !0
            },
            italic: {
                pattern: /(^\*).+(?=\*$)/,
                lookbehind: !0
            },
            "inline-literal": {
                pattern: /(^``).+(?=``$)/,
                lookbehind: !0,
                alias: "symbol"
            },
            role: {
                pattern: /^:[^:]+:|:[^:]+:$/,
                alias: "function",
                inside: {
                    punctuation: /^:|:$/
                }
            },
            "interpreted-text": {
                pattern: /(^`).+(?=`$)/,
                lookbehind: !0,
                alias: "attr-value"
            },
            substitution: {
                pattern: /(^\|).+(?=\|$)/,
                lookbehind: !0,
                alias: "attr-value"
            },
            punctuation: /\*\*?|``?|\|/
        }
    }],
    link: [{
        pattern: /\[[^\]]+\]_(?=[\s\-.,:;!?\\\/'")\]}]|$)/,
        alias: "string",
        inside: {
            punctuation: /^\[|\]_$/
        }
    }, {
        pattern: /(?:\b[a-z\d]+(?:[_.:+][a-z\d]+)*_?_|`[^`]+`_?_|_`[^`]+`)(?=[\s\-.,:;!?\\\/'")\]}]|$)/i,
        alias: "string",
        inside: {
            punctuation: /^_?`|`$|`?_?_$/
        }
    }],
    punctuation: {
        pattern: /(^\s*)(?:\|(?= |$)|(?:---?|—|\.\.|__)(?= )|\.\.$)/m,
        lookbehind: !0
    }
};
!function(e) {
    e.languages.ruby = e.languages.extend("clike", {
        comment: [/#.*/, {
            pattern: /^=begin\s[\s\S]*?^=end/m,
            greedy: !0
        }],
        "class-name": {
            pattern: /(\b(?:class)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: !0,
            inside: {
                punctuation: /[.\\]/
            }
        },
        keyword: /\b(?:alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|protected|private|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/
    });
    var n = {
        pattern: /#\{[^}]+\}/,
        inside: {
            delimiter: {
                pattern: /^#\{|\}$/,
                alias: "tag"
            },
            rest: e.languages.ruby
        }
    };
    delete e.languages.ruby.function,
    e.languages.insertBefore("ruby", "keyword", {
        regex: [{
            pattern: RegExp("%r(?:" + ["([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1[gim]{0,3}", "\\((?:[^()\\\\]|\\\\[^])*\\)[gim]{0,3}", "\\{(?:[^#{}\\\\]|#(?:\\{[^}]+\\})?|\\\\[^])*\\}[gim]{0,3}", "\\[(?:[^\\[\\]\\\\]|\\\\[^])*\\][gim]{0,3}", "<(?:[^<>\\\\]|\\\\[^])*>[gim]{0,3}"].join("|") + ")"),
            greedy: !0,
            inside: {
                interpolation: n
            }
        }, {
            pattern: /(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[gim]{0,3}(?=\s*(?:$|[\r\n,.;})]))/,
            lookbehind: !0,
            greedy: !0
        }],
        variable: /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,
        symbol: {
            pattern: /(^|[^:]):[a-zA-Z_]\w*(?:[?!]|\b)/,
            lookbehind: !0
        },
        "method-definition": {
            pattern: /(\bdef\s+)[\w.]+/,
            lookbehind: !0,
            inside: {
                function: /\w+$/,
                rest: e.languages.ruby
            }
        }
    }),
    e.languages.insertBefore("ruby", "number", {
        builtin: /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|Fixnum|Float|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,
        constant: /\b[A-Z]\w*(?:[?!]|\b)/
    }),
    e.languages.ruby.string = [{
        pattern: RegExp("%[qQiIwWxs]?(?:" + ["([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1", "\\((?:[^()\\\\]|\\\\[^])*\\)", "\\{(?:[^#{}\\\\]|#(?:\\{[^}]+\\})?|\\\\[^])*\\}", "\\[(?:[^\\[\\]\\\\]|\\\\[^])*\\]", "<(?:[^<>\\\\]|\\\\[^])*>"].join("|") + ")"),
        greedy: !0,
        inside: {
            interpolation: n
        }
    }, {
        pattern: /("|')(?:#\{[^}]+\}|\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0,
        inside: {
            interpolation: n
        }
    }],
    e.languages.rb = e.languages.ruby
}(Prism);
!function(e) {
    var t = "(?:\"(?:\"\"|[^\"])*\"(?!\")|'(?:''|[^'])*'(?!'))"
      , a = /\b(?:\d[\da-f]*x|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i
      , n = {
        pattern: RegExp(t + "[bx]"),
        alias: "number"
    }
      , i = {
        pattern: /&[a-z_][a-z_0-9]*/i
    }
      , r = {
        pattern: /((?:^|\s|=|\())%(?:ABORT|BY|CMS|COPY|DISPLAY|DO|ELSE|END|EVAL|GLOBAL|GO|GOTO|IF|INC|INCLUDE|INDEX|INPUT|KTRIM|LENGTH|LET|LIST|LOCAL|PUT|QKTRIM|QSCAN|QSUBSTR|QSYSFUNC|QUPCASE|RETURN|RUN|SCAN|SUBSTR|SUPERQ|SYMDEL|SYMGLOBL|SYMLOCAL|SYMEXIST|SYSCALL|SYSEVALF|SYSEXEC|SYSFUNC|SYSGET|SYSRPUT|THEN|TO|TSO|UNQUOTE|UNTIL|UPCASE|WHILE|WINDOW)\b/i,
        lookbehind: !0,
        alias: "keyword"
    }
      , s = {
        pattern: /(^|\s+)(?:proc\s+\w+|quit|run|data(?!\=))\b/i,
        alias: "keyword",
        lookbehind: !0
    }
      , o = [/\/\*[\s\S]*?\*\//, {
        pattern: /(^\s*|;\s*)\*[^;]*;/m,
        lookbehind: !0
    }]
      , l = {
        pattern: RegExp(t),
        greedy: !0
    }
      , c = /[$%@.(){}\[\];,\\]/
      , d = {
        pattern: /%?\w+(?=\()/,
        alias: "keyword"
    }
      , p = {
        function: d,
        "arg-value": {
            pattern: /(\s*=\s*)[A-Z\.]+/i,
            lookbehind: !0
        },
        operator: /=/,
        "macro-variable": i,
        arg: {
            pattern: /[A-Z]+/i,
            alias: "keyword"
        },
        number: a,
        "numeric-constant": n,
        punctuation: c,
        string: l
    }
      , u = {
        pattern: /\b(?:format|put)\b=?[\w'$.]+/im,
        inside: {
            keyword: /^(?:format|put)(?=\=)/i,
            equals: /=/,
            format: {
                pattern: /(?:\w|\$\d)+\.\d?/i,
                alias: "number"
            }
        }
    }
      , m = {
        pattern: /\b(?:format|put)\s+[\w']+(?:\s+[$.\w]+)+(?=;)/i,
        inside: {
            keyword: /^(?:format|put)/i,
            format: {
                pattern: /[\w$]+\.\d?/,
                alias: "number"
            }
        }
    }
      , b = {
        pattern: /((?:^|[\s])=?)(?:catname|checkpoint execute_always|dm|endsas|filename|footnote|%include|libname|%list|lock|missing|options|page|resetline|%run|sasfile|skip|sysecho|title\d?)\b/i,
        lookbehind: !0,
        alias: "keyword"
    }
      , g = {
        pattern: /(^|\s)(?:submit(?:\s+(?:load|parseonly|norun))?|endsubmit)\b/i,
        lookbehind: !0,
        alias: "keyword"
    }
      , k = "accessControl|cdm|aggregation|aStore|ruleMining|audio|autotune|bayesianNetClassifier|bioMedImage|boolRule|builtins|cardinality|sccasl|clustering|copula|countreg|dataDiscovery|dataPreprocess|dataSciencePilot|dataStep|decisionTree|deepLearn|deepNeural|varReduce|simSystem|ds2|deduplication|ecm|entityRes|espCluster|explainModel|factmac|fastKnn|fcmpact|fedSql|freqTab|gam|gleam|graphSemiSupLearn|gVarCluster|hiddenMarkovModel|hyperGroup|image|iml|ica|kernalPca|langModel|ldaTopic|sparseML|mlTools|mixed|modelPublishing|mbc|network|optNetwork|neuralNet|nonlinear|nmf|nonParametricBayes|optimization|panel|pls|percentile|pca|phreg|qkb|qlim|quantreg|recommend|tsReconcile|deepRnn|regression|reinforcementLearn|robustPca|sampling|sparkEmbeddedProcess|search(?:Analytics)?|sentimentAnalysis|sequence|configuration|session(?:Prop)?|severity|simple|smartData|sandwich|spatialreg|stabilityMonitoring|spc|loadStreams|svDataDescription|svm|table|conditionalRandomFields|text(?:Rule(?:Develop|Score)|Mining|Parse|Topic|Util|Filters|Frequency)|tsInfo|timeData|transpose|uniTimeSeries"
      , y = {
        pattern: RegExp("(^|\\s)(?:action\\s+)?(?:<act>)\\.[a-z]+\\b[^;]+".replace(/<act>/g, function() {
            return k
        }), "i"),
        lookbehind: !0,
        inside: {
            keyword: RegExp("(?:<act>)\\.[a-z]+\\b".replace(/<act>/g, function() {
                return k
            }), "i"),
            action: {
                pattern: /(?:action)/i,
                alias: "keyword"
            },
            comment: o,
            function: d,
            "arg-value": p["arg-value"],
            operator: p.operator,
            argument: p.arg,
            number: a,
            "numeric-constant": n,
            punctuation: c,
            string: l
        }
    }
      , S = {
        pattern: /((?:^|\s)=?)(?:after|analysis|and|array|barchart|barwidth|begingraph|by|call|cas|cbarline|cfill|class(?:lev)?|close|column|computed?|contains|continue|data(?=\=)|define|delete|describe|document|do\s+over|do|dol|drop|dul|end(?:source|comp)?|entryTitle|else|eval(?:uate)?|exec(?:ute)?|exit|fill(?:attrs)?|file(?:name)?|flist|fnc|function(?:list)?|goto|global|group(?:by)?|headline|headskip|histogram|if|infile|keep|keylabel|keyword|label|layout|leave|legendlabel|length|libname|loadactionset|merge|midpoints|name|noobs|nowd|_?null_|ods|options|or|otherwise|out(?:put)?|over(?:lay)?|plot|put|print|raise|ranexp|rannor|rbreak|retain|return|select|set|session|sessref|source|statgraph|sum|summarize|table|temp|terminate|then\s+do|then|title\d?|to|var|when|where|xaxisopts|yaxisopts|y2axisopts)\b/i,
        lookbehind: !0
    };
    e.languages.sas = {
        datalines: {
            pattern: /^(\s*)(?:(?:data)?lines|cards);[\s\S]+?^\s*;/im,
            lookbehind: !0,
            alias: "string",
            inside: {
                keyword: {
                    pattern: /^(?:(?:data)?lines|cards)/i
                },
                punctuation: /;/
            }
        },
        "proc-sql": {
            pattern: /(^proc\s+(?:fed)?sql(?:\s+[\w|=]+)?;)[\s\S]+?(?=^(?:proc\s+\w+|quit|run|data);|(?![\s\S]))/im,
            lookbehind: !0,
            inside: {
                sql: {
                    pattern: RegExp("^[ \t]*(?:select|alter\\s+table|(?:create|describe|drop)\\s+(?:index|table(?:\\s+constraints)?|view)|create\\s+unique\\s+index|insert\\s+into|update)(?:<str>|[^;\"'])+;".replace(/<str>/g, function() {
                        return t
                    }), "im"),
                    alias: "language-sql",
                    inside: e.languages.sql
                },
                "global-statements": b,
                "sql-statements": {
                    pattern: /(^|\s)(?:disconnect\s+from|exec(?:ute)?|begin|commit|rollback|reset|validate)\b/i,
                    lookbehind: !0,
                    alias: "keyword"
                },
                number: a,
                "numeric-constant": n,
                punctuation: c,
                string: l
            }
        },
        "proc-groovy": {
            pattern: /(^proc\s+groovy(?:\s+[\w|=]+)?;)[\s\S]+?(?=^(?:proc\s+\w+|quit|run|data);|(?![\s\S]))/im,
            lookbehind: !0,
            inside: {
                comment: o,
                groovy: {
                    pattern: RegExp("(^[ \t]*submit(?:\\s+(?:load|parseonly|norun))?)(?:<str>|[^\"'])+?(?=endsubmit;)".replace(/<str>/g, function() {
                        return t
                    }), "im"),
                    lookbehind: !0,
                    alias: "language-groovy",
                    inside: e.languages.groovy
                },
                keyword: S,
                "submit-statement": g,
                "global-statements": b,
                number: a,
                "numeric-constant": n,
                punctuation: c,
                string: l
            }
        },
        "proc-lua": {
            pattern: /(^proc\s+lua(?:\s+[\w|=]+)?;)[\s\S]+?(?=^(?:proc\s+\w+|quit|run|data);|(?![\s\S]))/im,
            lookbehind: !0,
            inside: {
                comment: o,
                lua: {
                    pattern: RegExp("(^[ \t]*submit(?:\\s+(?:load|parseonly|norun))?)(?:<str>|[^\"'])+?(?=endsubmit;)".replace(/<str>/g, function() {
                        return t
                    }), "im"),
                    lookbehind: !0,
                    alias: "language-lua",
                    inside: e.languages.lua
                },
                keyword: S,
                "submit-statement": g,
                "global-statements": b,
                number: a,
                "numeric-constant": n,
                punctuation: c,
                string: l
            }
        },
        "proc-cas": {
            pattern: /(^proc\s+cas(?:\s+[\w|=]+)?;)[\s\S]+?(?=^(?:proc\s+\w+|quit|data);|(?![\s\S]))/im,
            lookbehind: !0,
            inside: {
                comment: o,
                "statement-var": {
                    pattern: /((?:^|\s)=?)saveresult\s+[^;]+/im,
                    lookbehind: !0,
                    inside: {
                        statement: {
                            pattern: /^saveresult\s+\S+/i,
                            inside: {
                                keyword: /^(?:saveresult)/i
                            }
                        },
                        rest: p
                    }
                },
                "cas-actions": y,
                statement: {
                    pattern: /((?:^|\s)=?)(?:default|(?:un)?set|on|output|upload)[^;]+/im,
                    lookbehind: !0,
                    inside: p
                },
                step: s,
                keyword: S,
                function: d,
                format: u,
                altformat: m,
                "global-statements": b,
                number: a,
                "numeric-constant": n,
                punctuation: c,
                string: l
            }
        },
        "proc-args": {
            pattern: RegExp("(^proc\\s+\\w+\\s+)(?!\\s)(?:[^;\"']|<str>)+;".replace(/<str>/g, function() {
                return t
            }), "im"),
            lookbehind: !0,
            inside: p
        },
        "macro-keyword": r,
        "macro-variable": i,
        "macro-string-functions": {
            pattern: /((?:^|\s|=))%(?:NRBQUOTE|NRQUOTE|NRSTR|BQUOTE|QUOTE|STR)\(.*?(?:[^%]\))/i,
            lookbehind: !0,
            inside: {
                function: {
                    pattern: /%(?:NRBQUOTE|NRQUOTE|NRSTR|BQUOTE|QUOTE|STR)/i,
                    alias: "keyword"
                },
                "macro-keyword": r,
                "macro-variable": i,
                "escaped-char": {
                    pattern: /%['"()<>=¬^~;,#]/i
                },
                punctuation: c
            }
        },
        "macro-declaration": {
            pattern: /^%macro[^;]+(?=;)/im,
            inside: {
                keyword: /%macro/i
            }
        },
        "macro-end": {
            pattern: /^%mend[^;]+(?=;)/im,
            inside: {
                keyword: /%mend/i
            }
        },
        macro: {
            pattern: /%_\w+(?=\()/,
            alias: "keyword"
        },
        input: {
            pattern: /\binput\s+[-\w\s/*.$&]+;/i,
            inside: {
                input: {
                    alias: "keyword",
                    pattern: /^input/i
                },
                comment: o,
                number: a,
                "numeric-constant": n
            }
        },
        "options-args": {
            pattern: /(^options)[-'"|/\\<>*+=:()\w\s]*(?=;)/im,
            lookbehind: !0,
            inside: p
        },
        "cas-actions": y,
        comment: o,
        function: d,
        format: u,
        altformat: m,
        "numeric-constant": n,
        datetime: {
            pattern: RegExp(t + "(?:dt?|t)"),
            alias: "number"
        },
        string: l,
        step: s,
        keyword: S,
        "operator-keyword": {
            pattern: /\b(?:eq|ne|gt|lt|ge|le|in|not)\b/i,
            alias: "operator"
        },
        number: a,
        operator: /\*\*?|\|\|?|!!?|¦¦?|<[>=]?|>[<=]?|[-+\/=&]|[~¬^]=?/i,
        punctuation: c
    }
}(Prism);
!function(e) {
    e.languages.sass = e.languages.extend("css", {
        comment: {
            pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m,
            lookbehind: !0
        }
    }),
    e.languages.insertBefore("sass", "atrule", {
        "atrule-line": {
            pattern: /^(?:[ \t]*)[@+=].+/m,
            inside: {
                atrule: /(?:@[\w-]+|[+=])/m
            }
        }
    }),
    delete e.languages.sass.atrule;
    var t = /\$[-\w]+|#\{\$[-\w]+\}/
      , a = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/, {
        pattern: /(\s+)-(?=\s)/,
        lookbehind: !0
    }];
    e.languages.insertBefore("sass", "property", {
        "variable-line": {
            pattern: /^[ \t]*\$.+/m,
            inside: {
                punctuation: /:/,
                variable: t,
                operator: a
            }
        },
        "property-line": {
            pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,
            inside: {
                property: [/[^:\s]+(?=\s*:)/, {
                    pattern: /(:)[^:\s]+/,
                    lookbehind: !0
                }],
                punctuation: /:/,
                variable: t,
                operator: a,
                important: e.languages.sass.important
            }
        }
    }),
    delete e.languages.sass.property,
    delete e.languages.sass.important,
    e.languages.insertBefore("sass", "punctuation", {
        selector: {
            pattern: /([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,
            lookbehind: !0
        }
    })
}(Prism);
!function(n) {
    var s = ["([\"'])(?:\\\\[^]|\\$\\([^)]+\\)|`[^`]+`|(?!\\1)[^\\\\])*\\1", "<<-?\\s*(\\w+?)[ \t]*(?!.)[^]*?[\r\n]\\2", "<<-?\\s*([\"'])(\\w+)\\3[ \t]*(?!.)[^]*?[\r\n]\\4"].join("|");
    n.languages["shell-session"] = {
        info: {
            pattern: /^[^\r\n$#*!]+(?=[$#])/m,
            alias: "punctuation",
            inside: {
                path: {
                    pattern: /(:)[\s\S]+/,
                    lookbehind: !0
                },
                user: /^[^\s@:$#*!/\\]+@[^\s@:$#*!/\\]+(?=:|$)/,
                punctuation: /:/
            }
        },
        command: {
            pattern: RegExp("[$#](?:[^\\\\\r\n'\"<]|\\\\.|<<str>>)+".replace(/<<str>>/g, function() {
                return s
            })),
            greedy: !0,
            inside: {
                bash: {
                    pattern: /(^[$#]\s*)[\s\S]+/,
                    lookbehind: !0,
                    alias: "language-bash",
                    inside: n.languages.bash
                },
                "shell-symbol": {
                    pattern: /^[$#]/,
                    alias: "important"
                }
            }
        },
        output: /.(?:.*(?:[\r\n]|.$))*/
    }
}(Prism);
Prism.languages.iecst = {
    comment: [{
        pattern: /(^|[^\\])(?:\/\*[\s\S]*?(?:\*\/|$)|\(\*[\s\S]*?(?:\*\)|$)|\{[\s\S]*?(?:\}|$))/,
        lookbehind: !0
    }, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
    }],
    string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    "class-name": /\b(?:END_)?(?:PROGRAM|CONFIGURATION|INTERFACE|FUNCTION_BLOCK|FUNCTION|ACTION|TRANSITION|TYPE|STRUCT|(?:INITIAL_)?STEP|NAMESPACE|LIBRARY|CHANNEL|FOLDER|RESOURCE|VAR_(?:GLOBAL|INPUT|PUTPUT|IN_OUT|ACCESS|TEMP|EXTERNAL|CONFIG)|VAR|METHOD|PROPERTY)\b/i,
    keyword: /\b(?:(?:END_)?(?:IF|WHILE|REPEAT|CASE|FOR)|ELSE|FROM|THEN|ELSIF|DO|TO|BY|PRIVATE|PUBLIC|PROTECTED|CONSTANT|RETURN|EXIT|CONTINUE|GOTO|JMP|AT|RETAIN|NON_RETAIN|TASK|WITH|UNTIL|USING|EXTENDS|IMPLEMENTS|GET|SET|__TRY|__CATCH|__FINALLY|__ENDTRY)\b/,
    variable: /\b(?:AT|BOOL|BYTE|(?:D|L)?WORD|U?(?:S|D|L)?INT|L?REAL|TIME(?:_OF_DAY)?|TOD|DT|DATE(?:_AND_TIME)?|STRING|ARRAY|ANY|POINTER)\b/,
    symbol: /%[IQM][XBWDL][\d.]*|%[IQ][\d.]*/,
    number: /\b(?:16#[\da-f]+|2#[01_]+|0x[\da-f]+)\b|\b(?:T|D|DT|TOD)#[\d_shmd:]*|\b[A-Z]*\#[\d.,_]*|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
    boolean: /\b(?:TRUE|FALSE|NULL)\b/,
    function: /\w+(?=\()/,
    operator: /(?:S?R?:?=>?|&&?|\*\*?|<=?|>=?|[-:^/+])|\b(?:OR|AND|MOD|NOT|XOR|LE|GE|EQ|NE|GE|LT)\b/,
    punctuation: /[();]/,
    type: {
        pattern: /#/,
        alias: "selector"
    }
};
!function(n) {
    function i(e, t, a) {
        return {
            pattern: RegExp("<#" + e + "[\\s\\S]*?#>"),
            alias: "block",
            inside: {
                delimiter: {
                    pattern: RegExp("^<#" + e + "|#>$"),
                    alias: "important"
                },
                content: {
                    pattern: /[\s\S]+/,
                    inside: t,
                    alias: a
                }
            }
        }
    }
    n.languages["t4-templating"] = Object.defineProperty({}, "createT4", {
        value: function(e) {
            var t = n.languages[e]
              , a = "language-" + e;
            return {
                block: {
                    pattern: /<#[\s\S]+?#>/,
                    inside: {
                        directive: i("@", {
                            "attr-value": {
                                pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/,
                                inside: {
                                    punctuation: /^=|^["']|["']$/
                                }
                            },
                            keyword: /\w+(?=\s)/,
                            "attr-name": /\w+/
                        }),
                        expression: i("=", t, a),
                        "class-feature": i("\\+", t, a),
                        standard: i("", t, a)
                    }
                }
            }
        }
    })
}(Prism);
Prism.languages.t4 = Prism.languages["t4-cs"] = Prism.languages["t4-templating"].createT4("csharp");
!function(n) {
    function e(n, e) {
        return RegExp(n.replace(/<MOD>/g, function() {
            return "(?:\\([^|()\n]+\\)|\\[[^\\]\n]+\\]|\\{[^}\n]+\\})"
        }).replace(/<PAR>/g, function() {
            return "(?:\\)|\\((?![^|()\n]+\\)))"
        }), e || "")
    }
    var i = {
        css: {
            pattern: /\{[^}]+\}/,
            inside: {
                rest: n.languages.css
            }
        },
        "class-id": {
            pattern: /(\()[^)]+(?=\))/,
            lookbehind: !0,
            alias: "attr-value"
        },
        lang: {
            pattern: /(\[)[^\]]+(?=\])/,
            lookbehind: !0,
            alias: "attr-value"
        },
        punctuation: /[\\\/]\d+|\S/
    }
      , t = n.languages.textile = n.languages.extend("markup", {
        phrase: {
            pattern: /(^|\r|\n)\S[\s\S]*?(?=$|\r?\n\r?\n|\r\r)/,
            lookbehind: !0,
            inside: {
                "block-tag": {
                    pattern: e("^[a-z]\\w*(?:<MOD>|<PAR>|[<>=])*\\."),
                    inside: {
                        modifier: {
                            pattern: e("(^[a-z]\\w*)(?:<MOD>|<PAR>|[<>=])+(?=\\.)"),
                            lookbehind: !0,
                            inside: i
                        },
                        tag: /^[a-z]\w*/,
                        punctuation: /\.$/
                    }
                },
                list: {
                    pattern: e("^[*#]+<MOD>*\\s+.+", "m"),
                    inside: {
                        modifier: {
                            pattern: e("(^[*#]+)<MOD>+"),
                            lookbehind: !0,
                            inside: i
                        },
                        punctuation: /^[*#]+/
                    }
                },
                table: {
                    pattern: e("^(?:(?:<MOD>|<PAR>|[<>=^~])+\\.\\s*)?(?:\\|(?:(?:<MOD>|<PAR>|[<>=^~_]|[\\\\/]\\d+)+\\.)?[^|]*)+\\|", "m"),
                    inside: {
                        modifier: {
                            pattern: e("(^|\\|(?:\r?\n|\r)?)(?:<MOD>|<PAR>|[<>=^~_]|[\\\\/]\\d+)+(?=\\.)"),
                            lookbehind: !0,
                            inside: i
                        },
                        punctuation: /\||^\./
                    }
                },
                inline: {
                    pattern: e("(^|[^a-zA-Z\\d])(\\*\\*|__|\\?\\?|[*_%@+\\-^~])<MOD>*.+?\\2(?![a-zA-Z\\d])"),
                    lookbehind: !0,
                    inside: {
                        bold: {
                            pattern: e("(^(\\*\\*?)<MOD>*).+?(?=\\2)"),
                            lookbehind: !0
                        },
                        italic: {
                            pattern: e("(^(__?)<MOD>*).+?(?=\\2)"),
                            lookbehind: !0
                        },
                        cite: {
                            pattern: e("(^\\?\\?<MOD>*).+?(?=\\?\\?)"),
                            lookbehind: !0,
                            alias: "string"
                        },
                        code: {
                            pattern: e("(^@<MOD>*).+?(?=@)"),
                            lookbehind: !0,
                            alias: "keyword"
                        },
                        inserted: {
                            pattern: e("(^\\+<MOD>*).+?(?=\\+)"),
                            lookbehind: !0
                        },
                        deleted: {
                            pattern: e("(^-<MOD>*).+?(?=-)"),
                            lookbehind: !0
                        },
                        span: {
                            pattern: e("(^%<MOD>*).+?(?=%)"),
                            lookbehind: !0
                        },
                        modifier: {
                            pattern: e("(^\\*\\*|__|\\?\\?|[*_%@+\\-^~])<MOD>+"),
                            lookbehind: !0,
                            inside: i
                        },
                        punctuation: /[*_%?@+\-^~]+/
                    }
                },
                "link-ref": {
                    pattern: /^\[[^\]]+\]\S+$/m,
                    inside: {
                        string: {
                            pattern: /(\[)[^\]]+(?=\])/,
                            lookbehind: !0
                        },
                        url: {
                            pattern: /(\])\S+$/,
                            lookbehind: !0
                        },
                        punctuation: /[\[\]]/
                    }
                },
                link: {
                    pattern: e('"<MOD>*[^"]+":.+?(?=[^\\w/]?(?:\\s|$))'),
                    inside: {
                        text: {
                            pattern: e('(^"<MOD>*)[^"]+(?=")'),
                            lookbehind: !0
                        },
                        modifier: {
                            pattern: e('(^")<MOD>+'),
                            lookbehind: !0,
                            inside: i
                        },
                        url: {
                            pattern: /(:).+/,
                            lookbehind: !0
                        },
                        punctuation: /[":]/
                    }
                },
                image: {
                    pattern: e("!(?:<MOD>|<PAR>|[<>=])*[^!\\s()]+(?:\\([^)]+\\))?!(?::.+?(?=[^\\w/]?(?:\\s|$)))?"),
                    inside: {
                        source: {
                            pattern: e("(^!(?:<MOD>|<PAR>|[<>=])*)[^!\\s()]+(?:\\([^)]+\\))?(?=!)"),
                            lookbehind: !0,
                            alias: "url"
                        },
                        modifier: {
                            pattern: e("(^!)(?:<MOD>|<PAR>|[<>=])+"),
                            lookbehind: !0,
                            inside: i
                        },
                        url: {
                            pattern: /(:).+/,
                            lookbehind: !0
                        },
                        punctuation: /[!:]/
                    }
                },
                footnote: {
                    pattern: /\b\[\d+\]/,
                    alias: "comment",
                    inside: {
                        punctuation: /\[|\]/
                    }
                },
                acronym: {
                    pattern: /\b[A-Z\d]+\([^)]+\)/,
                    inside: {
                        comment: {
                            pattern: /(\()[^)]+(?=\))/,
                            lookbehind: !0
                        },
                        punctuation: /[()]/
                    }
                },
                mark: {
                    pattern: /\b\((?:TM|R|C)\)/,
                    alias: "comment",
                    inside: {
                        punctuation: /[()]/
                    }
                }
            }
        }
    })
      , a = t.phrase.inside
      , o = {
        inline: a.inline,
        link: a.link,
        image: a.image,
        footnote: a.footnote,
        acronym: a.acronym,
        mark: a.mark
    };
    t.tag.pattern = /<\/?(?!\d)[a-z0-9]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i;
    var r = a.inline.inside;
    r.bold.inside = o,
    r.italic.inside = o,
    r.inserted.inside = o,
    r.deleted.inside = o,
    r.span.inside = o;
    var d = a.table.inside;
    d.inline = o.inline,
    d.link = o.link,
    d.image = o.image,
    d.footnote = o.footnote,
    d.acronym = o.acronym,
    d.mark = o.mark
}(Prism);
!function(E) {
    var n = /\b(?:ACT|ACTIFSUB|CARRAY|CASE|CLEARGIF|COA|COA_INT|CONSTANTS|CONTENT|CUR|EDITPANEL|EFFECT|EXT|FILE|FLUIDTEMPLATE|FORM|FRAME|FRAMESET|GIFBUILDER|GMENU|GMENU_FOLDOUT|GMENU_LAYERS|GP|HMENU|HRULER|HTML|IENV|IFSUB|IMAGE|IMGMENU|IMGMENUITEM|IMGTEXT|IMG_RESOURCE|INCLUDE_TYPOSCRIPT|JSMENU|JSMENUITEM|LLL|LOAD_REGISTER|NO|PAGE|RECORDS|RESTORE_REGISTER|TEMPLATE|TEXT|TMENU|TMENUITEM|TMENU_LAYERS|USER|USER_INT|_GIFBUILDER|global|globalString|globalVar)\b/;
    E.languages.typoscript = {
        comment: [{
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: !0
        }, {
            pattern: /(^|[^\\:= \t]|(?:^|[^= \t])[ \t]+)\/\/.*/,
            lookbehind: !0,
            greedy: !0
        }, {
            pattern: /(^|[^"'])#.*/,
            lookbehind: !0,
            greedy: !0
        }],
        function: [{
            pattern: /<INCLUDE_TYPOSCRIPT:\s*source\s*=\s*(?:"[^"\r\n]*"|'[^'\r\n]*')\s*>/,
            inside: {
                string: {
                    pattern: /"[^"\r\n]*"|'[^'\r\n]*'/,
                    inside: {
                        keyword: n
                    }
                },
                keyword: {
                    pattern: /INCLUDE_TYPOSCRIPT/
                }
            }
        }, {
            pattern: /@import\s*(?:"[^"\r\n]*"|'[^'\r\n]*')/,
            inside: {
                string: /"[^"\r\n]*"|'[^'\r\n]*'/
            }
        }],
        string: {
            pattern: /^([^=]*=[< ]?)(?:(?!]\n).)*/,
            lookbehind: !0,
            inside: {
                function: /{\$.*}/,
                keyword: n,
                number: /^[0-9]+$/,
                punctuation: /[,|:]/
            }
        },
        keyword: n,
        number: {
            pattern: /[0-9]+\s*[.{=]/,
            inside: {
                operator: /[.{=]/
            }
        },
        tag: {
            pattern: /\.?[\w-\\]+\.?/,
            inside: {
                punctuation: /\./
            }
        },
        punctuation: /[{}[\];(),.:|]/,
        operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/
    },
    E.languages.tsconfig = E.languages.typoscript
}(Prism);
Prism.languages.vim = {
    string: /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\r\n]|'')*'/,
    comment: /".*/,
    function: /\w+(?=\()/,
    keyword: /\b(?:ab|abbreviate|abc|abclear|abo|aboveleft|al|all|arga|argadd|argd|argdelete|argdo|arge|argedit|argg|argglobal|argl|arglocal|ar|args|argu|argument|as|ascii|bad|badd|ba|ball|bd|bdelete|be|bel|belowright|bf|bfirst|bl|blast|bm|bmodified|bn|bnext|bN|bNext|bo|botright|bp|bprevious|brea|break|breaka|breakadd|breakd|breakdel|breakl|breaklist|br|brewind|bro|browse|bufdo|b|buffer|buffers|bun|bunload|bw|bwipeout|ca|cabbrev|cabc|cabclear|caddb|caddbuffer|cad|caddexpr|caddf|caddfile|cal|call|cat|catch|cb|cbuffer|cc|ccl|cclose|cd|ce|center|cex|cexpr|cf|cfile|cfir|cfirst|cgetb|cgetbuffer|cgete|cgetexpr|cg|cgetfile|c|change|changes|chd|chdir|che|checkpath|checkt|checktime|cla|clast|cl|clist|clo|close|cmapc|cmapclear|cnew|cnewer|cn|cnext|cN|cNext|cnf|cnfile|cNfcNfile|cnorea|cnoreabbrev|col|colder|colo|colorscheme|comc|comclear|comp|compiler|conf|confirm|con|continue|cope|copen|co|copy|cpf|cpfile|cp|cprevious|cq|cquit|cr|crewind|cuna|cunabbrev|cu|cunmap|cw|cwindow|debugg|debuggreedy|delc|delcommand|d|delete|delf|delfunction|delm|delmarks|diffg|diffget|diffoff|diffpatch|diffpu|diffput|diffsplit|diffthis|diffu|diffupdate|dig|digraphs|di|display|dj|djump|dl|dlist|dr|drop|ds|dsearch|dsp|dsplit|earlier|echoe|echoerr|echom|echomsg|echon|e|edit|el|else|elsei|elseif|em|emenu|endfo|endfor|endf|endfunction|endfun|en|endif|endt|endtry|endw|endwhile|ene|enew|ex|exi|exit|exu|exusage|f|file|files|filetype|fina|finally|fin|find|fini|finish|fir|first|fix|fixdel|fo|fold|foldc|foldclose|folddoc|folddoclosed|foldd|folddoopen|foldo|foldopen|for|fu|fun|function|go|goto|gr|grep|grepa|grepadd|ha|hardcopy|h|help|helpf|helpfind|helpg|helpgrep|helpt|helptags|hid|hide|his|history|ia|iabbrev|iabc|iabclear|if|ij|ijump|il|ilist|imapc|imapclear|in|inorea|inoreabbrev|isearch|isp|isplit|iuna|iunabbrev|iu|iunmap|j|join|ju|jumps|k|keepalt|keepj|keepjumps|kee|keepmarks|laddb|laddbuffer|lad|laddexpr|laddf|laddfile|lan|language|la|last|later|lb|lbuffer|lc|lcd|lch|lchdir|lcl|lclose|let|left|lefta|leftabove|lex|lexpr|lf|lfile|lfir|lfirst|lgetb|lgetbuffer|lgete|lgetexpr|lg|lgetfile|lgr|lgrep|lgrepa|lgrepadd|lh|lhelpgrep|l|list|ll|lla|llast|lli|llist|lmak|lmake|lm|lmap|lmapc|lmapclear|lnew|lnewer|lne|lnext|lN|lNext|lnf|lnfile|lNf|lNfile|ln|lnoremap|lo|loadview|loc|lockmarks|lockv|lockvar|lol|lolder|lop|lopen|lpf|lpfile|lp|lprevious|lr|lrewind|ls|lt|ltag|lu|lunmap|lv|lvimgrep|lvimgrepa|lvimgrepadd|lw|lwindow|mak|make|ma|mark|marks|mat|match|menut|menutranslate|mk|mkexrc|mks|mksession|mksp|mkspell|mkvie|mkview|mkv|mkvimrc|mod|mode|m|move|mzf|mzfile|mz|mzscheme|nbkey|new|n|next|N|Next|nmapc|nmapclear|noh|nohlsearch|norea|noreabbrev|nu|number|nun|nunmap|omapc|omapclear|on|only|o|open|opt|options|ou|ounmap|pc|pclose|ped|pedit|pe|perl|perld|perldo|po|pop|popu|popup|pp|ppop|pre|preserve|prev|previous|p|print|P|Print|profd|profdel|prof|profile|promptf|promptfind|promptr|promptrepl|ps|psearch|pta|ptag|ptf|ptfirst|ptj|ptjump|ptl|ptlast|ptn|ptnext|ptN|ptNext|ptp|ptprevious|ptr|ptrewind|pts|ptselect|pu|put|pw|pwd|pyf|pyfile|py|python|qa|qall|q|quit|quita|quitall|r|read|rec|recover|redi|redir|red|redo|redr|redraw|redraws|redrawstatus|reg|registers|res|resize|ret|retab|retu|return|rew|rewind|ri|right|rightb|rightbelow|rub|ruby|rubyd|rubydo|rubyf|rubyfile|ru|runtime|rv|rviminfo|sal|sall|san|sandbox|sa|sargument|sav|saveas|sba|sball|sbf|sbfirst|sbl|sblast|sbm|sbmodified|sbn|sbnext|sbN|sbNext|sbp|sbprevious|sbr|sbrewind|sb|sbuffer|scripte|scriptencoding|scrip|scriptnames|se|set|setf|setfiletype|setg|setglobal|setl|setlocal|sf|sfind|sfir|sfirst|sh|shell|sign|sil|silent|sim|simalt|sla|slast|sl|sleep|sm|smagic|sm|smap|smapc|smapclear|sme|smenu|sn|snext|sN|sNext|sni|sniff|sno|snomagic|snor|snoremap|snoreme|snoremenu|sor|sort|so|source|spelld|spelldump|spe|spellgood|spelli|spellinfo|spellr|spellrepall|spellu|spellundo|spellw|spellwrong|sp|split|spr|sprevious|sre|srewind|sta|stag|startg|startgreplace|star|startinsert|startr|startreplace|stj|stjump|st|stop|stopi|stopinsert|sts|stselect|sun|sunhide|sunm|sunmap|sus|suspend|sv|sview|syncbind|t|tab|tabc|tabclose|tabd|tabdo|tabe|tabedit|tabf|tabfind|tabfir|tabfirst|tabl|tablast|tabm|tabmove|tabnew|tabn|tabnext|tabN|tabNext|tabo|tabonly|tabp|tabprevious|tabr|tabrewind|tabs|ta|tag|tags|tc|tcl|tcld|tcldo|tclf|tclfile|te|tearoff|tf|tfirst|th|throw|tj|tjump|tl|tlast|tm|tm|tmenu|tn|tnext|tN|tNext|to|topleft|tp|tprevious|tr|trewind|try|ts|tselect|tu|tu|tunmenu|una|unabbreviate|u|undo|undoj|undojoin|undol|undolist|unh|unhide|unlet|unlo|unlockvar|unm|unmap|up|update|verb|verbose|ve|version|vert|vertical|vie|view|vim|vimgrep|vimgrepa|vimgrepadd|vi|visual|viu|viusage|vmapc|vmapclear|vne|vnew|vs|vsplit|vu|vunmap|wa|wall|wh|while|winc|wincmd|windo|winp|winpos|win|winsize|wn|wnext|wN|wNext|wp|wprevious|wq|wqa|wqall|w|write|ws|wsverb|wv|wviminfo|X|xa|xall|x|xit|xm|xmap|xmapc|xmapclear|xme|xmenu|XMLent|XMLns|xn|xnoremap|xnoreme|xnoremenu|xu|xunmap|y|yank)\b/,
    builtin: /\b(?:autocmd|acd|ai|akm|aleph|allowrevins|altkeymap|ambiwidth|ambw|anti|antialias|arab|arabic|arabicshape|ari|arshape|autochdir|autoindent|autoread|autowrite|autowriteall|aw|awa|background|backspace|backup|backupcopy|backupdir|backupext|backupskip|balloondelay|ballooneval|balloonexpr|bdir|bdlay|beval|bex|bexpr|bg|bh|bin|binary|biosk|bioskey|bk|bkc|bomb|breakat|brk|browsedir|bs|bsdir|bsk|bt|bufhidden|buflisted|buftype|casemap|ccv|cdpath|cedit|cfu|ch|charconvert|ci|cin|cindent|cink|cinkeys|cino|cinoptions|cinw|cinwords|clipboard|cmdheight|cmdwinheight|cmp|cms|columns|com|comments|commentstring|compatible|complete|completefunc|completeopt|consk|conskey|copyindent|cot|cpo|cpoptions|cpt|cscopepathcomp|cscopeprg|cscopequickfix|cscopetag|cscopetagorder|cscopeverbose|cspc|csprg|csqf|cst|csto|csverb|cuc|cul|cursorcolumn|cursorline|cwh|debug|deco|def|define|delcombine|dex|dg|dict|dictionary|diff|diffexpr|diffopt|digraph|dip|dir|directory|dy|ea|ead|eadirection|eb|ed|edcompatible|ef|efm|ei|ek|enc|encoding|endofline|eol|ep|equalalways|equalprg|errorbells|errorfile|errorformat|esckeys|et|eventignore|expandtab|exrc|fcl|fcs|fdc|fde|fdi|fdl|fdls|fdm|fdn|fdo|fdt|fen|fenc|fencs|fex|ff|ffs|fileencoding|fileencodings|fileformat|fileformats|fillchars|fk|fkmap|flp|fml|fmr|foldcolumn|foldenable|foldexpr|foldignore|foldlevel|foldlevelstart|foldmarker|foldmethod|foldminlines|foldnestmax|foldtext|formatexpr|formatlistpat|formatoptions|formatprg|fp|fs|fsync|ft|gcr|gd|gdefault|gfm|gfn|gfs|gfw|ghr|gp|grepformat|grepprg|gtl|gtt|guicursor|guifont|guifontset|guifontwide|guiheadroom|guioptions|guipty|guitablabel|guitabtooltip|helpfile|helpheight|helplang|hf|hh|hi|hidden|highlight|hk|hkmap|hkmapp|hkp|hl|hlg|hls|hlsearch|ic|icon|iconstring|ignorecase|im|imactivatekey|imak|imc|imcmdline|imd|imdisable|imi|iminsert|ims|imsearch|inc|include|includeexpr|incsearch|inde|indentexpr|indentkeys|indk|inex|inf|infercase|insertmode|isf|isfname|isi|isident|isk|iskeyword|isprint|joinspaces|js|key|keymap|keymodel|keywordprg|km|kmp|kp|langmap|langmenu|laststatus|lazyredraw|lbr|lcs|linebreak|lines|linespace|lisp|lispwords|listchars|loadplugins|lpl|lsp|lz|macatsui|magic|makeef|makeprg|matchpairs|matchtime|maxcombine|maxfuncdepth|maxmapdepth|maxmem|maxmempattern|maxmemtot|mco|mef|menuitems|mfd|mh|mis|mkspellmem|ml|mls|mm|mmd|mmp|mmt|modeline|modelines|modifiable|modified|more|mouse|mousef|mousefocus|mousehide|mousem|mousemodel|mouses|mouseshape|mouset|mousetime|mp|mps|msm|mzq|mzquantum|nf|nrformats|numberwidth|nuw|odev|oft|ofu|omnifunc|opendevice|operatorfunc|opfunc|osfiletype|pa|para|paragraphs|paste|pastetoggle|patchexpr|patchmode|path|pdev|penc|pex|pexpr|pfn|ph|pheader|pi|pm|pmbcs|pmbfn|popt|preserveindent|previewheight|previewwindow|printdevice|printencoding|printexpr|printfont|printheader|printmbcharset|printmbfont|printoptions|prompt|pt|pumheight|pvh|pvw|qe|quoteescape|readonly|remap|report|restorescreen|revins|rightleft|rightleftcmd|rl|rlc|ro|rs|rtp|ruf|ruler|rulerformat|runtimepath|sbo|sc|scb|scr|scroll|scrollbind|scrolljump|scrolloff|scrollopt|scs|sect|sections|secure|sel|selection|selectmode|sessionoptions|sft|shcf|shellcmdflag|shellpipe|shellquote|shellredir|shellslash|shelltemp|shelltype|shellxquote|shiftround|shiftwidth|shm|shortmess|shortname|showbreak|showcmd|showfulltag|showmatch|showmode|showtabline|shq|si|sidescroll|sidescrolloff|siso|sj|slm|smartcase|smartindent|smarttab|smc|smd|softtabstop|sol|spc|spell|spellcapcheck|spellfile|spelllang|spellsuggest|spf|spl|splitbelow|splitright|sps|sr|srr|ss|ssl|ssop|stal|startofline|statusline|stl|stmp|su|sua|suffixes|suffixesadd|sw|swapfile|swapsync|swb|swf|switchbuf|sws|sxq|syn|synmaxcol|syntax|tabline|tabpagemax|tabstop|tagbsearch|taglength|tagrelative|tagstack|tal|tb|tbi|tbidi|tbis|tbs|tenc|term|termbidi|termencoding|terse|textauto|textmode|textwidth|tgst|thesaurus|tildeop|timeout|timeoutlen|title|titlelen|titleold|titlestring|toolbar|toolbariconsize|top|tpm|tsl|tsr|ttimeout|ttimeoutlen|ttm|tty|ttybuiltin|ttyfast|ttym|ttymouse|ttyscroll|ttytype|tw|tx|uc|ul|undolevels|updatecount|updatetime|ut|vb|vbs|vdir|verbosefile|vfile|viewdir|viewoptions|viminfo|virtualedit|visualbell|vop|wak|warn|wb|wc|wcm|wd|weirdinvert|wfh|wfw|whichwrap|wi|wig|wildchar|wildcharm|wildignore|wildmenu|wildmode|wildoptions|wim|winaltkeys|window|winfixheight|winfixwidth|winheight|winminheight|winminwidth|winwidth|wiv|wiw|wm|wmh|wmnu|wmw|wop|wrap|wrapmargin|wrapscan|writeany|writebackup|writedelay|ww|noacd|noai|noakm|noallowrevins|noaltkeymap|noanti|noantialias|noar|noarab|noarabic|noarabicshape|noari|noarshape|noautochdir|noautoindent|noautoread|noautowrite|noautowriteall|noaw|noawa|nobackup|noballooneval|nobeval|nobin|nobinary|nobiosk|nobioskey|nobk|nobl|nobomb|nobuflisted|nocf|noci|nocin|nocindent|nocompatible|noconfirm|noconsk|noconskey|nocopyindent|nocp|nocscopetag|nocscopeverbose|nocst|nocsverb|nocuc|nocul|nocursorcolumn|nocursorline|nodeco|nodelcombine|nodg|nodiff|nodigraph|nodisable|noea|noeb|noed|noedcompatible|noek|noendofline|noeol|noequalalways|noerrorbells|noesckeys|noet|noex|noexpandtab|noexrc|nofen|nofk|nofkmap|nofoldenable|nogd|nogdefault|noguipty|nohid|nohidden|nohk|nohkmap|nohkmapp|nohkp|nohls|noic|noicon|noignorecase|noim|noimc|noimcmdline|noimd|noincsearch|noinf|noinfercase|noinsertmode|nois|nojoinspaces|nojs|nolazyredraw|nolbr|nolinebreak|nolisp|nolist|noloadplugins|nolpl|nolz|noma|nomacatsui|nomagic|nomh|noml|nomod|nomodeline|nomodifiable|nomodified|nomore|nomousef|nomousefocus|nomousehide|nonu|nonumber|noodev|noopendevice|nopaste|nopi|nopreserveindent|nopreviewwindow|noprompt|nopvw|noreadonly|noremap|norestorescreen|norevins|nori|norightleft|norightleftcmd|norl|norlc|noro|nors|noru|noruler|nosb|nosc|noscb|noscrollbind|noscs|nosecure|nosft|noshellslash|noshelltemp|noshiftround|noshortname|noshowcmd|noshowfulltag|noshowmatch|noshowmode|nosi|nosm|nosmartcase|nosmartindent|nosmarttab|nosmd|nosn|nosol|nospell|nosplitbelow|nosplitright|nospr|nosr|nossl|nosta|nostartofline|nostmp|noswapfile|noswf|nota|notagbsearch|notagrelative|notagstack|notbi|notbidi|notbs|notermbidi|noterse|notextauto|notextmode|notf|notgst|notildeop|notimeout|notitle|noto|notop|notr|nottimeout|nottybuiltin|nottyfast|notx|novb|novisualbell|nowa|nowarn|nowb|noweirdinvert|nowfh|nowfw|nowildmenu|nowinfixheight|nowinfixwidth|nowiv|nowmnu|nowrap|nowrapscan|nowrite|nowriteany|nowritebackup|nows|invacd|invai|invakm|invallowrevins|invaltkeymap|invanti|invantialias|invar|invarab|invarabic|invarabicshape|invari|invarshape|invautochdir|invautoindent|invautoread|invautowrite|invautowriteall|invaw|invawa|invbackup|invballooneval|invbeval|invbin|invbinary|invbiosk|invbioskey|invbk|invbl|invbomb|invbuflisted|invcf|invci|invcin|invcindent|invcompatible|invconfirm|invconsk|invconskey|invcopyindent|invcp|invcscopetag|invcscopeverbose|invcst|invcsverb|invcuc|invcul|invcursorcolumn|invcursorline|invdeco|invdelcombine|invdg|invdiff|invdigraph|invdisable|invea|inveb|inved|invedcompatible|invek|invendofline|inveol|invequalalways|inverrorbells|invesckeys|invet|invex|invexpandtab|invexrc|invfen|invfk|invfkmap|invfoldenable|invgd|invgdefault|invguipty|invhid|invhidden|invhk|invhkmap|invhkmapp|invhkp|invhls|invhlsearch|invic|invicon|invignorecase|invim|invimc|invimcmdline|invimd|invincsearch|invinf|invinfercase|invinsertmode|invis|invjoinspaces|invjs|invlazyredraw|invlbr|invlinebreak|invlisp|invlist|invloadplugins|invlpl|invlz|invma|invmacatsui|invmagic|invmh|invml|invmod|invmodeline|invmodifiable|invmodified|invmore|invmousef|invmousefocus|invmousehide|invnu|invnumber|invodev|invopendevice|invpaste|invpi|invpreserveindent|invpreviewwindow|invprompt|invpvw|invreadonly|invremap|invrestorescreen|invrevins|invri|invrightleft|invrightleftcmd|invrl|invrlc|invro|invrs|invru|invruler|invsb|invsc|invscb|invscrollbind|invscs|invsecure|invsft|invshellslash|invshelltemp|invshiftround|invshortname|invshowcmd|invshowfulltag|invshowmatch|invshowmode|invsi|invsm|invsmartcase|invsmartindent|invsmarttab|invsmd|invsn|invsol|invspell|invsplitbelow|invsplitright|invspr|invsr|invssl|invsta|invstartofline|invstmp|invswapfile|invswf|invta|invtagbsearch|invtagrelative|invtagstack|invtbi|invtbidi|invtbs|invtermbidi|invterse|invtextauto|invtextmode|invtf|invtgst|invtildeop|invtimeout|invtitle|invto|invtop|invtr|invttimeout|invttybuiltin|invttyfast|invtx|invvb|invvisualbell|invwa|invwarn|invwb|invweirdinvert|invwfh|invwfw|invwildmenu|invwinfixheight|invwinfixwidth|invwiv|invwmnu|invwrap|invwrapscan|invwrite|invwriteany|invwritebackup|invws|t_AB|t_AF|t_al|t_AL|t_bc|t_cd|t_ce|t_Ce|t_cl|t_cm|t_Co|t_cs|t_Cs|t_CS|t_CV|t_da|t_db|t_dl|t_DL|t_EI|t_F1|t_F2|t_F3|t_F4|t_F5|t_F6|t_F7|t_F8|t_F9|t_fs|t_IE|t_IS|t_k1|t_K1|t_k2|t_k3|t_K3|t_k4|t_K4|t_k5|t_K5|t_k6|t_K6|t_k7|t_K7|t_k8|t_K8|t_k9|t_K9|t_KA|t_kb|t_kB|t_KB|t_KC|t_kd|t_kD|t_KD|t_ke|t_KE|t_KF|t_KG|t_kh|t_KH|t_kI|t_KI|t_KJ|t_KK|t_kl|t_KL|t_kN|t_kP|t_kr|t_ks|t_ku|t_le|t_mb|t_md|t_me|t_mr|t_ms|t_nd|t_op|t_RI|t_RV|t_Sb|t_se|t_Sf|t_SI|t_so|t_sr|t_te|t_ti|t_ts|t_ue|t_us|t_ut|t_vb|t_ve|t_vi|t_vs|t_WP|t_WS|t_xs|t_ZH|t_ZR)\b/,
    number: /\b(?:0x[\da-f]+|\d+(?:\.\d+)?)\b/i,
    operator: /\|\||&&|[-+.]=?|[=!](?:[=~][#?]?)?|[<>]=?[#?]?|[*\/%?]|\b(?:is(?:not)?)\b/,
    punctuation: /[{}[\](),;:]/
};
Prism.languages["visual-basic"] = {
    comment: {
        pattern: /(?:['‘’]|REM\b)(?:[^\r\n_]|_(?:\r\n?|\n)?)*/i,
        inside: {
            keyword: /^REM/i
        }
    },
    directive: {
        pattern: /#(?:Const|Else|ElseIf|End|ExternalChecksum|ExternalSource|If|Region)(?:[^\S\r\n]_[^\S\r\n]*(?:\r\n?|\n)|.)+/i,
        alias: "comment",
        greedy: !0
    },
    string: {
        pattern: /\$?["“”](?:["“”]{2}|[^"“”])*["“”]C?/i,
        greedy: !0
    },
    date: {
        pattern: /#[^\S\r\n]*(?:\d+([/-])\d+\1\d+(?:[^\S\r\n]+(?:\d+[^\S\r\n]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[^\S\r\n]*(?:AM|PM))?))?|\d+[^\S\r\n]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[^\S\r\n]*(?:AM|PM))?)[^\S\r\n]*#/i,
        alias: "builtin"
    },
    number: /(?:(?:\b\d+(?:\.\d+)?|\.\d+)(?:E[+-]?\d+)?|&[HO][\dA-F]+)(?:U?[ILS]|[FRD])?/i,
    boolean: /\b(?:True|False|Nothing)\b/i,
    keyword: /\b(?:AddHandler|AddressOf|Alias|And(?:Also)?|As|Boolean|ByRef|Byte|ByVal|Call|Case|Catch|C(?:Bool|Byte|Char|Date|Dbl|Dec|Int|Lng|Obj|SByte|Short|Sng|Str|Type|UInt|ULng|UShort)|Char|Class|Const|Continue|Currency|Date|Decimal|Declare|Default|Delegate|Dim|DirectCast|Do|Double|Each|Else(?:If)?|End(?:If)?|Enum|Erase|Error|Event|Exit|Finally|For|Friend|Function|Get(?:Type|XMLNamespace)?|Global|GoSub|GoTo|Handles|If|Implements|Imports|In|Inherits|Integer|Interface|Is|IsNot|Let|Lib|Like|Long|Loop|Me|Mod|Module|Must(?:Inherit|Override)|My(?:Base|Class)|Namespace|Narrowing|New|Next|Not(?:Inheritable|Overridable)?|Object|Of|On|Operator|Option(?:al)?|Or(?:Else)?|Out|Overloads|Overridable|Overrides|ParamArray|Partial|Private|Property|Protected|Public|RaiseEvent|ReadOnly|ReDim|RemoveHandler|Resume|Return|SByte|Select|Set|Shadows|Shared|short|Single|Static|Step|Stop|String|Structure|Sub|SyncLock|Then|Throw|To|Try|TryCast|Type|TypeOf|U(?:Integer|Long|Short)|Using|Variant|Wend|When|While|Widening|With(?:Events)?|WriteOnly|Until|Xor)\b/i,
    operator: [/[+\-*/\\^<=>&#@$%!]/, {
        pattern: /([^\S\r\n])_(?=[^\S\r\n]*[\r\n])/,
        lookbehind: !0
    }],
    punctuation: /[{}().,:?]/
},
Prism.languages.vb = Prism.languages["visual-basic"],
Prism.languages.vba = Prism.languages["visual-basic"];
Prism.languages.warpscript = {
    comment: /#.*|\/\/.*|\/\*[\s\S]*?\*\//,
    string: {
        pattern: /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'|<'(?:[^\\']|'(?!>)|\\.)*'>/,
        greedy: !0
    },
    variable: /\$\S+/,
    macro: {
        pattern: /@\S+/,
        alias: "property"
    },
    keyword: /\b(?:BREAK|CHECKMACRO|CONTINUE|CUDF|DEFINED|DEFINEDMACRO|EVAL|FAIL|FOR|FOREACH|FORSTEP|IFT|IFTE|MSGFAIL|NRETURN|RETHROW|RETURN|SWITCH|TRY|UDF|UNTIL|WHILE)\b/,
    number: /[+-]?\b(?:NaN|Infinity|\d+(?:\.\d*)?(?:[Ee][+-]?\d+)?|0x[\da-fA-F]+|0b[01]+)\b/,
    boolean: /\b(?:false|true|F|T)\b/,
    punctuation: /<%|%>|[{}[\]()]/,
    operator: /==|&&?|\|\|?|\*\*?|>>>?|<<|==|[<>!~]=?|[-/%^]|\+!?|\b(?:AND|NOT|OR)\b/
};
Prism.languages.wasm = {
    comment: [/\(;[\s\S]*?;\)/, {
        pattern: /;;.*/,
        greedy: !0
    }],
    string: {
        pattern: /"(?:\\[\s\S]|[^"\\])*"/,
        greedy: !0
    },
    keyword: [{
        pattern: /\b(?:align|offset)=/,
        inside: {
            operator: /=/
        }
    }, {
        pattern: /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
        inside: {
            punctuation: /\./
        }
    }, /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/],
    variable: /\$[\w!#$%&'*+\-./:<=>?@\\^_`|~]+/i,
    number: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
    punctuation: /[()]/
};
Prism.languages.wiki = Prism.languages.extend("markup", {
    "block-comment": {
        pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
        lookbehind: !0,
        alias: "comment"
    },
    heading: {
        pattern: /^(=+).+?\1/m,
        inside: {
            punctuation: /^=+|=+$/,
            important: /.+/
        }
    },
    emphasis: {
        pattern: /('{2,5}).+?\1/,
        inside: {
            "bold-italic": {
                pattern: /(''''').+?(?=\1)/,
                lookbehind: !0,
                alias: ["bold", "italic"]
            },
            bold: {
                pattern: /(''')[^'](?:.*?[^'])?(?=\1)/,
                lookbehind: !0
            },
            italic: {
                pattern: /('')[^'](?:.*?[^'])?(?=\1)/,
                lookbehind: !0
            },
            punctuation: /^''+|''+$/
        }
    },
    hr: {
        pattern: /^-{4,}/m,
        alias: "punctuation"
    },
    url: [/ISBN +(?:97[89][ -]?)?(?:\d[ -]?){9}[\dx]\b|(?:RFC|PMID) +\d+/i, /\[\[.+?\]\]|\[.+?\]/],
    variable: [/__[A-Z]+__/, /\{{3}.+?\}{3}/, /\{\{.+?\}\}/],
    symbol: [/^#redirect/im, /~{3,5}/],
    "table-tag": {
        pattern: /((?:^|[|!])[|!])[^|\r\n]+\|(?!\|)/m,
        lookbehind: !0,
        inside: {
            "table-bar": {
                pattern: /\|$/,
                alias: "punctuation"
            },
            rest: Prism.languages.markup.tag.inside
        }
    },
    punctuation: /^(?:\{\||\|\}|\|-|[*#:;!|])|\|\||!!/m
}),
Prism.languages.insertBefore("wiki", "tag", {
    nowiki: {
        pattern: /<(nowiki|pre|source)\b[\s\S]*?>[\s\S]*?<\/\1>/i,
        inside: {
            tag: {
                pattern: /<(?:nowiki|pre|source)\b[\s\S]*?>|<\/(?:nowiki|pre|source)>/i,
                inside: Prism.languages.markup.tag.inside
            }
        }
    }
});
!function(n) {
    function a(a, e) {
        n.languages[a] && n.languages.insertBefore(a, "comment", {
            "doc-comment": e
        })
    }
    var e = n.languages.markup.tag
      , t = {
        pattern: /\/\/\/.*/,
        greedy: !0,
        alias: "comment",
        inside: {
            tag: e
        }
    }
      , g = {
        pattern: /'''.*/,
        greedy: !0,
        alias: "comment",
        inside: {
            tag: e
        }
    };
    a("csharp", t),
    a("fsharp", t),
    a("vbnet", g)
}(Prism);
!function(n) {
    var t = /[*&][^\s[\]{},]+/
      , e = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/
      , r = "(?:" + e.source + "(?:[ \t]+" + t.source + ")?|" + t.source + "(?:[ \t]+" + e.source + ")?)";
    function a(n, t) {
        t = (t || "").replace(/m/g, "") + "m";
        var e = "([:\\-,[{]\\s*(?:\\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|]|}|\\s*#))".replace(/<<prop>>/g, function() {
            return r
        }).replace(/<<value>>/g, function() {
            return n
        });
        return RegExp(e, t)
    }
    n.languages.yaml = {
        scalar: {
            pattern: RegExp("([\\-:]\\s*(?:\\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\\2[^\r\n]+)*)".replace(/<<prop>>/g, function() {
                return r
            })),
            lookbehind: !0,
            alias: "string"
        },
        comment: /#.*/,
        key: {
            pattern: RegExp("((?:^|[:\\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)[^\r\n{[\\]},#\\s]+?(?=\\s*:\\s)".replace(/<<prop>>/g, function() {
                return r
            })),
            lookbehind: !0,
            alias: "atrule"
        },
        directive: {
            pattern: /(^[ \t]*)%.+/m,
            lookbehind: !0,
            alias: "important"
        },
        datetime: {
            pattern: a("\\d{4}-\\d\\d?-\\d\\d?(?:[tT]|[ \t]+)\\d\\d?:\\d{2}:\\d{2}(?:\\.\\d*)?[ \t]*(?:Z|[-+]\\d\\d?(?::\\d{2})?)?|\\d{4}-\\d{2}-\\d{2}|\\d\\d?:\\d{2}(?::\\d{2}(?:\\.\\d*)?)?"),
            lookbehind: !0,
            alias: "number"
        },
        boolean: {
            pattern: a("true|false", "i"),
            lookbehind: !0,
            alias: "important"
        },
        null: {
            pattern: a("null|~", "i"),
            lookbehind: !0,
            alias: "important"
        },
        string: {
            pattern: a("(\"|')(?:(?!\\2)[^\\\\\r\n]|\\\\.)*\\2"),
            lookbehind: !0,
            greedy: !0
        },
        number: {
            pattern: a("[+-]?(?:0x[\\da-f]+|0o[0-7]+|(?:\\d+\\.?\\d*|\\.?\\d+)(?:e[+-]?\\d+)?|\\.inf|\\.nan)", "i"),
            lookbehind: !0
        },
        tag: e,
        important: t,
        punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
    },
    n.languages.yml = n.languages.yaml
}(Prism);
!function() {
    if ("undefined" != typeof self && self.Prism && self.document) {
        var o = "line-numbers"
          , a = /\n(?!$)/g
          , e = Prism.plugins.lineNumbers = {
            getLine: function(e, n) {
                if ("PRE" === e.tagName && e.classList.contains(o)) {
                    var t = e.querySelector(".line-numbers-rows")
                      , i = parseInt(e.getAttribute("data-start"), 10) || 1
                      , r = i + (t.children.length - 1);
                    n < i && (n = i),
                    r < n && (n = r);
                    var s = n - i;
                    return t.children[s]
                }
            },
            resize: function(e) {
                u([e])
            },
            assumeViewportIndependence: !0
        }
          , t = function(e) {
            return e ? window.getComputedStyle ? getComputedStyle(e) : e.currentStyle || null : null
        }
          , n = void 0;
        window.addEventListener("resize", function() {
            e.assumeViewportIndependence && n === window.innerWidth || (n = window.innerWidth,
            u(Array.prototype.slice.call(document.querySelectorAll("pre." + o))))
        }),
        Prism.hooks.add("complete", function(e) {
            if (e.code) {
                var n = e.element
                  , t = n.parentNode;
                if (t && /pre/i.test(t.nodeName) && !n.querySelector(".line-numbers-rows") && Prism.util.isActive(n, o)) {
                    n.classList.remove(o),
                    t.classList.add(o);
                    var i, r = e.code.match(a), s = r ? r.length + 1 : 1, l = new Array(s + 1).join("<span></span>");
                    (i = document.createElement("span")).setAttribute("aria-hidden", "true"),
                    i.className = "line-numbers-rows",
                    i.innerHTML = l,
                    t.hasAttribute("data-start") && (t.style.counterReset = "linenumber " + (parseInt(t.getAttribute("data-start"), 10) - 1)),
                    e.element.appendChild(i),
                    u([t]),
                    Prism.hooks.run("line-numbers", e)
                }
            }
        }),
        Prism.hooks.add("line-numbers", function(e) {
            e.plugins = e.plugins || {},
            e.plugins.lineNumbers = !0
        })
    }
    function u(e) {
        if (0 != (e = e.filter(function(e) {
            var n = t(e)["white-space"];
            return "pre-wrap" === n || "pre-line" === n
        })).length) {
            var n = e.map(function(e) {
                var n = e.querySelector("code")
                  , t = e.querySelector(".line-numbers-rows");
                if (n && t) {
                    var i = e.querySelector(".line-numbers-sizer")
                      , r = n.textContent.split(a);
                    i || ((i = document.createElement("span")).className = "line-numbers-sizer",
                    n.appendChild(i)),
                    i.innerHTML = "0",
                    i.style.display = "block";
                    var s = i.getBoundingClientRect().height;
                    return i.innerHTML = "",
                    {
                        element: e,
                        lines: r,
                        lineHeights: [],
                        oneLinerHeight: s,
                        sizer: i
                    }
                }
            }).filter(Boolean);
            n.forEach(function(e) {
                var i = e.sizer
                  , n = e.lines
                  , r = e.lineHeights
                  , s = e.oneLinerHeight;
                r[n.length - 1] = void 0,
                n.forEach(function(e, n) {
                    if (e && 1 < e.length) {
                        var t = i.appendChild(document.createElement("span"));
                        t.style.display = "block",
                        t.textContent = e
                    } else
                        r[n] = s
                })
            }),
            n.forEach(function(e) {
                for (var n = e.sizer, t = e.lineHeights, i = 0, r = 0; r < t.length; r++)
                    void 0 === t[r] && (t[r] = n.children[i++].getBoundingClientRect().height)
            }),
            n.forEach(function(e) {
                var n = e.sizer
                  , t = e.element.querySelector(".line-numbers-rows");
                n.style.display = "none",
                n.innerHTML = "",
                e.lineHeights.forEach(function(e, n) {
                    t.children[n].style.height = e + "px"
                })
            })
        }
    }
}();
!function() {
    if (("undefined" == typeof self || self.Prism) && ("undefined" == typeof global || global.Prism)) {
        var t = /\b([a-z]{3,7}:\/\/|tel:)[\w\-+%~/.:=&@]+(?:\?[\w\-+%~/.:=?&!$'()*,;@]*)?(?:#[\w\-+%~/.:#=?&!$'()*,;@]*)?/
          , r = /\b\S+@[\w.]+[a-z]{2}/
          , a = /\[([^\]]+)]\(([^)]+)\)/
          , l = ["comment", "url", "attr-value", "string"];
        Prism.plugins.autolinker = {
            processGrammar: function(i) {
                i && !i["url-link"] && (Prism.languages.DFS(i, function(i, n, e) {
                    -1 < l.indexOf(e) && !Array.isArray(n) && (n.pattern || (n = this[i] = {
                        pattern: n
                    }),
                    n.inside = n.inside || {},
                    "comment" == e && (n.inside["md-link"] = a),
                    "attr-value" == e ? Prism.languages.insertBefore("inside", "punctuation", {
                        "url-link": t
                    }, n) : n.inside["url-link"] = t,
                    n.inside["email-link"] = r)
                }),
                i["url-link"] = t,
                i["email-link"] = r)
            }
        },
        Prism.hooks.add("before-highlight", function(i) {
            Prism.plugins.autolinker.processGrammar(i.grammar)
        }),
        Prism.hooks.add("wrap", function(i) {
            if (/-link$/.test(i.type)) {
                i.tag = "a";
                var n = i.content;
                if ("email-link" == i.type && 0 != n.indexOf("mailto:"))
                    n = "mailto:" + n;
                else if ("md-link" == i.type) {
                    var e = i.content.match(a);
                    n = e[2],
                    i.content = e[1]
                }
                i.attributes.href = n;
                try {
                    i.content = decodeURIComponent(i.content)
                } catch (i) {}
            }
        })
    }
}();
!function() {
    if ("undefined" != typeof self && self.Prism && self.document) {
        var o = window.Prism
          , h = {
            js: "javascript",
            py: "python",
            rb: "ruby",
            ps1: "powershell",
            psm1: "powershell",
            sh: "bash",
            bat: "batch",
            h: "c",
            tex: "latex"
        }
          , g = "data-src-status"
          , u = "loading"
          , c = "loaded"
          , d = "pre[data-src]:not([" + g + '="' + c + '"]):not([' + g + '="' + u + '"])'
          , n = /\blang(?:uage)?-([\w-]+)\b/i;
        o.hooks.add("before-highlightall", function(e) {
            e.selector += ", " + d
        }),
        o.hooks.add("before-sanity-check", function(e) {
            var t = e.element;
            if (t.matches(d)) {
                e.code = "",
                t.setAttribute(g, u);
                var i = t.appendChild(document.createElement("CODE"));
                i.textContent = "Loading…";
                var n = t.getAttribute("data-src")
                  , a = e.language;
                if ("none" === a) {
                    var s = (/\.(\w+)$/.exec(n) || [, "none"])[1];
                    a = h[s] || s
                }
                f(i, a),
                f(t, a);
                var l = o.plugins.autoloader;
                l && l.loadLanguages(a);
                var r = new XMLHttpRequest;
                r.open("GET", n, !0),
                r.onreadystatechange = function() {
                    4 == r.readyState && (r.status < 400 && r.responseText ? (t.setAttribute(g, c),
                    i.textContent = r.responseText,
                    o.highlightElement(i)) : (t.setAttribute(g, "failed"),
                    400 <= r.status ? i.textContent = function(e, t) {
                        return "✖ Error " + e + " while fetching file: " + t
                    }(r.status, r.statusText) : i.textContent = "✖ Error: File does not exist or is empty"))
                }
                ,
                r.send(null)
            }
        });
        var e = !(o.plugins.fileHighlight = {
            highlight: function(e) {
                for (var t, i = (e || document).querySelectorAll(d), n = 0; t = i[n++]; )
                    o.highlightElement(t)
            }
        });
        o.fileHighlight = function() {
            e || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),
            e = !0),
            o.plugins.fileHighlight.highlight.apply(this, arguments)
        }
    }
    function f(e, t) {
        var i = e.className;
        i = i.replace(n, " ") + " language-" + t,
        e.className = i.replace(/\s+/g, " ").trim()
    }
}();
!function() {
    if ("undefined" != typeof self && self.Prism && self.document) {
        var i = []
          , l = {}
          , c = function() {};
        Prism.plugins.toolbar = {};
        var e = Prism.plugins.toolbar.registerButton = function(e, n) {
            var t;
            t = "function" == typeof n ? n : function(e) {
                var t;
                return "function" == typeof n.onClick ? ((t = document.createElement("button")).type = "button",
                t.addEventListener("click", function() {
                    n.onClick.call(this, e)
                })) : "string" == typeof n.url ? (t = document.createElement("a")).href = n.url : t = document.createElement("span"),
                n.className && t.classList.add(n.className),
                t.textContent = n.text,
                t
            }
            ,
            e in l ? console.warn('There is a button with the key "' + e + '" registered already.') : i.push(l[e] = t)
        }
          , t = Prism.plugins.toolbar.hook = function(a) {
            var e = a.element.parentNode;
            if (e && /pre/i.test(e.nodeName) && !e.parentNode.classList.contains("code-toolbar")) {
                var t = document.createElement("div");
                t.classList.add("code-toolbar"),
                e.parentNode.insertBefore(t, e),
                t.appendChild(e);
                var r = document.createElement("div");
                r.classList.add("toolbar");
                var n = i
                  , o = function(e) {
                    for (; e; ) {
                        var t = e.getAttribute("data-toolbar-order");
                        if (null != t)
                            return (t = t.trim()).length ? t.split(/\s*,\s*/g) : [];
                        e = e.parentElement
                    }
                }(a.element);
                o && (n = o.map(function(e) {
                    return l[e] || c
                })),
                n.forEach(function(e) {
                    var t = e(a);
                    if (t) {
                        var n = document.createElement("div");
                        n.classList.add("toolbar-item"),
                        n.appendChild(t),
                        r.appendChild(n)
                    }
                }),
                t.appendChild(r)
            }
        }
        ;
        e("label", function(e) {
            var t = e.element.parentNode;
            if (t && /pre/i.test(t.nodeName) && t.hasAttribute("data-label")) {
                var n, a, r = t.getAttribute("data-label");
                try {
                    a = document.querySelector("template#" + r)
                } catch (e) {}
                return a ? n = a.content : (t.hasAttribute("data-url") ? (n = document.createElement("a")).href = t.getAttribute("data-url") : n = document.createElement("span"),
                n.textContent = r),
                n
            }
        }),
        Prism.hooks.add("complete", t)
    }
}();
!function() {
    if ("undefined" != typeof self && self.Prism && self.document)
        if (Prism.plugins.toolbar) {
            var r = {
                html: "HTML",
                xml: "XML",
                svg: "SVG",
                mathml: "MathML",
                ssml: "SSML",
                rss: "RSS",
                css: "CSS",
                clike: "C-like",
                js: "JavaScript",
                abap: "ABAP",
                abnf: "ABNF",
                al: "AL",
                antlr4: "ANTLR4",
                g4: "ANTLR4",
                apacheconf: "Apache Configuration",
                apl: "APL",
                aql: "AQL",
                arff: "ARFF",
                asciidoc: "AsciiDoc",
                adoc: "AsciiDoc",
                aspnet: "ASP.NET (C#)",
                asm6502: "6502 Assembly",
                autohotkey: "AutoHotkey",
                autoit: "AutoIt",
                basic: "BASIC",
                bbcode: "BBcode",
                bnf: "BNF",
                rbnf: "RBNF",
                bsl: "BSL (1C:Enterprise)",
                oscript: "OneScript",
                csharp: "C#",
                cs: "C#",
                dotnet: "C#",
                cpp: "C++",
                cil: "CIL",
                cmake: "CMake",
                coffee: "CoffeeScript",
                conc: "Concurnas",
                csp: "Content-Security-Policy",
                "css-extras": "CSS Extras",
                dax: "DAX",
                django: "Django/Jinja2",
                jinja2: "Django/Jinja2",
                "dns-zone-file": "DNS zone file",
                "dns-zone": "DNS zone file",
                dockerfile: "Docker",
                ebnf: "EBNF",
                editorconfig: "EditorConfig",
                ejs: "EJS",
                etlua: "Embedded Lua templating",
                erb: "ERB",
                "excel-formula": "Excel Formula",
                xlsx: "Excel Formula",
                xls: "Excel Formula",
                fsharp: "F#",
                "firestore-security-rules": "Firestore security rules",
                ftl: "FreeMarker Template Language",
                gml: "GameMaker Language",
                gamemakerlanguage: "GameMaker Language",
                gcode: "G-code",
                gdscript: "GDScript",
                gedcom: "GEDCOM",
                glsl: "GLSL",
                graphql: "GraphQL",
                hs: "Haskell",
                hcl: "HCL",
                hlsl: "HLSL",
                http: "HTTP",
                hpkp: "HTTP Public-Key-Pins",
                hsts: "HTTP Strict-Transport-Security",
                ichigojam: "IchigoJam",
                ignore: ".ignore",
                gitignore: ".gitignore",
                hgignore: ".hgignore",
                npmignore: ".npmignore",
                inform7: "Inform 7",
                javadoc: "JavaDoc",
                javadoclike: "JavaDoc-like",
                javastacktrace: "Java stack trace",
                jq: "JQ",
                jsdoc: "JSDoc",
                "js-extras": "JS Extras",
                json: "JSON",
                webmanifest: "Web App Manifest",
                json5: "JSON5",
                jsonp: "JSONP",
                jsstacktrace: "JS stack trace",
                "js-templates": "JS Templates",
                kts: "Kotlin Script",
                kt: "Kotlin",
                latex: "LaTeX",
                tex: "TeX",
                context: "ConTeXt",
                lilypond: "LilyPond",
                ly: "LilyPond",
                emacs: "Lisp",
                elisp: "Lisp",
                "emacs-lisp": "Lisp",
                llvm: "LLVM IR",
                lolcode: "LOLCODE",
                md: "Markdown",
                "markup-templating": "Markup templating",
                matlab: "MATLAB",
                mel: "MEL",
                mongodb: "MongoDB",
                moon: "MoonScript",
                n1ql: "N1QL",
                n4js: "N4JS",
                n4jsd: "N4JS",
                "nand2tetris-hdl": "Nand To Tetris HDL",
                naniscript: "Naninovel Script",
                nani: "Naninovel Script",
                nasm: "NASM",
                neon: "NEON",
                nginx: "nginx",
                nsis: "NSIS",
                objectivec: "Objective-C",
                objc: "Objective-C",
                ocaml: "OCaml",
                opencl: "OpenCL",
                parigp: "PARI/GP",
                objectpascal: "Object Pascal",
                pcaxis: "PC-Axis",
                px: "PC-Axis",
                peoplecode: "PeopleCode",
                pcode: "PeopleCode",
                php: "PHP",
                phpdoc: "PHPDoc",
                "php-extras": "PHP Extras",
                plsql: "PL/SQL",
                powerquery: "PowerQuery",
                pq: "PowerQuery",
                mscript: "PowerQuery",
                powershell: "PowerShell",
                properties: ".properties",
                protobuf: "Protocol Buffers",
                purebasic: "PureBasic",
                pbfasm: "PureBasic",
                py: "Python",
                q: "Q (kdb+ database)",
                qml: "QML",
                rkt: "Racket",
                jsx: "React JSX",
                tsx: "React TSX",
                renpy: "Ren'py",
                rpy: "Ren'py",
                rest: "reST (reStructuredText)",
                robotframework: "Robot Framework",
                robot: "Robot Framework",
                rb: "Ruby",
                sas: "SAS",
                sass: "Sass (Sass)",
                scss: "Sass (Scss)",
                "shell-session": "Shell session",
                solidity: "Solidity (Ethereum)",
                sol: "Solidity (Ethereum)",
                "solution-file": "Solution file",
                sln: "Solution file",
                soy: "Soy (Closure Template)",
                sparql: "SPARQL",
                rq: "SPARQL",
                "splunk-spl": "Splunk SPL",
                sqf: "SQF: Status Quo Function (Arma 3)",
                sql: "SQL",
                iecst: "Structured Text (IEC 61131-3)",
                "t4-templating": "T4 templating",
                "t4-cs": "T4 Text Templates (C#)",
                t4: "T4 Text Templates (C#)",
                "t4-vb": "T4 Text Templates (VB)",
                tap: "TAP",
                tt2: "Template Toolkit 2",
                toml: "TOML",
                trig: "TriG",
                ts: "TypeScript",
                tsconfig: "TSConfig",
                uscript: "UnrealScript",
                uc: "UnrealScript",
                vbnet: "VB.Net",
                vhdl: "VHDL",
                vim: "vim",
                "visual-basic": "Visual Basic",
                vba: "VBA",
                vb: "Visual Basic",
                wasm: "WebAssembly",
                wiki: "Wiki markup",
                xeoracube: "XeoraCube",
                "xml-doc": "XML doc (.net)",
                xojo: "Xojo (REALbasic)",
                xquery: "XQuery",
                yaml: "YAML",
                yml: "YAML",
                yang: "YANG"
            };
            Prism.plugins.toolbar.registerButton("show-language", function(e) {
                var a = e.element.parentNode;
                if (a && /pre/i.test(a.nodeName)) {
                    var t, o = a.getAttribute("data-language") || r[e.language] || ((t = e.language) ? (t.substring(0, 1).toUpperCase() + t.substring(1)).replace(/s(?=cript)/, "S") : t);
                    if (o) {
                        var s = document.createElement("span");
                        return s.textContent = o,
                        s
                    }
                }
            })
        } else
            console.warn("Show Languages plugin loaded before Toolbar plugin.")
}();
!function() {
    if ("undefined" != typeof self && self.Prism && self.document) {
        var f = /(?:^|\s)command-line(?:\s|$)/
          , p = "command-line-prompt"
          , m = "".startsWith ? function(e, t) {
            return e.startsWith(t)
        }
        : function(e, t) {
            return 0 === e.indexOf(t)
        }
        ;
        Prism.hooks.add("before-highlight", function(e) {
            var t = h(e);
            if (!t.complete && e.code) {
                var n = e.element.parentElement;
                if (n && /pre/i.test(n.nodeName) && (f.test(n.className) || f.test(e.element.className))) {
                    var a = e.element.querySelector("." + p);
                    a && a.remove();
                    var s = e.code.split("\n");
                    t.numberOfLines = s.length;
                    var o = t.outputLines = []
                      , r = n.getAttribute("data-output")
                      , i = n.getAttribute("data-filter-output");
                    if (null !== r)
                        r.split(",").forEach(function(e) {
                            var t = e.split("-")
                              , n = parseInt(t[0], 10)
                              , a = 2 === t.length ? parseInt(t[1], 10) : n;
                            if (!isNaN(n) && !isNaN(a)) {
                                n < 1 && (n = 1),
                                a > s.length && (a = s.length),
                                a--;
                                for (var r = --n; r <= a; r++)
                                    o[r] = s[r],
                                    s[r] = ""
                            }
                        });
                    else if (i)
                        for (var l = 0; l < s.length; l++)
                            m(s[l], i) && (o[l] = s[l].slice(i.length),
                            s[l] = "");
                    e.code = s.join("\n")
                } else
                    t.complete = !0
            } else
                t.complete = !0
        }),
        Prism.hooks.add("before-insert", function(e) {
            var t = h(e);
            if (!t.complete) {
                for (var n = e.highlightedCode.split("\n"), a = t.outputLines || [], r = 0, s = a.length; r < s; r++)
                    a.hasOwnProperty(r) && (n[r] = a[r]);
                e.highlightedCode = n.join("\n")
            }
        }),
        Prism.hooks.add("complete", function(e) {
            var t = h(e);
            if (!t.complete) {
                var n, a = e.element.parentElement;
                f.test(e.element.className) && (e.element.className = e.element.className.replace(f, " ")),
                f.test(a.className) || (a.className += " command-line");
                var r = t.numberOfLines || 0
                  , s = u("data-prompt", "");
                if ("" !== s)
                    n = d('<span data-prompt="' + s + '"></span>', r);
                else
                    n = d('<span data-user="' + u("data-user", "user") + '" data-host="' + u("data-host", "localhost") + '"></span>', r);
                var o = document.createElement("span");
                o.className = p,
                o.innerHTML = n;
                for (var i = t.outputLines || [], l = 0, m = i.length; l < m; l++)
                    if (i.hasOwnProperty(l)) {
                        var c = o.children[l];
                        c.removeAttribute("data-user"),
                        c.removeAttribute("data-host"),
                        c.removeAttribute("data-prompt")
                    }
                e.element.insertBefore(o, e.element.firstChild),
                t.complete = !0
            }
            function u(e, t) {
                return (a.getAttribute(e) || t).replace(/"/g, "&quot")
            }
        })
    }
    function d(e, t) {
        for (var n = "", a = 0; a < t; a++)
            n += e;
        return n
    }
    function h(e) {
        var t = e.vars = e.vars || {};
        return t["command-line"] = t["command-line"] || {}
    }
}();
!function() {
    var i = Object.assign || function(e, n) {
        for (var t in n)
            n.hasOwnProperty(t) && (e[t] = n[t]);
        return e
    }
    ;
    function e(e) {
        this.defaults = i({}, e)
    }
    function s(e) {
        for (var n = 0, t = 0; t < e.length; ++t)
            e.charCodeAt(t) == "\t".charCodeAt(0) && (n += 3);
        return e.length + n
    }
    e.prototype = {
        setDefaults: function(e) {
            this.defaults = i(this.defaults, e)
        },
        normalize: function(e, n) {
            for (var t in n = i(this.defaults, n)) {
                var r = t.replace(/-(\w)/g, function(e, n) {
                    return n.toUpperCase()
                });
                "normalize" !== t && "setDefaults" !== r && n[t] && this[r] && (e = this[r].call(this, e, n[t]))
            }
            return e
        },
        leftTrim: function(e) {
            return e.replace(/^\s+/, "")
        },
        rightTrim: function(e) {
            return e.replace(/\s+$/, "")
        },
        tabsToSpaces: function(e, n) {
            return n = 0 | n || 4,
            e.replace(/\t/g, new Array(++n).join(" "))
        },
        spacesToTabs: function(e, n) {
            return n = 0 | n || 4,
            e.replace(RegExp(" {" + n + "}", "g"), "\t")
        },
        removeTrailing: function(e) {
            return e.replace(/\s*?$/gm, "")
        },
        removeInitialLineFeed: function(e) {
            return e.replace(/^(?:\r?\n|\r)/, "")
        },
        removeIndent: function(e) {
            var n = e.match(/^[^\S\n\r]*(?=\S)/gm);
            return n && n[0].length ? (n.sort(function(e, n) {
                return e.length - n.length
            }),
            n[0].length ? e.replace(RegExp("^" + n[0], "gm"), "") : e) : e
        },
        indent: function(e, n) {
            return e.replace(/^[^\S\n\r]*(?=\S)/gm, new Array(++n).join("\t") + "$&")
        },
        breakLines: function(e, n) {
            n = !0 === n ? 80 : 0 | n || 80;
            for (var t = e.split("\n"), r = 0; r < t.length; ++r)
                if (!(s(t[r]) <= n)) {
                    for (var i = t[r].split(/(\s+)/g), o = 0, a = 0; a < i.length; ++a) {
                        var l = s(i[a]);
                        n < (o += l) && (i[a] = "\n" + i[a],
                        o = l)
                    }
                    t[r] = i.join("")
                }
            return t.join("\n")
        }
    },
    "undefined" != typeof module && module.exports && (module.exports = e),
    "undefined" != typeof Prism && (Prism.plugins.NormalizeWhitespace = new e({
        "remove-trailing": !0,
        "remove-indent": !0,
        "left-trim": !0,
        "right-trim": !0
    }),
    Prism.hooks.add("before-sanity-check", function(e) {
        var n = Prism.plugins.NormalizeWhitespace;
        if ((!e.settings || !1 !== e.settings["whitespace-normalization"]) && Prism.util.isActive(e.element, "whitespace-normalization", !0))
            if (e.element && e.element.parentNode || !e.code) {
                var t = e.element.parentNode;
                if (e.code && t && "pre" === t.nodeName.toLowerCase()) {
                    for (var r = t.childNodes, i = "", o = "", a = !1, l = 0; l < r.length; ++l) {
                        var s = r[l];
                        s == e.element ? a = !0 : "#text" === s.nodeName && (a ? o += s.nodeValue : i += s.nodeValue,
                        t.removeChild(s),
                        --l)
                    }
                    if (e.element.children.length && Prism.plugins.KeepMarkup) {
                        var c = i + e.element.innerHTML + o;
                        e.element.innerHTML = n.normalize(c, e.settings),
                        e.code = e.element.textContent
                    } else
                        e.code = i + e.code + o,
                        e.code = n.normalize(e.code, e.settings)
                }
            } else
                e.code = n.normalize(e.code, e.settings)
    }))
}();
!function() {
    if ("undefined" != typeof self && self.Prism && self.document)
        if (Prism.plugins.toolbar) {
            var i = window.ClipboardJS || void 0;
            i || "function" != typeof require || (i = require("clipboard"));
            var c = [];
            if (!i) {
                var o = document.createElement("script")
                  , t = document.querySelector("head");
                o.onload = function() {
                    if (i = window.ClipboardJS)
                        for (; c.length; )
                            c.pop()()
                }
                ,
                o.src = "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
                t.appendChild(o)
            }
            Prism.plugins.toolbar.registerButton("copy-to-clipboard", function(o) {
                var t = document.createElement("button");
                t.textContent = "Copy";
                var e = o.element;
                return i ? n() : c.push(n),
                t;
                function n() {
                    var o = new i(t,{
                        text: function() {
                            return e.textContent
                        }
                    });
                    o.on("success", function() {
                        t.textContent = "Copied!",
                        r()
                    }),
                    o.on("error", function() {
                        t.textContent = "Press Ctrl+C to copy",
                        r()
                    })
                }
                function r() {
                    setTimeout(function() {
                        t.textContent = "Copy"
                    }, 5e3)
                }
            })
        } else
            console.warn("Copy to Clipboard plugin loaded before Toolbar plugin.")
}();
!function() {
    if ("undefined" != typeof self && self.Prism && self.document) {
        var c = /(?:^|\s)match-braces(?:\s|$)/
          , a = /(?:^|\s)brace-hover(?:\s|$)/
          , l = /(?:^|\s)brace-selected(?:\s|$)/
          , n = /(?:^|\s)no-brace-hover(?:\s|$)/
          , t = /(?:^|\s)no-brace-select(?:\s|$)/
          , u = {
            "(": ")",
            "[": "]",
            "{": "}"
        }
          , f = {
            "(": "brace-round",
            "[": "brace-square",
            "{": "brace-curly"
        }
          , m = 0
          , r = /^(pair-\d+-)(open|close)$/;
        Prism.hooks.add("complete", function(e) {
            var a = e.element
              , n = a.parentElement;
            if (n && "PRE" == n.tagName) {
                for (var t = [], r = a; r; r = r.parentElement)
                    if (c.test(r.className)) {
                        t.push("(", "[", "{");
                        break
                    }
                if (0 != t.length) {
                    n.__listenerAdded || (n.addEventListener("mousedown", function() {
                        var e = n.querySelector("code");
                        Array.prototype.slice.call(e.querySelectorAll(".brace-selected")).forEach(function(e) {
                            e.className = e.className.replace(l, " ")
                        })
                    }),
                    Object.defineProperty(n, "__listenerAdded", {
                        value: !0
                    }));
                    var o = Array.prototype.slice.call(a.querySelectorAll("span.token.punctuation"))
                      , i = [];
                    t.forEach(function(e) {
                        for (var a = u[e], n = f[e], t = [], r = [], s = 0; s < o.length; s++) {
                            var c = o[s];
                            if (0 == c.childElementCount) {
                                var l = c.textContent;
                                l === e ? (i.push({
                                    index: s,
                                    open: !0,
                                    element: c
                                }),
                                c.className += " " + n,
                                c.className += " brace-open",
                                r.push(s)) : l === a && (i.push({
                                    index: s,
                                    open: !1,
                                    element: c
                                }),
                                c.className += " " + n,
                                c.className += " brace-close",
                                r.length && t.push([s, r.pop()]))
                            }
                        }
                        t.forEach(function(e) {
                            var a = "pair-" + m++ + "-"
                              , n = o[e[0]]
                              , t = o[e[1]];
                            n.id = a + "open",
                            t.id = a + "close",
                            [n, t].forEach(function(e) {
                                e.addEventListener("mouseenter", p),
                                e.addEventListener("mouseleave", d),
                                e.addEventListener("click", h)
                            })
                        })
                    });
                    var s = 0;
                    i.sort(function(e, a) {
                        return e.index - a.index
                    }),
                    i.forEach(function(e) {
                        e.open ? (e.element.className += " brace-level-" + (s % 12 + 1),
                        s++) : (s = Math.max(0, s - 1),
                        e.element.className += " brace-level-" + (s % 12 + 1))
                    })
                }
            }
        })
    }
    function s(e) {
        var a = r.exec(e.id);
        return document.querySelector("#" + a[1] + ("open" == a[2] ? "close" : "open"))
    }
    function p() {
        for (var e = this.parentElement; e; e = e.parentElement)
            if (n.test(e.className))
                return;
        [this, s(this)].forEach(function(e) {
            e.className = (e.className.replace(a, " ") + " brace-hover").replace(/\s+/g, " ")
        })
    }
    function d() {
        [this, s(this)].forEach(function(e) {
            e.className = e.className.replace(a, " ")
        })
    }
    function h() {
        for (var e = this.parentElement; e; e = e.parentElement)
            if (t.test(e.className))
                return;
        [this, s(this)].forEach(function(e) {
            e.className = (e.className.replace(l, " ") + " brace-selected").replace(/\s+/g, " ")
        })
    }
}();
