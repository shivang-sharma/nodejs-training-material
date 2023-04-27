

fs.readFile( "file.json", function ( err, data ) {
    if ( err ) {
      console.error( err );
    }
    console.log( data );
  });
  