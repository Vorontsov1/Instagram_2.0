import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { IPost } from '../../types/models.ts';
import Collection from '../../assets/svg/collection-svgrepo-com.svg';

const FeedGridItem = ({ post }: { post: IPost }) => {
  return (
    <View style={{flex: 1, padding: 1, aspectRatio: 1, maxWidth: '33.33%'}}>
      <Image source={{uri: post.image || post.images[0]}} style={{flex: 1}} />
      {post.images && (
        <Collection width={20} height={20} style={styles.collection} />
      )}
    </View>
  );
}

export default FeedGridItem;

const styles = StyleSheet.create({
    collection: {
        position: 'absolute',
        top: 7,
        right: 7,
    },
});