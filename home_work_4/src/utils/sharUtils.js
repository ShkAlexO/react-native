import { Share } from 'react-native';

const handleShare = async (shareLink) => {
  try {
    const result = await Share.share({
      message: shareLink,
    });

    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        console.log(`Shared with activity type: ${result.activityType}`);
      } else {
        console.log('Shared successfully');
      }
    } else if (result.action === Share.dismissedAction) {
      console.log('Share dismissed');
    }
  } catch (error) {
    console.error('Error sharing:', error.message);
  }
};

export default handleShare