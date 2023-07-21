import { TouchableOpacity } from 'react-native'
import { createText, SpacingProps,VariantProps, createRestyleComponent, createVariant, spacing } from '@shopify/restyle';
import { ThemeProps } from '../theme';

const Text = createText<ThemeProps>();

type BoxCustomProps = SpacingProps<ThemeProps> & VariantProps<ThemeProps, 'buttonVariants'>

const Box = createRestyleComponent<BoxCustomProps, ThemeProps>([
    spacing,
    createVariant({ themeKey: 'buttonVariants' })
])

type Props = BoxCustomProps & {
    title: string;
}

export function Button(props : Props)
{
    return (
        <TouchableOpacity style={{flex: 1}} activeOpacity={0.7}>
            <Box {...props}>
                <Text variant={props.variant === "primary" ? "button_primary" : "button_secondary"}>
                    {props.title}
                </Text>
            </Box>
        </TouchableOpacity>
    )
}