import { Player, Controls } from '@lottiefiles/react-lottie-player';
export const Play = (src) => {
return (   
    <Player
    autoplay
    loop
    src={src}
    style={{ maxHeight: 'auto', maxWidth: 'auto', }}
    >
    <Controls visible={false}  />
    </Player>
  
)
}