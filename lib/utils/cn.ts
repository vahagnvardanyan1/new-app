type CnInput = string | null | undefined | false;

export const cn = (...inputs: CnInput[]) => inputs.filter(Boolean).join(" ");


