import { YoutubeComponent } from "./style";

function YoutubeVideo({ src }: { src: string }) {
  return (
    <YoutubeComponent>
      <iframe src={src} frameBorder="0" allowFullScreen></iframe>
    </YoutubeComponent>
  );
}

export default YoutubeVideo;
