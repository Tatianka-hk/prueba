{
    "name": "prueba",
    "version": "1.0.0",
    "lockfileVersion": 3,
    "requires": true,
    "packages": {
      "": {
        "name": "prueba",
        "version": "1.0.0",
        "license": "ISC",
        "dependencies": {
          "@electron/packager": "^18.3.2",
          "ejs": "^3.1.10",
          "electron": "^30.0.1",
          "express": "^4.19.2",
          "isomorphic-git": "^1.25.7"
        },
        "devDependencies": {
          "prettier": "^3.2.5"
        }
      },
      "node_modules/@electron/asar": {
        "version": "3.2.9",
        "resolved": "https://registry.npmjs.org/@electron/asar/-/asar-3.2.9.tgz",
        "integrity": "sha512-Vu2P3X2gcZ3MY9W7yH72X9+AMXwUQZEJBrsPIbX0JsdllLtoh62/Q8Wg370/DawIEVKOyfD6KtTLo645ezqxUA==",
        "dependencies": {
          "commander": "^5.0.0",
          "glob": "^7.1.6",
          "minimatch": "^3.0.4"
        },
        "bin": {
          "asar": "bin/asar.js"
        },
        "engines": {
          "node": ">=10.12.0"
        }
      },
      "node_modules/@electron/get": {
        "version": "2.0.3",
        "resolved": "https://registry.npmjs.org/@electron/get/-/get-2.0.3.tgz",
        "integrity": "sha512-Qkzpg2s9GnVV2I2BjRksUi43U5e6+zaQMcjoJy0C+C5oxaKl+fmckGDQFtRpZpZV0NQekuZZ+tGz7EA9TVnQtQ==",
        "dependencies": {
          "debug": "^4.1.1",
          "env-paths": "^2.2.0",
          "fs-extra": "^8.1.0",
          "got": "^11.8.5",
          "progress": "^2.0.3",
          "semver": "^6.2.0",
          "sumchecker": "^3.0.1"
        },
        "engines": {
          "node": ">=12"
        },
        "optionalDependencies": {
          "global-agent": "^3.0.0"
        }
      },
      "node_modules/@electron/get/node_modules/debug": {
        "version": "4.3.4",
        "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",
        "integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",
        "dependencies": {
          "ms": "2.1.2"
        },
        "engines": {
          "node": ">=6.0"
        },
        "peerDependenciesMeta": {
          "supports-color": {
            "optional": true
          }
        }
      },
      "node_modules/@electron/get/node_modules/ms": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
        "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
      },
      "node_modules/@electron/osx-sign": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/@electron/osx-sign/-/osx-sign-1.2.0.tgz",
        "integrity": "sha512-kOA3bAeDXFMj2JHj0R2fk/IT92qpu3tZHwM4l/PdksAuy7eA3/23QktCiAoQICwPdtxCYdt9ZLimKvnNyUpdSQ==",
        "dependencies": {
          "compare-version": "^0.1.2",
          "debug": "^4.3.4",
          "fs-extra": "^10.0.0",
          "isbinaryfile": "^4.0.8",
          "minimist": "^1.2.6",
          "plist": "^3.0.5"
        },
        "bin": {
          "electron-osx-flat": "bin/electron-osx-flat.js",
          "electron-osx-sign": "bin/electron-osx-sign.js"
        },
        "engines": {
          "node": ">=12.0.0"
        }
      },
      "node_modules/@electron/osx-sign/node_modules/debug": {
        "version": "4.3.4",
        "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",
        "integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",
        "dependencies": {
          "ms": "2.1.2"
        },
        "engines": {
          "node": ">=6.0"
        },
        "peerDependenciesMeta": {
          "supports-color": {
            "optional": true
          }
        }
      },
      "node_modules/@electron/osx-sign/node_modules/fs-extra": {
        "version": "10.1.0",
        "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-10.1.0.tgz",
        "integrity": "sha512-oRXApq54ETRj4eMiFzGnHWGy+zo5raudjuxN0b8H7s/RU2oW0Wvsx9O0ACRN/kRq9E8Vu/ReskGB5o3ji+FzHQ==",
        "dependencies": {
          "graceful-fs": "^4.2.0",
          "jsonfile": "^6.0.1",
          "universalify": "^2.0.0"
        },
        "engines": {
          "node": ">=12"
        }
      },
      "node_modules/@electron/osx-sign/node_modules/jsonfile": {
        "version": "6.1.0",
        "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-6.1.0.tgz",
        "integrity": "sha512-5dgndWOriYSm5cnYaJNhalLNDKOqFwyDB/rr1E9ZsGciGvKPs8R2xYGCacuf3z6K1YKDz182fd+fY3cn3pMqXQ==",
        "dependencies": {
          "universalify": "^2.0.0"
        },
        "optionalDependencies": {
          "graceful-fs": "^4.1.6"
        }
      },
      "node_modules/@electron/osx-sign/node_modules/ms": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
        "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
      },
      "node_modules/@electron/osx-sign/node_modules/universalify": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/universalify/-/universalify-2.0.1.tgz",
        "integrity": "sha512-gptHNQghINnc/vTGIk0SOFGFNXw7JVrlRUtConJRlvaw6DuX0wO5Jeko9sWrMBhh+PsYAZ7oXAiOnf/UKogyiw==",
        "engines": {
          "node": ">= 10.0.0"
        }
      },
      "node_modules/@electron/packager": {
        "version": "18.3.2",
        "resolved": "https://registry.npmjs.org/@electron/packager/-/packager-18.3.2.tgz",
        "integrity": "sha512-orjylavppgIh24qkNpWm2B/LQUpCS/YLOoKoU+eMK/hJgIhShLDsusPIQzgUGVwNCichu8/zPAGfdQZXHG0gtw==",
        "dependencies": {
          "@electron/asar": "^3.2.1",
          "@electron/get": "^3.0.0",
          "@electron/notarize": "^2.1.0",
          "@electron/osx-sign": "^1.0.5",
          "@electron/universal": "^2.0.1",
          "@electron/windows-sign": "^1.0.0",
          "debug": "^4.0.1",
          "extract-zip": "^2.0.0",
          "filenamify": "^4.1.0",
          "fs-extra": "^11.1.0",
          "galactus": "^1.0.0",
          "get-package-info": "^1.0.0",
          "junk": "^3.1.0",
          "parse-author": "^2.0.0",
          "plist": "^3.0.0",
          "resedit": "^2.0.0",
          "resolve": "^1.1.6",
          "semver": "^7.1.3",
          "yargs-parser": "^21.1.1"
        },
        "bin": {
          "electron-packager": "bin/electron-packager.js"
        },
        "engines": {
          "node": ">= 16.13.0"
        },
        "funding": {
          "url": "https://github.com/electron/packager?sponsor=1"
        }
      },
      "node_modules/@electron/packager/node_modules/@electron/get": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/@electron/get/-/get-3.0.0.tgz",
        "integrity": "sha512-hLv4BYFiyrNRI+U0Mm2X7RxCCdJLkDUn8GCEp9QJzbLpZRko+UaLlCjOMkj6TEtirNLPyBA7y1SeGfnpOB21aQ==",
        "dependencies": {
          "debug": "^4.1.1",
          "env-paths": "^2.2.0",
          "fs-extra": "^8.1.0",
          "got": "^11.8.5",
          "progress": "^2.0.3",
          "semver": "^6.2.0",
          "sumchecker": "^3.0.1"
        },
        "engines": {
          "node": ">=14"
        },
        "optionalDependencies": {
          "global-agent": "^3.0.0"
        }
      },
      "node_modules/@electron/packager/node_modules/@electron/get/node_modules/fs-extra": {
        "version": "8.1.0",
        "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-8.1.0.tgz",
        "integrity": "sha512-yhlQgA6mnOJUKOsRUFsgJdQCvkKhcz8tlZG5HBQfReYZy46OwLcY+Zia0mtdHsOo9y/hP+CxMN0TU9QxoOtG4g==",
        "dependencies": {
          "graceful-fs": "^4.2.0",
          "jsonfile": "^4.0.0",
          "universalify": "^0.1.0"
        },
        "engines": {
          "node": ">=6 <7 || >=8"
        }
      },
      "node_modules/@electron/packager/node_modules/@electron/get/node_modules/semver": {
        "version": "6.3.1",
        "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
        "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
        "bin": {
          "semver": "bin/semver.js"
        }
      },
      "node_modules/@electron/packager/node_modules/@electron/notarize": {
        "version": "2.3.0",
        "resolved": "https://registry.npmjs.org/@electron/notarize/-/notarize-2.3.0.tgz",
        "integrity": "sha512-EiTBU0BwE7HZZjAG1fFWQaiQpCuPrVGn7jPss1kUjD6eTTdXXd29RiZqEqkgN7xqt/Pgn4g3I7Saqovanrfj3w==",
        "dependencies": {
          "debug": "^4.1.1",
          "fs-extra": "^9.0.1",
          "promise-retry": "^2.0.1"
        },
        "engines": {
          "node": ">= 10.0.0"
        }
      },
      "node_modules/@electron/packager/node_modules/@electron/notarize/node_modules/fs-extra": {
        "version": "9.1.0",
        "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-9.1.0.tgz",
        "integrity": "sha512-hcg3ZmepS30/7BSFqRvoo3DOMQu7IjqxO5nCDt+zM9XWjb33Wg7ziNT+Qvqbuc3+gWpzO02JubVyk2G4Zvo1OQ==",
        "dependencies": {
          "at-least-node": "^1.0.0",
          "graceful-fs": "^4.2.0",
          "jsonfile": "^6.0.1",
          "universalify": "^2.0.0"
        },
        "engines": {
          "node": ">=10"
        }
      },
      "node_modules/@electron/packager/node_modules/@electron/notarize/node_modules/jsonfile": {
        "version": "6.1.0",
        "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-6.1.0.tgz",
        "integrity": "sha512-5dgndWOriYSm5cnYaJNhalLNDKOqFwyDB/rr1E9ZsGciGvKPs8R2xYGCacuf3z6K1YKDz182fd+fY3cn3pMqXQ==",
        "dependencies": {
          "universalify": "^2.0.0"
        },
        "optionalDependencies": {
          "graceful-fs": "^4.1.6"
        }
      },
      "node_modules/@electron/packager/node_modules/@electron/notarize/node_modules/universalify": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/universalify/-/universalify-2.0.1.tgz",
        "integrity": "sha512-gptHNQghINnc/vTGIk0SOFGFNXw7JVrlRUtConJRlvaw6DuX0wO5Jeko9sWrMBhh+PsYAZ7oXAiOnf/UKogyiw==",
        "engines": {
          "node": ">= 10.0.0"
        }
      },
      "node_modules/@electron/packager/node_modules/@electron/universal": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/@electron/universal/-/universal-2.0.1.tgz",
        "integrity": "sha512-fKpv9kg4SPmt+hY7SVBnIYULE9QJl8L3sCfcBsnqbJwwBwAeTLokJ9TRt9y7bK0JAzIW2y78TVVjvnQEms/yyA==",
        "dependencies": {
          "@electron/asar": "^3.2.7",
          "@malept/cross-spawn-promise": "^2.0.0",
          "debug": "^4.3.1",
          "dir-compare": "^4.2.0",
          "fs-extra": "^11.1.1",
          "minimatch": "^9.0.3",
          "plist": "^3.1.0"
        },
        "engines": {
          "node": ">=16.4"
        }
      },
      "node_modules/@electron/packager/node_modules/@electron/universal/node_modules/minimatch": {
        "version": "9.0.4",
        "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-9.0.4.tgz",
        "integrity": "sha512-KqWh+VchfxcMNRAJjj2tnsSJdNbHsVgnkBhTNrW7AjVo6OvLtxw8zfT9oLw1JSohlFzJ8jCoTgaoXvJ+kHt6fw==",
        "dependencies": {
          "brace-expansion": "^2.0.1"
        },
        "engines": {
          "node": ">=16 || 14 >=14.17"
        },
        "funding": {
          "url": "https://github.com/sponsors/isaacs"
        }
      },
      "node_modules/@electron/packager/node_modules/@malept/cross-spawn-promise": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/@malept/cross-spawn-promise/-/cross-spawn-promise-2.0.0.tgz",
        "integrity": "sha512-1DpKU0Z5ThltBwjNySMC14g0CkbyhCaz9FkhxqNsZI6uAPJXFS8cMXlBKo26FJ8ZuW6S9GCMcR9IO5k2X5/9Fg==",
        "funding": [
          {
            "type": "individual",
            "url": "https://github.com/sponsors/malept"
          },
          {
            "type": "tidelift",
            "url": "https://tidelift.com/subscription/pkg/npm-.malept-cross-spawn-promise?utm_medium=referral&utm_source=npm_fund"
          }
        ],
        "dependencies": {
          "cross-spawn": "^7.0.1"
        },
        "engines": {
          "node": ">= 12.13.0"
        }
      },
      "node_modules/@electron/packager/node_modules/brace-expansion": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.1.tgz",
        "integrity": "sha512-XnAIvQ8eM+kC6aULx6wuQiwVsnzsi9d3WxzV3FpWTGA19F621kwdbsAcFKXgKUHZWsy+mY6iL1sHTxWEFCytDA==",
        "dependencies": {
          "balanced-match": "^1.0.0"
        }
      },
      "node_modules/@electron/packager/node_modules/debug": {
        "version": "4.3.4",
        "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",
        "integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",
        "dependencies": {
          "ms": "2.1.2"
        },
        "engines": {
          "node": ">=6.0"
        },
        "peerDependenciesMeta": {
          "supports-color": {
            "optional": true
          }
        }
      },
      "node_modules/@electron/packager/node_modules/dir-compare": {
        "version": "4.2.0",
        "resolved": "https://registry.npmjs.org/dir-compare/-/dir-compare-4.2.0.tgz",
        "integrity": "sha512-2xMCmOoMrdQIPHdsTawECdNPwlVFB9zGcz3kuhmBO6U3oU+UQjsue0i8ayLKpgBcm+hcXPMVSGUN9d+pvJ6+VQ==",
        "dependencies": {
          "minimatch": "^3.0.5",
          "p-limit": "^3.1.0 "
        }
      },
      "node_modules/@electron/packager/node_modules/fs-extra": {
        "version": "11.2.0",
        "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-11.2.0.tgz",
        "integrity": "sha512-PmDi3uwK5nFuXh7XDTlVnS17xJS7vW36is2+w3xcv8SVxiB4NyATf4ctkVY5bkSjX0Y4nbvZCq1/EjtEyr9ktw==",
        "dependencies": {
          "graceful-fs": "^4.2.0",
          "jsonfile": "^6.0.1",
          "universalify": "^2.0.0"
        },
        "engines": {
          "node": ">=14.14"
        }
      },
      "node_modules/@electron/packager/node_modules/fs-extra/node_modules/jsonfile": {
        "version": "6.1.0",
        "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-6.1.0.tgz",
        "integrity": "sha512-5dgndWOriYSm5cnYaJNhalLNDKOqFwyDB/rr1E9ZsGciGvKPs8R2xYGCacuf3z6K1YKDz182fd+fY3cn3pMqXQ==",
        "dependencies": {
          "universalify": "^2.0.0"
        },
        "optionalDependencies": {
          "graceful-fs": "^4.1.6"
        }
      },
      "node_modules/@electron/packager/node_modules/fs-extra/node_modules/universalify": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/universalify/-/universalify-2.0.1.tgz",
        "integrity": "sha512-gptHNQghINnc/vTGIk0SOFGFNXw7JVrlRUtConJRlvaw6DuX0wO5Jeko9sWrMBhh+PsYAZ7oXAiOnf/UKogyiw==",
        "engines": {
          "node": ">= 10.0.0"
        }
      },
      "node_modules/@electron/packager/node_modules/ms": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
        "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
      },
      "node_modules/@electron/packager/node_modules/p-limit": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
        "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
        "dependencies": {
          "yocto-queue": "^0.1.0"
        },
        "engines": {
          "node": ">=10"
        },
        "funding": {
          "url": "https://github.com/sponsors/sindresorhus"
        }
      },
      "node_modules/@electron/packager/node_modules/semver": {
        "version": "7.6.0",
        "resolved": "https://registry.npmjs.org/semver/-/semver-7.6.0.tgz",
        "integrity": "sha512-EnwXhrlwXMk9gKu5/flx5sv/an57AkRplG3hTK68W7FRDN+k+OWBj65M7719OkA82XLBxrcX0KSHj+X5COhOVg==",
        "dependencies": {
          "lru-cache": "^6.0.0"
        },
        "bin": {
          "semver": "bin/semver.js"
        },
        "engines": {
          "node": ">=10"
        }
      },
      "node_modules/@electron/windows-sign": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/@electron/windows-sign/-/windows-sign-1.1.2.tgz",
        "integrity": "sha512-eXEiZjDtxW3QORCWfRUarANPRTlH9B6At4jqBZJ0NzokSGutXQUVLPA6WmGpIhDW6w2yCMdHW1EJd1HrXtU5sg==",
        "dependencies": {
          "cross-dirname": "^0.1.0",
          "debug": "^4.3.4",
          "fs-extra": "^11.1.1",
          "minimist": "^1.2.8",
          "postject": "^1.0.0-alpha.6"
        },
        "bin": {
          "electron-windows-sign": "bin/electron-windows-sign.js"
        },
        "engines": {
          "node": ">=14.14"
        }
      },
      "node_modules/@electron/windows-sign/node_modules/debug": {
        "version": "4.3.4",
        "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",
        "integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",
        "dependencies": {
          "ms": "2.1.2"
        },
        "engines": {
          "node": ">=6.0"
        },
        "peerDependenciesMeta": {
          "supports-color": {
            "optional": true
          }
        }
      },
      "node_modules/@electron/windows-sign/node_modules/fs-extra": {
        "version": "11.2.0",
        "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-11.2.0.tgz",
        "integrity": "sha512-PmDi3uwK5nFuXh7XDTlVnS17xJS7vW36is2+w3xcv8SVxiB4NyATf4ctkVY5bkSjX0Y4nbvZCq1/EjtEyr9ktw==",
        "dependencies": {
          "graceful-fs": "^4.2.0",
          "jsonfile": "^6.0.1",
          "universalify": "^2.0.0"
        },
        "engines": {
          "node": ">=14.14"
        }
      },
      "node_modules/@electron/windows-sign/node_modules/jsonfile": {
        "version": "6.1.0",
        "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-6.1.0.tgz",
        "integrity": "sha512-5dgndWOriYSm5cnYaJNhalLNDKOqFwyDB/rr1E9ZsGciGvKPs8R2xYGCacuf3z6K1YKDz182fd+fY3cn3pMqXQ==",
        "dependencies": {
          "universalify": "^2.0.0"
        },
        "optionalDependencies": {
          "graceful-fs": "^4.1.6"
        }
      },
      "node_modules/@electron/windows-sign/node_modules/ms": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
        "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
      },
      "node_modules/@electron/windows-sign/node_modules/universalify": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/universalify/-/universalify-2.0.1.tgz",
        "integrity": "sha512-gptHNQghINnc/vTGIk0SOFGFNXw7JVrlRUtConJRlvaw6DuX0wO5Jeko9sWrMBhh+PsYAZ7oXAiOnf/UKogyiw==",
        "engines": {
          "node": ">= 10.0.0"
        }
      },
      "node_modules/@sindresorhus/is": {
        "version": "4.6.0",
        "resolved": "https://registry.npmjs.org/@sindresorhus/is/-/is-4.6.0.tgz",
        "integrity": "sha512-t09vSN3MdfsyCHoFcTRCH/iUtG7OJ0CsjzB8cjAmKc/va/kIgeDI/TxsigdncE/4be734m0cvIYwNaV4i2XqAw==",
        "engines": {
          "node": ">=10"
        },
        "funding": {
          "url": "https://github.com/sindresorhus/is?sponsor=1"
        }
      },
      "node_modules/@szmarczak/http-timer": {
        "version": "4.0.6",
        "resolved": "https://registry.npmjs.org/@szmarczak/http-timer/-/http-timer-4.0.6.tgz",
        "integrity": "sha512-4BAffykYOgO+5nzBWYwE3W90sBgLJoUPRWWcL8wlyiM8IB8ipJz3UMJ9KXQd1RKQXpKp8Tutn80HZtWsu2u76w==",
        "dependencies": {
          "defer-to-connect": "^2.0.0"
        },
        "engines": {
          "node": ">=10"
        }
      },
      "node_modules/@types/cacheable-request": {
        "version": "6.0.3",
        "resolved": "https://registry.npmjs.org/@types/cacheable-request/-/cacheable-request-6.0.3.tgz",
        "integrity": "sha512-IQ3EbTzGxIigb1I3qPZc1rWJnH0BmSKv5QYTalEwweFvyBDLSAe24zP0le/hyi7ecGfZVlIVAg4BZqb8WBwKqw==",
        "dependencies": {
          "@types/http-cache-semantics": "*",
          "@types/keyv": "^3.1.4",
          "@types/node": "*",
          "@types/responselike": "^1.0.0"
        }
      },
      "node_modules/@types/http-cache-semantics": {
        "version": "4.0.4",
        "resolved": "https://registry.npmjs.org/@types/http-cache-semantics/-/http-cache-semantics-4.0.4.tgz",
        "integrity": "sha512-1m0bIFVc7eJWyve9S0RnuRgcQqF/Xd5QsUZAZeQFr1Q3/p9JWoQQEqmVy+DPTNpGXwhgIetAoYF8JSc33q29QA=="
      },
      "node_modules/@types/keyv": {
        "version": "3.1.4",
        "resolved": "https://registry.npmjs.org/@types/keyv/-/keyv-3.1.4.tgz",
        "integrity": "sha512-BQ5aZNSCpj7D6K2ksrRCTmKRLEpnPvWDiLPfoGyhZ++8YtiK9d/3DBKPJgry359X/P1PfruyYwvnvwFjuEiEIg==",
        "dependencies": {
          "@types/node": "*"
        }
      },
      "node_modules/@types/node": {
        "version": "20.12.7",
        "resolved": "https://registry.npmjs.org/@types/node/-/node-20.12.7.tgz",
        "integrity": "sha512-wq0cICSkRLVaf3UGLMGItu/PtdY7oaXaI/RVU+xliKVOtRna3PRY57ZDfztpDL0n11vfymMUnXv8QwYCO7L1wg==",
        "dependencies": {
          "undici-types": "~5.26.4"
        }
      },
      "node_modules/@types/responselike": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/@types/responselike/-/responselike-1.0.3.tgz",
        "integrity": "sha512-H/+L+UkTV33uf49PH5pCAUBVPNj2nDBXTN+qS1dOwyyg24l3CcicicCA7ca+HMvJBZcFgl5r8e+RR6elsb4Lyw==",
        "dependencies": {
          "@types/node": "*"
        }
      },
      "node_modules/@types/yauzl": {
        "version": "2.10.3",
        "resolved": "https://registry.npmjs.org/@types/yauzl/-/yauzl-2.10.3.tgz",
        "integrity": "sha512-oJoftv0LSuaDZE3Le4DbKX+KS9G36NzOeSap90UIK0yMA/NhKJhqlSGtNDORNRaIbQfzjXDrQa0ytJ6mNRGz/Q==",
        "optional": true,
        "dependencies": {
          "@types/node": "*"
        }
      },
      "node_modules/@xmldom/xmldom": {
        "version": "0.8.10",
        "resolved": "https://registry.npmjs.org/@xmldom/xmldom/-/xmldom-0.8.10.tgz",
        "integrity": "sha512-2WALfTl4xo2SkGCYRt6rDTFfk9R1czmBvUQy12gK2KuRKIpWEhcbbzy8EZXtz/jkRqHX8bFEc6FC1HjX4TUWYw==",
        "engines": {
          "node": ">=10.0.0"
        }
      },
      "node_modules/accepts": {
        "version": "1.3.8",
        "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.8.tgz",
        "integrity": "sha512-PYAthTa2m2VKxuvSD3DPC/Gy+U+sOA1LAuT8mkmRuvw+NACSaeXEQ+NHcVF7rONl6qcaxV3Uuemwawk+7+SJLw==",
        "dependencies": {
          "mime-types": "~2.1.34",
          "negotiator": "0.6.3"
        },
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/ansi-styles": {
        "version": "4.3.0",
        "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
        "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
        "dependencies": {
          "color-convert": "^2.0.1"
        },
        "engines": {
          "node": ">=8"
        },
        "funding": {
          "url": "https://github.com/chalk/ansi-styles?sponsor=1"
        }
      },
      "node_modules/array-flatten": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",
        "integrity": "sha512-PCVAQswWemu6UdxsDFFX/+gVeYqKAod3D3UVm91jHwynguOwAvYPhx8nNlM++NqRcK6CxxpUafjmhIdKiHibqg=="
      },
      "node_modules/async": {
        "version": "3.2.5",
        "resolved": "https://registry.npmjs.org/async/-/async-3.2.5.tgz",
        "integrity": "sha512-baNZyqaaLhyLVKm/DlvdW051MSgO6b8eVfIezl9E5PqWxFgzLm/wQntEW4zOytVburDEr0JlALEpdOFwvErLsg=="
      },
      "node_modules/async-lock": {
        "version": "1.4.1",
        "resolved": "https://registry.npmjs.org/async-lock/-/async-lock-1.4.1.tgz",
        "integrity": "sha512-Az2ZTpuytrtqENulXwO3GGv1Bztugx6TT37NIo7imr/Qo0gsYiGtSdBa2B6fsXhTpVZDNfu1Qn3pk531e3q+nQ=="
      },
      "node_modules/at-least-node": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/at-least-node/-/at-least-node-1.0.0.tgz",
        "integrity": "sha512-+q/t7Ekv1EDY2l6Gda6LLiX14rU9TV20Wa3ofeQmwPFZbOMo9DXrLbOjFaaclkXKWidIaopwAObQDqwWtGUjqg==",
        "engines": {
          "node": ">= 4.0.0"
        }
      },
      "node_modules/author-regex": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/author-regex/-/author-regex-1.0.0.tgz",
        "integrity": "sha512-KbWgR8wOYRAPekEmMXrYYdc7BRyhn2Ftk7KWfMUnQ43hFdojWEFRxhhRUm3/OFEdPa1r0KAvTTg9YQK57xTe0g==",
        "engines": {
          "node": ">=0.8"
        }
      },
      "node_modules/balanced-match": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
        "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw=="
      },
      "node_modules/base64-js": {
        "version": "1.5.1",
        "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.5.1.tgz",
        "integrity": "sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA==",
        "funding": [
          {
            "type": "github",
            "url": "https://github.com/sponsors/feross"
          },
          {
            "type": "patreon",
            "url": "https://www.patreon.com/feross"
          },
          {
            "type": "consulting",
            "url": "https://feross.org/support"
          }
        ]
      },
      "node_modules/bluebird": {
        "version": "3.7.2",
        "resolved": "https://registry.npmjs.org/bluebird/-/bluebird-3.7.2.tgz",
        "integrity": "sha512-XpNj6GDQzdfW+r2Wnn7xiSAd7TM3jzkxGXBGTtWKuSXv1xUV+azxAm8jdWZN06QTQk+2N2XB9jRDkvbmQmcRtg=="
      },
      "node_modules/body-parser": {
        "version": "1.20.2",
        "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.20.2.tgz",
        "integrity": "sha512-ml9pReCu3M61kGlqoTm2umSXTlRTuGTx0bfYj+uIUKKYycG5NtSbeetV3faSU6R7ajOPw0g/J1PvK4qNy7s5bA==",
        "dependencies": {
          "bytes": "3.1.2",
          "content-type": "~1.0.5",
          "debug": "2.6.9",
          "depd": "2.0.0",
          "destroy": "1.2.0",
          "http-errors": "2.0.0",
          "iconv-lite": "0.4.24",
          "on-finished": "2.4.1",
          "qs": "6.11.0",
          "raw-body": "2.5.2",
          "type-is": "~1.6.18",
          "unpipe": "1.0.0"
        },
        "engines": {
          "node": ">= 0.8",
          "npm": "1.2.8000 || >= 1.4.16"
        }
      },
      "node_modules/boolean": {
        "version": "3.2.0",
        "resolved": "https://registry.npmjs.org/boolean/-/boolean-3.2.0.tgz",
        "integrity": "sha512-d0II/GO9uf9lfUHH2BQsjxzRJZBdsjgsBiW4BvhWk/3qoKwQFjIDVN19PfX8F2D/r9PCMTtLWjYVCFrpeYUzsw==",
        "optional": true
      },
      "node_modules/brace-expansion": {
        "version": "1.1.11",
        "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
        "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
        "dependencies": {
          "balanced-match": "^1.0.0",
          "concat-map": "0.0.1"
        }
      },
      "node_modules/buffer-crc32": {
        "version": "0.2.13",
        "resolved": "https://registry.npmjs.org/buffer-crc32/-/buffer-crc32-0.2.13.tgz",
        "integrity": "sha512-VO9Ht/+p3SN7SKWqcrgEzjGbRSJYTx+Q1pTQC0wrWqHx0vpJraQ6GtHx8tvcg1rlK1byhU5gccxgOgj7B0TDkQ==",
        "engines": {
          "node": "*"
        }
      },
      "node_modules/bytes": {
        "version": "3.1.2",
        "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
        "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==",
        "engines": {
          "node": ">= 0.8"
        }
      },
      "node_modules/cacheable-lookup": {
        "version": "5.0.4",
        "resolved": "https://registry.npmjs.org/cacheable-lookup/-/cacheable-lookup-5.0.4.tgz",
        "integrity": "sha512-2/kNscPhpcxrOigMZzbiWF7dz8ilhb/nIHU3EyZiXWXpeq/au8qJ8VhdftMkty3n7Gj6HIGalQG8oiBNB3AJgA==",
        "engines": {
          "node": ">=10.6.0"
        }
      },
      "node_modules/cacheable-request": {
        "version": "7.0.4",
        "resolved": "https://registry.npmjs.org/cacheable-request/-/cacheable-request-7.0.4.tgz",
        "integrity": "sha512-v+p6ongsrp0yTGbJXjgxPow2+DL93DASP4kXCDKb8/bwRtt9OEF3whggkkDkGNzgcWy2XaF4a8nZglC7uElscg==",
        "dependencies": {
          "clone-response": "^1.0.2",
          "get-stream": "^5.1.0",
          "http-cache-semantics": "^4.0.0",
          "keyv": "^4.0.0",
          "lowercase-keys": "^2.0.0",
          "normalize-url": "^6.0.1",
          "responselike": "^2.0.0"
        },
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/call-bind": {
        "version": "1.0.7",
        "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.7.tgz",
        "integrity": "sha512-GHTSNSYICQ7scH7sZ+M2rFopRoLh8t2bLSW6BbgrtLsahOIB5iyAVJf9GjWK3cYTDaMj4XdBpM1cA6pIS0Kv2w==",
        "dependencies": {
          "es-define-property": "^1.0.0",
          "es-errors": "^1.3.0",
          "function-bind": "^1.1.2",
          "get-intrinsic": "^1.2.4",
          "set-function-length": "^1.2.1"
        },
        "engines": {
          "node": ">= 0.4"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/chalk": {
        "version": "4.1.2",
        "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
        "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
        "dependencies": {
          "ansi-styles": "^4.1.0",
          "supports-color": "^7.1.0"
        },
        "engines": {
          "node": ">=10"
        },
        "funding": {
          "url": "https://github.com/chalk/chalk?sponsor=1"
        }
      },
      "node_modules/clean-git-ref": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/clean-git-ref/-/clean-git-ref-2.0.1.tgz",
        "integrity": "sha512-bLSptAy2P0s6hU4PzuIMKmMJJSE6gLXGH1cntDu7bWJUksvuM+7ReOK61mozULErYvP6a15rnYl0zFDef+pyPw=="
      },
      "node_modules/clone-response": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/clone-response/-/clone-response-1.0.3.tgz",
        "integrity": "sha512-ROoL94jJH2dUVML2Y/5PEDNaSHgeOdSDicUyS7izcF63G6sTc/FTjLub4b8Il9S8S0beOfYt0TaA5qvFK+w0wA==",
        "dependencies": {
          "mimic-response": "^1.0.0"
        },
        "funding": {
          "url": "https://github.com/sponsors/sindresorhus"
        }
      },
      "node_modules/color-convert": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
        "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
        "dependencies": {
          "color-name": "~1.1.4"
        },
        "engines": {
          "node": ">=7.0.0"
        }
      },
      "node_modules/color-name": {
        "version": "1.1.4",
        "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
        "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
      },
      "node_modules/commander": {
        "version": "5.1.0",
        "resolved": "https://registry.npmjs.org/commander/-/commander-5.1.0.tgz",
        "integrity": "sha512-P0CysNDQ7rtVw4QIQtm+MRxV66vKFSvlsQvGYXZWR3qFU0jlMKHZZZgw8e+8DSah4UDKMqnknRDQz+xuQXQ/Zg==",
        "engines": {
          "node": ">= 6"
        }
      },
      "node_modules/compare-version": {
        "version": "0.1.2",
        "resolved": "https://registry.npmjs.org/compare-version/-/compare-version-0.1.2.tgz",
        "integrity": "sha512-pJDh5/4wrEnXX/VWRZvruAGHkzKdr46z11OlTPN+VrATlWWhSKewNCJ1futCO5C7eJB3nPMFZA1LeYtcFboZ2A==",
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/concat-map": {
        "version": "0.0.1",
        "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
        "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg=="
      },
      "node_modules/content-disposition": {
        "version": "0.5.4",
        "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.4.tgz",
        "integrity": "sha512-FveZTNuGw04cxlAiWbzi6zTAL/lhehaWbTtgluJh4/E95DqMwTmha3KZN1aAWA8cFIhHzMZUvLevkw5Rqk+tSQ==",
        "dependencies": {
          "safe-buffer": "5.2.1"
        },
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/content-type": {
        "version": "1.0.5",
        "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.5.tgz",
        "integrity": "sha512-nTjqfcBFEipKdXCv4YDQWCfmcLZKm81ldF0pAopTvyrFGVbcR6P/VAAd5G7N+0tTr8QqiU0tFadD6FK4NtJwOA==",
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/cookie": {
        "version": "0.6.0",
        "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.6.0.tgz",
        "integrity": "sha512-U71cyTamuh1CRNCfpGY6to28lxvNwPG4Guz/EVjgf3Jmzv0vlDp1atT9eS5dDjMYHucpHbWns6Lwf3BKz6svdw==",
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/cookie-signature": {
        "version": "1.0.6",
        "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz",
        "integrity": "sha512-QADzlaHc8icV8I7vbaJXJwod9HWYp8uCqf1xa4OfNu1T7JVxQIrUgOWtHdNDtPiywmFbiS12VjotIXLrKM3orQ=="
      },
      "node_modules/crc-32": {
        "version": "1.2.2",
        "resolved": "https://registry.npmjs.org/crc-32/-/crc-32-1.2.2.tgz",
        "integrity": "sha512-ROmzCKrTnOwybPcJApAA6WBWij23HVfGVNKqqrZpuyZOHqK2CwHSvpGuyt/UNNvaIjEd8X5IFGp4Mh+Ie1IHJQ==",
        "bin": {
          "crc32": "bin/crc32.njs"
        },
        "engines": {
          "node": ">=0.8"
        }
      },
      "node_modules/cross-dirname": {
        "version": "0.1.0",
        "resolved": "https://registry.npmjs.org/cross-dirname/-/cross-dirname-0.1.0.tgz",
        "integrity": "sha512-+R08/oI0nl3vfPcqftZRpytksBXDzOUveBq/NBVx0sUp1axwzPQrKinNx5yd5sxPu8j1wIy8AfnVQ+5eFdha6Q=="
      },
      "node_modules/cross-spawn": {
        "version": "7.0.3",
        "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.3.tgz",
        "integrity": "sha512-iRDPJKUPVEND7dHPO8rkbOnPpyDygcDFtWjpeWNCgy8WP2rXcxXL8TskReQl6OrB2G7+UJrags1q15Fudc7G6w==",
        "dependencies": {
          "path-key": "^3.1.0",
          "shebang-command": "^2.0.0",
          "which": "^2.0.1"
        },
        "engines": {
          "node": ">= 8"
        }
      },
      "node_modules/debug": {
        "version": "2.6.9",
        "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
        "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
        "dependencies": {
          "ms": "2.0.0"
        }
      },
      "node_modules/decompress-response": {
        "version": "6.0.0",
        "resolved": "https://registry.npmjs.org/decompress-response/-/decompress-response-6.0.0.tgz",
        "integrity": "sha512-aW35yZM6Bb/4oJlZncMH2LCoZtJXTRxES17vE3hoRiowU2kWHaJKFkSBDnDR+cm9J+9QhXmREyIfv0pji9ejCQ==",
        "dependencies": {
          "mimic-response": "^3.1.0"
        },
        "engines": {
          "node": ">=10"
        },
        "funding": {
          "url": "https://github.com/sponsors/sindresorhus"
        }
      },
      "node_modules/decompress-response/node_modules/mimic-response": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/mimic-response/-/mimic-response-3.1.0.tgz",
        "integrity": "sha512-z0yWI+4FDrrweS8Zmt4Ej5HdJmky15+L2e6Wgn3+iK5fWzb6T3fhNFq2+MeTRb064c6Wr4N/wv0DzQTjNzHNGQ==",
        "engines": {
          "node": ">=10"
        },
        "funding": {
          "url": "https://github.com/sponsors/sindresorhus"
        }
      },
      "node_modules/defer-to-connect": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/defer-to-connect/-/defer-to-connect-2.0.1.tgz",
        "integrity": "sha512-4tvttepXG1VaYGrRibk5EwJd1t4udunSOVMdLSAL6mId1ix438oPwPZMALY41FCijukO1L0twNcGsdzS7dHgDg==",
        "engines": {
          "node": ">=10"
        }
      },
      "node_modules/define-data-property": {
        "version": "1.1.4",
        "resolved": "https://registry.npmjs.org/define-data-property/-/define-data-property-1.1.4.tgz",
        "integrity": "sha512-rBMvIzlpA8v6E+SJZoo++HAYqsLrkg7MSfIinMPFhmkorw7X+dOXVJQs+QT69zGkzMyfDnIMN2Wid1+NbL3T+A==",
        "dependencies": {
          "es-define-property": "^1.0.0",
          "es-errors": "^1.3.0",
          "gopd": "^1.0.1"
        },
        "engines": {
          "node": ">= 0.4"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/define-properties": {
        "version": "1.2.1",
        "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.2.1.tgz",
        "integrity": "sha512-8QmQKqEASLd5nx0U1B1okLElbUuuttJ/AnYmRXbbbGDWh6uS208EjD4Xqq/I9wK7u0v6O08XhTWnt5XtEbR6Dg==",
        "optional": true,
        "dependencies": {
          "define-data-property": "^1.0.1",
          "has-property-descriptors": "^1.0.0",
          "object-keys": "^1.1.1"
        },
        "engines": {
          "node": ">= 0.4"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/depd": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
        "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",
        "engines": {
          "node": ">= 0.8"
        }
      },
      "node_modules/destroy": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.2.0.tgz",
        "integrity": "sha512-2sJGJTaXIIaR1w4iJSNoN0hnMY7Gpc/n8D4qSCJw8QqFWXf7cuAgnEHxBpweaVcPevC2l3KpjYCx3NypQQgaJg==",
        "engines": {
          "node": ">= 0.8",
          "npm": "1.2.8000 || >= 1.4.16"
        }
      },
      "node_modules/detect-node": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/detect-node/-/detect-node-2.1.0.tgz",
        "integrity": "sha512-T0NIuQpnTvFDATNuHN5roPwSBG83rFsuO+MXXH9/3N1eFbn4wcPjttvjMLEPWJ0RGUYgQE7cGgS3tNxbqCGM7g==",
        "optional": true
      },
      "node_modules/diff3": {
        "version": "0.0.3",
        "resolved": "https://registry.npmjs.org/diff3/-/diff3-0.0.3.tgz",
        "integrity": "sha512-iSq8ngPOt0K53A6eVr4d5Kn6GNrM2nQZtC740pzIriHtn4pOQ2lyzEXQMBeVcWERN0ye7fhBsk9PbLLQOnUx/g=="
      },
      "node_modules/ee-first": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
        "integrity": "sha512-WMwm9LhRUo+WUaRN+vRuETqG89IgZphVSNkdFgeb6sS/E4OrDIN7t48CAewSHXc6C8lefD8KKfr5vY61brQlow=="
      },
      "node_modules/ejs": {
        "version": "3.1.10",
        "resolved": "https://registry.npmjs.org/ejs/-/ejs-3.1.10.tgz",
        "integrity": "sha512-UeJmFfOrAQS8OJWPZ4qtgHyWExa088/MtK5UEyoJGFH67cDEXkZSviOiKRCZ4Xij0zxI3JECgYs3oKx+AizQBA==",
        "dependencies": {
          "jake": "^10.8.5"
        },
        "bin": {
          "ejs": "bin/cli.js"
        },
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/electron": {
        "version": "30.0.1",
        "resolved": "https://registry.npmjs.org/electron/-/electron-30.0.1.tgz",
        "integrity": "sha512-iwxkI/n2wBd29NH7TH0ZY8aWGzCoKpzJz+D10u7aGSJi1TV6d4MSM3rWyKvT/UkAHkTKOEgYfUyCa2vWQm8L0g==",
        "hasInstallScript": true,
        "dependencies": {
          "@electron/get": "^2.0.0",
          "@types/node": "^20.9.0",
          "extract-zip": "^2.0.1"
        },
        "bin": {
          "electron": "cli.js"
        },
        "engines": {
          "node": ">= 12.20.55"
        }
      },
      "node_modules/encodeurl": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",
        "integrity": "sha512-TPJXq8JqFaVYm2CWmPvnP2Iyo4ZSM7/QKcSmuMLDObfpH5fi7RUGmd/rTDf+rut/saiDiQEeVTNgAmJEdAOx0w==",
        "engines": {
          "node": ">= 0.8"
        }
      },
      "node_modules/end-of-stream": {
        "version": "1.4.4",
        "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.4.tgz",
        "integrity": "sha512-+uw1inIHVPQoaVuHzRyXd21icM+cnt4CzD5rW+NC1wjOUSTOs+Te7FOv7AhN7vS9x/oIyhLP5PR1H+phQAHu5Q==",
        "dependencies": {
          "once": "^1.4.0"
        }
      },
      "node_modules/env-paths": {
        "version": "2.2.1",
        "resolved": "https://registry.npmjs.org/env-paths/-/env-paths-2.2.1.tgz",
        "integrity": "sha512-+h1lkLKhZMTYjog1VEpJNG7NZJWcuc2DDk/qsqSTRRCOXiLjeQ1d1/udrUGhqMxUgAlwKNZ0cf2uqan5GLuS2A==",
        "engines": {
          "node": ">=6"
        }
      },
      "node_modules/err-code": {
        "version": "2.0.3",
        "resolved": "https://registry.npmjs.org/err-code/-/err-code-2.0.3.tgz",
        "integrity": "sha512-2bmlRpNKBxT/CRmPOlyISQpNj+qSeYvcym/uT0Jx2bMOlKLtSy1ZmLuVxSEKKyor/N5yhvp/ZiG1oE3DEYMSFA=="
      },
      "node_modules/error-ex": {
        "version": "1.3.2",
        "resolved": "https://registry.npmjs.org/error-ex/-/error-ex-1.3.2.tgz",
        "integrity": "sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==",
        "dependencies": {
          "is-arrayish": "^0.2.1"
        }
      },
      "node_modules/es-define-property": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.0.tgz",
        "integrity": "sha512-jxayLKShrEqqzJ0eumQbVhTYQM27CfT1T35+gCgDFoL82JLsXqTJ76zv6A0YLOgEnLUMvLzsDsGIrl8NFpT2gQ==",
        "dependencies": {
          "get-intrinsic": "^1.2.4"
        },
        "engines": {
          "node": ">= 0.4"
        }
      },
      "node_modules/es-errors": {
        "version": "1.3.0",
        "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
        "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
        "engines": {
          "node": ">= 0.4"
        }
      },
      "node_modules/es6-error": {
        "version": "4.1.1",
        "resolved": "https://registry.npmjs.org/es6-error/-/es6-error-4.1.1.tgz",
        "integrity": "sha512-Um/+FxMr9CISWh0bi5Zv0iOD+4cFh5qLeks1qhAopKVAJw3drgKbKySikp7wGhDL0HPeaja0P5ULZrxLkniUVg==",
        "optional": true
      },
      "node_modules/escape-html": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
        "integrity": "sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow=="
      },
      "node_modules/escape-string-regexp": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
        "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
        "optional": true,
        "engines": {
          "node": ">=10"
        },
        "funding": {
          "url": "https://github.com/sponsors/sindresorhus"
        }
      },
      "node_modules/etag": {
        "version": "1.8.1",
        "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
        "integrity": "sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg==",
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/express": {
        "version": "4.19.2",
        "resolved": "https://registry.npmjs.org/express/-/express-4.19.2.tgz",
        "integrity": "sha512-5T6nhjsT+EOMzuck8JjBHARTHfMht0POzlA60WV2pMD3gyXw2LZnZ+ueGdNxG+0calOJcWKbpFcuzLZ91YWq9Q==",
        "dependencies": {
          "accepts": "~1.3.8",
          "array-flatten": "1.1.1",
          "body-parser": "1.20.2",
          "content-disposition": "0.5.4",
          "content-type": "~1.0.4",
          "cookie": "0.6.0",
          "cookie-signature": "1.0.6",
          "debug": "2.6.9",
          "depd": "2.0.0",
          "encodeurl": "~1.0.2",
          "escape-html": "~1.0.3",
          "etag": "~1.8.1",
          "finalhandler": "1.2.0",
          "fresh": "0.5.2",
          "http-errors": "2.0.0",
          "merge-descriptors": "1.0.1",
          "methods": "~1.1.2",
          "on-finished": "2.4.1",
          "parseurl": "~1.3.3",
          "path-to-regexp": "0.1.7",
          "proxy-addr": "~2.0.7",
          "qs": "6.11.0",
          "range-parser": "~1.2.1",
          "safe-buffer": "5.2.1",
          "send": "0.18.0",
          "serve-static": "1.15.0",
          "setprototypeof": "1.2.0",
          "statuses": "2.0.1",
          "type-is": "~1.6.18",
          "utils-merge": "1.0.1",
          "vary": "~1.1.2"
        },
        "engines": {
          "node": ">= 0.10.0"
        }
      },
      "node_modules/extract-zip": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/extract-zip/-/extract-zip-2.0.1.tgz",
        "integrity": "sha512-GDhU9ntwuKyGXdZBUgTIe+vXnWj0fppUEtMDL0+idd5Sta8TGpHssn/eusA9mrPr9qNDym6SxAYZjNvCn/9RBg==",
        "dependencies": {
          "debug": "^4.1.1",
          "get-stream": "^5.1.0",
          "yauzl": "^2.10.0"
        },
        "bin": {
          "extract-zip": "cli.js"
        },
        "engines": {
          "node": ">= 10.17.0"
        },
        "optionalDependencies": {
          "@types/yauzl": "^2.9.1"
        }
      },
      "node_modules/extract-zip/node_modules/debug": {
        "version": "4.3.4",
        "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",
        "integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",
        "dependencies": {
          "ms": "2.1.2"
        },
        "engines": {
          "node": ">=6.0"
        },
        "peerDependenciesMeta": {
          "supports-color": {
            "optional": true
          }
        }
      },
      "node_modules/extract-zip/node_modules/ms": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
        "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
      },
      "node_modules/fd-slicer": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/fd-slicer/-/fd-slicer-1.1.0.tgz",
        "integrity": "sha512-cE1qsB/VwyQozZ+q1dGxR8LBYNZeofhEdUNGSMbQD3Gw2lAzX9Zb3uIU6Ebc/Fmyjo9AWWfnn0AUCHqtevs/8g==",
        "dependencies": {
          "pend": "~1.2.0"
        }
      },
      "node_modules/filelist": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/filelist/-/filelist-1.0.4.tgz",
        "integrity": "sha512-w1cEuf3S+DrLCQL7ET6kz+gmlJdbq9J7yXCSjK/OZCPA+qEN1WyF4ZAf0YYJa4/shHJra2t/d/r8SV4Ji+x+8Q==",
        "dependencies": {
          "minimatch": "^5.0.1"
        }
      },
      "node_modules/filelist/node_modules/brace-expansion": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.1.tgz",
        "integrity": "sha512-XnAIvQ8eM+kC6aULx6wuQiwVsnzsi9d3WxzV3FpWTGA19F621kwdbsAcFKXgKUHZWsy+mY6iL1sHTxWEFCytDA==",
        "dependencies": {
          "balanced-match": "^1.0.0"
        }
      },
      "node_modules/filelist/node_modules/minimatch": {
        "version": "5.1.6",
        "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-5.1.6.tgz",
        "integrity": "sha512-lKwV/1brpG6mBUFHtb7NUmtABCb2WZZmm2wNiOA5hAb8VdCS4B3dtMWyvcoViccwAW/COERjXLt0zP1zXUN26g==",
        "dependencies": {
          "brace-expansion": "^2.0.1"
        },
        "engines": {
          "node": ">=10"
        }
      },
      "node_modules/filename-reserved-regex": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/filename-reserved-regex/-/filename-reserved-regex-2.0.0.tgz",
        "integrity": "sha512-lc1bnsSr4L4Bdif8Xb/qrtokGbq5zlsms/CYH8PP+WtCkGNF65DPiQY8vG3SakEdRn8Dlnm+gW/qWKKjS5sZzQ==",
        "engines": {
          "node": ">=4"
        }
      },
      "node_modules/filenamify": {
        "version": "4.3.0",
        "resolved": "https://registry.npmjs.org/filenamify/-/filenamify-4.3.0.tgz",
        "integrity": "sha512-hcFKyUG57yWGAzu1CMt/dPzYZuv+jAJUT85bL8mrXvNe6hWj6yEHEc4EdcgiA6Z3oi1/9wXJdZPXF2dZNgwgOg==",
        "dependencies": {
          "filename-reserved-regex": "^2.0.0",
          "strip-outer": "^1.0.1",
          "trim-repeated": "^1.0.0"
        },
        "engines": {
          "node": ">=8"
        },
        "funding": {
          "url": "https://github.com/sponsors/sindresorhus"
        }
      },
      "node_modules/finalhandler": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.2.0.tgz",
        "integrity": "sha512-5uXcUVftlQMFnWC9qu/svkWv3GTd2PfUhK/3PLkYNAe7FbqJMt3515HaxE6eRL74GdsriiwujiawdaB1BpEISg==",
        "dependencies": {
          "debug": "2.6.9",
          "encodeurl": "~1.0.2",
          "escape-html": "~1.0.3",
          "on-finished": "2.4.1",
          "parseurl": "~1.3.3",
          "statuses": "2.0.1",
          "unpipe": "~1.0.0"
        },
        "engines": {
          "node": ">= 0.8"
        }
      },
      "node_modules/find-up": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/find-up/-/find-up-2.1.0.tgz",
        "integrity": "sha512-NWzkk0jSJtTt08+FBFMvXoeZnOJD+jTtsRmBYbAIzJdX6l7dLgR7CTubCM5/eDdPUBvLCeVasP1brfVR/9/EZQ==",
        "dependencies": {
          "locate-path": "^2.0.0"
        },
        "engines": {
          "node": ">=4"
        }
      },
      "node_modules/flora-colossus": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/flora-colossus/-/flora-colossus-2.0.0.tgz",
        "integrity": "sha512-dz4HxH6pOvbUzZpZ/yXhafjbR2I8cenK5xL0KtBFb7U2ADsR+OwXifnxZjij/pZWF775uSCMzWVd+jDik2H2IA==",
        "dependencies": {
          "debug": "^4.3.4",
          "fs-extra": "^10.1.0"
        },
        "engines": {
          "node": ">= 12"
        }
      },
      "node_modules/flora-colossus/node_modules/debug": {
        "version": "4.3.4",
        "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",
        "integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",
        "dependencies": {
          "ms": "2.1.2"
        },
        "engines": {
          "node": ">=6.0"
        },
        "peerDependenciesMeta": {
          "supports-color": {
            "optional": true
          }
        }
      },
      "node_modules/flora-colossus/node_modules/fs-extra": {
        "version": "10.1.0",
        "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-10.1.0.tgz",
        "integrity": "sha512-oRXApq54ETRj4eMiFzGnHWGy+zo5raudjuxN0b8H7s/RU2oW0Wvsx9O0ACRN/kRq9E8Vu/ReskGB5o3ji+FzHQ==",
        "dependencies": {
          "graceful-fs": "^4.2.0",
          "jsonfile": "^6.0.1",
          "universalify": "^2.0.0"
        },
        "engines": {
          "node": ">=12"
        }
      },
      "node_modules/flora-colossus/node_modules/jsonfile": {
        "version": "6.1.0",
        "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-6.1.0.tgz",
        "integrity": "sha512-5dgndWOriYSm5cnYaJNhalLNDKOqFwyDB/rr1E9ZsGciGvKPs8R2xYGCacuf3z6K1YKDz182fd+fY3cn3pMqXQ==",
        "dependencies": {
          "universalify": "^2.0.0"
        },
        "optionalDependencies": {
          "graceful-fs": "^4.1.6"
        }
      },
      "node_modules/flora-colossus/node_modules/ms": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
        "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
      },
      "node_modules/flora-colossus/node_modules/universalify": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/universalify/-/universalify-2.0.1.tgz",
        "integrity": "sha512-gptHNQghINnc/vTGIk0SOFGFNXw7JVrlRUtConJRlvaw6DuX0wO5Jeko9sWrMBhh+PsYAZ7oXAiOnf/UKogyiw==",
        "engines": {
          "node": ">= 10.0.0"
        }
      },
      "node_modules/forwarded": {
        "version": "0.2.0",
        "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.2.0.tgz",
        "integrity": "sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow==",
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/fresh": {
        "version": "0.5.2",
        "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
        "integrity": "sha512-zJ2mQYM18rEFOudeV4GShTGIQ7RbzA7ozbU9I/XBpm7kqgMywgmylMwXHxZJmkVoYkna9d2pVXVXPdYTP9ej8Q==",
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/fs-extra": {
        "version": "8.1.0",
        "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-8.1.0.tgz",
        "integrity": "sha512-yhlQgA6mnOJUKOsRUFsgJdQCvkKhcz8tlZG5HBQfReYZy46OwLcY+Zia0mtdHsOo9y/hP+CxMN0TU9QxoOtG4g==",
        "dependencies": {
          "graceful-fs": "^4.2.0",
          "jsonfile": "^4.0.0",
          "universalify": "^0.1.0"
        },
        "engines": {
          "node": ">=6 <7 || >=8"
        }
      },
      "node_modules/fs.realpath": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
        "integrity": "sha512-OO0pH2lK6a0hZnAdau5ItzHPI6pUlvI7jMVnxUQRtw4owF2wk8lOSabtGDCTP4Ggrg2MbGnWO9X8K1t4+fGMDw=="
      },
      "node_modules/function-bind": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
        "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/galactus": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/galactus/-/galactus-1.0.0.tgz",
        "integrity": "sha512-R1fam6D4CyKQGNlvJne4dkNF+PvUUl7TAJInvTGa9fti9qAv95quQz29GXapA4d8Ec266mJJxFVh82M4GIIGDQ==",
        "dependencies": {
          "debug": "^4.3.4",
          "flora-colossus": "^2.0.0",
          "fs-extra": "^10.1.0"
        },
        "engines": {
          "node": ">= 12"
        }
      },
      "node_modules/galactus/node_modules/debug": {
        "version": "4.3.4",
        "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",
        "integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",
        "dependencies": {
          "ms": "2.1.2"
        },
        "engines": {
          "node": ">=6.0"
        },
        "peerDependenciesMeta": {
          "supports-color": {
            "optional": true
          }
        }
      },
      "node_modules/galactus/node_modules/fs-extra": {
        "version": "10.1.0",
        "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-10.1.0.tgz",
        "integrity": "sha512-oRXApq54ETRj4eMiFzGnHWGy+zo5raudjuxN0b8H7s/RU2oW0Wvsx9O0ACRN/kRq9E8Vu/ReskGB5o3ji+FzHQ==",
        "dependencies": {
          "graceful-fs": "^4.2.0",
          "jsonfile": "^6.0.1",
          "universalify": "^2.0.0"
        },
        "engines": {
          "node": ">=12"
        }
      },
      "node_modules/galactus/node_modules/jsonfile": {
        "version": "6.1.0",
        "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-6.1.0.tgz",
        "integrity": "sha512-5dgndWOriYSm5cnYaJNhalLNDKOqFwyDB/rr1E9ZsGciGvKPs8R2xYGCacuf3z6K1YKDz182fd+fY3cn3pMqXQ==",
        "dependencies": {
          "universalify": "^2.0.0"
        },
        "optionalDependencies": {
          "graceful-fs": "^4.1.6"
        }
      },
      "node_modules/galactus/node_modules/ms": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
        "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
      },
      "node_modules/galactus/node_modules/universalify": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/universalify/-/universalify-2.0.1.tgz",
        "integrity": "sha512-gptHNQghINnc/vTGIk0SOFGFNXw7JVrlRUtConJRlvaw6DuX0wO5Jeko9sWrMBhh+PsYAZ7oXAiOnf/UKogyiw==",
        "engines": {
          "node": ">= 10.0.0"
        }
      },
      "node_modules/get-intrinsic": {
        "version": "1.2.4",
        "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.2.4.tgz",
        "integrity": "sha512-5uYhsJH8VJBTv7oslg4BznJYhDoRI6waYCxMmCdnTrcCrHA/fCFKoTFz2JKKE0HdDFUF7/oQuhzumXJK7paBRQ==",
        "dependencies": {
          "es-errors": "^1.3.0",
          "function-bind": "^1.1.2",
          "has-proto": "^1.0.1",
          "has-symbols": "^1.0.3",
          "hasown": "^2.0.0"
        },
        "engines": {
          "node": ">= 0.4"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/get-package-info": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/get-package-info/-/get-package-info-1.0.0.tgz",
        "integrity": "sha512-SCbprXGAPdIhKAXiG+Mk6yeoFH61JlYunqdFQFHDtLjJlDjFf6x07dsS8acO+xWt52jpdVo49AlVDnUVK1sDNw==",
        "dependencies": {
          "bluebird": "^3.1.1",
          "debug": "^2.2.0",
          "lodash.get": "^4.0.0",
          "read-pkg-up": "^2.0.0"
        },
        "engines": {
          "node": ">= 4.0"
        }
      },
      "node_modules/get-stream": {
        "version": "5.2.0",
        "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-5.2.0.tgz",
        "integrity": "sha512-nBF+F1rAZVCu/p7rjzgA+Yb4lfYXrpl7a6VmJrU8wF9I1CKvP/QwPNZHnOlwbTkY6dvtFIzFMSyQXbLoTQPRpA==",
        "dependencies": {
          "pump": "^3.0.0"
        },
        "engines": {
          "node": ">=8"
        },
        "funding": {
          "url": "https://github.com/sponsors/sindresorhus"
        }
      },
      "node_modules/glob": {
        "version": "7.2.3",
        "resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
        "integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
        "dependencies": {
          "fs.realpath": "^1.0.0",
          "inflight": "^1.0.4",
          "inherits": "2",
          "minimatch": "^3.1.1",
          "once": "^1.3.0",
          "path-is-absolute": "^1.0.0"
        },
        "engines": {
          "node": "*"
        },
        "funding": {
          "url": "https://github.com/sponsors/isaacs"
        }
      },
      "node_modules/global-agent": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/global-agent/-/global-agent-3.0.0.tgz",
        "integrity": "sha512-PT6XReJ+D07JvGoxQMkT6qji/jVNfX/h364XHZOWeRzy64sSFr+xJ5OX7LI3b4MPQzdL4H8Y8M0xzPpsVMwA8Q==",
        "optional": true,
        "dependencies": {
          "boolean": "^3.0.1",
          "es6-error": "^4.1.1",
          "matcher": "^3.0.0",
          "roarr": "^2.15.3",
          "semver": "^7.3.2",
          "serialize-error": "^7.0.1"
        },
        "engines": {
          "node": ">=10.0"
        }
      },
      "node_modules/global-agent/node_modules/semver": {
        "version": "7.6.0",
        "resolved": "https://registry.npmjs.org/semver/-/semver-7.6.0.tgz",
        "integrity": "sha512-EnwXhrlwXMk9gKu5/flx5sv/an57AkRplG3hTK68W7FRDN+k+OWBj65M7719OkA82XLBxrcX0KSHj+X5COhOVg==",
        "optional": true,
        "dependencies": {
          "lru-cache": "^6.0.0"
        },
        "bin": {
          "semver": "bin/semver.js"
        },
        "engines": {
          "node": ">=10"
        }
      },
      "node_modules/globalthis": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/globalthis/-/globalthis-1.0.3.tgz",
        "integrity": "sha512-sFdI5LyBiNTHjRd7cGPWapiHWMOXKyuBNX/cWJ3NfzrZQVa8GI/8cofCl74AOVqq9W5kNmguTIzJ/1s2gyI9wA==",
        "optional": true,
        "dependencies": {
          "define-properties": "^1.1.3"
        },
        "engines": {
          "node": ">= 0.4"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/gopd": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.0.1.tgz",
        "integrity": "sha512-d65bNlIadxvpb/A2abVdlqKqV563juRnZ1Wtk6s1sIR8uNsXR70xqIzVqxVf1eTqDunwT2MkczEeaezCKTZhwA==",
        "dependencies": {
          "get-intrinsic": "^1.1.3"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/got": {
        "version": "11.8.6",
        "resolved": "https://registry.npmjs.org/got/-/got-11.8.6.tgz",
        "integrity": "sha512-6tfZ91bOr7bOXnK7PRDCGBLa1H4U080YHNaAQ2KsMGlLEzRbk44nsZF2E1IeRc3vtJHPVbKCYgdFbaGO2ljd8g==",
        "dependencies": {
          "@sindresorhus/is": "^4.0.0",
          "@szmarczak/http-timer": "^4.0.5",
          "@types/cacheable-request": "^6.0.1",
          "@types/responselike": "^1.0.0",
          "cacheable-lookup": "^5.0.3",
          "cacheable-request": "^7.0.2",
          "decompress-response": "^6.0.0",
          "http2-wrapper": "^1.0.0-beta.5.2",
          "lowercase-keys": "^2.0.0",
          "p-cancelable": "^2.0.0",
          "responselike": "^2.0.0"
        },
        "engines": {
          "node": ">=10.19.0"
        },
        "funding": {
          "url": "https://github.com/sindresorhus/got?sponsor=1"
        }
      },
      "node_modules/graceful-fs": {
        "version": "4.2.11",
        "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
        "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ=="
      },
      "node_modules/has-flag": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
        "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/has-property-descriptors": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/has-property-descriptors/-/has-property-descriptors-1.0.2.tgz",
        "integrity": "sha512-55JNKuIW+vq4Ke1BjOTjM2YctQIvCT7GFzHwmfZPGo5wnrgkid0YQtnAleFSqumZm4az3n2BS+erby5ipJdgrg==",
        "dependencies": {
          "es-define-property": "^1.0.0"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/has-proto": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/has-proto/-/has-proto-1.0.3.tgz",
        "integrity": "sha512-SJ1amZAJUiZS+PhsVLf5tGydlaVB8EdFpaSO4gmiUKUOxk8qzn5AIy4ZeJUmh22znIdk/uMAUT2pl3FxzVUH+Q==",
        "engines": {
          "node": ">= 0.4"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/has-symbols": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.3.tgz",
        "integrity": "sha512-l3LCuF6MgDNwTDKkdYGEihYjt5pRPbEg46rtlmnSPlUbgmB8LOIrKJbYYFBSbnPaJexMKtiPO8hmeRjRz2Td+A==",
        "engines": {
          "node": ">= 0.4"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/hasown": {
        "version": "2.0.2",
        "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz",
        "integrity": "sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==",
        "dependencies": {
          "function-bind": "^1.1.2"
        },
        "engines": {
          "node": ">= 0.4"
        }
      },
      "node_modules/hosted-git-info": {
        "version": "2.8.9",
        "resolved": "https://registry.npmjs.org/hosted-git-info/-/hosted-git-info-2.8.9.tgz",
        "integrity": "sha512-mxIDAb9Lsm6DoOJ7xH+5+X4y1LU/4Hi50L9C5sIswK3JzULS4bwk1FvjdBgvYR4bzT4tuUQiC15FE2f5HbLvYw=="
      },
      "node_modules/http-cache-semantics": {
        "version": "4.1.1",
        "resolved": "https://registry.npmjs.org/http-cache-semantics/-/http-cache-semantics-4.1.1.tgz",
        "integrity": "sha512-er295DKPVsV82j5kw1Gjt+ADA/XYHsajl82cGNQG2eyoPkvgUhX+nDIyelzhIWbbsXP39EHcI6l5tYs2FYqYXQ=="
      },
      "node_modules/http-errors": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.0.tgz",
        "integrity": "sha512-FtwrG/euBzaEjYeRqOgly7G0qviiXoJWnvEH2Z1plBdXgbyjv34pHTSb9zoeHMyDy33+DWy5Wt9Wo+TURtOYSQ==",
        "dependencies": {
          "depd": "2.0.0",
          "inherits": "2.0.4",
          "setprototypeof": "1.2.0",
          "statuses": "2.0.1",
          "toidentifier": "1.0.1"
        },
        "engines": {
          "node": ">= 0.8"
        }
      },
      "node_modules/http2-wrapper": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/http2-wrapper/-/http2-wrapper-1.0.3.tgz",
        "integrity": "sha512-V+23sDMr12Wnz7iTcDeJr3O6AIxlnvT/bmaAAAP/Xda35C90p9599p0F1eHR/N1KILWSoWVAiOMFjBBXaXSMxg==",
        "dependencies": {
          "quick-lru": "^5.1.1",
          "resolve-alpn": "^1.0.0"
        },
        "engines": {
          "node": ">=10.19.0"
        }
      },
      "node_modules/iconv-lite": {
        "version": "0.4.24",
        "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
        "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
        "dependencies": {
          "safer-buffer": ">= 2.1.2 < 3"
        },
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/ignore": {
        "version": "5.3.1",
        "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.3.1.tgz",
        "integrity": "sha512-5Fytz/IraMjqpwfd34ke28PTVMjZjJG2MPn5t7OE4eUCUNf8BAa7b5WUS9/Qvr6mwOQS7Mk6vdsMno5he+T8Xw==",
        "engines": {
          "node": ">= 4"
        }
      },
      "node_modules/inflight": {
        "version": "1.0.6",
        "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
        "integrity": "sha512-k92I/b08q4wvFscXCLvqfsHCrjrF7yiXsQuIVvVE7N82W3+aqpzuUdBbfhWcy/FZR3/4IgflMgKLOsvPDrGCJA==",
        "dependencies": {
          "once": "^1.3.0",
          "wrappy": "1"
        }
      },
      "node_modules/inherits": {
        "version": "2.0.4",
        "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
        "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ=="
      },
      "node_modules/ipaddr.js": {
        "version": "1.9.1",
        "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
        "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==",
        "engines": {
          "node": ">= 0.10"
        }
      },
      "node_modules/is-arrayish": {
        "version": "0.2.1",
        "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.2.1.tgz",
        "integrity": "sha512-zz06S8t0ozoDXMG+ube26zeCTNXcKIPJZJi8hBrF4idCLms4CG9QtK7qBl1boi5ODzFpjswb5JPmHCbMpjaYzg=="
      },
      "node_modules/is-core-module": {
        "version": "2.13.1",
        "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.13.1.tgz",
        "integrity": "sha512-hHrIjvZsftOsvKSn2TRYl63zvxsgE0K+0mYMoH6gD4omR5IWB2KynivBQczo3+wF1cCkjzvptnI9Q0sPU66ilw==",
        "dependencies": {
          "hasown": "^2.0.0"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/isbinaryfile": {
        "version": "4.0.10",
        "resolved": "https://registry.npmjs.org/isbinaryfile/-/isbinaryfile-4.0.10.tgz",
        "integrity": "sha512-iHrqe5shvBUcFbmZq9zOQHBoeOhZJu6RQGrDpBgenUm/Am+F3JM2MgQj+rK3Z601fzrL5gLZWtAPH2OBaSVcyw==",
        "engines": {
          "node": ">= 8.0.0"
        },
        "funding": {
          "url": "https://github.com/sponsors/gjtorikian/"
        }
      },
      "node_modules/isexe": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
        "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw=="
      },
      "node_modules/isomorphic-git": {
        "version": "1.25.7",
        "resolved": "https://registry.npmjs.org/isomorphic-git/-/isomorphic-git-1.25.7.tgz",
        "integrity": "sha512-KE10ejaIsEpQ+I/apS33qqTjyzCXgOniEaL32DwNbXtboKG8H3cu+RiBcdp3G9w4MpOOTQfGPsWp4i8UxRfDLg==",
        "dependencies": {
          "async-lock": "^1.1.0",
          "clean-git-ref": "^2.0.1",
          "crc-32": "^1.2.0",
          "diff3": "0.0.3",
          "ignore": "^5.1.4",
          "minimisted": "^2.0.0",
          "pako": "^1.0.10",
          "pify": "^4.0.1",
          "readable-stream": "^3.4.0",
          "sha.js": "^2.4.9",
          "simple-get": "^4.0.1"
        },
        "bin": {
          "isogit": "cli.cjs"
        },
        "engines": {
          "node": ">=12"
        }
      },
      "node_modules/isomorphic-git/node_modules/pify": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/pify/-/pify-4.0.1.tgz",
        "integrity": "sha512-uB80kBFb/tfd68bVleG9T5GGsGPjJrLAUpR5PZIrhBnIaRTQRjqdJSsIKkOP6OAIFbj7GOrcudc5pNjZ+geV2g==",
        "engines": {
          "node": ">=6"
        }
      },
      "node_modules/jake": {
        "version": "10.8.7",
        "resolved": "https://registry.npmjs.org/jake/-/jake-10.8.7.tgz",
        "integrity": "sha512-ZDi3aP+fG/LchyBzUM804VjddnwfSfsdeYkwt8NcbKRvo4rFkjhs456iLFn3k2ZUWvNe4i48WACDbza8fhq2+w==",
        "dependencies": {
          "async": "^3.2.3",
          "chalk": "^4.0.2",
          "filelist": "^1.0.4",
          "minimatch": "^3.1.2"
        },
        "bin": {
          "jake": "bin/cli.js"
        },
        "engines": {
          "node": ">=10"
        }
      },
      "node_modules/json-buffer": {
        "version": "3.0.1",
        "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.1.tgz",
        "integrity": "sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ=="
      },
      "node_modules/json-stringify-safe": {
        "version": "5.0.1",
        "resolved": "https://registry.npmjs.org/json-stringify-safe/-/json-stringify-safe-5.0.1.tgz",
        "integrity": "sha512-ZClg6AaYvamvYEE82d3Iyd3vSSIjQ+odgjaTzRuO3s7toCdFKczob2i0zCh7JE8kWn17yvAWhUVxvqGwUalsRA==",
        "optional": true
      },
      "node_modules/jsonfile": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-4.0.0.tgz",
        "integrity": "sha512-m6F1R3z8jjlf2imQHS2Qez5sjKWQzbuuhuJ/FKYFRZvPE3PuHcSMVZzfsLhGVOkfd20obL5SWEBew5ShlquNxg==",
        "optionalDependencies": {
          "graceful-fs": "^4.1.6"
        }
      },
      "node_modules/junk": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/junk/-/junk-3.1.0.tgz",
        "integrity": "sha512-pBxcB3LFc8QVgdggvZWyeys+hnrNWg4OcZIU/1X59k5jQdLBlCsYGRQaz234SqoRLTCgMH00fY0xRJH+F9METQ==",
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/keyv": {
        "version": "4.5.4",
        "resolved": "https://registry.npmjs.org/keyv/-/keyv-4.5.4.tgz",
        "integrity": "sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==",
        "dependencies": {
          "json-buffer": "3.0.1"
        }
      },
      "node_modules/load-json-file": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/load-json-file/-/load-json-file-2.0.0.tgz",
        "integrity": "sha512-3p6ZOGNbiX4CdvEd1VcE6yi78UrGNpjHO33noGwHCnT/o2fyllJDepsm8+mFFv/DvtwFHht5HIHSyOy5a+ChVQ==",
        "dependencies": {
          "graceful-fs": "^4.1.2",
          "parse-json": "^2.2.0",
          "pify": "^2.0.0",
          "strip-bom": "^3.0.0"
        },
        "engines": {
          "node": ">=4"
        }
      },
      "node_modules/locate-path": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-2.0.0.tgz",
        "integrity": "sha512-NCI2kiDkyR7VeEKm27Kda/iQHyKJe1Bu0FlTbYp3CqJu+9IFe9bLyAjMxf5ZDDbEg+iMPzB5zYyUTSm8wVTKmA==",
        "dependencies": {
          "p-locate": "^2.0.0",
          "path-exists": "^3.0.0"
        },
        "engines": {
          "node": ">=4"
        }
      },
      "node_modules/lodash.get": {
        "version": "4.4.2",
        "resolved": "https://registry.npmjs.org/lodash.get/-/lodash.get-4.4.2.tgz",
        "integrity": "sha512-z+Uw/vLuy6gQe8cfaFWD7p0wVv8fJl3mbzXh33RS+0oW2wvUqiRXiQ69gLWSLpgB5/6sU+r6BlQR0MBILadqTQ=="
      },
      "node_modules/lowercase-keys": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/lowercase-keys/-/lowercase-keys-2.0.0.tgz",
        "integrity": "sha512-tqNXrS78oMOE73NMxK4EMLQsQowWf8jKooH9g7xPavRT706R6bkQJ6DY2Te7QukaZsulxa30wQ7bk0pm4XiHmA==",
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/lru-cache": {
        "version": "6.0.0",
        "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-6.0.0.tgz",
        "integrity": "sha512-Jo6dJ04CmSjuznwJSS3pUeWmd/H0ffTlkXXgwZi+eq1UCmqQwCh+eLsYOYCwY991i2Fah4h1BEMCx4qThGbsiA==",
        "dependencies": {
          "yallist": "^4.0.0"
        },
        "engines": {
          "node": ">=10"
        }
      },
      "node_modules/matcher": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/matcher/-/matcher-3.0.0.tgz",
        "integrity": "sha512-OkeDaAZ/bQCxeFAozM55PKcKU0yJMPGifLwV4Qgjitu+5MoAfSQN4lsLJeXZ1b8w0x+/Emda6MZgXS1jvsapng==",
        "optional": true,
        "dependencies": {
          "escape-string-regexp": "^4.0.0"
        },
        "engines": {
          "node": ">=10"
        }
      },
      "node_modules/media-typer": {
        "version": "0.3.0",
        "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
        "integrity": "sha512-dq+qelQ9akHpcOl/gUVRTxVIOkAJ1wR3QAvb4RsVjS8oVoFjDGTc679wJYmUmknUF5HwMLOgb5O+a3KxfWapPQ==",
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/merge-descriptors": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.1.tgz",
        "integrity": "sha512-cCi6g3/Zr1iqQi6ySbseM1Xvooa98N0w31jzUYrXPX2xqObmFGHJ0tQ5u74H3mVh7wLouTseZyYIq39g8cNp1w=="
      },
      "node_modules/methods": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
        "integrity": "sha512-iclAHeNqNm68zFtnZ0e+1L2yUIdvzNoauKU4WBA3VvH/vPFieF7qfRlwUZU+DA9P9bPXIS90ulxoUoCH23sV2w==",
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/mime": {
        "version": "1.6.0",
        "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
        "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg==",
        "bin": {
          "mime": "cli.js"
        },
        "engines": {
          "node": ">=4"
        }
      },
      "node_modules/mime-db": {
        "version": "1.52.0",
        "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
        "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/mime-types": {
        "version": "2.1.35",
        "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
        "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
        "dependencies": {
          "mime-db": "1.52.0"
        },
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/mimic-response": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/mimic-response/-/mimic-response-1.0.1.tgz",
        "integrity": "sha512-j5EctnkH7amfV/q5Hgmoal1g2QHFJRraOtmx0JpIqkxhBhI/lJSl1nMpQ45hVarwNETOoWEimndZ4QK0RHxuxQ==",
        "engines": {
          "node": ">=4"
        }
      },
      "node_modules/minimatch": {
        "version": "3.1.2",
        "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
        "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
        "dependencies": {
          "brace-expansion": "^1.1.7"
        },
        "engines": {
          "node": "*"
        }
      },
      "node_modules/minimist": {
        "version": "1.2.8",
        "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.8.tgz",
        "integrity": "sha512-2yyAR8qBkN3YuheJanUpWC5U3bb5osDywNB8RzDVlDwDHbocAJveqqj1u8+SVD7jkWT4yvsHCpWqqWqAxb0zCA==",
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/minimisted": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/minimisted/-/minimisted-2.0.1.tgz",
        "integrity": "sha512-1oPjfuLQa2caorJUM8HV8lGgWCc0qqAO1MNv/k05G4qslmsndV/5WdNZrqCiyqiz3wohia2Ij2B7w2Dr7/IyrA==",
        "dependencies": {
          "minimist": "^1.2.5"
        }
      },
      "node_modules/ms": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
        "integrity": "sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A=="
      },
      "node_modules/negotiator": {
        "version": "0.6.3",
        "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.3.tgz",
        "integrity": "sha512-+EUsqGPLsM+j/zdChZjsnX51g4XrHFOIXwfnCVPGlQk/k5giakcKsuxCObBRu6DSm9opw/O6slWbJdghQM4bBg==",
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/normalize-package-data": {
        "version": "2.5.0",
        "resolved": "https://registry.npmjs.org/normalize-package-data/-/normalize-package-data-2.5.0.tgz",
        "integrity": "sha512-/5CMN3T0R4XTj4DcGaexo+roZSdSFW/0AOOTROrjxzCG1wrWXEsGbRKevjlIL+ZDE4sZlJr5ED4YW0yqmkK+eA==",
        "dependencies": {
          "hosted-git-info": "^2.1.4",
          "resolve": "^1.10.0",
          "semver": "2 || 3 || 4 || 5",
          "validate-npm-package-license": "^3.0.1"
        }
      },
      "node_modules/normalize-package-data/node_modules/semver": {
        "version": "5.7.2",
        "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.2.tgz",
        "integrity": "sha512-cBznnQ9KjJqU67B52RMC65CMarK2600WFnbkcaiwWq3xy/5haFJlshgnpjovMVJ+Hff49d8GEn0b87C5pDQ10g==",
        "bin": {
          "semver": "bin/semver"
        }
      },
      "node_modules/normalize-url": {
        "version": "6.1.0",
        "resolved": "https://registry.npmjs.org/normalize-url/-/normalize-url-6.1.0.tgz",
        "integrity": "sha512-DlL+XwOy3NxAQ8xuC0okPgK46iuVNAK01YN7RueYBqqFeGsBjV9XmCAzAdgt+667bCl5kPh9EqKKDwnaPG1I7A==",
        "engines": {
          "node": ">=10"
        },
        "funding": {
          "url": "https://github.com/sponsors/sindresorhus"
        }
      },
      "node_modules/object-inspect": {
        "version": "1.13.1",
        "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.1.tgz",
        "integrity": "sha512-5qoj1RUiKOMsCCNLV1CBiPYE10sziTsnmNxkAI/rZhiD63CF7IqdFGC/XzjWjpSgLf0LxXX3bDFIh0E18f6UhQ==",
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/object-keys": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",
        "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==",
        "optional": true,
        "engines": {
          "node": ">= 0.4"
        }
      },
      "node_modules/on-finished": {
        "version": "2.4.1",
        "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.4.1.tgz",
        "integrity": "sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg==",
        "dependencies": {
          "ee-first": "1.1.1"
        },
        "engines": {
          "node": ">= 0.8"
        }
      },
      "node_modules/once": {
        "version": "1.4.0",
        "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
        "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
        "dependencies": {
          "wrappy": "1"
        }
      },
      "node_modules/p-cancelable": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/p-cancelable/-/p-cancelable-2.1.1.tgz",
        "integrity": "sha512-BZOr3nRQHOntUjTrH8+Lh54smKHoHyur8We1V8DSMVrl5A2malOOwuJRnKRDjSnkoeBh4at6BwEnb5I7Jl31wg==",
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/p-limit": {
        "version": "1.3.0",
        "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-1.3.0.tgz",
        "integrity": "sha512-vvcXsLAJ9Dr5rQOPk7toZQZJApBl2K4J6dANSsEuh6QI41JYcsS/qhTGa9ErIUUgK3WNQoJYvylxvjqmiqEA9Q==",
        "dependencies": {
          "p-try": "^1.0.0"
        },
        "engines": {
          "node": ">=4"
        }
      },
      "node_modules/p-locate": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-2.0.0.tgz",
        "integrity": "sha512-nQja7m7gSKuewoVRen45CtVfODR3crN3goVQ0DDZ9N3yHxgpkuBhZqsaiotSQRrADUrne346peY7kT3TSACykg==",
        "dependencies": {
          "p-limit": "^1.1.0"
        },
        "engines": {
          "node": ">=4"
        }
      },
      "node_modules/p-try": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/p-try/-/p-try-1.0.0.tgz",
        "integrity": "sha512-U1etNYuMJoIz3ZXSrrySFjsXQTWOx2/jdi86L+2pRvph/qMKL6sbcCYdH23fqsbm8TH2Gn0OybpT4eSFlCVHww==",
        "engines": {
          "node": ">=4"
        }
      },
      "node_modules/pako": {
        "version": "1.0.11",
        "resolved": "https://registry.npmjs.org/pako/-/pako-1.0.11.tgz",
        "integrity": "sha512-4hLB8Py4zZce5s4yd9XzopqwVv/yGNhV1Bl8NTmCq1763HeK2+EwVTv+leGeL13Dnh2wfbqowVPXCIO0z4taYw=="
      },
      "node_modules/parse-author": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/parse-author/-/parse-author-2.0.0.tgz",
        "integrity": "sha512-yx5DfvkN8JsHL2xk2Os9oTia467qnvRgey4ahSm2X8epehBLx/gWLcy5KI+Y36ful5DzGbCS6RazqZGgy1gHNw==",
        "dependencies": {
          "author-regex": "^1.0.0"
        },
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/parse-json": {
        "version": "2.2.0",
        "resolved": "https://registry.npmjs.org/parse-json/-/parse-json-2.2.0.tgz",
        "integrity": "sha512-QR/GGaKCkhwk1ePQNYDRKYZ3mwU9ypsKhB0XyFnLQdomyEqk3e8wpW3V5Jp88zbxK4n5ST1nqo+g9juTpownhQ==",
        "dependencies": {
          "error-ex": "^1.2.0"
        },
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/parseurl": {
        "version": "1.3.3",
        "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
        "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",
        "engines": {
          "node": ">= 0.8"
        }
      },
      "node_modules/path-exists": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-3.0.0.tgz",
        "integrity": "sha512-bpC7GYwiDYQ4wYLe+FA8lhRjhQCMcQGuSgGGqDkg/QerRWw9CmGRT0iSOVRSZJ29NMLZgIzqaljJ63oaL4NIJQ==",
        "engines": {
          "node": ">=4"
        }
      },
      "node_modules/path-is-absolute": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
        "integrity": "sha512-AVbw3UJ2e9bq64vSaS9Am0fje1Pa8pbGqTTsmXfaIiMpnr5DlDhfJOuLj9Sf95ZPVDAUerDfEk88MPmPe7UCQg==",
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/path-key": {
        "version": "3.1.1",
        "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
        "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/path-parse": {
        "version": "1.0.7",
        "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
        "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw=="
      },
      "node_modules/path-to-regexp": {
        "version": "0.1.7",
        "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.7.tgz",
        "integrity": "sha512-5DFkuoqlv1uYQKxy8omFBeJPQcdoE07Kv2sferDCrAq1ohOU+MSDswDIbnx3YAM60qIOnYa53wBhXW0EbMonrQ=="
      },
      "node_modules/path-type": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/path-type/-/path-type-2.0.0.tgz",
        "integrity": "sha512-dUnb5dXUf+kzhC/W/F4e5/SkluXIFf5VUHolW1Eg1irn1hGWjPGdsRcvYJ1nD6lhk8Ir7VM0bHJKsYTx8Jx9OQ==",
        "dependencies": {
          "pify": "^2.0.0"
        },
        "engines": {
          "node": ">=4"
        }
      },
      "node_modules/pe-library": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/pe-library/-/pe-library-1.0.1.tgz",
        "integrity": "sha512-nh39Mo1eGWmZS7y+mK/dQIqg7S1lp38DpRxkyoHf0ZcUs/HDc+yyTjuOtTvSMZHmfSLuSQaX945u05Y2Q6UWZg==",
        "engines": {
          "node": ">=14",
          "npm": ">=7"
        },
        "funding": {
          "type": "github",
          "url": "https://github.com/sponsors/jet2jet"
        }
      },
      "node_modules/pend": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/pend/-/pend-1.2.0.tgz",
        "integrity": "sha512-F3asv42UuXchdzt+xXqfW1OGlVBe+mxa2mqI0pg5yAHZPvFmY3Y6drSf/GQ1A86WgWEN9Kzh/WrgKa6iGcHXLg=="
      },
      "node_modules/pify": {
        "version": "2.3.0",
        "resolved": "https://registry.npmjs.org/pify/-/pify-2.3.0.tgz",
        "integrity": "sha512-udgsAY+fTnvv7kI7aaxbqwWNb0AHiB0qBO89PZKPkoTmGOgdbrHDKD+0B2X4uTfJ/FT1R09r9gTsjUjNJotuog==",
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/plist": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/plist/-/plist-3.1.0.tgz",
        "integrity": "sha512-uysumyrvkUX0rX/dEVqt8gC3sTBzd4zoWfLeS29nb53imdaXVvLINYXTI2GNqzaMuvacNx4uJQ8+b3zXR0pkgQ==",
        "dependencies": {
          "@xmldom/xmldom": "^0.8.8",
          "base64-js": "^1.5.1",
          "xmlbuilder": "^15.1.1"
        },
        "engines": {
          "node": ">=10.4.0"
        }
      },
      "node_modules/postject": {
        "version": "1.0.0-alpha.6",
        "resolved": "https://registry.npmjs.org/postject/-/postject-1.0.0-alpha.6.tgz",
        "integrity": "sha512-b9Eb8h2eVqNE8edvKdwqkrY6O7kAwmI8kcnBv1NScolYJbo59XUF0noFq+lxbC1yN20bmC0WBEbDC5H/7ASb0A==",
        "dependencies": {
          "commander": "^9.4.0"
        },
        "bin": {
          "postject": "dist/cli.js"
        },
        "engines": {
          "node": ">=14.0.0"
        }
      },
      "node_modules/postject/node_modules/commander": {
        "version": "9.5.0",
        "resolved": "https://registry.npmjs.org/commander/-/commander-9.5.0.tgz",
        "integrity": "sha512-KRs7WVDKg86PWiuAqhDrAQnTXZKraVcCc6vFdL14qrZ/DcWwuRo7VoiYXalXO7S5GKpqYiVEwCbgFDfxNHKJBQ==",
        "engines": {
          "node": "^12.20.0 || >=14"
        }
      },
      "node_modules/prettier": {
        "version": "3.2.5",
        "resolved": "https://registry.npmjs.org/prettier/-/prettier-3.2.5.tgz",
        "integrity": "sha512-3/GWa9aOC0YeD7LUfvOG2NiDyhOWRvt1k+rcKhOuYnMY24iiCphgneUfJDyFXd6rZCAnuLBv6UeAULtrhT/F4A==",
        "dev": true,
        "bin": {
          "prettier": "bin/prettier.cjs"
        },
        "engines": {
          "node": ">=14"
        },
        "funding": {
          "url": "https://github.com/prettier/prettier?sponsor=1"
        }
      },
      "node_modules/progress": {
        "version": "2.0.3",
        "resolved": "https://registry.npmjs.org/progress/-/progress-2.0.3.tgz",
        "integrity": "sha512-7PiHtLll5LdnKIMw100I+8xJXR5gW2QwWYkT6iJva0bXitZKa/XMrSbdmg3r2Xnaidz9Qumd0VPaMrZlF9V9sA==",
        "engines": {
          "node": ">=0.4.0"
        }
      },
      "node_modules/promise-retry": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/promise-retry/-/promise-retry-2.0.1.tgz",
        "integrity": "sha512-y+WKFlBR8BGXnsNlIHFGPZmyDf3DFMoLhaflAnyZgV6rG6xu+JwesTo2Q9R6XwYmtmwAFCkAk3e35jEdoeh/3g==",
        "dependencies": {
          "err-code": "^2.0.2",
          "retry": "^0.12.0"
        },
        "engines": {
          "node": ">=10"
        }
      },
      "node_modules/proxy-addr": {
        "version": "2.0.7",
        "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.7.tgz",
        "integrity": "sha512-llQsMLSUDUPT44jdrU/O37qlnifitDP+ZwrmmZcoSKyLKvtZxpyV0n2/bD/N4tBAAZ/gJEdZU7KMraoK1+XYAg==",
        "dependencies": {
          "forwarded": "0.2.0",
          "ipaddr.js": "1.9.1"
        },
        "engines": {
          "node": ">= 0.10"
        }
      },
      "node_modules/pump": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/pump/-/pump-3.0.0.tgz",
        "integrity": "sha512-LwZy+p3SFs1Pytd/jYct4wpv49HiYCqd9Rlc5ZVdk0V+8Yzv6jR5Blk3TRmPL1ft69TxP0IMZGJ+WPFU2BFhww==",
        "dependencies": {
          "end-of-stream": "^1.1.0",
          "once": "^1.3.1"
        }
      },
      "node_modules/qs": {
        "version": "6.11.0",
        "resolved": "https://registry.npmjs.org/qs/-/qs-6.11.0.tgz",
        "integrity": "sha512-MvjoMCJwEarSbUYk5O+nmoSzSutSsTwF85zcHPQ9OrlFoZOYIjaqBAJIqIXjptyD5vThxGq52Xu/MaJzRkIk4Q==",
        "dependencies": {
          "side-channel": "^1.0.4"
        },
        "engines": {
          "node": ">=0.6"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/quick-lru": {
        "version": "5.1.1",
        "resolved": "https://registry.npmjs.org/quick-lru/-/quick-lru-5.1.1.tgz",
        "integrity": "sha512-WuyALRjWPDGtt/wzJiadO5AXY+8hZ80hVpe6MyivgraREW751X3SbhRvG3eLKOYN+8VEvqLcf3wdnt44Z4S4SA==",
        "engines": {
          "node": ">=10"
        },
        "funding": {
          "url": "https://github.com/sponsors/sindresorhus"
        }
      },
      "node_modules/range-parser": {
        "version": "1.2.1",
        "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
        "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==",
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/raw-body": {
        "version": "2.5.2",
        "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.5.2.tgz",
        "integrity": "sha512-8zGqypfENjCIqGhgXToC8aB2r7YrBX+AQAfIPs/Mlk+BtPTztOvTS01NRW/3Eh60J+a48lt8qsCzirQ6loCVfA==",
        "dependencies": {
          "bytes": "3.1.2",
          "http-errors": "2.0.0",
          "iconv-lite": "0.4.24",
          "unpipe": "1.0.0"
        },
        "engines": {
          "node": ">= 0.8"
        }
      },
      "node_modules/read-pkg": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/read-pkg/-/read-pkg-2.0.0.tgz",
        "integrity": "sha512-eFIBOPW7FGjzBuk3hdXEuNSiTZS/xEMlH49HxMyzb0hyPfu4EhVjT2DH32K1hSSmVq4sebAWnZuuY5auISUTGA==",
        "dependencies": {
          "load-json-file": "^2.0.0",
          "normalize-package-data": "^2.3.2",
          "path-type": "^2.0.0"
        },
        "engines": {
          "node": ">=4"
        }
      },
      "node_modules/read-pkg-up": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/read-pkg-up/-/read-pkg-up-2.0.0.tgz",
        "integrity": "sha512-1orxQfbWGUiTn9XsPlChs6rLie/AV9jwZTGmu2NZw/CUDJQchXJFYE0Fq5j7+n558T1JhDWLdhyd1Zj+wLY//w==",
        "dependencies": {
          "find-up": "^2.0.0",
          "read-pkg": "^2.0.0"
        },
        "engines": {
          "node": ">=4"
        }
      },
      "node_modules/readable-stream": {
        "version": "3.6.2",
        "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.2.tgz",
        "integrity": "sha512-9u/sniCrY3D5WdsERHzHE4G2YCXqoG5FTHUiCC4SIbr6XcLZBY05ya9EKjYek9O5xOAwjGq+1JdGBAS7Q9ScoA==",
        "dependencies": {
          "inherits": "^2.0.3",
          "string_decoder": "^1.1.1",
          "util-deprecate": "^1.0.1"
        },
        "engines": {
          "node": ">= 6"
        }
      },
      "node_modules/resedit": {
        "version": "2.0.2",
        "resolved": "https://registry.npmjs.org/resedit/-/resedit-2.0.2.tgz",
        "integrity": "sha512-UKTnq602iVe+W5SyRAQx/WdWMnlDiONfXBLFg/ur4QE4EQQ8eP7Jgm5mNXdK12kKawk1vvXPja2iXKqZiGDW6Q==",
        "dependencies": {
          "pe-library": "^1.0.1"
        },
        "engines": {
          "node": ">=14",
          "npm": ">=7"
        },
        "funding": {
          "type": "github",
          "url": "https://github.com/sponsors/jet2jet"
        }
      },
      "node_modules/resolve": {
        "version": "1.22.8",
        "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.22.8.tgz",
        "integrity": "sha512-oKWePCxqpd6FlLvGV1VU0x7bkPmmCNolxzjMf4NczoDnQcIWrAF+cPtZn5i6n+RfD2d9i0tzpKnG6Yk168yIyw==",
        "dependencies": {
          "is-core-module": "^2.13.0",
          "path-parse": "^1.0.7",
          "supports-preserve-symlinks-flag": "^1.0.0"
        },
        "bin": {
          "resolve": "bin/resolve"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/resolve-alpn": {
        "version": "1.2.1",
        "resolved": "https://registry.npmjs.org/resolve-alpn/-/resolve-alpn-1.2.1.tgz",
        "integrity": "sha512-0a1F4l73/ZFZOakJnQ3FvkJ2+gSTQWz/r2KE5OdDY0TxPm5h4GkqkWWfM47T7HsbnOtcJVEF4epCVy6u7Q3K+g=="
      },
      "node_modules/responselike": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/responselike/-/responselike-2.0.1.tgz",
        "integrity": "sha512-4gl03wn3hj1HP3yzgdI7d3lCkF95F21Pz4BPGvKHinyQzALR5CapwC8yIi0Rh58DEMQ/SguC03wFj2k0M/mHhw==",
        "dependencies": {
          "lowercase-keys": "^2.0.0"
        },
        "funding": {
          "url": "https://github.com/sponsors/sindresorhus"
        }
      },
      "node_modules/retry": {
        "version": "0.12.0",
        "resolved": "https://registry.npmjs.org/retry/-/retry-0.12.0.tgz",
        "integrity": "sha512-9LkiTwjUh6rT555DtE9rTX+BKByPfrMzEAtnlEtdEwr3Nkffwiihqe2bWADg+OQRjt9gl6ICdmB/ZFDCGAtSow==",
        "engines": {
          "node": ">= 4"
        }
      },
      "node_modules/roarr": {
        "version": "2.15.4",
        "resolved": "https://registry.npmjs.org/roarr/-/roarr-2.15.4.tgz",
        "integrity": "sha512-CHhPh+UNHD2GTXNYhPWLnU8ONHdI+5DI+4EYIAOaiD63rHeYlZvyh8P+in5999TTSFgUYuKUAjzRI4mdh/p+2A==",
        "optional": true,
        "dependencies": {
          "boolean": "^3.0.1",
          "detect-node": "^2.0.4",
          "globalthis": "^1.0.1",
          "json-stringify-safe": "^5.0.1",
          "semver-compare": "^1.0.0",
          "sprintf-js": "^1.1.2"
        },
        "engines": {
          "node": ">=8.0"
        }
      },
      "node_modules/safe-buffer": {
        "version": "5.2.1",
        "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
        "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
        "funding": [
          {
            "type": "github",
            "url": "https://github.com/sponsors/feross"
          },
          {
            "type": "patreon",
            "url": "https://www.patreon.com/feross"
          },
          {
            "type": "consulting",
            "url": "https://feross.org/support"
          }
        ]
      },
      "node_modules/safer-buffer": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
        "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg=="
      },
      "node_modules/semver": {
        "version": "6.3.1",
        "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
        "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
        "bin": {
          "semver": "bin/semver.js"
        }
      },
      "node_modules/semver-compare": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/semver-compare/-/semver-compare-1.0.0.tgz",
        "integrity": "sha512-YM3/ITh2MJ5MtzaM429anh+x2jiLVjqILF4m4oyQB18W7Ggea7BfqdH/wGMK7dDiMghv/6WG7znWMwUDzJiXow==",
        "optional": true
      },
      "node_modules/send": {
        "version": "0.18.0",
        "resolved": "https://registry.npmjs.org/send/-/send-0.18.0.tgz",
        "integrity": "sha512-qqWzuOjSFOuqPjFe4NOsMLafToQQwBSOEpS+FwEt3A2V3vKubTquT3vmLTQpFgMXp8AlFWFuP1qKaJZOtPpVXg==",
        "dependencies": {
          "debug": "2.6.9",
          "depd": "2.0.0",
          "destroy": "1.2.0",
          "encodeurl": "~1.0.2",
          "escape-html": "~1.0.3",
          "etag": "~1.8.1",
          "fresh": "0.5.2",
          "http-errors": "2.0.0",
          "mime": "1.6.0",
          "ms": "2.1.3",
          "on-finished": "2.4.1",
          "range-parser": "~1.2.1",
          "statuses": "2.0.1"
        },
        "engines": {
          "node": ">= 0.8.0"
        }
      },
      "node_modules/send/node_modules/ms": {
        "version": "2.1.3",
        "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
        "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="
      },
      "node_modules/serialize-error": {
        "version": "7.0.1",
        "resolved": "https://registry.npmjs.org/serialize-error/-/serialize-error-7.0.1.tgz",
        "integrity": "sha512-8I8TjW5KMOKsZQTvoxjuSIa7foAwPWGOts+6o7sgjz41/qMD9VQHEDxi6PBvK2l0MXUmqZyNpUK+T2tQaaElvw==",
        "optional": true,
        "dependencies": {
          "type-fest": "^0.13.1"
        },
        "engines": {
          "node": ">=10"
        },
        "funding": {
          "url": "https://github.com/sponsors/sindresorhus"
        }
      },
      "node_modules/serve-static": {
        "version": "1.15.0",
        "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.15.0.tgz",
        "integrity": "sha512-XGuRDNjXUijsUL0vl6nSD7cwURuzEgglbOaFuZM9g3kwDXOWVTck0jLzjPzGD+TazWbboZYu52/9/XPdUgne9g==",
        "dependencies": {
          "encodeurl": "~1.0.2",
          "escape-html": "~1.0.3",
          "parseurl": "~1.3.3",
          "send": "0.18.0"
        },
        "engines": {
          "node": ">= 0.8.0"
        }
      },
      "node_modules/set-function-length": {
        "version": "1.2.2",
        "resolved": "https://registry.npmjs.org/set-function-length/-/set-function-length-1.2.2.tgz",
        "integrity": "sha512-pgRc4hJ4/sNjWCSS9AmnS40x3bNMDTknHgL5UaMBTMyJnU90EgWh1Rz+MC9eFu4BuN/UwZjKQuY/1v3rM7HMfg==",
        "dependencies": {
          "define-data-property": "^1.1.4",
          "es-errors": "^1.3.0",
          "function-bind": "^1.1.2",
          "get-intrinsic": "^1.2.4",
          "gopd": "^1.0.1",
          "has-property-descriptors": "^1.0.2"
        },
        "engines": {
          "node": ">= 0.4"
        }
      },
      "node_modules/setprototypeof": {
        "version": "1.2.0",
        "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
        "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw=="
      },
      "node_modules/sha.js": {
        "version": "2.4.11",
        "resolved": "https://registry.npmjs.org/sha.js/-/sha.js-2.4.11.tgz",
        "integrity": "sha512-QMEp5B7cftE7APOjk5Y6xgrbWu+WkLVQwk8JNjZ8nKRciZaByEW6MubieAiToS7+dwvrjGhH8jRXz3MVd0AYqQ==",
        "dependencies": {
          "inherits": "^2.0.1",
          "safe-buffer": "^5.0.1"
        },
        "bin": {
          "sha.js": "bin.js"
        }
      },
      "node_modules/shebang-command": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
        "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
        "dependencies": {
          "shebang-regex": "^3.0.0"
        },
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/shebang-regex": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
        "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/side-channel": {
        "version": "1.0.6",
        "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.0.6.tgz",
        "integrity": "sha512-fDW/EZ6Q9RiO8eFG8Hj+7u/oW+XrPTIChwCOM2+th2A6OblDtYYIpve9m+KvI9Z4C9qSEXlaGR6bTEYHReuglA==",
        "dependencies": {
          "call-bind": "^1.0.7",
          "es-errors": "^1.3.0",
          "get-intrinsic": "^1.2.4",
          "object-inspect": "^1.13.1"
        },
        "engines": {
          "node": ">= 0.4"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/simple-concat": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/simple-concat/-/simple-concat-1.0.1.tgz",
        "integrity": "sha512-cSFtAPtRhljv69IK0hTVZQ+OfE9nePi/rtJmw5UjHeVyVroEqJXP1sFztKUy1qU+xvz3u/sfYJLa947b7nAN2Q==",
        "funding": [
          {
            "type": "github",
            "url": "https://github.com/sponsors/feross"
          },
          {
            "type": "patreon",
            "url": "https://www.patreon.com/feross"
          },
          {
            "type": "consulting",
            "url": "https://feross.org/support"
          }
        ]
      },
      "node_modules/simple-get": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/simple-get/-/simple-get-4.0.1.tgz",
        "integrity": "sha512-brv7p5WgH0jmQJr1ZDDfKDOSeWWg+OVypG99A/5vYGPqJ6pxiaHLy8nxtFjBA7oMa01ebA9gfh1uMCFqOuXxvA==",
        "funding": [
          {
            "type": "github",
            "url": "https://github.com/sponsors/feross"
          },
          {
            "type": "patreon",
            "url": "https://www.patreon.com/feross"
          },
          {
            "type": "consulting",
            "url": "https://feross.org/support"
          }
        ],
        "dependencies": {
          "decompress-response": "^6.0.0",
          "once": "^1.3.1",
          "simple-concat": "^1.0.0"
        }
      },
      "node_modules/spdx-correct": {
        "version": "3.2.0",
        "resolved": "https://registry.npmjs.org/spdx-correct/-/spdx-correct-3.2.0.tgz",
        "integrity": "sha512-kN9dJbvnySHULIluDHy32WHRUu3Og7B9sbY7tsFLctQkIqnMh3hErYgdMjTYuqmcXX+lK5T1lnUt3G7zNswmZA==",
        "dependencies": {
          "spdx-expression-parse": "^3.0.0",
          "spdx-license-ids": "^3.0.0"
        }
      },
      "node_modules/spdx-exceptions": {
        "version": "2.5.0",
        "resolved": "https://registry.npmjs.org/spdx-exceptions/-/spdx-exceptions-2.5.0.tgz",
        "integrity": "sha512-PiU42r+xO4UbUS1buo3LPJkjlO7430Xn5SVAhdpzzsPHsjbYVflnnFdATgabnLude+Cqu25p6N+g2lw/PFsa4w=="
      },
      "node_modules/spdx-expression-parse": {
        "version": "3.0.1",
        "resolved": "https://registry.npmjs.org/spdx-expression-parse/-/spdx-expression-parse-3.0.1.tgz",
        "integrity": "sha512-cbqHunsQWnJNE6KhVSMsMeH5H/L9EpymbzqTQ3uLwNCLZ1Q481oWaofqH7nO6V07xlXwY6PhQdQ2IedWx/ZK4Q==",
        "dependencies": {
          "spdx-exceptions": "^2.1.0",
          "spdx-license-ids": "^3.0.0"
        }
      },
      "node_modules/spdx-license-ids": {
        "version": "3.0.17",
        "resolved": "https://registry.npmjs.org/spdx-license-ids/-/spdx-license-ids-3.0.17.tgz",
        "integrity": "sha512-sh8PWc/ftMqAAdFiBu6Fy6JUOYjqDJBJvIhpfDMyHrr0Rbp5liZqd4TjtQ/RgfLjKFZb+LMx5hpml5qOWy0qvg=="
      },
      "node_modules/sprintf-js": {
        "version": "1.1.3",
        "resolved": "https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.1.3.tgz",
        "integrity": "sha512-Oo+0REFV59/rz3gfJNKQiBlwfHaSESl1pcGyABQsnnIfWOFt6JNj5gCog2U6MLZ//IGYD+nA8nI+mTShREReaA==",
        "optional": true
      },
      "node_modules/statuses": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.1.tgz",
        "integrity": "sha512-RwNA9Z/7PrK06rYLIzFMlaF+l73iwpzsqRIFgbMLbTcLD6cOao82TaWefPXQvB2fOC4AjuYSEndS7N/mTCbkdQ==",
        "engines": {
          "node": ">= 0.8"
        }
      },
      "node_modules/string_decoder": {
        "version": "1.3.0",
        "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.3.0.tgz",
        "integrity": "sha512-hkRX8U1WjJFd8LsDJ2yQ/wWWxaopEsABU1XfkM8A+j0+85JAGppt16cr1Whg6KIbb4okU6Mql6BOj+uup/wKeA==",
        "dependencies": {
          "safe-buffer": "~5.2.0"
        }
      },
      "node_modules/strip-bom": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
        "integrity": "sha512-vavAMRXOgBVNF6nyEEmL3DBK19iRpDcoIwW+swQ+CbGiu7lju6t+JklA1MHweoWtadgt4ISVUsXLyDq34ddcwA==",
        "engines": {
          "node": ">=4"
        }
      },
      "node_modules/strip-outer": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/strip-outer/-/strip-outer-1.0.1.tgz",
        "integrity": "sha512-k55yxKHwaXnpYGsOzg4Vl8+tDrWylxDEpknGjhTiZB8dFRU5rTo9CAzeycivxV3s+zlTKwrs6WxMxR95n26kwg==",
        "dependencies": {
          "escape-string-regexp": "^1.0.2"
        },
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/strip-outer/node_modules/escape-string-regexp": {
        "version": "1.0.5",
        "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
        "integrity": "sha512-vbRorB5FUQWvla16U8R/qgaFIya2qGzwDrNmCZuYKrbdSUMG6I1ZCGQRefkRVhuOkIGVne7BQ35DSfo1qvJqFg==",
        "engines": {
          "node": ">=0.8.0"
        }
      },
      "node_modules/sumchecker": {
        "version": "3.0.1",
        "resolved": "https://registry.npmjs.org/sumchecker/-/sumchecker-3.0.1.tgz",
        "integrity": "sha512-MvjXzkz/BOfyVDkG0oFOtBxHX2u3gKbMHIF/dXblZsgD3BWOFLmHovIpZY7BykJdAjcqRCBi1WYBNdEC9yI7vg==",
        "dependencies": {
          "debug": "^4.1.0"
        },
        "engines": {
          "node": ">= 8.0"
        }
      },
      "node_modules/sumchecker/node_modules/debug": {
        "version": "4.3.4",
        "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",
        "integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",
        "dependencies": {
          "ms": "2.1.2"
        },
        "engines": {
          "node": ">=6.0"
        },
        "peerDependenciesMeta": {
          "supports-color": {
            "optional": true
          }
        }
      },
      "node_modules/sumchecker/node_modules/ms": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
        "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
      },
      "node_modules/supports-color": {
        "version": "7.2.0",
        "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
        "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
        "dependencies": {
          "has-flag": "^4.0.0"
        },
        "engines": {
          "node": ">=8"
        }
      },
      "node_modules/supports-preserve-symlinks-flag": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",
        "integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==",
        "engines": {
          "node": ">= 0.4"
        },
        "funding": {
          "url": "https://github.com/sponsors/ljharb"
        }
      },
      "node_modules/toidentifier": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
        "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==",
        "engines": {
          "node": ">=0.6"
        }
      },
      "node_modules/trim-repeated": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/trim-repeated/-/trim-repeated-1.0.0.tgz",
        "integrity": "sha512-pkonvlKk8/ZuR0D5tLW8ljt5I8kmxp2XKymhepUeOdCEfKpZaktSArkLHZt76OB1ZvO9bssUsDty4SWhLvZpLg==",
        "dependencies": {
          "escape-string-regexp": "^1.0.2"
        },
        "engines": {
          "node": ">=0.10.0"
        }
      },
      "node_modules/trim-repeated/node_modules/escape-string-regexp": {
        "version": "1.0.5",
        "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
        "integrity": "sha512-vbRorB5FUQWvla16U8R/qgaFIya2qGzwDrNmCZuYKrbdSUMG6I1ZCGQRefkRVhuOkIGVne7BQ35DSfo1qvJqFg==",
        "engines": {
          "node": ">=0.8.0"
        }
      },
      "node_modules/type-fest": {
        "version": "0.13.1",
        "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.13.1.tgz",
        "integrity": "sha512-34R7HTnG0XIJcBSn5XhDd7nNFPRcXYRZrBB2O2jdKqYODldSzBAqzsWoZYYvduky73toYS/ESqxPvkDf/F0XMg==",
        "optional": true,
        "engines": {
          "node": ">=10"
        },
        "funding": {
          "url": "https://github.com/sponsors/sindresorhus"
        }
      },
      "node_modules/type-is": {
        "version": "1.6.18",
        "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",
        "integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",
        "dependencies": {
          "media-typer": "0.3.0",
          "mime-types": "~2.1.24"
        },
        "engines": {
          "node": ">= 0.6"
        }
      },
      "node_modules/undici-types": {
        "version": "5.26.5",
        "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-5.26.5.tgz",
        "integrity": "sha512-JlCMO+ehdEIKqlFxk6IfVoAUVmgz7cU7zD/h9XZ0qzeosSHmUJVOzSQvvYSYWXkFXC+IfLKSIffhv0sVZup6pA=="
      },
      "node_modules/universalify": {
        "version": "0.1.2",
        "resolved": "https://registry.npmjs.org/universalify/-/universalify-0.1.2.tgz",
        "integrity": "sha512-rBJeI5CXAlmy1pV+617WB9J63U6XcazHHF2f2dbJix4XzpUF0RS3Zbj0FGIOCAva5P/d/GBOYaACQ1w+0azUkg==",
        "engines": {
          "node": ">= 4.0.0"
        }
      },
      "node_modules/unpipe": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
        "integrity": "sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ==",
        "engines": {
          "node": ">= 0.8"
        }
      },
      "node_modules/util-deprecate": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
        "integrity": "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw=="
      },
      "node_modules/utils-merge": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
        "integrity": "sha512-pMZTvIkT1d+TFGvDOqodOclx0QWkkgi6Tdoa8gC8ffGAAqz9pzPTZWAybbsHHoED/ztMtkv/VoYTYyShUn81hA==",
        "engines": {
          "node": ">= 0.4.0"
        }
      },
      "node_modules/validate-npm-package-license": {
        "version": "3.0.4",
        "resolved": "https://registry.npmjs.org/validate-npm-package-license/-/validate-npm-package-license-3.0.4.tgz",
        "integrity": "sha512-DpKm2Ui/xN7/HQKCtpZxoRWBhZ9Z0kqtygG8XCgNQ8ZlDnxuQmWhj566j8fN4Cu3/JmbhsDo7fcAJq4s9h27Ew==",
        "dependencies": {
          "spdx-correct": "^3.0.0",
          "spdx-expression-parse": "^3.0.0"
        }
      },
      "node_modules/vary": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
        "integrity": "sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg==",
        "engines": {
          "node": ">= 0.8"
        }
      },
      "node_modules/which": {
        "version": "2.0.2",
        "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
        "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
        "dependencies": {
          "isexe": "^2.0.0"
        },
        "bin": {
          "node-which": "bin/node-which"
        },
        "engines": {
          "node": ">= 8"
        }
      },
      "node_modules/wrappy": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
        "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ=="
      },
      "node_modules/xmlbuilder": {
        "version": "15.1.1",
        "resolved": "https://registry.npmjs.org/xmlbuilder/-/xmlbuilder-15.1.1.tgz",
        "integrity": "sha512-yMqGBqtXyeN1e3TGYvgNgDVZ3j84W4cwkOXQswghol6APgZWaff9lnbvN7MHYJOiXsvGPXtjTYJEiC9J2wv9Eg==",
        "engines": {
          "node": ">=8.0"
        }
      },
      "node_modules/yallist": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
        "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A=="
      },
      "node_modules/yargs-parser": {
        "version": "21.1.1",
        "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-21.1.1.tgz",
        "integrity": "sha512-tVpsJW7DdjecAiFpbIB1e3qxIQsE6NoPc5/eTdrbbIC4h0LVsWhnoa3g+m2HclBIujHzsxZ4VJVA+GUuc2/LBw==",
        "engines": {
          "node": ">=12"
        }
      },
      "node_modules/yauzl": {
        "version": "2.10.0",
        "resolved": "https://registry.npmjs.org/yauzl/-/yauzl-2.10.0.tgz",
        "integrity": "sha512-p4a9I6X6nu6IhoGmBqAcbJy1mlC4j27vEPZX9F4L4/vZT3Lyq1VkFHw/V/PUcB9Buo+DG3iHkT0x3Qya58zc3g==",
        "dependencies": {
          "buffer-crc32": "~0.2.3",
          "fd-slicer": "~1.1.0"
        }
      },
      "node_modules/yocto-queue": {
        "version": "0.1.0",
        "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
        "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
        "engines": {
          "node": ">=10"
        },
        "funding": {
          "url": "https://github.com/sponsors/sindresorhus"
        }
      }
    }
  }
  