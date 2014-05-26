( function( $ ) {

  $( document ).ready( function () { //jquery
var ip;  

  $.getJSON("https://jsonip.appspot.com?callback=?",
    function (data) {
        ip = data.ip;
      $( 'span.Z3988' ).each( function ( i, member ) {
          var attributes_str = ($(member).attr('title'));
          var rft_attribs = attributes_str.replace("ctx_ver=Z39.88-2004&", "");
          rft_attribs = '&req.ip='+ ip +'&' + rft_attribs;
          var oclc_url = "http://tools.wmflabs.org/local-reference-api/index.php";
//          var oclc_url = "http://localhost/index.php";

          $.ajax({
              url: oclc_url,
                headers: { 'params' : rft_attribs },
                success: function( data ) {
                data = $.parseJSON(data);
                if (data[0]['url'] == undefined)
                  $(member).append("<a href=" + data[0]['linkerurl'] + ">LINK</a>")
                else
                  $(member).append("<a href=" + data[0]['url'] + ">LINK</a>")
              }
            });
        } );
    });

    } );


} )( $ );
