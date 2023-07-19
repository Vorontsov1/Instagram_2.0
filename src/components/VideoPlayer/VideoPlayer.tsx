import {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Video from 'react-native-video';
import colors from '../../theme/colors';
import Mute from '../../assets/svg/mute.svg';
import Unmute from '../../assets/svg/unmute.svg';

interface IVideoPlayer {
  uri: string;
  paused?: boolean;
}


const VideoPlayer = ({uri, paused}: IVideoPlayer) => {
  const [muted, setMuted] = useState(true);

  return (
    <View>
      <Video
        paused={paused}
        muted={muted}
        source={{uri}}
        style={styles.video}
        resizeMode="cover"
        repeat
      />
      <Pressable onPress={() => setMuted(v => !v)} style={styles.muteButton}>
        {muted ? (
          <Unmute width={17} height={17}  />
        ) : (
          <Mute width={17} height={17} />
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  muteButton: {
    backgroundColor: colors.black,
    padding: 5,
    position: 'absolute',
    bottom: 7,
    right: 7,
    borderRadius: 50,
  },
});

export default VideoPlayer;