import { View as NativeView, ViewProps as NativeViewProps } from "react-native";
import { THEME } from "../../theme";

type ViewProps = NativeViewProps & {};

export default function View({ style, ...props }: ViewProps) {
  return (
    <NativeView
      style={[{ backgroundColor: THEME.colors["grey-green"] }, style]}
      {...props}
    />
  );
}
