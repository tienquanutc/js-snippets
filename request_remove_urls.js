//request_remove_urls.js

async function findNewRequestButton() {
    return new Promise((resolve, reject) => {
        const id = setInterval(() => {
            const newRequestButton = Array.from(document.querySelectorAll("[role=button]")).find(it => it.textContent === "New Request")
            if (newRequestButton != null) {
                resolve(newRequestButton)
                clearInterval(id)
            }
        }, 1000)
    })
}


async function findRemoveAllUrlsWithPrefixLabel() {
    return new Promise((resolve, reject) => {
        const id = setInterval(() => {
            const label = Array.from(document.querySelectorAll("[aria-label='New Request'] label")).find(it => it.textContent === "Remove all URLs with this prefix")
            if (label != null) {
                resolve(label)
                clearInterval(id)
            }
        }, 1000)
    })
}

async function findEnterUrlInput() {
    return new Promise((resolve, reject) => {
        const id = setInterval(() => {
            const input = Array.from(document.querySelectorAll("[aria-label='New Request'] input[type=text]")).find(it => it.placeholder === "Enter URL")
            if (input != null) {
                resolve(input)
                clearInterval(id)
            }
        }, 1000)
    })
}

async function findNextButton() {
    return new Promise((resolve, reject) => {
        const id = setInterval(() => {
            const button = Array.from(document.querySelectorAll("[aria-label='New Request'] [role=button]")).find(it => it.textContent === "Next")
            if (button != null) {
                resolve(button)
                clearInterval(id)
            }
        }, 1000)
    })
}

async function findSubmitRequestButton() {
    return new Promise((resolve, reject) => {
        const id = setInterval(() => {
            const button = Array.from(document.querySelectorAll("[role=dialog] [role=button]")).find(it => it.textContent === "Submit request" || it.textContent === "Close")
            if (button != null) {
                resolve(button)
                clearInterval(id)
            }
        }, 1000)
    })
}


async function removePrefixUrl(url) {
    console.log(`remove url ${url}`);
    const newRequestButton = await findNewRequestButton();
    newRequestButton.click();

    const removeAllUrlsWithPrefixLabel = await findRemoveAllUrlsWithPrefixLabel();
    removeAllUrlsWithPrefixLabel.click();

    const enterUrlInput = await findEnterUrlInput();
    enterUrlInput.focus();
    enterUrlInput.value = url

    const nextButton = await findNextButton();
    nextButton.setAttribute("aria-disabled", "false");
    nextButton.click()

    const submitRequestButton = await findSubmitRequestButton()
    submitRequestButton.click()
}

const delay = t => new Promise(resolve => setTimeout(resolve, t));

