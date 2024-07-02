import { Text as NativeText, TextProps as NativeTextProps } from "react-native";
import { THEME } from "../../theme";

type TextProps = NativeTextProps & {};

export default function Text({ style, ...props }: TextProps) {
  return (
    <NativeText style={[{ color: THEME.colors.light }, style]} {...props} />
  );
}
