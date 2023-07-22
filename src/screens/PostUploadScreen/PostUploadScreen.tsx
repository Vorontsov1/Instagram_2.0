import {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {
  Camera,
  CameraType,
  FlashMode,
  CameraRecordingOptions,
  CameraPictureOptions,
  VideoQuality,
} from 'expo-camera';
import {SvgXml} from 'react-native-svg';
import colors from '../../theme/colors';

const closeSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>`;
const settingsSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 18a1.65 1.65 0 0 0 .33 1.82l.06 .06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V22a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H2a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06c.26.26.61.44 1 .58a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82 1.65 1.65 0 0 0 1.51 1H22a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`;
const flashSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`;
const cameraSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`;
const photoLibrarySvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="6" y1="2" x2="6" y2="22"/><path d="M6 15l4-4a3 3 0 0 1 3 0l 4 4"/></svg>`;
const photoCameraSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`;

CameraType.back;
CameraType.front;
VideoQuality['480p'];

const PostUploadScreen = () => {
  const [hasPermissions, setHasPermissions] = useState<boolean | null>(null);
  const [cameraType, setCameraType] = useState<CameraType>();
  const [flash, setFlash] = useState(FlashMode.off);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

    const cameraRef = useRef<Camera>(null);
    
  const flashModes = [
    FlashMode.off,
    FlashMode.on,
    FlashMode.auto,
    FlashMode.torch,
  ];

  const flashModeToIcon = {
    [FlashMode.off]: 'flash-off',
    [FlashMode.on]: 'flash-on',
    [FlashMode.auto]: 'flash-auto',
    [FlashMode.torch]: 'highlight',
  };

  const flipCameraType = () => {
    setCameraType(
      cameraType === CameraType.back ? CameraType.front : CameraType.back,
    );
  };

  const flipFlash = () => {
    const currentIndex = flashModes.indexOf(flash);
    const nextIndex =
      currentIndex === flashModes.length - 1 ? 0 : currentIndex + 1;
    setFlash(flashModes[nextIndex]);
  };
    
    const takePicture = async () => {
        if (!isCameraReady || !cameraRef.current || isRecording) {
            return;
        }

           const options: CameraPictureOptions = {
             quality: 0.7,
             base64: false,
             exif: false,
           };
     
        setIsProcessing(true);
        const result = await cameraRef.current.takePictureAsync(options);
      }
    
    const startRecording = async () => { 
        if (!isCameraReady || !cameraRef.current || isRecording) {
          return;
        }

         const options: CameraRecordingOptions = {
           quality: Camera.Constants.VideoQuality['640:480'],
           maxDuration: 60,
           maxFileSize: 10 * 1024 * 1024,
           mute: false,
           mirrorVideo: false,
         };
        setIsRecording(true);
        try {
            const result = await cameraRef.current.recordAsync(options);
               console.log(result);
        } catch (error) {
            console.log(error);
        }
       setIsRecording(false);
    }
         
   
    

    const stopRecording = async () => { 
       if (isRecording) {
           cameraRef.current?.stopRecording();
           setIsRecording(false);
       }
    }

  useEffect(() => {
    const getPermission = async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonePermission =
        await Camera.requestMicrophonePermissionsAsync();
      setHasPermissions(
        cameraPermission.status === 'granted' &&
          microphonePermission.status === 'granted',
      );
    };
    getPermission();
  }, []);

  if (hasPermissions === null) {
    return <Text>Loading...</Text>;
  }

  if (hasPermissions === false) {
    return <Text>No access to the camera</Text>;
  }

  return (
    <View style={styles.page}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        type={cameraType}
        ratio="4:3"
        flashMode={flash}
        onCameraReady={() => setIsCameraReady(true)}
      />
      <View style={[styles.buttonContainer, {top: 25}]}>
        <SvgXml xml={closeSvg} width="35" height="35" />

        {/* flash */}
        <TouchableOpacity onPress={flipFlash}>
          <SvgXml xml={flashSvg} width="35" height="35" />
        </TouchableOpacity>

        {/* settings */}
        <SvgXml xml={settingsSvg} width="30" height="30" />
      </View>

      {/* library */}
      <View style={[styles.buttonContainer, {bottom: 25}]}>
        <SvgXml xml={photoLibrarySvg} width="30" height="30" />

        {/*take video  */}
        {isCameraReady && (
          <TouchableOpacity
            onPress={takePicture}
            onLongPress={startRecording}
            onPressOut={stopRecording}>
            <View
              style={[
                styles.circle,
                {backgroundColor: isRecording ? colors.accent : colors.white},
              ]}
            />
          </TouchableOpacity>
        )}

        {/*take pictures  */}
        <TouchableOpacity onPress={flipCameraType}>
          <SvgXml xml={photoCameraSvg} width="35" height="35" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostUploadScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    width: '100%',
    aspectRatio: 3 / 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',

    position: 'absolute',
  },
  circle: {
    width: 90,
    aspectRatio: 1,
    borderRadius: 100,
    backgroundColor: colors.accent,
  },
});
