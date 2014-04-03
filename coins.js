( function( $ ) {

$( document ).ready( function () { //jquery
	$( 'span.Z3988' ).each( function ( i, member ) {
		var attributes_str = ($(member).attr('title'));
		// var attributes = attributes_str.split("&")
		// var attributes_kv = {};
		// for (var i = 0; i < attributes.length; i++) {
			// var aTemp = attributes[i].split("=");
			// if (aTemp[1].length > 0) {
				// attributes_kv[aTemp[0]] = unescape(aTemp[1]);
			// }
		// }
		// console.log(attributes_kv);
		var rft_attribs = attributes_str.replace("ctx_ver=Z39.88-2004&", "");
		console.log(rft_attribs);
		var oclc_url = "https://worldcat.org/webservices/kb/openurl/resolve?fallback=openaccess,resolver&wskey=7S8RWS0d5ySU0qpZYE78OXGOhi34dR7RFV3y8KbiGB7vSC6LKhwZkGYIqDDlpJls2IHuY3EXI5sZt1UM&req.ip=132.174.88.129&" + rft_attribs;

		$.ajax({
			url: oclc_url,
			complete: function( data ) {
				console.log(data);
			}
		});

	} );
} );


} )( $ );
