export const LoginVideo = () => {
  return (
    <div class='login__video-block'>
      <video preload='auto' muted playsinline autoplay='autoplay' loop='loop' class='login__video'>
        <source src='video/login-city.webm' type='video/webm; codecs="vp8, vorbis"' />
        <source src='video/login-city.mp4' type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
        Video tag is not supported in this browser.
      </video>
    </div>
  );
};

export default LoginVideo;
