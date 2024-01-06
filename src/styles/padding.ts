import { baseSizes, TBaseSizes } from './baseSizes';

// Define a type for the nested padding styles
type PaddingDirection = 'pt' | 'pb' | 'pl' | 'pr' | 'px' | 'py' | 'p';
type NestedPaddingStyles = {
  [key in PaddingDirection]: {
    [size in keyof TBaseSizes]: any;
  };
};

// Initialize each direction with default values
const initializeDirection = () => {
  const initialObject: { [size in keyof TBaseSizes]: any } = {} as any;
  Object.keys(baseSizes).forEach(sizeKey => {
    initialObject[sizeKey as keyof TBaseSizes] = {};
  });
  return initialObject;
};

// Create the nested stylesheet dynamically
const paddingStyles: NestedPaddingStyles = {
  pt: initializeDirection(),
  pb: initializeDirection(),
  pl: initializeDirection(),
  pr: initializeDirection(),
  px: initializeDirection(),
  py: initializeDirection(),
  p: initializeDirection(),
};

// Populate each direction with specific styles
Object.keys(baseSizes).forEach(sizeKey => {
  const size = sizeKey as keyof TBaseSizes;

  // Top, Bottom, Left, Right
  paddingStyles.pt[size] = { paddingTop: baseSizes[size] };
  paddingStyles.pb[size] = { paddingBottom: baseSizes[size] };
  paddingStyles.pl[size] = { paddingLeft: baseSizes[size] };
  paddingStyles.pr[size] = { paddingRight: baseSizes[size] };

  // Horizontal and Vertical
  paddingStyles.px[size] = { paddingLeft: baseSizes[size], paddingRight: baseSizes[size] };
  paddingStyles.py[size] = { paddingTop: baseSizes[size], paddingBottom: baseSizes[size] };

  // All sides
  paddingStyles.p[size] = { padding: baseSizes[size] };
});

export default paddingStyles;