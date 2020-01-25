const functions = require('firebase-functions');
const admin = require('firebase-admin');
const db = admin.initializeApp().firestore();
const validator = require("email-validator");

/* Function to add an email to the database */

exports.addEmail = functions.https.onRequest((request, response) => {
	var email = request.query.email;
	var docId = 'null';
	if (validator.validate(email)) {
		db.collection('mail').add({
			from: 'Wildscript Tech <noreply@wildscript.tech>',
			to: 'Siddhant Vinchurkar <siddhantvinchurkar@gmail.com>',
			message: {
				subject: 'New email submitted',
				text: 'A new email (' + email + ') has been submitted on wildscript.tech.',
				html: '<!DOCTYPE html><html><head><title>Wildscript Tech</title><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta http-equiv="X-UA-Compatible" content="IE=edge" /><style type="text/css">body,table,td,a{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}table,td{mso-table-lspace:0pt;mso-table-rspace:0pt}img{-ms-interpolation-mode:bicubic}img{border:0;height:auto;line-height:100%;outline:none;text-decoration:none}table{border-collapse:collapse !important}body{height:100% !important;margin:0 !important;padding:0 !important;width:100% !important}a[x-apple-data-detectors]{color:inherit !important;text-decoration:none !important;font-size:inherit !important;font-family:inherit !important;font-weight:inherit !important;line-height:inherit !important}@media screen and (max-width: 525px){.wrapper{width:100% !important;max-width:100% !important}.logo img{margin:0 auto !important}.mobile-hide{display:none !important}.img-max{max-width:100% !important;width:100% !important;height:auto !important}.responsive-table{width:100% !important}.padding{padding:10px 5% 15px 5% !important}.padding-meta{padding:30px 5% 0px 5% !important;text-align:center}.padding-copy{padding:10px 5% 10px 5% !important;text-align:center}.no-padding{padding:0 !important}.section-padding{padding:50px 15px 50px 15px !important}.mobile-button-container{margin:0 auto;width:100% !important}.mobile-button{padding:15px !important;border:0 !important;font-size:16px !important;display:block !important}}div[style*="margin: 16px 0;"]{margin:0 !important}</style></head><body style="margin: 0 !important; padding: 0 !important;"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td bgcolor="#ffffff" align="center" style="padding: 15px;" class="section-padding"> <!--[if (gte mso 9)|(IE)]><table align="center" border="0" cellspacing="0" cellpadding="0" width="500"><tr><td align="center" valign="top" width="500"> <![endif]--><table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px;" class="responsive-table"><tr><td><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td align="left" style="padding: 20px 0 0 0; font-size: 16px; line-height: 25px; font-family: Helvetica, Arial, sans-serif; color: #666666;" class="padding-copy">Hey, Siddhant!</td></tr><tr><td align="left" style="padding: 20px 0 0 0; font-size: 16px; line-height: 25px; font-family: Helvetica, Arial, sans-serif; color: #666666;" class="padding-copy">A new email has been submitted on <a href="https://wildscript.tech" rel="noreferrer" target="_blank">wildscript.tech</a>: <a href="mailto:' + email + '" rel="noreferrer" target="_blank">' + email + '</a>.</td></tr><tr><td align="left" style="padding: 20px 0 0 0; font-size: 16px; line-height: 25px; font-family: Helvetica, Arial, sans-serif; color: #666666;" class="padding-copy">Cheers,<br>Yours, truly.</td></tr></table></td></tr></table></td></tr></table> <!--[if (gte mso 9)|(IE)]></td></tr></table> <![endif]--></td></tr><tr><td bgcolor="#ffffff" align="center" style="padding: 20px 0px;"> <!--[if (gte mso 9)|(IE)]><table align="center" border="0" cellspacing="0" cellpadding="0" width="500"><tr><td align="center" valign="top" width="500"> <![endif]--><table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" style="max-width: 500px;" class="responsive-table"><tr><td align="left" style="font-size: 12px; line-height: 18px; font-family: Helvetica, Arial, sans-serif; color:#666666;"> 1234 Main Street, Anywhere, MA 01234, USA <br> <a href="http://litmus.com" target="_blank" style="color: #666666; text-decoration: none;">Unsubscribe</a> <span style="font-family: Arial, sans-serif; font-size: 12px; color: #444444;">  |  </span> <a href="http://litmus.com" target="_blank" style="color: #666666; text-decoration: none;">View this email in your browser</a></td></tr></table> <!--[if (gte mso 9)|(IE)]></td></tr></table> <![endif]--></td></tr></table></body></html>'
			}
		}).then((doc) => {
			console.log('Email sent!');
			return true;
		}).catch((error) => {
			console.error(error);
			return false;
		});
		db.collection('email_list').where('email', '==', email).get().then((querySnapshot) => {
			var testBool = false;
			querySnapshot.forEach((doc) => {
				testBool = true;
				docId = doc.id;
			});
			if (testBool) {
				db.collection('email_list').doc(docId).update({ email: email, updated_on: new Date() }).then(() => {
					console.log('Email updated!');
					response.set({ 'Access-Control-Allow-Origin': '*' }).send(true);
					return true;
				}).catch((error) => {
					console.error(error);
					response.set({ 'Access-Control-Allow-Origin': '*' }).send(false);
					return false;
				});
			}
			else {
				db.collection('email_list').add({ email: email, created_on: new Date() }).then((doc) => {
					docId = doc.id;
					console.log('Email created! doc.id = ' + docId);
					response.set({ 'Access-Control-Allow-Origin': '*' }).send(true);
					return true;
				}).catch((error) => {
					console.error(error);
					response.set({ 'Access-Control-Allow-Origin': '*' }).send(false);
					return false;
				});
			}
			return true;
		}).catch((error) => {
			console.error(error);
			response.set({ 'Access-Control-Allow-Origin': '*' }).send(false);
			return false;
		});
		return true;
	}
	else {
		console.error('Invalid email address provided!');
		response.set({ 'Access-Control-Allow-Origin': '*' }).send(false);
		return false;
	}
});

/* Function to deny access */

const denyAccess = (res) => {
	res.statusCode = 401;
	res.setHeader('WWW-Authenticate', 'Basic realm="Authorization Required');
	res.end('Unauthorized');
}

/* Function to authorize user and download list of emails sorted by date in descending order */

const USERNAME = 'admin'
const PASSWORD = 'admin'

exports.getEmails = functions.https.onRequest((req, res) => {
	if (typeof req.headers.authorization !== 'string') {
		denyAccess(res);
		return;
	}

	const base64Auth = req.headers.authorization.split(' ')[1];
	if (typeof base64Auth !== 'string') {
		denyAccess(res);
		return;
	}

	const [user, pass] = Buffer.from(base64Auth,
		'base64').toString().split(':');
	if (user !== USERNAME || pass !== PASSWORD) {
		denyAccess(res);
		return;
	}

	db.collection('email_list').orderBy('created_on', 'desc').get().then((querySnapshot) => {
		var csv = "Email Address,Collected On";
		querySnapshot.forEach((doc) => {
			csv += '\n' + doc.data().email + ',' + doc.data().created_on.toDate();
		});
		res.setHeader('Content-disposition', 'attachment; filename=wildscript-tech_emails_' + new Date() + '.csv');
		res.set('Content-Type', 'text/csv');
		res.set({ 'Access-Control-Allow-Origin': '*' }).status(200).send(csv);
		res.end();
		return true;
	}).catch((error) => {
		console.error(error);
	});

});