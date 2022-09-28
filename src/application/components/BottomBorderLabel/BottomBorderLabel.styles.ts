import { createStyles } from '@mantine/core';

export const useBottomBorderLabelStyles = createStyles(
  (
    theme,
    { top, left, right, bottom }: { top?: number; left?: number; right?: number; bottom?: number }
  ) => ({
    label: {
      position: 'absolute',
      top: top ?? 'unset',
      left: left ?? '0',
      bottom: bottom ?? '0',
      right: right ?? 'unset',
      borderBottom: `4px solid ${theme.colors.primary[1]}`,
      padding: '4px 1rem 0',
      background: theme.colors.grays[0],
      fontSize: theme.fontSizes.xs,
      cursor: 'pointer',
    },
  })
);
