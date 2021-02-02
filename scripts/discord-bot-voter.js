// ==UserScript==
// @name         Discord Bot Voter
// @version      1
// @author       fiammanda
// @match        https://top.gg/bot/*
// @grant        none
// ==/UserScript==

'use strict';

let skip = setInterval(vote, 500);

function vote() {
  if (document.getElementById('modal-root')) {
		document.querySelector('#modal-root [style="padding: 20px;"] .btn:last-child').click();
    document.getElementById('votingvoted').click();
    clearInterval(skip);
	}
}
