# react-native-pager-view-dynamic-page-mcve

A minimal complete verifiable example of a problem in [React Native Pager View](https://github.com/callstack/react-native-pager-view) where adding a new page and setting it as the active page does not work.

## Steps to reproduce

After the app is built and opened:

1. Press "Add new page and navigate to it".

## Expected behaviour

A new page is added and navigated to.

## Actual behaviour

The new page is added but it cannot be navigated to.

## Notes

Whether the app is using React Native's new architecture seems to be significant. Disabling it resolves the issue, see the `working-example` branch.

The following change also resolves the issue:

```diff
diff --git a/app/(tabs)/index.tsx b/app/(tabs)/index.tsx
index 01723ce..c932842 100644
--- a/app/(tabs)/index.tsx
+++ b/app/(tabs)/index.tsx
@@ -16,8 +16,10 @@ export default function HomeScreen() {
   };

   const onNewPage = () => {
-    console.log('Handle new page');
-    pagerViewRef.current?.setPage(pages.length - 1);
+    setTimeout(() => {
+      console.log('Handle new page');
+      pagerViewRef.current?.setPage(pages.length - 1);
+    }, 0);
   };
```
