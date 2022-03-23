# youtube-api-player
Using the YouTube IFrame API to play my own list of videos.
Videos are in the format:
```
title -- youtube URL
```
The list of videos is in data/videos.txt
```
SNAP! - The Power (Official Video) -- https://www.youtube.com/watch?v=nm6DO_7px1I
Pet Shop Boys - Suburbia -- https://www.youtube.com/watch?v=-VCqAjYO3NM
```

They are parsed by PHP into a video object:
```
var videos [
             {title: "SNAP! - The Power (Official Video)", 
              url: "https://www.youtube.com/watch?v=nm6DO_7px1I", id: "nm6DO_7px1I"},
              
             {title: "Pet Shop Boys - Suburbia", 
              url: "https://www.youtube.com/watch?v=-VCqAjYO3NM", id: "-VCqAjYO3NM"}
            ]
```
The videos play one after the other when the ended event fires.
