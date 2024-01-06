# StyleSuperset (Work in Progress)

This library provides a comprehensive set of dynamic styles for React Native applications, enabling consistent and scalable UI development.
It includes styles for padding, margin, gap, font size, border width, and border radius, all based on a design token system.

## Features

- **Design Token System**: Utilizes a base size to generate a wide range of sizes.
- **No Dependencies**: No additional dependencies required - uses React Native's built-in StyleSheet
- **Works with Expo**: No-native dependencies

## Installation

To install the library, run:

```bash
npm install stylesuperset
```

or

```bash
yarn add stylesuperset
```

# Usage example

```jsx
import React from 'react';
import { View, Text } from 'react-native';
import styles from 'stylesuperset';

const MyComponent = () => (
  <View style={[styles.padding.t['4'], styles.margin.b['2']]}>
    <Text style={styles.font['3']}>Hello World</Text>
  </View>
);
```

### Using short-hand properties
Note the imports below are from this library, not React Native.
```tsx
import { Text } from 'stylesuperset';
const MyComponent = () => (
  <Text fontSize={'$4.75'} style={{ color: 'blue' }}>
    Sample Text
  </Text>
);
```

```tsx
import { View } from 'stylesuperset';
const MyComponent = () => (
  <View 
    mt={'$2'} // shorthand
    marginBottom={'$3'} // long-form
    paddingTop={'$4'} // long-form
    pb={'$5'} // shorthand
  >
    {/* Your content here */}
  </View>
);
```

# Custom styles

### Sizes

When generating custom sizes, the `xs` key is the smallest value (even if it's negative), and the `xl` key is the largest value. The `md` keys is the value in the middle of the range, `sm` is half-way between `xs` and `md`, and `lg` is half-way between `md` and `xl`.

#### Examples

Using the React Native `View` component with the `style` prop:
```tsx
import { View } from 'react-native';
import { functions } from 'stylesuperset';

const sizes = functions.createSizeStyles({
  baseSize: 0.25,   // The frequency of the size scale - e.g. 0.25 will generate sizes 0, 0.25, 0.5, 0.75, 1, 1.25, etc.
  minSize: -20,     // The minimum size to generate
  maxSize: 20,      // The maximum size to generate
})

const MyComponent = () => {
  return (
    <View style={{ paddingTop: sizes[4.75] }}>
      {/* Your content here */}
    </View>
  )
}
```
You can use the `sizes` in a react native StyleSheet if you prefer (as opposed to inline styles).

Using the stylesuperset `View` component with shorthand prop:
```tsx
import { View, functions } from 'stylesuperset';

const sizes = functions.createSizeStyles({
  baseSize: 0.25,   // The frequency of the size scale - e.g. 0.25 will generate sizes 0, 0.25, 0.5, 0.75, 1, 1.25, etc.
  minSize: -20,     // The minimum size to generate
  maxSize: 20,      // The maximum size to generate
})

const MyComponent = () => {
  return (
    <View pt={"$4.75"}>
      {/* Your content here */}
    </View>
  )
}
```