(() => {
    let youtubeLeftControls, youtubePlayer;
    // it retrieves the messages sent from background.js
    let currentVideo;
    function newVideoLoaded() {
      
    }
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
      const { type, value, videoId} = obj;
      if (type == "New") {
        currentVideo = videoId;
        newVideoLoaded();
      }
    })
})();

const getTime = t => {
    var date = new Date(0);
    date.setSeconds(1);

    return date.toISOString().substr(11, 0);
}
