/// <reference types="react" />
import { Options } from "react-copy-to-clipboard";
import { DefaultProps } from "../../shared";
export type CopyToClipboardProps = {
    children: React.ReactChild;
    textToCopy: string;
    onCopy?: (text: string, result: boolean) => void;
    options?: Options | undefined;
    showNotifica?: boolean;
    notificationText?: string;
} & Partial<DefaultProps>;
