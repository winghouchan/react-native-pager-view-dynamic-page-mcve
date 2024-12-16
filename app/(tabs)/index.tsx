import { StyleSheet, View, Pressable } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import PagerView from 'react-native-pager-view';
import { useEffect, useRef, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const safeAreaInsets = useSafeAreaInsets();
  const [pages, setPages] = useState([0]);
  const pagerViewRef = useRef<PagerView>(null);

  const addNewPage = () => {
    console.log('Add new page');
    setPages((pages) => [...pages, pages.length]);
  };

  const onNewPage = () => {
    console.log('Handle new page');
    pagerViewRef.current?.setPage(pages.length - 1);
  };

  useEffect(() => {
    onNewPage();
  }, [pages.length]);

  return (
    <View style={{ paddingTop: safeAreaInsets.top, flex: 1 }}>
      <PagerView initialPage={0} ref={pagerViewRef} style={{ flex: 1 }}>
        {pages.map((page, index) => (
          <View
            key={index}
            style={{
              height: '100%',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
            }}
          >
            <ThemedText type="title">Page {page}</ThemedText>
            <Pressable onPress={addNewPage}>
              <ThemedText type="link">
                Add new page and navigate to it
              </ThemedText>
            </Pressable>
          </View>
        ))}
      </PagerView>
    </View>
  );
}
