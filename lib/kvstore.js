// Generated by IcedCoffeeScript 1.7.1-f
(function() {
  var BaseKvStore, E, iced, log, make_esc, __iced_k, __iced_k_noop;

  iced = require('iced-runtime');
  __iced_k = __iced_k_noop = function() {};

  log = require('iced-logger');

  E = require('./err').E;

  make_esc = require('iced-error').make_esc;

  BaseKvStore = (function() {
    function BaseKvStore() {
      this.lock = new Lock;
    }

    BaseKvStore.prototype.unimplemented = function(n, cb) {
      return cb(new Error("BaseKvStore::" + n + ": unimplemented"));
    };

    BaseKvStore.prototype.open = function(cb) {
      return this.unimplemented('open', cb);
    };

    BaseKvStore.prototype.nuke = function(cb) {
      return this.unimplemented('nuke', cb);
    };

    BaseKvStore.prototype.close = function(cb) {
      return this.unimplemented('close', cb);
    };

    BaseKvStore.prototype._put = function(_arg, cb) {
      var key, value;
      key = _arg.key, value = _arg.value;
      return this.unimplemented('_put', cb);
    };

    BaseKvStore.prototype._get = function(_arg, cb) {
      var key;
      key = _arg.key;
      return this.unimplemented("_get", cb);
    };

    BaseKvStore.prototype._resolve = function(_arg, cb) {
      var name;
      name = _arg.name;
      return this.unimplemented("_resolve", cb);
    };

    BaseKvStore.prototype._link = function(_arg, cb) {
      var key, name;
      name = _arg.name, key = _arg.key;
      return this.unimplemented('_link', cb);
    };

    BaseKvStore.prototype._unlink = function(_arg, cb) {
      var name;
      name = _arg.name;
      return this.unimplemented('_unlink', cb);
    };

    BaseKvStore.prototype._unlink_all = function(_arg, cb) {
      var key;
      key = _arg.key;
      return this.unimplemented('_unlink_all', cb);
    };

    BaseKvStore.prototype._remove = function(_arg, cb) {
      var key;
      key = _arg.key;
      return this.unimplemented('_remove', cb);
    };

    BaseKvStore.prototype.make_kvstore_key = function(_arg) {
      var key, type;
      type = _arg.type, key = _arg.key;
      return [type, key].join(":").toLowerCase();
    };

    BaseKvStore.prototype.make_lookup_name = function(_arg) {
      var name, type;
      type = _arg.type, name = _arg.name;
      return [type, name].join(":").toLowerCase();
    };

    BaseKvStore.prototype.link = function(_arg, cb) {
      var key, name, type;
      type = _arg.type, name = _arg.name, key = _arg.key;
      return this._link({
        name: this.make_lookup_name({
          type: type,
          name: name
        }),
        key: key
      }, cb);
    };

    BaseKvStore.prototype.unlink = function(_arg, cb) {
      var name, type;
      type = _arg.type, name = _arg.name;
      return this._unlink({
        name: this.make_lookup_name({
          type: type,
          name: name
        })
      }, cb);
    };

    BaseKvStore.prototype.unlink_all = function(_arg, cb) {
      var key, type;
      type = _arg.type, key = _arg.key;
      return this._unlink_all({
        key: this.make_kvstore_key({
          type: type,
          key: key
        })
      }, cb);
    };

    BaseKvStore.prototype.get = function(_arg, cb) {
      var key, type;
      type = _arg.type, key = _arg.key;
      return this._get({
        key: this.make_kvstore_key({
          type: type,
          key: key
        })
      }, cb);
    };

    BaseKvStore.prototype.resolve = function(_arg, cb) {
      var name, type;
      type = _arg.type, name = _arg.name;
      return this._resolve({
        name: this.make_lookup_name({
          type: type,
          name: name
        })
      }, cb);
    };

    BaseKvStore.prototype.put = function(_arg, cb) {
      var esc, key, kvsk, name, names, type, value, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      type = _arg.type, key = _arg.key, value = _arg.value, name = _arg.name, names = _arg.names;
      esc = make_esc(cb, "BaseKvStore::put");
      kvsk = this.make_kvstore_key({
        type: type,
        key: key
      });
      log.debug("+ KvStore::put " + key + "/" + kvsk);
      (function(_this) {
        return (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "/Users/max/src/keybase/libkeybase-js/src/kvstore.iced",
            funcname: "BaseKvStore.put"
          });
          _this._put({
            key: kvsk,
            value: value
          }, esc(__iced_deferrals.defer({
            lineno: 49
          })));
          __iced_deferrals._fulfill();
        });
      })(this)((function(_this) {
        return function() {
          log.debug("| hkey is " + hkey);
          if ((name != null) && (names == null)) {
            names = [name];
          }
          (function(__iced_k) {
            if (names && names.length) {
              (function(__iced_k) {
                var _i, _len, _ref, _results, _while;
                _ref = names;
                _len = _ref.length;
                _i = 0;
                _results = [];
                _while = function(__iced_k) {
                  var _break, _continue, _next;
                  _break = function() {
                    return __iced_k(_results);
                  };
                  _continue = function() {
                    return iced.trampoline(function() {
                      ++_i;
                      return _while(__iced_k);
                    });
                  };
                  _next = function(__iced_next_arg) {
                    _results.push(__iced_next_arg);
                    return _continue();
                  };
                  if (!(_i < _len)) {
                    return _break();
                  } else {
                    name = _ref[_i];
                    log.debug("| KvStore::link " + name + " -> " + key);
                    (function(__iced_k) {
                      __iced_deferrals = new iced.Deferrals(__iced_k, {
                        parent: ___iced_passed_deferral,
                        filename: "/Users/max/src/keybase/libkeybase-js/src/kvstore.iced",
                        funcname: "BaseKvStore.put"
                      });
                      _this.link({
                        type: type,
                        name: name,
                        key: kvsk
                      }, esc(__iced_deferrals.defer({
                        lineno: 55
                      })));
                      __iced_deferrals._fulfill();
                    })(_next);
                  }
                };
                _while(__iced_k);
              })(__iced_k);
            } else {
              return __iced_k();
            }
          })(function() {
            log.debug("- KvStore::put " + key + " -> ok");
            return cb(null);
          });
        };
      })(this));
    };

    BaseKvStore.prototype.remove = function(_arg, cb) {
      var err, k, key, optional, type, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      type = _arg.type, key = _arg.key, optional = _arg.optional;
      k = this.make_kvstore_key({
        type: type,
        key: key
      });
      log.debug("+ DB remove " + key + "/" + kvsk);
      (function(_this) {
        return (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "/Users/max/src/keybase/libkeybase-js/src/kvstore.iced",
            funcname: "BaseKvStore.remove"
          });
          _this._remove({
            key: k
          }, __iced_deferrals.defer({
            assign_fn: (function() {
              return function() {
                return err = arguments[0];
              };
            })(),
            lineno: 66
          }));
          __iced_deferrals._fulfill();
        });
      })(this)((function(_this) {
        return function() {
          if ((typeof err !== "undefined" && err !== null) && (err instanceof E.NotFoundError) && optional) {
            log.debug("| No object found for " + k);
            err = null;
          }
          (function(__iced_k) {
            if (err == null) {
              (function(__iced_k) {
                __iced_deferrals = new iced.Deferrals(__iced_k, {
                  parent: ___iced_passed_deferral,
                  filename: "/Users/max/src/keybase/libkeybase-js/src/kvstore.iced",
                  funcname: "BaseKvStore.remove"
                });
                _this._unlink_all({
                  type: type,
                  key: k
                }, __iced_deferrals.defer({
                  assign_fn: (function() {
                    return function() {
                      return err = arguments[0];
                    };
                  })(),
                  lineno: 71
                }));
                __iced_deferrals._fulfill();
              })(__iced_k);
            } else {
              return __iced_k();
            }
          })(function() {
            log.debug("- DB remove " + key + "/" + kvsk + " -> " + (err != null ? 'ok' : void 0));
            return cb(err);
          });
        };
      })(this));
    };

    BaseKvStore.prototype.lookup = function(_arg, cb) {
      var esc, key, name, type, value, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      type = _arg.type, name = _arg.name;
      esc = make_esc(cb, "BaseKvStore::lookup");
      (function(_this) {
        return (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "/Users/max/src/keybase/libkeybase-js/src/kvstore.iced",
            funcname: "BaseKvStore.lookup"
          });
          _this.resolve({
            name: name,
            type: type
          }, esc(__iced_deferrals.defer({
            assign_fn: (function() {
              return function() {
                return key = arguments[0];
              };
            })(),
            lineno: 80
          })));
          __iced_deferrals._fulfill();
        });
      })(this)((function(_this) {
        return function() {
          (function(__iced_k) {
            __iced_deferrals = new iced.Deferrals(__iced_k, {
              parent: ___iced_passed_deferral,
              filename: "/Users/max/src/keybase/libkeybase-js/src/kvstore.iced",
              funcname: "BaseKvStore.lookup"
            });
            _this._get({
              key: key
            }, esc(__iced_deferrals.defer({
              assign_fn: (function() {
                return function() {
                  return value = arguments[0];
                };
              })(),
              lineno: 81
            })));
            __iced_deferrals._fulfill();
          })(function() {
            return cb(null, value);
          });
        };
      })(this));
    };

    return BaseKvStore;

  })();

}).call(this);