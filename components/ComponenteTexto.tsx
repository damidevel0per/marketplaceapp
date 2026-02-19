import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import { useThemeColor } from '@/hooks/use-theme-color';
import { Colores } from '@/app/_layout';
import { useTheme } from 'react-native-paper';

enum ComponenteTextoFontFamily {
  OPEN_SANS = "Open Sans",
  OPENS_SANS_MEDIUM = "OpenSansMedium",
  OPEN_SAMS_BOLD = "OpenSansBold",
}

enum ComponenteTextoType {
  DEFAULT = 'default',
  TITLE = 'title',
  MEDIUM = 'medium',
  SUBTITLE = 'subtitle',
  LINK = 'link',
}

interface ComponenteTextoProps extends TextProps {
  type?: `${ComponenteTextoType}`;
  color?: keyof Colores;
}

/**
 * Un componente funcional que renderiza un elemento `Text` estilizado con
 * tipo de texto, color y estilos adicionales personalizables.
 *
 * @param {object} props - Las propiedades pasadas al componente.
 * @param {React.ReactNode} props.children - El contenido que se mostrará dentro del componente `Text`.
 * @param {ComponenteTextoType} [props.type=ComponenteTextoType.DEFAULT] -
 * El tipo de estilo de texto a aplicar.
 * Las opciones incluyen `DEFAULT`, `TITLE`, `MEDIUM`, `SUBTITLE` y `LINK`.
 * @param {object} [props.style] - Estilos personalizados adicionales a aplicar al componente `Text`.
 * @param {string} [props.color='onSurface'] -
 * La clave de color a utilizar para el texto, obtenida de los colores del tema.
 * @param {object} [props.rest] - Propiedades adicionales que se propagarán al componente `Text`.
 *
 * @returns {JSX.Element} Un componente `Text` estilizado con las propiedades especificadas.
 */

export default function ComponenteTexto({
  children,
  type = ComponenteTextoType.DEFAULT,
  style,
  color = 'onSurface',
  ...rest
}: ComponenteTextoProps) {

  const {colors} = useTheme();

  return (
    <Text
      style={[
        { color: colors[color] as any},
        type === ComponenteTextoType.DEFAULT ? styles.default : undefined,
        type === ComponenteTextoType.TITLE ? styles.title : undefined,
        type === ComponenteTextoType.MEDIUM ? styles.medium : undefined,
        type === ComponenteTextoType.SUBTITLE ? styles.subtitle : undefined,
        type === ComponenteTextoType.LINK ? styles.link : undefined,
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
}


const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: ComponenteTextoFontFamily.OPEN_SANS,
  },
  medium: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: ComponenteTextoFontFamily.OPENS_SANS_MEDIUM,
  },
  title: {
    fontSize: 36,
    lineHeight: 36,
    fontFamily: ComponenteTextoFontFamily.OPEN_SAMS_BOLD,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: ComponenteTextoFontFamily.OPEN_SAMS_BOLD,
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
    fontFamily: ComponenteTextoFontFamily.OPEN_SANS,
  },
});