//const urls = ["https://apkcombo.com/skip-ads-for-youtube-auto-skip-ads-pro/com.skipads.skipadsyoutubepro.skipadspro/", "https://apkcombo.com/daily-tube-block-ads-video/com.dailyTube.video.mp4music/", "https://apkcombo.com/floating-tube-no-ads/com.alexpham.floatubenoads/", "https://apkcombo.com/vanced-tube-video-player-tips-no-ads-vanced-tube/com.tocabvancedtubeguid.vancd1/", "https://apkcombo.com/yo-tuber-block-ads-on-video/com.freetube.skipads.adsfreetube.yotuber/", "https://apkcombo.com/video-uploader-no-ads/dev.hdcstudio.videouploaderpro/", "https://apkcombo.com/bluetube-global-popular-video-no-ads-pip/com.hcmfactory.android.bluetubepro/", "https://apkcombo.com/adblocker-for-youtube/com.yab.android.yab/", "https://apkcombo.com/poptube-block-ads-on-video/com.poptube.advancedtuber/", "https://apkcombo.com/yuplayer-free-video-player-no-ads-beta/me.nidhinradh.yu_player/", "https://apkcombo.com/ru/ad-skipper-for-youtube-skip-mute-youtube-ads-%E2%9C%94/appbuck3t.youtubeadskipper/", "https://apkcombo.com/pure-tuber-no-ads-tube-and-free-advanced-premium/com.VideoRagrajPlayer.SnapVid/", "https://apkcombo.com/musical-youtube-ad-free-floating-player-with-queue/com.musicalyoutube.floatingplayer/", "https://apkcombo.com/youtube-vanced-block-all-ads/playvanced.adfree.skipads/", "https://apkcombo.com/ar/video-player-for-youtube-no-ads/net.adfree.noadstube.extra/", "https://apkcombo.com/poptube-music-block-video-ads/com.arp.dailyfloattube.musicstream.moviestream/", "https://apkcombo.com/newpipe-block-ads-on-video/com.newpipe.vanced/", "https://apkcombo.com/ru/block-all-ads-for-youtube-vanced-ads/com.video.stopad/", "https://apkcombo.com/play-lite/com.panagola.app.playlite/", "https://apkcombo.com/adskip-for-youtube/com.cygery.adskip.xda/", "https://apkcombo.com/hi/vanced/com.biomes.vanced/", "https://apkcombo.com/pure-tube-block-ads-for-video/paul.videotube.vancedapp.vancedtube/old-versions/", "https://apkcombo.com/yt-community/com.wcommunity_5852538/", "https://apkcombo.com/videotube-youtube/inc.android.videotube/old-versions/1.2.25/", "https://apkcombo.com/meditation-music-free-no-ads/com.wfreemeditationmusicnoads_7844978/", "https://apkcombo.com/fr/video-player-for-youtube-no-ads/net.adfree.noadstube.extra/", "https://apkcombo.com/smart-tube-block-ads-on-video/mp4.apps.smart_tube.video/", "https://apkcombo.com/zh/video-player-for-youtube-no-ads/net.adfree.noadstube.extra/", "https://apkcombo.com/xtream-player-no-ads/com.neobilas.xtreamiptvcodeplayer/", "https://apkcombo.com/es/block-all-ads-for-youtube-vanced-ads/com.video.stopad/", "https://apkcombo.com/es/background-block-ads-youtube-vanced/com.videonotshow.block/", "https://apkcombo.com/613tube/com.zeeroapps.tube_app/", "https://apkcombo.com/vanced-app-free-block-all-ads-for-video-tube/batman.playtube.blockads.vancedapp/", "https://apkcombo.com/fab-adblocker-browser/com.hsv.freeadblockerbrowser/", "https://apkcombo.com/vanced-app-block-ads-for-video-tube-music-tube/nik.tube.videotube.vancedapp/", "https://apkcombo.com/smart-tube-block-ads-on-video/vpa.videoplayer.smarttube/", "https://apkcombo.com/pure-music-tube-block-ads-for-video-tube-music/bak.videotube.musictube.puremusictube/", "https://apkcombo.com/vanced-app-block-ads-for-video-tube-music-tube/vancedapp.videotube.freemusic/", "https://apkcombo.com/th/ad-skipper-for-youtube-skip-mute-youtube-ads-%E2%9C%94/appbuck3t.youtubeadskipper/", "https://apkcombo.com/play-tube-block-ads-for-video/com.free.playtube.videotube.musictube/", "https://apkcombo.com/poptube-music-video-skip-ads/com.poptubepremium.advancedtuber/", "https://apkcombo.com/protube-block-ads-on-video/io.proutube_tube.proutube/", "https://apkcombo.com/play-tube-ads-block-on-video/com.mememem.videoplayad/", "https://apkcombo.com/you-vanced-app-block-ads-for-video-downloader/com.vancedyoudownloader.utubvideodownload/", "https://apkcombo.com/viatube-block-ads-on-video/com.viatube.blockadsvideo.app/", "https://apkcombo.com/time-lapse-camera-time-lapse-video-pro-no-ads/com.kaka.mama.studios.timelapse.timelapsecamera.videorecorder.pro/", "https://apkcombo.com/play-tube-block-ads-video/fule.puretube.playtube/", "https://apkcombo.com/ko/ad-skipper-for-youtube-skip-mute-youtube-ads-%E2%9C%94/appbuck3t.youtubeadskipper/", "https://apkcombo.com/tube-video-block-ads-video/uvtube.vanced.adsfree.video.backgroundplayer/", "https://apkcombo.com/free-block-all-ads-for-vanced-ads-tips-walkthrough/com.bestnewstopadvideoonlinetips.govidestopdeguidetips/", "https://apkcombo.com/screen-recorder-pro-paid-premium-features-no-ads/com.me.screenrecorder.pro/", "https://apkcombo.com/free-block-all-ads-for-vanced-ads-guide/com.guidevideo.stopde/", "https://apkcombo.com/video-tube-ads-blocker/video.player.vanced/", "https://apkcombo.com/vanced-pure-auto-ad-blocking-block-ads-for-video/arsia.videotube.blockads.vancedpure/", "https://apkcombo.com/video-tube-block-ads-for-tube/hass.playtube.musictube.videotube/", "https://apkcombo.com/bee-tuber-block-ads-on-video/com.bee.tuber.skipads.advancedtuber/", "https://apkcombo.com/play-tube-block-ads-on-video/com.vancedtube.playtubevideo/", "https://apkcombo.com/touch-lock-no-ads-no-root/com.duna.touchlockpro/", "https://apkcombo.com/ru/background-block-ads-youtube-vanced/com.videonotshow.block/", "https://apkcombo.com/screen-recorder-free-no-ads/com.arts.recordscreen/", "https://apkcombo.com/cleantube-block-video-ads/com.sgebrelibanos.aderaser/", "https://apkcombo.com/muetube/amerigo.filetransfer.filemanager/", "https://apkcombo.com/flv-video-player-no-ads/air.br.com.bitlabs.FLVPlayerAdFree/", "https://apkcombo.com/ad-blocker-turbo/com.adblocker.browser/", "https://apkcombo.com/terse-music-player-no-ads-shake-to-switch/com.gmac.music/", "https://apkcombo.com/wanced-tube-mp3-block-ads/com.bimilyoncu.sscoderr.mp3music/", "https://apkcombo.com/playtube-ads-blocker-in-videos/com.free.video.player.tuber/", "https://apkcombo.com/ko/block-all-ads-for-youtube-vanced-ads/com.video.stopad/", "https://apkcombo.com/play-tube-block-ads-for-videos/mue.tube.music/", "https://apkcombo.com/id/video-player-for-youtube-no-ads/net.adfree.noadstube.extra/", "https://apkcombo.com/around-me-no-ads/com.wowthisapp.cercademi/", "https://apkcombo.com/floating-ytube-multitasking-no-ads/multitasking.floatingtube/", "https://apkcombo.com/peektube-advanced-tube-videos-block-ads/peektube.you.vanced.tube.videos.app/", "https://apkcombo.com/adblocker-ultimate-browser/s.sdownload.adblockerultimatebrowser/", "https://apkcombo.com/rhythm-music-player-no-ads/com.music.rhythmPlayer/", "https://apkcombo.com/free-adblocker-ad-blocker-for-top-apps-all-in-1/com.myskipper.allineone.adblocker/", "https://apkcombo.com/pro-player-audio-and-video-player-no-ads/com.wProPlayer_7943075/", "https://apkcombo.com/89x-no-ads/com.meerkatapps.eightyninex.nonfree/", "https://apkcombo.com/onion-search-browser-no-ads/com.darkweb.genesissearchengine.noads/", "https://apkcombo.com/kiduplayer-free-video-player-no-ads-beta/me.nidhinradh.kidu_player/", "https://apkcombo.com/ad-blocker-turbo-adblocker-b/com.adblocker.turbo.browser/", "https://apkcombo.com/zh/block-all-ads-for-youtube-vanced-ads/com.video.stopad/", "https://apkcombo.com/reeltube-block-ads-on-video/com.finik.reeltube/", "https://apkcombo.com/ilite-pro-no-ads-lite-app-for-all-social-media/the.losers.lite.pro/", "https://apkcombo.com/video-play-tube-ads-blocker/com.playtube.vancedbackgroundplayer/"]

// for (let i = 0; i < urls.length; i++) {
//     const url = urls[i]
//     await removePrefixUrl(url)
//     await delay(2000)
// }
