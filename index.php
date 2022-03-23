 <!DOCTYPE html>
 <html lang='en'>
  <head>
    <meta charset='utf-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <meta name='description' content='Youtube player.'>
    <meta name='keywords' content='youtube, api, javascript'>
    <meta name='author' content='William Sengdara'>  
   <title>YouTube API automatic video player</title>
   <link rel='stylesheet' href='css/style.css'>
  </head>
  <body>
    <h3>YouTube API automatic video player</h3>
    <div id='info'>Play the first song and the rest will auto play</div>
    <div id="video-placeholder"></div>
    <ul></ul>
    <script src="https://www.youtube.com/iframe_api"></script>
    <script>
     var videos = [
                    <?php
                            $videos = "data/videos.txt";
                            $handle = fopen( $videos , "r");
                            if ($handle) {
                                while (($line = fgets($handle)) !== false) {
                                    $line = trim($line);
                                    if (!strlen($line)) continue;
                                    
                                    $tmp   = explode('--', $line);
                                    $title = trim($tmp[0]);
                                    $url   = trim($tmp[1]);
                                    $id    = explode('=',$url)[1];
                                    // sometimes id includes playlist so remove that
                                    if ( strpos($id,'&') != -1){
                                    	$id = explode('&', $id)[0]; // first index
                                    }
                                    
                                    echo "{title: \"$title\", url: \"$url\", id: \"$id\"},\n";
                                }

                                fclose($handle);
                            } else {
                                // error opening the file.
                            }       
                    ?>
                    
                    ];
    </script>
    <script src='js/main.js'></script>
  </body>
 </html>
