declare module "gpdesign" {
  import { FC, ReactNode } from "react";

  // Definizione delle proprietà del componente Text
  export interface TextProps {
    children: ReactNode; // Contenuto del componente
    className?: string; // Classe CSS opzionale
    tag?: string; // Tag HTML da utilizzare
    fontWeight?: number | string; // Peso del font
    fontStyle?: string; // Stile del font
    textDecoration?: string; // Decorazione del testo
    fontSize?: string; // Dimensione del font
    color?: string; // Colore del testo
    lineHeight?: string; // Altezza della linea
    textAlign?: string; // Allineamento del testo
    textTransform?: string; // Trasformazione del testo
    noParsed?: boolean; // Flag per il testo non elaborato
    fontFamily?: string; // Famiglia del font
    marginBottom?: string; // Margine inferiore
  }

  // Dichiarazione del componente Text
  export const Text: FC<TextProps>;
}
