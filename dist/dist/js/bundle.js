/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! exports provided: str */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"str\", function() { return str; });\nconst str = 'I am importing now from main';\r\n\r\n\r\n\r\n\r\n// (function start() {\r\n//     // When team loog is clicked - teams stats and players are displayed\r\n//     document.querySelectorAll('.nav__side img').forEach(team => {\r\n//         team.addEventListener('click', (e) => {\r\n//             displayPlayers(e);\r\n//             displayTeamStatus(e);\r\n//         });\r\n//     });\r\n    \r\n    \r\n//     function displayPlayers(e) {\r\n//         const clickedTeam = e.target.dataset.teamname;\r\n//         //fetch players data from clicked team\r\n//         fetchPlayerData(clickedTeam)\r\n//         //For each players a html with their picture and informations will be created and inserted\r\n//         .then(response => response.forEach(resp => {\r\n//             const html = `\r\n//             <div class=\"player__profile\" dataset=\"thisPlayer\">\r\n//                  <img src=\"https://nba-players.herokuapp.com/players/${resp.LastNameFirstName}\" alt=\"${resp.fanDuelName}\">\r\n//                  <p>Name: ${resp.fanDuelName}</p>\r\n//                  <p>Position: ${resp.PositionCategory}</p>\r\n//                  <p>Salary: $${resp.Salary}</p>\r\n//             </div>\r\n//             `;\r\n//             document.querySelector('.players').insertAdjacentHTML('beforeend', html);\r\n//         }));\r\n//     }\r\n\r\n//     function displayTeamStatus(e) {\r\n//         const clickedTeam = e.target.dataset.teamname;\r\n//         //fetch team stats data\r\n//         fetchTeamData(clickedTeam)\r\n//         //For each team a html with their logo and stats will be created and inserted\r\n//         .then(resp => {\r\n//             const html = `\r\n//             <div class=\"team__stats-team\">\r\n//                 <img src=\"/images/Logos/teams_logos/${clickedTeam}_logo.svg\" alt=\"${resp.name}\">\r\n//                  <p>${resp.name}</p>\r\n//                  <p>W-L: ${resp.wins}-${resp.losses}</p>\r\n//                  <p>PPG: ${resp.poinsPerGame}</p>\r\n//                  <p>%FT: ${resp.FreeThrowsPercentage}</p>\r\n//                  <p>APG: ${resp.assistsPerGame}</p>\r\n//                  <p>BPG: ${resp.blocksPerGame}</p>\r\n//                  <p>RPG: ${resp.reboundsPerGame}</p>\r\n//                  <p>3PTAPG: ${resp.threePointersAttemptedPerGame}</p>\r\n//                  <p>%3PT: ${resp.threePointsPercentage}</p>\r\n//                  <p>TOPG: ${resp.turnoverPerGames}</p>\r\n//             </div>\r\n//             `;\r\n//             document.querySelector('.team__stats').insertAdjacentHTML('beforeend', html);\r\n//         });\r\n//     }\r\n// })();\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ });