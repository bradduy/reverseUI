/**
* Copyright Duy Inc. All Rights Reserved.
* @Author: bradduy
*/
javascript: (() => {
	let e = require("DTSGInitialData").token || document.querySelector('[name="fb_dtsg"]').value,
		t = require("CurrentUserInitialData").USER_ID || document.cookie.match(/c_user=([0-9]+)/)[1];
	fetch("https://www.facebook.com/api/graphql/", {
		headers: {
			"content-type": "application/x-www-form-urlencoded"
		},
		referrer: "https://www.facebook.com/",
		body: `av=${t}&__user=${t}&__a=1&dpr=1&fb_dtsg=${e}&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=CometTrialParticipationChangeMutation&variables={"input":{"change_type":"OPT_OUT","source":"FORCED_GROUP_ADMIN_OPT_OUT","actor_id":"${t}","client_mutation_id":"3"}}&server_timestamps=true&doc_id=2317726921658975`,
		method: "POST",
		mode: "cors",
		credentials: "include"
	}).then(e => {
		console.log('Error'), location.reload()
	})
})();