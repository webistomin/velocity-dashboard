export const LoginVideo = () => {
  return (
    <div class='login__video-block'>
      <video
        preload='auto'
        muted
        playsinline
        autoplay='autoplay'
        loop='loop'
        poster='/img/login-poster.jpg'
        class='login__video'>
        <source src='video/login-city.mp4' type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
        Тег video не поддерживается вашим браузером.
      </video>
    </div>
  );
};

export default LoginVideo;