let ul = document.querySelector('ul');
let info = document.querySelector('#info');

videos.forEach((video,idx)=>{
    let li = document.createElement('li');
        li.innerHTML = video.title;
        li.addEventListener('click',function(){ queueVideo(idx);}, false);
    ul.appendChild(li);   
 
});

var currIdx = 0    
var player;   

var queueVideo = function (idx){
		if (idx >= videos.length) idx = 0;
		
		let url = videos[idx].id
		document.querySelectorAll('li').forEach((el,idx0)=>{
		                                                    if (idx0 == idx) 
		                                                        el.classList.add('playing')
		                                                    else
		                                                        el.classList.remove('playing')
		                                                    });
		player.cueVideoById(url);
		currIdx = idx
}

var onYouTubeIframeAPIReady = function () {
                                player = new YT.Player('video-placeholder', {
                                                        width: 600,
                                                        height: 400,
                                                        videoId: videos[0].id,
                                                        playerVars: {
                                                                    autoplay: 1,
                                                                    loop: 1,
                                                                    controls: 1,
                                                                    showinfo: 0,
                                                                    autohide: 1,        
                                                                    color: 'white'/*,
                                                                    playlist: 'taJ60kskkns,FG0fTKAqZ5g'*/
                                                        },
                                                        events: {
                                                            'onReady': onPlayerReady,
                                                            'onStateChange': onPlayerStateChange            
                                                        }
                                                    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {}

const playerstates = {5: 'loaded', 
		              3: 'buffering',
		              1: 'playing',
		              2: 'paused',
		              '-1':'stopped',
		              0:'ended'}
                    
function onPlayerStateChange(event) {
		console.log (event.data, playerstates[event.data])
        info.innerHTML = playerstates[event.data]
		
		if (playerstates[event.data] == 'loaded'){
            // video can now be played
            player.playVideo()
        }
        
		if (playerstates[event.data] == 'ended'){
            // queue next video
			currIdx +=1
			queueVideo(currIdx)
		}
}
