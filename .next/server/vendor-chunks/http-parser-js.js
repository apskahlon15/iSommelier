/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/http-parser-js";
exports.ids = ["vendor-chunks/http-parser-js"];
exports.modules = {

/***/ "(ssr)/./node_modules/http-parser-js/http-parser.js":
/*!****************************************************!*\
  !*** ./node_modules/http-parser-js/http-parser.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("/*jshint node:true */\n\nvar assert = __webpack_require__(/*! assert */ \"assert\");\n\nexports.HTTPParser = HTTPParser;\nfunction HTTPParser(type) {\n  assert.ok(type === HTTPParser.REQUEST || type === HTTPParser.RESPONSE || type === undefined);\n  if (type === undefined) {\n    // Node v12+\n  } else {\n    this.initialize(type);\n  }\n  this.maxHeaderSize=HTTPParser.maxHeaderSize\n}\nHTTPParser.prototype.initialize = function (type, async_resource) {\n  assert.ok(type === HTTPParser.REQUEST || type === HTTPParser.RESPONSE);\n  this.type = type;\n  this.state = type + '_LINE';\n  this.info = {\n    headers: [],\n    upgrade: false\n  };\n  this.trailers = [];\n  this.line = '';\n  this.isChunked = false;\n  this.connection = '';\n  this.headerSize = 0; // for preventing too big headers\n  this.body_bytes = null;\n  this.isUserCall = false;\n  this.hadError = false;\n};\n\nHTTPParser.encoding = 'ascii';\nHTTPParser.maxHeaderSize = 80 * 1024; // maxHeaderSize (in bytes) is configurable, but 80kb by default;\nHTTPParser.REQUEST = 'REQUEST';\nHTTPParser.RESPONSE = 'RESPONSE';\n\n// Note: *not* starting with kOnHeaders=0 line the Node parser, because any\n//   newly added constants (kOnTimeout in Node v12.19.0) will overwrite 0!\nvar kOnHeaders = HTTPParser.kOnHeaders = 1;\nvar kOnHeadersComplete = HTTPParser.kOnHeadersComplete = 2;\nvar kOnBody = HTTPParser.kOnBody = 3;\nvar kOnMessageComplete = HTTPParser.kOnMessageComplete = 4;\n\n// Some handler stubs, needed for compatibility\nHTTPParser.prototype[kOnHeaders] =\nHTTPParser.prototype[kOnHeadersComplete] =\nHTTPParser.prototype[kOnBody] =\nHTTPParser.prototype[kOnMessageComplete] = function () {};\n\nvar compatMode0_12 = true;\nObject.defineProperty(HTTPParser, 'kOnExecute', {\n    get: function () {\n      // hack for backward compatibility\n      compatMode0_12 = false;\n      return 99;\n    }\n  });\n\nvar methods = exports.methods = HTTPParser.methods = [\n  'DELETE',\n  'GET',\n  'HEAD',\n  'POST',\n  'PUT',\n  'CONNECT',\n  'OPTIONS',\n  'TRACE',\n  'COPY',\n  'LOCK',\n  'MKCOL',\n  'MOVE',\n  'PROPFIND',\n  'PROPPATCH',\n  'SEARCH',\n  'UNLOCK',\n  'BIND',\n  'REBIND',\n  'UNBIND',\n  'ACL',\n  'REPORT',\n  'MKACTIVITY',\n  'CHECKOUT',\n  'MERGE',\n  'M-SEARCH',\n  'NOTIFY',\n  'SUBSCRIBE',\n  'UNSUBSCRIBE',\n  'PATCH',\n  'PURGE',\n  'MKCALENDAR',\n  'LINK',\n  'UNLINK',\n  'SOURCE',\n];\nvar method_connect = methods.indexOf('CONNECT');\nHTTPParser.prototype.reinitialize = HTTPParser;\nHTTPParser.prototype.close =\nHTTPParser.prototype.pause =\nHTTPParser.prototype.resume =\nHTTPParser.prototype.free = function () {};\nHTTPParser.prototype._compatMode0_11 = false;\nHTTPParser.prototype.getAsyncId = function() { return 0; };\n\nvar headerState = {\n  REQUEST_LINE: true,\n  RESPONSE_LINE: true,\n  HEADER: true\n};\nHTTPParser.prototype.execute = function (chunk, start, length) {\n  if (!(this instanceof HTTPParser)) {\n    throw new TypeError('not a HTTPParser');\n  }\n\n  // backward compat to node < 0.11.4\n  // Note: the start and length params were removed in newer version\n  start = start || 0;\n  length = typeof length === 'number' ? length : chunk.length;\n\n  this.chunk = chunk;\n  this.offset = start;\n  var end = this.end = start + length;\n  try {\n    while (this.offset < end) {\n      if (this[this.state]()) {\n        break;\n      }\n    }\n  } catch (err) {\n    if (this.isUserCall) {\n      throw err;\n    }\n    this.hadError = true;\n    return err;\n  }\n  this.chunk = null;\n  length = this.offset - start;\n  if (headerState[this.state]) {\n    this.headerSize += length;\n    if (this.headerSize > (this.maxHeaderSize||HTTPParser.maxHeaderSize)) {\n      return new Error('max header size exceeded');\n    }\n  }\n  return length;\n};\n\nvar stateFinishAllowed = {\n  REQUEST_LINE: true,\n  RESPONSE_LINE: true,\n  BODY_RAW: true\n};\nHTTPParser.prototype.finish = function () {\n  if (this.hadError) {\n    return;\n  }\n  if (!stateFinishAllowed[this.state]) {\n    return new Error('invalid state for EOF');\n  }\n  if (this.state === 'BODY_RAW') {\n    this.userCall()(this[kOnMessageComplete]());\n  }\n};\n\n// These three methods are used for an internal speed optimization, and it also\n// works if theses are noops. Basically consume() asks us to read the bytes\n// ourselves, but if we don't do it we get them through execute().\nHTTPParser.prototype.consume =\nHTTPParser.prototype.unconsume =\nHTTPParser.prototype.getCurrentBuffer = function () {};\n\n//For correct error handling - see HTTPParser#execute\n//Usage: this.userCall()(userFunction('arg'));\nHTTPParser.prototype.userCall = function () {\n  this.isUserCall = true;\n  var self = this;\n  return function (ret) {\n    self.isUserCall = false;\n    return ret;\n  };\n};\n\nHTTPParser.prototype.nextRequest = function () {\n  this.userCall()(this[kOnMessageComplete]());\n  this.reinitialize(this.type);\n};\n\nHTTPParser.prototype.consumeLine = function () {\n  var end = this.end,\n      chunk = this.chunk;\n  for (var i = this.offset; i < end; i++) {\n    if (chunk[i] === 0x0a) { // \\n\n      var line = this.line + chunk.toString(HTTPParser.encoding, this.offset, i);\n      if (line.charAt(line.length - 1) === '\\r') {\n        line = line.substr(0, line.length - 1);\n      }\n      this.line = '';\n      this.offset = i + 1;\n      return line;\n    }\n  }\n  //line split over multiple chunks\n  this.line += chunk.toString(HTTPParser.encoding, this.offset, this.end);\n  this.offset = this.end;\n};\n\nvar headerExp = /^([^: \\t]+):[ \\t]*((?:.*[^ \\t])|)/;\nvar headerContinueExp = /^[ \\t]+(.*[^ \\t])/;\nHTTPParser.prototype.parseHeader = function (line, headers) {\n  if (line.indexOf('\\r') !== -1) {\n    throw parseErrorCode('HPE_LF_EXPECTED');\n  }\n\n  var match = headerExp.exec(line);\n  var k = match && match[1];\n  if (k) { // skip empty string (malformed header)\n    headers.push(k);\n    headers.push(match[2]);\n  } else {\n    var matchContinue = headerContinueExp.exec(line);\n    if (matchContinue && headers.length) {\n      if (headers[headers.length - 1]) {\n        headers[headers.length - 1] += ' ';\n      }\n      headers[headers.length - 1] += matchContinue[1];\n    }\n  }\n};\n\nvar requestExp = /^([A-Z-]+) ([^ ]+) HTTP\\/(\\d)\\.(\\d)$/;\nHTTPParser.prototype.REQUEST_LINE = function () {\n  var line = this.consumeLine();\n  if (!line) {\n    return;\n  }\n  var match = requestExp.exec(line);\n  if (match === null) {\n    throw parseErrorCode('HPE_INVALID_CONSTANT');\n  }\n  this.info.method = this._compatMode0_11 ? match[1] : methods.indexOf(match[1]);\n  if (this.info.method === -1) {\n    throw new Error('invalid request method');\n  }\n  this.info.url = match[2];\n  this.info.versionMajor = +match[3];\n  this.info.versionMinor = +match[4];\n  this.body_bytes = 0;\n  this.state = 'HEADER';\n};\n\nvar responseExp = /^HTTP\\/(\\d)\\.(\\d) (\\d{3}) ?(.*)$/;\nHTTPParser.prototype.RESPONSE_LINE = function () {\n  var line = this.consumeLine();\n  if (!line) {\n    return;\n  }\n  var match = responseExp.exec(line);\n  if (match === null) {\n    throw parseErrorCode('HPE_INVALID_CONSTANT');\n  }\n  this.info.versionMajor = +match[1];\n  this.info.versionMinor = +match[2];\n  var statusCode = this.info.statusCode = +match[3];\n  this.info.statusMessage = match[4];\n  // Implied zero length.\n  if ((statusCode / 100 | 0) === 1 || statusCode === 204 || statusCode === 304) {\n    this.body_bytes = 0;\n  }\n  this.state = 'HEADER';\n};\n\nHTTPParser.prototype.shouldKeepAlive = function () {\n  if (this.info.versionMajor > 0 && this.info.versionMinor > 0) {\n    if (this.connection.indexOf('close') !== -1) {\n      return false;\n    }\n  } else if (this.connection.indexOf('keep-alive') === -1) {\n    return false;\n  }\n  if (this.body_bytes !== null || this.isChunked) { // || skipBody\n    return true;\n  }\n  return false;\n};\n\nHTTPParser.prototype.HEADER = function () {\n  var line = this.consumeLine();\n  if (line === undefined) {\n    return;\n  }\n  var info = this.info;\n  if (line) {\n    this.parseHeader(line, info.headers);\n  } else {\n    var headers = info.headers;\n    var hasContentLength = false;\n    var currentContentLengthValue;\n    var hasUpgradeHeader = false;\n    for (var i = 0; i < headers.length; i += 2) {\n      switch (headers[i].toLowerCase()) {\n        case 'transfer-encoding':\n          this.isChunked = headers[i + 1].toLowerCase() === 'chunked';\n          break;\n        case 'content-length':\n          currentContentLengthValue = +headers[i + 1];\n          if (hasContentLength) {\n            // Fix duplicate Content-Length header with same values.\n            // Throw error only if values are different.\n            // Known issues:\n            // https://github.com/request/request/issues/2091#issuecomment-328715113\n            // https://github.com/nodejs/node/issues/6517#issuecomment-216263771\n            if (currentContentLengthValue !== this.body_bytes) {\n              throw parseErrorCode('HPE_UNEXPECTED_CONTENT_LENGTH');\n            }\n          } else {\n            hasContentLength = true;\n            this.body_bytes = currentContentLengthValue;\n          }\n          break;\n        case 'connection':\n          this.connection += headers[i + 1].toLowerCase();\n          break;\n        case 'upgrade':\n          hasUpgradeHeader = true;\n          break;\n      }\n    }\n\n    // if both isChunked and hasContentLength, isChunked wins\n    // This is required so the body is parsed using the chunked method, and matches\n    // Chrome's behavior.  We could, maybe, ignore them both (would get chunked\n    // encoding into the body), and/or disable shouldKeepAlive to be more\n    // resilient.\n    if (this.isChunked && hasContentLength) {\n      hasContentLength = false;\n      this.body_bytes = null;\n    }\n\n    // Logic from https://github.com/nodejs/http-parser/blob/921d5585515a153fa00e411cf144280c59b41f90/http_parser.c#L1727-L1737\n    // \"For responses, \"Upgrade: foo\" and \"Connection: upgrade\" are\n    //   mandatory only when it is a 101 Switching Protocols response,\n    //   otherwise it is purely informational, to announce support.\n    if (hasUpgradeHeader && this.connection.indexOf('upgrade') != -1) {\n      info.upgrade = this.type === HTTPParser.REQUEST || info.statusCode === 101;\n    } else {\n      info.upgrade = info.method === method_connect;\n    }\n\n    if (this.isChunked && info.upgrade) {\n      this.isChunked = false;\n    }\n\n    info.shouldKeepAlive = this.shouldKeepAlive();\n    //problem which also exists in original node: we should know skipBody before calling onHeadersComplete\n    var skipBody;\n    if (compatMode0_12) {\n      skipBody = this.userCall()(this[kOnHeadersComplete](info));\n    } else {\n      skipBody = this.userCall()(this[kOnHeadersComplete](info.versionMajor,\n          info.versionMinor, info.headers, info.method, info.url, info.statusCode,\n          info.statusMessage, info.upgrade, info.shouldKeepAlive));\n    }\n    if (skipBody === 2) {\n      this.nextRequest();\n      return true;\n    } else if (this.isChunked && !skipBody) {\n      this.state = 'BODY_CHUNKHEAD';\n    } else if (skipBody || this.body_bytes === 0) {\n      this.nextRequest();\n      // For older versions of node (v6.x and older?), that return skipBody=1 or skipBody=true,\n      //   need this \"return true;\" if it's an upgrade request.\n      return info.upgrade;\n    } else if (this.body_bytes === null) {\n      this.state = 'BODY_RAW';\n    } else {\n      this.state = 'BODY_SIZED';\n    }\n  }\n};\n\nHTTPParser.prototype.BODY_CHUNKHEAD = function () {\n  var line = this.consumeLine();\n  if (line === undefined) {\n    return;\n  }\n  this.body_bytes = parseInt(line, 16);\n  if (!this.body_bytes) {\n    this.state = 'BODY_CHUNKTRAILERS';\n  } else {\n    this.state = 'BODY_CHUNK';\n  }\n};\n\nHTTPParser.prototype.BODY_CHUNK = function () {\n  var length = Math.min(this.end - this.offset, this.body_bytes);\n  this.userCall()(this[kOnBody](this.chunk, this.offset, length));\n  this.offset += length;\n  this.body_bytes -= length;\n  if (!this.body_bytes) {\n    this.state = 'BODY_CHUNKEMPTYLINE';\n  }\n};\n\nHTTPParser.prototype.BODY_CHUNKEMPTYLINE = function () {\n  var line = this.consumeLine();\n  if (line === undefined) {\n    return;\n  }\n  assert.equal(line, '');\n  this.state = 'BODY_CHUNKHEAD';\n};\n\nHTTPParser.prototype.BODY_CHUNKTRAILERS = function () {\n  var line = this.consumeLine();\n  if (line === undefined) {\n    return;\n  }\n  if (line) {\n    this.parseHeader(line, this.trailers);\n  } else {\n    if (this.trailers.length) {\n      this.userCall()(this[kOnHeaders](this.trailers, ''));\n    }\n    this.nextRequest();\n  }\n};\n\nHTTPParser.prototype.BODY_RAW = function () {\n  var length = this.end - this.offset;\n  this.userCall()(this[kOnBody](this.chunk, this.offset, length));\n  this.offset = this.end;\n};\n\nHTTPParser.prototype.BODY_SIZED = function () {\n  var length = Math.min(this.end - this.offset, this.body_bytes);\n  this.userCall()(this[kOnBody](this.chunk, this.offset, length));\n  this.offset += length;\n  this.body_bytes -= length;\n  if (!this.body_bytes) {\n    this.nextRequest();\n  }\n};\n\n// backward compat to node < 0.11.6\n['Headers', 'HeadersComplete', 'Body', 'MessageComplete'].forEach(function (name) {\n  var k = HTTPParser['kOn' + name];\n  Object.defineProperty(HTTPParser.prototype, 'on' + name, {\n    get: function () {\n      return this[k];\n    },\n    set: function (to) {\n      // hack for backward compatibility\n      this._compatMode0_11 = true;\n      method_connect = 'CONNECT';\n      return (this[k] = to);\n    }\n  });\n});\n\nfunction parseErrorCode(code) {\n  var err = new Error('Parse Error');\n  err.code = code;\n  return err;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaHR0cC1wYXJzZXItanMvaHR0cC1wYXJzZXIuanMiLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHNCQUFROztBQUU3QixrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUgsY0FBYyxlQUFlO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQzs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFNBQVM7QUFDckMsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUNBQXlDLEVBQUU7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0JBQW9CO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2Fwc3RvbmUtZmluYWwvLi9ub2RlX21vZHVsZXMvaHR0cC1wYXJzZXItanMvaHR0cC1wYXJzZXIuanM/MmRjNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKmpzaGludCBub2RlOnRydWUgKi9cblxudmFyIGFzc2VydCA9IHJlcXVpcmUoJ2Fzc2VydCcpO1xuXG5leHBvcnRzLkhUVFBQYXJzZXIgPSBIVFRQUGFyc2VyO1xuZnVuY3Rpb24gSFRUUFBhcnNlcih0eXBlKSB7XG4gIGFzc2VydC5vayh0eXBlID09PSBIVFRQUGFyc2VyLlJFUVVFU1QgfHwgdHlwZSA9PT0gSFRUUFBhcnNlci5SRVNQT05TRSB8fCB0eXBlID09PSB1bmRlZmluZWQpO1xuICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gTm9kZSB2MTIrXG4gIH0gZWxzZSB7XG4gICAgdGhpcy5pbml0aWFsaXplKHR5cGUpO1xuICB9XG4gIHRoaXMubWF4SGVhZGVyU2l6ZT1IVFRQUGFyc2VyLm1heEhlYWRlclNpemVcbn1cbkhUVFBQYXJzZXIucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAodHlwZSwgYXN5bmNfcmVzb3VyY2UpIHtcbiAgYXNzZXJ0Lm9rKHR5cGUgPT09IEhUVFBQYXJzZXIuUkVRVUVTVCB8fCB0eXBlID09PSBIVFRQUGFyc2VyLlJFU1BPTlNFKTtcbiAgdGhpcy50eXBlID0gdHlwZTtcbiAgdGhpcy5zdGF0ZSA9IHR5cGUgKyAnX0xJTkUnO1xuICB0aGlzLmluZm8gPSB7XG4gICAgaGVhZGVyczogW10sXG4gICAgdXBncmFkZTogZmFsc2VcbiAgfTtcbiAgdGhpcy50cmFpbGVycyA9IFtdO1xuICB0aGlzLmxpbmUgPSAnJztcbiAgdGhpcy5pc0NodW5rZWQgPSBmYWxzZTtcbiAgdGhpcy5jb25uZWN0aW9uID0gJyc7XG4gIHRoaXMuaGVhZGVyU2l6ZSA9IDA7IC8vIGZvciBwcmV2ZW50aW5nIHRvbyBiaWcgaGVhZGVyc1xuICB0aGlzLmJvZHlfYnl0ZXMgPSBudWxsO1xuICB0aGlzLmlzVXNlckNhbGwgPSBmYWxzZTtcbiAgdGhpcy5oYWRFcnJvciA9IGZhbHNlO1xufTtcblxuSFRUUFBhcnNlci5lbmNvZGluZyA9ICdhc2NpaSc7XG5IVFRQUGFyc2VyLm1heEhlYWRlclNpemUgPSA4MCAqIDEwMjQ7IC8vIG1heEhlYWRlclNpemUgKGluIGJ5dGVzKSBpcyBjb25maWd1cmFibGUsIGJ1dCA4MGtiIGJ5IGRlZmF1bHQ7XG5IVFRQUGFyc2VyLlJFUVVFU1QgPSAnUkVRVUVTVCc7XG5IVFRQUGFyc2VyLlJFU1BPTlNFID0gJ1JFU1BPTlNFJztcblxuLy8gTm90ZTogKm5vdCogc3RhcnRpbmcgd2l0aCBrT25IZWFkZXJzPTAgbGluZSB0aGUgTm9kZSBwYXJzZXIsIGJlY2F1c2UgYW55XG4vLyAgIG5ld2x5IGFkZGVkIGNvbnN0YW50cyAoa09uVGltZW91dCBpbiBOb2RlIHYxMi4xOS4wKSB3aWxsIG92ZXJ3cml0ZSAwIVxudmFyIGtPbkhlYWRlcnMgPSBIVFRQUGFyc2VyLmtPbkhlYWRlcnMgPSAxO1xudmFyIGtPbkhlYWRlcnNDb21wbGV0ZSA9IEhUVFBQYXJzZXIua09uSGVhZGVyc0NvbXBsZXRlID0gMjtcbnZhciBrT25Cb2R5ID0gSFRUUFBhcnNlci5rT25Cb2R5ID0gMztcbnZhciBrT25NZXNzYWdlQ29tcGxldGUgPSBIVFRQUGFyc2VyLmtPbk1lc3NhZ2VDb21wbGV0ZSA9IDQ7XG5cbi8vIFNvbWUgaGFuZGxlciBzdHVicywgbmVlZGVkIGZvciBjb21wYXRpYmlsaXR5XG5IVFRQUGFyc2VyLnByb3RvdHlwZVtrT25IZWFkZXJzXSA9XG5IVFRQUGFyc2VyLnByb3RvdHlwZVtrT25IZWFkZXJzQ29tcGxldGVdID1cbkhUVFBQYXJzZXIucHJvdG90eXBlW2tPbkJvZHldID1cbkhUVFBQYXJzZXIucHJvdG90eXBlW2tPbk1lc3NhZ2VDb21wbGV0ZV0gPSBmdW5jdGlvbiAoKSB7fTtcblxudmFyIGNvbXBhdE1vZGUwXzEyID0gdHJ1ZTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShIVFRQUGFyc2VyLCAna09uRXhlY3V0ZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGhhY2sgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbiAgICAgIGNvbXBhdE1vZGUwXzEyID0gZmFsc2U7XG4gICAgICByZXR1cm4gOTk7XG4gICAgfVxuICB9KTtcblxudmFyIG1ldGhvZHMgPSBleHBvcnRzLm1ldGhvZHMgPSBIVFRQUGFyc2VyLm1ldGhvZHMgPSBbXG4gICdERUxFVEUnLFxuICAnR0VUJyxcbiAgJ0hFQUQnLFxuICAnUE9TVCcsXG4gICdQVVQnLFxuICAnQ09OTkVDVCcsXG4gICdPUFRJT05TJyxcbiAgJ1RSQUNFJyxcbiAgJ0NPUFknLFxuICAnTE9DSycsXG4gICdNS0NPTCcsXG4gICdNT1ZFJyxcbiAgJ1BST1BGSU5EJyxcbiAgJ1BST1BQQVRDSCcsXG4gICdTRUFSQ0gnLFxuICAnVU5MT0NLJyxcbiAgJ0JJTkQnLFxuICAnUkVCSU5EJyxcbiAgJ1VOQklORCcsXG4gICdBQ0wnLFxuICAnUkVQT1JUJyxcbiAgJ01LQUNUSVZJVFknLFxuICAnQ0hFQ0tPVVQnLFxuICAnTUVSR0UnLFxuICAnTS1TRUFSQ0gnLFxuICAnTk9USUZZJyxcbiAgJ1NVQlNDUklCRScsXG4gICdVTlNVQlNDUklCRScsXG4gICdQQVRDSCcsXG4gICdQVVJHRScsXG4gICdNS0NBTEVOREFSJyxcbiAgJ0xJTksnLFxuICAnVU5MSU5LJyxcbiAgJ1NPVVJDRScsXG5dO1xudmFyIG1ldGhvZF9jb25uZWN0ID0gbWV0aG9kcy5pbmRleE9mKCdDT05ORUNUJyk7XG5IVFRQUGFyc2VyLnByb3RvdHlwZS5yZWluaXRpYWxpemUgPSBIVFRQUGFyc2VyO1xuSFRUUFBhcnNlci5wcm90b3R5cGUuY2xvc2UgPVxuSFRUUFBhcnNlci5wcm90b3R5cGUucGF1c2UgPVxuSFRUUFBhcnNlci5wcm90b3R5cGUucmVzdW1lID1cbkhUVFBQYXJzZXIucHJvdG90eXBlLmZyZWUgPSBmdW5jdGlvbiAoKSB7fTtcbkhUVFBQYXJzZXIucHJvdG90eXBlLl9jb21wYXRNb2RlMF8xMSA9IGZhbHNlO1xuSFRUUFBhcnNlci5wcm90b3R5cGUuZ2V0QXN5bmNJZCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxudmFyIGhlYWRlclN0YXRlID0ge1xuICBSRVFVRVNUX0xJTkU6IHRydWUsXG4gIFJFU1BPTlNFX0xJTkU6IHRydWUsXG4gIEhFQURFUjogdHJ1ZVxufTtcbkhUVFBQYXJzZXIucHJvdG90eXBlLmV4ZWN1dGUgPSBmdW5jdGlvbiAoY2h1bmssIHN0YXJ0LCBsZW5ndGgpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEhUVFBQYXJzZXIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbm90IGEgSFRUUFBhcnNlcicpO1xuICB9XG5cbiAgLy8gYmFja3dhcmQgY29tcGF0IHRvIG5vZGUgPCAwLjExLjRcbiAgLy8gTm90ZTogdGhlIHN0YXJ0IGFuZCBsZW5ndGggcGFyYW1zIHdlcmUgcmVtb3ZlZCBpbiBuZXdlciB2ZXJzaW9uXG4gIHN0YXJ0ID0gc3RhcnQgfHwgMDtcbiAgbGVuZ3RoID0gdHlwZW9mIGxlbmd0aCA9PT0gJ251bWJlcicgPyBsZW5ndGggOiBjaHVuay5sZW5ndGg7XG5cbiAgdGhpcy5jaHVuayA9IGNodW5rO1xuICB0aGlzLm9mZnNldCA9IHN0YXJ0O1xuICB2YXIgZW5kID0gdGhpcy5lbmQgPSBzdGFydCArIGxlbmd0aDtcbiAgdHJ5IHtcbiAgICB3aGlsZSAodGhpcy5vZmZzZXQgPCBlbmQpIHtcbiAgICAgIGlmICh0aGlzW3RoaXMuc3RhdGVdKCkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAodGhpcy5pc1VzZXJDYWxsKSB7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICAgIHRoaXMuaGFkRXJyb3IgPSB0cnVlO1xuICAgIHJldHVybiBlcnI7XG4gIH1cbiAgdGhpcy5jaHVuayA9IG51bGw7XG4gIGxlbmd0aCA9IHRoaXMub2Zmc2V0IC0gc3RhcnQ7XG4gIGlmIChoZWFkZXJTdGF0ZVt0aGlzLnN0YXRlXSkge1xuICAgIHRoaXMuaGVhZGVyU2l6ZSArPSBsZW5ndGg7XG4gICAgaWYgKHRoaXMuaGVhZGVyU2l6ZSA+ICh0aGlzLm1heEhlYWRlclNpemV8fEhUVFBQYXJzZXIubWF4SGVhZGVyU2l6ZSkpIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ21heCBoZWFkZXIgc2l6ZSBleGNlZWRlZCcpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbGVuZ3RoO1xufTtcblxudmFyIHN0YXRlRmluaXNoQWxsb3dlZCA9IHtcbiAgUkVRVUVTVF9MSU5FOiB0cnVlLFxuICBSRVNQT05TRV9MSU5FOiB0cnVlLFxuICBCT0RZX1JBVzogdHJ1ZVxufTtcbkhUVFBQYXJzZXIucHJvdG90eXBlLmZpbmlzaCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuaGFkRXJyb3IpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKCFzdGF0ZUZpbmlzaEFsbG93ZWRbdGhpcy5zdGF0ZV0pIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKCdpbnZhbGlkIHN0YXRlIGZvciBFT0YnKTtcbiAgfVxuICBpZiAodGhpcy5zdGF0ZSA9PT0gJ0JPRFlfUkFXJykge1xuICAgIHRoaXMudXNlckNhbGwoKSh0aGlzW2tPbk1lc3NhZ2VDb21wbGV0ZV0oKSk7XG4gIH1cbn07XG5cbi8vIFRoZXNlIHRocmVlIG1ldGhvZHMgYXJlIHVzZWQgZm9yIGFuIGludGVybmFsIHNwZWVkIG9wdGltaXphdGlvbiwgYW5kIGl0IGFsc29cbi8vIHdvcmtzIGlmIHRoZXNlcyBhcmUgbm9vcHMuIEJhc2ljYWxseSBjb25zdW1lKCkgYXNrcyB1cyB0byByZWFkIHRoZSBieXRlc1xuLy8gb3Vyc2VsdmVzLCBidXQgaWYgd2UgZG9uJ3QgZG8gaXQgd2UgZ2V0IHRoZW0gdGhyb3VnaCBleGVjdXRlKCkuXG5IVFRQUGFyc2VyLnByb3RvdHlwZS5jb25zdW1lID1cbkhUVFBQYXJzZXIucHJvdG90eXBlLnVuY29uc3VtZSA9XG5IVFRQUGFyc2VyLnByb3RvdHlwZS5nZXRDdXJyZW50QnVmZmVyID0gZnVuY3Rpb24gKCkge307XG5cbi8vRm9yIGNvcnJlY3QgZXJyb3IgaGFuZGxpbmcgLSBzZWUgSFRUUFBhcnNlciNleGVjdXRlXG4vL1VzYWdlOiB0aGlzLnVzZXJDYWxsKCkodXNlckZ1bmN0aW9uKCdhcmcnKSk7XG5IVFRQUGFyc2VyLnByb3RvdHlwZS51c2VyQ2FsbCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5pc1VzZXJDYWxsID0gdHJ1ZTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICByZXR1cm4gZnVuY3Rpb24gKHJldCkge1xuICAgIHNlbGYuaXNVc2VyQ2FsbCA9IGZhbHNlO1xuICAgIHJldHVybiByZXQ7XG4gIH07XG59O1xuXG5IVFRQUGFyc2VyLnByb3RvdHlwZS5uZXh0UmVxdWVzdCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy51c2VyQ2FsbCgpKHRoaXNba09uTWVzc2FnZUNvbXBsZXRlXSgpKTtcbiAgdGhpcy5yZWluaXRpYWxpemUodGhpcy50eXBlKTtcbn07XG5cbkhUVFBQYXJzZXIucHJvdG90eXBlLmNvbnN1bWVMaW5lID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZW5kID0gdGhpcy5lbmQsXG4gICAgICBjaHVuayA9IHRoaXMuY2h1bms7XG4gIGZvciAodmFyIGkgPSB0aGlzLm9mZnNldDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgaWYgKGNodW5rW2ldID09PSAweDBhKSB7IC8vIFxcblxuICAgICAgdmFyIGxpbmUgPSB0aGlzLmxpbmUgKyBjaHVuay50b1N0cmluZyhIVFRQUGFyc2VyLmVuY29kaW5nLCB0aGlzLm9mZnNldCwgaSk7XG4gICAgICBpZiAobGluZS5jaGFyQXQobGluZS5sZW5ndGggLSAxKSA9PT0gJ1xccicpIHtcbiAgICAgICAgbGluZSA9IGxpbmUuc3Vic3RyKDAsIGxpbmUubGVuZ3RoIC0gMSk7XG4gICAgICB9XG4gICAgICB0aGlzLmxpbmUgPSAnJztcbiAgICAgIHRoaXMub2Zmc2V0ID0gaSArIDE7XG4gICAgICByZXR1cm4gbGluZTtcbiAgICB9XG4gIH1cbiAgLy9saW5lIHNwbGl0IG92ZXIgbXVsdGlwbGUgY2h1bmtzXG4gIHRoaXMubGluZSArPSBjaHVuay50b1N0cmluZyhIVFRQUGFyc2VyLmVuY29kaW5nLCB0aGlzLm9mZnNldCwgdGhpcy5lbmQpO1xuICB0aGlzLm9mZnNldCA9IHRoaXMuZW5kO1xufTtcblxudmFyIGhlYWRlckV4cCA9IC9eKFteOiBcXHRdKyk6WyBcXHRdKigoPzouKlteIFxcdF0pfCkvO1xudmFyIGhlYWRlckNvbnRpbnVlRXhwID0gL15bIFxcdF0rKC4qW14gXFx0XSkvO1xuSFRUUFBhcnNlci5wcm90b3R5cGUucGFyc2VIZWFkZXIgPSBmdW5jdGlvbiAobGluZSwgaGVhZGVycykge1xuICBpZiAobGluZS5pbmRleE9mKCdcXHInKSAhPT0gLTEpIHtcbiAgICB0aHJvdyBwYXJzZUVycm9yQ29kZSgnSFBFX0xGX0VYUEVDVEVEJyk7XG4gIH1cblxuICB2YXIgbWF0Y2ggPSBoZWFkZXJFeHAuZXhlYyhsaW5lKTtcbiAgdmFyIGsgPSBtYXRjaCAmJiBtYXRjaFsxXTtcbiAgaWYgKGspIHsgLy8gc2tpcCBlbXB0eSBzdHJpbmcgKG1hbGZvcm1lZCBoZWFkZXIpXG4gICAgaGVhZGVycy5wdXNoKGspO1xuICAgIGhlYWRlcnMucHVzaChtYXRjaFsyXSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG1hdGNoQ29udGludWUgPSBoZWFkZXJDb250aW51ZUV4cC5leGVjKGxpbmUpO1xuICAgIGlmIChtYXRjaENvbnRpbnVlICYmIGhlYWRlcnMubGVuZ3RoKSB7XG4gICAgICBpZiAoaGVhZGVyc1toZWFkZXJzLmxlbmd0aCAtIDFdKSB7XG4gICAgICAgIGhlYWRlcnNbaGVhZGVycy5sZW5ndGggLSAxXSArPSAnICc7XG4gICAgICB9XG4gICAgICBoZWFkZXJzW2hlYWRlcnMubGVuZ3RoIC0gMV0gKz0gbWF0Y2hDb250aW51ZVsxXTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciByZXF1ZXN0RXhwID0gL14oW0EtWi1dKykgKFteIF0rKSBIVFRQXFwvKFxcZClcXC4oXFxkKSQvO1xuSFRUUFBhcnNlci5wcm90b3R5cGUuUkVRVUVTVF9MSU5FID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbGluZSA9IHRoaXMuY29uc3VtZUxpbmUoKTtcbiAgaWYgKCFsaW5lKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBtYXRjaCA9IHJlcXVlc3RFeHAuZXhlYyhsaW5lKTtcbiAgaWYgKG1hdGNoID09PSBudWxsKSB7XG4gICAgdGhyb3cgcGFyc2VFcnJvckNvZGUoJ0hQRV9JTlZBTElEX0NPTlNUQU5UJyk7XG4gIH1cbiAgdGhpcy5pbmZvLm1ldGhvZCA9IHRoaXMuX2NvbXBhdE1vZGUwXzExID8gbWF0Y2hbMV0gOiBtZXRob2RzLmluZGV4T2YobWF0Y2hbMV0pO1xuICBpZiAodGhpcy5pbmZvLm1ldGhvZCA9PT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgcmVxdWVzdCBtZXRob2QnKTtcbiAgfVxuICB0aGlzLmluZm8udXJsID0gbWF0Y2hbMl07XG4gIHRoaXMuaW5mby52ZXJzaW9uTWFqb3IgPSArbWF0Y2hbM107XG4gIHRoaXMuaW5mby52ZXJzaW9uTWlub3IgPSArbWF0Y2hbNF07XG4gIHRoaXMuYm9keV9ieXRlcyA9IDA7XG4gIHRoaXMuc3RhdGUgPSAnSEVBREVSJztcbn07XG5cbnZhciByZXNwb25zZUV4cCA9IC9eSFRUUFxcLyhcXGQpXFwuKFxcZCkgKFxcZHszfSkgPyguKikkLztcbkhUVFBQYXJzZXIucHJvdG90eXBlLlJFU1BPTlNFX0xJTkUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBsaW5lID0gdGhpcy5jb25zdW1lTGluZSgpO1xuICBpZiAoIWxpbmUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG1hdGNoID0gcmVzcG9uc2VFeHAuZXhlYyhsaW5lKTtcbiAgaWYgKG1hdGNoID09PSBudWxsKSB7XG4gICAgdGhyb3cgcGFyc2VFcnJvckNvZGUoJ0hQRV9JTlZBTElEX0NPTlNUQU5UJyk7XG4gIH1cbiAgdGhpcy5pbmZvLnZlcnNpb25NYWpvciA9ICttYXRjaFsxXTtcbiAgdGhpcy5pbmZvLnZlcnNpb25NaW5vciA9ICttYXRjaFsyXTtcbiAgdmFyIHN0YXR1c0NvZGUgPSB0aGlzLmluZm8uc3RhdHVzQ29kZSA9ICttYXRjaFszXTtcbiAgdGhpcy5pbmZvLnN0YXR1c01lc3NhZ2UgPSBtYXRjaFs0XTtcbiAgLy8gSW1wbGllZCB6ZXJvIGxlbmd0aC5cbiAgaWYgKChzdGF0dXNDb2RlIC8gMTAwIHwgMCkgPT09IDEgfHwgc3RhdHVzQ29kZSA9PT0gMjA0IHx8IHN0YXR1c0NvZGUgPT09IDMwNCkge1xuICAgIHRoaXMuYm9keV9ieXRlcyA9IDA7XG4gIH1cbiAgdGhpcy5zdGF0ZSA9ICdIRUFERVInO1xufTtcblxuSFRUUFBhcnNlci5wcm90b3R5cGUuc2hvdWxkS2VlcEFsaXZlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5pbmZvLnZlcnNpb25NYWpvciA+IDAgJiYgdGhpcy5pbmZvLnZlcnNpb25NaW5vciA+IDApIHtcbiAgICBpZiAodGhpcy5jb25uZWN0aW9uLmluZGV4T2YoJ2Nsb3NlJykgIT09IC0xKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9IGVsc2UgaWYgKHRoaXMuY29ubmVjdGlvbi5pbmRleE9mKCdrZWVwLWFsaXZlJykgPT09IC0xKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICh0aGlzLmJvZHlfYnl0ZXMgIT09IG51bGwgfHwgdGhpcy5pc0NodW5rZWQpIHsgLy8gfHwgc2tpcEJvZHlcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5IVFRQUGFyc2VyLnByb3RvdHlwZS5IRUFERVIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBsaW5lID0gdGhpcy5jb25zdW1lTGluZSgpO1xuICBpZiAobGluZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBpbmZvID0gdGhpcy5pbmZvO1xuICBpZiAobGluZSkge1xuICAgIHRoaXMucGFyc2VIZWFkZXIobGluZSwgaW5mby5oZWFkZXJzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgaGVhZGVycyA9IGluZm8uaGVhZGVycztcbiAgICB2YXIgaGFzQ29udGVudExlbmd0aCA9IGZhbHNlO1xuICAgIHZhciBjdXJyZW50Q29udGVudExlbmd0aFZhbHVlO1xuICAgIHZhciBoYXNVcGdyYWRlSGVhZGVyID0gZmFsc2U7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoZWFkZXJzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICBzd2l0Y2ggKGhlYWRlcnNbaV0udG9Mb3dlckNhc2UoKSkge1xuICAgICAgICBjYXNlICd0cmFuc2Zlci1lbmNvZGluZyc6XG4gICAgICAgICAgdGhpcy5pc0NodW5rZWQgPSBoZWFkZXJzW2kgKyAxXS50b0xvd2VyQ2FzZSgpID09PSAnY2h1bmtlZCc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NvbnRlbnQtbGVuZ3RoJzpcbiAgICAgICAgICBjdXJyZW50Q29udGVudExlbmd0aFZhbHVlID0gK2hlYWRlcnNbaSArIDFdO1xuICAgICAgICAgIGlmIChoYXNDb250ZW50TGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBGaXggZHVwbGljYXRlIENvbnRlbnQtTGVuZ3RoIGhlYWRlciB3aXRoIHNhbWUgdmFsdWVzLlxuICAgICAgICAgICAgLy8gVGhyb3cgZXJyb3Igb25seSBpZiB2YWx1ZXMgYXJlIGRpZmZlcmVudC5cbiAgICAgICAgICAgIC8vIEtub3duIGlzc3VlczpcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZXF1ZXN0L3JlcXVlc3QvaXNzdWVzLzIwOTEjaXNzdWVjb21tZW50LTMyODcxNTExM1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL2lzc3Vlcy82NTE3I2lzc3VlY29tbWVudC0yMTYyNjM3NzFcbiAgICAgICAgICAgIGlmIChjdXJyZW50Q29udGVudExlbmd0aFZhbHVlICE9PSB0aGlzLmJvZHlfYnl0ZXMpIHtcbiAgICAgICAgICAgICAgdGhyb3cgcGFyc2VFcnJvckNvZGUoJ0hQRV9VTkVYUEVDVEVEX0NPTlRFTlRfTEVOR1RIJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhhc0NvbnRlbnRMZW5ndGggPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5ib2R5X2J5dGVzID0gY3VycmVudENvbnRlbnRMZW5ndGhWYWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2Nvbm5lY3Rpb24nOlxuICAgICAgICAgIHRoaXMuY29ubmVjdGlvbiArPSBoZWFkZXJzW2kgKyAxXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd1cGdyYWRlJzpcbiAgICAgICAgICBoYXNVcGdyYWRlSGVhZGVyID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiBib3RoIGlzQ2h1bmtlZCBhbmQgaGFzQ29udGVudExlbmd0aCwgaXNDaHVua2VkIHdpbnNcbiAgICAvLyBUaGlzIGlzIHJlcXVpcmVkIHNvIHRoZSBib2R5IGlzIHBhcnNlZCB1c2luZyB0aGUgY2h1bmtlZCBtZXRob2QsIGFuZCBtYXRjaGVzXG4gICAgLy8gQ2hyb21lJ3MgYmVoYXZpb3IuICBXZSBjb3VsZCwgbWF5YmUsIGlnbm9yZSB0aGVtIGJvdGggKHdvdWxkIGdldCBjaHVua2VkXG4gICAgLy8gZW5jb2RpbmcgaW50byB0aGUgYm9keSksIGFuZC9vciBkaXNhYmxlIHNob3VsZEtlZXBBbGl2ZSB0byBiZSBtb3JlXG4gICAgLy8gcmVzaWxpZW50LlxuICAgIGlmICh0aGlzLmlzQ2h1bmtlZCAmJiBoYXNDb250ZW50TGVuZ3RoKSB7XG4gICAgICBoYXNDb250ZW50TGVuZ3RoID0gZmFsc2U7XG4gICAgICB0aGlzLmJvZHlfYnl0ZXMgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIExvZ2ljIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9odHRwLXBhcnNlci9ibG9iLzkyMWQ1NTg1NTE1YTE1M2ZhMDBlNDExY2YxNDQyODBjNTliNDFmOTAvaHR0cF9wYXJzZXIuYyNMMTcyNy1MMTczN1xuICAgIC8vIFwiRm9yIHJlc3BvbnNlcywgXCJVcGdyYWRlOiBmb29cIiBhbmQgXCJDb25uZWN0aW9uOiB1cGdyYWRlXCIgYXJlXG4gICAgLy8gICBtYW5kYXRvcnkgb25seSB3aGVuIGl0IGlzIGEgMTAxIFN3aXRjaGluZyBQcm90b2NvbHMgcmVzcG9uc2UsXG4gICAgLy8gICBvdGhlcndpc2UgaXQgaXMgcHVyZWx5IGluZm9ybWF0aW9uYWwsIHRvIGFubm91bmNlIHN1cHBvcnQuXG4gICAgaWYgKGhhc1VwZ3JhZGVIZWFkZXIgJiYgdGhpcy5jb25uZWN0aW9uLmluZGV4T2YoJ3VwZ3JhZGUnKSAhPSAtMSkge1xuICAgICAgaW5mby51cGdyYWRlID0gdGhpcy50eXBlID09PSBIVFRQUGFyc2VyLlJFUVVFU1QgfHwgaW5mby5zdGF0dXNDb2RlID09PSAxMDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZm8udXBncmFkZSA9IGluZm8ubWV0aG9kID09PSBtZXRob2RfY29ubmVjdDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0NodW5rZWQgJiYgaW5mby51cGdyYWRlKSB7XG4gICAgICB0aGlzLmlzQ2h1bmtlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGluZm8uc2hvdWxkS2VlcEFsaXZlID0gdGhpcy5zaG91bGRLZWVwQWxpdmUoKTtcbiAgICAvL3Byb2JsZW0gd2hpY2ggYWxzbyBleGlzdHMgaW4gb3JpZ2luYWwgbm9kZTogd2Ugc2hvdWxkIGtub3cgc2tpcEJvZHkgYmVmb3JlIGNhbGxpbmcgb25IZWFkZXJzQ29tcGxldGVcbiAgICB2YXIgc2tpcEJvZHk7XG4gICAgaWYgKGNvbXBhdE1vZGUwXzEyKSB7XG4gICAgICBza2lwQm9keSA9IHRoaXMudXNlckNhbGwoKSh0aGlzW2tPbkhlYWRlcnNDb21wbGV0ZV0oaW5mbykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBza2lwQm9keSA9IHRoaXMudXNlckNhbGwoKSh0aGlzW2tPbkhlYWRlcnNDb21wbGV0ZV0oaW5mby52ZXJzaW9uTWFqb3IsXG4gICAgICAgICAgaW5mby52ZXJzaW9uTWlub3IsIGluZm8uaGVhZGVycywgaW5mby5tZXRob2QsIGluZm8udXJsLCBpbmZvLnN0YXR1c0NvZGUsXG4gICAgICAgICAgaW5mby5zdGF0dXNNZXNzYWdlLCBpbmZvLnVwZ3JhZGUsIGluZm8uc2hvdWxkS2VlcEFsaXZlKSk7XG4gICAgfVxuICAgIGlmIChza2lwQm9keSA9PT0gMikge1xuICAgICAgdGhpcy5uZXh0UmVxdWVzdCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzQ2h1bmtlZCAmJiAhc2tpcEJvZHkpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSAnQk9EWV9DSFVOS0hFQUQnO1xuICAgIH0gZWxzZSBpZiAoc2tpcEJvZHkgfHwgdGhpcy5ib2R5X2J5dGVzID09PSAwKSB7XG4gICAgICB0aGlzLm5leHRSZXF1ZXN0KCk7XG4gICAgICAvLyBGb3Igb2xkZXIgdmVyc2lvbnMgb2Ygbm9kZSAodjYueCBhbmQgb2xkZXI/KSwgdGhhdCByZXR1cm4gc2tpcEJvZHk9MSBvciBza2lwQm9keT10cnVlLFxuICAgICAgLy8gICBuZWVkIHRoaXMgXCJyZXR1cm4gdHJ1ZTtcIiBpZiBpdCdzIGFuIHVwZ3JhZGUgcmVxdWVzdC5cbiAgICAgIHJldHVybiBpbmZvLnVwZ3JhZGU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJvZHlfYnl0ZXMgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSAnQk9EWV9SQVcnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlID0gJ0JPRFlfU0laRUQnO1xuICAgIH1cbiAgfVxufTtcblxuSFRUUFBhcnNlci5wcm90b3R5cGUuQk9EWV9DSFVOS0hFQUQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBsaW5lID0gdGhpcy5jb25zdW1lTGluZSgpO1xuICBpZiAobGluZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuYm9keV9ieXRlcyA9IHBhcnNlSW50KGxpbmUsIDE2KTtcbiAgaWYgKCF0aGlzLmJvZHlfYnl0ZXMpIHtcbiAgICB0aGlzLnN0YXRlID0gJ0JPRFlfQ0hVTktUUkFJTEVSUyc7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5zdGF0ZSA9ICdCT0RZX0NIVU5LJztcbiAgfVxufTtcblxuSFRUUFBhcnNlci5wcm90b3R5cGUuQk9EWV9DSFVOSyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGxlbmd0aCA9IE1hdGgubWluKHRoaXMuZW5kIC0gdGhpcy5vZmZzZXQsIHRoaXMuYm9keV9ieXRlcyk7XG4gIHRoaXMudXNlckNhbGwoKSh0aGlzW2tPbkJvZHldKHRoaXMuY2h1bmssIHRoaXMub2Zmc2V0LCBsZW5ndGgpKTtcbiAgdGhpcy5vZmZzZXQgKz0gbGVuZ3RoO1xuICB0aGlzLmJvZHlfYnl0ZXMgLT0gbGVuZ3RoO1xuICBpZiAoIXRoaXMuYm9keV9ieXRlcykge1xuICAgIHRoaXMuc3RhdGUgPSAnQk9EWV9DSFVOS0VNUFRZTElORSc7XG4gIH1cbn07XG5cbkhUVFBQYXJzZXIucHJvdG90eXBlLkJPRFlfQ0hVTktFTVBUWUxJTkUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBsaW5lID0gdGhpcy5jb25zdW1lTGluZSgpO1xuICBpZiAobGluZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGFzc2VydC5lcXVhbChsaW5lLCAnJyk7XG4gIHRoaXMuc3RhdGUgPSAnQk9EWV9DSFVOS0hFQUQnO1xufTtcblxuSFRUUFBhcnNlci5wcm90b3R5cGUuQk9EWV9DSFVOS1RSQUlMRVJTID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbGluZSA9IHRoaXMuY29uc3VtZUxpbmUoKTtcbiAgaWYgKGxpbmUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAobGluZSkge1xuICAgIHRoaXMucGFyc2VIZWFkZXIobGluZSwgdGhpcy50cmFpbGVycyk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHRoaXMudHJhaWxlcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnVzZXJDYWxsKCkodGhpc1trT25IZWFkZXJzXSh0aGlzLnRyYWlsZXJzLCAnJykpO1xuICAgIH1cbiAgICB0aGlzLm5leHRSZXF1ZXN0KCk7XG4gIH1cbn07XG5cbkhUVFBQYXJzZXIucHJvdG90eXBlLkJPRFlfUkFXID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbGVuZ3RoID0gdGhpcy5lbmQgLSB0aGlzLm9mZnNldDtcbiAgdGhpcy51c2VyQ2FsbCgpKHRoaXNba09uQm9keV0odGhpcy5jaHVuaywgdGhpcy5vZmZzZXQsIGxlbmd0aCkpO1xuICB0aGlzLm9mZnNldCA9IHRoaXMuZW5kO1xufTtcblxuSFRUUFBhcnNlci5wcm90b3R5cGUuQk9EWV9TSVpFRCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGxlbmd0aCA9IE1hdGgubWluKHRoaXMuZW5kIC0gdGhpcy5vZmZzZXQsIHRoaXMuYm9keV9ieXRlcyk7XG4gIHRoaXMudXNlckNhbGwoKSh0aGlzW2tPbkJvZHldKHRoaXMuY2h1bmssIHRoaXMub2Zmc2V0LCBsZW5ndGgpKTtcbiAgdGhpcy5vZmZzZXQgKz0gbGVuZ3RoO1xuICB0aGlzLmJvZHlfYnl0ZXMgLT0gbGVuZ3RoO1xuICBpZiAoIXRoaXMuYm9keV9ieXRlcykge1xuICAgIHRoaXMubmV4dFJlcXVlc3QoKTtcbiAgfVxufTtcblxuLy8gYmFja3dhcmQgY29tcGF0IHRvIG5vZGUgPCAwLjExLjZcblsnSGVhZGVycycsICdIZWFkZXJzQ29tcGxldGUnLCAnQm9keScsICdNZXNzYWdlQ29tcGxldGUnXS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciBrID0gSFRUUFBhcnNlclsna09uJyArIG5hbWVdO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSFRUUFBhcnNlci5wcm90b3R5cGUsICdvbicgKyBuYW1lLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpc1trXTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gKHRvKSB7XG4gICAgICAvLyBoYWNrIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG4gICAgICB0aGlzLl9jb21wYXRNb2RlMF8xMSA9IHRydWU7XG4gICAgICBtZXRob2RfY29ubmVjdCA9ICdDT05ORUNUJztcbiAgICAgIHJldHVybiAodGhpc1trXSA9IHRvKTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbmZ1bmN0aW9uIHBhcnNlRXJyb3JDb2RlKGNvZGUpIHtcbiAgdmFyIGVyciA9IG5ldyBFcnJvcignUGFyc2UgRXJyb3InKTtcbiAgZXJyLmNvZGUgPSBjb2RlO1xuICByZXR1cm4gZXJyO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/http-parser-js/http-parser.js\n");

/***/ })

};
;